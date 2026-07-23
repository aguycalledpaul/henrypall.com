import { defineConfig } from 'astro/config';

// The site currently deploys into the /beta preview folder on the server.
// When we go live at the domain root, change `base` to '/'.
export default defineConfig({
  site: 'https://henrypall.com',
  base: '/beta',
});
