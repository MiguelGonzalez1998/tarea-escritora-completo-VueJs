import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Marguerite',
    name: 'Marguerite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Marguerite" */ '../views/Marguerite.vue')
  },
  {
    path: '/Escritoras',
    name: 'Escritoras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Escritoras" */ '../views/Escritoras.vue')
  },
  {
    path: '/Emily',
    name: 'Emily',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Emily" */ '../views/Emily.vue')
  },
  {
    path: '/Virginia',
    name: 'Virginia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Virginia" */ '../views/Virginia.vue')
  },
  {
    path: '/Carme',
    name: 'Carme',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Carme" */ '../views/Carme.vue')
  },
  {
    path: '/Laura',
    name: 'Laura',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Laura" */ '../views/Laura.vue')
  },
  {
    path: '/Maria',
    name: 'Maria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Maria" */ '../views/Maria.vue')
  },
  {
    path: '/Premios',
    name: 'Premios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Premios" */ '../views/Premios.vue')
  },
  {
    path: '/Edicion',
    name: 'Edicion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Edicion" */ '../views/Edicion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
