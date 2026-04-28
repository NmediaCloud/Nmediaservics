import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./IPSeries";
import SiteHeader from "../components/SiteHeader";
import PicsModal from "../components/PicsModal";

/**
 * Tiny Wings, Big Job — IP detail page.
 * Pre-school animated series (toddlers 2-5). Pilot complete.
 *
 * Mirrors the legacy Wix page at
 *   nmediaservices.wixsite.com/nmedia/tiny-wings-buzz-ip-content-age-5-to-1
 * but in the dark editorial design system. Embeds the pilot + pitch
 * videos, the Tiny-Hero-Purpose poster, the 8-character cast strip,
 * and the toddler-engagement framework.
 */
const IMG = "/images/ip/tiny-wings";

export default function TinyWingsBuzz() {
  const [castOpen, setCastOpen] = useState(false);
  const [castInitial, setCastInitial] = useState(null);
  const openCast = (file) => { setCastInitial(file); setCastOpen(true); };
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32 pb-24">

        {/* ── BACK CRUMB ─────────────────────────────────── */}
        <div className="px-8 mb-6 max-w-7xl mx-auto">
          <Link to="/ip-series" className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to IP Slate
          </Link>
        </div>

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end border-b border-outline-variant/20 pb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-primary font-label text-xs tracking-[0.3em] uppercase">
                <span className="px-2 py-1 bg-primary/10 border border-primary/30">VOL. 01</span>
                <span>Pilot Complete</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
                Tiny Wings,<br />
                <span className="text-primary">Big Job.</span>
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                Animation Series · Toddlers 2–5
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-xl pt-4 text-lg">
                Buzz is a hummingbird with a too-big heart and a too-small job
                description. Every episode finds her in a daily-routine
                challenge — bedtime, sharing, tantrums, transitions — and
                every episode lands on a small, complete win.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low border border-outline-variant/10 overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                <img src={`${IMG}/tw_02.jpg`} alt="Buzz · Tiny Wings, Big Job" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* ── CAST STRIP (lifted to top) ─────────────── */}
        <section className="px-8 mb-32 max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ CAST // VISUAL_SHEET ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              The hive.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Buzz at the centre — the daily-life ensemble that anchors every
              routine moment, every recurring beat.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {CAST.map((c) => (
              <figure key={c.file} className="group">
                <button
                  type="button"
                  onClick={() => openCast(c.file)}
                  className="block w-full bg-surface-container border border-outline-variant/10 group-hover:border-primary/40 overflow-hidden transition-all duration-500 cursor-zoom-in transform-gpu group-hover:scale-[1.06] group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:z-10 relative"
                  style={{ aspectRatio: "3 / 4" }}
                  aria-label={`View ${c.name}`}
                >
                  <img
                    src={`${IMG}/${c.file}`}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </button>
                <figcaption className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant text-center mt-3 group-hover:text-primary transition-colors">
                  {c.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <PicsModal
          open={castOpen}
          onClose={() => setCastOpen(false)}
          pics={CAST.map((c) => c.file)}
          basePath={IMG}
          title="The Hive · Cast"
          initialZoom={castInitial}
        />

        {/* ── PURPOSE POSTER ────────────────────────────── */}
        <section className="px-8 mb-32 max-w-6xl mx-auto">
          <div className="bg-[#0f0f0f] border border-outline-variant/10 p-6 md:p-10">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6 text-center">
              [ KEY ART // A TINY HERO'S PURPOSE ]
            </p>
            <img src={`${IMG}/tw_09.jpg`} alt="A Tiny Hero's Purpose — Tiny Wings Big Job" className="w-full max-w-2xl mx-auto" />
          </div>
        </section>

        {/* ── PILOT + PITCH VIDEO ───────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ SCREENERS // PILOT_AND_PITCH ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                Watch the work.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary/70 uppercase mb-3">
                  Pilot · Buzz's Big Purpose
                </p>
                <div className="aspect-video bg-black border border-outline-variant/10 overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/tNR547OKgaA?rel=0&modestbranding=1"
                    title="Pilot · Buzz's Big Purpose"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary/70 uppercase mb-3">
                  Pitch Video · Tiny Wings, Big Job
                </p>
                <div className="aspect-video bg-black border border-outline-variant/10 overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Gg8gb52E5O0?rel=0&modestbranding=1"
                    title="Pitch Video · Tiny Wings, Big Job"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGLINE ──────────────────────────────────── */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
              [ LOGLINE ]
            </p>
            <p className="font-headline text-2xl md:text-4xl font-bold leading-tight tracking-tight">
              A hummingbird's wings might be small — but every flutter is a
              <span className="text-primary"> big job</span> when you're
              two years old and the world is enormous.
            </p>
          </div>
        </section>

        {/* ── EPISODE DNA ─────────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ EPISODE_DNA ]
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
              The DNA of every beat.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {EPISODE_DNA.map((d) => (
              <article key={d.label} className="bg-surface-container border border-outline-variant/10 p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{d.icon}</span>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3">{d.label}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{d.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── TODDLER ENGAGEMENT FRAMEWORK ───────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  [ DEVELOPMENT_FRAMEWORK ]
                </p>
                <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                  How toddlers<br />engage.
                </h2>
              </div>
              <div className="lg:col-span-7 text-on-surface-variant font-light leading-relaxed">
                <p>
                  To capture a toddler's interest, content should align with
                  their current developmental stage — relatable daily
                  experiences, social-emotional skills, sensory-rich
                  interactions. Every "Tiny Wings" beat is built from the five
                  pillars below.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {PILLARS.map((p) => (
                <article key={p.title} className="bg-surface-container border border-outline-variant/10 p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{p.icon}</span>
                  <h3 className="font-headline font-bold text-base uppercase tracking-tight mb-4">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm text-on-surface-variant font-light leading-relaxed flex gap-2">
                        <span className="text-primary/60">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-12 text-on-surface-variant font-light leading-relaxed max-w-3xl">
              Think of a toddler's interest as a mirror and a window — they're
              most captivated by the mirror of their own daily life, and the
              window into worlds just slightly bigger than the one they
              already know. <span className="text-primary">Tiny Wings</span> is
              built to be both.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-white uppercase">
              Pitch deck. Pilot screener.<br />Series bible.
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Available on request for broadcasters, distributors, OTT acquisition teams.
            </p>
            <a href="mailto:nanda@nmediaservices.com" className="inline-block bg-primary text-on-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-[#ff8a3d] transition-all">
              Request Materials →
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

// 8-character cast row from the legacy page (tw_01-08)
const CAST = [
  { file: "tw_01.png", name: "Buzz · In Flight" },
  { file: "tw_02.jpg", name: "Buzz · Hero" },
  { file: "tw_03.png", name: "Inside the Hive" },
  { file: "tw_04.png", name: "Hive Crew · 01" },
  { file: "tw_05.png", name: "Hive Crew · 02" },
  { file: "tw_06.png", name: "Hive Crew · 03" },
  { file: "tw_07.png", name: "Hive Crew · 04" },
  { file: "tw_08.png", name: "Hive Crew · 05" },
];

const EPISODE_DNA = [
  { icon: "psychology", label: "SEL Through Story", body: "Every episode lands one small social-emotional skill — sharing, patience, sleep, tantrum recovery — without ever being a lesson." },
  { icon: "schedule",   label: "Daily-Routine Beats", body: "Stories anchored in toddler-real moments: getting dressed, eating dinner, bedtime, the playground." },
  { icon: "auto_awesome", label: "Sensory Rhythm", body: "Visual and aural rhythm tuned for the pre-verbal end of the audience — sound, movement, repeat." },
  { icon: "music_note", label: "Rhyme + Rhythm", body: "Light verse cadences thread the narration, supporting language acquisition and re-watch retention." },
  { icon: "favorite",   label: "Big Feelings Made Small", body: "Emotional weather modelled at toddler scale — naming, feeling, recovering. Always landing kind." },
  { icon: "celebration", label: "Earned Wins", body: "Buzz never solves it for free. Every episode resolves on a small, real triumph she had to work toward." },
];

// Five toddler-engagement pillars condensed from the legacy page bullets.
const PILLARS = [
  {
    icon: "home",
    title: "Daily Life & Routines",
    points: [
      "Realistic, recognisable activities — grocery store, breakfast, getting dressed.",
      "The 'story of their day' — what they ate, where they went.",
      "Transport, vehicles, tools — high-interest familiar objects.",
      "Playtime mirrored — blocks, parks, sandbox moments.",
    ],
  },
  {
    icon: "favorite",
    title: "Social & Emotional Learning",
    points: [
      "Managing big feelings — modelled, named, resolved.",
      "Taking turns, sharing, cause and effect.",
      "Kindness, compassion, empathy as character defaults.",
    ],
  },
  {
    icon: "pets",
    title: "Natural World & Animals",
    points: [
      "Animal characters and the sounds they make.",
      "Gentle STEM — zoology, ecology, counting, shapes.",
      "Environmental care woven in, never preached.",
    ],
  },
  {
    icon: "auto_awesome",
    title: "Fantasy, Bravery & Humor",
    points: [
      "Superhero play — feeling powerful at toddler scale.",
      "Friendly imaginary characters — fairies, gentle monsters.",
      "Physical humour — age-appropriate, laugh-out-loud reliable.",
      "Safe mystery and discovery beats.",
    ],
  },
  {
    icon: "music_note",
    title: "Sensory & Rhythmic",
    points: [
      "Repetition — 'again, again' is a feature, not a bug.",
      "Rhyme, rhythm, song — language scaffolding.",
      "Bold colour, high contrast, clear silhouette design.",
    ],
  },
];
