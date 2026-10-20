# SmallNestDecor — Build Report

**Date:** 2026-10-20 · **Stack:** Astro 5 (static output) + Tailwind CSS 4 · **Build status: ✅ clean** (`npm run build` passes, 19 pages, dist = 1.6 MB, **zero JS files shipped**)

## What was built

**Routes (all static HTML in `dist/`)**
- `/` — hero, 6 category tiles (hover lift), latest articles grid, "Popular paint colors" strip, About strip
- `/blog` — all articles, newest first, client-side category filter chips (only JS on the site, two tiny inline scripts total across the whole project; home ships none)
- `/blog/[slug]` — article template: breadcrumb + BreadcrumbList JSON-LD, conditional affiliate disclosure (only when `products[]` present), hero, Pin-it block ×2 (top + bottom, real Pinterest save URLs), Markdown body, product cards, FAQ accordion via `<details>` emitting FAQPage JSON-LD, Article JSON-LD, author box ("SmallNestDecor Editors", monogram avatar), 3 related articles
- `/category/[slug]` — all 8 categories (paint-colors, small-space-decor, organization-storage, renter-friendly, living-room, bedroom, kitchen, bathroom), each with a 160–250-word SEO intro; categories without articles yet show a friendly "on the way" state
- `/about` (includes the honest AI-imagery disclosure), `/contact` (form with local success state — no backend yet), `/privacy-policy`, `/terms`, `/affiliate-disclosure` (Amazon Associates named), `/404` with category links
- `sitemap-index.xml` + `sitemap-0.xml` (18 URLs), `robots.txt`, `ads.txt` (comment placeholder for networks)

**Content system** — Astro Content Collections (`src/content/articles/*.md`, Zod frontmatter schema exactly per spec: title, slug, category, description, date, updated, heroImage, pinImage, pinTitle, pinDescription, faq[], products[], draft). **Verified live:** a temporary Markdown file was added and appeared automatically in /blog, its category page, the home grid and the sitemap; then removed and the final build is clean.

**Sample articles (3, full length)**
1. *12 Paint Colors That Make a Small Living Room Look Bigger* — 1,304 body words + 5 FAQs
2. *Small Living Room Organization: 10 Systems That Give You Space Back* — 1,134 body words + 4 FAQs
3. *No-Drill Decor: 10 Renter-Friendly Ways…* — 1,104 body words + 5 FAQs + **4 products with affiliate disclosure** (Amazon search URLs as placeholder links)

**Config & monetization readiness** — `src/site.config.ts`: `ads.enabled=false` (verified: no ad slots/scripts render), env-gated GA4 / Google Search Console / Pinterest verification (verified: all three appear in the built HTML when `PUBLIC_GA_ID`, `PUBLIC_GSC_VERIFICATION`, `PUBLIC_PINTEREST_VERIFICATION` are set — `NEXT_PUBLIC_*` names also honoured — and vanish when unset).

**Design** — spec palette (cream #FAF7F2, beige #F1EAE0, terracotta #C4674A, charcoal #2B2622), Fraunces + Inter **self-hosted** woff2 (`public/fonts/`), cards lift + shadow on hover, sticky slim header with CSS-only mobile menu (`<details>`), responsive grids, ≥44px tap targets, no fixed-width elements → no horizontal scroll at 390px.

**Images** — all local, no hotlinks: 25 warm-toned labeled placeholder JPGs generated with a Python/PIL script (`public/images/` — hero, 8 category tiles, per-article hero/pin/in-body, 4 product shots) + a logo SVG. Real AI images replace them file-for-file later (same paths).

## Verified during build
- `npm run build` clean, 19 pages: home, blog index, 3 articles, 8 categories, about, contact, privacy, terms, disclosure, 404
- Every article page contains exactly 3 JSON-LD blocks: Article, BreadcrumbList, FAQPage (with all Q&As)
- Disclosure renders only on the products article; Pin-it blocks render twice per article; 0 ad markup anywhere
- Whole `dist/` contains **0 JavaScript files**
- Env-var gating tested both ways (see above)

## Run & deploy
- Local: `npm install` → `npm run dev` (preview: `npm run preview`)
- **Cloudflare Pages settings:** Framework preset **Astro** · Build command `npm run build` · Build output directory `dist` · Node version 20+ (set `NODE_VERSION=22` env if prompted) · Optional env vars: `PUBLIC_GA_ID`, `PUBLIC_GSC_VERIFICATION`, `PUBLIC_PINTEREST_VERIFICATION`
- Publishing workflow after repo link: add a `.md` file to `src/content/articles/`, push → auto-deploy; it appears in listings + sitemap automatically (drafts: `draft: true` excludes from build)

## Left incomplete / notes for the parent
- **Placeholder images** are intentionally labeled "placeholder" — swap with real AI images (same filenames/paths) before launch.
- **Product links** point to Amazon search pages as placeholders — replace with real affiliate-tagged product URLs when the products are chosen.
- **Contact form** has no backend (shows a local success message; code comment marks where to wire a Cloudflare Pages Function or form endpoint).
- **Fraunces/Inter** are variable-font files shared across weights (one file per family declared with a weight range).
- Newsletter box in the footer is rendered disabled ("coming soon") per v1 scope.
- Lighthouse was not run in this environment (no browser here); the zero-JS output, self-hosted fonts and static HTML are built to the 90+ mobile target, but a real Lighthouse pass after deploy is recommended.
- Not pushed to GitHub — local build only, as instructed.

## Font change (2026-10-20, post-build)

- **Why:** the GitHub connector used to push this repo transfers UTF-8 text only — binary font files could not be pushed. Fonts now come from npm so no font binaries live in the repo.
- **Removed:** `public/fonts/` entirely (fraunces-500/600/700 + inter-400/500/600 woff2 and `fonts.css`), and the `<link rel="stylesheet" href="/fonts/fonts.css">` tag in `src/layouts/BaseLayout.astro`.
- **Added:** dependencies `@fontsource-variable/fraunces` and `@fontsource-variable/inter` (v5.3.0), imported at the top of `BaseLayout.astro` (`import '@fontsource-variable/fraunces';` / `import '@fontsource-variable/inter';`). CSS stacks in `src/styles/global.css` now lead with `"Fraunces Variable"` / `"Inter Variable"` (old names kept as fallbacks) — design visually unchanged.
- **Result:** `npm run build` clean, still **19 pages**, dist 1.6 MB. Built CSS declares the Fontsource variable families and the woff2 assets are bundled from `node_modules` into `dist/_astro/` at build time; zero references to `/fonts/` remain in source or output. `public/` now holds only the JPG placeholder images (untouched), `logo.svg`, `robots.txt` and `ads.txt` — **no binary font files in the repo**.

## Image swap: JPG → SVG placeholders (2026-10-20, post-build)

- **Why:** same constraint as the font change — the GitHub push channel transfers UTF-8 text only, so binary JPG placeholders could not be pushed. All placeholders are now text-based SVG.
- **What changed:** all 25 placeholder JPGs under `public/images/` (home hero, per-article hero/pin/in-body shots, 8 category tiles, 4 product shots) were replaced by SVG placeholders at the same logical paths with the same base filenames and identical pixel dimensions as the JPGs they replace (heroes 1200×800, pins 800×1200 / 2:3, in-body 1000×750, category tiles 900×675, products 700×700, home hero 1400×1000). Each SVG uses the site palette (beige #F1EAE0 background, cream #FAF7F2 panel, terracotta #C4674A frame, charcoal #2B2622 text) with a centered serif label naming its slot (e.g. "HERO — Paint Colors", "PIN — Organization", "PRODUCT — Tension Rod") plus a "SMALLNESTDECOR · PLACEHOLDER IMAGE" caption, so placeholders are unmistakable.
- **References updated:** article frontmatter (`heroImage`/`pinImage`, in-body Markdown images, product `image:` fields), `src/data/categories.ts`, `src/pages/index.astro` and the `ogImage` default in `src/layouts/BaseLayout.astro` — all now point to `.svg`. Component width/height attributes and aspect handling are unchanged. The 25 `.jpg` files were deleted.
- **Verified:** `npm run build` clean, still **19 pages**; zero `.jpg` references remain anywhere in `src/` or in the built `dist/` HTML; `public/` now contains only text files (26 SVGs including `logo.svg`, plus `robots.txt` and `ads.txt`) — the repo is 100% text and push-safe.
- **Next step (unchanged):** real AI photographs will replace these placeholders slot-for-slot via a separate image host later — keep the same descriptive base filenames when swapping.
