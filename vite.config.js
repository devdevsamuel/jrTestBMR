import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jrTestBMR/', // nombre del repositorio importante para GitHub Pages
  build: { // Configuración de la carpeta de salida
    outDir: 'docs'
  },
  plugins: [react()],
});

