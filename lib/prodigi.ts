type ShippingDetails = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: {
    line1?: string | null;
    line2?: string | null;
    city?: string | null;
    state?: string | null;
    postal_code?: string | null;
    country?: string | null;
  } | null;
};

type ProdigiOrderInput = {
  checkoutSessionId: string;
  artworkTitle: string;
  prodigiSku: string;
  quantity: number;
  assetUrl: string;
  customer: ShippingDetails;
};

export async function submitProdigiOrder(input: ProdigiOrderInput) {
  const apiKey = process.env.PRODIGI_API_KEY;
  if (!apiKey) throw new Error("Prodigi is not configured yet.");
  const address = input.customer.address;
  if (!input.customer.name || !input.customer.email || !address?.line1 || !address.city || !address.postal_code || !address.country) {
    throw new Error("The paid order is missing required shipping information.");
  }

  const sandbox = process.env.PRODIGI_ENVIRONMENT !== "live";
  const endpoint = sandbox ? "https://api.sandbox.prodigi.com/v4.0/Orders" : "https://api.prodigi.com/v4.0/Orders";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
    body: JSON.stringify({
      merchantReference: input.checkoutSessionId,
      shippingMethod: "Budget",
      recipient: {
        name: input.customer.name,
        email: input.customer.email,
        phoneNumber: input.customer.phone || undefined,
        address: {
          line1: address.line1,
          line2: address.line2 || undefined,
          postalOrZipCode: address.postal_code,
          countryCode: address.country,
          townOrCity: address.city,
          stateOrCounty: address.state || undefined,
        },
      },
      items: [{
        merchantReference: `${input.checkoutSessionId}-1`,
        sku: input.prodigiSku,
        copies: input.quantity,
        sizing: "fillPrintArea",
        assets: [{ printArea: "default", url: input.assetUrl }],
        attributes: { title: input.artworkTitle },
      }],
    }),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) throw new Error(`Prodigi rejected the order (${response.status}): ${JSON.stringify(payload)}`);
  return payload;
}
