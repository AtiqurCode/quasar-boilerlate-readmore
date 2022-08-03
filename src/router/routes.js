import { routes as auth } from 'modules/auth'
// import { routes as register } from 'modules/register'
// import { routes as dashboard } from 'modules/dashboard'
// import { routes as companies } from 'modules/companies'
// import { routes as projects } from 'modules/projects'
// import { routes as projectsJobs } from 'modules/projectsJobs'
// import { routes as userAccess } from 'modules/userAccess'
// import { routes as customer } from 'modules/customer'
// import { routes as contacts } from 'modules/contacts'
// import { routes as settings } from 'modules/settings'

const routes = [
  ...auth,
  // ...register,
  // ...dashboard,
  // ...companies,
  // ...projects,
  // ...projectsJobs,
  // ...userAccess,
  // ...customer,
  // ...contacts,
  // ...settings,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
