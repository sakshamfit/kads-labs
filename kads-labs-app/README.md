# KADS LABS — website (Next.js)

The KADS LABS site: a dark, motion-led one-pager built with **Next.js (App
Router) + TypeScript + Tailwind CSS v4** in a **shadcn/ui project structure**.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export -> out/  (serve anywhere: npx serve out)
npm run lint
```

## What's on the page

| Section | Source of the content | Notes |
|---|---|---|
| Hero | `lib/site-content.ts` | "We don't build ordinary websites." + CTAs, KADS LABS logo. |
| The Idea | `lib/site-content.ts` | The template's idea statement + disciplines. |
| What We Create | `lib/site-content.ts` | 8 services with tags (Website Design → Digital Strategy). |
| **How we work** | `lib/site-content.ts` → `components/ui/timeline.tsx` | GSAP ScrollTrigger + SplitText timeline. The section pins, the track slides sideways, and each of the 9 steps (Understand → Evolve, the template's Our Approach) draws its stem and reveals its copy as it reaches centre. Respects `prefers-reduced-motion`. |
| The Work | `lib/work-data.ts` + `public/work/` | 26 projects (12 client, 14 concepts) from the template's portfolio, each with a still. |
| What We Believe + Our Numbers | `lib/site-content.ts` | Believe statements + 4 stats. |
| A Different Kind of Agency | `lib/site-content.ts` | The "no unnecessary layers" block. |
| FAQ | `lib/site-content.ts` | 7 questions, native `<details>` accordion. |
| **The owners** | `app/page.tsx` → `components/ui/profile-card-testimonial-carousel.tsx` | framer-motion profile-card carousel showing the founder and co-founders (photos in `public/team/`). Social icons render only when a URL is provided. |
| Client Stories | `lib/site-content.ts` | Sample quotes carried over from the template (tagged "Sample stories") — replace with real client feedback before launch. |
| Final CTA + footer | `lib/site-content.ts` | "Have an idea?" + services + motto. |

All copy lives in **`lib/site-content.ts`** (rebranded from the original site
template's `content.py`) and the portfolio in **`lib/work-data.ts`** (generated
from the template's `portfolio.json`) — edit those two files to change any text
on the site. The "Start a Project" button mails `site.footer.email`
(`hello@example.com` placeholder — set the real address there).

## Project structure (shadcn conventions)

```
app/                  routes (App Router): layout.tsx, page.tsx, globals.css
components/ui/        reusable UI primitives (timeline.tsx, profile-card-…)
lib/utils.ts          the shadcn `cn()` helper (clsx + tailwind-merge)
lib/site-content.ts   ALL site copy (rebranded from the template's content.py)
lib/work-data.ts      portfolio data (generated from the template's portfolio.json)
public/               brand/ (logo), team/ (founder & co-founders), work/ (project stills)
app/fonts/            self-hosted Inter Tight (SIL OFL) — zero font CDN calls
```

Why `/components/ui`: the shadcn CLI (`npx shadcn@latest add <component>`)
installs every component into `components/ui` with the `@/lib/utils` import
alias, so dropping these two files there keeps the project compatible with
the rest of the shadcn ecosystem. The structure (plus `cn()`, the CSS design
tokens in `globals.css` and the `@/*` alias) was set up manually because the
shadcn registry is not reachable from this environment — run
`npx shadcn@latest init` in your own terminal if you want the full CLI flow;
it will pick this structure up.

## Dependencies

| Package | Why | Version note |
|---|---|---|
| `gsap` | Timeline: ScrollTrigger (pin + scrub) + SplitText (line-mask reveals) | 3.15 — all plugins free since 3.13 |
| `framer-motion` | Carousel enter/exit transitions | |
| `lucide-react` | Icons (chevrons, social glyphs) | **pinned to 0.544.0** — v1 removed brand icons (`Github`, `Twitter`, `Youtube`, `Linkedin`) that the carousel imports |
| `clsx` + `tailwind-merge` | the `cn()` helper | |

## Design tokens

Dark-first theme in `app/globals.css` (`--background` `#0a0a0a`,
`--foreground` `#fafafa`, `--muted-foreground`, `--card`, `--border`) exposed
to Tailwind via `@theme inline`. Class-based dark mode (`<html class="dark">`)
is on permanently — the studio site is black.

## Deploying

`next.config.ts` uses `output: "export"`, so `npm run build` produces a fully
static `out/` folder.

A ready-made GitHub Actions workflow lives at
[`deploy/pages.yml`](deploy/pages.yml) (this repo's automation token cannot
create files under `.github/workflows/`, so it is stored here). To enable
GitHub Pages deploys:

1. `cp kads-labs-app/deploy/pages.yml .github/workflows/pages.yml`
2. Commit & push to `main` from your account
3. Repo **Settings → Pages → Source: GitHub Actions**

If the site is served from a project path such as
`https://<user>.github.io/kads-labs/`, add `basePath: "/kads-labs"` to
`next.config.ts` so asset URLs resolve.
