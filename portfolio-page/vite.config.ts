// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: 'dist',
    assetsDir: '.',
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    esbuild: {
      loader: {
        '.node': 'file',
      },
    },
  },
});
