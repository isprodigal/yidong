import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/move/:id',
      component: () => import('./beforeRouteUpdate/move')
    }
  ]
})
// // 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = !!localStorage.elementUI
//   if (to.path === '/Login') {
//     next()
//   } else {
//     // 是否在登录状态下
//     isLogin ? next() : next('/Login')
//   }
// })
export default router
