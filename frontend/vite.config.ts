import {defineConfig, loadEnv} from 'vite'
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        root: __dirname,
        base: env.VITE_BASE_URL,
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
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
