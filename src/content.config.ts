import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    h1: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Sergio Saturnino'),
    pillarSlug: z.string(),
    priority: z.enum(['alta', 'media', 'baixa']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
