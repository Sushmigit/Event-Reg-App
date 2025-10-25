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
      // Provide local replacements for dangerous-html imports to avoid adding
      // an older peer-dependent package to the project.
      'dangerous-html/react': path.resolve(__dirname, 'src/libs/dangerous-html/react.js'),
      'dangerous-html': path.resolve(__dirname, 'src/libs/dangerous-html/index.js'),
      'react-helmet': path.resolve(__dirname, 'src/libs/react-helmet/index.js'),
    },
  },
})
