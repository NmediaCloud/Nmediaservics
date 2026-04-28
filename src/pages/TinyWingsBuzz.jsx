import React from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./IPSeries";
import SiteHeader from "../components/SiteHeader";

/**
 * Tiny Wings, Big Job — IP detail page.
 * Pre-school animated series (toddlers 2-5). Pilot complete.
 */
export default function TinyWingsBuzz() {
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
            </div>
            <div className="lg:col-span-5 text-on-surface-variant font-light leading-relaxed">
              <p className="text-lg">
                Buzz is a hummingbird with a too-big heart and a too-small job
                description. Every episode finds her in a daily-routine
                challenge — bedtime, sharing, tantrums, transitions — and
                every episode lands on a small, complete win.
              </p>
            </div>
          </div>
        </header>

        {/* ── PILOT STILL / PLACEHOLDER ─────────────────── */}
        <section className="px-8 mb-32 max-w-7xl mx-auto">
          <div className="relative aspect-video bg-surface-container-low border border-outline-variant/10 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-surface-container to-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-[120px] opacity-30">flutter_dash</span>
              <a href="mailto:nanda@nmediaservices.com" className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest uppercase hover:bg-[#ff8a3d] transition-colors">
                <span className="material-symbols-outlined">play_arrow</span>
                Request Pilot Screener
              </a>
              <p className="font-label text-[10px] text-on-surface-variant/50 tracking-widest uppercase">
                Pitch deck · pilot link · series bible available on request
              </p>
            </div>
            <div className="absolute top-4 left-4 font-label text-[10px] text-primary bg-surface/80 px-2 py-1 backdrop-blur-md">
              [ PILOT // BUZZ'S BIG PURPOSE ]
            </div>
          </div>
        </section>

        {/* ── LOGLINE ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10 mb-0">
          <div className="max-w-5xl mx-auto px-8">
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

        {/* ── WHAT EVERY EPISODE DOES ─────────────────── */}
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

        {/* ── CHARACTERS ─────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ CAST // CORE ]
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none mb-6">
                Buzz.
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed">
                A small hummingbird with a determined heart. Every Buzz episode
                centres on her trying a job that's just slightly too big for
                her wings — and finding out that "small" is exactly the
                right size for the job that matters.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {SUPPORTING.map((c) => (
                <div key={c.name} className="bg-surface-container border border-outline-variant/10 p-6 flex gap-4 items-start hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-2xl">{c.icon}</span>
                  <div>
                    <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">{c.name}</h4>
                    <p className="text-sm text-on-surface-variant font-light">{c.body}</p>
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

const EPISODE_DNA = [
  { icon: "psychology", label: "SEL Through Story", body: "Every episode lands one small social-emotional skill — sharing, patience, sleep, tantrum recovery — without ever being a lesson." },
  { icon: "schedule",   label: "Daily-Routine Beats", body: "Stories anchored in toddler-real moments: getting dressed, eating dinner, bedtime, the playground." },
  { icon: "auto_awesome", label: "Sensory Rhythm", body: "Visual and aural rhythm tuned for the pre-verbal end of the audience — sound, movement, repeat." },
  { icon: "music_note", label: "Rhyme + Rhythm", body: "Light verse cadences thread the narration, supporting language acquisition and re-watch retention." },
  { icon: "favorite",   label: "Big Feelings Made Small", body: "Emotional weather modelled at toddler scale — naming, feeling, recovering. Always landing kind." },
  { icon: "celebration", label: "Earned Wins", body: "Buzz never solves it for free. Every episode resolves on a small, real triumph she had to work toward." },
];

const SUPPORTING = [
  { name: "The Daily Crew",    icon: "groups",            body: "Repeating ensemble — friends, family, neighbours — each anchoring a recurring routine moment." },
  { name: "The Sky World",     icon: "filter_drama",      body: "Buzz's home — a layered backyard universe seen at hummingbird scale." },
  { name: "The Big Job Board", icon: "assignment",        body: "Visual recurring device — every episode opens with Buzz pulling a new 'job card' that frames the SEL beat." },
];
