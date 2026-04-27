import React from "react";
import { Link } from "react-router-dom";

/**
 * MotionGraphics — Motion Graphics VFX showcase.
 *
 * Recreates mnkmars.wixsite.com/grafix/motion-graphics in the site's
 * design system. Keeps every credit, tool and capability from the
 * source page, restated in dark-mode editorial form.
 */
export default function MotionGraphics() {
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
              Motion <span className="text-primary">Graphics</span> VFX
            </h1>
            <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
              Editing. Compositing. Animation. Lighting. Rendering. End-to-end
              motion-graphics craft across medical, architectural, product,
              automotive and broadcast — delivered out of one technical hand.
            </p>
          </div>
        </section>

        {/* ── STATUS TICKER ─────────────────────────────── */}
        <div className="w-full overflow-hidden bg-surface-container-low py-3 mb-24 whitespace-nowrap border-y border-outline-variant/10">
          <div className="flex gap-12 font-label text-[10px] tracking-[0.4em] text-primary/50 uppercase">
            <span className="block">
              MAYA · 3DS_MAX · BLENDER · NUKE · AFTER_EFFECTS · V-RAY · CYCLES ·
              EEVEE · RED_GIANT · BORIS_FX · MOCHA · ELEMENT_3D · TOPAZ_AI
            </span>
          </div>
        </div>

        {/* ── SERVICES GRID ─────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ DISCIPLINES // FULL_STACK ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-white leading-none uppercase">
                What we craft.
              </h2>
            </div>
            <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
              {SERVICES.length} services · one pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {SERVICES.map((s) => (
              <article key={s.id} className="group bg-surface-container border border-outline-variant/10 p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                <p className="font-label text-[10px] text-primary mb-2 tracking-widest uppercase">{s.id}</p>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── TOOLS / PIPELINE ──────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ TOOLCHAIN // PRODUCTION_GRADE ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-white leading-none uppercase mb-6">
                The Stack.
              </h2>
              <p className="text-on-surface-variant font-light max-w-xl">
                Every render leaves the studio through a known pipeline. Tools
                are picked per shot, never per habit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TOOL_GROUPS.map((g) => (
                <div key={g.label}>
                  <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">{g.label}</p>
                  <ul className="space-y-2">
                    {g.tools.map((t) => (
                      <li key={t} className="text-sm text-on-surface-variant font-light flex gap-2">
                        <span className="text-primary/50">·</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SHOWCASES ─────────────────────────────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  [ SHOWCASES // SELECTED ]
                </p>
                <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-white leading-none uppercase">
                  Projects.
                </h2>
              </div>
              <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
                Brand work · explainer · medical · automotive
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
              {SHOWCASES.map((s, i) => (
                <article key={s.title} className="group bg-surface-container p-7 border border-outline-variant/5 hover:bg-surface-container-high hover:border-primary/20 transition-all">
                  <p className="font-label text-[10px] text-primary mb-3 tracking-widest uppercase">
                    Entry {String(i + 1).padStart(3, "0")}
                  </p>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3 leading-tight">
                    {s.title}
                  </h3>
                  {s.note && (
                    <p className="text-xs text-on-surface-variant font-light mb-4 leading-relaxed">{s.note}</p>
                  )}
                  <div className="flex items-center justify-between border-t border-outline-variant/10 pt-3">
                    <span className="font-label text-[9px] tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">
                      {s.tag}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOTABLE ─────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ NOTABLE // BLENDER_PROJECT ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                350 hours.<br />Two GPUs.<br />Twenty minutes.
              </h2>
            </div>
            <div className="lg:col-span-7 text-on-surface-variant font-light leading-relaxed space-y-4">
              <p>
                Gaia client demo reel + explainer graphics — rendered in Blender
                across two 1080Ti GPUs. 350 production hours into a 20-minute
                output. Look-development, lighting, compositing and final cut
                handled inside one pipeline.
              </p>
              <p className="text-sm text-on-surface-variant/70">
                Tools: Blender Cycles · Eevee · Nuke · After Effects ·
                Topaz AI suite.
              </p>
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
              Need a render that survives every channel?
            </h2>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}


// ── DATA ──────────────────────────────────────────────────────────

const SERVICES = [
  { id: "MFX-01", title: "Medical Animation",          body: "Mechanism-of-action, anatomy, surgical procedure walk-throughs. Peer-review-grade accuracy." },
  { id: "MFX-02", title: "Architectural Viz",          body: "Architectural perspective, lighting and projection — interior and exterior render passes." },
  { id: "MFX-03", title: "Product Rendering",          body: "Hero product shots, 360° turntables, exploded views — PBR shaders, real-world calibrated." },
  { id: "MFX-04", title: "Rota-Mation (3D Rotation)",  body: "Camera-driven product rotation reels for ad and e-commerce. Continuous lighting, broadcast loops." },
  { id: "MFX-05", title: "VFX Animation",              body: "Motion-design VFX, explainer overlays, kinetic typography, branded stings — built for cuts." },
  { id: "MFX-06", title: "AI-Guided Restoration",      body: "Film and video restoration with AI-assisted colour grading. Topaz AI suite + manual retouch." },
  { id: "MFX-07", title: "Visualisation & Camera",     body: "Camera animation, look-development, virtual camera blocking — pre-vis through final." },
  { id: "MFX-08", title: "Texturing & Shaders",        body: "UV unwrap, texture authoring, shader build-out across V-Ray, Cycles, Eevee." },
  { id: "MFX-09", title: "Vehicle / Prop Animation",   body: "Car animation, mechanical prop work — physics-aware rigs and engine-ready exports." },
];

const TOOL_GROUPS = [
  { label: "3D Applications", tools: ["Autodesk Maya", "Autodesk 3DS Max", "Blender"] },
  { label: "Compositing & Edit", tools: ["Nuke", "Combustion", "Adobe Premiere", "After Effects"] },
  { label: "Design", tools: ["Photoshop", "Illustrator", "Envato Elements"] },
  { label: "Plugins & Render", tools: [
    "Red Giant Trapcode",
    "Boris FX Suite",
    "Continuum",
    "Mocha Pro",
    "Sapphire",
    "Element 3D",
    "Topaz Labs AI",
    "V-Ray (CUDA)",
    "Blender Cycles",
    "Blender Eevee",
  ] },
];

const SHOWCASES = [
  { title: "Journey Inside the Cell",       tag: "Medical Explainer",            note: "Microscopic walkthrough — narration-paired explainer for life-sciences brief." },
  { title: "Architectural Perspective",     tag: "Lighting · Rendering",         note: "Multi-pass lighting study + animated camera — interior + exterior coverage." },
  { title: "Movie Shallows",                tag: "3D Animation · VFX",           note: "Feature-film VFX contribution as animator." },
  { title: "Barn Storm VFX",                tag: "Blender · Artist Reel",        note: "Standalone Blender build-out — comp, lighting, render." },
  { title: "Medical Explainer Reel",        tag: "Pharma · Patient-Ed",          note: "Mechanism-of-action animation tuned for in-clinic playback." },
  { title: "Gaia Demo Reel",                tag: "Brand Showcase",               note: "350-hour Blender render across 2× 1080Ti GPUs · 20 min output." },
  { title: "Godfather · Public Mobile",     tag: "Brand Spot",                   note: "Editorial cut + motion-graphics overlay for telecom brand." },
  { title: "Ugly Duckling",                 tag: "Brand Spot",                   note: "Stylised animated cut for retail-brand campaign." },
  { title: "Remax",                         tag: "Real-Estate Broadcast",        note: "Property-focused motion graphics + rendered camera passes." },
  { title: "Audi Car (MFI)",                tag: "Automotive Render",            note: "Hero car animation + lighting build-out for marketing reel." },
  { title: "Microsoft · Azure · PC",        tag: "Tech Brand",                   note: "Product-focused motion design across multiple PC reels." },
  { title: "Nick Jr · Ready Set Dance",     tag: "Children's Series",            note: "Lighting + render in Blender Eevee for DarkSlope Studios." },
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
        <p className="text-xs text-on-surface-variant/50 font-label">© Nmedia Inc. · Animation Production Pipeline v1.1</p>
      </div>
    </footer>
  );
}
