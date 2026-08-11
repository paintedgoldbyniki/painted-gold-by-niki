"use client";

import Link from "next/link";
import { useState } from "react";

const works = [
  { no:"01", title:"Golden Poise", size:"24 × 36 in", medium:"Acrylic & gold leaf on canvas", art:"art-hijab", room:"/rooms/golden-poise.png", status:"Available" },
  { no:"02", title:"Bridal Legacy", size:"24 × 30 in", medium:"Acrylic & gold leaf on canvas", art:"art-bride", room:"/rooms/bridal-legacy.png", status:"Available" },
  { no:"03", title:"Quiet Elegance", size:"20 × 24 in", medium:"Acrylic & gold leaf on canvas", art:"art-fan", room:"/rooms/quiet-elegance.png", status:"Private release" },
  { no:"04", title:"Crown Within", size:"24 × 30 in", medium:"Acrylic & gold leaf on canvas", art:"art-braids", room:"/rooms/crown-within.png", status:"Available" },
];

export default function Acquire(){
 const [selected,setSelected]=useState<number|null>(null);
 return <main className="acquire-page">
   <header className="acq-nav"><Link href="/">← Stories</Link><Link className="acq-brand" href="/"><b>PAINTED GOLD</b><span>BY NIKI</span></Link><a href="mailto:studio@paintedgoldbyniki.com">Private viewing</a></header>
   <section className="acq-hero"><p>THE PRIVATE GALLERY · AVAILABLE WORKS</p><h1>Live with the<br/><em>story.</em></h1><div><span>Each work exists only once.</span><span>Hover to place it in a room.</span></div></section>
   <section className="work-grid">
    {works.map((w,i)=><article className="work" id={`work-${w.no}`} key={w.no}>
      <button className="work-visual" onClick={()=>setSelected(i)} aria-label={`View ${w.title}`}>
       <div className={`original ${w.art}`} />
       <img className="room" src={w.room} alt={`${w.title} shown in an interior`} />
       <span className="room-label">VIEW IN A ROOM</span><span className="work-no">{w.no} / 04</span>
      </button>
      <div className="work-meta"><div><span>{w.status}</span><h2>{w.title}</h2></div><div><p>{w.medium}</p><p>{w.size}</p></div><button onClick={()=>setSelected(i)}>Request to acquire ↗</button></div>
    </article>)}
   </section>
   <section className="acq-note"><span>FOR COLLECTORS</span><h2>A considered<br/>way to collect.</h2><p>Every acquisition begins with a personal conversation. We share detailed photographs, a condition note, framing guidance and a private delivery quotation before the work is reserved.</p><a href="mailto:studio@paintedgoldbyniki.com">Begin a private conversation →</a></section>
   <footer className="acq-footer"><Link href="/">Painted Gold by Niki</Link><span>Original works · hand-painted · one of one</span></footer>
   {selected!==null&&<div className="inquiry"><button className="inq-close" onClick={()=>setSelected(null)}>Close ×</button><div><span>PRIVATE ACQUISITION · {works[selected].no}</span><h2>{works[selected].title}</h2><p>{works[selected].medium}<br/>{works[selected].size}</p><p className="inq-body">Tell us where the work would live. The studio will reply personally with availability, pricing, framing and delivery details.</p><a href={`mailto:studio@paintedgoldbyniki.com?subject=Acquisition enquiry — ${works[selected].title}`}>Write to the studio <b>→</b></a></div></div>}
 </main>
}
