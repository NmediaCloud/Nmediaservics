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
import React, { useEffect, useRef, useState } from "react";

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
  const stripRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  // Scroll the strip by ~one card width on chevron click.
  const nudge = (dir) => {
    const el = stripRef.current;
    if (!el) return;
    const card = el.querySelector("a");
    const step = (card?.offsetWidth || 260) + 4; // card + gap
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  // Click-and-drag pan handlers.
  const onPointerDown = (e) => {
    const el = stripRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
    el.setPointerCapture?.(e.pointerId);
    el.classList.add("cursor-grabbing");
  };
  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d.active) return;
    const el = stripRef.current;
    const dx = e.clientX - d.startX;
    d.moved = Math.abs(dx);
    el.scrollLeft = d.startScroll - dx;
  };
  // Swallow the click that fires after a real drag so cards don't open.
  const onClickCapture = (e) => {
    if (dragRef.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const onPointerUp = (e) => {
    const el = stripRef.current;
    dragRef.current.active = false;
    el?.releasePointerCapture?.(e.pointerId);
    el?.classList.remove("cursor-grabbing");
  };

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
          <a
            href="/articles/Pipeline_Production_System.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/20 hover:border-primary/50 hover:from-primary/15 transition-all duration-300 p-5 group max-w-sm"
          >
            <p className="font-label text-[9px] tracking-[0.3em] text-primary/70 uppercase mb-2">
              [ READ THE FULL SYSTEM ]
            </p>
            <h3 className="font-headline font-bold text-base text-white leading-tight tracking-tight mb-2">
              Pipeline Production System →
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
              Eleven panels walked end-to-end. One source of truth. Format-aware. Cast-locked. Model-agnostic.
            </p>
            <p className="font-label text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/60">
              {articles.length} articles · video walkthroughs in progress
            </p>
          </a>
        </div>

        {/* Carousel — chevron arrows + click-drag pan, native scrollbar hidden */}
        <div className="relative group/carousel">

          {/* Left chevron */}
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-surface-container/80 hover:bg-primary border border-white/10 hover:border-primary backdrop-blur-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 cursor-pointer shadow-2xl shadow-black/40"
          >
            <span className="material-symbols-outlined text-white" style={{ fontSize: "28px" }}>chevron_left</span>
          </button>

          {/* Right chevron */}
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full bg-surface-container/80 hover:bg-primary border border-white/10 hover:border-primary backdrop-blur-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 cursor-pointer shadow-2xl shadow-black/40"
          >
            <span className="material-symbols-outlined text-white" style={{ fontSize: "28px" }}>chevron_right</span>
          </button>

          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-surface-container-lowest to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-surface-container-lowest to-transparent pointer-events-none" />

        <div
          ref={stripRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
          onClickCapture={onClickCapture}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="
          flex gap-1 overflow-x-auto pb-2
          snap-x snap-mandatory cursor-grab
          [&::-webkit-scrollbar]:hidden
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

        </div>

        {/* Scroll-hint footer */}
        <p className="mt-4 text-on-surface-variant/40 text-[10px] font-label tracking-widest uppercase text-right">
          Drag · click chevrons · {articles.length} field notes
        </p>
      </div>
    </section>
  );
}
