import { createRouter, createWebHistory } from 'vue-router'
import Solutions from '../views/Solutions.vue'
import EventDetails from '../views/EventDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Solutions',
    component: Solutions
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
   
  },
  {
    path: '/about',
    name: 'About',
    component: About
   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
