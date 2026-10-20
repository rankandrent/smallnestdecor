import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Articles are plain Markdown files in src/content/articles/.
 * Dropping a new .md file with valid frontmatter automatically adds it
 * to /blog, its category page, the home "latest" grid and the sitemap.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      'paint-colors',
      'small-space-decor',
      'organization-storage',
      'renter-friendly',
      'living-room',
      'bedroom',
      'kitchen',
      'bathroom',
    ]),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    heroImage: z.string(),
    heroCaption: z.string().optional(),
    pinImage: z.string(),
    pinTitle: z.string(),
    pinDescription: z.string(),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    products: z
      .array(
        z.object({
          name: z.string(),
          note: z.string(),
          url: z.string(),
          image: z.string(),
        }),
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
