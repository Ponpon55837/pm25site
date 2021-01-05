import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'
import './style/main.css'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
