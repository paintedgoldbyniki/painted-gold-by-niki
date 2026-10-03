import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Stripe is not configured yet.");
  return new Stripe(key, { apiVersion: "2026-08-26.dahlia", typescript: true });
}
