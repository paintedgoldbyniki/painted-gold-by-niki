"use client";

import Link from "next/link";
import { useState } from "react";

export function Brand(){return <div className="brand compact-brand"><span>PAINTED GOLD</span><small>BY NIKI</small></div>}

export function SiteNav({dark=false}:{dark?:boolean}){
 const [open,setOpen]=useState(false);
 return <><header className={`site-nav ${dark?"dark-nav":""}`}><Link href="/" aria-label="Painted Gold home"><Brand/></Link><nav><Link href="/collection">Collection</Link><Link href="/stories">Stories</Link><Link href="/artist">Artist</Link><Link href="/acquire">Shop</Link></nav><button onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><span/><span/></button><Link className="nav-enquire" href="/acquire#originals">Originals</Link></header><div className={`mobile-nav ${open?"open":""}`}><Link href="/" onClick={()=>setOpen(false)}>Home</Link><Link href="/collection" onClick={()=>setOpen(false)}>Collection</Link><Link href="/stories" onClick={()=>setOpen(false)}>Stories</Link><Link href="/artist" onClick={()=>setOpen(false)}>Artist</Link><Link href="/acquire" onClick={()=>setOpen(false)}>Shop prints</Link><Link href="/acquire#originals" onClick={()=>setOpen(false)}>Originals</Link></div></>
}

export function SiteFooter(){return <footer className="site-footer"><Brand/><nav><Link href="/collection">Collection</Link><Link href="/stories">Stories</Link><Link href="/artist">Artist</Link><Link href="/acquire">Collect</Link></nav><p>© 2026 Painted Gold by Niki</p></footer>}
