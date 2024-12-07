import { createApp } from 'vue'
import './style.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import appRoutes from "./Routes/appRoutes.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: appRoutes,
})
const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)


app.mount('#app')
