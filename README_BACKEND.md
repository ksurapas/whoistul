# Backend Editing Guide

This guide teaches you how to edit every page on the website. You don't need to know how to code — just follow the steps, edit the right file, and push to GitHub. The site rebuilds automatically.

**How to push changes:**
```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## Table of Contents

- [Homepage](#homepage)
- [Journey](#journey)
- [Blog](#blog)
- [Photography](#photography)
- [Sports](#sports)
- [Tech & Gadgets](#tech--gadgets)
- [Contact](#contact)

---

## Homepage

**File:** `src/pages/index.astro`

### Change the "HELLO." text

Find this line:
```
headline="H E L L O."
```
Change it to whatever you want:
```
headline="W E L C O M E."
```

### Change the subtitle under "HELLO."

Find this line:
```
subheadline="Data Analyst at PwC Thailand. Economics graduate. Curious generalist."
```
Change the text inside the quotes.

### Change the "Explore Journey" button text

Find this line:
```
ctaText="Explore Journey"
```
Change it to whatever you want.

### Change the hero banner background

**File:** `src/components/HeroBanner.astro`

The default is a dark background with animated floating circles. To use your own image:

1. Put your image in the `public/` folder (e.g., `public/hero-bg.jpg`)
2. Open `src/components/HeroBanner.astro`
3. Find this line:
   ```html
   <div class="absolute inset-0 bg-[#161625]"></div>
   ```
4. Replace it with:
   ```html
   <img src="/whoistul/hero-bg.jpg" class="absolute inset-0 w-full h-full object-cover" alt="" />
   ```

Tips:
- Use a dark image — the text is white
- Landscape orientation, at least 1920px wide
- Keep file size under 500KB (compress at https://squoosh.app)

### Edit the About text

**File:** `src/pages/index.astro`

Find this block:
```
I'm Tul — a Data Analyst at PwC Thailand with a background in Economics from Chulalongkorn University.
I spend my days turning data into insights and my weekends behind a camera or on a badminton court.
This site is a space for my work, my interests, and the things I'm learning along the way.
```
Edit the text directly. Keep it inside the `<p>` tags.

### Replace the GIF

1. Put your GIF in the `public/` folder (e.g., `public/me.gif`)
2. Open `src/pages/index.astro`
3. Find this line:
   ```html
   <span class="text-sm text-text-muted/40 text-center px-4">GIF of myself</span>
   ```
4. Replace the entire line with:
   ```html
   <img src="/whoistul/me.gif" alt="Tul" class="w-full h-full object-cover" />
   ```

---

## Journey

### Edit a milestone's text

**Folder:** `src/content/journey/`

Each milestone is a separate file (e.g., `03-chulalongkorn.md`). Open the file and edit:

```yaml
---
title: "Chulalongkorn University"        ← Organization name
subtitle: "Bachelor of Economics (EBA)"   ← Your role or degree
date: 2019-08-01                          ← Date (only month and year are shown)
description: "Four years studying..."     ← Short description on the timeline
order: 3                                  ← Display order (1 = first)
---

This is the body text. It's stored but not currently shown on the timeline.
```

**What each field does:**
- `title` — The big bold name (e.g., "PwC Thailand")
- `subtitle` — The blue text below it (e.g., "Data Analyst")
- `date` — Format: `YYYY-MM-DD`. Only month and year are displayed
- `description` — The paragraph text on the timeline card
- `order` — Controls the order. Lower number = appears first

### Add pictures to a milestone

1. Create an `images` folder inside `src/content/journey/` if it doesn't exist
2. Put your photos there:
   ```
   src/content/journey/
   ├── images/
   │   ├── chula-campus.jpg
   │   ├── chula-friends.jpg
   │   └── chula-graduation.jpg
   ├── 03-chulalongkorn.md
   ```
3. Open the milestone file and add an `images` list:
   ```yaml
   ---
   title: "Chulalongkorn University"
   subtitle: "Bachelor of Economics (EBA)"
   date: 2019-08-01
   description: "Four years studying Economics."
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

The carousel will show all the images you add. More images = more slides.

### Remove a picture

Delete the image entry from the `images` list in the frontmatter. For example, to remove the second photo, delete these two lines:
```yaml
     - src: "./images/chula-friends.jpg"
       alt: "With friends at the faculty"
```

### Add a new milestone

1. Create a new file in `src/content/journey/`. Name it with a number prefix:
   ```
   src/content/journey/09-new-company.md
   ```
2. Add this content:
   ```yaml
   ---
   title: "Company Name"
   subtitle: "Your Role"
   date: 2027-06-01
   description: "A short description of what you did here."
   order: 9
   ---

   Optional longer text here.
   ```
3. Commit and push.

### Remove a milestone

Delete the file from `src/content/journey/` and push.

### Reorder milestones

Change the `order` number in each file. Lower = first, higher = last.

---

## Blog

**Folder:** `src/content/blog/`

### Edit a blog post

Open the file (e.g., `my-first-post.md`). The file has two parts:

```markdown
---
title: "Thinking in Systems"                    ← Post title
date: 2025-06-15                                ← Date (format: YYYY-MM-DD)
excerpt: "How a consulting mindset shapes..."   ← Short summary on the blog listing
tags: ["thinking", "consulting"]                ← Tags (optional)
draft: false                                    ← Set to true to hide the post
---

Your blog post text goes here.

## This Is a Heading

Regular paragraphs are just text separated by blank lines.

**Bold text** and *italic text* work like this.

- Bullet point 1
- Bullet point 2

[This is a link](https://example.com)
```

### Change the blog title

Edit the `title` field in the frontmatter:
```yaml
title: "My New Title"
```

### Change the date

Edit the `date` field. Format is `YYYY-MM-DD`:
```yaml
date: 2026-03-15
```

### Add a cover image to a blog post

1. Put the image in `src/content/blog/images/`
2. Add to the frontmatter:
   ```yaml
   coverImage: "./images/my-cover.jpg"
   coverImageAlt: "Description of the image"
   ```

### Add a picture inside the blog text

Use this syntax anywhere in the body text:
```markdown
Here's a photo from the trip:

![Description of the photo](./images/trip-photo.jpg)

And here's another paragraph after the photo.
```

The image file goes in `src/content/blog/images/`.

**Full example with inline images:**
```markdown
---
title: "My Trip to Cologne"
date: 2026-02-01
excerpt: "A semester abroad in Germany."
coverImage: "./images/cologne-cover.jpg"
coverImageAlt: "Cologne Cathedral"
tags: ["travel"]
draft: false
---

Cologne was incredible. Here's the cathedral at sunset:

![Cologne Cathedral at sunset](./images/cologne-cathedral.jpg)

We also visited the Christmas markets:

![Christmas market stalls](./images/christmas-market.jpg)

The food was amazing too.
```

### Create a new blog post

1. Create a new file in `src/content/blog/`:
   ```
   src/content/blog/my-new-post.md
   ```
2. Add the frontmatter and body:
   ```markdown
   ---
   title: "My New Post"
   date: 2026-04-01
   excerpt: "A short summary of the post."
   tags: ["topic"]
   draft: false
   ---

   Write your post here.
   ```
3. Commit and push. It appears on the blog page automatically.

### Hide a blog post (draft)

Set `draft: true` in the frontmatter. The post won't show on the site but the file stays in the repo.

### Delete a blog post

Delete the file from `src/content/blog/` and push.

---

## Photography

**File:** `src/pages/hobbies/photography.astro`

### Edit the intro text

Find this block:
```
Capturing moments through the lens has been my passion for over a decade...
```
Edit the text directly inside the `<p>` tags.

### Edit the page title

Find:
```html
<h1 ...>Photography</h1>
```
Change "Photography" to whatever you want.

### Add a gear item

Find the `gear` array at the top of the file:
```javascript
const gear = [
  { name: 'Nikon Z5II', type: 'Camera', icon: '📷' },
  ...
];
```

Add a new line inside the array:
```javascript
  { name: 'Nikon 70-200mm f/2.8', type: 'Telephoto', icon: '🔭' },
```

**Available icons:** 📷 (camera), 🔭 (lens), ⚡ (flash), 📐 (tripod/accessory)

### Remove a gear item

Delete the entire line for that item. For example, to remove the D750, delete:
```javascript
  { name: 'Nikon D750', type: 'Camera', icon: '📷' },
```

### Edit a Recent Work item

Find the `recentWork` array:
```javascript
const recentWork = [
  { title: 'Rocky Mountains, Colorado', description: 'Captured this dramatic...' },
  ...
];
```

Edit the `title` or `description` text.

### Add a new Recent Work item

Add a new entry to the array:
```javascript
  { title: 'Kyoto Temples', description: 'Ancient temples surrounded by autumn foliage.' },
```

### Remove a Recent Work item

Delete the entire `{ title: '...', description: '...' },` line for that item.

### Add real photos to Recent Work

The photos are currently placeholders. To add real images:

1. Put photos in `public/images/photography/` (create the folder if needed)
2. In the file, find the placeholder SVG inside the Recent Work section and replace with:
   ```html
   <img src="/whoistul/images/photography/rocky-mountains.jpg" alt="Rocky Mountains" class="w-full h-full object-cover" />
   ```

---

## Sports

**File:** `src/pages/hobbies/sports.astro`

### Edit a sport's info

Find the sport in the `sports` array:
```javascript
{
  name: 'Badminton',           ← Sport name
  level: 'Intermediate',       ← Skill level
  years: '7 years',            ← How long you've played
  frequency: '2x per week',    ← How often
  gear: [                      ← Gear list (see below)
    ...
  ],
},
```

Edit any field directly.

### Add a new sport

Add a new block to the `sports` array:
```javascript
{
  name: 'Tennis',
  level: 'Beginner',
  years: '1 year',
  frequency: '1x per week',
  gear: [
    { name: 'Wilson Pro Staff', type: 'Racket', note: 'Classic feel and control' },
    { name: 'Nike Court Vapor', type: 'Shoes', note: 'Lightweight court shoes' },
  ],
},
```

### Remove a sport

Delete the entire block for that sport (from `{` to `},`).

### Add gear to a sport

Find the sport's `gear` array and add a new line:
```javascript
{ name: 'Item Name', type: 'Category', note: 'Short description' },
```

### Remove gear from a sport

Delete the line for that gear item.

### Sport with no gear

Set `gear` to an empty array. No expand button will show:
```javascript
gear: [],
```

---

## Tech & Gadgets

**File:** `src/pages/hobbies/tech.astro`

### Add a new gadget

Find the `gadgets` array and add a new line:
```javascript
{ name: 'AirPods Pro 2', category: 'Audio', color: 'bg-teal-500' },
```

### Remove a gadget

Delete the entire line for that gadget.

### Edit a gadget

Change the `name`, `category`, or `color` directly.

### Available category colors

| Color | Code |
|-------|------|
| Blue | `bg-blue-500` |
| Rose/Pink | `bg-rose-500` |
| Teal | `bg-teal-500` |
| Amber/Yellow | `bg-amber-500` |
| Purple | `bg-purple-500` |
| Orange | `bg-orange-500` |
| Green | `bg-green-500` |
| Emerald | `bg-emerald-500` |
| Indigo | `bg-indigo-500` |
| Red | `bg-red-500` |

### Add real photos to gadgets

1. Put photos in `public/images/tech/` (create the folder if needed)
2. In the file, find the placeholder SVG inside each gadget card and replace with:
   ```html
   <img src="/whoistul/images/tech/macbook.jpg" alt="MacBook Air M2" class="w-full h-full object-cover" />
   ```

---

## Contact

**File:** `src/pages/contact.astro`

### Change contact links

Find the `contactMethods` array:
```javascript
const contactMethods = [
  {
    label: 'ksurapas@hotmail.com',
    href: 'mailto:ksurapas@hotmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/surapas-kongjantra',
    icon: 'linkedin',
  },
];
```

Edit the `label` (display text) and `href` (link URL).

### Add a new contact method

Add a new block. Available icons: `email`, `linkedin`, `github`
```javascript
{
  label: 'GitHub',
  href: 'https://github.com/ksurapas',
  icon: 'github',
},
```

---

## General Tips

- **Always commit and push** after making changes. The site rebuilds automatically in 1-2 minutes.
- **Image file names**: Use lowercase with hyphens, no spaces. Good: `my-photo.jpg`. Bad: `My Photo.JPG`.
- **Image formats**: JPG for photos, PNG for graphics, GIF for animations, WebP for smaller files.
- **Image sizes**: Keep under 2MB. Compress at https://squoosh.app if needed.
- **Test on GitHub**: After pushing, check the Actions tab to make sure the build passed (green checkmark).
- **Undo a mistake**: If something breaks, you can revert on GitHub by going to the commit history and clicking "Revert".
