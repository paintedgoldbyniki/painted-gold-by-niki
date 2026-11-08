# Print store setup (not live yet)

This branch keeps live checkout disabled until all actual manufacturing prerequisites are verified. Do not paste API secrets into GitHub or chat.

## Prodigi product setup
1. In the [Prodigi dashboard](https://dashboard.prodigi.com/), locate API settings and obtain a **sandbox** API key first.
2. Pick the correct fine-art paper product and catalogue SKU for each intended size (12x16, 18x24, 24x32 inches). Do not assume every size is sold by the same product. Confirm paper, aspect ratio, market availability, pricing, fulfilment countries and shipping using Prodigi catalogue/quote tooling.
3. Export all nine originals at an appropriate resolution and colour profile for the chosen material and size. Host files at stable, publicly fetchable HTTPS URLs. Do not use SVG or small gallery thumbnails as print production assets.
4. Set environment variables server-side in Vercel, for the intended environment only.

## Required existing environment variables

- `STRIPE_SECRET_KEY` — Stripe secret for the corresponding test/live environment.
- `STRIPE_WEBHOOK_SECRET` — signing secret for `/api/webhooks/stripe` (Stripe `checkout.session.completed`, `checkout.session.async_payment_succeeded`).
- `PRODIGI_API_KEY` — Prodigi sandbox or live key matching `PRODIGI_ENVIRONMENT`.
- `PRODIGI_ENVIRONMENT` — existing implementation uses `live` for paid orders, anything else routes to the v4 sandbox.
- `PRODIGI_SKU_12X16`, `PRODIGI_SKU_18X24`, `PRODIGI_SKU_24X32` — Prodigi catalogue SKUs validated for exact sizes and materials.
- `PRINT_SHIPPING_CAD` — displayed fixed shipping fee, but verify shipping quotes for every allowed destination first; fixed worldwide rate is not suitable without validation.

## Nine separate print-resolution assets

- `PRINT_ASSET_HER_GRACE`
- `PRINT_ASSET_HER_LEGACY`
- `PRINT_ASSET_HER_ALLURE`
- `PRINT_ASSET_HER_SOVEREIGNTY`
- `PRINT_ASSET_HER_ROOTS`
- `PRINT_ASSET_HER_SPIRIT`
- `PRINT_ASSET_HER_COURAGE`
- `PRINT_ASSET_HER_REVERENCE`
- `PRINT_ASSET_HER_UNAPOLOGETIC`

Each must be an actual full-resolution print file URL accessible to Prodigi, not a store mockup. Current production asset selection will reject checkout without it.

## Test checklist

- Keep production unset / disabled. Do not put live keys in a preview branch.
- Validate the chosen SKUs and the exported print files through Prodigi's sandbox.
- Confirm the Stripe webhook signature and paid-only condition, verify one webhook retry creates at most one Prodigi order (stable idempotency key), and review Prodigi dashboard for that order.
- Run Stripe **test mode** checkout and confirm no money changes hands. The existing checkout route intentionally requires `PRODIGI_ENVIRONMENT=live`, so it cannot currently run this integration test end-to-end against Prodigi sandbox. Implement a separate explicit test-mode gate before calling the preview test ready.
- Verify customer emails, taxes, refunds, shipping quotes (Canada, US, UK, Australia, NZ), file aspect ratios, and tracking before switching production to live.

**Do not merge or enable live checkout until the above checks pass.** Prodigi v4 supports `idempotencyKey` in the JSON order body. Prodigi v5 is recommended for new integrations and would require a separate schema and endpoint migration.