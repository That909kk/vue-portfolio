import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import routesData from '../data/routes.json'

// Map component names to actual component objects
const componentMap: Record<string, any> = {
  Home,
  About,
  Skills,
  Projects,
  Contact
}

// Convert the JSON data to actual route records
const routes: Array<RouteRecordRaw> = routesData.map(route => ({
  path: route.path,
  name: route.name,
  component: componentMap[route.component]
}))

const router = createRouter({
  history: createWebHistory('/vue-portfolio/'),
  routes
})

export default router
