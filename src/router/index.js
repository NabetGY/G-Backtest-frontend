import { createRouter, createWebHashHistory } from 'vue-router'

import authRouter from '../modules/auth/router'
import backtestRouter from '../modules/backtest/router'


const routes = [
  {
    path: '/auth',
    ...authRouter,
  },
  {
    path: '/backtest',
/*     beforeEnter: [ isAuthenticatedGuard ],
 */    ...backtestRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
