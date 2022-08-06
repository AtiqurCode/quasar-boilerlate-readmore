export default [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('./pages/DashboardIndex.vue'),
        name: 'dashboard',
        meta: {
          requiresAuth: false,
          title: 'Dashboard'
        }
      }
    ]
  }
]
