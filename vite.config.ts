import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      'dangerous-html/react': path.resolve(__dirname, 'src/libs/dangerous-html/react.js'),
      'dangerous-html': path.resolve(__dirname, 'src/libs/dangerous-html/index.js'),
      'react-helmet': path.resolve(__dirname, 'src/libs/react-helmet/index.js'),
    },
  },
  build: {
    outDir: 'dist', // ✅ explicitly set the build output folder
  },
  base: './',       // ✅ ensures relative paths work on Azure
})

