import React from "react";
import { Link } from "react-router-dom";
import { SiteNav, SiteFooter } from "./IPSeries";

/**
 * DigitalMarketing — strategy + portfolio.
 *
 * Recreates mnkmars.wixsite.com/certi/digitalmarketing in the site's
 * design system. Three-pillar Paid / Earned / Owned media framework
 * plus tooling stack and analytics approach.
 */
export default function DigitalMarketing() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteNav active="marketing" />

      <main className="pt-32 pb-24">

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant/20 pb-12">
            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">
              MARKETING STRATEGY // PAID · OWNED · EARNED
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              Marketing the <span className="text-primary">Idea</span>.<br/>
              Not the Product.
            </h1>
            <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
              Three-pillar digital marketing strategy — paid, earned, owned —
              wired through a single analytics layer. The framework we use to
              put animation work in front of the right rooms.
            </p>
          </div>
        </header>

        {/* ── CONTENT VS TRADITIONAL ────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant/10">
          <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-1">
            <div className="bg-surface-container border border-outline-variant/10 p-10">
              <p className="font-label text-[10px] tracking-[0.4em] text-on-surface-variant uppercase mb-3">
                TRADITIONAL
              </p>
              <p className="text-2xl font-headline font-bold tracking-tight leading-tight">
                Aims to sell the <span className="text-on-surface-variant/70">product</span>.
              </p>
            </div>
            <div className="bg-surface-container border border-primary/30 p-10">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                CONTENT MARKETING
              </p>
              <p className="text-2xl font-headline font-bold tracking-tight leading-tight">
                Sells the <span className="text-primary">idea</span> of a product.
              </p>
            </div>
          </div>
        </section>

        {/* ── THREE PILLARS ──────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ THREE-PILLAR FRAMEWORK ]
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
              Paid. Owned. Earned.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {PILLARS.map((p) => (
              <article key={p.title} className="bg-surface-container border border-outline-variant/10 p-8 flex flex-col">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">{p.icon}</span>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-3">{p.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-6">{p.body}</p>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">Channels</p>
                <ul className="space-y-1.5 flex-1">
                  {p.channels.map((c) => (
                    <li key={c} className="text-sm text-on-surface-variant font-light flex gap-2">
                      <span className="text-primary/40">·</span>{c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── ANALYTICS ─────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ ANALYTICS // CLOSED LOOP ]
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                What gets<br />measured.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-on-surface-variant font-light leading-relaxed">
                Every campaign is wired through one analytics layer — Google
                Analytics, Hootsuite Core, and Power BI sentiment dashboards
                — so the same spend can be evaluated across paid, owned and
                earned channels in one report.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Clicks", "Traffic", "Comments", "Shares"].map((m) => (
                  <div key={m} className="bg-surface-container border border-outline-variant/10 p-4 text-center">
                    <p className="font-headline text-2xl text-primary font-bold mb-1">·</p>
                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TOOLS ──────────────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ TOOLCHAIN ]
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
              The Stack.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOLS.map((t) => (
              <div key={t.label}>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">{t.label}</p>
                <ul className="space-y-2">
                  {t.items.map((it) => (
                    <li key={it} className="text-sm text-on-surface-variant font-light flex gap-2">
                      <span className="text-primary/50">·</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface-container-lowest border-t border-outline-variant/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-white uppercase">
              Need a campaign that<br />actually closes the loop?
            </h2>
            <a href="mailto:nanda@nmediaservices.com" className="inline-block bg-primary text-on-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest hover:bg-[#ff8a3d] transition-all">
              Brief the Studio →
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

const PILLARS = [
  {
    title: "Paid Media",
    icon:  "paid",
    body:  "Native + traditional advertising, display, banner, print, radio, TV, promotions, press releases, sponsored social events, out-of-home and in-store placement.",
    channels: ["Content & Articles", "Influencers", "LinkedIn Ads", "Yahoo Ads", "Twitter Ads", "YouTube Ads", "Facebook Ads", "AdWords · Paid Search · PPC", "Redirect Ads"],
  },
  {
    title: "Owned Media",
    icon:  "domain",
    body:  "Branded communication that makes a direct connection between brand and consumer — sites, signs, uniforms, fixtures, kiosks, packaging, fleet vehicles, CRM.",
    channels: ["Responsive Website", "Blogs · Articles", "Social CRM Process", "Email Campaigns", "LinkedIn Page", "Facebook Page", "Twitter Site", "Google+ Profile"],
  },
  {
    title: "Earned Media",
    icon:  "campaign",
    body:  "Communication about the brand that isn't managed — exposure that comes through word of mouth, digital sharing, organic reposts, reviews and viral spread.",
    channels: ["Blog & Article Mentions", "Reviews & Ratings", "Likes & Reposts", "Viral Shares", "Influencer Endorsements"],
  },
];

const TOOLS = [
  { label: "Paid Advertising", items: ["LinkedIn Ads", "Facebook Ads", "Twitter Ads", "YouTube Ads · Display", "Yahoo Ads · Mail Ads", "AdWords", "Pay-per-click", "Redirect Ads"] },
  { label: "Content & Influencer", items: ["Content Copywriting", "Content Strategy", "Influencer Discovery", "Influencer Engagement"] },
  { label: "Owned Channels", items: ["Responsive Web", "Blogs · Articles", "Email Campaigns", "Social CRM Process", "Google+ Profile", "LinkedIn / Facebook / Twitter"] },
  { label: "Analytics", items: ["Google Analytics", "Hootsuite Core Analytics", "Power BI Sentiment Analysis", "Facebook Insights"] },
];
