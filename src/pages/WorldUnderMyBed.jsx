import React from "react";
import { Link } from "react-router-dom";
import { SiteNav, SiteFooter } from "./IPSeries";

/**
 * The World Under My Bed — IP detail page.
 * Pre-school SEL series (toddlers 2-6) about transforming bedtime
 * worry into morning calm. Characters: Lumi, Patch, Whisp.
 */
export default function WorldUnderMyBed() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteNav active="studio" />

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
                <span className="px-2 py-1 bg-primary/10 border border-primary/30">VOL. 04</span>
                <span>Development</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
                The World <span className="text-primary">Under</span><br />
                My Bed.
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                Animation Series · Toddlers 2–6 · Bedtime SEL
              </p>
            </div>
            <div className="lg:col-span-5 text-on-surface-variant font-light leading-relaxed">
              <p className="text-lg italic">
                Think of a nightlight that doesn't just sit on a shelf —
                but actively steps into the shadows to tidy up the worries
                of the day so the morning can start fresh.
              </p>
            </div>
          </div>
        </header>

        {/* ── HERO POSTER / PLACEHOLDER ─────────────────── */}
        <section className="px-8 mb-32 max-w-7xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-[#1a0500] via-[#2a0f00] to-surface-container-low border border-outline-variant/10 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="flex gap-8 items-center opacity-40">
                <span className="material-symbols-outlined text-primary text-[80px]">bedtime</span>
                <span className="material-symbols-outlined text-primary text-[100px]">nightlight</span>
                <span className="material-symbols-outlined text-primary text-[80px]">cloud</span>
              </div>
              <a href="mailto:nanda@nmediaservices.com" className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest uppercase hover:bg-[#ff8a3d] transition-colors">
                <span className="material-symbols-outlined">description</span>
                Request Pitch Deck
              </a>
            </div>
            <div className="absolute top-4 left-4 font-label text-[10px] text-primary bg-surface/80 px-2 py-1 backdrop-blur-md">
              [ DEVELOPMENT // SEL_PRESCHOOL ]
            </div>
          </div>
        </section>

        {/* ── SYNOPSIS ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-5xl mx-auto px-8">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
              [ SYNOPSIS ]
            </p>
            <p className="font-headline text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-8">
              A Central Learner — the child — perceives a Large Threat: the darkness.
            </p>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-6">
              A Unified Network of specialised helpers — <span className="text-primary font-medium">Lumi</span>,
              <span className="text-primary font-medium"> Patch</span>,
              <span className="text-primary font-medium"> Whisp</span> and the rest of the Under-Bed Crew —
              use their unique skills to transform that threat into a positive outcome:
              a calm morning.
            </p>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Each episode names one daily worry — a separation moment, a noise in
              the dark, a too-big feeling — and walks through it from the safety
              of a child's most personal frontier: the world right under the bed.
            </p>
          </div>
        </section>

        {/* ── CHARACTERS ──────────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ CAST // THE UNDER-BED CREW ]
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
              Specialised helpers.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {CHARACTERS.map((c) => (
              <article key={c.name} className="bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-primary text-5xl mb-4 block">{c.icon}</span>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-2">{c.name}</h3>
                <p className="font-label text-[10px] text-primary tracking-widest uppercase mb-4">{c.role}</p>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── THEMES ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ THEMES // SEL ]
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                What every<br />night carries.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-1">
              {THEMES.map((t) => (
                <div key={t.title} className="bg-surface-container border border-outline-variant/10 p-6 flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-1">{t.icon}</span>
                  <div>
                    <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">{t.title}</h4>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-white uppercase">
              Pitch deck.<br />Series bible. Look-dev.
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Available for broadcasters, distributors and OTT acquisition teams.
              Pilot in active development.
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

const CHARACTERS = [
  { name: "Lumi",  icon: "lightbulb",      role: "The Light-Keeper",      body: "Holds the small, certain glow that makes the room navigable when the lamps go off. Quiet. Reliable. The first to arrive." },
  { name: "Patch", icon: "auto_fix_normal", role: "The Repairer",         body: "Mends the day's small frays — a torn moment, an unkind word, a missed nap. Hands always full of soft solutions." },
  { name: "Whisp", icon: "air",            role: "The Noise-Tamer",       body: "Catches the loud worries — the ones that buzz too close to a falling-asleep ear — and turns them into something gentler." },
];

const THEMES = [
  { icon: "psychology",  title: "Naming Big Feelings",  body: "Worry, fear, frustration, missing-someone — each named at toddler scale, never minimised, always met." },
  { icon: "shield",      title: "Brave is Small",        body: "Courage modelled at a size a 3-year-old can mirror: stepping toward, not away. Tiny choices repeated nightly." },
  { icon: "auto_awesome", title: "Transform, Don't Fight", body: "The Under-Bed Crew never battles the darkness. They tidy it. Reframing the threat as something workable, not enemy." },
  { icon: "wb_sunny",    title: "A Calm Morning",        body: "Every episode lands on the same beat: sunlight finds the room, and the worry is smaller now. Repeat-watch retention by design." },
];
