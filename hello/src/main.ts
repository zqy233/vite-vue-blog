import { createApp } from "vue"
import App from "./App.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { createPinia } from "pinia"

// 自动生成的虚拟路由信息
import routes from "virtual:generated-pages"
console.log(routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 创建pinia的store
const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia).mount("#app")
