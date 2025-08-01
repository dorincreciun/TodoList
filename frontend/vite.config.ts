import {defineConfig} from 'vite'
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({command}) => {
    return {
        root: __dirname,
        base: command === 'build' ? '/TodoList/' : '/',
        plugins: [
            react(),
            tailwindcss(),
        ],
        build: {
            outDir: 'dist',
            emptyOutDir: true,
        },
    }
})
