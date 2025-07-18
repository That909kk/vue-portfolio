import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import routes from './router/index'

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
