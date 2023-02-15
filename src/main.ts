import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import {createRouter,createWebHistory} from "vue-router";
import router from "./router";

const app = createApp(App)
// 5. 创建并挂载根实例
app.use(router)
app.mount('#app')
