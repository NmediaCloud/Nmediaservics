import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

/**
 * DigitalConversion — books, documents, microfilm, palm scripts and
 * physical artefacts converted into searchable, archivable digital
 * formats. Single-page landing — sub-sections will land here later.
 *
 * Source: nmediaservices.wixsite.com/site
 */
export default function DigitalConversion() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32 pb-24">

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant/20 pb-12">
            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">
              SERVICE // PHYSICAL → DIGITAL
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
              Digital <span className="text-primary">Conversion</span>.
            </h1>
            <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
              Books, documents, microfilm, palm scripts, photographs and
              physical objects — converted into searchable, archivable,
              shareable digital formats. Experienced personnel, time-tested
              procedures, careful asset handling.
            </p>
          </div>
        </header>

        {/* ── PROMISE ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-20 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {PROMISE.map((p) => (
              <div key={p.title} className="bg-surface-container border border-outline-variant/10 p-7">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-headline font-bold text-base uppercase tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SOURCE → OUTPUT ─────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ WHAT GOES IN // WHAT COMES OUT ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              The conversion map.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-1">
            <div className="bg-surface-container border border-outline-variant/10 p-8">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Source materials</p>
              <ul className="space-y-2">
                {SOURCES.map((s) => (
                  <li key={s} className="text-sm text-on-surface-variant font-light flex gap-2">
                    <span className="text-primary/60">·</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container border border-outline-variant/10 p-8">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Delivery formats</p>
              <ul className="space-y-2">
                {OUTPUTS.map((o) => (
                  <li key={o} className="text-sm text-on-surface-variant font-light flex gap-2">
                    <span className="text-primary/60">·</span>{o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ─────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ SERVICES // {SERVICES.length}_LINES ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                What we convert.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {SERVICES.map((s) => (
                <article key={s.title} id={s.id} className="bg-surface-container border border-outline-variant/10 p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all scroll-mt-32">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{s.icon}</span>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-10 font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60">
              Section content per service to be expanded inline · single-page format.
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
              Got a shelf<br />that needs digitising?
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Quotes scoped to volume, source format, fragility and delivery
              spec. Pickup, on-site, or shipped — whichever protects the asset.
            </p>
            <a href="mailto:nanda@nmediaservices.com" className="inline-block bg-primary text-on-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-[#ff8a3d] transition-all">
              Request a Quote →
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

const PROMISE = [
  { icon: "verified",      title: "Experienced Personnel",  body: "Time-tested procedures handle each format correctly — fragile, oversized, photo-sensitive or rare." },
  { icon: "tune",          title: "Built To Your Spec",      body: "Tasks scoped to your needs, budget and schedule — not a one-size-fits-all conveyor belt." },
  { icon: "shield",        title: "Asset-Safe Process",      body: "Production process designed for the utmost safety in handling your originals — never destructive unless you ask." },
  { icon: "workspace_premium", title: "Quality + Accuracy", body: "Reasonable budget, audited output. Re-scans on demand. QA is part of the price, not an upsell." },
];

const SOURCES = [
  "Books — bound, hardcover, paperback",
  "Documents — letters, contracts, archives",
  "Forms — OMR / OCR-ready",
  "Library collections — full archive scope",
  "Palm-leaf manuscripts (palm scripts)",
  "Medical records — secure handling",
  "Photographs and photo negatives",
  "Microfilm and microfiche reels",
  "Maps and large-format originals",
  "3D objects — for scan + print",
];

const OUTPUTS = [
  "Searchable PDF (image + text)",
  "Image-only PDF · Vector PDF · Normal PDF",
  "Hyperlinks · bookmarks · catalog search",
  "Document info fields and metadata",
  "TIFF / JPEG / GIF / PNG export",
  "EPUB and e-book formats",
  "Microfilm → PDF",
  "Hand-edited text (when accuracy matters)",
  "3D-printable mesh and slicer-ready files",
  "Color, greyscale, B&W — your call",
];

const SERVICES = [
  { id: "omr",    icon: "checklist",     title: "Optical Mark Reading", body: "OMR / form reading at scale — exam sheets, surveys, ballots — high-throughput, audited." },
  { id: "med",    icon: "medical_services", title: "Medical Records",  body: "Patient files digitised with privacy-first handling. Searchable, indexed, retention-policy aware." },
  { id: "books",  icon: "menu_book",     title: "Library Books",        body: "Full library digitisation — bound book scanning, OCR, catalog metadata, EPUB / PDF delivery." },
  { id: "palm",   icon: "history_edu",   title: "Palm Script Conversion", body: "Palm-leaf manuscripts handled with conservation-grade equipment — captured, OCR-where-possible, archived." },
  { id: "photo",  icon: "photo_library", title: "Photos & Negatives",   body: "Photo and negative scanning — colour-corrected, dust-cleaned, archive-ready master + access derivative." },
  { id: "large",  icon: "crop_landscape", title: "Large-Format Scanning", body: "Maps, blueprints, posters, oversize originals — flat-bed and overhead capture with stitched output." },
  { id: "3d",     icon: "deployed_code", title: "3D Scanning & Printing", body: "Object-to-mesh capture and print delivery — for archives, parts replication, infomural and model production." },
  { id: "graphics", icon: "draw",        title: "Info Graphics & Murals", body: "Charts, info-murals, motion-graphics and 3D modelling for educational and exhibition contexts." },
  { id: "misc",   icon: "more_horiz",    title: "Miscellaneous",         body: "Off-spec asks — odd formats, restoration jobs, multi-source compilations. If it's physical, ask." },
];

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
        <p className="text-xs text-on-surface-variant/50 font-label">© Nmedia Inc. · Digital Conversion Services</p>
      </div>
    </footer>
  );
}
