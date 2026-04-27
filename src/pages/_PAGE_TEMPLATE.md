# Page Template — Standard Format (locked 2026-04-27)

Reference: `Commercials.jsx` is the canonical example. Match this shape
for every new page going forward.

## 1 · Nav (logo only)

No menu items. No "Start Project" button. Just the logo, clickable,
linking to home.

```jsx
<nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl">
  <div className="flex items-center w-full px-8 py-6 max-w-full">
    <Link to="/" className="text-2xl font-black tracking-tighter text-[#E5E2E1] font-headline hover:text-primary transition-colors">
      NMEDIA INC.
    </Link>
  </div>
</nav>
```

## 2 · Hero (toned, centered)

- **No pre-headline tag pill** ("NMEDIASERVICES · X" — drop it)
- Headline: `text-3xl md:text-5xl font-bold tracking-tight` (NOT
  `text-5xl/7xl font-black`)
- Sub-line: `text-base md:text-lg`, on-surface-variant, with orange
  highlights for key words via `<span className="text-primary">`
- Centered with bottom border separator

```jsx
<section className="px-8 mb-16 max-w-7xl mx-auto pt-32">
  <div className="border-b border-outline-variant/20 pb-12 text-center">
    <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase mb-6">
      Page Title Goes Here
    </h1>
    <p className="text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
      Short description with <span className="text-primary">keyword</span>,
      <span className="text-primary"> keyword</span>,
      <span className="text-primary"> keyword</span>.
    </p>
  </div>
</section>
```

## 3 · Section heading pattern

Each major section opens with the same rhythm:

```jsx
<div className="flex items-end justify-between mb-8 flex-wrap gap-3">
  <div>
    <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
      [ SECTION · 01 ]
    </p>
    <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
      Section Title
    </h2>
  </div>
  {/* optional right-side small link */}
</div>
```

## 4 · CTA (minimal pull-quote, no buttons)

- Soft radial glow background (opacity 30, smaller blur)
- Single headline `text-2xl md:text-3xl font-bold` sentence-case
- **No buttons**. Contact lives in the footer.

```jsx
<section className="py-20 px-8 text-center bg-surface relative overflow-hidden border-t border-outline-variant/10">
  <div className="absolute inset-0 opacity-30 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full"></div>
  </div>
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white">
      Quiet pull-quote here.
    </h2>
  </div>
</section>
```

## 5 · Footer (3-column)

Three short columns: Contact / Studio / Channels. No "About" blurb,
no social grid — those belong on dedicated pages.

```jsx
<footer className="bg-surface-container-lowest py-16 px-8 border-t border-outline-variant/10">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
    {/* Contact / Studio / Channels — see Commercials.jsx */}
  </div>
  <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10">
    <p className="text-xs text-on-surface-variant/50 font-label">
      © Nmedia Inc. · Animation Production Pipeline v1.1
    </p>
  </div>
</footer>
```

## 6 · What NOT to do

| ❌ Avoid | ✅ Use |
|---|---|
| Pre-headline orange tag pill | Skip — let the headline introduce itself |
| `font-black` headlines + `text-7xl` | `font-bold` + `text-5xl` max |
| Multi-button CTA section | Single pull-quote headline |
| In-nav menu links | Logo-only nav |
| `START PROJECT` button | Footer-only contact |
| Capability grids (6 verticals etc.) | Only if the page truly needs them |
| Hand-written blocks of marketing copy | Real content from the source — short, declarative |

## 7 · Living this rule

When porting an existing page to this format, the touchpoints are:

1. Nav — strip menu items + START PROJECT button
2. Hero — drop tag pill, scale H1 down, scale sub-line down
3. CTA section — drop buttons, scale H2 down, reduce padding
4. Section headings — switch to the `[ SECTION · N ]` + H2 rhythm
5. Footer — keep as 3-col Contact / Studio / Channels

Each port is ~10–15 minutes per page.
