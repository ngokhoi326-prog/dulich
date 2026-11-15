import {defineConfig} from 'vite';
import {fileURLToPath, URL} from 'node:url';

export default defineConfig({
  resolve: {alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}},
  esbuild: {jsx: 'automatic'},
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return;
        warn(warning);
      },
      output: {
        manualChunks(id) {
          if (id.includes('commonjsHelpers')) return 'react-vendor';
          if (!id.includes('/node_modules/')) return;
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react-vendor';
          if (/\/node_modules\/(motion|motion-dom|motion-utils|framer-motion)\//.test(id)) return 'motion-vendor';
          if (id.includes('/@animate-ui/') || id.includes('/@radix-ui/') || id.includes('/radix-ui/')) return 'animated-controls';
          if (id.includes('/gsap/')) return 'scroll-effects';
        }
      }
    }
  }
});
