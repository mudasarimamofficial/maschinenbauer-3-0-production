# Maschinenbauer 3.0 Production

CoachFlow-derived production app for noll.media's Maschinenbauer 3.0 landing system.

## Stack

- Next.js App Router
- React
- Supabase Auth, database, and Storage
- Vercel deployment

## Local Setup

1. Copy `.env.example` to `.env.local`.
2. Fill in the Supabase keys and booking URL.
3. Run:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Required Supabase Setup

This app currently shares the Shaditz Supabase project, so Maschinenbauer data must stay isolated in prefixed tables:

- `maschinenbauer_settings`
- `maschinenbauer_secret_settings`
- `maschinenbauer_homepage_content`
- `maschinenbauer_homepage_content_drafts`
- `maschinenbauer_homepage_content_versions`
- `maschinenbauer_site_pages`
- `maschinenbauer_site_page_versions`
- `maschinenbauer_leads`

Run the SQL migration in `supabase/migrations/001_maschinenbauer_isolated_schema.sql` before validating admin database workflows.

## Admin

Visit `/admin` and sign in with the Supabase Auth admin user. The landing/settings panel manages:

- Booking URL and CTA text
- noll.media contact/legal details
- Central Maschinenbauer config used by public routes

## Production Checks

Before deployment or handoff:

```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

Public routes:

- `/`
- `/danke`
- `/impressum`
- `/datenschutz`

Admin routes:

- `/admin`
- `/admin/settings`
- `/admin/pages`
- `/admin/media`

