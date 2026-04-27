import React from "react";
import { Link } from "react-router-dom";
import VideoGrid from "../components/VideoGrid";

/**
 * AnimationVFX — 3D Animation & VFX showcase.
 *
 * Recreates the legacy Wix portfolio (mnkmars.wixsite.com/demo) inside
 * the site's design system. Lists the technical animation credits and
 * pipeline expertise (Disney, Nickelodeon, Lego, Paw Patrol, etc.).
 */
export default function AnimationVFX() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      {/* ── NAV (logo only — mountain SVG + wordmark) ──────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl">
        <div className="flex items-center w-full px-8 py-6 max-w-full">
          <Link to="/" className="flex items-center gap-3 text-[#E5E2E1] hover:text-primary transition-colors">
            <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" aria-hidden="true" className="w-8 h-6">
              <polygon points="32,4 60,40 4,40" />
              <polygon points="18,18 32,40 4,40" />
              <polygon points="46,18 60,40 32,40" />
            </svg>
            <span className="text-2xl font-black tracking-tighter font-headline">NMEDIA INC.</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32">

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant/20 pb-12">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
              Industrial-Grade <span className="text-primary">Animation</span>
            </h1>
            <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
              Character and environment execution across cinematic pipelines —
              motion capture, facial capture, animation, lighting and rendering.
              Two decades of credits across Disney, Nickelodeon, Lego, Paw Patrol
              and the global animated-series circuit.
            </p>
          </div>
        </section>

        {/* ── STATUS TICKER ─────────────────────────────── */}
        <div className="w-full overflow-hidden bg-surface-container-low py-3 mb-24 whitespace-nowrap border-y border-outline-variant/10">
          <div className="flex gap-12 font-label text-[10px] tracking-[0.4em] text-primary/50 uppercase">
            <span className="block">
              MOCAP · FACIAL_CAPTURE · ANIMATION · LIGHTING · RENDERING ·
              RIGGING · RETOPOLOGY · UV_UNWRAP · TRANSFER · TECHNICAL_DIRECTION
            </span>
          </div>
        </div>

        {/* ── VIDEO REEL ─────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ REEL · {ANIM_VIDEOS.length} ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                Animation Reels
              </h2>
            </div>
            <a href="https://www.youtube.com/@nmediaservices2014" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors">
              Open on YouTube
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
          <VideoGrid videos={ANIM_VIDEOS} />
        </section>

        {/* ── CAPABILITIES ─────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ DISCIPLINES // 06 ACTIVE ]
              </p>
              <h2 className="font-headline text-xl md:text-3xl font-bold tracking-tight uppercase leading-none">
                Technical Animation Direction.
              </h2>
              <p className="mt-6 text-on-surface-variant font-light leading-relaxed max-w-sm">
                The full character pipeline — from re-topology through delivery —
                handled by one technical hand. No hand-offs. No drift.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {DISCIPLINES.map((d) => (
                <div key={d.id} className="bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <p className="font-label text-[10px] text-primary mb-2 tracking-widest uppercase">{d.id}</p>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-3">{d.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS / CREDITS ──────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  [ CREDITS // SELECTED_WORKS ]
                </p>
                <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-white leading-none uppercase">
                  Projects.
                </h2>
              </div>
              <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
                Credits across {PROJECTS.length} productions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
              {PROJECTS.map((p, i) => (
                <article key={p.title} className="group bg-surface-container p-8 border border-outline-variant/5 hover:bg-surface-container-high hover:border-primary/20 transition-all">
                  <p className="font-label text-[10px] text-primary mb-3 tracking-widest uppercase">
                    Entry {String(i + 1).padStart(3, "0")}
                  </p>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-light mb-4">{p.studio}</p>
                  <div className="flex items-center justify-between border-t border-outline-variant/10 pt-3 mt-auto">
                    <span className="font-label text-[9px] tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">
                      {p.role}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXTERNAL PROFILES ───────────────────────── */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ FULL CREDITS // EXTERNAL ]
            </p>
            <h2 className="font-headline text-xl md:text-2xl font-bold tracking-tight mb-10 uppercase leading-none">
              The longer record.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://www.imdb.com/name/nm12576040/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-surface-container border border-outline-variant/20 hover:border-primary/40 text-on-surface px-8 py-4 font-label text-sm tracking-widest uppercase transition-all">
                IMDb · Full Filmography
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
              <a href="https://www.linkedin.com/in/mnkmars/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-surface-container border border-outline-variant/20 hover:border-primary/40 text-on-surface px-8 py-4 font-label text-sm tracking-widest uppercase transition-all">
                LinkedIn · Profile
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
              <a href="https://www.youtube.com/@nmediaservices2014" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest uppercase hover:bg-[#ff8a3d] transition-colors">
                Watch Reel
                <span className="material-symbols-outlined text-base">play_arrow</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA (minimal pull-quote) ──────────────────────── */}
        <section className="py-20 px-8 text-center bg-surface relative overflow-hidden border-t border-outline-variant/10">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white">
              Got a character pipeline that needs steering?
            </h2>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}


// ── DATA ──────────────────────────────────────────────────────────

// Video reel — extracted from mnkmars.wixsite.com/demo
const ANIM_VIDEOS = [
  { id: "0c4cQUmFbCE", title: "Paw Patrol · Big Movie Special" },
  { id: "21LEzxC2lac", title: "Paw Patrol · Series Highlights" },
  { id: "CHC2yiJ520g", title: "Animation Demo Reel · v04" },
  { id: "sbk-vX8oRyI", title: "Animation Demo Reel · v04 (alt)" },
  { id: "Cn1JWvVQK3c", title: "Weather Hunters" },
  { id: "JRHyRJgZVZ0", title: "Animator Playblast" },
];

const DISCIPLINES = [
  { id: "DIS-01", title: "Character Animation", body: "Body mechanics, performance acting, blocking through final polish — across stylised and realistic registers." },
  { id: "DIS-02", title: "Facial Capture", body: "Capture-driven facial animation including model retopology, UV unwrapping and rig transfer for production." },
  { id: "DIS-03", title: "Lighting & Rendering", body: "Cinematic lighting and render passes — V-Ray, Blender Cycles/Eevee. Look-development across pipelines." },
  { id: "DIS-04", title: "Motion Capture", body: "Mocap pipeline ownership end-to-end — solving, retargeting, cleanup, blending into animator-finished takes." },
  { id: "DIS-05", title: "Texturing & Shaders", body: "Texturing, UV unwrapping, shader build-out for production-grade asset pipelines." },
  { id: "DIS-06", title: "Technical Direction", body: "Pipeline-level decisions — the role between 'animator' and 'pipeline TD' that keeps shows shipping." },
];

const PROJECTS = [
  { title: "Puppy Pals (Disney)",                 studio: "Snowball Studios",          role: "Animation" },
  { title: "Paw Patrol Series",                   studio: "Guru Studios",              role: "Animation" },
  { title: "Paw Patrol — Jet to the Rescue",      studio: "Guru Studios",              role: "Trailer Animation" },
  { title: "Paw Patrol — Big Movie Special",      studio: "Guru Studios",              role: "Animation" },
  { title: "Weather Hunters / Proud Family",      studio: "Guru Studios",              role: "Animation" },
  { title: "Tinker Bell (2006–2008)",             studio: "Disney",                    role: "Animator" },
  { title: "Lego Thor",                           studio: "Marks SGSCO",               role: "Animation · Texturing · Lighting" },
  { title: "Nickelodeon Ready Set Dance",         studio: "DarkSlope Studios · Toronto",role: "Animation · Blender Eevee Lighting" },
  { title: "Butterfly Tale Trailer",              studio: "—",                         role: "Technical Animation Director" },
  { title: "Lady Lama Animation · Facial Render", studio: "NFT Creators · Toronto",    role: "Facial Animation · Render" },
  { title: "Shallows (Movie VFX)",                studio: "—",                         role: "Animator" },
  { title: "Canada Dry",                          studio: "Tantrum Studios",           role: "Animation" },
  { title: "Real-Estate Motion Graphics",         studio: "Independent",               role: "Motion Graphics Animation" },
];


// ── Shared footer component (also used by other pages) ──────────────
function SiteFooter() {
  const CHANNEL = "https://www.youtube.com/@nmediaservices2014";
  return (
    <footer className="bg-surface-container-lowest py-16 px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Contact</p>
          <a href="mailto:nanda@nmediaservices.com" className="block text-sm text-on-surface hover:text-primary transition-colors mb-1">nanda@nmediaservices.com</a>
          <a href="mailto:nmedia.services@gmail.com" className="block text-sm text-on-surface-variant hover:text-primary transition-colors">nmedia.services@gmail.com</a>
        </div>
        <div>
          <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Studio</p>
          <p className="text-sm text-on-surface-variant">Toronto · M6N 4K7 · CA</p>
        </div>
        <div>
          <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Channels</p>
          <a href={CHANNEL} target="_blank" rel="noopener noreferrer" className="block text-sm text-on-surface-variant hover:text-primary transition-colors">YouTube · @nmediaservices2014</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10">
        <p className="text-xs text-on-surface-variant/50 font-label">© Nmedia Inc. · Animation Production Pipeline v1.1</p>
      </div>
    </footer>
  );
}
