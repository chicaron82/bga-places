import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// HashRouter is used, so no base-path rewrite is needed for static hosting
// (GitHub Pages / Vercel) — every entry is shareable at /#/place/<slug>.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
