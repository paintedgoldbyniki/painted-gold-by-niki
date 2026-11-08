import { NextResponse } from "next/server";
import { getPrintSelection } from "../../../lib/print-catalog";
import { getStripe } from "../../../lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { artworkId, variantId, quantity = 1 } = await request.json();
    const selection = getPrintSelection(String(artworkId), String(variantId));
    const safeQuantity = Math.max(1, Math.min(5, Number(quantity) || 1));
    if (!selection) return NextResponse.json({ error: "This print option is unavailable." }, { status: 400 });
    // Never mix real card payments with simulated print fulfilment.
    // Test checkout must be explicitly enabled on a Vercel preview deployment only.
    const stripeKey = process.env.STRIPE_SECRET_KEY || "";
    const prodigiKey = process.env.PRODIGI_API_KEY || "";
    const isPreviewTest = process.env.VERCEL_ENV === "preview"
      && process.env.PRINT_TEST_CHECKOUT_ENABLED === "true"
      && process.env.PRODIGI_ENVIRONMENT === "sandbox"
      && stripeKey.startsWith("sk_test_");
    const isLive = process.env.VERCEL_ENV === "production"
      && process.env.PRODIGI_ENVIRONMENT === "live"
      && stripeKey.startsWith("sk_live_");
    if (!selection.variant.prodigiSku || !prodigiKey || !process.env.STRIPE_WEBHOOK_SECRET || !(isPreviewTest || isLive)) {
      return NextResponse.json({ error: "Online print checkout is temporarily unavailable. Please contact the studio to order." }, { status: 503 });
    }
    // Pricing excludes shipping; charge must be configured and disclosed at checkout.
    const shippingCad = Number(process.env.PRINT_SHIPPING_CAD);
    if (!Number.isFinite(shippingCad) || shippingCad < 0 || !Number.isInteger(shippingCad * 100)) return NextResponse.json({ error: "Shipping is not configured for online checkout yet." }, { status: 503 });

    // Print production must use a dedicated full-resolution asset, never the gallery preview.
    let assetUrl: URL;
    try {
      assetUrl = new URL(selection.artwork.printAssetUrl || "");
      if (assetUrl.protocol !== "https:" || assetUrl.username || assetUrl.password) throw new Error("Invalid print asset");
    } catch {
      return NextResponse.json({ error: "This artwork is not yet ready for printing." }, { status: 503 });
    }
    const origin = new URL(request.url).origin;
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      
      customer_creation: "always",
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["CA", "US", "GB", "AU", "NZ"] },
      phone_number_collection: { enabled: true },
      line_items: [{
        quantity: safeQuantity,
        price_data: {
          currency: "cad",
          unit_amount: selection.variant.priceCad * 100,
          product_data: {
            name: `${selection.artwork.title} — ${selection.variant.label}`,
            description: "Museum-quality fine-art print, made to order.",
            images: [`${origin}${selection.artwork.image}`],
          },
        },
      }],
      shipping_options: [{ shipping_rate_data: { type: "fixed_amount", display_name: "Standard print shipping", fixed_amount: { amount: Math.round(shippingCad * 100), currency: "cad" } } }],
      metadata: {
        artwork_id: selection.artwork.id,
        artwork_title: selection.artwork.title,
        variant_id: selection.variant.id,
        variant_label: selection.variant.label,
        prodigi_sku: selection.variant.prodigiSku || "PENDING",
        asset_url: assetUrl.toString(),
        quantity: String(safeQuantity),
      },
      success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/acquire?checkout=cancelled`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout creation failed", error);
    const message = error instanceof Error && error.message.includes("not configured")
      ? "Secure checkout is being connected. Please check back shortly."
      : "Checkout could not be started. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
