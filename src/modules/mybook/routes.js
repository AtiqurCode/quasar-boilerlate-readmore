export default [
  {
    path: '/mybooks',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('./pages/MybookIndex.vue'),
        name: 'Mybooks',
        meta: {
          requireAsuth: false,
          title: 'Mybooks'
        }
      }
    ]
  }
]
