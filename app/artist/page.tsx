import Link from "next/link";
import { herWorks } from "../her-data";
import { SiteFooter, SiteNav } from "../site-components";

export default function Artist() {
  return (
    <main className="artist-page artist-portrait">
      <SiteNav />

      <section className="artist-about-hero">
        <div className="artist-about-copy">
          <span>ABOUT THE ARTIST · VANCOUVER</span>
          <h1>This is<br /><em>Niki.</em></h1>
          <p className="artist-about-lead">An artist drawn to the stories women carry—and to the beauty, strength and identity that can live inside a single portrait.</p>
          <a href="#meet-niki">Meet the artist</a>
        </div>
        <figure className="artist-about-photo">
          <img src={herWorks[3].image} alt="A placeholder for Niki's future artist portrait" />
          <figcaption>
            <span>ARTIST PORTRAIT</span>
            <b>YOUR PHOTO WILL LIVE HERE</b>
          </figcaption>
        </figure>
      </section>

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
          <img src={herWorks[0].image} alt="Portrait artwork by Niki" />
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
          <img src={herWorks[4].image} alt="Her Roots by Niki" />
        </div>
        <div className="artist-letter-copy">
          <span>A NOTE FROM NIKI</span>
          <p>“My hope is that you do not only see a painting. I hope you recognise a feeling, a memory, a woman you know—or perhaps a part of yourself.”</p>
          <i>— Niki</i>
          <small>A personal video from the artist can be added here later.</small>
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
