import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: { manifest: true, outDir: './dist'},
  base:  '/',
  root: './src',
  plugins: [react()],
})