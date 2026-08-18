# Justyna Chaberek — Portfolio

Portfolio/CV website for Justyna Chaberek, a Polish performer and vocalist working between theatre, live art and video.

Live site: connect this repo to Vercel (static site, no build step required).

## Structure

- `index.html` — page markup
- `styles.css` — styles, layout, animations
- `script.js` — work-credit list rendering, scroll progress bar, scroll-reveal, hero parallax
- `justyna-chaberek-cv.pdf` — downloadable CV, linked from the nav and work/contact sections
- `design/` — the original Claude Design handoff bundle (chat transcripts and `.dc.html` prototypes) this site was built from, kept for reference

## Known placeholders

Carried over from the design phase and not yet resolved:

- The hero and about-section photos are hotlinked from Instagram CDN URLs, which are signed and **will expire**. Replace `src` in `index.html` with locally hosted images when available.
- All 21 work-credit rows link to `#work` — real event/production URLs haven't been provided yet.
- The Instagram/YouTube links in the footer point to `#top` — real handles haven't been provided yet.

## Local development

No build step — open `index.html` directly, or serve the directory with any static file server, e.g.:

```
npx serve .
```
