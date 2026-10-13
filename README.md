# B.C. Trees Website

Marketing site for **B.C. Trees** ([briancoxtrees.com](https://briancoxtrees.com)), a Christian owned, fully insured tree service based in English, Indiana and serving Southern Indiana. Services include storm damage cleanup, tree trimming, tree removal and stump grinding.

Quote requests and the customer portal are handled by [SingleOps](https://app.singleops.com/accounts/BCTrees/portal). This site links out to it and doesn't store any customer data.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) with React 19 and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) components (carousel via Embla, mobile drawer via Vaul)
- [lucide-react](https://lucide.dev) icons
- Montserrat, loaded through `next/font/google`

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script          | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Dev server with Turbopack             |
| `npm run build` | Production build                      |
| `npm run start` | Serve the production build            |
| `npm run lint`  | ESLint (Next.js config)               |

No environment variables are needed.

## Project structure

```
public/images/            Logos, favicon and photos
src/
  app/
    globals.css           Tailwind setup and theme colors
    sitemap.ts            Generates /sitemap.xml
    robots.ts             Generates /robots.txt
    (front)/
      layout.tsx          Root layout: fonts, site-wide metadata, header/footer
      page.tsx            Home: hero, intro, service cards, quote banner
      services/page.tsx   Services overview (one row per service)
      services/[slug]/    One page per service, built from lib/services.ts
      estimate/page.tsx   Permanent redirect to the SingleOps quote portal
  components/
    Header.tsx            Logo + desktop navigation
    AnimatedHamburger.tsx Mobile navigation drawer with click-to-call
    Footer.tsx            Logo, trust points, contact info, copyright
    QuoteButtons.tsx      "Get a Free Quote" + "Call" button pair
    CtaBanner.tsx         Olive "Ready for your free estimate?" band
    ServiceCard.tsx       Photo card linking to a service page
    TrustList.tsx         Christian owned / insured / free estimates / service area
    Breadcrumbs.tsx       Breadcrumb trail for page headers
    ui/                   shadcn/ui components
  lib/site.ts             Business details (domain, phone, email, location)
  lib/services.ts         Service content: copy, photos, included items, FAQs
  lib/utils.ts            `cn()` class name helper
```

## Pages

| Route       | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `/`         | Hero with quote/call buttons, intro, service cards, quote banner |
| `/services` | Overview of all four services, why B.C. Trees, quote banner |
| `/services/storm-damage-cleanup`, `/services/tree-removal`, `/services/tree-trimming`, `/services/stump-grinding` | Service detail: hero, how we help, what's included, FAQ, other services |
| `/estimate` | 308 redirect to the SingleOps portal (kept for old links)      |

## Common edits

- **Navigation links:** update both [Header.tsx](src/components/Header.tsx) (desktop) and [AnimatedHamburger.tsx](src/components/AnimatedHamburger.tsx) (mobile).
- **Business details (phone, email, location, domain, quote link, Facebook):** [site.ts](src/lib/site.ts). The footer, mobile menu, metadata, structured data and sitemap all read from it.
- **Services copy, photos and FAQs:** [services.ts](src/lib/services.ts). The home cards, the overview, each service page and the sitemap all read from it. Adding an entry creates a new page at `/services/<slug>`.
- **Colors:** theme tokens (`one`, `two`, `back`, `dark-back`) live in [globals.css](src/app/globals.css).
- **Page titles and descriptions:** site-wide defaults are in [layout.tsx](src/app/(front)/layout.tsx); each page can export its own `metadata`.

## SEO

### Already in place

- Production domain set via `metadataBase` (`https://briancoxtrees.com`), with canonical URLs on each page
- Location-focused titles and descriptions ("Tree Service in Southern Indiana", "English, Indiana")
- Open Graph and Twitter card tags, so shared links show a title, description and photo
- `HomeAndConstructionBusiness` (LocalBusiness) JSON-LD in the root layout: name, phone, email, address (English, IN 47118), area served, services offered, logo
- `/sitemap.xml` and `/robots.txt`, generated from [sitemap.ts](src/app/sitemap.ts) and [robots.ts](src/app/robots.ts)
- Name, location, phone and email (NAP) in the footer on every page, with click-to-call, mailto and Facebook links
- Visible `<h1>` on every page, and intro copy on the home page
- A page per service with `Service`, `FAQPage` and `BreadcrumbList` structured data, all in the sitemap
- Semantic `<header>`, `<nav>`, `<main>`, `<footer>` and `<address>` elements
- Descriptive alt text on all images, served through `next/image`
- Home page splash photo is a preloaded, priority `next/image` with a blur placeholder, served as resized WebP
- Source photos capped at 2400px with EXIF/GPS metadata stripped. **Strip metadata from any new phone photo before adding it**, since iPhone photos embed the location where they were taken
- Favicon wired up through the metadata API
- Permanent (308) redirect from `/estimate` so old links keep their ranking

### To do

**High impact**

1. **Claim and fill out the Google Business Profile** for English, IN with Southern Indiana as the service area, and link it to the site. Keep the name, phone and location identical to the footer. For a local service business this often matters more than anything on the site itself.
2. **Verify the domain in Google Search Console** and submit `https://briancoxtrees.com/sitemap.xml`.
3. **Add business hours** (`openingHoursSpecification`) and any other social profiles (`sameAs`, Facebook is already there) to the JSON-LD in [layout.tsx](src/app/(front)/layout.tsx) once known.

**Technical**

4. **Make a dedicated 1200×630 share image.** The Open Graph tags currently use the splash and storm damage photos as-is.

**Content**

5. **Have the client review the service page copy and FAQs** in [services.ts](src/lib/services.ts). It's a draft written from what was already on the site, and anything inaccurate should be fixed before launch, since the FAQs also go into structured data.
6. **Mention the towns and counties served** (for example Crawford, Orange, Harrison and Dubois counties) in page copy, so searches like "tree removal Jasper IN" have something to match.
7. **Add the About page** (still open in `project_outline.md`): owner story, years in business, insurance and certifications.
8. **Add reviews or testimonials and a photo gallery** of past jobs, with descriptive file names and alt text, e.g. `oak-removal-english-in.jpg`.
9. **Get better photos for each service.** Three of the four are only 450–600px wide. Larger, recent job photos would make the service pages look sharper and could run full width.

## Deployment

Any Next.js host works. On [Vercel](https://vercel.com), import the repo and use the default settings (`npm run build`), then point `briancoxtrees.com` at it. If the domain ever changes, update `url` in [site.ts](src/lib/site.ts).
