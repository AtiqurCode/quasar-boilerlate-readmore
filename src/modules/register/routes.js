export default [
  {
    path: '/registration',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('./pages/RegistrationIndex.vue'),
        name: 'registration',
        meta: {
          requiresAuth: false,
          title: 'Registration'
        }
      }
      // {
      //   path: 'email-verification',
      //   component: () => import('./pages/EmailVerification'),
      //   name: 'EmailVerification',
      //   meta: {
      //     noAuthRequired: true,
      //     title: 'Email Verification'
      //   }
      // }
    ]
  }
]
