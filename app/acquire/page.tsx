"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteNav } from "../site-components";

const works = [
 {no:"01",title:"Golden Poise",image:"/artworks/golden-poise.png",room:"/rooms/golden-poise.png",size:"24 × 36 in"},
 {no:"02",title:"Bridal Legacy",image:"/artworks/bridal-legacy.png",room:"/rooms/bridal-legacy.png",size:"24 × 30 in"},
 {no:"03",title:"Quiet Elegance",image:"/artworks/quiet-elegance.png",room:"/rooms/quiet-elegance.png",size:"20 × 24 in"},
 {no:"04",title:"Crown Within",image:"/artworks/crown-within.png",room:"/rooms/crown-within.png",size:"24 × 30 in"},
 {no:"05",title:"Untitled V",image:null,room:null,size:"To be announced"},{no:"06",title:"Untitled VI",image:null,room:null,size:"To be announced"},{no:"07",title:"Untitled VII",image:null,room:null,size:"To be announced"},{no:"08",title:"Untitled VIII",image:null,room:null,size:"To be announced"},{no:"09",title:"Untitled IX",image:null,room:null,size:"To be announced"},
];

export default function Acquire(){
 const [mode,setMode]=useState<"print"|"original">("print"); const [selected,setSelected]=useState<number|null>(null);
 const [variant,setVariant]=useState("medium"); const [ordering,setOrdering]=useState(false); const [checkoutError,setCheckoutError]=useState("");
 useEffect(()=>{if(location.hash==="#originals")setMode("original")},[]);
 const sizes=[{id:"small",label:"12 × 16 in",price:"$95"},{id:"medium",label:"18 × 24 in",price:"$165"},{id:"large",label:"24 × 32 in",price:"$245"}];
 async function beginCheckout(){
  if(selected===null)return; setOrdering(true); setCheckoutError("");
  try{const response=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({artworkId:works[selected].title.toLowerCase().replaceAll(" ","-"),variantId:variant,quantity:1})}); const data=await response.json(); if(!response.ok||!data.url)throw new Error(data.error||"Checkout is unavailable."); window.location.href=data.url;}
  catch(error){setCheckoutError(error instanceof Error?error.message:"Checkout is unavailable.");setOrdering(false)}
 }
 return <main className="shop-v2">
  <SiteNav dark/>
  <section className="shop-hero"><span>THE COLLECTOR&apos;S EDIT</span><h1>Choose how you<br/>live with the art.</h1><p>Fine-art editions can be purchased online. Every original canvas is one of one and acquired privately.</p></section>
  <div className="shop-tabs" id="originals"><button className={mode==="print"?"active":""} onClick={()=>setMode("print")}>Print editions <span>Buy online</span></button><button className={mode==="original"?"active":""} onClick={()=>setMode("original")}>Original canvases <span>Private enquiry</span></button></div>
  <section className="shop-intro"><span>{mode==="print"?"FINE-ART EDITIONS":"ONE OF ONE"}</span><h2>{mode==="print"?"Prints for considered spaces.":"The original, and only one."}</h2><p>{mode==="print"?"Archival pigment prints in a choice of sizes. Online checkout will be activated when the final edition details and prices are confirmed.":"Contact the studio or arrange an in-person visit to view texture, scale and gold details before collecting."}</p></section>
  <section className="shop-grid">{works.map((w,i)=><article id={`work-${w.no}`} className={!w.image?"shop-coming":""} key={w.no}>{w.image?<button className="shop-image" onClick={()=>setSelected(i)}><img src={w.image} alt={w.title}/>{w.room&&<img className="shop-room" src={w.room} alt={`${w.title} in a room`}/>}<span>View in a room</span></button>:<div className="shop-image pending-art"><i>{w.no}</i><span>Coming to the collection</span></div>}<div className="shop-meta"><span>{w.no}</span><div><h3>{w.title}</h3><p>{mode==="print"?"Fine-art print edition":w.size}</p></div>{w.image&&<button onClick={()=>setSelected(i)}>{mode==="print"?"Select print":"Enquire"}</button>}</div></article>)}</section>
  <section className="visit-panel"><span>ONE-OF-ONE ORIGINALS</span><h2>See the work<br/>in person.</h2><p>Original canvases are available through a personal conversation with the studio or an arranged visit.</p><a href="mailto:studio@paintedgoldbyniki.com?subject=Studio viewing">Arrange a studio viewing</a></section>
  {selected!==null&&<div className="shop-modal"><button className="modal-close" onClick={()=>setSelected(null)}>Close</button><img src={works[selected].image!} alt=""/><div><span>{mode==="print"?"SELECT AN EDITION":"PRIVATE ACQUISITION"}</span><h2>{works[selected].title}</h2>{mode==="print"?<><p>Choose your format. Each museum-quality print is made to order and ships directly from our fine-art production partner.</p><div className="size-options">{sizes.map(size=><button key={size.id} className={variant===size.id?"selected":""} onClick={()=>setVariant(size.id)}><span>{size.label}</span><strong>{size.price} CAD</strong></button>)}</div><button className="order-button" disabled={ordering} onClick={beginCheckout}>{ordering?"Opening secure checkout…":"Continue to secure checkout"}</button>{checkoutError&&<p className="checkout-error">{checkoutError}</p>}<small>Shipping is calculated during checkout.</small></>:<><p>This original exists only once. Contact the studio for availability, pricing or an in-person viewing.</p><a href={`mailto:studio@paintedgoldbyniki.com?subject=Original enquiry — ${works[selected].title}`}>Contact the studio</a></>}</div></div>}
 </main>
}
