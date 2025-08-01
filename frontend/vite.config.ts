import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ command }) => {
  return {
    root: __dirname,
    base: command === 'build' ? '/TodoList/' : '/',
    plugins: [react()],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  }
})
