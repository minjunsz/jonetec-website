import { defineCollection, z } from 'astro:content';

const noticeCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
    }),
});

const archiveCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        fileUrl: z.string().optional(),
    }),
});

export const collections = {
    'notice': noticeCollection,
    'archive': archiveCollection,
};
