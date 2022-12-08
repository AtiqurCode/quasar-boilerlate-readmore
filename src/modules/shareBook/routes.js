export default [
  {
    path: '/sharebook',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('./pages/SharebookIndex.vue'),
        name: 'Sharebook',
        meta: {
          requireAsuth: false,
          title: 'Sharebook'
        }
      }
    ]
  }
]
