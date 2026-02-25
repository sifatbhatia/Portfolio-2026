# Project Takeover Guide: portfolio-2026

This guide is designed to help you quickly understand the architecture and tech stack of your portfolio project so you can continue development independently.

## 🛠 Tech Stack Overview

- **Framework:** Next.js v16 (using React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (configured via `@tailwindcss/postcss` and LightningCSS)
- **Animations & Scrolling:** 
  - Framer Motion (for standard UI animations and layout transitions)
  - GSAP (advanced animations/timelines)
  - Lenis (smooth scrolling)
- **3D & WebGL:** 
  - Three.js
  - `@react-three/fiber` & `@react-three/drei` (React wrappers for Three.js)
  - `@paper-design/shaders-react` (Custom shader integrations)

## 🚀 Getting Started

**Running the Dev Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
The site will be available at `http://localhost:3000`.

**Building for Production**
```bash
npm run build
npm run start
```

## 📂 Project Structure

- `app/`: Contains the Next.js App Router structure.
  - `page.tsx`: The main landing page. This page heavily uses `'use client'` to track scroll positions (via `framer-motion`'s `useScroll` and `useTransform`) and mouse events (for the custom project preview trailing cursor).
- `components/`: Reusable UI elements.
  - `GlobalNavbar.tsx`: The main navigation bar.
  - `Footer.tsx`: Th site footer.
  - `WorkGallery.tsx`: The component rendering the "Selected Projects" section (asymmetrical grid).
- `public/`: Static assets (images, fonts, etc.).
  - `previews/`: Houses the preview screenshots for the projects (e.g., `/previews/j-worra/screenshot-1.webp`).
- `next.config.ts`: Next.js config file. It's currently set up to allow remote images from any hostname (`hostname: '**'`).

## 🎨 Key Areas to Edit

### 1. Updating Projects Data
The project details are currently hardcoded in `app/page.tsx` and `app/projects/[projectName]/page.tsx`. Look for the `projects` or `PROJECT_DATA` array/object.

To add or modify projects, update these objects. For project detail pages, you can now define how many screenshots are included by adding a `screenshotCount` property (defaults to 5 if not specified):
```typescript
  'j-worra': {
    title: 'J. Worra',
    // ...
    screenshotCount: 3, // Will look for screenshot-1.webp, screenshot-2.webp, and screenshot-3.webp
  },
```
Ensure your new images are placed in your `public/previews/{project-slug}/` folder.

### 2. Modifying Animations
- **Scroll Animations (Header scaling/moving):** Handled in `app/page.tsx` using `useTransform` and `scrollY`. Look for `titleScale` and `titleY`.
- **Custom Cursor Thumbnail (Trail Effect):** Handled in `app/page.tsx` using an `AnimatePresence` block and an event listener on `mousemove`. It reads `mousePosition.x` and `y` to offset the floating project preview window. 

### 3. Modifying the Gallery Layout
The grid/layout logic for the projects is inside `components/WorkGallery.tsx`. If you want to change the asymmetrical look, this is the component to refactor.

## 🧠 Things to Keep in Mind
- Because of `framer-motion` and `window` event listeners, components handling animations are strictly rendered on the Client (`'use client'`).
- The project is using the bleeding-edge Tailwind v4 (`@tailwindcss/postcss`). If writing new custom CSS, it generally goes in `app/globals.css` (or `index.css`), keeping the new v4 features in mind.
