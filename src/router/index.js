import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import QR from '@/components/Class/QR'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import ClassPage from '@/components/Class/ClassPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/QR',
      name: 'QR',
      component: QR
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/classpage',
      name: 'ClassPage',
      component: ClassPage
    }
  ]
})