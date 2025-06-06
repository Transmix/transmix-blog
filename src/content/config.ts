import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      image: z.string().optional(),
      pubDate: z.date(),
    }),
  }),
};