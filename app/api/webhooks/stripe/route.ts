import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "../../../../lib/stripe";
import { submitProdigiOrder } from "../../../../lib/prodigi";

export const runtime = "nodejs";

async function fulfill(session: Stripe.Checkout.Session) {
  if (session.payment_status !== "paid") return;
  const sku = session.metadata?.prodigi_sku;
  if (!sku || sku === "PENDING") {
    console.warn("Paid order held: Prodigi SKU is not configured", session.id);
    return;
  }
  const collected = (session as Stripe.Checkout.Session & {
    collected_information?: { shipping_details?: { name?: string | null; address?: Stripe.Address | null } };
    shipping_details?: { name?: string | null; address?: Stripe.Address | null };
  });
  const shipping = collected.collected_information?.shipping_details || collected.shipping_details;
  await submitProdigiOrder({
    checkoutSessionId: session.id,
    artworkTitle: session.metadata?.artwork_title || "Painted Gold print",
    prodigiSku: sku,
    quantity: Number(session.metadata?.quantity || 1),
    assetUrl: session.metadata?.asset_url || "",
    customer: {
      name: shipping?.name || session.customer_details?.name,
      email: session.customer_details?.email,
      phone: session.customer_details?.phone,
      address: shipping?.address || session.customer_details?.address,
    },
  });
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) return NextResponse.json({ error: "Webhook is not configured." }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(await request.text(), signature, secret);
  } catch (error) {
    console.error("Invalid Stripe webhook signature", error);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
      await fulfill(event.data.object as Stripe.Checkout.Session);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Order fulfillment failed", error);
    return NextResponse.json({ error: "Fulfillment failed." }, { status: 500 });
  }
}
