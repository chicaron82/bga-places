import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Deployed on Vercel, which serves from the root domain — so base is '/'.
// HashRouter means no SPA rewrite is needed either: every entry is shareable
// at <domain>/#/place/<slug>. (assetUrl() resolves public photos against
// BASE_URL, so it follows this automatically.)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
