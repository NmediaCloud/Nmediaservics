/**
 * PipelineArticles — horizontal-strip showcase of the 11 article HTMLs
 * served from /public/articles/. Reads /articles/articles.json on mount;
 * each card opens its full article in a new tab.
 *
 * Design notes:
 *   - Uses the site's existing tailwind tokens (surface-container, primary,
 *     font-headline, font-label) so it looks native to the homepage.
 *   - Horizontal scroll on overflow with snap points — works on desktop
 *     and mobile without a separate component.
 *   - Each card has a small subtitle pulled from the article's `tag`
 *     plus a 2-line intro line built from the title (descriptive text
 *     stays light — heavy copy lives on the article itself).
 */
import React, { useEffect, useState } from "react";

// One-line intro per article. Hand-written to be punchy at thumbnail size.
// (Could be moved into articles.json as an `intro` field later, but for
// now hard-coded per-slug keeps the manifest clean.)
const INTROS = {
  "00_Info_Input_Collection":
    "Client briefs become a structured project manifest the rest of the pipeline reads.",
  "01_Asset_Design":
    "Sheet the cast first — characters, props, environments — before a single shot is drawn.",
  "02_Story_Script_Development":
    "One engine, five formats: series, movie, musical, documentary, ad. Format-aware from line one.",
  "03_Episodic_Asset_Development":
    "Variants as deltas, not duplicates. The face stays. The wardrobe changes.",
  "04_Storyboard_Generator":
    "Scene → shot decomposition with cast-aware prompt enrichment. Boards as data.",
  "05_Animatics_Workshop":
    "Boards + voice clones + music bed. Re-cut faster than opening Premiere.",
  "06_Animation_Sandbox":
    "Veo, Kling, Runway, open-source — same prompt, every backend, audited takes.",
  "06_Comic_Book_Generator":
    "Same cast, same boards, different deliverable. Print-ready CMYK pages.",
  "07_Reel_Polish":
    "Upscale, interpolate, repack. One queue. One kill switch. Production-grade output.",
  "MiroFish":
    "A million synthetic viewers test-screen your pitch in twelve minutes.",
  "UGC_Pipeline":
    "One Google Sheet row in. One finished UGC, ad, or podcast video out. Vision-graded QA.",
};

export default function PipelineArticles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/articles/articles.json?v=${Date.now()}`, { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then(setArticles)
      .catch((e) => setError(String(e)));
  }, []);

  if (error || articles.length === 0) return null;   // fail quiet — strip just doesn't render

  return (
    <section className="py-24 px-8 bg-surface-container-lowest border-y border-white/5">
      <div className="max-w-[1440px] mx-auto">

        {/* Section heading — matches the Capabilities header rhythm */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ FIELD_NOTES // ANIMATION_PIPELINE_V1.1 ]
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none">
              How we built it.
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-xl text-sm leading-relaxed">
              Eleven control panels. One source of truth. Each module gets its own
              field note — what the problem was, how the panel works, what it ships.
            </p>
          </div>
          <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
            {articles.length} articles · video walkthroughs in progress
          </span>
        </div>

        {/* Card strip — horizontal scroll on overflow, snap-aligned */}
        <div className="
          flex gap-1 overflow-x-auto pb-4
          snap-x snap-mandatory
          scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent
        ">
          {articles.map((a) => (
            <a
              key={a.slug}
              href={a.url.startsWith("./") ? `/articles/${a.url.slice(2)}` : a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex-shrink-0 snap-start
                w-[240px] md:w-[260px]
                bg-surface-container hover:bg-surface-container-high
                border border-outline-variant/10 hover:border-primary/40
                relative
                transition-all duration-300 flex flex-col overflow-hidden
              "
            >
              {/* Thin orange accent that draws on hover */}
              <span className="
                absolute top-0 left-0 h-[2px] w-0 z-10
                bg-primary transition-all duration-500
                group-hover:w-full
              " />

              {/* Video thumbnail / placeholder — visual cue, click still goes to article */}
              <div className="relative aspect-video bg-black overflow-hidden border-b border-white/5">
                {a.youtube_id ? (
                  <>
                    <img
                      src={`https://i.ytimg.com/vi/${a.youtube_id}/hqdefault.jpg`}
                      alt={`${a.title} — video walkthrough`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center shadow-lg shadow-primary/40 transition-all group-hover:scale-110">
                        <span className="material-symbols-outlined text-on-primary" style={{ fontSize: "22px" }}>play_arrow</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] text-center px-3">
                    <span className="material-symbols-outlined text-primary/40" style={{ fontSize: "32px" }}>play_circle</span>
                    <p className="font-label text-[8px] tracking-[0.3em] text-primary/60 uppercase mt-1.5">
                      Video · Coming Soon
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col p-5 flex-1">
                {/* Tag pill */}
                <p className="font-label text-[10px] tracking-widest uppercase text-primary mb-3 leading-none">
                  {a.tag}
                </p>

                {/* Headline */}
                <h3 className="font-headline font-bold text-base text-white leading-tight tracking-tight mb-3 line-clamp-3">
                  {a.title}
                </h3>

                {/* Intro */}
                <p className="text-xs text-on-surface-variant leading-relaxed flex-1 line-clamp-4">
                  {INTROS[a.slug] || ""}
                </p>

                {/* Footer row */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="font-label text-[9px] tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors">
                    Read field note →
                  </span>
                  {a.youtube_id && (
                    <span className="font-label text-[9px] text-primary uppercase tracking-wider">
                      ▶ video
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Scroll-hint footer */}
        <p className="mt-4 text-on-surface-variant/40 text-[10px] font-label tracking-widest uppercase text-right">
          ← Scroll for all {articles.length} →
        </p>
      </div>
    </section>
  );
}
