# Resume Repo — Claude Code Instructions

## What This Is

Faisal's personal resume, live at resume.owimer.co and linked from owimer.co.
Public repo — no secrets, no debug logging, no sensitive data in commits.

## Single Source of Truth

**All resume content lives in `src/data/resume.ts`.** This is the only file that needs to change for content updates. The `/api/resume` endpoint exposes it as raw JSON.

## Stack

Next.js 15 App Router, TypeScript strict, Tailwind CSS, ShadCN UI. Deployed on Vercel.

## Data Structure

```
src/data/resume.ts      ← edit this for all content changes
src/types/resume.ts     ← TypeScript interfaces (ResumeData, ExperienceType, etc.)
src/components/resume/  ← one component per section
src/styles/print.css    ← print/PDF layout overrides
```

Current active sections: `contact`, `experience`, `education`
Commented out (available to re-enable): `tech.tsx`, `addtionalInfo.tsx`

## Adding a New Section

1. Add the interface to `src/types/resume.ts`
2. Add the data array to `ResumeData` in `src/types/resume.ts` and populate in `src/data/resume.ts`
3. Create `src/components/resume/<section>.tsx`
4. Import and render in `src/components/resume/resumePage.tsx`
5. Verify print layout still fits one page

## Content Rules

- Bullet format: action verb + metric/outcome (ATS-optimized)
- Max ~120 characters per bullet for print formatting
- One page constraint — be disciplined about what gets added
- `jobSummary` is a one-liner shown above bullets — keep it punchy

## Available Skills

- `/update-resume` — takes raw experience notes, generates ATS bullets, updates `resume.ts`  (OWIMER-29)
- `/jd-fit` — paste a JD, returns fit score + keyword gaps + tailored bullet suggestions (OWIMER-30)

## Git Convention

- Base branch: `develop` (never branch from `main` directly)
- Branch format: `faisal/owimer-<N>-short-description`
- Commit format: `feat(resume): description` (conventional commits)
- Reference Linear ID in commit footer: `Refs: OWIMER-N`
- PR: `develop` → `main`

## Linear Project

Team: Owimer | Project: Resume — resume.owimer.co
Initiative: Personal Branding & Career
