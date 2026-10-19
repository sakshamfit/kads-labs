# KADS LABS

Repository for the **KADS LABS** studio site.

## Layout

| Path | What it is |
|---|---|
| **`kads-labs-app/`** | **The website** — Next.js + TypeScript + Tailwind CSS v4, shadcn structure. Home page has the pinned GSAP "How we work" timeline, the owners carousel (founder + co-founders), a live interactive canvas background (KineticGrid: red glow follows the cursor, click ripples), and a Start-a-Project brief form that opens WhatsApp with the brief pre-written (+91 89482 68643). See its [README](kads-labs-app/README.md). |
| `kads-labs-website/` | The original static-site template this project started from (Python build, vanilla CSS/JS), kept as reference. Its heavy portfolio media was pruned to keep the repo lean — the full template lives at [gireeshkumarreddy/Teseract-creative-studious](https://github.com/gireeshkumarreddy/Teseract-creative-studious). |
| `public/brand`, `public/team` (in the app) | Brand assets: `kads-labs-logo.jpg`, and photos of Ayush Jaiswal (founder), Shivam Gupta and Sudhir (co-founders). |
| `_ref/`, `_tools/`, `SITE-ISSUES.md` | Reference specs and QA tooling inherited from the template. |

## Quick start

```sh
cd kads-labs-app
npm install
npm run dev        # http://localhost:3000
npm run build      # static export -> kads-labs-app/out/
```

Deploying: the site builds to a static `kads-labs-app/out/` (`npm run build`).
For GitHub Pages, copy `kads-labs-app/deploy/pages.yml` to
`.github/workflows/pages.yml`, push to `main` from your account, and enable
**Settings → Pages → Source: GitHub Actions**.
