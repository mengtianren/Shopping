
const super1 = {
  path: 'super',
  meta: {title: '分类'},
  component: () => import('../components/Super'),
  children: [
    {
      path: 'market',
      meta: { title: '全部商品' },
      component: () => import('../components/Super/Market')
    }
  ]
}
const User = {
  path: '/login',
  name: 'login',
  meta: {title: '登录'},
  component: () => import('../components/Login')
}
export const routes = [
  User,
  {
    path: '/',
    meta: {title: '首页'},
    component: () => import('../components/Index'),
    redirect: '/home',
    children: [
      {path: 'home', meta: {title: '首页'}, component: () => import('../components/Home')},
      super1,
      {path: 'user', meta: {title: '个人中心', user: true}, component: () => import('../components/User')},
      {path: 'shop', meta: {title: '购物车', user: true}, component: () => import('../components/Shop')}
    ]
  }, {
    path: '/details/:id',
    name: 'details',
    meta: {title: '商品详情'},
    component: () => import('../components/Details')
  },
  {
    path: '/news/:id',
    name: 'news',
    meta: {title: '新闻详情'},
    component: () => import('../components/News')
  },
  {
    path: '/order/:type',
    name: 'order',
    meta: {title: '订单详情', user: true},
    component: () => import('../components/Order')
  },
  {
    path: '/coupon',
    name: 'coupon',
    meta: {title: '我的优惠券', user: true},
    component: () => import('../components/Coupon')
  },
  {
    path: '/appointment',
    name: 'appointment',
    meta: {title: '我的预约'},
    component: () => import('../components/Appointment')
  },
  {
    path: '/favourite',
    name: 'favourite',
    meta: {title: '我的喜欢'},
    component: () => import('../components/Favourite')
  },
  {
    path: '/reward',
    name: 'reward',
    meta: {title: '我的奖品'},
    component: () => import('../components/Reward')
  },
  {
    path: '/address',
    name: 'address',
    meta: {title: '我的地址'},
    component: () => import('../components/Address')
  },
  {
    path: '/gotoorder',
    name: 'gotoorder',
    meta: {title: '确认订单'},
    component: () => import('../components/Gotoorder')
  }
]
