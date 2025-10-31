# Portfolio Website (Next.js + Tailwind + Legacy CSS)

A single-page portfolio site for Muhammad Iqbal Maulana, rebuilt in Next.js while preserving the look of the original HTML/CSS site.

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- React 19
- Tailwind CSS v4 (utility baseline)
- Legacy CSS imported for exact styling (`app/legacy.css`)

## Features
- Single-page layout with sections: Home, About, Education, Projects, Contact
- Sticky navbar with anchor links and smooth scrolling
- Responsive timeline for Education with alternating descriptions
- SEO metadata (Open Graph + Twitter)

## Getting Started
1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
# open http://localhost:3000
```

3) Build for production
```bash
npm run build
npm start
```

## Project Structure
```
app/
  layout.tsx        # HTML shell, fonts, Font Awesome, global styles
  page.tsx          # Single-page composition (sections + footer)
  globals.css       # Tailwind v4 base + small globals
  legacy.css        # Original stylesheet (ported from style.css)
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Education.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
public/
  <images, logos, thumbnails>
```

## Content Editing
- Hero title: `components/Hero.tsx`
- About copy and skills: `components/About.tsx`
- Education entries and descriptions: `components/Education.tsx`
- Projects list and links: `components/Projects.tsx`
- Contact info and form: `components/Contact.tsx`

Images live in `public/`. Reference them with absolute paths like `/profile-picture.jpeg`.

## SEO
Edit `app/layout.tsx` metadata: title, description, `openGraph.images`, and `metadataBase` (replace with your domain when deployed).

## Deployment (Vercel)
- Push to GitHub and import the repo in Vercel
- Framework preset: Next.js
- Build command: `npm run build`
- Output: `.vercel/output` (handled automatically by Next)

## Notes
- Tailwind utilities are available but legacy CSS governs the design for parity with the original site.
- Font Awesome 5.15.4 is loaded via CDN in `layout.tsx` for icons used in Skills/Contact.
