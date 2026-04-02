import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Vite config.
 *
 * cacheDir is redirected to /storage (the NTFS external drive with 95 GB free)
 * because the root filesystem (/home) is nearly full.
 * The cache only needs to be writable — execute permissions are not required.
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  cacheDir: '/storage/vite-cache/itc-website',
})
