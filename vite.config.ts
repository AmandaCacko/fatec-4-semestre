import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4173,
    strictPort: true,
    origin: "http://0.0.0.0:4173",
    hmr: {
      clientPort: 80
    },
    watch: {
      usePolling: true
    }
  }
})
