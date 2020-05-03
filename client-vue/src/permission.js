// 全局路由控制
import { getCookie } from '@/utils/cookie'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['forgetPwd', 'login'] // 表示未登录 可访问页面
NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!getCookie('token') && !whiteList.includes(to.name)) {
    // 判断是否已经登录且前往的页面不是登录页
    next({ name: 'login' })
    NProgress.done()
  } else if (getCookie('token') && to.name === 'login') {
    // 判断是否已经登录且前往的是登录页
    next({ name: 'dashboard' })
    NProgress.done()
  } else {
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
  window.scrollTo(0, 0)
})
