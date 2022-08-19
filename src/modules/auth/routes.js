export default [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('./pages/LoginIndex.vue'),
        name: 'login',
        meta: {
          requiresAuth: false,
          title: 'Login'
        }
      },
      {
        path: 'recover-password',
        component: () => import('./pages/RecoverPassword.vue'),
        name: 'recoverPassword',
        meta: {
          requiresAuth: false,
          title: 'Recover Password'
        }
      },
      {
        path: 'confirmation',
        component: () => import('./pages/VerificationCodeConfirmation.vue'),
        name: 'confirmation',
        props: true,
        meta: {
          requiresAuth: false,
          title: 'confirmation'
        }
      },
      {
        path: 'reset-password',
        component: () => import('./pages/ResetPassword.vue'),
        name: 'reset-password',
        meta: {
          requiresAuth: false,
          title: 'reset password'
        }
      }
    ]
  }
]
