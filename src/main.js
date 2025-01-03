import { createApp } from 'vue'
import './style.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia'
import appRoutes from "./Routes/appRoutes.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as Heroicons from "@heroicons/vue/24/solid/index.js"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: appRoutes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

for (const [key, component] of Object.entries(Heroicons)) {
    app.component(key, component)
}
app.use(router)


app.mount('#app')
