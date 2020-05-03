import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import registerSys from './modules/sys'
import registerlogin from './modules/login'
const routes = [
  registerSys(Layout),
  ...registerlogin(),
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: { title: '仪表盘' },
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
]
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
//路由配置
export default new VueRouter({
  routes,
})
