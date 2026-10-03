"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand, SiteFooter, SiteNav } from "./site-components";

const works = [
  { no:"01", title:"Golden Poise", chapter:"The art of composure", story:"Softness carried as strength—heritage held close, each leaf of gold catching light like a memory passed from one woman to the next.", image:"/artworks/golden-poise.png" },
  { no:"02", title:"Bridal Legacy", chapter:"The ceremony of becoming", story:"Crimson, gold and the stillness before a new chapter. A portrait honouring the rituals that connect one woman to generations before her.", image:"/artworks/bridal-legacy.png" },
  { no:"03", title:"Quiet Elegance", chapter:"The language of restraint", story:"Presence needs no announcement. An unfurled fan, a lowered gaze and ornaments painted one deliberate glint at a time.", image:"/artworks/quiet-elegance.png" },
  { no:"04", title:"Crown Within", chapter:"The architecture of identity", story:"Braids rise like architecture—beauty not as decoration, but as lineage, protection and self-possession.", image:"/artworks/crown-within.png" },
  { no:"05", title:"Untitled V", chapter:"The collection continues", story:"A new original in the portrait series.", image:null },
  { no:"06", title:"Untitled VI", chapter:"The collection continues", story:"A new original in the portrait series.", image:null },
  { no:"07", title:"Untitled VII", chapter:"The collection continues", story:"A new original in the portrait series.", image:null },
  { no:"08", title:"Untitled VIII", chapter:"The collection continues", story:"A new original in the portrait series.", image:null },
  { no:"09", title:"Untitled IX", chapter:"The collection continues", story:"A new original in the portrait series.", image:null },
];

export default function Home(){
 const [entered,setEntered]=useState(false);
 useEffect(()=>{const t=setTimeout(()=>setEntered(true),1900);return()=>clearTimeout(t)},[]);
 return <main className="site-v2">
  <div className={`loader compact-loader ${entered?"is-gone":""}`} aria-hidden={entered}><div className="loader-grain"/><Brand/><span>NINE STORIES · ONE COLLECTION</span></div>
  <SiteNav/>

  <section className="editorial-hero">
   <div className="hero-copy-small"><span>THE PORTRAIT COLLECTION · 2026</span><h1>Painted stories<br/>of <em>identity.</em></h1><p>Nine portraits shaped by heritage, ceremony and the quiet details through which a woman carries home.</p><div><Link href="/collection">View the collection</Link><Link href="/acquire">Collect a print</Link></div></div>
   <div className="hero-collage"><figure className="hero-art-main"><img src="/artworks/golden-poise.png" alt="Golden Poise by Niki"/></figure><figure className="hero-art-side"><img src="/artworks/bridal-legacy.png" alt="Bridal Legacy by Niki"/></figure><span className="hero-stamp">01—09<br/>VANCOUVER</span></div>
  </section>

  <section className="collection-section" id="collection">
   <div className="section-heading"><div><span>THE COLLECTION</span><h2>Nine works.<br/>Nine inner worlds.</h2></div><p>Explore the current portrait series. Each original is painted once; selected works are also released as fine-art prints.</p></div>
   <div className="collection-grid">{works.map((work,i)=><article className={`collection-card ${!work.image?"awaiting":""}`} key={work.no}>
    {work.image?<a href={`#story-${work.no}`} className="card-image"><img src={work.image} alt={`${work.title}, painting by Niki`}/><span>Read the story</span></a>:<div className="card-image pending-art"><i>{work.no}</i><span>Artwork to be revealed</span></div>}
    <div className="card-info"><span>{work.no}</span><div><h3>{work.title}</h3><p>{work.chapter}</p></div></div>
   </article>)}</div>
  </section>

  <section className="story-section" id="stories">
   <div className="section-heading story-heading"><div><span>BEHIND THE WORK</span><h2>Stories held<br/>inside the canvas.</h2></div><p>Four completed works from the developing nine-piece collection.</p></div>
   <div className="story-list">{works.slice(0,4).map((work,i)=><article id={`story-${work.no}`} className="story-row" key={work.no}>
    <div className="story-thumb"><img src={work.image!} alt={work.title}/></div><span className="story-number">{work.no}</span><div className="story-text"><span>{work.chapter}</span><h3>{work.title}</h3><p>{work.story}</p><div><Link href={`/acquire#work-${work.no}`}>Shop print</Link><Link href="/acquire#originals">View original</Link></div></div>
   </article>)}</div>
  </section>

  <section className="studio-banner" id="artist"><div className="studio-visual"><img src="/rooms/golden-poise.png" alt="Golden Poise presented in an interior"/><button aria-label="Studio film placeholder">Studio film<br/><span>Coming soon</span></button></div><div className="studio-copy"><span>PAINTED BY NIKI</span><h2>A practice rooted<br/>in memory.</h2><p>Niki creates portraits that hold cultural detail with intimacy. Gold, fabric, jewellery and gesture become a visual language for identity, inheritance and self-possession.</p><p className="future-note">This section is ready for future studio photography and process films.</p><a href="mailto:studio@paintedgoldbyniki.com">Contact the studio</a></div></section>
  <section className="shop-strip"><div><span>FINE-ART EDITIONS</span><h2>Bring the story home.</h2></div><p>Purchase museum-quality prints online, or arrange a private viewing for a one-of-one original canvas.</p><div><Link href="/acquire">Shop prints</Link><Link href="/acquire#originals">View originals</Link></div></section>
  <SiteFooter/>
 </main>
}
