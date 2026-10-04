"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function Brand(){return <div className="brand compact-brand"><span>PAINTED GOLD</span><small>BY NIKI</small></div>}

export function SiteNav({dark=false}:{dark?:boolean}){
 const [open,setOpen]=useState(false);
 const [transitioning,setTransitioning]=useState(false);\n const [galleryTransition,setGalleryTransition]=useState(false);
 const router=useRouter();
 const pathname=usePathname();
 useEffect(()=>setTransitioning(false),[pathname]);
 const visit=(href:string)=>{if(transitioning)return;const isGallery=href.startsWith("/acquire");setOpen(false);setGalleryTransition(isGallery);setTransitioning(true);setTimeout(()=>router.push(href),isGallery?760:430);setTimeout(()=>{setTransitioning(false);setGalleryTransition(false)},isGallery?1700:1400)};
 const NavLink=({href,children,className=""}:{href:string;children:React.ReactNode;className?:string})=><button className={`route-link ${className}`} onClick={()=>visit(href)}>{children}</button>;
 return <><div className={`nav-transition ${transitioning?"show":""} ${galleryTransition?"gallery-door-transition":""}`} aria-hidden={!transitioning}>{galleryTransition?<><div className="gallery-transition-title"><span>ENTERING</span><b>H E R</b><small>THE VIRTUAL GALLERY</small></div><i className="gallery-door-left"/><i className="gallery-door-right"/></>:<><div><i/><Brand/><i/></div><small>ENTERING THE STUDIO</small></>}</div><header className={`site-nav luxury-nav ${dark?"dark-nav":""}`}><nav className="nav-left"><NavLink href="/collection">Collection</NavLink><NavLink href="/stories">The Gold Within</NavLink></nav><NavLink href="/" className="nav-logo"><Brand/></NavLink><nav className="nav-right"><NavLink href="/artist">Artist</NavLink><NavLink href="/acquire">Shop</NavLink><NavLink className="nav-enquire" href="/acquire#originals">Originals</NavLink></nav><button className="nav-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><span/><span/></button></header><div className={`mobile-nav ${open?"open":""}`}><NavLink href="/">Home</NavLink><NavLink href="/collection">Collection</NavLink><NavLink href="/stories">The Gold Within</NavLink><NavLink href="/artist">Artist</NavLink><NavLink href="/acquire">Shop prints</NavLink><NavLink href="/acquire#originals">Originals</NavLink></div></>
}

export function SiteFooter(){return <footer className="site-footer"><Brand/><nav><Link href="/collection">Collection</Link><Link href="/stories">The Gold Within</Link><Link href="/artist">Artist</Link><Link href="/acquire">Collect</Link></nav><p>© 2026 Painted Gold by Niki</p></footer>}
