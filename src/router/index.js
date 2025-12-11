import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Contact from '../view/Contact.vue'
import About from '../view/About.vue'
import Kelas from '@/view/Kelas.vue'
import Jadwal from '@/view/Jadwal.vue'
import KelasDetail from '@/view/KelasDetail.vue'
import AboutMe from '@/view/AboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/kelas',
    name: 'Kelas',
    component: Kelas
  },
  {
    path: '/kelas/:className',
    name: 'KelasDetail',
    component: KelasDetail
  },
  {
    path: '/jadwal',
    name: 'Jadwal',
    component: Jadwal
  },
  {
    path: '/saya',
    name: 'Saya',
    component: AboutMe
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router