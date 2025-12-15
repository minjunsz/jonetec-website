import { defineCollection, z } from 'astro:content';

const noticeCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string()
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

const productsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        category: z.string(),
        name: z.string(),
        summary: z.string(),
        image: z.string(),
        attachments: z.array(z.object({
            filename: z.string(),
            fileUrl: z.string()
        })).optional(),
        specs: z.array(z.object({
            label: z.string(),
            value: z.string()
        })).optional(),
        // Description will be the markdown body
        // additionalDescription will be part of the body or a separate field? 
        // User asked to use markdown for additionalDescription.
        // So the main description should probably stay as a field or move to body?
        // Let's keep `description` field for the short intro, and use the Body for "Additional Information".
        // OR move the main description to the body since it's "Description".
        // The user specifically asked "Can I use markdown files for additional description placement?".
        // So let's make the *body* of the markdown file the "Additional Description".
        description: z.string(),
    }),
});

export const collections = {
    'notice': noticeCollection,
    'archive': archiveCollection,
    'products': productsCollection,
};
