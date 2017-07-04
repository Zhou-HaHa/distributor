import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HeaderDis from '@/components/HeaderDis'
import Home from '@/view/Home'
// import NavDis from './components/NavDis'
// import ContentDis from './components/ContentDis'
// import FooterDis from './components/FooterDis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Hello',
      component: Hello,
      hidden: true
    }, {
      path: '/',
      name: '登陆/权限',
      component: Home,
      children: [
        {path: '/superadmin', component: HeaderDis, name: '头文件1'},
        {path: '/permission', component: HeaderDis, name: '头文件2'},
        {path: '/record', component: HeaderDis, name: '头文件3'}
      ]
    }, {
      path: '/',
      name: '客户管理',
      component: Home,
      children: [
        {path: '/search', component: HeaderDis, name: '头文件4'},
        {path: '/permission', component: HeaderDis, name: '头文件5'},
        {path: '/record', component: HeaderDis, name: '头文件6'}
      ]
    }
  ]
})
