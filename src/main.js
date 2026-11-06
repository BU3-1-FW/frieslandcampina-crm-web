import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import MemberPage from './views/MemberPage.vue'
import TagDashboard from './views/TagDashboard.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/members' },
      { path: 'members', component: MemberPage },
      { path: 'dashboard', component: TagDashboard }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
