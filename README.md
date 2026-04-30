# Who Is Tul — Personal Website

A personal brand and journey website for Tul, built with [Astro](https://astro.build/) and deployed to [GitHub Pages](https://pages.github.com/) at **www.whoistul.com**.

The site features a homepage, career journey timeline, blog, hobbies showcase, a "Now" page, and a contact page — all wrapped in a clean, minimal, cool-toned design. Content is managed through Markdown files and an admin CMS, so you never need to touch code to update the site.

---

## Table of Contents

- [Initial Setup](#initial-setup)
- [Deployment Workflows](#deployment-workflows)
  - [Firm Device Workflow](#firm-device-workflow-no-nodejs-required)
  - [Personal Device Workflow](#personal-device-workflow-with-nodejs)
- [Custom Domain Configuration](#custom-domain-configuration)
- [GitHub Personal Access Token](#github-personal-access-token)
- [Pulling to a Personal Device](#pulling-to-a-personal-device)
- [Image Management](#image-management)
- [Text Content Editing](#text-content-editing)
- [Customizing the Homepage Hero Background](#customizing-the-homepage-hero-background)
- [CMS Admin Interface](#cms-admin-interface)
- [Writing Style Guide](#writing-style-guide)

---

## Initial Setup

These steps are for setting up the project on a personal computer that has Node.js installed. If you're working from a firm device without Node.js, skip to the [Firm Device Workflow](#firm-device-workflow-no-nodejs-required).

1. **Clone the repository**

   Open a terminal and run:

   ```bash
   git clone https://github.com/whoistul/whoistul-website.git
   cd whoistul-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This downloads all the libraries the site needs to build and run.

3. **Start the local development server**

   ```bash
   npm run dev
   ```

   Open your browser to the URL shown in the terminal (usually `http://localhost:4321`). You'll see a live preview of the site that updates as you make changes.

4. **Build the site for production**

   ```bash
   npm run build
   ```

   This creates a `dist/` folder with the final static files. You don't need to do this manually for deployment — GitHub Actions handles it automatically when you push to the `main` branch.

---

## Deployment Workflows

There are two ways to update and deploy the site, depending on what device you're using.

### Firm Device Workflow (No Node.js Required)

Use this workflow when you're on a work laptop or any device that doesn't have Node.js installed. You don't need to build the site yourself — GitHub Actions does it for you.

**Option A: Edit through the CMS admin**

1. Go to **www.whoistul.com/admin** in your browser
2. Log in with your GitHub account
3. Create or edit content (blog posts, journey milestones, hobbies, Now section)
4. Click **Publish** — the CMS saves your changes directly to the GitHub repository
5. GitHub Actions automatically rebuilds and deploys the site (takes about 1–2 minutes)

**Option B: Edit files directly on GitHub**

1. Go to your repository on **github.com** (e.g., `https://github.com/whoistul/whoistul-website`)
2. Navigate to the file you want to edit (e.g., `src/content/blog/my-first-post.md`)
3. Click the pencil icon to edit the file
4. Make your changes and click **Commit changes**
5. Make sure you're committing to the `main` branch
6. GitHub Actions automatically rebuilds and deploys the site

**Option C: Use git from the command line**

If you have git installed (but not Node.js):

1. Clone the repo (first time only):
   ```bash
   git clone https://github.com/whoistul/whoistul-website.git
   cd whoistul-website
   ```
2. Edit files with any text editor
3. Push your changes:
   ```bash
   git add .
   git commit -m "Update blog post"
   git push
   ```
4. GitHub Actions handles the build and deployment automatically

> **Key point:** You never need to run `npm install` or `npm run build` on a firm device. The GitHub Actions workflow installs dependencies and builds the site in the cloud every time you push to `main`.

### Personal Device Workflow (With Node.js)

Use this workflow when you're on a personal computer with Node.js installed. This lets you preview changes locally before pushing them live.

1. **Clone the repo** (first time only):
   ```bash
   git clone https://github.com/whoistul/whoistul-website.git
   cd whoistul-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open the URL shown in the terminal (usually `http://localhost:4321`) to see a live preview.

4. **Make your changes** — edit Markdown files, add images, update content. The browser preview updates automatically.

5. **Build to check for errors** (optional but recommended):
   ```bash
   npm run build
   ```

6. **Push to deploy**:
   ```bash
   git add .
   git commit -m "Describe your changes here"
   git push
   ```
   GitHub Actions rebuilds and deploys the site automatically.

---

## Custom Domain Configuration

The site is configured to serve at **www.whoistul.com**. Most of this is already set up, but here's what each piece does in case you need to troubleshoot.

### What's already in the repo

- A `public/CNAME` file containing `www.whoistul.com` — this tells GitHub Pages which domain to use
- The Astro config (`astro.config.mjs`) has `site: 'https://www.whoistul.com'` set

### GitHub Pages settings

1. Go to your repository on GitHub
2. Click **Settings** (top menu bar)
3. Click **Pages** in the left sidebar
4. Under **Custom domain**, enter `www.whoistul.com` and click **Save**
5. Check the **Enforce HTTPS** box (recommended)

### DNS configuration

At your domain registrar (wherever you bought `whoistul.com`), add the following DNS record:

| Type  | Name | Value                        |
|-------|------|------------------------------|
| CNAME | www  | `whoistul.github.io`         |

This tells the internet that `www.whoistul.com` should point to your GitHub Pages site.

> **Note:** DNS changes can take up to 24–48 hours to take effect, though it's usually much faster.

If you also want the bare domain (`whoistul.com` without `www`) to work, add these A records pointing to GitHub's servers:

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

---

## GitHub Personal Access Token

If you're pushing from a device that doesn't have the GitHub CLI (`gh`) installed, git will ask for a password when you push. GitHub no longer accepts regular passwords — you need a **Personal Access Token (PAT)** instead.

### How to create a PAT

1. Go to [github.com](https://github.com) and log in
2. Click your profile picture (top right) → **Settings**
3. Scroll down the left sidebar and click **Developer settings**
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name like "Firm laptop" so you remember what it's for
7. Set an expiration (90 days is a good balance of security and convenience)
8. Under **Select scopes**, check the **repo** box (this gives access to push to your repositories)
9. Click **Generate token**
10. **Copy the token immediately** — you won't be able to see it again

### How to use the PAT

When git asks for your credentials:

- **Username:** your GitHub username
- **Password:** paste the Personal Access Token (not your GitHub password)

To avoid entering it every time, you can tell git to remember it:

```bash
git config --global credential.helper store
```

The next time you enter your credentials, git will save them so you don't have to type them again.

> **Security tip:** Treat your PAT like a password. Don't share it or commit it to any files.

---

## Pulling to a Personal Device

If you've been editing content from a firm device or the CMS and want to continue working on a personal computer:

1. **First time — clone the repo:**
   ```bash
   git clone https://github.com/whoistul/whoistul-website.git
   cd whoistul-website
   ```

2. **Already cloned — pull the latest changes:**
   ```bash
   git pull
   ```

3. **Install dependencies** (first time, or after `package.json` changes):
   ```bash
   npm install
   ```

4. **Start the local dev server:**
   ```bash
   npm run dev
   ```

   This opens a live preview at `http://localhost:4321` where you can see your changes in real time.

---

## Image Management

### Where images are stored

Images live inside the content folders alongside the Markdown files that use them:

| Content type | Image folder                          |
|-------------|---------------------------------------|
| Blog posts  | `src/content/blog/images/`            |
| Journey     | `src/content/journey/images/`         |
| Hobbies     | `src/content/hobbies/images/`         |
| Pages       | `src/content/pages/images/`           |

### Naming conventions

- Use lowercase letters, numbers, and hyphens: `street-photography-bangkok.jpg`
- Keep names descriptive but short: `pwc-office.jpg`, `chula-graduation.webp`
- Avoid spaces and special characters in filenames

### Supported formats

- **JPG** — best for photographs
- **PNG** — best for graphics, logos, or images with transparency
- **WebP** — modern format with smaller file sizes (recommended when possible)

Astro automatically optimizes your images during the build process. It converts them to efficient formats and generates multiple sizes for different screen widths. You don't need to manually resize or compress images.

### How to reference images in content

In your Markdown frontmatter, reference images with a relative path:

```yaml
---
coverImage: "./images/my-photo.jpg"
coverImageAlt: "A short description of the image"
---
```

The `Alt` field is a text description of the image. It's important for accessibility (screen readers) and shows up if the image fails to load. Keep it brief and descriptive.

---

## Text Content Editing

All text content lives in Markdown files inside the `src/content/` folder. Each file has two parts:

1. **Frontmatter** — structured data at the top between `---` lines (written in YAML)
2. **Body** — the main content below the frontmatter (written in Markdown)

### Blog posts

Location: `src/content/blog/`

Example file (`my-first-post.md`):

```markdown
---
title: "Thinking in Systems"
date: 2025-06-15
excerpt: "How a consulting mindset shapes the way I see everyday problems."
coverImage: "./images/systems-thinking.jpg"
coverImageAlt: "Whiteboard with system diagrams"
tags: ["thinking", "consulting"]
draft: false
---

Your blog post content goes here. Write in plain text or use Markdown formatting.

## This Is a Heading

Regular paragraphs are just text separated by blank lines.

**Bold text** and *italic text* work as expected.

- Bullet points
- Like this

[Links look like this](https://example.com)
```

**Frontmatter fields:**

| Field          | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| title          | Yes      | The blog post title                              |
| date           | Yes      | Publication date in `YYYY-MM-DD` format          |
| excerpt        | No       | A short summary shown on the blog listing page   |
| coverImage     | No       | Path to a cover image (relative to the post)     |
| coverImageAlt  | No       | Description of the cover image                   |
| tags           | No       | A list of tags, e.g., `["travel", "photography"]`|
| draft          | No       | Set to `true` to hide the post from the site     |

### Journey milestones

Location: `src/content/journey/`

Each file represents one milestone on your Journey timeline. The files are named with a number prefix to keep them in order (e.g., `01-sbs-rangsit.md`, `02-suankularb.md`).

#### How the Journey page works

- Each milestone shows **text on one side** and an **image carousel on the other side**
- The layout **alternates**: first milestone has text left / images right, next has images left / text right, and so on
- Dates display as **month and year only** (e.g., "August 2019")
- The image carousel supports **multiple photos per milestone** — visitors can click arrows or swipe to browse

#### Editing an existing milestone

Open the file (e.g., `src/content/journey/03-chulalongkorn.md`) and edit the frontmatter or body text:

```markdown
---
title: "Chulalongkorn University"
subtitle: "Bachelor of Economics (EBA)"
date: 2019-08-01
description: "Four years studying Economics at Thailand's top university."
order: 3
---

Your longer description goes here. This text is not currently displayed
on the timeline, but is stored for future use.
```

**Frontmatter fields explained:**

| Field       | Required | What it does                                                    |
|-------------|----------|-----------------------------------------------------------------|
| title       | Yes      | The organization or school name (e.g., "PwC Thailand")          |
| subtitle    | No       | Your role or degree (e.g., "Data Analyst")                      |
| date        | Yes      | Date in `YYYY-MM-DD` format. Only the month and year are shown  |
| description | Yes      | 1-2 sentences shown on the timeline card                        |
| order       | No       | Number that controls the display order (1 = first, 2 = second)  |
| image       | No       | Single image (legacy field, still works)                        |
| imageAlt    | No       | Alt text for the single image                                   |
| images      | No       | List of multiple images for the carousel (see below)            |

#### Adding photos to a milestone (image carousel)

**Step 1: Put your photos in the images folder**

Create a folder called `images` inside `src/content/journey/` if it doesn't exist, then drop your photos there:

```
src/content/journey/
├── images/
│   ├── chula-campus.jpg
│   ├── chula-friends.jpg
│   ├── chula-graduation.jpg
│   ├── pwc-office.jpg
│   └── pwc-team.jpg
├── 01-sbs-rangsit.md
├── 02-suankularb.md
├── 03-chulalongkorn.md
└── ...
```

**Step 2: Reference the photos in the frontmatter**

Add an `images` list to the milestone file. Each entry has a `src` (file path) and an optional `alt` (description):

```markdown
---
title: "Chulalongkorn University"
subtitle: "Bachelor of Economics (EBA)"
date: 2019-08-01
description: "Four years studying Economics at Thailand's top university."
order: 3
images:
  - src: "./images/chula-campus.jpg"
    alt: "Chulalongkorn University campus"
  - src: "./images/chula-friends.jpg"
    alt: "With friends at the faculty"
  - src: "./images/chula-graduation.jpg"
    alt: "Graduation day"
---
```

- You can add as many images as you want — the carousel will show all of them
- If you add **no images**, a placeholder will show (3 grey boxes)
- The `alt` text is optional but recommended — it describes the image for accessibility
- Image paths start with `./images/` because they're relative to the journey folder

**Step 3: Commit and push**

```bash
git add .
git commit -m "Add photos to Chula milestone"
git push
```

The site rebuilds automatically. Your photos will appear in the carousel within 1-2 minutes.

#### Adding a new milestone

1. Create a new file in `src/content/journey/`. Name it with a number prefix to keep things organized:
   ```
   src/content/journey/09-new-company.md
   ```

2. Add the frontmatter and body text:
   ```markdown
   ---
   title: "New Company"
   subtitle: "Your Role"
   date: 2027-01-01
   description: "A short description of what you did here."
   order: 9
   ---

   Longer description goes here.
   ```

3. Optionally add photos (see "Adding photos" above)

4. Commit and push

#### Removing a milestone

Delete the file from `src/content/journey/` and push. The milestone will disappear from the timeline.

#### Reordering milestones

Change the `order` number in each file's frontmatter. Lower numbers appear first. For example:
- `order: 1` → appears first (top of timeline)
- `order: 8` → appears last (bottom of timeline)

#### Photo tips

- **File size**: Keep photos under 2MB each. Astro optimizes them during build, but smaller files = faster builds
- **Dimensions**: Landscape orientation works best (the carousel area is wider than tall). Aim for at least 800px wide
- **Formats**: JPG for photos, PNG for graphics, WebP for smaller file sizes
- **Naming**: Use lowercase with hyphens: `pwc-team-photo.jpg` (not `PwC Team Photo.JPG`)

### Hobbies

Location: `src/content/hobbies/`

```markdown
---
title: "Photography"
category: "photography"
description: "Street and travel photography — capturing quiet moments in busy places."
image: "./images/photography-hero.jpg"
imageAlt: "Street photography in Bangkok"
order: 1
---

Content about this hobby goes here.
```

The `category` field must be one of: `photography`, `travel`, `sports`, `motorsport`.

### Now section

Location: `src/content/now/current.md`

```markdown
---
lastUpdated: 2025-06-20
---

What you're currently working on, reading, or exploring. Write in plain text or Markdown.
```

Update the `lastUpdated` date whenever you edit this file so visitors know how recent the information is.

### Page content

Location: `src/content/pages/`

Files like `home.md`, `contact.md`, and `hobbies.md` contain the text content for those pages. Edit them the same way — update the frontmatter fields and body text as needed.

---

## Customizing the Homepage Hero Background

The homepage has a full-screen hero banner with animated floating circles on a dark background. You can replace this with your own background image (a landscape photo, a city skyline, etc.) while keeping the text and animations on top.

### Option 1: Use a background image

1. Pick a photo you like. Landscape orientation works best (wider than tall). Aim for at least 1920px wide for sharp display on large screens.

2. Name the file something simple like `hero-bg.jpg` and put it in the `public/` folder:
   ```
   public/
   ├── hero-bg.jpg    ← your new background image
   ├── favicon.svg
   ├── robots.txt
   └── ...
   ```

3. Open `src/components/HeroBanner.astro` and find this line near the top:
   ```html
   <div class="absolute inset-0 bg-[#161625]"></div>
   ```

4. Replace it with:
   ```html
   <img src="/whoistul/hero-bg.jpg" class="absolute inset-0 w-full h-full object-cover" alt="" />
   ```

   (If you later switch to a custom domain, change `/whoistul/hero-bg.jpg` to just `/hero-bg.jpg`)

5. Commit and push:
   ```bash
   git add .
   git commit -m "Add hero background image"
   git push
   ```

The floating circles will still animate on top of your image, giving it a polished layered effect. If the text is hard to read over your image, the overlay layer (`bg-[#161625]/30`) adds a dark tint. You can increase the number (e.g., `/50` or `/60`) for a darker overlay.

### Option 2: Change the background color

If you want a different solid color instead of the default dark navy:

1. Open `src/components/HeroBanner.astro`
2. Find `bg-[#161625]` and change the hex color to whatever you want
3. The circle colors are defined in the `<style>` section — you can adjust the `rgba` values to match your new background

### Option 3: Keep the animated circles (default)

The default is a dark background with slowly drifting translucent circles. No changes needed — it works out of the box.

### Where to find free background images

- [Unsplash](https://unsplash.com) — free high-quality photos, no attribution required
- [Pexels](https://pexels.com) — free stock photos
- Search for terms like "dark landscape", "city night", "abstract dark", "moody nature" for images that work well with white text on top

### Tips

- **Dark images work best** — the text is white, so a dark or moody photo gives the best contrast
- **File size matters** — keep the image under 500KB if possible for fast loading. Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to compress it
- **JPG or WebP** — use JPG for photos, WebP for smaller file sizes

---

## CMS Admin Interface

The site includes a built-in content management system (CMS) so you can create and edit content from your browser without touching any code.

### How to access the CMS

1. Go to **www.whoistul.com/admin** in your browser
2. Click **Login with GitHub**
3. Authorize the app if prompted (first time only)

### What you can do in the CMS

| Section            | What you can do                                                |
|--------------------|----------------------------------------------------------------|
| **Blog Posts**     | Create, edit, and delete blog posts. Set titles, dates, tags, excerpts, cover images, and draft status. Write content in a Markdown editor. |
| **Journey**        | Add or edit career/life milestones with titles, dates, descriptions, and images. |
| **Hobbies**        | Create or edit hobby entries. Choose a category (photography, travel, sports, motorsport), add descriptions and images. |
| **Now**            | Update what you're currently focused on. Change the last-updated date. |

### How it works behind the scenes

When you click **Publish** in the CMS:

1. The CMS saves your changes as a commit to the GitHub repository (on the `main` branch)
2. GitHub Actions detects the new commit and automatically rebuilds the site
3. The updated site goes live at www.whoistul.com within 1–2 minutes

You don't need to run any commands or install anything. The CMS handles everything through your browser.

### Tips

- Use the **Draft** toggle on blog posts to save work-in-progress posts without publishing them
- The Markdown editor in the CMS supports formatting buttons (bold, italic, headings, links, images) so you don't need to remember Markdown syntax
- You can preview your content in the CMS editor before publishing

---

## Writing Style Guide

This section defines the tone and structure for all content on the site — blog posts, page copy, milestone descriptions, and hobby write-ups.

### Tone Guidelines

The writing should feel:

- **Thoughtful** — show that you've considered what you're saying, not just filling space
- **Concise** — say what matters and stop. Every sentence should earn its place
- **Personal but not cringe** — share genuine perspectives without oversharing or being performative
- **Intellectual without being pretentious** — reference ideas and frameworks naturally, not to impress

Think of the tone as a conversation with a smart friend over coffee — relaxed, honest, and interesting without trying too hard.

### Good Examples

**Example 1 — Blog intro:**

> There's something about working in consulting that rewires how you think. You stop seeing isolated problems and start seeing systems — loops, dependencies, feedback cycles.

Why it works: It's personal and specific. It shares a real observation without being dramatic or self-important. The language is clean and the metaphor is grounded.

**Example 2 — Hobby description:**

> Photography is how I slow down. During the week, everything moves fast — deadlines, deliverables, data. On weekends, I pick up my camera and walk.

Why it works: It's honest and concise. It connects the hobby to a real feeling without over-explaining. The contrast between work and weekends is relatable.

### Bad Examples

**Example 1 — Overly dramatic and vague:**

> My journey has been an incredible rollercoaster of self-discovery and transformation. Every single day I wake up grateful for the amazing opportunities that have shaped who I am today as a passionate, driven individual.

Why it doesn't work: It's generic — you could paste this on anyone's website. Words like "incredible," "amazing," and "passionate" are filler. It tells instead of showing.

**Example 2 — Trying too hard to sound smart:**

> Through the epistemological lens of data-driven paradigm shifts, I've cultivated a multifaceted approach to leveraging synergistic methodologies in the consulting ecosystem, fundamentally disrupting traditional frameworks.

Why it doesn't work: It's jargon soup. Nobody talks like this. It prioritizes sounding impressive over actually communicating something. If you can't explain it simply, rethink it.

### Blog Post Structure

**Recommended length:** 500–1,500 words. Long enough to say something meaningful, short enough to respect the reader's time.

**Headings:**

- Use **H2** (`## Heading`) for main sections within a post
- Use **H3** (`### Heading`) for subsections if needed
- Don't skip heading levels (e.g., don't jump from H2 to H4)
- Keep headings short and descriptive

**Paragraph structure:**

- Keep paragraphs short — 2 to 4 sentences each
- One idea per paragraph
- Use blank lines between paragraphs
- Break up long sections with headings or bullet points

**General tips:**

- Start with a hook — a specific observation, question, or moment that draws the reader in
- End with a takeaway or reflection, not a generic conclusion
- Use concrete examples over abstract statements
- Read your post out loud before publishing — if it sounds stiff, rewrite it