import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {
      BASE_URL: "",
      VUE_APP_API_KEY: "9be7b239-557b-4c10-9775-78cadfc555e9",
    },
  },
  runtimeCompiler: true,
})