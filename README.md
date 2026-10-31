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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment variables

All of these are optional. Leave them unset and the related tag is omitted. None of them turn on a cookie banner.

| Variable | When set |
| --- | --- |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Adds the Google Search Console site-verification meta tag. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Loads GA4 (`G-…`) and sends `waitlist_submit` and `book_visit`. Uses cookies, so a consent banner belongs with it. |
| `NEXT_PUBLIC_VERCEL_ANALYTICS` | Set to `1` to load Vercel Analytics and the same two conversion events. |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Loads the Microsoft Clarity tag. The waitlist form and the booking calendar are masked in recordings. |

Set them in the Vercel project for production. They are read at build time.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
