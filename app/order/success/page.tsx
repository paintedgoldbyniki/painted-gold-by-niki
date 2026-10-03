import Link from "next/link";
import { SiteNav } from "../../site-components";

export default function OrderSuccess() {
  return <main className="order-result">
    <SiteNav dark />
    <section>
      <span>ORDER RECEIVED</span>
      <h1>Your edition is now in motion.</h1>
      <p>A confirmation receipt has been sent to your email. Your print will be prepared to order and tracking will follow when it ships.</p>
      <Link href="/collection">Return to the collection</Link>
    </section>
  </main>;
}
