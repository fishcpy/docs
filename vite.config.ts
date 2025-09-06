import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'docs.fis.ink'
    ]
  }
})