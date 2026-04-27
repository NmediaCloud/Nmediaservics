import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { SiteFooter } from "./IPSeries";

/**
 * About — Founder + studio credentials.
 *
 * Migrates content from:
 *   - mnkmars.wixsite.com/grafix/home  (portfolio bio)
 *   - mnkmars.wixsite.com/certi        (certifications & qualifications)
 *
 * Cast in the site's design system. Acts as the "About" page reachable
 * from the footer or any nav link added later.
 */
export default function About() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32 pb-24">

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-24 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant/20 pb-16 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 space-y-4">
              <p className="font-label text-primary text-sm tracking-[0.3em] uppercase">
                ABOUT // FOUNDER · STUDIO
              </p>
              <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
                Nanda <span className="text-primary">Mohan.</span>
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                Animation Pipeline Architect · Toronto
              </p>
            </div>
            <div className="lg:col-span-5 text-on-surface-variant font-light leading-relaxed">
              <p className="text-lg">
                Twenty-plus years in animation, lighting and VFX —
                <span className="text-primary"> Disney</span>,
                <span className="text-primary"> Nickelodeon</span>,
                <span className="text-primary"> Lego</span>,
                <span className="text-primary"> Paw Patrol</span> — now running
                an AI-native production studio out of one toolchain.
              </p>
            </div>
          </div>
        </header>

        {/* ── BIO ──────────────────────────────────────── */}
        <section className="px-8 mb-32 max-w-5xl mx-auto">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
            [ BIO ]
          </p>
          <div className="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
            <p>
              Trained as a character animator. Ran the Disney–Pixar composition
              and layout track. Spent two decades shipping series for
              broadcasters and OTTs across animation, motion capture, lighting,
              rendering and technical direction.
            </p>
            <p>
              Nmedia Services is the studio that came out of that — built on
              the principle that <em className="not-italic text-primary">no
              hand-off is faster than no hand-off</em>. Every module of the
              pipeline is operator-runnable from a single browser tab. Every
              project file is the same project file. The toolchain stops
              fighting the work.
            </p>
            <p>
              Adjacent to the animation work: a deliberate stack of credentials
              in generative AI, data analytics, and digital marketing — all
              feeding back into how we run client briefs end-to-end.
            </p>
          </div>
        </section>

        {/* ── DISCIPLINES ──────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ DISCIPLINES ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight leading-none uppercase">
                What we run.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {DISCIPLINES.map((d) => (
                <article key={d.title} className="bg-surface-container border border-outline-variant/10 p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{d.icon}</span>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-2">{d.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{d.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ─────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ CREDENTIALS // ONGOING ]
            </p>
            <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight leading-none uppercase">
              The Stack.
            </h2>
            <p className="mt-4 text-on-surface-variant font-light max-w-xl">
              Animation craft anchored in two decades of broadcast credits,
              extended into adjacent domains the modern studio needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {CERT_GROUPS.map((g) => (
              <div key={g.label} className="bg-surface-container-lowest border border-outline-variant/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">{g.icon}</span>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-tight">{g.label}</h3>
                </div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-on-surface-variant font-light flex gap-2">
                      <span className="text-primary/50">·</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ───────────────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ EDUCATION ]
              </p>
              <h2 className="font-headline text-xl md:text-3xl font-bold tracking-tight uppercase leading-none">
                Foundations.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-surface-container border border-outline-variant/10 p-6">
                <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">MBA</h4>
                <p className="text-sm text-on-surface-variant font-light">Master of Business Administration</p>
              </div>
              <div className="bg-surface-container border border-outline-variant/10 p-6">
                <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">PGDCA</h4>
                <p className="text-sm text-on-surface-variant font-light">Post-Graduate Diploma in Computer Applications</p>
              </div>
              <div className="bg-surface-container border border-outline-variant/10 p-6">
                <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">Disney–Pixar Animation Composition</h4>
                <p className="text-sm text-on-surface-variant font-light">Camera composition + layouts seminar</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXTERNAL ────────────────────────────────── */}
        <section className="py-24 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ THE LONGER RECORD ]
            </p>
            <h2 className="font-headline text-xl md:text-2xl font-bold tracking-tight mb-10 uppercase leading-none">
              Full credits, externally.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://www.imdb.com/name/nm12576040/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-surface-container border border-outline-variant/20 hover:border-primary/40 text-on-surface px-8 py-4 font-label text-sm tracking-widest uppercase transition-all">
                IMDb · Filmography
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
              <a href="https://www.linkedin.com/in/mnkmars/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-surface-container border border-outline-variant/20 hover:border-primary/40 text-on-surface px-8 py-4 font-label text-sm tracking-widest uppercase transition-all">
                LinkedIn · Profile
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
              <Link to="/digital-marketing"
                 className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-4 font-label font-bold text-sm tracking-widest uppercase hover:bg-[#ff8a3d] transition-colors">
                Marketing Strategy
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

const DISCIPLINES = [
  { icon: "person",         title: "Character Animation",  body: "Performance acting, body mechanics, blocking through final polish — across stylised and realistic." },
  { icon: "videocam",       title: "Motion Graphics",      body: "Editing, compositing, animation, lighting and rendering — full-stack motion craft." },
  { icon: "view_in_ar",     title: "Polygon Modelling",    body: "Production-grade asset modelling. Props for Disney's Tinker Bell. Game and film pipelines." },
  { icon: "wb_incandescent", title: "Lighting & Render",   body: "V-Ray, Cycles, Eevee. Look-development through final-frame, broadcast-grade output." },
  { icon: "videogame_asset", title: "Motion Capture",      body: "Mocap pipeline ownership — solving, retargeting, cleanup, blending into animator finishes." },
  { icon: "engineering",    title: "Technical Direction",  body: "The role between 'animator' and 'pipeline TD' that keeps shows shipping. End-to-end ownership." },
];

const CERT_GROUPS = [
  {
    label: "Generative AI",
    icon: "auto_awesome",
    items: [
      "Generative AI Imaging Prompt Engineering",
      "Adobe Firefly First Look",
      "DALL-E — Creative Process & Art of Prompting",
      "Introduction to Generative Adversarial Networks (GANs)",
      "Midjourney — Techniques for Images with AI",
    ],
  },
  {
    label: "Data Science & Analytics (MCT Diploma)",
    icon: "analytics",
    items: [
      "Fundamentals of Data Analytics & Statistics",
      "SQL Programming",
      "Business Analytics",
      "Excel & VBA Programming",
      "SAS Programming",
      "R & Python for Data Analytics",
      "Data Mining",
      "Advanced Statistical Modelling",
      "Big Data Analysis & Application",
      "Data Science Projects",
      "Power BI Desktop · Power BI Professional",
      "Blockchain Basics · Hadoop 101",
    ],
  },
  {
    label: "Digital Marketing",
    icon: "campaign",
    items: [
      "Google Web Analytics",
      "Facebook Marketing · LinkedIn Marketing · Instagram for Business",
      "AdWords Essentials · Mobile Marketing",
      "Twitter Marketing · YouTube Marketing",
      "Marketing to Millennials",
      "B2B Social Media Marketing",
      "Marketing for Small Business",
      "Content Marketing",
    ],
  },
  {
    label: "Software Stack",
    icon: "build",
    items: [
      "Maya · 3DS Max · Blender",
      "Nuke · Combustion · After Effects · Premiere",
      "Photoshop · Illustrator · InDesign · Lightroom",
      "Boris FX · Mocha Pro · Sapphire · Continuum",
      "Red Giant Trapcode · Element 3D · Topaz AI",
      "V-Ray (CUDA) · Blender Cycles · Eevee",
    ],
  },
];
