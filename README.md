# Portfolio Website

Muhammad Amir's portfolio site. Built with Next.js 13, React 18, and Tailwind CSS.

Pages:

- `/` — home
- `/about` — profile, education, and work experience
- `/contact` — contact links

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (Node.js 22 works too)
- npm, which comes with Node.js

No `.env` file is required. The site is static and does not need environment variables to run.

## Run locally

```bash
git clone https://github.com/gabutersproject/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If port 3000 is already in use:

```bash
npm run dev -- --port 3001
```

Stop the server with `Ctrl+C`.

## Other commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm run start` | Serve the production build at [http://localhost:3000](http://localhost:3000) |

Run `npm run build` before `npm run start`.

## Bun

The git hooks in `lefthook.yml` call `bunx`. Bun is optional for running the site. If both Node.js and Bun are installed, the equivalent commands are:

```bash
bun install
bun run dev
```
