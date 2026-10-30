import Image from "next/image";
import Link from "next/link";
import { herWorks } from "../her-data";
import { SiteFooter, SiteNav } from "../site-components";

export default function Artist() {
  return (
    <main className="artist-page artist-portrait">
      <SiteNav />

      <section className="artist-about-hero">
        <div className="artist-about-copy">
          <span>THE ARTIST BEHIND THE GOLD · VANCOUVER</span>
          <h1>Art begins<br />with <em>her.</em></h1><div className="artist-signature">NIKI <i>—</i> PAINTED GOLD</div>
          <p className="artist-about-lead">An artist drawn to the stories women carry—and to the beauty, strength and identity that can live inside a single portrait.</p>
          <a href="#meet-niki">Meet the artist</a>
        </div>
        <figure className="artist-about-photo">
          <Image src="/editorial/artist-intro.webp" alt="Niki photographed with her HER collection" width={1638} height={2048} sizes="(max-width:850px) 100vw, 48vw" priority />
          <figcaption>
            <span>IN HER ELEMENT</span>
            <b>NIKI · ARTIST & FOUNDER</b>
          </figcaption>
        </figure>
      </section>

      <section className="artist-editorial-banner"><span>WOMEN · IDENTITY · CULTURE · GOLD</span><p>Every canvas holds more than a portrait. It holds a story.</p><div className="artist-editorial-image"><Image src="/editorial/gallery-editorial.webp" alt="Niki and her paintings in the studio" width={1800} height={1200} sizes="(max-width:850px) 100vw, 60vw"/></div></section>

      <section className="meet-niki" id="meet-niki">
        <aside>
          <span>01 · WHO SHE IS</span>
          <p>NIKI<br />ARTIST & FOUNDER<br />PAINTED GOLD</p>
        </aside>
        <div>
          <h2>For Niki, painting is a way of paying attention.</h2>
          <p>Niki is a Vancouver-based artist and the creative voice behind Painted Gold by Niki. Her work is centred on women: how they hold themselves, where they come from, what they have lived through, and the power they may not always say aloud.</p>
          <p>She is interested in more than creating a likeness. She paints to capture presence—the feeling that remains after a person has left the room.</p>
        </div>
      </section>

      <section className="artist-why">
        <div className="artist-why-image">
          <Image src="/editorial/artist-process.webp" alt="Niki working on her paintings" width={1365} height={2048} sizes="(max-width:850px) 100vw, 48vw" />
          <span>A DETAIL FROM HER WORLD</span>
        </div>
        <div className="artist-why-copy">
          <span>02 · WHY SHE PAINTS</span>
          <h2>To make women feel seen.</h2>
          <blockquote>“I want every woman in my work to feel like she belongs at the centre of the canvas.”</blockquote>
          <p>Her portraits are created as acts of recognition. They honour individuality without separating it from culture, memory or lineage. Softness can exist beside strength. Tradition can exist beside freedom. Beauty can be quiet and still command the room.</p>
          <p>Painting gives Niki a language for all of it—the things that are inherited, the things that are chosen, and the parts of ourselves we learn to claim.</p>
        </div>
      </section>

      <section className="artist-gold-note">
        <span>03 · WHY GOLD</span>
        <div>
          <h2>Gold is her reminder<br />of what was already there.</h2>
          <p>In Niki&apos;s work, gold is not used to give a woman value. It reveals the value she already carries. It catches the light, draws the eye and turns each portrait into something that feels both intimate and enduring.</p>
        </div>
      </section>

      <section className="artist-letter">
        <div className="artist-letter-art">
          <Image src={herWorks[4].image} alt="Her Roots portrait artwork" width={1568} height={2048} sizes="(max-width:850px) 100vw, 48vw" />
        </div>
        <div className="artist-letter-copy">
          <span>A NOTE FROM NIKI</span>
          <p>My hope is that you do not only see a painting. I hope you recognise a feeling, a memory, a woman you know—or perhaps a part of yourself.</p>
          <i>— Niki</i>

        </div>
      </section>

      <section className="artist-personal-details">
        <div>
          <span>BASED IN</span>
          <p>Vancouver, Canada</p>
        </div>
        <div>
          <span>MEDIUM</span>
          <p>Portraiture & gold detail</p>
        </div>
        <div>
          <span>AT THE HEART</span>
          <p>Women, identity & belonging</p>
        </div>
      </section>

      <section className="artist-about-closing">
        <span>SEE THE WORLD THROUGH HER EYES</span>
        <h2>Meet the women<br />she brought to life.</h2>
        <div>
          <Link href="/collection">View the collection</Link>
          <a href="mailto:studio@paintedgoldbyniki.com">Write to Niki</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
