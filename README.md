# Mining Consultants Website

Next.js (App Router, TypeScript) site for Mining Consultants.

## Structure

- `app/page.tsx` — the single page (all sections)
- `app/globals.css` — site styles and theme tokens
- `app/actions.ts` — server action that saves the contact form to PocketBase
- `components/ContactForm.tsx` — contact form (client component)
- `lib/pocketbase.ts` — server-side PocketBase client

## Development

```sh
cp .env.example .env.local   # then set POCKETBASE_URL
npm install
npm run dev
```

## Environment

| Variable         | Where            | Purpose                                         |
| ---------------- | ---------------- | ----------------------------------------------- |
| `POCKETBASE_URL` | Vercel + local   | PocketBase instance. Server-only, not `NEXT_PUBLIC_`. |

The contact form writes to the `consult_form` collection (fields: `name`, `email`, `company`, `message`).
The collection's **Create rule** must allow anonymous creates, since the server action does not authenticate.

## Deploy

Import the repo in Vercel, add `POCKETBASE_URL` under Project Settings → Environment Variables, deploy.
