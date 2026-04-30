import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
    coverImage: image().optional(),
    coverImageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const journey = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    order: z.number().optional(),
  }),
});

const hobbies = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.enum(['photography', 'travel', 'sports', 'motorsport']),
    description: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    order: z.number().optional(),
  }),
});

const now = defineCollection({
  type: 'content',
  schema: z.object({
    lastUpdated: z.date(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { blog, journey, hobbies, now, pages };
