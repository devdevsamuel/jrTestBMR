import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', 
  build: { // Configuración de la carpeta de salida
    outDir: 'dist' // 'dist' para que coincida con la configuración de netlify
  },
  plugins: [react()],
});

