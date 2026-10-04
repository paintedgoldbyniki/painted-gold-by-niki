"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { herWorks } from "../her-data";
import { SiteFooter, SiteNav } from "../site-components";

const works = herWorks.map(work => ({...work, size:"Original · one of one"}));

export default function Acquire(){
 const [mode,setMode]=useState<"print"|"original">("print");
 const [selected,setSelected]=useState<number|null>(null);
 const [variant,setVariant]=useState("medium");
 const [ordering,setOrdering]=useState(false);
 const [checkoutError,setCheckoutError]=useState("");
 useEffect(()=>{if(location.hash==="#originals")setMode("original")},[]);
 const sizes=[{id:"small",label:"12 × 16 in",price:"$95"},{id:"medium",label:"18 × 24 in",price:"$165"},{id:"large",label:"24 × 32 in",price:"$245"}];
 async function beginCheckout(){
  if(selected===null)return; setOrdering(true); setCheckoutError("");
  try{const response=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({artworkId:works[selected].slug,variantId:variant,quantity:1})});const data=await response.json();if(!response.ok||!data.url)throw new Error(data.error||"Checkout is unavailable.");window.location.href=data.url}
  catch(error){setCheckoutError(error instanceof Error?error.message:"Checkout is unavailable.");setOrdering(false)}
 }
 const openWork=(i:number)=>{setSelected(i);setVariant("medium");setCheckoutError("")};

 return <main className="shop-v3">
  <SiteNav />

  <section className="shop-v3-hero">
   <div className="shop-v3-copy">
    <span>THE HER COLLECTION · FINE-ART PRINTS</span>
    <h1>Live with<br/><em>her power.</em></h1>
    <p>Nine portraits. Nine expressions of womanhood. Choose the one that speaks to you—and make her part of your space.</p>
    <div className="shop-v3-actions">
     <a href="#shop-works">Shop the collection</a>
     <button onClick={()=>{setMode("original");document.querySelector("#shop-works")?.scrollIntoView({behavior:"smooth"})}}>Explore originals</button>
    </div>
    <small>FINE-ART PRINTS FROM $95 CAD</small>
   </div>
   <div className="shop-v3-feature">
    <Image src={works[8].image} alt={works[8].title} width={1365} height={2048} priority sizes="(max-width: 850px) 100vw, 55vw"/>
    <div className="shop-v3-feature-meta"><span>09 · FEATURED</span><div><b>{works[8].title}</b><small>Freedom · Confidence · Presence</small></div><button onClick={()=>openWork(8)}>Collect this work</button></div>
   </div>
  </section>

  <section className="shop-promise">
   <span>ARCHIVAL FINE-ART QUALITY</span><i/>
   <span>MADE TO ORDER</span><i/>
   <span>SECURE CHECKOUT</span><i/>
   <span>SHIPPED WITH CARE</span>
  </section>

  <section className="shop-v3-intro" id="shop-works">
   <div>
    <span>COLLECT H E R</span>
    <h2>Which power<br/>belongs in your space?</h2>
   </div>
   <p>Choose a museum-quality print, or enquire privately about the one-of-one original. Every work carries its own presence and story.</p>
  </section>

  <div className="shop-v3-tabs" id="originals">
   <button className={mode==="print"?"active":""} onClick={()=>setMode("print")}><b>01</b><span>Fine-art prints<small>Order online · From $95 CAD</small></span></button>
   <button className={mode==="original"?"active":""} onClick={()=>setMode("original")}><b>02</b><span>Original paintings<small>One of one · Private acquisition</small></span></button>
  </div>

  <section className="shop-v3-grid">
   {works.map((w,i)=><article className="shop-v3-card" id={`work-${w.no}`} key={w.no}>
    <button className="shop-v3-image" onClick={()=>openWork(i)}>
     <Image src={w.image} alt={w.title} width={1365} height={2048} sizes="(max-width: 850px) 100vw, 50vw"/>
     <span>{mode==="print"?"VIEW & SELECT SIZE":"VIEW ORIGINAL"}</span>
    </button>
    <div className="shop-v3-card-meta">
     <span>{w.no}</span>
     <div><small>{w.power.toUpperCase()}</small><h3>{w.title}</h3><p>{w.line}</p></div>
     <div className="shop-v3-price"><b>{mode==="print"?"FROM $95":"ONE OF ONE"}</b><button onClick={()=>openWork(i)}>{mode==="print"?"Select print":"Enquire"}</button></div>
    </div>
   </article>)}
  </section>

  <section className="shop-v3-room">
   <div className="shop-v3-room-image"><Image src="/rooms/golden-poise.png" alt="Fine-art print displayed in an interior" width={1800} height={1200}/></div>
   <div>
    <span>ART CHANGES A ROOM</span>
    <h2>Not simply a print.<br/>A presence.</h2>
    <p>HER was created to be lived with. Each portrait brings its own energy into a space—quiet grace, courage, sovereignty, roots or unapologetic freedom.</p>
    <a href="#shop-works">Find yours</a>
   </div>
  </section>

  <section className="shop-v3-care">
   <header><span>MADE FOR COLLECTING</span><h2>Beautifully made.<br/>Thoughtfully delivered.</h2></header>
   <div>
    <article><b>01</b><h3>Fine-art production</h3><p>Rich colour and considered detail, professionally produced as an archival-quality art print.</p></article>
    <article><b>02</b><h3>Made for you</h3><p>Each edition is created to order in your selected size rather than taken from mass-produced stock.</p></article>
    <article><b>03</b><h3>Protected journey</h3><p>Carefully packaged, securely paid through Stripe, and delivered directly to your address.</p></article>
   </div>
  </section>

  <section className="shop-v3-originals">
   <span>FOR THE ONE-OF-ONE COLLECTOR</span>
   <h2>The original exists<br/>only once.</h2>
   <p>To experience the canvas, texture and gold detail in person, begin a private conversation with the studio.</p>
   <a href="mailto:studio@paintedgoldbyniki.com?subject=Original artwork enquiry">Enquire about an original</a>
  </section>

  {selected!==null&&<div className="shop-v3-modal" role="dialog" aria-modal="true" aria-label={works[selected].title}>
   <button className="shop-v3-close" onClick={()=>setSelected(null)}>Close</button>
   <div className="shop-v3-modal-art"><Image src={works[selected].image} alt={works[selected].title} width={1365} height={2048} sizes="(max-width: 850px) 100vw, 52vw"/><span>{works[selected].no} / 09</span></div>
   <div className="shop-v3-modal-copy">
    <span>{mode==="print"?"FINE-ART PRINT":"ONE-OF-ONE ORIGINAL"}</span>
    <h2>{works[selected].title}</h2>
    <blockquote>{works[selected].line}</blockquote>
    <p>{mode==="print"?"Choose the scale that feels right for your space. Your print is individually produced and carefully prepared for delivery.":works[selected].story}</p>
    {mode==="print"?<>
     <label>SELECT YOUR SIZE</label>
     <div className="shop-v3-sizes">{sizes.map(size=><button key={size.id} className={variant===size.id?"selected":""} onClick={()=>setVariant(size.id)}><span>{size.label}</span><strong>{size.price} CAD</strong></button>)}</div>
     <button className="shop-v3-buy" disabled={ordering} onClick={beginCheckout}>{ordering?"OPENING SECURE CHECKOUT…":"CONTINUE TO SECURE CHECKOUT"}</button>
     {checkoutError&&<p className="checkout-error">{checkoutError}</p>}
     <small>Made to order · Shipping calculated at checkout · Secure payment</small>
    </>:<>
     <div className="shop-v3-original-note"><b>AN EXCLUSIVE WORK</b><span>Availability and pricing are shared privately by the studio.</span></div>
     <a className="shop-v3-enquire" href={`mailto:studio@paintedgoldbyniki.com?subject=Original enquiry — ${works[selected].title}`}>Enquire about this original</a>
    </>}
   </div>
  </div>}

  <SiteFooter/>
 </main>
}
