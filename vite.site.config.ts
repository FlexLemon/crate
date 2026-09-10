import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  root: path.join(__dirname, 'site'),
  publicDir: path.join(__dirname, 'public'),
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5174,
    strictPort: true,
  },
  build: {
    outDir: path.join(__dirname, 'dist-site'),
    emptyOutDir: true,
  },
})
