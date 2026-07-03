import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// HashRouter means static hosting needs no rewrite — every entry is shareable
// at <base>#/place/<slug>. On a GitHub Pages PROJECT page the site lives under
// /bga-places/, so assets need that base in the build; dev stays at root.
// (If this ever moves to a custom domain, set base back to '/'.)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/bga-places/' : '/',
}))
