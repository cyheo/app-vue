import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'
import PageOne from '@/components/PageOne.vue'
import PageTwo from '@/components/PageTwo.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/one', component: PageOne },
  { path: '/two', component: PageTwo }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;