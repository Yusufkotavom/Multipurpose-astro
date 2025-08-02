import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    authorSlug: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    publishedDate: z.date(),
    readTime: z.string(),
    image: z.string().optional(),
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string(),
    socials: z.record(z.string()).optional(),
  }),
});

const landing = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      cta: z.string(),
      image: z.string(),
    }),
    colors: z.object({
      primary: z.string(),
      secondary: z.string(),
      accent: z.string(),
    }),
    services: z.array(z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      icon: z.string(),
    })),
    whyUs: z.array(z.string()),
    testimonials: z.array(z.object({
      name: z.string(),
      role: z.string(),
      content: z.string(),
      rating: z.number(),
    })),
    contact: z.object({
      phone: z.string(),
      whatsapp: z.string(),
      address: z.string(),
      hours: z.string(),
    }),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

export const collections = {
  blog,
  authors,
  landing,
};