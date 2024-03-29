import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './',
  server: {
    proxy: {
      '/media': 'http://127.0.0.1:8000',
      '/api': 'http://127.0.0.1:8000'
    }
  }
})
