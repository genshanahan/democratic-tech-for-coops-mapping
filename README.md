# Democratic Tech for Coops – Interactive Mapping

Interactive three-column map linking democratic governance **models**, **practices**, and **tools** for the [Democratic Tech for Coops](https://democratic-tech.co.uk/) research website.

**[View the live map](https://genshanahan.github.io/democratic-tech-for-coops-mapping/)**

## Local development

```bash
pnpm install
pnpm dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Publish to GitHub Pages

This project deploys from the `docs/` folder on `main` (branch-based GitHub Pages, no Actions).

```bash
pnpm install
pnpm build:pages
git add docs/
git commit -m "Build for GitHub Pages"
git push origin main
```

After pushing, GitHub Pages serves the site at:

`https://genshanahan.github.io/democratic-tech-for-coops-mapping/`

The first deploy may take a minute or two to become available.

## Update workflow

1. Edit source in `src/` (main component: `src/App.tsx`).
2. Run `pnpm build:pages` to regenerate `docs/`.
3. Commit and push both source changes and updated `docs/` artefacts.

## Embedding in democratic-tech.co.uk

The map is designed to run inside a WordPress iframe on [democratic-tech.co.uk](https://democratic-tech.co.uk/). Double-clicking an item sends a `postMessage` to the parent window with a navigation path (`/models/...`, `/practices/...`, `/tools/...`) so the host site can route to the matching page.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Licence

This project is part of the Democratic Tech for Coops research initiative led by Dr Genevieve Shanahan at Cardiff Business School.
