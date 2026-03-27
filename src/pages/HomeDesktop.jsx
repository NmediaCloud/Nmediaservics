import React from "react";

export default function HomeDesktop() {
  return (
    <div className="selection:bg-primary selection:text-on-primary bg-[#0a0a0a] min-h-screen text-white font-['Inter']">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center gap-3">
          <img
            alt="Nmedia Services Logo"
            className="w-auto object-contain h-10"
            src="https://stockflow.media/assets/Nmedia_logo.png"
          />
          <div className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter text-white">
            Nmedia Services
          </div>
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <a
            className="font-['Space_Grotesk'] tracking-tighter uppercase text-sm text-white/70 hover:text-primary transition-colors duration-300"
            href="mailto:Nanda@nmediaservices.com"
          >
            Nanda@nmediaservices.com
          </a>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-8 max-w-[1440px] mx-auto mb-16">
          <div className="editorial-grid gap-y-12">
            <div className="col-span-12 md:col-span-10">
              <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-6 block font-bold">
                [Animation <span style={{ letterSpacing: "3.6px" }}>Creative +</span> Production + Tech]
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-white mb-8 max-w-5xl">
                Creative + Technical Direction <br />
                Animation Series, Movie, VFX and Game Assets
                <div>Fullstack Implementation</div>
              </h1>
              <p className="font-body text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
                From Story to Final Render. From Idea to Scalable Production
                Systems. We architect high-fidelity, Storytelling for next-gen
                execution. Experienced building scalable content pipelines,
                automation scripts, and production tools
              </p>
            </div>
          </div>
        </section>

        {/* Recent Project Video Embed */}
        <section className="max-w-[1440px] mx-auto px-8 mb-24">
          <div className="mb-12">
            <div className="inline-block border border-primary px-8 py-4 mb-8">
              <h2 className="font-['Space_Grotesk'] text-primary text-sm tracking-[0.3em] uppercase font-bold">
                Recent : Project : Digital Asset Curation
              </h2>
            </div>
            <div className="relative w-full aspect-video bg-surface-container-highest border border-white/5 overflow-hidden shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center transition-all hover:bg-black/20 pointer-events-none">
                <span className="material-symbols-outlined text-white text-8xl opacity-80 group-hover:scale-110 transition-transform">
                  play_circle
                </span>
              </div>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full z-20"
                frameBorder="0"
                src="https://www.youtube.com/embed/jZ7pI98Zf3w?autoplay=0&controls=1&rel=0"
                title="Production Showcase"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6 text-white">
                Capabilities
              </h2>
              <p className="font-body text-white/60 mb-12 max-w-sm">
                Optimizing creative throughput through technical curatorship and
                precision engineering.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
                  movie_filter
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Ad Commercials Trailers
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  High-impact visual storytelling crafted for brands cinematic
                  ads and trailers designed to engage, convert, and leave a
                  lasting impression.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_stories
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  IP Content : Animation Series
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  Original animated series development from concept to screen
                  bringing unique stories, characters, and worlds to life.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
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
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
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
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
                  videogame_asset
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Game Animation / AR / VR
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  Animation Assets development for Unity deployment for immersive,
                  real-time cinematic content. Motion Capture editing and Facial
                  capture implementation.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
                  settings_input_component
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Animation and Visual FX
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  Nandakumar Mohan - IMDb. Visual Effects: PAW Patrol. Known for
                  high-quality production across global animated series.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
                  extension
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Creative–Technical Director
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  Full-Stack Media Tech | Content Pipeline Scripting |
                  E-commerce | Animation Distribution | Marketing Automation.
                </p>
              </div>
              <div className="bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-white/5 hover:border-primary/30">
                <span className="material-symbols-outlined text-primary mb-6 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
                  hub
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-white">
                  Stockflow.Media
                </h4>
                <p className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  A scalable content platform offering ready-to-use media assets
                  and automated pipelines for creators, marketers, and production
                  teams.
                </p>
              </div>
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
              <a
                href="mailto:Nanda@nmediaservices.com"
                className="border border-primary text-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-primary/10 transition-all inline-block"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </section>

        {/* About Nmedia Services */}
        <section className="py-24 px-8 border-y border-white/5 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-surface-container p-12 flex flex-col md:flex-row justify-between items-start gap-8 border border-white/5 hover:border-primary/20 transition-colors">
              <div className="flex-1">
                <h4 className="font-headline text-2xl font-bold mb-6 text-white">
                  About Nmedia Services
                </h4>
                <div className="space-y-6">
                  <p className="font-body text-white/80 leading-relaxed">
                    Nmedia Services is a Creative - Technical studio delivering
                    end-to-end solutions for 3D animation, VFX production. We
                    bridge the gap between storytelling and technology, helping
                    studios, brands, and creators turn ideas into production-ready,
                    high-quality visual content.
                  </p>
                  <p className="font-body text-white/60 leading-relaxed">
                    From concept development to final delivery, we handle the
                    complete pipeline: story, animatics, design, asset creation,
                    animation, motion capture, lighting, rendering, and
                    compositing. Our strength lies in building efficient, scalable
                    workflows that ensure speed, consistency, and production
                    quality.
                  </p>
                  <p className="font-body text-white/60 leading-relaxed">
                    We specialize in pipeline development and automation—creating
                    custom tools, scripting systems, and full-stack solutions
                    tailored for animation, VFX, and game studios. Our expertise
                    also includes motion capture and facial data processing,
                    real-time engine integration (Unreal/Unity), and AI-assisted
                    content creation.
                  </p>
                  <p className="font-body text-white/60 leading-relaxed">
                    Led by Nanda, with over 25 years of experience across global
                    productions and major brands, NMedia brings deep industry
                    knowledge, technical precision, and creative leadership to
                    every project. We don’t just create visuals, we build systems
                    that make production faster, smarter, and more reliable.
                  </p>
                  <p className="font-body text-white/80 font-medium">
                    If you're looking for a partner who understands both
                    creativity and production technology, Nmedia is built for
                    studio-wide automation.
                  </p>
                </div>
              </div>
              <div className="h-14 w-14 border-2 border-primary flex items-center justify-center bg-primary/5 shrink-0 mt-2">
                <span className="material-symbols-outlined text-primary scale-125">
                  auto_awesome
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Marquee */}
        <div className="bg-surface-container-low py-6 overflow-hidden border-y border-white/5 w-full relative">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes desktop-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-desktop-marquee {
                display: flex;
                white-space: nowrap;
                animation: desktop-marquee 20s linear infinite;
            }
          `}} />
          <div className="animate-desktop-marquee gap-12 font-label text-[10px] tracking-[0.4em] uppercase text-white/30">
            {/* Double the content so it loops seamlessly */}
            {Array(2).fill(0).map((_, i) => (
                <div key={i} className="flex gap-12 shrink-0">
                    <span>New York // Dubai // London // Singapore</span>
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Latest Tech Trends : <span className="text-primary">Implemented</span>
                    </span>
                    <span className="text-primary font-bold">•</span>
                    <span>Data Pipeline </span>
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Core Engine Updated <span className="text-white">v4.8</span>
                    </span>
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Render Farm Load: <span className="text-primary">42%</span>
                    </span>
                    <span className="text-primary font-bold">•</span>
                    <span>Established 2024</span>
                    <span className="text-primary font-bold">•</span>
                </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] w-full flex flex-col md:flex-row justify-between items-center border-t border-white/5 py-12 px-8">
        <div className="mb-8 md:mb-0">
          <div className="text-white font-bold font-headline mb-2 text-lg">
            Nmedia Inc.
          </div>
          <p className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-white/40">
            © Since 2015, Production Studio + Tech Lab + Consultant // All Rights Reserved
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
            Youtube
          </a>
        </div>
      </footer>
    </div>
  );
}
