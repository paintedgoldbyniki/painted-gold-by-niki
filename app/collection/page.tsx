import Link from "next/link";
import { SiteFooter, SiteNav } from "../site-components";

const works=[
 {no:"01",title:"Golden Poise",note:"The art of composure",image:"/artworks/golden-poise.png"},{no:"02",title:"Bridal Legacy",note:"The ceremony of becoming",image:"/artworks/bridal-legacy.png"},{no:"03",title:"Quiet Elegance",note:"The language of restraint",image:"/artworks/quiet-elegance.png"},{no:"04",title:"Crown Within",note:"The architecture of identity",image:"/artworks/crown-within.png"},
 ...[5,6,7,8,9].map((n)=>({no:String(n).padStart(2,"0"),title:`Untitled ${["V","VI","VII","VIII","IX"][n-5]}`,note:"To be revealed",image:null}))
];
export default function Collection(){return <main className="inner-page"><SiteNav/><section className="inner-hero"><span>THE PORTRAIT COLLECTION · 2026</span><h1>Nine works.<br/><em>Nine inner worlds.</em></h1><p>A developing collection of portraits shaped by culture, ceremony and identity.</p></section><section className="collection-page-grid">{works.map(w=><article key={w.no}>{w.image?<div className="inner-art"><img src={w.image} alt={w.title}/><Link href={`/stories#story-${w.no}`}>Read the story</Link></div>:<div className="inner-art pending-art"><i>{w.no}</i><span>Artwork to be revealed</span></div>}<div><span>{w.no}</span><h2>{w.title}</h2><p>{w.note}</p></div></article>)}</section><section className="inner-cta"><span>COLLECT THE SERIES</span><h2>Print editions and<br/>one-of-one originals.</h2><Link href="/acquire">Enter the shop</Link></section><SiteFooter/></main>}
