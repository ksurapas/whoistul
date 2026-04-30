# Requirements Document

## Introduction

A personal journey and brand website for "Tul" — a Data Analyst at PwC Thailand, Economics graduate from Chulalongkorn University, with interests in photography, travel, badminton, motorsport (F1), and AI/tools. The website aims to present a minimal, clean, modern, and slightly premium aesthetic (Apple-like) that is personal yet professional, visual-first, and reflects structured thinking. Built with Astro, deployed to GitHub Pages at www.whoistul.com, with an admin CMS for non-technical content management.

## Glossary

- **Website**: The personal journey/brand website hosted at www.whoistul.com
- **Visitor**: Any person browsing the website
- **Owner**: The website owner (Tul) who manages content
- **CMS**: Content Management System — an admin interface for editing content without touching code
- **Navigation_Bar**: The top-level navigation component with links to Home, Journey, Blog, Hobbies, and Contact
- **Hero_Section**: The prominent introductory area at the top of the Homepage featuring headline, subheadline, and visual
- **Blog_Engine**: The system responsible for rendering, listing, and dating blog posts
- **Hobbies_Page**: The page with section breakdowns for Photography, Travel, Sports, and Motorsport
- **Contact_Section**: The page or section providing ways for visitors to reach the Owner
- **Journey_Page**: The page showcasing the Owner's career timeline and personal milestones
- **Responsive_Layout**: A layout system that adapts to desktop, tablet, and mobile screen sizes
- **Design_System**: The collection of fonts, colors, spacing, and visual rules governing the website's appearance
- **README**: A documentation file teaching the Owner all steps for setup, deployment, and content management
- **GitHub_Pages**: The static hosting platform used to deploy the Website
- **Astro_Framework**: The static site generator framework used to build the Website

## Requirements

### Requirement 1: Top-Level Navigation

**User Story:** As a Visitor, I want a clear top-level navigation bar, so that I can easily access all sections of the website.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL display links to Home, Journey, Blog, Hobbies, and Contact pages
2. WHEN a Visitor clicks a navigation link, THE Navigation_Bar SHALL navigate the Visitor to the corresponding page
3. WHILE the Visitor is on a specific page, THE Navigation_Bar SHALL visually indicate the currently active page link
4. WHEN the viewport width is less than 768 pixels, THE Navigation_Bar SHALL collapse into a mobile-friendly hamburger menu
5. WHEN a Visitor opens the hamburger menu on mobile, THE Navigation_Bar SHALL display all navigation links in a vertical overlay

### Requirement 2: Homepage — Hero Section

**User Story:** As a Visitor, I want to see a compelling hero section on the homepage, so that I immediately understand who Tul is and what the website is about.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a headline, a subheadline, and a visual element (photograph or image)
2. THE Hero_Section SHALL use a layout that places the visual element prominently alongside the text content
3. THE Hero_Section SHALL render the headline in the primary display font at a size no smaller than 40px on desktop viewports
4. WHEN the viewport width is less than 768 pixels, THE Hero_Section SHALL stack the text and visual elements vertically

### Requirement 3: Homepage — Section Layout

**User Story:** As a Visitor, I want the homepage to have distinct content sections, so that I can quickly scan what the website offers.

#### Acceptance Criteria

1. THE Website SHALL display the Homepage with the following sections in order: Hero Section, Brief Introduction, Featured Content (latest blog posts or selected hobbies), and a call-to-action linking to the Journey page
2. WHEN a Visitor scrolls the Homepage, THE Website SHALL present each section with consistent vertical spacing of at least 64px between sections
3. THE Website SHALL display a maximum of 3 featured content cards on the Homepage

### Requirement 4: Journey Page — Career Timeline

**User Story:** As a Visitor, I want to see Tul's career and personal milestones on a timeline, so that I can understand the progression and story.

#### Acceptance Criteria

1. THE Journey_Page SHALL display milestones in a vertical timeline layout ordered chronologically
2. WHEN a Visitor views the Journey Page, THE Journey_Page SHALL display each milestone with a title, date, short description, and an optional image
3. THE Journey_Page SHALL support at least 20 milestone entries without layout degradation
4. WHEN the viewport width is less than 768 pixels, THE Journey_Page SHALL render the timeline in a single-column layout

### Requirement 5: Blog Page — Post Listing and Date Display

**User Story:** As a Visitor, I want to browse blog posts with visible dates, so that I can read content in chronological context.

#### Acceptance Criteria

1. THE Blog_Engine SHALL display a list of all blog posts sorted by date in descending order (newest first)
2. THE Blog_Engine SHALL display the publication date for each blog post in the format "DD MMM YYYY" (e.g., "15 Jun 2025")
3. WHEN a Visitor clicks on a blog post title or card, THE Blog_Engine SHALL navigate the Visitor to the full blog post page
4. THE Blog_Engine SHALL render blog post content from Markdown files with support for headings, paragraphs, images, code blocks, and links
5. WHEN the Owner creates a blog post, THE Blog_Engine SHALL allow the Owner to specify a custom publication date in the post frontmatter

### Requirement 6: Hobbies Page — Section Breakdown per Topic

**User Story:** As a Visitor, I want to explore Tul's hobbies organized by topic with dedicated sections, so that I can dive into areas that interest me.

#### Acceptance Criteria

1. THE Hobbies_Page SHALL display four topic sections: Photography, Travel, Sports, and Motorsport
2. WHEN a Visitor views the Hobbies Page, THE Hobbies_Page SHALL display each topic section with a title, introductory text, and a visual gallery or content grid
3. THE Hobbies_Page SHALL allow navigation between topic sections via anchor links or tabs within the page
4. WHEN the viewport width is less than 768 pixels, THE Hobbies_Page SHALL stack topic sections vertically with full-width layouts
5. THE Hobbies_Page SHALL display Photography content in a masonry or grid gallery layout showcasing images prominently

### Requirement 7: Contact Page

**User Story:** As a Visitor, I want a way to contact Tul, so that I can reach out for professional or personal inquiries.

#### Acceptance Criteria

1. THE Contact_Section SHALL display at least two contact methods (e.g., email link, social media links)
2. THE Contact_Section SHALL open external links (social media, email) in a new browser tab
3. THE Contact_Section SHALL present contact information in a clean, minimal layout consistent with the overall Design_System

### Requirement 8: Responsive Design

**User Story:** As a Visitor, I want the website to look good on any device, so that I can browse comfortably on desktop, tablet, or mobile.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL adapt all pages to three breakpoints: mobile (below 768px), tablet (768px to 1024px), and desktop (above 1024px)
2. THE Responsive_Layout SHALL ensure all images scale proportionally without distortion across all breakpoints
3. THE Responsive_Layout SHALL maintain readable text sizes with a minimum body font size of 16px across all breakpoints
4. THE Responsive_Layout SHALL ensure all interactive elements (links, buttons, menu items) have a minimum touch target size of 44x44 pixels on mobile

### Requirement 9: Design System — Typography, Color, and Spacing

**User Story:** As a Visitor, I want a visually cohesive and premium-feeling website, so that the experience feels polished and intentional.

#### Acceptance Criteria

1. THE Design_System SHALL use a font pairing of a sans-serif display font (e.g., Inter or Satoshi) for headings and a complementary sans-serif font for body text
2. THE Design_System SHALL use a minimal, cool-tone color palette with a primary background of near-white (#FAFAFA or similar), primary text of near-black (#1A1A1A or similar), and one accent color
3. THE Design_System SHALL enforce consistent spacing using an 8px grid system for margins and padding
4. THE Design_System SHALL apply a maximum content width of 1200px centered on the page for desktop viewports
5. THE Design_System SHALL use image treatments that are clean and slightly moody (desaturated or cool-toned) to maintain visual consistency

### Requirement 10: CMS / Admin Page for Content Management

**User Story:** As the Owner, I want an admin interface to edit content without touching code, so that I can update the website easily as a non-technical user.

#### Acceptance Criteria

1. THE CMS SHALL provide a web-based admin interface accessible via a dedicated URL path (e.g., /admin)
2. WHEN the Owner logs into the CMS, THE CMS SHALL allow the Owner to create, edit, and delete blog posts
3. WHEN the Owner edits a blog post via the CMS, THE CMS SHALL allow the Owner to set or change the publication date
4. THE CMS SHALL allow the Owner to edit text content and images on the Homepage, Journey, Hobbies, and Contact pages
5. WHEN the Owner saves changes in the CMS, THE CMS SHALL commit the changes to the GitHub repository, triggering a redeployment via GitHub Pages
6. THE CMS SHALL provide a rich text or Markdown editor for blog post content

### Requirement 11: GitHub Pages Deployment

**User Story:** As the Owner, I want the website deployed to GitHub Pages with a custom domain, so that visitors can access it at www.whoistul.com.

#### Acceptance Criteria

1. THE Website SHALL be deployable to GitHub_Pages using a GitHub Actions workflow
2. THE Website SHALL serve content at the custom domain www.whoistul.com
3. WHEN the Owner pushes changes to the main branch of the GitHub repository, THE GitHub_Pages SHALL automatically rebuild and redeploy the Website
4. THE Website SHALL include a CNAME file configured for the custom domain www.whoistul.com
5. THE Website SHALL be deployable from a device without Node.js installed, using only git and GitHub Actions for building
6. THE GitHub Actions workflow SHALL handle all build steps (installing dependencies, building the site) so that the Owner does not need Node.js locally

### Requirement 12: Comprehensive README Documentation

**User Story:** As the Owner, I want a detailed README that teaches me all setup, deployment, and content editing steps, so that I can manage the website independently without coding knowledge.

#### Acceptance Criteria

1. THE README SHALL include step-by-step instructions for initial project setup (cloning the repository, installing dependencies)
2. THE README SHALL include step-by-step instructions for deploying the Website to GitHub_Pages
3. THE README SHALL include step-by-step instructions for configuring the custom domain www.whoistul.com
4. THE README SHALL include instructions for changing images (where images are stored, naming conventions, supported formats)
5. THE README SHALL include instructions for editing text content (how to modify page copy, blog posts, and frontmatter fields)
6. THE README SHALL include instructions for using the CMS admin interface
7. THE README SHALL use plain language suitable for a non-technical user, avoiding unexplained jargon
8. THE README SHALL include two separate deployment workflows: (a) "Firm Device Workflow" for deploying from a restricted device using only git and GitHub (no Node.js required), and (b) "Personal Device Workflow" for cloning the project onto another device with Node.js for local preview and development
9. THE README SHALL include instructions for creating a GitHub Personal Access Token for authentication when pushing from a device without GitHub CLI
10. THE README SHALL include instructions for pulling the project onto a personal device, installing dependencies, and running a local development server

### Requirement 13: Photography and Visual-First Approach

**User Story:** As a Visitor, I want the website to showcase photography and visuals prominently, so that the visual-first brand identity is immediately apparent.

#### Acceptance Criteria

1. THE Website SHALL use high-quality images as primary visual elements on the Homepage, Hobbies Page, and Journey Page
2. THE Website SHALL optimize all images for web delivery using modern formats (WebP or AVIF) with fallbacks
3. THE Website SHALL lazy-load images that are below the initial viewport fold to maintain fast page load times
4. WHEN an image fails to load, THE Website SHALL display a styled placeholder with appropriate alt text

### Requirement 14: Signature Element — "Now" Page

**User Story:** As a Visitor, I want to see what Tul is currently focused on, so that the website feels alive and up-to-date.

#### Acceptance Criteria

1. THE Website SHALL include a "Now" section accessible from the Homepage or Navigation_Bar that displays what the Owner is currently working on, reading, or exploring
2. THE CMS SHALL allow the Owner to update the "Now" section content without touching code
3. THE Website SHALL display the last-updated date on the "Now" section so Visitors know how recent the information is

### Requirement 15: Signature Element — Interactive Hover Effects

**User Story:** As a Visitor, I want subtle interactive elements when browsing, so that the website feels polished and engaging.

#### Acceptance Criteria

1. WHEN a Visitor hovers over a content card or image thumbnail, THE Website SHALL apply a smooth scale or opacity transition (duration between 200ms and 400ms)
2. WHEN a Visitor hovers over a navigation link, THE Navigation_Bar SHALL apply a subtle underline or color transition
3. THE Website SHALL ensure all hover effects degrade gracefully on touch devices (no hover-dependent content)

### Requirement 16: SEO and Performance Basics

**User Story:** As the Owner, I want the website to be discoverable and fast-loading, so that visitors can find and access it easily.

#### Acceptance Criteria

1. THE Website SHALL include appropriate meta tags (title, description, Open Graph) on every page
2. THE Website SHALL generate a sitemap.xml file for search engine indexing
3. THE Website SHALL achieve a Lighthouse performance score of at least 90 on desktop
4. THE Website SHALL use semantic HTML elements (header, main, nav, article, section, footer) for accessibility and SEO

### Requirement 17: Writing Style and Tone

**User Story:** As the Owner, I want a defined writing style guideline, so that all content on the website maintains a consistent, personal-yet-professional tone.

#### Acceptance Criteria

1. THE README SHALL include a writing style guide section with tone guidelines (thoughtful, concise, personal but not cringe, intellectual without being pretentious)
2. THE README SHALL include at least 2 examples of good writing and 2 examples of bad writing for personal brand content
3. THE README SHALL include structural guidelines for blog posts (recommended length, use of headings, paragraph structure)
