export default [
  {
    path: '/myshare',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('./pages/MyShareIndex.vue'),
        name: 'Myshare',
        meta: {
          requireAsuth: false,
          title: 'Myshare'
        }
      }
    ]
  }
]
