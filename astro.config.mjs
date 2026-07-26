import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://journalingenred.vercel.app',
  build: {
    format: 'file',
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
