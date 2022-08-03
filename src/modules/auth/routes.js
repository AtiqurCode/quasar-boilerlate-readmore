export default [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout'),
    children: [
      {
        path: '',
        component: () => import('./pages/LoginIndex'),
        name: 'auth',
        meta: {
          noAuthRequired: true,
          title: 'Login'
        }
      },
      {
        path: 'password-request',
        component: () => import('./pages/RecoverPassword.vue'),
        name: 'recover-password',
        meta: {
          noAuthRequired: true,
          title: 'Recover Password'
        }
      },
      {
        path: 'confirmation',
        component: () => import('./pages/EmailConfirmation.vue'),
        name: 'confirmation',
        props: true,
        meta: {
          noAuthRequired: true,
          title: 'confirmation'
        }
      }
    ]
  },
  {
    path: '/reset-password',
    component: () => import('layouts/AuthLayout'),
    children: [
      {
        path: '',
        component: () => import('./pages/ResetPassword.vue'),
        name: 'reset-password',
        meta: {
          noAuthRequired: true,
          title: 'reset password'
        }
      }
    ]
  }

]
