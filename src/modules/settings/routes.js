export default [
  {
    path: '/settings',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('./pages/SettingsIndex.vue'),
        name: 'settings',
        meta: {
          requiresAuth: true,
          title: 'Settings'
        }
      },
      {
        path: 'profile',
        component: () => import('./pages/ProfileSettings.vue'),
        name: 'profileSettings',
        meta: {
          requiresAuth: true,
          title: 'My Profile'
        }
      }
      // {
      //   path: 'security',
      //   component: () => import('./pages/SecuritySettings'),
      //   name: 'Security-Settings',
      //   meta: {
      //     noAuthRequired: false,
      //     title: 'Change Password'
      //   }
      // },
      // {
      //   path: 'theme',
      //   component: () => import('./pages/ThemeSettings'),
      //   name: 'Theme-Settings',
      //   meta: {
      //     noAuthRequired: false,
      //     title: 'Theme Color'
      //   }
      // }
    ]
  }
]
