# SOFTSWISS — Test Task

Responsive landing page built from a Figma layout. Light/dark theming, parallax
hero, a bento product grid and a Swiper-based slider.

## Tech stack

- HTML5, SCSS (BEM methodology)
- Vanilla JavaScript (ES6+, no UI frameworks)
- Webpack 5 build (dev server, PostCSS/Autoprefixer, Babel)
- Swiper for the slider
- ESLint, Stylelint, Prettier, EditorConfig

## Features

- **Theme switcher** — light/dark via a `data-theme` attribute and CSS variables;
  the choice persists in `localStorage` and is applied before first paint.
- **Burger menu** — single nav markup for every breakpoint; on tablet/mobile it
  slides out as an off-canvas panel.
- **Parallax** — two hero decorations move on scroll (rAF-throttled, respects
  `prefers-reduced-motion`).
- **Product grid** — responsive bento layout (`grid-template-areas`).
- **Slider** — Swiper with a progress bar, prev/next controls and a slide counter.
- Responsive across mobile, tablet and desktop; cross-browser via Autoprefixer.

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build to dist/
```

## Scripts

| Script             | Description                          |
| ------------------ | ------------------------------------ |
| `npm start`        | Dev server with HMR                  |
| `npm run build`    | Production build                     |
| `npm run lint`     | ESLint + Stylelint                   |
| `npm run format`   | Format with Prettier                 |

## Structure

```
src/
├── index.html
├── js/
│   ├── index.js
│   └── modules/        theme, menu, parallax, slider
└── styles/
    ├── main.scss
    ├── _fonts.scss     @font-face (Sofia Pro)
    ├── _base.scss      reset + theme variables
    ├── utils/          tokens + mixins
    └── blocks/         one partial per block
```

## Notes

Design tokens live in `src/styles/utils/_variables.scss` and the theme palette in
`src/styles/_base.scss`. Colors, font (Sofia Pro, bundled as woff2 in
`src/assets/fonts/`) and artwork (logos, hero decorations, channel icons and the seven
country flags in `src/assets/img/`) all come from the Figma file.
