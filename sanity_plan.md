# Plan: Sanity CMS Integration for Blog & Case Studies

## Context

Blog and case study content is currently hardcoded in TypeScript arrays (`/lib/blog-posts.ts`, `/lib/case-studies.ts`). Adding or editing content requires a developer to modify code and redeploy. The goal is to give non-technical clients a visual editor (Sanity Studio) to publish new posts and case studies without touching code.

---

## Is it easy?

**Yes — Sanity + Next.js is one of the best-supported CMS integrations available.** Estimated effort: 1–2 days.

## Does it affect SEO?

**No negative impact** — pages remain statically generated via ISR (Incremental Static Regeneration). Sanity triggers an on-demand revalidation webhook when content is published, so new pages go live within seconds without a full redeploy. All existing metadata, JSON-LD schema, sitemap, and OG tags are fully preserved.

---

## Architecture

```
Sanity Studio (hosted at /studio in this Next.js app)
        ↓  publish
Sanity Content Lake (Sanity's hosted DB)
        ↓  GROQ query
Next.js (ISR pages — revalidates on webhook)
        ↓
lokam.ai/blog/[slug] & /case-studies/[slug]
```

Clients visit `lokam.ai/studio`, log in with their Sanity account, and publish. Pages update live.

---

## Implementation Steps

### 1. Create Sanity Project
```bash
npx sanity@latest init --env
```
- Creates a free Sanity project (generous free tier: 200k API requests/month)
- Generates `projectId` and `dataset` — add to `.env.local` and Vercel env vars

### 2. Install Packages
```bash
npm install next-sanity @sanity/image-url
```
- `next-sanity`: official Next.js integration (client, ISR helpers, embedded Studio)
- `@sanity/image-url`: image URL builder for Sanity assets

### 3. Define Schemas (match current data models exactly)

**`/sanity/schemaTypes/blogPost.ts`** — mirrors `BlogPost` type in `lib/blog-posts.ts`:
- `slug`, `category` (list), `title`, `excerpt`, `date`, `readTime`
- `intro`, `keyTakeaways` (array of strings), `sections` (array of objects with heading + body blocks), `conclusion`

**`/sanity/schemaTypes/caseStudy.ts`** — mirrors `CaseStudy` type in `lib/case-studies.ts`:
- `slug`, `badge`, `title`, `meta` pairs, `heroStats`, `quote`, `before`/`after` metrics, `related`

### 4. Sanity Client Setup

**`/lib/sanity.ts`** — new file:
```ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // false = always fresh for ISR
})
```

### 5. Replace Hardcoded Data with GROQ Queries

Update `/lib/blog-posts.ts` — replace TS array with Sanity queries:
```ts
export async function getAllPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(date desc)`)
}
export async function getPostBySlug(slug: string) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
}
```

Same pattern for `/lib/case-studies.ts`.

### 6. Update Page Components

**`/app/blog/[slug]/page.tsx`** and **`/app/case-studies/[slug]/page.tsx`**:
- Add `export const revalidate = false` + `export const dynamicParams = true` for ISR
- Add `next: { tags: ['blog'] }` to fetch calls for tag-based revalidation

**`/app/blog/page.tsx`** and **`/app/case-studies/page.tsx`**:
- Call `getAllPosts()` / `getAllStudies()` instead of importing the static array

**`/app/sitemap.ts`**:
- Replace static array imports with async Sanity queries

### 7. Embed Sanity Studio in the App

**`/app/studio/[[...tool]]/page.tsx`** — new file:
```tsx
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
export default function StudioPage() {
  return <NextStudio config={config} />
}
```

Clients visit `/studio` to edit content. No separate hosting needed.

### 8. On-Demand Revalidation Webhook

**`/app/api/revalidate/route.ts`** — new file:
- Receives POST from Sanity webhook on publish/edit
- Validates `SANITY_REVALIDATE_SECRET`
- Calls `revalidateTag('blog')` and `revalidateTag('case-studies')`

In Sanity dashboard → API → Webhooks → point to `https://lokam.ai/api/revalidate`

### 9. Migrate Existing Content

One-time script to push all 6 existing blog posts and 6+ case studies from the TS arrays into Sanity using `@sanity/client` mutations. Clients start with all existing content already in the CMS.

---

## Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxx          # server-only, for write/revalidation
SANITY_REVALIDATE_SECRET=xxx  # for webhook validation
```

---

## Files Changed

| Action | File |
|--------|------|
| New | `/sanity/schemaTypes/blogPost.ts` |
| New | `/sanity/schemaTypes/caseStudy.ts` |
| New | `/sanity/schemaTypes/index.ts` |
| New | `/sanity.config.ts` |
| New | `/lib/sanity.ts` |
| New | `/app/studio/[[...tool]]/page.tsx` |
| New | `/app/api/revalidate/route.ts` |
| Modified | `/lib/blog-posts.ts` — replace array with GROQ queries |
| Modified | `/lib/case-studies.ts` — replace array with GROQ queries |
| Modified | `/app/blog/page.tsx` — async data fetch |
| Modified | `/app/blog/[slug]/page.tsx` — ISR + Sanity fetch |
| Modified | `/app/case-studies/page.tsx` — async data fetch |
| Modified | `/app/case-studies/[slug]/page.tsx` — ISR + Sanity fetch |
| Modified | `/app/sitemap.ts` — async Sanity queries |
| Modified | `next.config.ts` — allow Sanity CDN image domain |

---

## Verification

1. `npm run dev` — studio loads at `http://localhost:3000/studio`
2. Create a test blog post in Studio → verify it appears at `/blog/[slug]`
3. Edit a post → verify webhook fires and page revalidates (check network tab)
4. Run `npm run build` → all pages statically generated with Sanity data
5. Check `/sitemap.xml` includes new Sanity-sourced posts

---

## Sanity Pricing

Free tier covers this project comfortably:
- 200,000 API requests/month
- 20GB bandwidth
- 3 users on free plan (upgrade ~$15/month for more editors)
