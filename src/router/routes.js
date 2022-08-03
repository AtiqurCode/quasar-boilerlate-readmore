
const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        name: 'dashboard',
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        name: 'login',
        path: 'login',
        component: () => import('pages/ErrorNotFound.vue'),
        meta: {
          requiresAuth: false
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
