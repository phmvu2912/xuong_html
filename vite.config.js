// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        store: resolve(__dirname, '/store.html'),
        cart: resolve(__dirname, '/cart.html'),
        details: resolve(__dirname, '/details.html'),
        checkout: resolve(__dirname, '/checkout.html'),
        login: resolve(__dirname, '/login.html'),
      },
    },
  },
})