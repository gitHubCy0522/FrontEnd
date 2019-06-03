import Vue from 'vue'
import Router from 'vue-router'
import WorkOrderIndex from '../components/Index'
import Login from '../components/login/Login'
import FirstPage from '../components/firstpage/FirstPage'
import UserInfo from '../components/userinfo/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'FirstPage'
      },
      meta: {
        requiresAuth: true
      },
      component: WorkOrderIndex,
      children: [
        {
          path: '/FirstPage',
          name: 'FirstPage',
          component: FirstPage
        },
        {
          path: '/UserInfo',
          name: 'UserInfo',
          component: UserInfo
        }
      ]

    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
