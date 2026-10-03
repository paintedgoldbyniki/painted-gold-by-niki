import Link from "next/link";
import { SiteFooter, SiteNav } from "./site-components";

const works = [
 {no:"01",title:"Golden Poise",line:"Softness carried as strength.",image:"/artworks/golden-poise.png",price:"From $95"},
 {no:"02",title:"Bridal Legacy",line:"The ceremony of becoming.",image:"/artworks/bridal-legacy.png",price:"From $95"},
 {no:"03",title:"Quiet Elegance",line:"Presence needs no announcement.",image:"/artworks/quiet-elegance.png",price:"From $95"},
 {no:"04",title:"Crown Within",line:"Lineage worn like a crown.",image:"/artworks/crown-within.png",price:"From $95"},
];

export default function Home(){
 return <main className="cinema-home">
  <SiteNav dark/>
  <section className="cinema-hero">
   <img className="cinema-hero-bg" src="/artworks/golden-poise.png" alt="Golden Poise by Niki"/>
   <div className="cinema-shade"/>
   <div className="cinema-hero-copy">
    <p>THE PORTRAIT COLLECTION · 2026</p>
    <h1>Wear your story.<br/><em>Own the feeling.</em></h1>
    <span>Portraits of heritage, power and becoming—painted once as originals, released selectively as fine-art prints.</span>
    <div><Link href="/acquire" className="cinema-gold-btn">Shop the collection</Link><Link href="/stories" className="cinema-ghost-link">Discover the stories</Link></div>
   </div>
   <div className="cinema-hero-note"><span>01 / 09</span><b>GOLDEN POISE</b><small>ORIGINAL · PRINT EDITION AVAILABLE</small></div>
   <div className="cinema-scroll">SCROLL TO ENTER <i/></div>
  </section>

  <section className="cinema-manifesto">
   <span>PAINTED GOLD BY NIKI</span>
   <p>Not decoration.<br/><em>A piece of who you are.</em></p>
   <small>Nine portraits shaped by ceremony, memory and the details through which a woman carries home.</small>
  </section>

  <section className="cinema-featured">
   <header><div><span>THE FIRST REVEAL</span><h2>Four stories.<br/>Made to stay with you.</h2></div><p>Meet the first works from the nine-piece collection. Each is available as a museum-quality print; every original canvas remains one of one.</p></header>
   <div className="cinema-work-grid">{works.map((w,i)=><article className="cinema-work" key={w.no}>
    <Link href={`/acquire#work-${w.no}`} className="cinema-work-art"><img src={w.image} alt={`${w.title} by Niki`}/><span>VIEW PRINT</span></Link>
    <div className="cinema-work-info"><span>{w.no}</span><div><h3>{w.title}</h3><p>{w.line}</p></div><strong>{w.price}</strong></div>
   </article>)}</div>
   <Link href="/acquire" className="cinema-all">SHOP ALL AVAILABLE PRINTS <span>04 RELEASED</span></Link>
  </section>

  <section className="cinema-room">
   <div className="cinema-room-image"><img src="/rooms/quiet-elegance.png" alt="Quiet Elegance fine-art print shown in a room"/><span>IN YOUR SPACE</span></div>
   <div className="cinema-room-copy"><span>ART THAT LIVES WITH YOU</span><h2>From canvas<br/>to your walls.</h2><p>Archival fine-art prints preserve the depth, detail and gold-toned character of the original work—made for the rooms where your own story unfolds.</p><ul><li>Museum-quality print finish</li><li>Three considered sizes</li><li>Printed and delivered to order</li></ul><Link href="/acquire" className="cinema-gold-btn dark">Choose your print</Link></div>
  </section>

  <section className="cinema-story">
   <div className="cinema-story-copy"><span>STORY 02 · BRIDAL LEGACY</span><blockquote>“The stillness before<br/>a new chapter.”</blockquote><p>Crimson, gold and inherited ritual. A portrait of the moment a woman steps forward while carrying generations with her.</p><div><Link href="/stories#story-02">Read her story</Link><Link href="/acquire#work-02">Collect the print</Link></div></div>
   <img src="/artworks/bridal-legacy.png" alt="Bridal Legacy by Niki"/>
  </section>

  <section className="cinema-original">
   <p>ONE CANVAS. ONE COLLECTOR.</p><h2>The original<br/>can only belong to one.</h2><span>Original paintings are privately placed. Contact the studio to ask about availability or arrange a viewing.</span><Link href="/acquire#originals">Enquire about an original</Link>
  </section>
  <SiteFooter/>
 </main>
}
