import Image from "next/image";
import Link from "next/link";
import { herWorks } from "../her-data";
import { SiteFooter, SiteNav } from "../site-components";

const powerThoughts = [
  "Softness can hold extraordinary strength.",
  "What is inherited can become newly hers.",
  "Confidence needs no invitation.",
  "She belongs, above all, to herself.",
  "Her foundation travels wherever she grows.",
  "The soul remains free through every season.",
  "Fear may exist. It does not lead.",
  "Tradition lives when she gives it presence.",
  "She takes up space without asking permission."
];

export default function Stories() {
  return (
    <main className="gold-within-page">
      <SiteNav dark />

      <section className="gold-within-hero">
        <div className="gold-hero-copy">
          <span>THE PHILOSOPHY OF H E R</span>
          <h1>The Gold<br /><em>Within.</em></h1>
          <p>Gold does not make her worthy. It reveals the worth that was already there.</p>
          <a href="#meaning">Discover the meaning</a>
        </div>
        <div className="gold-hero-art">
          <Image src={herWorks[7].image} alt={herWorks[7].title} width={1365} height={2048} priority sizes="(max-width: 850px) 100vw, 52vw" />
          <div className="gold-detail">
            <Image src={herWorks[1].image} alt="Gold detail from Her Legacy" width={1365} height={2048} sizes="24vw" />
          </div>
          <span>GOLD · WORTH · PRESENCE</span>
        </div>
      </section>

      <section className="gold-meaning" id="meaning">
        <span>01 · THE SYMBOL</span>
        <div>
          <h2>Not decoration.<br />A declaration.</h2>
          <p>Gold flows through every portrait as a symbol of inherent worth. It is not something placed upon these women by the world. It represents what has always lived within them—the dignity they carry, the histories they honour, and the power to define themselves.</p>
        </div>
      </section>

      <section className="gold-quote">
        <p>“What makes a woman extraordinary is not something given to her.”</p>
        <span>IT HAS ALWAYS EXISTED WITHIN HER.</span>
      </section>

      <section className="nine-powers">
        <header>
          <span>02 · THE NINE POWERS</span>
          <h2>Nine ways<br />of being HER.</h2>
          <p>Different cultures. Different histories. Different expressions of a power that is deeply personal and universally understood.</p>
        </header>
        <div className="power-ledger">
          {herWorks.map((work, index) => (
            <Link href={`/collection#chapter-${work.no}`} className="power-entry" key={work.no}>
              <span>{work.no}</span>
              <div className="power-thumb">
                <Image src={work.image} alt="" width={1365} height={2048} sizes="96px" />
              </div>
              <h3>{work.power}</h3>
              <p>{powerThoughts[index]}</p>
              <b>{work.title}</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="gold-connection">
        <div className="connection-image">
          <Image src={herWorks[4].image} alt={herWorks[4].title} width={1365} height={2048} sizes="(max-width: 850px) 100vw, 45vw" />
        </div>
        <div>
          <span>03 · THE CONNECTION</span>
          <h2>Different roots.<br />One living story.</h2>
          <p>Though their clothing, traditions, histories, and stories may differ, the women of HER carry something universal. They carry the women who came before them, the lives they have shaped for themselves, and the possibilities of the women still to come.</p>
          <p>She can be soft and still be strong. She can honour tradition and still forge her own path. She can carry her history without being confined by it.</p>
          <Link href="/collection">Enter the complete collection</Link>
        </div>
      </section>

      <section className="gold-final">
        <span>H E R IS NOT ONE DEFINITION OF A WOMAN.</span>
        <h2>Every woman holds<br />a different power.</h2>
        <p>Together, they tell one story—HER.</p>
        <Link href="/acquire">Collect a piece of the story</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
