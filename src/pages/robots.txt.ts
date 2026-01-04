import type { APIRoute } from 'astro';

const robotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`.trim();

export const GET: APIRoute = (context) => {
    const site = context.site ?? new URL("https://jonetec.co.kr");
    const sitemapURL = new URL('sitemap-index.xml', site);
    return new Response(robotsTxt(sitemapURL));
};
