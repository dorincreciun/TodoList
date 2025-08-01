import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  root: __dirname,
  base: '/TodoList/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})