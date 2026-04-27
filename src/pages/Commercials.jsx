import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Commercials — Ad / Promo / Trailer Visualisation portfolio.
 *
 * Mirrors the legacy Wix layout (nmediaservices.wixsite.com/nmedia/
 * ad-commercials-nmedia): a hero block + two video grids (F&B + Ad
 * Trailers, then BioMedical Visualizations). Each tile is a click-
 * to-play YouTube embed — thumbnail loads first, iframe swaps in
 * when the user clicks. Keeps the page light despite 27+ videos.
 */
export default function Commercials() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      {/* ── NAV (minimal — logo + CTA only) ──────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-full">
          <Link to="/" className="text-2xl font-black tracking-tighter text-[#E5E2E1] font-headline hover:text-primary transition-colors">
            NMEDIA INC.
          </Link>
          <a href="mailto:nanda@nmediaservices.com" className="bg-primary text-on-primary px-6 py-2 font-label font-bold tracking-tight active:scale-95 transition-transform">
            START PROJECT
          </a>
        </div>
      </nav>

      <main className="pt-32">

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant/20 pb-12 text-center">
            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">
              Nmediaservices · Commercials
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
              Ads · Commercial Promos · Trailer Visualization
            </h1>
            <p className="text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto text-lg">
              Show-case for Ad Commercials, Promos and Various-Industries Trailer
              Visualisation across <span className="text-primary">Animation</span>,
              <span className="text-primary"> Game</span>,
              <span className="text-primary"> Movie</span> and
              <span className="text-primary"> VFX</span>.
            </p>
          </div>
        </section>

        {/* ── PORTFOLIO GRID — F&B + AD TRAILERS ───────── */}
        <section className="px-8 max-w-7xl mx-auto mb-24">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ PLAYLIST · 01 ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                Ad Commercials
              </h2>
            </div>
            <a href={`https://www.youtube.com/playlist?list=${PLAYLIST_FB}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors">
              Open on YouTube
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
          <VideoGrid videos={FB_VIDEOS} />
        </section>

        {/* ── PORTFOLIO GRID — BIOMEDICAL ──────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ PLAYLIST · 02 ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                BioMedical Visualizations
              </h2>
            </div>
            <a href={`https://www.youtube.com/playlist?list=${PLAYLIST_BIOMED}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors">
              Open on YouTube
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
          <VideoGrid videos={BIOMED_VIDEOS} />
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden border-t border-outline-variant/10">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none text-white uppercase">
              Got a campaign? Let's visualise it.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:nanda@nmediaservices.com"
                 className="bg-primary text-on-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-[#ff8a3d] transition-all inline-block">
                Start a Project
              </a>
              <a href="mailto:nmedia.services@gmail.com"
                 className="border border-primary text-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-primary/10 transition-all inline-block">
                Custom Animation Brief
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────── */}
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
              <a href="https://www.youtube.com/@nmediaservices2014" target="_blank" rel="noopener noreferrer"
                 className="block text-sm text-on-surface-variant hover:text-primary transition-colors">
                YouTube · @nmediaservices2014
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10">
            <p className="text-xs text-on-surface-variant/50 font-label">© Nmedia Inc. · Animation Production Pipeline v1.1</p>
          </div>
        </footer>

      </main>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// VideoGrid — responsive 2-up grid of click-to-play tiles
// ─────────────────────────────────────────────────────────────────
function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map((v) => <VideoTile key={v.id} video={v} />)}
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// VideoTile — thumbnail until click, then YouTube iframe
// (the "lite-youtube" pattern — keeps initial page weight low even
//  with 25+ embeds on a single page)
// ─────────────────────────────────────────────────────────────────
function VideoTile({ video }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="relative aspect-video bg-surface-container border border-outline-variant/10 overflow-hidden shadow-2xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group relative aspect-video bg-surface-container border border-outline-variant/10 hover:border-primary/40 overflow-hidden text-left transition-all"
    >
      {/* Thumbnail — YouTube's hqdefault is 480×360, sharp enough for the grid */}
      <img
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent"></div>

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-on-primary text-3xl ml-1">play_arrow</span>
        </span>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-headline text-sm md:text-base text-white font-bold leading-tight line-clamp-2">
          {video.title}
        </p>
      </div>
    </button>
  );
}


// ─────────────────────────────────────────────────────────────────
// Video data — auto-extracted from the two YouTube playlists
// referenced on the legacy Wix Commercials page.
// (regenerable: see docs in HANDOVER.md if/when videos change)
// ─────────────────────────────────────────────────────────────────
const PLAYLIST_FB     = "PLee8tHW01hSOeY10Pe4P3rr9o1Xgnoq18";
const PLAYLIST_BIOMED = "PLee8tHW01hSNpJUqfVfYrkWIPe85ksY4v";

const FB_VIDEOS = [
  { id: "lCslscd4DMM", title: "Ad commercials · Visual Trust & Clarity" },
  { id: "iPRsQSYeMuM", title: "Ad commercials · Visual Trust & Clarity (alt cut)" },
  { id: "OVmfQTDJUUI", title: "Powering Financial Institutions with Visual Trust & Clarity" },
  { id: "iF7iSkC9RSo", title: "The Martian Robot · Depreciative Savings Scheme — Animated VFX Ad" },
  { id: "jWHqDxd_T7c", title: "3D Animated Commercial Production — Banking" },
  { id: "eusKt9p1nJU", title: "Cooking Trailer Previsuals" },
  { id: "X0iTBt7sExA", title: "3D Game Trailer Previsuals" },
  { id: "RFV0U1Usv10", title: "Pervis Promo · Culinary Title Concept" },
  { id: "jGnZJu6tAlc", title: "Restaurant Promo · Short — 3D Animated, Cinematic 3D" },
  { id: "6oIGo579VAI", title: "Restaurant Promo · Bringing Ideas to Life — Cinematic 3D" },
  { id: "_TBdjQUnw28", title: "Motion Graphics · Visual Storytelling" },
  { id: "g2U088jnNZk", title: "Epic Trailer V3 · Pervis Visualization — 3D Game / Animation / Movies" },
];

const BIOMED_VIDEOS = [
  { id: "bp_OY_HU7tI", title: "01 · 3D Medical Animation Explainer Media" },
  { id: "D5Qu7auYzTw", title: "02 · Microscopic Biological Science · Underwater Visualization" },
  { id: "dD8pYOd1WoU", title: "03 · Microscopic Biological Science Visualization" },
  { id: "soY--V7Z1mQ", title: "04 · Journey Into the Microscopic World — 3D Biology Animation" },
  { id: "mpVdxyxRtHM", title: "05 · Microscopic Biological Science Visualization" },
  { id: "WPmF9wP1ORg", title: "06 · Microscopic Biological Science Visualization" },
  { id: "b_lw8r6ykkk", title: "07 · Visualization & Explainer Media" },
  { id: "0NCcFMX9z0I", title: "08 · Microscopic Biological Science Visualization" },
  { id: "YLTT6H2sPsw", title: "09 · Microscopic Biological Science Visualization" },
  { id: "EdHxp6LnQyw", title: "10 · Microscopic Biological Science Visualization" },
  { id: "9KCEFECvkTA", title: "11 · Microscopic Biological Science Visualization" },
  { id: "wRAa9Qx586w", title: "12 · Microscopic Biological Science Visualization" },
  { id: "KPvdSZJC9c4", title: "13 · Microscopic Biological Science Visualization" },
  { id: "rOwt0Q7HwRY", title: "14 · Microscopic Biological Science Visualization" },
  { id: "FtRUkCvWiHA", title: "15 · Microscopic Biological Science Visualization" },
];
