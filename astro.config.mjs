// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  integrations: [react(), svelte(), tunnel()],

  vite: {
    plugins: [tailwindcss()]
  }
});