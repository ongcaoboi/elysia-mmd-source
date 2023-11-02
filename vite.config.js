import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'static',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html',
      }
    }
  }
})