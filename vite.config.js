import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@data': path.resolve(process.cwd(), 'src/data'),
      // eslint-disable-next-line no-undef
      '@components': path.resolve(process.cwd(), 'src/components'),
      // Add more as needed
    },
  },
})
