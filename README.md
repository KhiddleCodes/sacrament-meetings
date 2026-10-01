This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Bishopric Authentication

The `/meetings` area requires the bishopric credentials. Copy `.env.example` to `.env.local`, then set these server-only variables:

- `AUTH_SECRET`: generate with `npx auth secret`.
- `BISHOPRIC_EMAIL`: the sign-in email.
- `BISHOPRIC_PASSWORD_HASH`: a bcrypt hash of the password. Generate one with `node -e "require('bcryptjs').hash('choose-a-strong-password', 12).then(console.log)"`, then paste the output here. Use your own password in place of the example.

Never commit `.env.local`. Add the same three variables to the Vercel project's environment settings before deploying. The `/meetings` pages redirect signed-out visitors to `/login`, and meeting create, update, and delete actions verify the session on the server.

## Metadata

The root layout defines the default title, description, and Open Graph preview image. The meeting schedule and sign-in pages define their own titles and descriptions.
Set `NEXT_PUBLIC_SITE_URL` to the canonical site origin when using a custom domain; Vercel's deployment URL and `http://localhost:3000` are used otherwise.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
