import Image from "next/image";
import Link from "next/link";
import { herStatement, herWorks } from "../her-data";
import { SiteFooter, SiteNav } from "../site-components";

export default function Collection() {
  return (
    <main className="collection-cinema">
      <SiteNav dark />

      <section className="collection-film-hero">
        <Image
          src={herWorks[8].image}
          alt={herWorks[8].title}
          fill
          priority
          sizes="100vw"
        />
        <div className="collection-film-shade" />
        <div className="collection-film-intro">
          <span>PAINTED GOLD BY NIKI · COLLECTION I</span>
          <h1>H E R.</h1>
          <p>Nine portraits. Nine powers. One universal story of womanhood.</p>
          <a href="#chapter-01">Begin the exhibition</a>
        </div>
        <div className="collection-film-index">
          <b>09</b>
          <span>ORIGINAL WORKS<br />2026</span>
        </div>
      </section>

      <section className="collection-prologue">
        <span>THE COLLECTION</span>
        <div>
          <h2>She is not<br />one definition.</h2>
          <p>{herStatement}</p>
          <blockquote>Every portrait tells a different story. Every woman holds a different power. Together, they tell one story—HER.</blockquote>
        </div>
      </section>

      <nav className="collection-chapter-nav" aria-label="Artwork chapters">
        {herWorks.map((work) => (
          <a href={`#chapter-${work.no}`} key={work.no}>
            <span>{work.no}</span>{work.power}
          </a>
        ))}
      </nav>

      <section className="collection-chapters">
        {herWorks.map((work, index) => (
          <article
            id={`chapter-${work.no}`}
            className={`collection-chapter ${index % 2 ? "chapter-reverse" : ""} chapter-tone-${index % 4}`}
            key={work.no}
          >
            <div className="chapter-artwork">
              <Image
                src={work.image}
                alt={work.title}
                width={1365}
                height={2048}
                sizes="(max-width: 850px) 100vw, 56vw"
              />
              <span className="chapter-frame-number">{work.no} / 09</span>
              <span className="chapter-frame-label">ORIGINAL PORTRAIT · ONE OF ONE</span>
            </div>

            <div className="chapter-narrative">
              <div className="chapter-kicker">
                <span>CHAPTER {work.no}</span>
                <i />
                <span>{work.culture}</span>
              </div>
              <div className="chapter-power">{work.power}</div>
              <h2>{work.title}</h2>
              <blockquote>“{work.line}”</blockquote>
              <p>{work.story}</p>
              <div className="chapter-actions">
                <Link href={`/acquire#work-${work.no}`}>Collect the print</Link>
                <a href={`mailto:studio@paintedgoldbyniki.com?subject=Original enquiry — ${work.title}`}>Enquire about the original</a>
              </div>
              <span className="chapter-watermark">{work.no}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="collection-gold-epilogue">
        <span>THE THREAD BETWEEN THEM</span>
        <h2>Gold is not placed<br />upon her.</h2>
        <p>It is the worth, spirit and power that have always existed within her.</p>
        <div>
          <Link href="/acquire">Explore print editions</Link>
          <a href="mailto:studio@paintedgoldbyniki.com?subject=Private original viewing">Arrange a private viewing</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
