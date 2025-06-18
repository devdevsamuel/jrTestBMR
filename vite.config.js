import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/', 
  build: {
    outDir: 'dist', // Carpeta de salida para Netlify
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '.' // Lo copia directamente a la raíz de 'dist'
        }
      ]
    })
  ]
});
