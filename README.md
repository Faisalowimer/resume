# resume.owimer.co

Personal resume site for Faisal Owimer — live at [resume.owimer.co](https://resume.owimer.co).

Built with Next.js and deployed on Vercel. Serves both a rendered web view and a raw JSON endpoint for integrations.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + ShadCN UI
- **Fonts:** Geist (Vercel)
- **Deploy:** Vercel
- **PDF:** Print CSS + jsPDF

## Structure

```
src/
├── app/              # Next.js app router
│   └── api/resume/   # GET /api/resume → raw JSON
├── components/
│   └── resume/       # Section components (experience, education, etc.)
├── data/
│   └── resume.ts     # Single source of truth for all resume content
├── styles/
│   └── print.css     # Print/PDF layout overrides
└── types/
    └── resume.ts     # TypeScript interfaces
```

## Content

All resume content lives in `src/data/resume.ts`. Edit that file to update anything on the site — no other files need to change for content updates.

## API

```
GET https://resume.owimer.co/api/resume
```

Returns the full resume as JSON.

## Development

```bash
bun dev       # start dev server at localhost:3000
bun build     # production build + type check
bun lint      # eslint
```

## Related

- Personal site: [owimer.co](https://owimer.co)
- GitHub: [github.com/Faisalowimer](https://github.com/Faisalowimer)
