# Fx Rates UI

Dashboard for user management for FX Rates. Data is fetched from edge functions [here](https://github.com/munanadi/fxrates-backend)

1. `/dahboard` or `/` page that shows the accounts overall health and transactions
2. `/transactions` that list transactions that can be filtered and serached through
3. `/rates` page that gives overview of different currencies
4. `/rates/[curr-code]` page that shows the chart of `curr-code` over `$` from our backend.

---

## Tech used

1. [Next.js 13](https://nextjs.org/)
2. TailwindCSS - [ShadcnUI](https://ui.shadcn.com/)
3. [Supabase](https://supabase.com/)

---

## Dev setup

1. `npm install`
2. Copy `.env.example` over to `.env`
3. Sign up with [supabase](https://supabase.com/) and get `URL` and `SERVICE_ANON_KEYS`
4. Make sure your project is setup with relevant tables (fx-rates) and other policies.
5. `npm run dev`
