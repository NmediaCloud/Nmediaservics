import React from "react";
import { Link } from "react-router-dom";

/**
 * Commercials — Ad / Promo / Trailer Visualisation showcase.
 *
 * Recreates the legacy Wix page (`nmediaservices.wixsite.com/nmedia/
 * ad-commercials-nmedia`) inside the site's design system. The Wix
 * page surfaced two YouTube playlists (Food & Beverage, BioMedical)
 * and listed the visualisation verticals (animation / game / movie
 * / VFX). Both are restated here in the dark/orange editorial style.
 */
export default function Commercials() {
  // YouTube channel + the two playlist IDs we serve in this page.
  // Pulled from the legacy Wix source HTML — see HANDOVER.md if you
  // ever need to swap them.
  const CHANNEL = "https://www.youtube.com/@nmediaservices2014";
  const PLAYLIST_FB    = "PLee8tHW01hSOeY10Pe4P3rr9o1Xgnoq18";   // Food & Beverage
  const PLAYLIST_BIOMED = "PLee8tHW01hSNpJUqfVfYrkWIPe85ksY4v";  // BioMedical Viz

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* ── NAV ───────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-full">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-[#E5E2E1] font-headline"
          >
            NMEDIA INC.
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/commercials"
              className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-primary border-b-2 border-primary pb-1"
            >
              GALLERY
            </Link>
            <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">
              SERVICES
            </a>
            <Link
              to="/ip-series"
              className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300"
            >
              STUDIO
            </Link>
            <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">
              ABOUT
            </a>
            <a
              className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300"
              href="mailto:nanda@nmediaservices.com"
            >
              CONTACT
            </a>
          </div>
          <a
            href="mailto:nanda@nmediaservices.com"
            className="bg-primary text-on-primary px-6 py-2 font-label font-bold tracking-tight active:scale-95 transition-transform"
          >
            START PROJECT
          </a>
        </div>
      </nav>

      <main className="pt-32">

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="px-8 mb-16">
          <div className="flex flex-col md:flex-row items-end justify-between border-b border-outline-variant/20 pb-12 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">
                COMMERCIAL DIVISION // AD · PROMO · TRAILER
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                Visual Trust <span className="text-primary">&amp;</span> Clarity
              </h1>
              <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
                Ad commercials. Promo cuts. Trailer visualisation. Showcase reels for
                <em className="text-primary not-italic"> animation</em>,
                <em className="text-primary not-italic"> game</em>,
                <em className="text-primary not-italic"> movie</em> and
                <em className="text-primary not-italic"> VFX</em> productions —
                across industries from food &amp; beverage to biomedical.
              </p>
            </div>
            <div className="text-on-surface-variant font-label text-xs tracking-widest border-l border-outline-variant/30 pl-6 pb-2 hidden lg:block mt-12 md:mt-0">
              SECTOR: AD_VIZ<br />
              FORMAT: 16:9 / 9:16 / 1:1<br />
              CORE: NM_AD_PIPELINE_V2
            </div>
          </div>
        </section>

        {/* ── STATUS TICKER ─────────────────────────────── */}
        <div className="w-full overflow-hidden bg-surface-container-low py-3 mb-24 whitespace-nowrap border-y border-outline-variant/10">
          <div className="flex gap-12 font-label text-[10px] tracking-[0.4em] text-primary/50 uppercase">
            <span className="block">
              SYSTEM_STATUS: NOMINAL // 4K RENDER PIPELINE // CROSS-INDUSTRY READY //
              FOOD_BEVERAGE · BIOMEDICAL · TRAILER_VIZ // SYSTEM_STATUS: NOMINAL
            </span>
          </div>
        </div>

        {/* ── CAPABILITIES GRID (6 verticals) ──────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ VERTICALS // 06 ACTIVE ]
              </p>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none uppercase">
                What we visualise.
              </h2>
            </div>
            <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
              Six categories · one production pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {VERTICALS.map((v) => (
              <article
                key={v.id}
                className="group bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-container-high hover:border-primary/30 transition-all duration-300"
              >
                <p className="font-label text-[10px] text-primary mb-2 tracking-widest uppercase">
                  Entry ID: {v.id}
                </p>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-4">
                  {v.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-light mb-6 line-clamp-3">
                  {v.body}
                </p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
                  <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">
                    {v.format}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── PLAYLIST SHOWCASE — Food & Beverage ─────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ SHOWCASE // PLAYLIST_01 ]
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 leading-none">
                Food &amp; Beverage
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed mb-8 max-w-md">
                Catering, events, hospitality — visualisation reels that put the
                product on a plate before the menu prints. Hero shots, ambient
                pours, slow-motion textures, and brand stings tuned for social
                drop-in.
              </p>
              <ul className="space-y-2 mb-10 text-sm text-on-surface-variant font-light">
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Hero product reels (15s · 30s · 60s)
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Event walkthroughs &amp; venue showcases
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Recipe build-ups + slow-motion close-ups
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Multi-format crops (16:9 · 9:16 · 1:1)
                </li>
              </ul>
              <a
                href={`https://www.youtube.com/playlist?list=${PLAYLIST_FB}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest uppercase hover:bg-[#ff8a3d] transition-colors"
              >
                <span className="material-symbols-outlined text-base">open_in_new</span>
                Open Full Playlist on YouTube
              </a>
            </div>
            <div className="lg:col-span-7 relative aspect-video bg-surface-container-low border border-outline-variant/10 overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_FB}&rel=0&modestbranding=1`}
                title="Food & Beverage — Catering and Events Visuals · Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute top-4 left-4 font-label text-[10px] text-primary bg-surface/80 px-2 py-1 backdrop-blur-md z-10 pointer-events-none">
                [ PLAYLIST_01 // F&amp;B ]
              </div>
            </div>
          </div>
        </section>

        {/* ── PLAYLIST SHOWCASE — BioMedical ──────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 lg:order-1 order-2 relative aspect-video bg-surface-container-low border border-outline-variant/10 overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_BIOMED}&rel=0&modestbranding=1`}
                title="BioMedical Visualizations · Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute top-4 left-4 font-label text-[10px] text-primary bg-surface/80 px-2 py-1 backdrop-blur-md z-10 pointer-events-none">
                [ PLAYLIST_02 // BIOMED ]
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 order-1">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ SHOWCASE // PLAYLIST_02 ]
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 leading-none">
                BioMedical Viz
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed mb-8 max-w-md">
                Procedure walk-throughs, mechanism-of-action reels, device demos,
                surgical animations — accurate, peer-review-ready visualisations
                for medical, pharmaceutical and life-sciences communication.
              </p>
              <ul className="space-y-2 mb-10 text-sm text-on-surface-variant font-light">
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Mechanism-of-action animations
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Device &amp; instrument demonstrations
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Surgical procedure walk-throughs
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">·</span> Patient-education explainer reels
                </li>
              </ul>
              <a
                href={`https://www.youtube.com/playlist?list=${PLAYLIST_BIOMED}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest uppercase hover:bg-[#ff8a3d] transition-colors"
              >
                <span className="material-symbols-outlined text-base">open_in_new</span>
                Open Full Playlist on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* ── PROCESS / PIPELINE NOTE ───────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ DELIVERY // NM_AD_PIPELINE_V2 ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                One Pipeline. Every Format.
              </h2>
            </div>
            <div className="lg:col-span-7 text-on-surface-variant font-light leading-relaxed space-y-4">
              <p>
                Every commercial out of this division runs through the same
                production pipeline as our IP series — eleven control panels,
                one project manifest, format-aware from the brief.
              </p>
              <p>
                The result: campaign-ready 16:9 hero cuts, 9:16 vertical reels
                and 1:1 social squares from the same source render. No
                re-grading. No re-mastering. Same brand stings, same lower-thirds,
                landing on every channel.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary font-label uppercase text-xs tracking-widest mt-4 hover:gap-3 transition-all"
              >
                See the pipeline behind it
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none text-white uppercase">
              Got a campaign? Let's visualise it.
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-10 font-light">
              Ad spots, trailer cuts, social verticals, biomed explainers — same
              pipeline, same precision, every brief.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:nanda@nmediaservices.com"
                className="bg-primary text-on-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-[#ff8a3d] transition-all inline-block"
              >
                Start a Project
              </a>
              <a
                href="mailto:nmedia.services@gmail.com"
                className="border border-primary text-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-primary/10 transition-all inline-block"
              >
                Custom Animation Brief
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────── */}
        <footer className="bg-surface-container-lowest py-16 px-8 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
                Contact
              </p>
              <a
                href="mailto:nanda@nmediaservices.com"
                className="block text-sm text-on-surface hover:text-primary transition-colors mb-1"
              >
                nanda@nmediaservices.com
              </a>
              <a
                href="mailto:nmedia.services@gmail.com"
                className="block text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                nmedia.services@gmail.com
              </a>
            </div>
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
                Studio
              </p>
              <p className="text-sm text-on-surface-variant">Toronto · M6N 4K7 · CA</p>
            </div>
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
                Channels
              </p>
              <a
                href={CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                YouTube · @nmediaservices2014
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-on-surface-variant/50 font-label">
              © Nmedia Inc. · Animation Production Pipeline v1.1
            </p>
            <p className="text-xs text-on-surface-variant/50 font-label">
              Custom animation? <a href="mailto:nmedia.services@gmail.com" className="hover:text-primary">nmedia.services@gmail.com</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}


// ── Verticals data ────────────────────────────────────────────────
const VERTICALS = [
  {
    id: "VIZ-01",
    title: "Animation Trailers",
    body: "Cinematic ad spots and trailer cuts for animated IP — character-led storytelling, beat-tight pacing, broadcast-ready masters.",
    format: "16:9 · 9:16 · 1:1",
  },
  {
    id: "VIZ-02",
    title: "Game Trailers",
    body: "Pre-launch reveals, gameplay sizzles and post-launch promo cuts — engine-captured, cinematically composited, platform-spec delivery.",
    format: "All platforms",
  },
  {
    id: "VIZ-03",
    title: "Movie Trailer Viz",
    body: "Pre-vis, animatics and final-cut trailer visualisation for live-action and hybrid productions. Storyboard to screen, fast.",
    format: "Pre-vis → final",
  },
  {
    id: "VIZ-04",
    title: "VFX Reels",
    body: "Industrial-grade character and environment execution. Reels that survive every channel — from in-cinema to phone-screen.",
    format: "Up to 4K",
  },
  {
    id: "VIZ-05",
    title: "Food & Beverage",
    body: "Catering, events, hospitality — hero product reels and venue showcases. Slow-motion textures, ambient pours, social-ready stings.",
    format: "Multi-cut",
  },
  {
    id: "VIZ-06",
    title: "BioMedical Viz",
    body: "Mechanism-of-action animations, surgical walk-throughs and device demos. Peer-review-ready accuracy, broadcast-grade polish.",
    format: "Medical-grade",
  },
];
