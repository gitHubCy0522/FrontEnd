import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'//登录
import ProjectList from '../components/project/ProjectList'//项目列表
import UserInfo from '../components/userInfo/UserInfo'//个人信息
import WorkOrderList from '../components/workOrder/WorkOrderList'//工单列表
import WorkOrderDetail from '../components/workOrder/WorkOrderDetail'//工单详情
import WorkOrderIndex from '../components/Index'
import CommonPage from '../components/common/CommonPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: {//重定向
        name: 'ProjectList'
      },
      meta:{
        requiresAuth: true
      },
      component: WorkOrderIndex,//WorkOrderIndex是组件的名字，这个路由对应跳转到的组件
      children: [
        {
          path: '',
          name: 'ProjectList',
          component: ProjectList
        },
        {
          path: '/UserInfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: '/WorkOrderDetail',
          name: 'WorkOrderDetail',
          component: WorkOrderDetail
        },
        {
          path: '/WorkOrderList',
          redirect:{
            name: 'WorkOrderList'
          },
          component: CommonPage,
          children: [
            {
              path: '/WorkOrderList',
              name: 'WorkOrderList',
              component: WorkOrderList
            },
            {
              path: '/WorkOrderList/WorkOrderDetail',
              name: 'WorkOrderDetail',
              component: WorkOrderDetail
            },
          ]
        }
      ]
    }
  ]
})
