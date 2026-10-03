"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Brand(){return <div className="brand compact-brand"><span>PAINTED GOLD</span><small>BY NIKI</small></div>}

export function SiteNav({dark=false}:{dark?:boolean}){
 const [open,setOpen]=useState(false);
 const [transitioning,setTransitioning]=useState(false);
 const router=useRouter();
 const visit=(href:string)=>{if(transitioning)return;setOpen(false);setTransitioning(true);setTimeout(()=>router.push(href),620)};
 const NavLink=({href,children,className=""}:{href:string;children:React.ReactNode;className?:string})=><button className={`route-link ${className}`} onClick={()=>visit(href)}>{children}</button>;
 return <><div className={`nav-transition ${transitioning?"show":""}`} aria-hidden={!transitioning}><span>PAINTED STORIES · BY NIKI</span><div><i/><Brand/><i/></div><small>ENTERING</small></div><header className={`site-nav ${dark?"dark-nav":""}`}><NavLink href="/"><Brand/></NavLink><nav><NavLink href="/collection">Collection</NavLink><NavLink href="/stories">Stories</NavLink><NavLink href="/artist">Artist</NavLink><NavLink href="/acquire">Shop</NavLink></nav><button onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><span/><span/></button><NavLink className="nav-enquire" href="/acquire#originals">Originals</NavLink></header><div className={`mobile-nav ${open?"open":""}`}><NavLink href="/">Home</NavLink><NavLink href="/collection">Collection</NavLink><NavLink href="/stories">Stories</NavLink><NavLink href="/artist">Artist</NavLink><NavLink href="/acquire">Shop prints</NavLink><NavLink href="/acquire#originals">Originals</NavLink></div></>
}

export function SiteFooter(){return <footer className="site-footer"><Brand/><nav><Link href="/collection">Collection</Link><Link href="/stories">Stories</Link><Link href="/artist">Artist</Link><Link href="/acquire">Collect</Link></nav><p>© 2026 Painted Gold by Niki</p></footer>}
