import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'link-client-media-dirs',
      async closeBundle() {
        try {
          // @ts-ignore
          const fs = await import('fs');
          // @ts-ignore
          const path = await import('path');
          const mediaDirs = ['desgien', 'vedio'];
          for (const dir of mediaDirs) {
            const srcDir = path.resolve(dir);
            const destDir = path.resolve('dist', dir);
            if (fs.existsSync(srcDir) && !fs.existsSync(destDir)) {
              fs.symlinkSync(srcDir, destDir, 'junction');
            }
          }
        } catch {
          // Ignore if symlink/junction already exists
        }
      },
    },
  ],
  server: {
    port: 3000,
    open: false,
    host: true,
  },
});
