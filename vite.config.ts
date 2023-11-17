// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_APP_BASE,
    server: {
      port: parseInt(env.VITE_APP_PORT),
      host: '127.0.0.1'      
    },
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})