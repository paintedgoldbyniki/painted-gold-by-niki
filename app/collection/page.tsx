import Link from "next/link";
import { SiteFooter, SiteNav } from "../site-components";
const works=[
 {no:"01",title:"Golden Poise",note:"The art of composure",image:"/artworks/golden-poise.png"},{no:"02",title:"Bridal Legacy",note:"The ceremony of becoming",image:"/artworks/bridal-legacy.png"},{no:"03",title:"Quiet Elegance",note:"The language of restraint",image:"/artworks/quiet-elegance.png"},{no:"04",title:"Crown Within",note:"The architecture of identity",image:"/artworks/crown-within.png"},
 ...[5,6,7,8,9].map(n=>({no:String(n).padStart(2,"0"),title:`Chapter ${["V","VI","VII","VIII","IX"][n-5]}`,note:"To be revealed",image:null}))
];
export default function Collection(){return <main className="inner-page cinema-inner"><SiteNav dark/>
 <section className="inner-hero"><span>THE PORTRAIT COLLECTION · 2026</span><h1>Nine works.<br/><em>Nine inner worlds.</em></h1><p>A living portrait archive shaped by heritage, ceremony, identity and the private ways a woman carries home.</p><div className="collection-facts"><b>04 REVEALED</b><b>05 TO COME</b><b>EVERY ORIGINAL · 01/01</b></div></section>
 <section className="collection-page-grid">{works.map(w=><article key={w.no}>{w.image?<div className="inner-art"><img src={w.image} alt={w.title}/><Link href={`/stories#story-${w.no}`}>Enter the story</Link></div>:<div className="inner-art pending-art"><i>{w.no}</i><span>Artwork to be revealed</span></div>}<div><span>{w.no}</span><h2>{w.title}</h2><p>{w.note}</p></div></article>)}</section>
 <section className="collection-material"><span>THE WORK, UP CLOSE</span><h2>Gold. Gesture.<br/>Memory in detail.</h2><p>Every work begins as a singular original canvas. Selected portraits are translated into archival print editions so the feeling of the collection can live in considered spaces.</p><Link href="/acquire">Explore print editions</Link></section>
 <section className="inner-cta"><span>PRIVATE ACQUISITION</span><h2>Only one collector<br/>can own the original.</h2><p>Ask about availability or arrange a personal viewing with the studio.</p><Link href="/acquire#originals">Enquire about originals</Link></section><SiteFooter/>
 </main>}
