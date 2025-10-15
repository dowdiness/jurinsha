# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page site for a picture book about Ayakasahoko (綾傘鉾), a traditional festival float from Kyoto. The site introduces the story, characters, and publication details of the picture book.

**Tech Stack:**
- [Minista](https://minista.qranoko.jp/) - Static site generator for React
- React 18 with TypeScript
- Tailwind CSS v4 (using new @import syntax and @theme configuration)
- Cloudflare Pages for hosting (via Wrangler)

## Development Commands

### Local Development
```sh
npm run dev
```
Runs both Minista dev server and Tailwind in watch mode concurrently.

### Build
```sh
npm run build
```
Compiles Tailwind CSS first (minified), then builds the static site with Minista. Output directory: `./dist/`

### Preview Built Site
```sh
npm run preview
```
Serves the built site locally from the `./dist/` directory.

### Deploy to Cloudflare
```sh
npm run deploy
```
Deploys the built site to Cloudflare Pages using Wrangler.

### Individual Commands
- `npm run minista:dev` - Run only Minista dev server
- `npm run minista:build` - Build only with Minista
- `npm run tailwind:dev` - Watch and compile Tailwind CSS
- `npm run tailwind:build` - Build and minify Tailwind CSS

## Project Architecture

### Directory Structure
```
src/
  ├── pages/           # Minista pages (index.tsx, 404.tsx)
  ├── components/      # React components organized by feature
  │   ├── hero/        # Hero section component
  │   ├── story/       # Story/synopsis section
  │   ├── character/   # Character introduction section
  │   └── wave-divider/ # Decorative wave divider SVG component
  ├── assets/
  │   ├── images/      # Image assets
  │   ├── input.css    # Tailwind CSS source with custom fonts and theme
  │   ├── output.css   # Compiled Tailwind CSS (generated)
  │   └── paperOverlay.ts # Script for paper texture overlay effect
  └── global.tsx       # Global layout wrapper for all pages
public/
  ├── fonts/           # Self-hosted Japanese fonts (Shippori Mincho, Shippori Antique, M PLUS Rounded 1c)
  └── robots.txt       # Currently blocking all crawlers (remove before launch)
```

### Minista Framework
- **Pages:** Files in `src/pages/` become routes (e.g., `index.tsx` → `/`)
- **Global Layout:** `src/global.tsx` wraps all pages and includes the `<Head>` component
- **Metadata:** Export `metadata` object from page files to set page title and meta tags
- **Static Assets:** Reference images via `/src/assets/images/...` paths; Minista handles bundling
- **Image Component:** Use `<Image>` from "minista" for optimized images with `aspect`, `width`, `height` props

### Styling Approach
- **Tailwind CSS v4:** Uses new `@import "tailwindcss"` and `@theme` syntax in `input.css`
- **Custom Theme:** Colors (beni, beige, whitesmoke) and fonts defined in `@theme` block
- **Japanese Typography:** Three custom fonts loaded via @font-face for Japanese text
- **Paper Texture:** Custom `.paper-overlay` class with SVG filter applied globally for vintage aesthetic
- **Vertical Text:** `.vertical-rl` utility class for vertical Japanese text (writing-mode: vertical-rl)

### Component Organization
Components are feature-based:
- Each major section (Hero, Story, Character) is a separate component directory
- Components export their main function as named exports
- Data files (e.g., `character.ts`, `synopsis.ts`) store content separately from presentation

## Important Notes for Development

### Before Site Launch
Remove search engine blocking mechanisms:
1. Delete or modify `/public/robots.txt` (currently blocks all crawlers)
2. Remove `<meta name="robots" content="noindex, nofollow">` from `src/global.tsx:15`

### Styling Conventions
- Use semantic color names from custom theme: `bg-beni`, `bg-beige`, `text-whitesmoke`
- Apply responsive spacing with utility class scales: `mx-6 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64`
- Use custom font families: `font-antique`, `font-rounded`, `font-serif`
- Viewport units: Prefer `svh` (small viewport height) for mobile-friendly layouts

### Design Reference
- [Atlassian Design System](https://atlassian.design/) - Reference for design patterns and UI components
- [SANKOU!](https://sankoudesign.com/) - 日本語のサイトでのWebデザインの参考になりサイトです
- [てらおかなつみ](https://teraokanatsumi.com/) - イラストが主役のサイトのデザインの参考にして下さい
- [poporpop](https://poporpop.com/) - 温かみのあるポップなイラストとデザインを使ったサイトです

### Content Guidelines
The site content should engage readers without spoiling the story. Avoid summarizing the entire narrative; instead, pose questions that encourage reading the picture book (e.g., "Will Ayakasahoko be revived?" rather than stating it was revived).

### TypeScript Configuration
- Target: esnext with React JSX transform
- Module resolution: Node
- Minista client types included via `types: ["minista/client"]`

### Deployment
- Wrangler configuration: `wrangler.json`
- Deploys from `./dist/` directory with 404 page handling
- Compatibility date: 2025-08-07
