"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const works = [
  { no:"01", title:"Golden Poise", size:"24 × 36 in", medium:"Acrylic & gold leaf on canvas", image:"/artworks/golden-poise.png", room:"/rooms/golden-poise.png", status:"Original available" },
  { no:"02", title:"Bridal Legacy", size:"24 × 30 in", medium:"Acrylic & gold leaf on canvas", image:"/artworks/bridal-legacy.png", room:"/rooms/bridal-legacy.png", status:"Original available" },
  { no:"03", title:"Quiet Elegance", size:"20 × 24 in", medium:"Acrylic & gold leaf on canvas", image:"/artworks/quiet-elegance.png", room:"/rooms/quiet-elegance.png", status:"Private release" },
  { no:"04", title:"Crown Within", size:"24 × 30 in", medium:"Acrylic & gold leaf on canvas", image:"/artworks/crown-within.png", room:"/rooms/crown-within.png", status:"Original available" },
];

export default function Acquire(){
 const [selected,setSelected]=useState<number|null>(null);
 const [mode,setMode]=useState<"print"|"original">("print");
 useEffect(()=>{ if(window.location.hash==="#originals") setMode("original"); },[]);
 return <main className="acquire-page">
   <header className="acq-nav"><Link href="/">← Stories</Link><Link className="acq-brand" href="/"><b>PAINTED GOLD</b><span>BY NIKI</span></Link><a href="#originals" onClick={()=>setMode("original")}>Originals</a></header>
   <section className="acq-hero"><p>THE COLLECTOR&apos;S ROOM · PRINTS &amp; ORIGINALS</p><h1>Live with the<br/><em>story.</em></h1><div><span>Fine-art prints · purchased online</span><span>Original canvas · one of one</span></div></section>
   <section className="collection-switch" aria-label="Choose a collection type"><button className={mode==="print"?"active":""} onClick={()=>setMode("print")}><span>01</span> Print editions<small>Made to collect online</small></button><button className={mode==="original"?"active":""} onClick={()=>setMode("original")}><span>02</span> Original canvases<small>Private acquisition only</small></button></section>
   <section className="collection-intro" id="originals"><span>{mode==="print"?"THE EDITION COLLECTION":"THE ONE-OF-ONE COLLECTION"}</span><h2>{mode==="print"?<>Museum-quality art,<br/><em>made for your space.</em></>:<>Painted once.<br/><em>Collected forever.</em></>}</h2><p>{mode==="print"?"Archival fine-art editions of Niki’s original portraits. Select your work and size; secure online ordering will be added when the editions are released.":"No original is repeated. To acquire a canvas, begin a private conversation or arrange an in-person studio viewing."}</p></section>
   <section className="work-grid">{works.map((w,i)=><article className="work" id={`work-${w.no}`} key={w.no}><button className="work-visual" onClick={()=>setSelected(i)} aria-label={`View ${w.title}`}><img className="original" src={w.image} alt={`${w.title}, original painting by Niki`} /><img className="room" src={w.room} alt={`${w.title} shown in an interior`} /><span className="room-label">IMAGINE IT AT HOME</span><span className="work-no">{w.no} / 04</span></button><div className="work-meta"><div><span>{mode==="print"?"FINE-ART PRINT EDITION":w.status}</span><h2>{w.title}</h2></div><div>{mode==="print"?<><p>Archival pigment print</p><p>Multiple sizes · unframed or framed</p></>:<><p>{w.medium}</p><p>{w.size} · signed by the artist</p></>}</div><button onClick={()=>setSelected(i)}>{mode==="print"?"Select this print":"Enquire about the original"} ↗</button></div></article>)}</section>
   <section className="acq-note"><span>FOR COLLECTORS</span><h2>Two ways<br/>to live with art.</h2><p>Print editions will be purchased securely through this website. Each one-of-one original remains personal: contact the studio or visit in person to see its texture, scale and gold details before collecting.</p><a href="mailto:studio@paintedgoldbyniki.com?subject=Private studio viewing">Arrange a studio visit →</a></section>
   <footer className="acq-footer"><Link href="/">Painted Gold by Niki</Link><span>Print editions · one-of-one originals</span></footer>
   {selected!==null&&<div className="inquiry"><button className="inq-close" onClick={()=>setSelected(null)}>Close ×</button><div className="inq-art"><img src={works[selected].image} alt="" /></div><div className="inq-content"><span>{mode==="print"?"SELECT YOUR EDITION":`PRIVATE ACQUISITION · ${works[selected].no}`}</span><h2>{works[selected].title}</h2>{mode==="print"?<><p className="inq-body">Choose how this story will live in your space.</p><div className="print-options"><button>12 × 16 in<small>Fine-art paper</small></button><button>18 × 24 in<small>Fine-art paper</small></button><button>24 × 32 in<small>Canvas edition</small></button></div><button className="future-checkout">Online ordering available at launch</button></>:<><p>{works[selected].medium}<br/>{works[selected].size}</p><p className="inq-body">The original exists only once. The studio will personally share availability, pricing, detailed photographs and viewing options.</p><div className="original-actions"><a href={`mailto:studio@paintedgoldbyniki.com?subject=Original artwork enquiry — ${works[selected].title}`}>Contact the studio</a><a href={`mailto:studio@paintedgoldbyniki.com?subject=Studio visit — ${works[selected].title}`}>Arrange a visit</a></div></>}</div></div>}
 </main>
}
