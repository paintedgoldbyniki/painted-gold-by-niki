"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stories = [
  { no: "01", title: "Golden Poise", kicker: "Grace is not quiet. It is composed.", body: "A portrait of softness carried as strength—heritage held close, each leaf of gold catching the light like a memory passed from one woman to the next.", cls: "art-hijab" },
  { no: "02", title: "Bridal Legacy", kicker: "A ceremony of becoming.", body: "Crimson, gold and the stillness before a new chapter. This work honours the rituals that make a bride feel connected to every woman who stood before her.", cls: "art-bride" },
  { no: "03", title: "Quiet Elegance", kicker: "Presence needs no announcement.", body: "A study in restraint—the language of a lowered gaze, an unfurled fan and ornaments painted one deliberate glint at a time.", cls: "art-fan" },
  { no: "04", title: "Crown Within", kicker: "Adornment begins from within.", body: "Braids rise like architecture. The portrait celebrates beauty not as decoration, but as lineage, protection and self-possession.", cls: "art-braids" },
];

function Mark() {
  return <div className="brand"><span>PAINTED GOLD</span><small>BY NIKI</small></div>;
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { const t = setTimeout(() => setEntered(true), 2850); return () => clearTimeout(t); }, []);

  return <main>
    <div className={`loader ${entered ? "is-gone" : ""}`} aria-hidden={entered}>
      <div className="loader-grain" />
      <p>Original works · hand painted · one of one</p>
      <div className="loader-mark"><i /><Mark /><i /></div>
      <span className="loader-count">ENTERING THE COLLECTION</span>
    </div>

    <header className="nav">
      <button className="menu-btn" onClick={() => setMenu(true)} aria-label="Open menu"><span /><span /></button>
      <Link href="/" aria-label="Painted Gold home"><Mark /></Link>
      <Link className="nav-acquire" href="/acquire">Acquire <sup>04</sup></Link>
    </header>

    <div className={`menu-drawer ${menu ? "open" : ""}`}>
      <button onClick={() => setMenu(false)} aria-label="Close menu">Close ×</button>
      <nav><Link href="#stories" onClick={() => setMenu(false)}>The stories</Link><Link href="#artist" onClick={() => setMenu(false)}>The artist</Link><Link href="/acquire">Acquire a work</Link><a href="mailto:studio@paintedgoldbyniki.com">Private viewing</a></nav>
      <p>Painted slowly. Collected forever.</p>
    </div>

    <section className="story-intro" id="stories">
      <span>Scroll to enter</span>
      <div><p>THE PORTRAIT SERIES · I</p><h1>Before an artwork<br />is seen, it is <em>felt.</em></h1></div>
      <p className="intro-note">Four portraits. Four inner worlds.<br/>A collection shaped by culture, beauty and identity.</p>
    </section>

    <div className="stories">
      {stories.map((s, i) => <section className={`story ${i % 2 ? "reverse" : ""}`} key={s.no}>
        <div className={`story-image ${s.cls}`}><span>{s.no} / 04</span><i /></div>
        <div className="story-copy"><span className="eyebrow">PORTRAIT {s.no} · ORIGINAL ON CANVAS</span><h2>{s.title}</h2><h3>{s.kicker}</h3><p>{s.body}</p><Link href={`/acquire#work-${s.no}`}>Discover the work <b>↗</b></Link></div>
      </section>)}
    </div>

    <section className="landing-reveal" id="artist">
      <div className="reveal-art" />
      <div className="reveal-copy"><span>THE WORLD OF NIKI</span><h2>Heritage,<br/><em>painted in gold.</em></h2><p>Painted Gold is a living archive of feminine identity. Niki’s portraits bring together cultural memory, ceremonial beauty and the quiet power of being entirely oneself.</p><div><Link href="/acquire">Enter the private gallery</Link><a href="mailto:studio@paintedgoldbyniki.com">Meet the artist</a></div></div>
    </section>

    <section className="manifesto"><p>Each original is painted by hand,<br/>finished in gold, and created only once.</p><Link href="/acquire">View available originals <span>→</span></Link></section>
    <footer><Mark/><p>Culture · beauty · identity</p><p>© 2026 Painted Gold by Niki</p></footer>
  </main>;
}
