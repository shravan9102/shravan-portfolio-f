# Shravan Kumar – Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React. Node 18.18+.

## Local setup
```bash
npm install
cp .env.example .env.local     # already included as .env.local; edit if needed
npm run dev                    # http://localhost:3000
npm run check                  # typecheck + lint + production build
npm run check:links            # checks every URL in lib/data.ts (needs internet)
```
`.env.local` contents:
```
NEXT_PUBLIC_FORMSPREE_ID=xaeolkvw
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
Restart `npm run dev` after changing env values (they are read at build time).

## Content (`lib/data.ts`)
- **Project images:** `public/projects/*.png` (ats, loanify, gym-coach, neuralart, snapclass, flappy-bird). They are **illustrations I generated, not screenshots**, and cards label them "Illustration". Replace a file with a real 16:9 screenshot of the same name and add `isScreenshot: true` to that project to remove the label. `python3 scripts/make-project-images.py` regenerates the illustrations.
- **Buttons:** SnapClass has *Live Demo* (Streamlit app) and *Official Website* (`https://sc-landing-page-nu-eight.vercel.app/`) as separate buttons. Add `github: "https://github.com/shravan9102/<repo>"` to a project to show its GitHub button; none are shown until you do.
- **Logos / certificates:** optional `logo`, `certificate`, `url` fields (see comments in the file).

## Contact form (Formspree)
Posts to `https://formspree.io/f/xaeolkvw` with loading, success and error states, a spam honeypot and double-submit protection. The ID is read from `NEXT_PUBLIC_FORMSPREE_ID` and falls back to `xaeolkvw`. Your email stays visible beside the form. The first submission may require confirming your email in Formspree.

## Deploy on Vercel
1. Push the project to GitHub (`.env.local` is git-ignored).
2. vercel.com → Add New → Project → import the repo.
3. Settings → Environment Variables: add `NEXT_PUBLIC_FORMSPREE_ID` = `xaeolkvw` and `NEXT_PUBLIC_SITE_URL` = your Vercel URL, for Production, Preview and Development.
4. Deployments → ⋯ on the latest deployment → **Redeploy** (env changes only apply to new builds).
5. Open the site, send a test message, and run `npm run check:links`.

## Notes
`next lint` is deprecated from Next 15.5 but works. Lucide is pinned to 0.468 because later versions removed brand icons.
