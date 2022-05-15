import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'

export default {

    name: 'backtest',
    component: () => import(/* webpackChunkName: "backtest" */ '@/modules/backtest/layouts/BacktestLayout.vue'),
    children: [
        {
            path: '/backtesting',
            name: 'backtesting',
            beforeEnter: [ isAuthenticatedGuard ],
            component: () => import(/* webpackChunkName: "backtest" */ '@/modules/backtest/views/BackTest.vue'),
        },
        {
            path: '/backtestResult/',
            name: 'backtestResult',
            beforeEnter: [ isAuthenticatedGuard ],
            component: () => import(/* webpackChunkName: "backtestResult" */ '@/modules/backtest/views/BacktestResult.vue'),
            props: true,

        },
        {
            path: '/myBacktest',
            name: 'myBacktest',
            beforeEnter: [ isAuthenticatedGuard ],
            component: () => import(/* webpackChunkName: "myBacktest" */ '@/modules/backtest/views/MyBacktest.vue'),
        },
        {
            path: '/teory',
            name: 'teory',
            beforeEnter: [ isAuthenticatedGuard ],
            component: () => import(/* webpackChunkName: "teory" */ '@/modules/backtest/views/BacktestTeory.vue'),
        },
    ]
}