import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 引入各个组件
import Home from "@/views/Home"


const routes = [
  { path: "/", redirect: "/home" },

  { path: "/index.html", redirect: "/home" },

  { path: "/home", component: Home },

  { path: "/classify", component: () => import("@/views/Classift/Classift")},
  
  {path:'/productList',component:()=>import("@/views/Classift/ProductList")},

  { path: "/eatting", component: () => import("@/views/Eatting") },

  { path: "/cart", component: () => import("@/views/Cart") },

  { path: "/wode", component: () => import("@/views/Wode") },

  { path: "/city", component: () => import("@/views/City") },

  { path: "/error", component: () => import("@/views/error/Error") },

  { path: "*", redirect: "/error" }
]

const router = new VueRouter({
  routes
})

export default router
