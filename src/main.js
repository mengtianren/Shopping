// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

import App from './App'
import store from './store'
import '../static/js/rem'
import '../static/css/public.less'

import VueCookies from 'vue-cookies'
import { LoadingPlugin, Group, Box, XButton, XInput, AlertPlugin  } from 'vux'
Vue.use(VueCookies)
Vue.use(LoadingPlugin)
Vue.component('group', Group)
Vue.component('box', Box)
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)
Vue.use(AlertPlugin)
// Vue.directive('transfer-dom', TransferDom)

// 或者umd方式
// 引入构建的js文件
// Vue.use(vuxLoadingPlugin)
Vue.use(VueRouter)

const super1 = {
  path: 'super',
  meta: {title: '分类'},
  component: () => import('./components/Super'),
  children: [
    {
      path: 'market',
      meta: { title: '全部商品' },
      component: () => import('./components/Super/Market')
    }
  ]
}
const User = {
  path: '/login',
  name: 'login',
  meta: {title: '登录'},
  component: () => import('./components/Login')
}
const routes = [
  User,
  {
    path: '/',
    meta: {title: '首页'},
    component: () => import('./components/Index'),
    redirect: '/home',
    children: [
      {path: 'home', meta: {title: '首页'}, component: () => import('./components/Home')},
      super1,
      {path: 'user', meta: {title: '个人中心', user: true}, component: () => import('./components/User')},
      {path: 'shop', meta: {title: '购物车', user: true}, component: () => import('./components/Shop')}
    ]
  }, {
    path: '/details/:id',
    name: 'details',
    meta: {title: '商品详情'},
    component: () => import('./components/Details')
  },
  {
    path: '/news/:id',
    name: 'news',
    meta: {title: '新闻详情'},
    component: () => import('./components/News')
  },
  {
    path: '/order/:type',
    name: 'order',
    meta: {title: '订单详情', user: true},
    component: () => import('./components/Order')
  },
  {
    path: '/coupon',
    name: 'coupon',
    meta: {title: '我的优惠券', user: true},
    component: () => import('./components/Coupon')
  },
  {
    path: '/appointment',
    name: 'appointment',
    meta: {title: '我的预约'},
    component: () => import('./components/Appointment')
  },
  {
    path: '/favourite',
    name: 'favourite',
    meta: {title: '我的喜欢'},
    component: () => import('./components/Favourite')
  },
  {
    path: '/reward',
    name: 'reward',
    meta: {title: '我的奖品'},
    component: () => import('./components/Reward')
  },
  {
    path: '/address',
    name: 'address',
    meta: {title: '我的地址'},
    component: () => import('./components/Address')
  },
  {
    path: '/gotoorder',
    name: 'gotoorder',
    meta: {title: '确认订单'},
    component: () => import('./components/Gotoorder')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.querySelector('title').innerText = to.meta.title
  store.commit('SetTitle', to.meta.title)
  console.log(to.meta)
  console.log(VueCookies.get('login'))
  if (to.meta.user) {
    if (VueCookies.get('login')) {
      next()
    } else {
      next({name: 'login'})
    }
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  store.commit('SetLoading', false)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    this.$vux.loading.show({
      text: '数据提交中'
    })
  },
  mounted () {
    this.$vux.loading.hide()
  }
}).$mount('#app-box')
