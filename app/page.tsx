import Image from "next/image";
import Link from "next/link";
import { herWorks } from "./her-data";
import { SiteNav, SiteFooter, StudioNewsletter } from "./site-components";

export default function Home() {
 return <main className="kf-home"><SiteNav/>
  <section className="kf-hero">
   <div className="kf-hero-photo"><Image src="/editorial/home-hero.webp" alt="Niki with paintings from her HER collection" fill sizes="100vw" priority/></div>
   <div className="kf-hero-cover"><span>PAINTED GOLD BY NIKI · COLLECTION NO. 01</span><h1>H E R<span>.</span></h1><p>A portrait of strength, grace and the stories women carry.</p><Link href="/collection">DISCOVER THE COLLECTION <b>↗</b></Link></div>
   <span className="kf-hero-corner">NINE PORTRAITS<br/>A WORLD OF STORIES</span>
  </section>
  <section className="kf-marquee" aria-label="Collection themes"><span>ART · CULTURE · WOMANHOOD · GOLD · HER · ART · CULTURE · WOMANHOOD</span></section>
  <section className="kf-intro"><span className="kf-eyebrow">A NOTE FROM THE STUDIO</span><h2>More than a painting.<br/><em>A story to hold.</em></h2><p>Nine women. Nine expressions of identity, belonging and power. HER is an exploration of the beauty we inherit, the strength we grow into and the gold that has always lived within us.</p></section>
  <section className="kf-feature-grid">
   <Link className="kf-feature kf-feature-large" href="/collection"><div className="kf-feature-image"><Image src={herWorks[3].image} alt="Her Sovereignty, one of the nine original portraits" fill sizes="(max-width:800px) 100vw, 58vw"/></div><div className="kf-feature-caption"><div><span>01 / THE ARTWORK</span><h3>Original paintings</h3></div><b>EXPLORE ↗</b></div></Link>
   <Link className="kf-feature" href="/acquire"><div className="kf-feature-image"><Image src={herWorks[1].image} alt="Her Legacy artwork available as a fine art print" fill sizes="(max-width:800px) 100vw, 40vw"/></div><div className="kf-feature-caption"><div><span>02 / THE EDITIONS</span><h3>Fine-art prints</h3></div><b>SHOP ↗</b></div></Link>
  </section>
  <section className="kf-artist-teaser"><div className="kf-artist-photo"><Image src="/editorial/artist-intro.webp" alt="Niki, artist and founder of Painted Gold" fill sizes="(max-width:800px) 100vw, 52vw"/></div><div className="kf-artist-text"><span className="kf-eyebrow">MEET THE ARTIST</span><h2>In the studio<br/>with <em>Niki.</em></h2><p>Behind every portrait is a story worth telling. Discover the artist, her love of portraiture and the inspiration behind the gold.</p><Link href="/artist">MORE ABOUT NIKI <b>↗</b></Link></div></section>
  <section className="niki-photo-story"><div className="niki-photo-story-heading"><span className="kf-eyebrow">INSIDE THE STUDIO · 2026</span><h2>A closer look<br/>at <em>the artist.</em></h2><p>Moments between the portraits: light on the canvas, the details in gold, and the woman bringing HER to life.</p></div><div className="niki-photo-story-grid"><figure><Image src="/editorial/gallery-editorial.webp" alt="Niki with her original portrait paintings" fill sizes="(max-width:800px) 100vw, 55vw"/><figcaption>01 / THE COLLECTION</figcaption></figure><figure><Image src="/editorial/artist-process.webp" alt="Niki painting in her studio" fill sizes="(max-width:800px) 100vw, 40vw"/><figcaption>02 / THE PROCESS</figcaption></figure></div><Link href="/artist" className="niki-photo-story-link">EXPLORE NIKI'S STORY ↗</Link></section>
  <section className="kf-exhibition"><header><span className="kf-eyebrow">THE HER COLLECTION · 2026</span><h2>Women of <em>HER.</em></h2><Link href="/collection">VIEW THE COLLECTION ↗</Link></header><div className="kf-exhibition-grid">{[0,4,8].map(i=><Link href={`/collection#chapter-${herWorks[i].no}`} key={herWorks[i].no}><div><Image src={herWorks[i].image} alt={herWorks[i].title} fill sizes="(max-width:800px) 75vw, 32vw"/></div><h3>{herWorks[i].title}</h3><span>CHAPTER {herWorks[i].no} / 09</span></Link>)}</div></section>
  <StudioNewsletter/>
  <SiteFooter/>
 </main>
}
