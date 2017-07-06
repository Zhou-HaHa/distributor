import Vue from 'vue'
import Router from 'vue-router'
import HeaderDis from '@/components/HeaderDis'
import Home from '@/view/Home'
import AdminLogin from '@/view/admin/Login'
import Login from '@/view/user/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    }, {
      path: '/adminlogin',
      name: 'AdminLogin',
      component: AdminLogin,
      hidden: true
    }, {
      path: '/',
      name: '登陆/权限',
      component: Home,
      children: [
        {path: '/superadmin', component: HeaderDis, name: '超级管理员1'},
        {path: '/permission', component: HeaderDis, name: '分组权限'},
        {path: '/record', component: HeaderDis, name: '管理员操作记录'}
      ]
    }, {
      path: '/',
      name: '客户管理',
      component: Home,
      children: [
        {path: '/search', component: HeaderDis, name: '客户查询'},
        {path: '/permission', component: HeaderDis, name: '经销商申请审核'},
        {path: '/record', component: HeaderDis, name: '系统归属变更审核'}
      ]
    }, {
      path: '/',
      name: '财务管理',
      component: Home,
      children: [
        {path: '/search', component: HeaderDis, name: '经销商账户明细'},
        {path: '/permission', component: HeaderDis, name: '充值/提现申请审核'}
      ]
    }, {
      path: '/',
      name: '产品管理',
      component: Home,
      children: [
        {path: '/search', component: HeaderDis, name: '增加/删除产品'},
        {path: '/permission', component: HeaderDis, name: '产品销售记录'}
      ]
    }, {
      path: '/',
      name: '超级管理员',
      component: Home,
      children: [
        {path: '/search', component: HeaderDis, name: '参数管理'},
        {path: '/permission', component: HeaderDis, name: '增加/删除管理员'}
      ]
    }
  ]
})
