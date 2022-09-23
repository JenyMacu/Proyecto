import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Inicial.vue'
import Clientes from '../views/Clientes.vue'
import Productos from '../views/Productos.vue'
import Ventas from '../views/Ventas.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicial',
    name: 'inicial',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: Ventas
  },
  {
    path: '/',
    name: 'login',
    component: Login
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
