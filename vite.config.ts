import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join, parse, resolve } from "path";
import path from 'path';

interface Entry {
  dir: string;
  base: string;
  name: string;
  ext: string;
}

function entryPoints(...paths: string[]): Record<string, string> {
  const entries = paths.map(parse).map((entry: Entry) => {
    const { dir, base, name, ext } = entry;
    const key: string = join(dir, name);
    const path: string = resolve(__dirname, dir, base);
    return [key, path];
  });
  
  const config: Record<string, string> = Object.fromEntries(entries);
  return config;
}

export default defineConfig({
  base: '',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: entryPoints(
        "index.html",
        "404.html",
      ),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  assetsInclude: ['**/*.md'],
});