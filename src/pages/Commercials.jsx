import React from "react";
import { Link } from "react-router-dom";

export default function Commercials() {
    return (
        <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
            <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl">
                <div className="flex justify-between items-center w-full px-8 py-6 max-w-full">
                    <Link to="/" className="text-2xl font-black tracking-tighter text-[#E5E2E1] font-headline">NMEDIA INC.</Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/commercials" className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-primary border-b-2 border-primary pb-1">GALLERY</Link>
                        <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">SERVICES</a>
                        <Link to="/ip-series" className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300">STUDIO</Link>
                        <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">ABOUT</a>
                        <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">CONTACT</a>
                    </div>
                    <button className="bg-primary text-on-primary px-6 py-2 font-label font-bold tracking-tight active:scale-95 transition-transform">
                        START PROJECT
                    </button>
                </div>
            </nav>
            <main className="pt-32">
                <section className="px-8 mb-24">
                    <div className="flex flex-col md:flex-row items-end justify-between border-b border-outline-variant/20 pb-12">
                        <div className="max-w-4xl">
                            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">COMMERCIAL DIVISION // 2024</span>
                            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                                Visual Trust <span className="text-primary">&amp;</span> Clarity
                            </h1>
                        </div>
                    </div>
                </section>
                <div className="w-full overflow-hidden bg-surface-container-low py-3 mb-24 whitespace-nowrap">
                    <div className="flex gap-12 font-label text-[10px] tracking-[0.4em] text-primary/40 uppercase relative max-w-full overflow-hidden truncate block">
                        <span>SYSTEM_STATUS: NOMINAL // LIVE FEED ACTIVE // HIGH BITRATE ENABLED // 4K RENDER PIPELINE // SYSTEM_STATUS: NOMINAL</span>
                    </div>
                </div>
                <section className="px-8 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        <div className="group relative aspect-video bg-surface-container overflow-hidden">
                            <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyDy48ZwRZLxA0meNeXs7YQ2wnPZ0Qh9DVOnbGng7DdWRQOAYhTscajkHTHXPAuxXbh23C8GxNYr8mr8vWHwL96ErW8uA1bTbC1iSfRBvQq6ir70dPUhNDyLebIdavEuNnwn0nTC5tqckYcA-qXOmum8aLz_cv2NWeR_BQRRwijyHIyAXvLBzGrBr-nk2AxQwpOwLP8Yhicv8ukHuUmy34EBwZBRPuB_xQ8NMrExlpXgGisZUNNiZSrq4KHiSo3ZvRUJknfWr3eb8" />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                            <div className="absolute top-4 left-4 font-label text-[10px] text-primary bg-surface/80 px-2 py-1 backdrop-blur-md">
                                [ ENTRY_001 ]
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-1">The Martian Robot</h3>
                                <div className="flex justify-between items-center border-t border-primary/20 pt-2">
                                    <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">DIRECTOR: N. MEDIA</span>
                                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform cursor-pointer">arrow_forward</span>
                                </div>
                            </div>
                        </div>

                        <div className="group relative aspect-video bg-surface-container overflow-hidden">
                            <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmi_FKQdyrjALjdwYwYOO2_kuk_FbjbPonvCfwKEQt11ax7ZEF3oA--UMujGL90NluwPvGvDbOKbj4ja0tml_GgOhpRKxGTRmCwhYX-RJVpfFvTMEiKP35z4G_yFgSLd1GtEoEEdtWRVzh5XEee1q7GjU72XaYcZK6yMUZjBbDj8FfDcF5v0tlcquqmDZsTZ8Uve3PJ6DbiaHgkXZuim5jt6TXqgQdHKsmB2c_-dtG2ScH7cJRfX2ki6uuYndadb_K80T8krwBZF0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                            <div className="absolute top-4 left-4 font-label text-[10px] text-primary bg-surface/80 px-2 py-1 backdrop-blur-md">
                                [ ENTRY_002 ]
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-1">Visual Trust &amp; Clarity</h3>
                                <div className="flex justify-between items-center border-t border-primary/20 pt-2">
                                    <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">BRAND: NMEDIA SERVICES</span>
                                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform cursor-pointer">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
