import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '/',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ '@/modules/auth/views/Register.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            beforeEnter: [ isAuthenticatedGuard ],
            component: () => import(/* webpackChunkName: "profile" */ '@/modules/auth/views/Profile.vue'),
        },
        {
            path: '/recovery',
            name: 'recovery',
            component: () => import(/* webpackChunkName: "recovery" */ '@/modules/auth/views/Recovery.vue'),
        },
        {
            path: '/reset/',
            name: 'reset',
            component: () => import(/* webpackChunkName: "reset" */ '@/modules/auth/views/NewPassword.vue'),
        },
        {
            path: '/edit',
            name: 'edit',
            component: () => import(/* webpackChunkName: "edit" */ '@/modules/auth/views/EditProfile.vue'),
        },
    ]
}