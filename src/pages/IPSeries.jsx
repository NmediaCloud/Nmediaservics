import React from "react";
import { Link } from "react-router-dom";

export default function IPSeries() {
    return (
        <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
            <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl flex justify-between items-center px-8 py-6 max-w-full mx-auto">
                <Link to="/" className="text-xl font-black tracking-tighter text-[#E5E2E1] font-headline">NMEDIA INC.</Link>
                <div className="hidden md:flex items-center space-x-10">
                    <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">GALLERY</a>
                    <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">SERVICES</a>
                    <Link to="/ip-series" className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-primary border-b-2 border-primary pb-1">STUDIO</Link>
                    <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">ABOUT</a>
                    <a className="font-['Space_Grotesk'] tracking-tight uppercase text-sm font-bold text-[#E5E2E1]/60 hover:text-primary transition-colors duration-300" href="#">CONTACT</a>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest hover:scale-95 transition-transform duration-200 active:scale-90">
                    START PROJECT
                </button>
            </nav>
            <main className="pt-32 pb-24">
                <header className="px-8 mb-24 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-primary font-label text-sm tracking-[0.3em]">
                                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                                [ SYSTEM_LOG_V3.0 | ACTIVE_IP_CORE ]
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter max-w-4xl">
                                IP SERIES &amp; ORIGINAL CONTENT
                            </h1>
                        </div>
                        <div className="text-on-surface-variant font-label text-xs tracking-widest border-l border-outline-variant/30 pl-6 pb-2 hidden lg:block">
                            LATENCY: 12MS<br/>UPLINK: ACTIVE<br/>CORE: NM_ORIGINALS_V4
                        </div>
                    </div>
                </header>
                <section className="bg-surface-container-low py-4 overflow-hidden border-y border-outline-variant/10 mb-24">
                    <div className="flex whitespace-nowrap gap-12 items-center">
                        <span className="font-label text-[10px] tracking-[0.4em] text-primary relative max-w-full overflow-hidden truncate block">PROJECT STATUS: NOMINAL // CORE LOAD: 42% // NM_VERIFIED_IP // ORIGINALS UNIT // PROJECT STATUS: NOMINAL // CORE LOAD: 42%</span>
                    </div>
                </section>
                <section className="px-8 max-w-7xl mx-auto mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {/* Cards */}
                        <article className="group relative bg-surface-container overflow-hidden border border-outline-variant/10 aspect-[4/5] flex flex-col">
                            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-start z-10 relative bg-surface-container">
                                <div>
                                    <p className="font-label text-[10px] text-primary mb-1 tracking-widest uppercase">Entry ID: 0922-A</p>
                                    <h3 className="font-headline font-bold text-xl uppercase tracking-tight">Safe Series</h3>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">grid_view</span>
                            </div>
                            <div className="flex-grow overflow-hidden relative">
                                <img alt="Safe Series Concept" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgwvbOJ_WbL4e2VWeHynJWW-09ds62TmEaOIcl8qedrquhZ5cZ7H1dbXBCLoRZvF2ef9vti3oBCa3u69xqHxhRHWj_XD6quhlMMmygW2z_f0AdGlXOw_JSk1lBi80HFkwzMcypZv3fXRwXJXjgzj8gH0QNrNbIKMcl_AE3ULVOBGlq3AU6pvPqBP1EdnVDYWl6JhnUK0OeXlJQm-9nfn6FGrKhiG_ls2Ie_qa24a6N4rD_aDo0q7PruXKRxtSmM29B67VD7iwo6z4" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6 bg-surface-container-high z-10 relative">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-2 py-0.5 border border-primary/40 text-primary text-[9px] font-label tracking-widest uppercase">Status: Production</span>
                                    <span className="text-on-surface-variant/40 text-[9px] font-label">VOL. 01</span>
                                </div>
                                <p className="text-sm text-on-surface-variant line-clamp-2 font-light leading-relaxed mb-6">Exploring the architectural isolation of urban safe-havens through high-fidelity visual documentation.</p>
                                <button className="w-full py-3 bg-gradient-to-r from-primary to-[#FF8A3D] text-on-primary font-label font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">ACCESS_DATA</button>
                            </div>
                        </article>
                        
                        <article className="group relative bg-surface-container overflow-hidden border border-outline-variant/10 aspect-[4/5] flex flex-col md:translate-y-12">
                            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-start z-10 relative bg-surface-container">
                                <div>
                                    <p className="font-label text-[10px] text-primary mb-1 tracking-widest uppercase">Entry ID: 1104-B</p>
                                    <h3 className="font-headline font-bold text-xl uppercase tracking-tight">Kinetic Lab</h3>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">motion_sensor_active</span>
                            </div>
                            <div className="flex-grow overflow-hidden relative">
                                <img alt="Kinetic Lab Concept" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzp6qo_1-tB09UGn137WDygsnou5dK33nWFDaHD4hEHVwsmWeYeIjxxLLcKvoWK5ruTa06nCAAqDU2jPnfyXCoBLB6I2MESR00npKLjwi_8U7zlj_OY_uDC974UpwplnNb873tH2KZlNa7NN_zdFypZUw49oWkOdz1T4DN_ugYE9mLhQMl9UKD7xN8Fn-VU9FQYcf3aNbv422RP6h55aoch9p_hGsdsv57aV_VbAksJ8W89d1riDjVGhhp4jeBeCAAwoaJ6O_BRpk" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6 bg-surface-container-high z-10 relative">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-2 py-0.5 border border-primary/40 text-primary text-[9px] font-label tracking-widest uppercase">Status: Post-Process</span>
                                    <span className="text-on-surface-variant/40 text-[9px] font-label">EXP. 44</span>
                                </div>
                                <p className="text-sm text-on-surface-variant line-clamp-2 font-light leading-relaxed mb-6">A study in high-speed fluid dynamics and digital choreography, rendered in hyper-real detail.</p>
                                <button className="w-full bg-surface-container border border-outline/20 text-on-surface font-label font-bold text-xs tracking-widest uppercase hover:bg-surface-bright transition-colors py-3">VIEW_LOGS</button>
                            </div>
                        </article>

                        <article className="group relative bg-surface-container overflow-hidden border border-outline-variant/10 aspect-[4/5] flex flex-col">
                            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-start z-10 relative bg-surface-container">
                                <div>
                                    <p className="font-label text-[10px] text-primary mb-1 tracking-widest uppercase">Entry ID: 0588-X</p>
                                    <h3 className="font-headline font-bold text-xl uppercase tracking-tight">Neural Net</h3>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">neurology</span>
                            </div>
                            <div className="flex-grow overflow-hidden relative">
                                <img alt="Neural Net Concept" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjxUSTxVIuqB4W2acudiVkKCuRXGhsXLs6QheMDVx1pbdYQGA8yzMnnnFLUkzKjiVYGsEcSqrnT06oyZRLKwm0NpBauvUB5WcKF5bTZw54YXi9_mjiOuoX-T7EbGLPudZ4WbOf611SLw8IxkoRTAIfdWDWnjfJENDeay9vtPkla_DHCtB0OMrf2JBgoSeGdg5s_yFhs5zWoKL6AwYwpAvpuFWZ_O-YeNuXcaAwPv9l5q_J3_lFjWn9xUAs-qxMd77XhSq3Lza8JKk" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6 bg-surface-container-high z-10 relative">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-2 py-0.5 border border-primary/40 text-primary text-[9px] font-label tracking-widest uppercase">Status: Concept</span>
                                    <span className="text-on-surface-variant/40 text-[9px] font-label">GEN. 0.3</span>
                                </div>
                                <p className="text-sm text-on-surface-variant line-clamp-2 font-light leading-relaxed mb-6">Interfacing human cognition with digital environments through real-time generative landscapes.</p>
                                <button className="w-full bg-surface-container border border-outline/20 text-on-surface font-label font-bold text-xs tracking-widest uppercase hover:bg-surface-bright transition-colors py-3">DECRYPT_CORE</button>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-12 space-y-12">
                                <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter">Engineering Precision</h2>
                                <p className="text-on-surface-variant font-light leading-relaxed max-w-md">Our original IP is built on a foundation of technical excellence. From capture to delivery, every frame is processed through the NM CORE proprietary pipeline.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
