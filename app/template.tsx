"use client";

import { useEffect, useState } from "react";
import { Brand } from "./site-components";

export default function Template({children}:{children:React.ReactNode}){
 const [ready,setReady]=useState(false);
 useEffect(()=>{const t=setTimeout(()=>setReady(true),850);return()=>clearTimeout(t)},[]);
 return <><div className={`page-transition ${ready?"leave":""}`} aria-hidden="true"><span>PAINTED STORIES · BY NIKI</span><div><i/><Brand/><i/></div><small>ENTERING</small></div>{children}</>
}
