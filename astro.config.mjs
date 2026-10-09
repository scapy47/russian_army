// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// import cloudflare from '@astrojs/cloudflare';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  // adapter: cloudflare(),

  integrations: [react(), svelte(), tunnel()],

  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Roboto",
    cssVariable: "--font-roboto",
  }],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      optimizeDeps: {
        noDiscovery: true,
        exclude: ['some-problematic-package']
      }
    }
  }
});
