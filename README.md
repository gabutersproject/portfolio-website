# Portfolio Website

Situs portfolio Muhammad Amir. Dibangun dengan Next.js 13, React 18, dan Tailwind CSS.

Halaman yang tersedia:

- `/` — beranda
- `/about` — profil, pendidikan, dan pengalaman kerja
- `/contact` — tautan kontak

## Prasyarat

- [Node.js](https://nodejs.org/) 18 atau lebih baru (Node.js 22 juga bisa)
- npm, yang sudah ikut terpasang bersama Node.js

Tidak perlu file `.env`. Situs ini statis dan tidak membutuhkan variabel lingkungan untuk dijalankan.

## Menjalankan secara lokal

```bash
git clone https://github.com/gabutersproject/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Jika port 3000 sudah dipakai:

```bash
npm run dev -- --port 3001
```

Hentikan server dengan `Ctrl+C`.

## Perintah lain

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server pengembangan dengan hot reload |
| `npm run lint` | Pemeriksaan ESLint |
| `npm run build` | Build produksi |
| `npm run start` | Menjalankan hasil build di [http://localhost:3000](http://localhost:3000) |

`npm run start` hanya dipakai setelah `npm run build`.

## Bun

Hook git di `lefthook.yml` memanggil `bunx`. Itu tidak wajib untuk menjalankan situs. Jika Node dan Bun sama-sama terpasang, perintah yang setara:

```bash
bun install
bun run dev
```
