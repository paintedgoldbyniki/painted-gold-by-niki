import Link from "next/link";
import { SiteFooter, SiteNav } from "./site-components";

const works = [
  { no: "01", title: "Golden Poise", note: "The art of composure", image: "/artworks/golden-poise.png" },
  { no: "02", title: "Bridal Legacy", note: "The ceremony of becoming", image: "/artworks/bridal-legacy.png" },
  { no: "03", title: "Quiet Elegance", note: "The language of restraint", image: "/artworks/quiet-elegance.png" },
  { no: "04", title: "Crown Within", note: "The architecture of identity", image: "/artworks/crown-within.png" },
  { no: "05", title: "Chapter V", note: "To be revealed", image: null },
  { no: "06", title: "Chapter VI", note: "To be revealed", image: null },
  { no: "07", title: "Chapter VII", note: "To be revealed", image: null },
  { no: "08", title: "Chapter VIII", note: "To be revealed", image: null },
  { no: "09", title: "Chapter IX", note: "To be revealed", image: null },
];

export default function Home() {
  return <main className="new-home">
    <SiteNav />
    <section className="new-hero">
      <div className="new-hero-copy"><p className="new-kicker">THE PORTRAIT COLLECTION · 2026</p><h1>Portraits that<br/>carry <em>home.</em></h1><p className="new-intro">An evolving collection of nine original paintings by Niki—rooted in memory, heritage and the quiet language of adornment.</p><div className="new-actions"><Link className="new-primary" href="/collection">Explore the collection</Link><Link className="new-text-link" href="/acquire">Shop fine-art prints</Link></div></div>
      <div className="new-hero-art"><figure className="new-main-frame"><img src="/artworks/golden-poise.png" alt="Golden Poise, an original portrait by Niki"/><figcaption><span>01</span><b>Golden Poise</b><small>Original painting · selected print edition</small></figcaption></figure><div className="new-hero-index"><span>01</span><i/><span>09</span></div></div>
    </section>
    <section className="new-proof" aria-label="Collection details"><p><span>09</span> works in the collection</p><p><span>01/01</span> every original canvas</p><p><span>Vancouver</span> studio and private viewings</p></section>
    <section className="new-collection">
      <header className="new-section-head"><div><p className="new-kicker">CURRENT COLLECTION</p><h2>Nine stories,<br/>painted one at a time.</h2></div><div><p>Four works are currently revealed. Each original exists only once; selected paintings are offered as archival fine-art prints.</p><Link className="new-text-link" href="/collection">View all works</Link></div></header>
      <div className="new-work-grid">{works.map(work=><article className={`new-work ${work.image?"is-live":"is-coming"}`} key={work.no}>{work.image?<Link className="new-work-image" href={`/stories#story-${work.no}`}><img src={work.image} alt={`${work.title}, painting by Niki`}/><span>Read its story</span></Link>:<div className="new-work-image new-placeholder"><span>{work.no}</span><small>COMING SOON</small></div>}<div className="new-work-meta"><span>{work.no}</span><div><h3>{work.title}</h3><p>{work.note}</p></div></div></article>)}</div>
    </section>
    <section className="new-feature-story"><div className="new-feature-image"><img src="/artworks/bridal-legacy.png" alt="Bridal Legacy by Niki"/><span>02 · BRIDAL LEGACY</span></div><div className="new-feature-copy"><p className="new-kicker">STORY FROM THE CANVAS</p><blockquote>“Crimson, gold and the stillness before a new chapter.”</blockquote><p>A portrait honouring the rituals that connect one woman to the generations before her. Every detail is painted as an act of remembrance.</p><Link className="new-text-link light" href="/stories#story-02">Read the full story</Link></div></section>
    <section className="new-artist"><div className="new-artist-copy"><p className="new-kicker">THE ARTIST</p><h2>Painted by Niki.</h2><p>Niki’s portraits hold cultural detail with intimacy. Gold, fabric, jewellery and gesture become a visual language for identity, inheritance and self-possession.</p><Link className="new-text-link" href="/artist">Meet the artist</Link></div><figure><img src="/rooms/golden-poise.png" alt="Golden Poise displayed in an interior"/><figcaption>IN THE HOME · GOLDEN POISE</figcaption></figure></section>
    <section className="new-collect"><div><p className="new-kicker">COLLECT THE WORK</p><h2>Original presence.<br/>Made personal.</h2></div><p>Choose a museum-quality print online, or contact the studio to arrange a private viewing of an original one-of-one canvas.</p><div className="new-collect-actions"><Link className="new-primary dark" href="/acquire">Shop prints</Link><Link className="new-text-link" href="/acquire#originals">Enquire about originals</Link></div></section>
    <SiteFooter />
  </main>;
}
