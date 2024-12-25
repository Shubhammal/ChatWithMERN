import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:5100,
    proxy:{
      '/api':{
        target:'http://localhost:5002',
        changeOrigin:true,
      }
    }
  }
})
