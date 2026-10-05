"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { herWorks } from "../her-data";
import { SiteNav } from "../site-components";

const rooms = [
 {name:"The Entrance",note:"GRACE · LEGACY · ALLURE",works:[0,1,2],tone:"ivory"},
 {name:"The Gold Room",note:"SOVEREIGNTY · ROOTS · SPIRIT",works:[3,4,5],tone:"gold"},
 {name:"The Inner Room",note:"COURAGE · REVERENCE · FREEDOM",works:[6,7,8],tone:"wine"}
] as const;

export default function Acquire(){
 const [entered,setEntered]=useState(true);
 const [room,setRoom]=useState(0);\n const [mobileWork,setMobileWork]=useState(0);
 const [selected,setSelected]=useState<number|null>(null);
 const [mode,setMode]=useState<"print"|"original">("print");
 const [variant,setVariant]=useState("medium");
 const [ordering,setOrdering]=useState(false);
 const [checkoutError,setCheckoutError]=useState("");
 const sizes=[{id:"small",label:"12 × 16 in",price:"$95"},{id:"medium",label:"18 × 24 in",price:"$165"},{id:"large",label:"24 × 32 in",price:"$245"}];

 useEffect(()=>{window.scrollTo(0,0);if(location.hash==="#originals"){setMode("original");setEntered(true)}},[]);
 useEffect(()=>{
  const handle=(event:KeyboardEvent)=>{if(selected!==null&&event.key==="Escape")setSelected(null);else if(entered&&event.key==="ArrowRight")setRoom(v=>(v+1)%rooms.length);else if(entered&&event.key==="ArrowLeft")setRoom(v=>(v+rooms.length-1)%rooms.length)};
  window.addEventListener("keydown",handle);return()=>window.removeEventListener("keydown",handle)
 },[entered,selected]);

 async function beginCheckout(){
  if(selected===null)return;setOrdering(true);setCheckoutError("");
  try{const response=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({artworkId:herWorks[selected].slug,variantId:variant,quantity:1})});const data=await response.json();if(!response.ok||!data.url)throw new Error(data.error||"Checkout is unavailable.");window.location.href=data.url}
  catch(error){setCheckoutError(error instanceof Error?error.message:"Checkout is unavailable.");setOrdering(false)}
 }
 const openWork=(index:number)=>{setSelected(index);setVariant("medium");setCheckoutError("")};
 const move=(direction:number)=>{\n  if(typeof window!=="undefined"&&window.matchMedia("(max-width: 850px)").matches){const next=(mobileWork+direction+herWorks.length)%herWorks.length;setMobileWork(next);setRoom(Math.floor(next/3));return}\n  setRoom(current=>(current+direction+rooms.length)%rooms.length)\n };\n const chooseRoom=(index:number)=>{setRoom(index);setMobileWork(index*3)};

 return <main className={`gallery-shop gallery-tone-${rooms[room].tone} gallery-art-light-${mobileWork+1}`}>
  <SiteNav dark/>

  {!entered&&<section className="gallery-entry">
   <div className="gallery-entry-art">
    <Image src={herWorks[8].image} alt={herWorks[8].title} width={1365} height={2048} priority/>
   </div>
   <div className="gallery-entry-copy">
    <span>PAINTED GOLD BY NIKI PRESENTS</span>
    <h1>Enter<br/><em>H E R.</em></h1>
    <p>A virtual exhibition of nine women and nine forms of power. Walk through the rooms. Choose the portrait that speaks to you.</p>
    <button onClick={()=>setEntered(true)}>Enter the gallery</button>
    <small>USE THE ARROWS TO EXPLORE · CLICK ANY PAINTING</small>
   </div>
  </section>}

  {entered&&<section className="gallery-world" aria-label={rooms[room].name}>
   <header className="gallery-hud">
    <div><span>VIRTUAL EXHIBITION</span><b>H E R</b></div>
    <div className="gallery-room-name"><span className="desktop-room-count">ROOM 0{room+1} / 03</span><span className="mobile-art-count">ARTWORK {String(mobileWork+1).padStart(2,"0")} / 09</span><b>{rooms[room].name}</b><small>{rooms[room].note}</small></div>
    <div className="gallery-mode"><button className={mode==="print"?"active":""} onClick={()=>setMode("print")}>Prints</button><button className={mode==="original"?"active":""} onClick={()=>setMode("original")}>Originals</button></div>
   </header>

   <div className="gallery-ceiling"/><div className="gallery-sidewall gallery-sidewall-left"/><div className="gallery-sidewall gallery-sidewall-right"/><div className="gallery-moulding"/><div className="gallery-floor"/>
   <div className="gallery-wall">
    {rooms[room].works.map((workIndex,position)=>{
     const work=herWorks[workIndex];
     return <button className={`gallery-frame gallery-frame-${position+1} ${workIndex===mobileWork?"mobile-active":""}`} data-artwork={workIndex+1} key={work.no} onClick={()=>openWork(workIndex)} aria-label={`View ${work.title}`}>
      <span className="gallery-spotlight"/>
      <span className="gallery-frame-border"><Image src={work.image} alt={work.title} width={1365} height={2048} sizes="30vw"/></span>
      <span className="gallery-plaque"><b>{work.title}</b><small>{work.power}</small></span>
      <i>+</i>
     </button>
    })}
   </div>

   <button className="gallery-arrow gallery-prev" onClick={()=>move(-1)} aria-label="Previous room"><span>←</span><small>PREVIOUS ROOM</small></button>
   <button className="gallery-arrow gallery-next" onClick={()=>move(1)} aria-label="Next room"><small>NEXT ROOM</small><span>→</span></button>

   <div className="gallery-map">
    {rooms.map((item,index)=><button key={item.name} className={room===index?"active":""} onClick={()=>chooseRoom(index)}><span>0{index+1}</span><i/></button>)}
   </div>
   <div className="gallery-help">CLICK A PAINTING TO COLLECT</div>
  </section>}

  {selected!==null&&<div className="gallery-art-modal" role="dialog" aria-modal="true" aria-label={herWorks[selected].title}>
   <header className="gallery-order-nav"><button onClick={()=>setSelected(null)}>← BACK TO GALLERY</button><a href="/" className="gallery-order-brand"><b>PAINTED GOLD</b><small>BY NIKI</small></a><nav><a href="/collection">COLLECTION</a><a href="/artist">ARTIST</a><button onClick={()=>setSelected(null)}>GALLERY</button></nav></header>
   <div className="gallery-modal-image"><Image src={herWorks[selected].image} alt={herWorks[selected].title} width={1365} height={2048} sizes="(max-width:850px) 100vw, 52vw"/><span>{herWorks[selected].no} / 09</span></div>
   <div className="gallery-modal-info">
    <div className="gallery-modal-mode"><button className={mode==="print"?"active":""} onClick={()=>setMode("print")}>FINE-ART PRINT</button><button className={mode==="original"?"active":""} onClick={()=>setMode("original")}>ORIGINAL</button></div>
    <span>{herWorks[selected].power.toUpperCase()}</span>
    <h2>{herWorks[selected].title}</h2>
    <blockquote>{herWorks[selected].line}</blockquote>
    <p>{mode==="print"?"Bring this portrait into your space as a museum-quality fine-art print, produced individually to order.":herWorks[selected].story}</p>
    {mode==="print"?<>
     <label>CHOOSE YOUR SIZE</label>
     <div className="gallery-sizes">{sizes.map(size=><button key={size.id} className={variant===size.id?"selected":""} onClick={()=>setVariant(size.id)}><span>{size.label}</span><strong>{size.price} CAD</strong></button>)}</div>
     <button className="gallery-checkout" disabled={ordering} onClick={beginCheckout}>{ordering?"OPENING CHECKOUT…":"COLLECT THIS PRINT"}</button>
     {checkoutError&&<p className="checkout-error">{checkoutError}</p>}
     <small>ARCHIVAL QUALITY · MADE TO ORDER · SECURE CHECKOUT</small>
    </>:<>
     <div className="gallery-one-only"><b>ONE PAINTING. ONE COLLECTOR.</b><span>Contact the studio for availability, pricing, or an in-person viewing.</span></div>
     <a href={`mailto:studio@paintedgoldbyniki.com?subject=Original enquiry — ${herWorks[selected].title}`}>ENQUIRE ABOUT THE ORIGINAL</a>
    </>}
   </div>
  </div>}
 </main>
}
