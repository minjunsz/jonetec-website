// @ts-check
import { defineConfig } from 'astro/config';

import yaml from '@rollup/plugin-yaml';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), yaml()]
  },
  integrations: [sitemap()],
  site: "https://jonetec.co.kr",
});