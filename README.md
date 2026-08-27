# INVITA MVP v3

SaaS starter for interactive digital invitations.

## Stack
- Next.js App Router + TypeScript
- Supabase Auth + Postgres + Storage
- @supabase/ssr with cookie-based SSR auth

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Supabase
1. Create a Supabase project.
2. Put the Project URL and Publishable Key in `.env.local`.
3. Run `supabase/schema.sql` in the SQL editor.
4. Enable Email/Password Auth in Supabase Authentication.

The app supports demo mode without Supabase keys, while login/dashboard/create become real once the env vars and schema are configured.
