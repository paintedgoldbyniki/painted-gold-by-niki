"use client";

import Link from "next/link"; import Image from "next/image";
import { useEffect, useState } from "react";
import { herWorks } from "../her-data";
import { SiteFooter, SiteNav } from "../site-components";

const works = herWorks.map(work=>({...work,room:null,size:"Original · one of one"}));

export default function Acquire(){
 const [mode,setMode]=useState<"print"|"original">("print"); const [selected,setSelected]=useState<number|null>(null);
 const [variant,setVariant]=useState("medium"); const [ordering,setOrdering]=useState(false); const [checkoutError,setCheckoutError]=useState("");
 useEffect(()=>{if(location.hash==="#originals")setMode("original")},[]);
 const sizes=[{id:"small",label:"12 × 16 in",price:"$95"},{id:"medium",label:"18 × 24 in",price:"$165"},{id:"large",label:"24 × 32 in",price:"$245"}];
 async function beginCheckout(){
  if(selected===null)return; setOrdering(true); setCheckoutError("");
  try{const response=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({artworkId:works[selected].slug,variantId:variant,quantity:1})}); const data=await response.json(); if(!response.ok||!data.url)throw new Error(data.error||"Checkout is unavailable."); window.location.href=data.url;}
  catch(error){setCheckoutError(error instanceof Error?error.message:"Checkout is unavailable.");setOrdering(false)}
 }
 return <main className="shop-v2">
  <SiteNav dark/>
  <section className="shop-hero"><span>COLLECT H E R</span><h1>Choose the power<br/>you live with.</h1><p>Nine museum-quality fine-art editions. Nine one-of-one original canvases. Each carries a different story of womanhood.</p></section>
  <div className="shop-tabs" id="originals"><button className={mode==="print"?"active":""} onClick={()=>setMode("print")}>Print editions <span>Buy online</span></button><button className={mode==="original"?"active":""} onClick={()=>setMode("original")}>Original canvases <span>Private enquiry</span></button></div>
  <section className="shop-intro"><span>{mode==="print"?"THE NINE EDITIONS":"THE NINE ORIGINALS"}</span><h2>{mode==="print"?"A story of HER, for your space.":"One painting. One collector."}</h2><p>{mode==="print"?"Choose from all nine portraits in three considered sizes. Every archival fine-art print is produced to order.":"Contact the studio or arrange an in-person visit to experience the texture, scale and gold detail before collecting."}</p></section>
  <section className="shop-grid">{works.map((w,i)=><article id={`work-${w.no}`} key={w.no}><button className="shop-image" onClick={()=>setSelected(i)}><Image src={w.image} alt={w.title} width={1365} height={2048} sizes="(max-width: 850px) 100vw, 50vw"/><span>View details</span></button><div className="shop-meta"><span>{w.no}</span><div><h3>{w.title}</h3><p>{mode==="print"?"Fine-art print edition":w.size}</p></div><button onClick={()=>setSelected(i)}>{mode==="print"?"Select print":"Enquire"}</button></div></article>)}</section>
  <section className="shop-assurance"><div><b>ARCHIVAL QUALITY</b><span>Made to preserve colour and detail</span></div><div><b>PRINTED TO ORDER</b><span>Produced individually for your space</span></div><div><b>SECURE CHECKOUT</b><span>Protected payment through Stripe</span></div></section>
  <section className="visit-panel"><span>ONE-OF-ONE ORIGINALS</span><h2>See the work<br/>in person.</h2><p>Original canvases are available through a personal conversation with the studio or an arranged visit.</p><a href="mailto:studio@paintedgoldbyniki.com?subject=Studio viewing">Arrange a studio viewing</a></section>
  <section className="shop-guide"><span>BEFORE YOU COLLECT</span><h2>Made with intention.<br/>Chosen with confidence.</h2><div><article><h3>What arrives?</h3><p>Your selected fine-art print, professionally produced and carefully packaged for delivery. Framing is not currently included.</p></article><article><h3>How long does it take?</h3><p>Every print is made to order. Production and delivery estimates are shown during checkout and confirmed by email.</p></article><article><h3>What about originals?</h3><p>Original canvases are placed privately. Contact the studio for availability, pricing and viewing arrangements.</p></article></div></section>
  {selected!==null&&<div className="shop-modal"><button className="modal-close" onClick={()=>setSelected(null)}>Close</button><Image src={works[selected].image!} alt="" width={1365} height={2048} sizes="(max-width: 850px) 100vw, 50vw"/><div><span>{mode==="print"?"SELECT AN EDITION":"PRIVATE ACQUISITION"}</span><h2>{works[selected].title}</h2>{mode==="print"?<><p>Choose your format. Each museum-quality print is made to order and ships directly from our fine-art production partner.</p><div className="size-options">{sizes.map(size=><button key={size.id} className={variant===size.id?"selected":""} onClick={()=>setVariant(size.id)}><span>{size.label}</span><strong>{size.price} CAD</strong></button>)}</div><button className="order-button" disabled={ordering} onClick={beginCheckout}>{ordering?"Opening secure checkout…":"Continue to secure checkout"}</button>{checkoutError&&<p className="checkout-error">{checkoutError}</p>}<small>Shipping is calculated during checkout.</small></>:<><p>This original exists only once. Contact the studio for availability, pricing or an in-person viewing.</p><a href={`mailto:studio@paintedgoldbyniki.com?subject=Original enquiry — ${works[selected].title}`}>Contact the studio</a></>}</div></div>}
  <SiteFooter/></main>
}
