import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import {createRouter,createWebHistory} from "vue-router";
import router from "./router";
import '@/styles/index.css'
import '@/styles/tailwind.css'



const app = createApp(App)
const pinia = createPinia()
// 5. 创建并挂载根实例
app.use(router)
app.use(pinia)
app.mount('#app')
