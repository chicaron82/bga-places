// Resolve a public-folder path against Vite's BASE_URL so photos load whether
// the site is served from root (dev, custom domain) or a project subpath
// (GitHub Pages /bga-places/). Leaves data: and http(s) URLs untouched.
export function assetUrl(path: string): string {
  if (!path) return path
  if (/^(https?:|data:|blob:)/.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
