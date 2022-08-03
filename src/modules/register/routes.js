export default [
  {
    path: '/register',
    component: () => import('layouts/AuthLayout'),
    children: [
      {
        path: '',
        component: () => import('./pages/Registration'),
        name: 'Registration',
        meta: {
          noAuthRequired: true,
          title: 'Registration'
        }
      },
      {
        path: 'email-verification',
        component: () => import('./pages/EmailVerification'),
        name: 'EmailVerification',
        meta: {
          noAuthRequired: true,
          title: 'Email Verification'
        }
      }
    ]
  }
]
