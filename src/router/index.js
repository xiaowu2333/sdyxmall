import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'




Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/enterprise',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/center',
    component: () => import('../views/Center.vue'),

  },
  {
    path: '/center/setting',
    component: () => import('../views/center/setting.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/product/:id',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router