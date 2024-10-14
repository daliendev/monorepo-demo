import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // Symfony Back-end URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Rewrites the path
      }
    }
  }
})
