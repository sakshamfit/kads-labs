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

| Section | Component | Notes |
|---|---|---|
| Hero | `app/page.tsx` | KADS LABS logo (from `public/brand/`) + lead-in for the pinned section. |
| **How we work** | `components/ui/timeline.tsx` | GSAP ScrollTrigger + SplitText timeline. The section pins, the track slides sideways, and each of the 7 steps (Discover → Evolve) draws its stem and reveals its copy as it reaches centre. Respects `prefers-reduced-motion`. |
| **The owners** | `components/ui/profile-card-testimonial-carousel.tsx` | framer-motion profile-card carousel showing the founder and co-founders (photos in `public/team/`). Arrow buttons + dots navigate; social icons render only when a URL is provided. |
| Footer | `app/page.tsx` | Brand motto + copyright. |

Both components were integrated from ready-made React components and adapted
for content via props (`topItems` / `bottomItems` for the timeline,
`testimonials` for the carousel) — edit the data at the top of
`app/page.tsx` to change the copy. No other files need touching.

## Project structure (shadcn conventions)

```
app/                  routes (App Router): layout.tsx, page.tsx, globals.css
components/ui/        reusable UI primitives (timeline.tsx, profile-card-…)
lib/utils.ts          the shadcn `cn()` helper (clsx + tailwind-merge)
public/               brand/ (logo), team/ (founder & co-founders)
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
