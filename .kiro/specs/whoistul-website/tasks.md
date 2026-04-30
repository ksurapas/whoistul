# Implementation Plan: whoistul-website

## Overview

Build a personal brand website for Tul using Astro + Tailwind CSS, deployed to GitHub Pages at www.whoistul.com. Implementation follows a bottom-up approach: project scaffolding → design system → shared components → content collections → page implementations → CMS integration → deployment → documentation.

## Tasks

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Initialize Astro project with package.json, tsconfig.json, and install dependencies (Astro, Tailwind CSS, @astrojs/tailwind, @astrojs/sitemap, sharp)
    - Create `package.json` with project name, scripts (`dev`, `build`, `preview`), and pinned dependencies
    - Create `tsconfig.json` extending Astro's strict config
    - _Requirements: 11.1_

  - [x] 1.2 Create astro.config.mjs with site URL, Tailwind and sitemap integrations, static output, and Sharp image service
    - Set `site: 'https://www.whoistul.com'`
    - Configure `output: 'static'` and `build.assets: '_assets'`
    - _Requirements: 11.2, 13.2, 16.2_

  - [x] 1.3 Create tailwind.config.mjs with custom design system tokens (colors, fonts, maxWidth)
    - Extend theme with `bg`, `text`, `accent`, `border`, `card` color tokens
    - Add `font-display` and `font-body` families (Inter)
    - Add `max-w-content: 1200px`
    - _Requirements: 9.1, 9.2, 9.4_

  - [x] 1.4 Create src/styles/global.css with Tailwind directives and CSS custom properties for design system tokens
    - Include `@tailwind base; @tailwind components; @tailwind utilities;`
    - Define `:root` CSS variables for colors, typography, spacing (8px grid), and transitions
    - Import Inter font from Google Fonts or Fontsource
    - _Requirements: 9.1, 9.2, 9.3_

  - [x] 1.5 Create src/lib/utils.ts with `formatDate` and `sortByDateDesc` utility functions
    - `formatDate(date: Date): string` → "DD MMM YYYY" format
    - `sortByDateDesc<T>` → sort items by date descending
    - _Requirements: 5.2, 5.1, 4.1_

  - [ ]* 1.6 Write property tests for utility functions
    - **Property 5: Date formatting produces "DD MMM YYYY" pattern**
    - **Validates: Requirements 5.2**
    - **Property 3: Date-based sorting produces correct order**
    - **Validates: Requirements 4.1, 5.1**
    - Set up Vitest + fast-check, create `src/lib/utils.test.ts`

- [x] 2. Content collections and seed content
  - [x] 2.1 Create src/content/config.ts defining all content collection schemas (blog, journey, hobbies, now, pages)
    - Use Zod schemas matching the design document data models exactly
    - Include `image()` helper for image fields, `z.date()` for dates, `z.enum` for hobby categories
    - _Requirements: 5.5, 4.2, 6.1_

  - [x] 2.2 Create seed content files for all collections
    - `src/content/blog/my-first-post.md` — sample blog post with full frontmatter
    - `src/content/journey/chula-economics.md` and `pwc-analyst.md` — two journey milestones
    - `src/content/hobbies/photography.md`, `travel.md`, `sports.md`, `motorsport.md` — one entry per category
    - `src/content/now/current.md` — current Now section content
    - `src/content/pages/home.md`, `contact.md`, `hobbies.md` — page content entries
    - _Requirements: 5.5, 4.2, 6.1, 6.2, 14.1_

- [x] 3. Shared layout and structural components
  - [x] 3.1 Create SEOHead.astro component
    - Render `<title>`, `<meta name="description">`, Open Graph tags (`og:title`, `og:description`, `og:image`), and canonical URL
    - Accept `title`, `description`, `ogImage?`, `canonicalUrl?` props
    - _Requirements: 16.1_

  - [ ]* 3.2 Write property test for SEOHead
    - **Property 11: SEO meta tags are present for all pages**
    - **Validates: Requirements 16.1**

  - [x] 3.3 Create BaseLayout.astro component
    - Include `SEOHead`, `Navbar`, page `<slot />`, and `Footer`
    - Use semantic HTML: `<header>`, `<nav>` (inside Navbar), `<main>`, `<footer>`
    - Apply global styles, Inter font, and max-width container
    - Accept `title`, `description`, `ogImage?`, `currentPage?` props
    - _Requirements: 16.4, 9.1, 9.4_

  - [ ]* 3.4 Write property test for BaseLayout semantic structure
    - **Property 12: Pages use semantic HTML structure**
    - **Validates: Requirements 16.4**

  - [x] 3.5 Create Navbar.astro component
    - Render links to Home, Journey, Blog, Hobbies, Contact
    - Highlight active page based on `currentPage` prop
    - Implement mobile hamburger menu (collapse below 768px) with vertical overlay
    - Apply hover transitions on navigation links
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 15.2_

  - [ ]* 3.6 Write property test for Navbar active link
    - **Property 1: Active navigation link matches current page**
    - **Validates: Requirements 1.3**

  - [x] 3.7 Create Footer.astro component
    - Minimal footer with copyright and optional social links
    - Semantic `<footer>` element
    - _Requirements: 16.4_

  - [x] 3.8 Create Section.astro wrapper component
    - Accept `id?`, `class?`, `fullWidth?` props
    - Apply consistent vertical spacing (`py-16` / 64px) and max-width container unless `fullWidth`
    - _Requirements: 3.2, 9.3_

  - [x] 3.9 Create OptimizedImage.astro component
    - Wrap Astro's `<Image>` component with `alt`, `loading`, `width`, `height`, `class` props
    - Default `loading="lazy"` for below-fold images
    - Apply CSS fallback background for broken images
    - _Requirements: 13.2, 13.3, 13.4_

  - [ ]* 3.10 Write property test for OptimizedImage
    - **Property 9: OptimizedImage outputs correct HTML attributes**
    - **Validates: Requirements 13.3, 13.4**

  - [x] 3.11 Create ContentCard.astro component
    - Accept `title`, `description?`, `image?`, `imageAlt?`, `href?` props
    - Apply hover scale/opacity transition (200–400ms)
    - Ensure 44x44px minimum touch target on mobile
    - _Requirements: 15.1, 8.4_

- [x] 4. Checkpoint — Ensure project builds and shared components are correct
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Homepage implementation
  - [x] 5.1 Create HeroSection.astro component
    - Headline (display font, 48px desktop / 32px mobile) + subheadline + portrait image
    - Side-by-side layout on desktop, stacked vertically on mobile (<768px)
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 5.2 Create IntroSection.astro component
    - 2-3 sentence centered text block about Tul
    - _Requirements: 3.1_

  - [x] 5.3 Create NowSection.astro component
    - Display current focus content with last-updated date (formatted via `formatDate`)
    - Pull from `now` content collection
    - _Requirements: 14.1, 14.3_

  - [ ]* 5.4 Write property test for NowSection
    - **Property 10: Now section displays last-updated date**
    - **Validates: Requirements 14.3**

  - [x] 5.5 Create FeaturedCards.astro component
    - Render up to 3 content cards (latest blog posts or curated highlights)
    - Use `ContentCard` component
    - _Requirements: 3.3_

  - [ ]* 5.6 Write property test for FeaturedCards
    - **Property 2: Featured content card count is capped at 3**
    - **Validates: Requirements 3.3**

  - [x] 5.7 Create CTASection.astro component
    - Subtle link to Journey page ("See where I've been →" style)
    - _Requirements: 3.1_

  - [x] 5.8 Create src/pages/index.astro (Homepage)
    - Compose: BaseLayout → HeroSection → IntroSection → NowSection → FeaturedCards → CTASection
    - Sections in order with consistent 64px vertical spacing
    - _Requirements: 3.1, 3.2_

- [x] 6. Journey page implementation
  - [x] 6.1 Create TimelineItem.astro component
    - Render title, formatted date, description, and optional image
    - _Requirements: 4.2_

  - [ ]* 6.2 Write property test for TimelineItem
    - **Property 4: Journey milestone rendering includes required fields**
    - **Validates: Requirements 4.2**

  - [x] 6.3 Create Timeline.astro component
    - Vertical timeline layout, alternating left/right on desktop, single-column on mobile (<768px)
    - Accept `milestones` array, render TimelineItem for each
    - _Requirements: 4.1, 4.3, 4.4_

  - [x] 6.4 Create src/pages/journey.astro
    - Fetch journey collection, sort chronologically, render via Timeline component
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 7. Blog implementation
  - [x] 7.1 Create BlogCard.astro component
    - Display title, formatted date (DD MMM YYYY), excerpt, optional cover image
    - Link to `/blog/{slug}`
    - Apply hover transition
    - _Requirements: 5.1, 5.2, 5.3, 15.1_

  - [ ]* 7.2 Write property test for BlogCard
    - **Property 6: Blog card links to correct post URL**
    - **Validates: Requirements 5.3**

  - [x] 7.3 Create src/pages/blog/index.astro (Blog listing)
    - Fetch blog collection, filter out drafts, sort by date descending
    - Render BlogCard for each post
    - Show "No posts yet" message if empty
    - _Requirements: 5.1, 5.2_

  - [x] 7.4 Create src/pages/blog/[...slug].astro (Blog post page)
    - Render Markdown content with prose styling (headings, paragraphs, images, code blocks, links)
    - Display publication date and optional cover image
    - _Requirements: 5.3, 5.4_

- [x] 8. Hobbies page implementation
  - [x] 8.1 Create HobbyNav.astro component
    - In-page anchor links or tabs for Photography, Travel, Sports, Motorsport sections
    - _Requirements: 6.3_

  - [x] 8.2 Create PhotographySection.astro component
    - Masonry/grid gallery layout for photography images
    - Title and introductory text
    - _Requirements: 6.2, 6.5_

  - [x] 8.3 Create TravelSection.astro, SportsSection.astro, MotorsportSection.astro components
    - Each with title, introductory text, and content grid/image layout
    - Full-width stacked layout on mobile (<768px)
    - _Requirements: 6.2, 6.4_

  - [ ]* 8.4 Write property test for hobby sections
    - **Property 7: Hobby section rendering includes title and introductory text**
    - **Validates: Requirements 6.2**

  - [x] 8.5 Create src/pages/hobbies.astro
    - Compose: HobbyNav + all four section components
    - Fetch hobbies collection, group by category, pass to sections
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 9. Contact page and Now page
  - [x] 9.1 Create ContactCard.astro component
    - Render contact method (email, social link) with icon and label
    - External links open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
    - _Requirements: 7.1, 7.2, 7.3_

  - [ ]* 9.2 Write property test for external links
    - **Property 8: External links open in new tab with security attributes**
    - **Validates: Requirements 7.2**

  - [x] 9.3 Create src/pages/contact.astro
    - Display at least 2 contact methods using ContactCard
    - Clean, minimal layout consistent with design system
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 9.4 Create src/pages/now.astro
    - Standalone Now page showing current focus with last-updated date
    - Editable via CMS
    - _Requirements: 14.1, 14.3_

- [x] 10. Checkpoint — Ensure all pages build and render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 11. 404 page, responsive polish, and hover effects
  - [x] 11.1 Create src/pages/404.astro
    - Custom 404 page matching site design system with navigation back to homepage
    - _Requirements: 16.4_

  - [x] 11.2 Verify responsive breakpoints across all pages
    - Ensure mobile (<768px), tablet (768–1024px), desktop (>1024px) layouts work
    - Verify minimum 16px body font, 44x44px touch targets, proportional image scaling
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 11.3 Verify hover effects on cards, images, and navigation links
    - Content cards and image thumbnails: smooth scale/opacity transition (200–400ms)
    - Navigation links: subtle underline or color transition
    - Graceful degradation on touch devices (no hover-dependent content)
    - _Requirements: 15.1, 15.2, 15.3_

- [x] 12. CMS integration and deployment configuration
  - [x] 12.1 Create public/admin/index.html for Decap CMS admin page
    - Include Decap CMS script and basic HTML shell
    - Accessible at `/admin`
    - _Requirements: 10.1_

  - [x] 12.2 Create public/admin/config.yml for Decap CMS
    - Configure GitHub backend with repo and branch
    - Define collections for blog, journey, hobbies, now with all fields matching content schemas
    - Include date widget for blog posts, rich text/Markdown editor for body content
    - _Requirements: 10.2, 10.3, 10.4, 10.5, 10.6, 14.2_

  - [x] 12.3 Create public/CNAME with `www.whoistul.com`
    - _Requirements: 11.4_

  - [x] 12.4 Create public/robots.txt and public/favicon.svg
    - _Requirements: 16.1_

  - [x] 12.5 Create .github/workflows/deploy.yml GitHub Actions workflow
    - Trigger on push to main and workflow_dispatch
    - Steps: checkout, setup Node 20, npm ci, astro build, upload artifact, deploy to GitHub Pages
    - Configure permissions (contents: read, pages: write, id-token: write) and concurrency
    - _Requirements: 11.1, 11.3, 11.5, 11.6_

- [x] 13. Checkpoint — Full build and deployment verification
  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. README documentation
  - [x] 14.1 Create README.md with comprehensive setup, deployment, and content management instructions
    - Step-by-step initial project setup (clone, install dependencies)
    - Two deployment workflows: (a) Firm Device Workflow (git + GitHub only, no Node.js) and (b) Personal Device Workflow (local dev with Node.js)
    - Custom domain configuration for www.whoistul.com
    - GitHub Personal Access Token instructions for firm device authentication
    - Pulling project to personal device, installing dependencies, running local dev server
    - Image management: where images are stored, naming conventions, supported formats
    - Text content editing: modifying page copy, blog posts, frontmatter fields
    - CMS admin interface usage instructions
    - Writing style guide: tone guidelines (thoughtful, concise, personal but not cringe), 2 good examples, 2 bad examples, blog post structural guidelines
    - Use plain language suitable for a non-technical user
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 12.10, 17.1, 17.2, 17.3_

- [x] 15. Final checkpoint — Complete build, all tests pass, documentation reviewed
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation after major milestones
- Property tests validate universal correctness properties from the design document using Vitest + fast-check
- The design document contains all component interfaces, data models, and configuration details — refer to it during implementation
- All hover effects must degrade gracefully on touch devices
- Images should use Astro's built-in `<Image>` component for automatic WebP/AVIF optimization
