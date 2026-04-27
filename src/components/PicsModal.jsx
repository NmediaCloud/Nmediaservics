import React, { useEffect, useState } from "react";

/**
 * PicsModal — full-screen photo-gallery overlay.
 *
 * Usage:
 *   const [open, setOpen] = useState(false);
 *   <button onClick={() => setOpen(true)}>View Stills</button>
 *   <PicsModal open={open} onClose={() => setOpen(false)} pics={PICS} />
 *
 * `pics` is an array of file names (e.g. ["pic_01.jpg", …]) — all
 * served from /images/pics/.
 */
export default function PicsModal({ open, onClose, pics }) {
  const [zoomed, setZoomed] = useState(null);

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, zoomed, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* ── Header bar ─────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-8 py-5 border-b border-primary/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-label text-[10px] tracking-[0.4em] text-primary uppercase">
            [ STILLS · {pics.length} ]
          </span>
          <span className="font-headline text-lg font-bold text-white tracking-tight uppercase">
            Studio Gallery
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="font-label text-xs tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
        >
          CLOSE
          <span className="material-symbols-outlined text-base">close</span>
        </button>
      </div>

      {/* ── Grid (or zoomed viewer) ───────────────────── */}
      {zoomed ? (
        <div
          className="flex-1 flex items-center justify-center p-8 cursor-zoom-out"
          onClick={() => setZoomed(null)}
        >
          <img
            src={`/images/pics/${zoomed}`}
            alt="Studio still"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <div
          className="flex-1 overflow-y-auto p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-7xl mx-auto">
            {pics.map((file) => (
              <button
                key={file}
                type="button"
                onClick={() => setZoomed(file)}
                className="group relative aspect-[4/3] bg-surface-container border border-outline-variant/10 hover:border-primary/40 overflow-hidden cursor-zoom-in transition-all"
              >
                <img
                  src={`/images/pics/${file}`}
                  alt="Studio still"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Footer hint ───────────────────────────────── */}
      <div className="px-8 py-3 border-t border-primary/10 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant/60 uppercase">
          {zoomed ? "Click image · Esc to close zoom" : "Click image to enlarge · Esc to close gallery"}
        </p>
      </div>
    </div>
  );
}


// File names for /about — 24 stills under public/images/pics/
export const ABOUT_PICS = [
  "pic_01.jpg", "pic_02.jpg", "pic_03.jpg", "pic_04.jpg", "pic_05.jpg",
  "pic_06.jpg", "pic_07.jpg", "pic_08.jpg", "pic_09.jpg", "pic_10.jpg",
  "pic_11.jpg", "pic_12.jpg", "pic_13.jpg", "pic_14.jpg", "pic_15.jpg",
  "pic_16.jpg", "pic_17.jpg", "pic_18.jpg", "pic_19.jpg", "pic_20.jpg",
  "pic_21.jpg", "pic_22.jpg", "pic_23.jpg", "pic_24.jpg",
];
