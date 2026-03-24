import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="selection:bg-primary selection:text-on-primary">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-primary/10">
        <Link to="/" className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter text-white">
          STUDIO+LAB
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <Link
            to="/"
            className="font-['Space_Grotesk'] tracking-tighter uppercase text-sm text-primary border-b-2 border-primary pb-1"
          >
            Work
          </Link>
          <a
            className="font-['Space_Grotesk'] tracking-tighter uppercase text-sm text-white/70 hover:text-primary transition-colors duration-300"
            href="#"
          >
            Services
          </a>
          <a
            className="font-['Space_Grotesk'] tracking-tighter uppercase text-sm text-white/70 hover:text-primary transition-colors duration-300"
            href="#"
          >
            Contact
          </a>
        </div>
        <button className="bg-primary text-white font-label uppercase text-xs tracking-widest px-6 py-3 font-bold hover:bg-primary/90 transition-all active:scale-95">
          Start Project
        </button>
      </nav>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-8 mb-32 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-y-12">
            <div className="col-span-12 md:col-span-10">
              <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-6 block font-bold">
                [ PRODUCTION + TECH ]
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-white mb-8 max-w-5xl">
                Creative + Technical Direction for Animation, VFX &amp; Game
                Pipelines
              </h1>
              <p className="font-body text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
                From Story to Final Render. From Idea to Scalable Production
                Systems. We architect high-fidelity storytelling for next-gen
                execution.
              </p>
            </div>
          </div>
          <div className="mt-20 w-full aspect-[21/9] relative overflow-hidden bg-surface-container border border-white/5">
            <img
              alt="Technical Lab Background"
              className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx5FdzwaovJjN2125BervxKPkN2JTBCdKmKkzmwGXbp6ad3nsnc3UPymTw1ncI5yhqAQ7raC1Z03PZj9abvE_lI98NSP9tQEOkUmwbPbDg9dJzTGL_NXbuHgv2Hx9uL9WMpezk0_Szh9KzEHheW0GTLqiYuFLEOWNcy0TTT8_M14I3jrlG8O0xPnZrAJkSUAoRjbFyh5ob7GdKqhz3m7KRNjcUfoOtxNMd4Ezc2KkAohzR35Z-7Zkr0VdeiDEhGbghtqhrcu_xh0M"
            />
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="font-label text-[10px] tracking-widest uppercase text-primary font-bold">
                System Status: Operational
              </span>
            </div>
          </div>
        </section>
        {/* Selected Works */}
        <section className="bg-surface-container-low py-24 px-8 border-y border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tight mb-2 text-white">
                  Selected Works
                </h2>
                <p className="font-label text-white/40 text-xs tracking-widest uppercase">
                  Systemic Narrative Execution
                </p>
              </div>
              <a
                className="font-label text-primary text-sm uppercase tracking-widest border-b-2 border-primary pb-1 hidden md:block hover:text-white hover:border-white transition-all"
                href="#"
              >
                View Archive
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Ad Commercials */}
              <Link to="/commercials" className="group relative aspect-square bg-surface-container overflow-hidden border border-white/5 cursor-pointer block">
                <img
                  alt="Ad Commercials"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYcDvdPumgApx_fEz3IJMelCI6iAUVfzI8XZqkPIqYGJ-ZFzi|h0QXkHhDWsfe3FK2vRb1VMp8EVL2zDHl9E9MaXtAeHl9zjEESvC2elQg8ZMrT8ClYM0KbXq0WIt9Ak20XwkO_mEYQ-RZd1q_2P-LcNVwLafKVvRcwDcSOSBBAJBTlbx1XEsXi5NnbSreAs-QdUSPEEr78k44NaS8qP9LdFCoy0uoUBAlvh6T98OEKQ_w9sPxFL3fJnH8dhxsFRQObEcy5ekdRZc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <span className="material-symbols-outlined text-white text-6xl">
                    play_circle
                  </span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-headline text-lg font-bold text-white">
                    Ad Commercials
                  </h3>
                  <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">
                    Video Preview
                  </span>
                </div>
              </Link>
              {/* IP Series */}
              <Link to="/ip-series" className="group relative aspect-square bg-surface-container overflow-hidden border border-white/5 cursor-pointer block">
                <img
                  alt="IP Series"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrk2NsX_gfvJjU452YDHotJnJHz9dNCcU67Gg-X5j8IVdvc1v0vv-LXH5vfj2L9LgXu4hjA1MRisBssjJnS1Ldt2bxWwQzi97noIPUO_pD1CxyuiCc09IKcs32hEze0rKA78ap7Ja5ejHozaW6Kfr_cV5mFB3_zQvhEk3uZQm_RzMJDUoB9uy7_t0TsF4HPhRVSPG2FkIdR5eVQd7N0z7Y2u8TPIS1PVwLSF8QOnKiAYzbywEMfwM6yMBQCWIg2MpyansYNpvZ208"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <span className="material-symbols-outlined text-white text-6xl">
                    play_circle
                  </span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-headline text-lg font-bold text-white">
                    IP Series
                  </h3>
                  <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">
                    Video Preview
                  </span>
                </div>
              </Link>
              {/* Stockflow.media */}
              <div className="group relative aspect-square bg-surface-container overflow-hidden border border-white/5 cursor-pointer">
                <img
                  alt="Stockflow.media"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBol4Ofl4wngvYxSXay8YL9bn2AYvsrFr02E5RYCxoUbQ8EwwBkwGd6-kDOQuR5s6DFlsQPRue4blqByu4CVLldctYjw_jev-JDjREbiwayuaQtrNQ3lmxFXQPU52cHq5H1EtYLJkZ7slI4kz61EMQA7IRkCXxpB_a7Y_2g0Izo97qBRwXBA0v909QSQhbxc5yzBUDA-amqO78opYVI62IJ-Ile_ovbkcbvCwobAy_WDl_nvRU7kCXnvNcIFWqX83hmFmubLw-b-jM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <span className="material-symbols-outlined text-white text-6xl">
                    play_circle
                  </span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-headline text-lg font-bold text-white">
                    Stockflow.media
                  </h3>
                  <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">
                    Video Preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Capabilities */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6 text-white">
                Capabilities
              </h2>
              <p className="font-body text-white/60 mb-12 max-w-sm">
                Optimizing creative throughput through technical curatorship and
                precision engineering.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span
                  className="material-symbols-outlined text-primary mb-6 scale-110"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  3d_rotation
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  3D Animation &amp; VFX
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  Industrial-grade character and environment execution across
                  cinematic pipelines.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span
                  className="material-symbols-outlined text-primary mb-6 scale-110"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  accessibility_new
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Motion Capture &amp; Facial
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  High-fidelity performance capture and automated data cleanup
                  workflows.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span
                  className="material-symbols-outlined text-primary mb-6 scale-110"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  videogame_asset
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Game / AR / VR Integration
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  Unreal Engine &amp; Unity deployment for immersive, real-time
                  cinematic content.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span
                  className="material-symbols-outlined text-primary mb-6 scale-110"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  settings_input_component
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Pipeline Tools &amp; Automation
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  Custom SDKs and proprietary plugins to streamline large-scale
                  VFX operations.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-surface-container p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-white/5 hover:border-primary/20 transition-colors">
            <div>
              <h4 className="font-headline text-2xl font-bold mb-2 text-white">
                AI Content Systems
              </h4>
              <p className="font-body text-white/60">
                Deployment of ethical, proprietary model training for
                studio-wide automation.
              </p>
            </div>
            <div className="h-14 w-14 border-2 border-primary flex items-center justify-center bg-primary/5">
              <span className="material-symbols-outlined text-primary scale-125">
                auto_awesome
              </span>
            </div>
          </div>
        </section>
        {/* Why Us (ARCHITECT) */}
        <section className="bg-surface-container-lowest py-24 px-8 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-10 group hover:bg-primary/5 transition-colors">
              <span className="font-label text-primary text-[10px] tracking-[0.3em] block mb-4 uppercase font-bold">
                Legacy
              </span>
              <p className="font-headline text-3xl font-bold text-white">
                20+ Years Experience
              </p>
              <p className="font-body text-xs text-white/40 mt-3 uppercase tracking-widest">
                In Technical Leadership
              </p>
            </div>
            <div className="p-10 group hover:bg-primary/5 transition-colors">
              <span className="font-label text-primary text-[10px] tracking-[0.3em] block mb-4 uppercase font-bold">
                Pedigree
              </span>
              <p className="font-headline text-3xl font-bold text-white">
                Worked with Global Brands
              </p>
              <p className="font-body text-xs text-white/40 mt-3 uppercase tracking-widest">
                Fortune 500 Trusted Partner
              </p>
            </div>
            <div className="p-10 group hover:bg-primary/5 transition-colors">
              <span className="font-label text-primary text-[10px] tracking-[0.3em] block mb-4 uppercase font-bold">
                DNA
              </span>
              <p className="font-headline text-3xl font-bold text-white">
                Combines Creative + Engineering
              </p>
              <p className="font-body text-xs text-white/40 mt-3 uppercase tracking-widest">
                Hybrid Execution Model
              </p>
            </div>
            <div className="p-10 group hover:bg-primary/5 transition-colors">
              <span className="font-label text-primary text-[10px] tracking-[0.3em] block mb-4 uppercase font-bold">
                Outcome
              </span>
              <p className="font-headline text-3xl font-bold text-white">
                Builds Systems, not just content
              </p>
              <p className="font-body text-xs text-white/40 mt-3 uppercase tracking-widest">
                Scalable IP Architecture
              </p>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-40 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-10 leading-none text-white">
              Have a project or pipeline challenge? Let’s build it.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <button className="bg-primary text-white font-label uppercase px-12 py-5 font-bold text-sm tracking-widest transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                Initialize Contact
              </button>
              <button className="border border-primary text-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-primary/10 transition-all">
                View Pipeline Tools
              </button>
            </div>
          </div>
        </section>
        {/* Scrolling Marquee */}
        <div className="bg-surface-container-low py-6 overflow-hidden border-y border-white/5">
          <div className="whitespace-nowrap flex gap-12 font-label text-[10px] tracking-[0.4em] uppercase text-white/30">
            <span>NEW YORK // LONDON // TOKYO // SINGAPORE</span>
            <span className="text-primary font-bold">•</span>
            <span>
              SYSTEM STATUS: <span className="text-primary">NOMINAL</span>
            </span>
            <span className="text-primary font-bold">•</span>
            <span>DATA PIPELINE ACTIVE</span>
            <span className="text-primary font-bold">•</span>
            <span>
              CORE ENGINE UPDATED <span className="text-white">v4.8</span>
            </span>
            <span className="text-primary font-bold">•</span>
            <span>
              RENDER FARM LOAD: <span className="text-primary">42%</span>
            </span>
            <span className="text-primary font-bold">•</span>
            <span>ESTABLISHED 2024</span>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-[#050505] w-full flex flex-col md:flex-row justify-between items-center border-t border-white/5 full-width py-12 px-8">
        <div className="mb-8 md:mb-0">
          <div className="text-white font-bold font-headline mb-2 text-lg">
            NMEDIA INC.
          </div>
          <p className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-white/40">
            © 2024 PRODUCTION STUDIO + TECH LAB // ALL RIGHTS RESERVED
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-white/50 hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
            href="#"
          >
            Instagram
          </a>
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-white/50 hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-white/50 hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
            href="#"
          >
            Twitter
          </a>
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-white/50 hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
            href="#"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
