"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function Brand(){return <div className="brand compact-brand"><span>PAINTED GOLD</span><small>BY NIKI</small></div>}

export function SiteNav({dark=false}:{dark?:boolean}){
 const [open,setOpen]=useState(false);
 const [transitioning,setTransitioning]=useState(false);
 const [galleryTransition,setGalleryTransition]=useState(false);
 const [showStudioInvite,setShowStudioInvite]=useState(false);
 const router=useRouter();
 const pathname=usePathname();
 useEffect(()=>setTransitioning(false),[pathname]);
 useEffect(()=>{if(window.sessionStorage.getItem("pg-niki-newsletter-dismissed"))return;const timer=window.setTimeout(()=>setShowStudioInvite(true),12000);return()=>window.clearTimeout(timer)},[]);
 const dismissInvite=()=>{setShowStudioInvite(false);window.sessionStorage.setItem("pg-niki-newsletter-dismissed","yes")};
 const visit=(href:string)=>{if(transitioning)return;const isGallery=href.startsWith("/acquire");setOpen(false);setGalleryTransition(isGallery);setTransitioning(true);setTimeout(()=>router.push(href),isGallery?760:430);setTimeout(()=>{setTransitioning(false);setGalleryTransition(false)},isGallery?1700:1400)};
 const NavLink=({href,children,className=""}:{href:string;children:React.ReactNode;className?:string})=><button className={`route-link ${className}`} onClick={()=>visit(href)}>{children}</button>;
 return <><div className={`nav-transition ${transitioning?"show":""} ${galleryTransition?"gallery-door-transition":""}`} aria-hidden={!transitioning}>{galleryTransition?<><div className="gallery-transition-title"><span>ENTERING</span><b>H E R</b><small>THE VIRTUAL GALLERY</small></div><i className="gallery-door-left"/><i className="gallery-door-right"/></>:<><div><i/><Brand/><i/></div><small>ENTERING THE STUDIO</small></>}</div><header className={`site-nav luxury-nav ${dark?"dark-nav":""}`}><nav className="nav-left"><NavLink href="/collection">Collection</NavLink><NavLink href="/stories">The Gold Within</NavLink></nav><NavLink href="/" className="nav-logo"><Brand/></NavLink><nav className="nav-right"><NavLink href="/artist">Artist</NavLink><NavLink href="/acquire">Shop</NavLink><NavLink className="nav-enquire" href="/acquire#originals">Originals</NavLink></nav><button className="nav-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><span/><span/></button></header>{showStudioInvite&&<div className="kf-newsletter-overlay" role="dialog" aria-modal="true" aria-label="Join the Painted Gold studio mailing list"><div className="kf-newsletter-pop"><button className="kf-popup-close" onClick={dismissInvite} aria-label="Close newsletter invitation">×</button><StudioNewsletter/></div></div>}<div className={`mobile-nav ${open?"open":""}`}><NavLink href="/">Home</NavLink><NavLink href="/collection">Collection</NavLink><NavLink href="/stories">The Gold Within</NavLink><NavLink href="/artist">Artist</NavLink><NavLink href="/acquire">Shop prints</NavLink><NavLink href="/acquire#originals">Originals</NavLink></div></>
}

export function StudioNewsletter(){
 const [email,setEmail]=useState(""); const [status,setStatus]=useState(""); const [sending,setSending]=useState(false);
 async function submit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();setSending(true);setStatus("");try{const response=await fetch("/api/newsletter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});const data=await response.json();if(!response.ok)throw new Error(data.error||"Signup is temporarily unavailable.");setStatus("Thanks! Your request to join has been sent to the studio.");setEmail("");}catch(error){setStatus(error instanceof Error?error.message:"Please try again later.")}finally{setSending(false)}}
 return <section className="kf-newsletter" id="newsletter"><div><span>LETTERS FROM THE STUDIO</span><h2>A little more <em>gold</em><br/>in your inbox.</h2><p>New paintings, collection notes and occasional stories from Niki’s studio. No noise—just art.</p></div><form onSubmit={submit}><label htmlFor="studio-newsletter-email">YOUR EMAIL ADDRESS</label><div><input id="studio-newsletter-email" type="email" required autoComplete="email" placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)} /><button disabled={sending} type="submit" aria-label="Join the studio newsletter">{sending?"…":"↗"}</button></div><small aria-live="polite">{status||"Thoughtful letters, only when there is something worth sharing."}</small></form></section>
}

export function SiteFooter(){return <footer className="site-footer"><Brand/><nav><Link href="/collection">Collection</Link><Link href="/stories">The Gold Within</Link><Link href="/artist">Artist</Link><Link href="/acquire">Collect</Link></nav><p>© 2026 Painted Gold by Niki</p></footer>}
