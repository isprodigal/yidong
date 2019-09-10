import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: '首页',
      component: home,
    },
    {
      path: '/information',
      name: '百科',
      component: () => import('@/components/information.vue'),
    },
    {
      path:'/disease',
      name:'乙肝详情',
      component: () => import('@/components/disease.vue'),
    },
    {
      path:'/gan',
      name:'肝癌详情',
      component: () => import('@/details/gan.vue'),
    },
    {
      path:'/ganre',
      name:'肝热病详情',
      component: () => import('@/details/ganre.vue'),
    },
    {
      path: '/healthy',
      name: '药品',
      component: () => import('@/components/healthy.vue'),
    },
    {
      path: '/classification',
      name: '药品分类详情',
      component: () => import('@/components/classification.vue'),
    },
    {
      path: '/sj',
      name: '药品详情',
      component: () => import('@/components/sj.vue'),
    },
    {
      path: '/zshxzq',
      name: '中暑了你会喝藿香正气水吗？',
      component: () => import('../details/zshxzq.vue'),
    },
    {
      path: '/smsjs',
      name: '什么是近视？看书也会导致近视吗？',
      component: () => import('../details/smsjs.vue'),
    },
    {
      path: '/reasonable',
      name: ' 合理膳食，餐餐有蔬菜，天天有水果。',
      component: () => import('../details/reasonable.vue'),
    },
    {
      path: '/Nourishing',
      name: ' 养肝护肾，多吃这个菜，价格便宜，一年四季常有，爽口开胃还下饭',
      component: () => import('../details/Nourishing.vue'),
    },
    {
      path: '/Suffer',
      name: ' 拉肚子怎么办 哪些食物吃不得',
      component: () => import('../details/Suffer.vue'),
    },
    {
      path: '/meal',
      name: ' 饭后这些事情千万不要做 伤身呐',
      component: () => import('../details/meal.vue'),
    },{
      path: '/speak',
      name: ' 3岁多小孩不说话怎么办?',
      component: () => import('../details/speak.vue'),
    },{
      path: '/diarrhea',
      name: ' 腹泻吃什么能快速止泻',
      component: () => import('../details/diarrhea.vue'),
    },{
      path: '/eat',
      name: ' 经常吃得太饱会有什么坏处',
      component: () => import('../details/eat.vue'),
    },{
      path: '/Wipes',
      name: ' 这三种物品少往家里买：湿巾 空气清新剂等',
      component: () => import('../details/Wipes.vue'),
    },
    {
      path: '/user',
      name: '个人信息',
      meta: {
        requireLogin: true,  // 添加该字段，表示进入这个路由是需要登录的        
      },
      component: () => import('../components/user.vue'),
    },
    {
      path: '/login',
      name: '登陆',
      component: () => import('../components/login.vue'),
    },
    {
      path: '/register',
      name: '注册',
      component: () => import('../components/register.vue'),
    },
    {
      path: '/Settings',
      name: '个人信息设置',
      meta: {
        requireLogin: true,  // 添加该字段，表示进入这个路由是需要登录的        
      },
      component: () => import('../components/Settings.vue')
    },
    {
      path: '/notice',
      name: '消息通知',
      meta: {
        requireLogin: true,  // 添加该字段，表示进入这个路由是需要登录的        
      },
      component: () => import('../components/notice.vue')
    },
    {
      path: '/follow',
      name: '我的关注',
      meta: {
        requireLogin: true,  // 添加该字段，表示进入这个路由是需要登录的        
      },
      component: () => import('../components/follow.vue')
    },
    {
      path: '/History',
      name: '浏览历史',
      meta: {
        requireLogin: true,  // 添加该字段，表示进入这个路由是需要登录的        
      },
      component: () => import('../components/History.vue')
    },
    {
      path: '/feedback',
      name: '意见反馈',
      meta: {
        requireLogin: true,  // 添加该字段，表示进入这个路由是需要登录的        
      },
      component: () => import('../components/feedback.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition){
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta && record.meta.requireLogin)) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem('loginInfo')) {  // 判断当前用户的登录信息loginInfo是否存在
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next();
  }
});
// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = !!localStorage.vant
//   if (to.path === '/login') {
//     next()
//   } else {
//     // 是否在登录状态下
//     isLogin ? next() : next('/login')
//   }
// })
export default router