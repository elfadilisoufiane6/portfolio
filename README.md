# Souf Web — Portfolio

Premium web agency portfolio (Morocco). Sites web haute conversion, e-commerce, design premium.

## Structure

```
portfolio/
└── frontend/           # Next.js 14 app (App Router, JS)
    ├── app/            # Pages: /, /projects, /tarifs
    ├── components/     # Hero, Services, Pricing, Reviews, Lightbox, etc.
    ├── lib/            # data.js (FR/EN/AR content) + i18n.js (UI strings)
    └── public/
        ├── assets/     # Static assets (slider images, etc.)
        └── projects/   # Project demo images — drop images in each subfolder
            ├── Azure Palace Hotel/
            ├── Rebelle.ma/
            ├── Granola Ya Salam/
            └── demo-fitness/
```

## Features

- **3 languages** : Français · English · العربية (avec RTL)
- **Dark / Light mode** : toggle dans la navbar, persistance localStorage
- **3 pages** : Home (Hero · Services · Projets · Tarifs · Avis) · Projets · Tarifs détaillés
- **Lightbox** : clic sur image projet ouvre la vue plein écran (← → ESC)
- **Image folders auto-load** : drop images dans `public/projects/<slug>/` et elles apparaissent automatiquement

## Run locally

```bash
cd frontend
npm install
npm run dev          # → http://localhost:3000
```

## Build

```bash
cd frontend
npm run build
npm start
```

## Deploy

Recommandé : Vercel. Pointe sur `frontend/` comme root directory.

## Theme

- Couleur primaire : `#7DFF81` (dark) / `#16a34a` (light)
- Polices : Inter (latin) + Cairo (arabe)
