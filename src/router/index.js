import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/auth'

import Home from '@/components/Home'
import QR from '@/components/Class/QR'
import ClassPage from '@/components/Class/ClassPage'
import Auth from '@/components/User/Auth'

Vue.use(Router)

var routes = [
  { path: '/auth', name: 'auth', component: Auth, meta: { guestOnly: true } },
  { path: '/home', name: 'home', component: Home, meta: { requireAuth: true } },
  { path: '/QR', name: 'QR', component: QR, meta: { requireAuth: true } },
  { path: '/classpage', name: 'ClassPage', component: ClassPage, meta: { requireAuth: true } },
  { path: '*', redirect: '/home' }
]

export const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('auth')
  else if (guestOnly && currentUser) next('dashboard')
  else next()
})
