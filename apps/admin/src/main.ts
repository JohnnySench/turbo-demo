import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/instance.ts'

createApp(App).use(router).mount('#app')
