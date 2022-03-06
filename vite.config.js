import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {
      BASE_URL: "http://localhost:3001/"
    },
  },
  runtimeCompiler: true,
})