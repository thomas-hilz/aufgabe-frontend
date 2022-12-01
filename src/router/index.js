import { createRouter, createWebHistory } from 'vue-router'
import Registrierung from "../components/Registrierung.vue";
import Login from "../components/Login.vue";
import Productstore from "../components/Productstore.vue";

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/registrierung', name: Registrierung, component: Registrierung },
  { path: '/login', name: Login, component: Login },
  { path: '/productstore', name: Productstore, component: Productstore },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
