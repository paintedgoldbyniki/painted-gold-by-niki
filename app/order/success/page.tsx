import Link from "next/link";
import { SiteFooter, SiteNav } from "../../site-components";

export default function OrderSuccess() {
  return <main className="order-result">
    <SiteNav dark />
    <section>
      <span>ORDER RECEIVED</span>
      <h1>Thank you for your order.</h1>
      <p>If your payment completed successfully, Stripe will email your payment receipt. The studio will confirm fulfilment and shipping separately. Contact the studio if you need assistance.</p>
      <Link href="/collection">Return to the collection</Link>
    </section><SiteFooter/>
  </main>;
}
