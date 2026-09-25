import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        collections: resolve(__dirname, 'collections.html'),
        products: resolve(__dirname, 'products.html'),
      },
    },
  },
})