import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

/**
 * IPSeries — Original IP / Animation Series hub.
 *
 * Replaces the placeholder content with the actual IP slate from the
 * legacy Wix navigation:
 *   - 01 Tiny Wings Buzz       (toddler series, pilot complete)
 *   - 02 Cici School of Fish   (pre-school)
 *   - 03 Chimpu Chase Comedy   (pre-school comedy)
 *   - 04 The World Under My Bed (pre-school SEL)
 *   - 05 Micro Series — Woh Shaadi
 *
 * Detail pages exist for the two with developed pitch material;
 * others link to "coming soon" / contact CTA until ready.
 */
export default function IPSeries() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32 pb-24">

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary font-label text-sm tracking-[0.3em]">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                [ STUDIO // ORIGINAL_IP_SLATE_V4 ]
              </div>
              <h1 className="text-5xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter max-w-4xl uppercase">
                IP Series &amp; Original Content
              </h1>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg pt-4">
                Original animated series development from concept to screen.
                Pre-school SEL, comedic pre-K, microformats — built for OTT,
                broadcast, and cross-platform distribution.
              </p>
            </div>
            <div className="text-on-surface-variant font-label text-xs tracking-widest border-l border-outline-variant/30 pl-6 pb-2 hidden lg:block">
              SLATE: 05 ACTIVE<br />
              FOCUS: 2–8 YR<br />
              CORE: NM_ORIGINALS_V4
            </div>
          </div>
        </header>

        {/* ── STATUS TICKER ─────────────────────────────── */}
        <section className="bg-surface-container-low py-4 overflow-hidden border-y border-outline-variant/10 mb-24">
          <div className="flex whitespace-nowrap gap-12 items-center">
            <span className="font-label text-[10px] tracking-[0.4em] text-primary uppercase block max-w-full overflow-hidden truncate">
              SLATE: 05 ACTIVE // PRE-SCHOOL · MICRO · COMEDY //
              SEL · CHARACTER-LED · CROSS-PLATFORM // PROJECT STATUS: NOMINAL
            </span>
          </div>
        </section>

        {/* ── IP CARDS ─────────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {IP_SLATE.map((ip) => (
              <IPCard key={ip.id} ip={ip} />
            ))}
          </div>
        </section>

        {/* ── ENGINEERING PRECISION ──────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ CORE // NM_PIPELINE_V1.1 ]
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                Engineering Precision.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-on-surface-variant font-light leading-relaxed">
                Our original IP runs through the same NM_CORE pipeline that
                powers our client work — eleven control panels, one project
                manifest, format-aware from the brief. Every frame is processed
                through the same pre-vis-to-final route, whether it's a 22-min
                broadcast episode or a 30-second social cut.
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed">
                That technical backbone is why our development cycles run weeks
                instead of months. We built the studio to ship — and the slate
                proves it.
              </p>
              <Link to="/" className="inline-flex items-center gap-2 text-primary font-label uppercase text-xs tracking-widest mt-4 hover:gap-3 transition-all">
                See the pipeline
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-none text-white uppercase">
              Distribution. Co-production. Original IP.
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-10 font-light">
              For broadcasters, OTTs, distributors and co-production partners —
              full pitch decks and pilot materials available on request.
            </p>
            <a href="mailto:nanda@nmediaservices.com" className="bg-primary text-on-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-[#ff8a3d] transition-all inline-block">
              Request Pitch Deck
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// IP card component
// ─────────────────────────────────────────────────────────────────
function IPCard({ ip }) {
  const Body = (
    <article className={`group relative bg-surface-container overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 aspect-[4/5] flex flex-col ${ip.translateY ? "md:translate-y-12" : ""}`}>
      <div className="p-6 border-b border-outline-variant/10 flex justify-between items-start z-10 relative bg-surface-container">
        <div>
          <p className="font-label text-[10px] text-primary mb-1 tracking-widest uppercase">{ip.id}</p>
          <h3 className="font-headline font-bold text-xl uppercase tracking-tight leading-tight">{ip.title}</h3>
          {ip.subtitle && (
            <p className="text-xs text-on-surface-variant/70 mt-1 font-label tracking-wider">{ip.subtitle}</p>
          )}
        </div>
        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-base">
          {ip.icon}
        </span>
      </div>
      <div className="flex-grow overflow-hidden relative bg-gradient-to-br from-surface-container-low to-surface-container-lowest">
        {ip.poster ? (
          <>
            <img
              src={ip.poster}
              alt={ip.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-[140px] text-primary">{ip.icon}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
          </>
        )}
      </div>
      <div className="p-6 bg-surface-container-high z-10 relative">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2 py-0.5 border text-[9px] font-label tracking-widest uppercase ${ip.status_active ? "border-primary/40 text-primary" : "border-outline-variant/30 text-on-surface-variant/60"}`}>
            Status: {ip.status}
          </span>
          <span className="text-on-surface-variant/40 text-[9px] font-label">{ip.version}</span>
        </div>
        <p className="text-sm text-on-surface-variant line-clamp-2 font-light leading-relaxed mb-6">{ip.body}</p>
        {ip.detail_url ? (
          <span className="block w-full py-3 bg-gradient-to-r from-primary to-[#FF8A3D] text-on-primary font-label font-bold text-xs tracking-widest uppercase text-center group-hover:opacity-90 transition-opacity">
            Open Series →
          </span>
        ) : (
          <span className="block w-full py-3 bg-surface-container border border-outline-variant/20 text-on-surface-variant font-label font-bold text-xs tracking-widest uppercase text-center">
            Pitch on Request
          </span>
        )}
      </div>
    </article>
  );

  return ip.detail_url ? (
    <Link to={ip.detail_url} className="block">{Body}</Link>
  ) : (
    <a href="mailto:nanda@nmediaservices.com" className="block">{Body}</a>
  );
}


// ─────────────────────────────────────────────────────────────────
// IP slate data
// ─────────────────────────────────────────────────────────────────
const IP_SLATE = [
  {
    id:        "Entry ID: 01-A",
    title:     "Tiny Wings, Big Job",
    subtitle:  "Toddler SEL · Series",
    icon:      "flutter_dash",
    status:    "Pilot Complete",
    status_active: true,
    version:   "VOL. 01",
    body:      "Buzz finds her purpose — daily-routine SEL series for toddlers 2-5 with sensory rhythm, rhyme, and big feelings made small.",
    detail_url:"/ip/tiny-wings-buzz",
    poster:    "/images/ip/tiny-wings.jpg",
  },
  {
    id:        "Entry ID: 02-B",
    title:     "Cici · School of Fish",
    subtitle:  "Pre-school Series",
    icon:      "set_meal",
    status:    "Development",
    version:   "VOL. 02",
    translateY: true,
    body:      "Underwater pre-school series — friendship, curiosity, and gentle science wrapped in a coral-reef classroom.",
    detail_url: null,
    poster:     "/images/ip/cici.jpg",
  },
  {
    id:        "Entry ID: 03-C",
    title:     "Chimpu · Chase Comedy",
    subtitle:  "Pre-K Slapstick",
    icon:      "sentiment_very_satisfied",
    status:    "Development",
    version:   "VOL. 03",
    body:      "Bouncy pre-K slapstick — exaggerated cause-and-effect comedy with character-led mischief and zero dialogue dependency.",
    detail_url: null,
    poster:     "/images/ip/chimpu.jpg",
  },
  {
    id:        "Entry ID: 04-D",
    title:     "The World Under My Bed",
    subtitle:  "Pre-school SEL",
    icon:      "bedtime",
    status:    "Development",
    status_active: true,
    version:   "VOL. 04",
    body:      "Lumi, Patch and Whisp turn night-time worry into morning calm — bedtime SEL for toddlers 2-6.",
    detail_url:"/ip/world-under-my-bed",
    poster:    "/images/ip/world-under-bed.png",
  },
  {
    id:        "Entry ID: 05-E",
    title:     "Micro Series · Woh Shaadi",
    subtitle:  "Short-form · Cultural",
    icon:      "favorite",
    status:    "Concept",
    version:   "VOL. 05",
    translateY: true,
    body:      "Microformat short-form series — observational comedy threaded through the rituals of a modern wedding week.",
    detail_url: null,
  },
];


// ─────────────────────────────────────────────────────────────────
// Shared chrome (nav + footer) — exported for use across IP pages
// ─────────────────────────────────────────────────────────────────
export function SiteNav({ active }) {
  const link = (slug, label, to) => {
    const isActive = active === slug;
    return (
      <Link
        to={to}
        className={`font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold transition-colors duration-300 ${isActive ? "text-primary border-b-2 border-primary pb-1" : "text-[#E5E2E1]/60 hover:text-primary"}`}
      >
        {label}
      </Link>
    );
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl flex justify-between items-center px-8 py-6 max-w-full mx-auto">
      <Link to="/" className="text-xl font-black tracking-tighter text-[#E5E2E1] font-headline">NMEDIA INC.</Link>
      <div className="hidden md:flex items-center space-x-10">
        {link("animation", "Animation VFX", "/animation-vfx")}
        {link("commercials", "Gallery", "/commercials")}
        {link("studio", "Studio", "/ip-series")}
        {link("motion", "Motion FX", "/motion-graphics")}
        <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="mailto:nanda@nmediaservices.com">Contact</a>
      </div>
      <a href="mailto:nanda@nmediaservices.com" className="bg-primary text-on-primary px-6 py-2 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest hover:scale-95 transition-transform duration-200 active:scale-90">
        Start Project
      </a>
    </nav>
  );
}

export function SiteFooter() {
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
