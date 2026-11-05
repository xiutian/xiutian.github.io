# xiutian.github.io

Personal site of Xiutian (Theo) Zhao, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

Pushing to `master` builds the site and publishes it to the `gh-pages` branch (`.github/workflows/deploy.yml`).

## Where to edit things

| What | File |
|---|---|
| Name, email, links, nav | `src/data/site.ts` |
| Bio on the home page | `src/data/bio.md` |
| Publications | `src/data/papers.bib` (paste BibTeX here) |
| Venue badge, "selected" papers, notes like "Oral" | `src/data/publications.ts` (keyed by BibTeX key) |
| News | one Markdown file per item in `src/content/news/` with a `date:` |
| Gallery photos | put the image in `src/assets/gallery/`, then add a line to `src/data/gallery.ts` |
| Profile photo | `src/assets/prof_pic.jpg` |
| CV | `public/assets/pdf/xiutian_cv.pdf` |
| Colors, fonts | tokens at the top of `src/styles/global.css` |

Photos can be full-resolution originals; the build resizes and converts them to WebP.
