import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import {createRouter,createWebHistory} from "vue-router";
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
// 5. 创建并挂载根实例
app.use(router)
app.mount('#app')
