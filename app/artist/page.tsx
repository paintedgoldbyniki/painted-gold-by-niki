import Link from "next/link";
import { herWorks } from "../her-data";
import { SiteFooter, SiteNav } from "../site-components";

export default function Artist() {
  const grace = herWorks[0];
  const sovereignty = herWorks[3];
  const roots = herWorks[4];

  return (
    <main className="artist-page artist-film">
      <SiteNav />

      <section className="artist-film-hero">
        <div className="artist-film-title">
          <span>THE ARTIST · VANCOUVER, CANADA</span>
          <h1>Painted<br /><em>by feeling.</em></h1>
          <p>Niki creates portraits where womanhood, cultural memory and gold meet on the canvas.</p>
          <a href="#artist-manifesto">Enter her world</a>
        </div>

        <div className="artist-film-frame">
          <figure className="artist-frame-main">
            <img src={sovereignty.image} alt={sovereignty.title} />
          </figure>
          <figure className="artist-frame-detail">
            <img src={grace.image} alt={grace.title} />
          </figure>
          <div className="artist-frame-caption">
            <b>01</b>
            <span>PORTRAITS OF<br />POWER & PRESENCE</span>
          </div>
        </div>
      </section>

      <div className="artist-reel-line" aria-hidden="true">
        <span>MEMORY</span><i>✦</i><span>WOMANHOOD</span><i>✦</i><span>GOLD</span><i>✦</i><span>HERITAGE</span><i>✦</i><span>PRESENCE</span>
      </div>

      <section className="artist-manifesto" id="artist-manifesto">
        <span>ARTIST MANIFESTO · 2026</span>
        <div>
          <h2>She paints what<br />words cannot hold.</h2>
          <blockquote>“Gold is not placed upon her to create worth. It reveals the worth that was always there.”</blockquote>
          <p>Niki&apos;s practice begins with women—their histories, their softness, their strength and the quiet details that hold a life together. Fabric, jewellery, gesture and gaze become a language of belonging.</p>
          <p>Every original is painted once. No woman is repeated. Each canvas becomes both a portrait and a record: of where she comes from, who she is, and everything she is still becoming.</p>
        </div>
      </section>

      <section className="artist-language">
        <header>
          <span>HER VISUAL LANGUAGE</span>
          <h2>Three elements.<br />One unmistakable world.</h2>
        </header>
        <div className="artist-language-grid">
          <article>
            <span>01</span>
            <div className="artist-language-image"><img src={roots.image} alt={roots.title} /></div>
            <h3>The Gaze</h3>
            <p>Presence before performance. Each woman meets the world entirely as herself.</p>
          </article>
          <article>
            <span>02</span>
            <div className="artist-language-image artist-language-crop"><img src={sovereignty.image} alt="Gold and textile detail" /></div>
            <h3>The Memory</h3>
            <p>Culture lives in the smallest details—pattern, ornament, ritual and what is carried forward.</p>
          </article>
          <article>
            <span>03</span>
            <div className="artist-language-image"><img src={grace.image} alt="Gold illuminated portrait detail" /></div>
            <h3>The Gold</h3>
            <p>Not decoration, but illumination: a mark of dignity, lineage and inherent worth.</p>
          </article>
        </div>
      </section>

      <section className="artist-interlude">
        <img src={roots.image} alt={roots.title} />
        <div>
          <span>THE WORK, UP CLOSE</span>
          <p>“Every portrait begins with a woman. Everything else exists to reveal her.”</p>
          <small>PAINTED GOLD BY NIKI</small>
        </div>
      </section>

      <section className="artist-process-v2">
        <div className="artist-process-copy">
          <span>INSIDE THE STUDIO</span>
          <h2>From first mark<br />to final light.</h2>
          <p>The work develops slowly—through composition, layers of colour, texture and the final luminous details that give each portrait its presence.</p>
          <div className="artist-process-steps">
            <div><b>01</b><span>Study & composition</span></div>
            <div><b>02</b><span>Colour & character</span></div>
            <div><b>03</b><span>Texture & gold</span></div>
          </div>
          <small>Studio films and process photography will live here soon.</small>
        </div>
        <div className="artist-process-screen">
          <img src={sovereignty.image} alt="Inside the Painted Gold visual world" />
          <span>STUDIO FILM · COMING SOON</span>
          <i>PLAY</i>
        </div>
      </section>

      <section className="artist-closing">
        <span>MEET HER THROUGH THE WORK</span>
        <h2>Nine women.<br /><em>Nine forms of power.</em></h2>
        <div>
          <Link href="/collection">Explore HER</Link>
          <a href="mailto:studio@paintedgoldbyniki.com">Contact the studio</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
