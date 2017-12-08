import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    // 默认路由
    {
      path: '*',
      component: Login
    }
  ]
})
