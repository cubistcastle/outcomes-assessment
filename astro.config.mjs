import { defineConfig } from 'astro/config';
import sassGlobImports from "vite-plugin-sass-glob-import";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config


export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [sassGlobImports()],
  },
});