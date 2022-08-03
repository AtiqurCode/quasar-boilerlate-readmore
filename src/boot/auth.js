import { boot } from 'quasar/wrappers'
import { useCommonStore } from 'stores/common-store'
import { useAuthStore } from 'stores/auth-store'
import { DEFAULT_PAGE_TITLE } from 'src/consts'

export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    // Check to see if the route has the meta field "noAuthRequired" set to true
    const requiresAuth = to.meta && to.meta.requiresAuth
    const isAuthenticated = !!authStore.apiToken
    const target = to.path

    // when route requires auth and user not logged in, redirect to '/login'
    if (requiresAuth && !isAuthenticated) {
      // Remember the requested path. User will be redirected to this path after login
      next({ name: 'login', query: { redirect: to.fullPath } })

      // when we go to login/reg route and are already logged in, we can skip this page
      // so we redirect to the homepage
    } else if ((target.startsWith('/login') || target.startsWith('/register')) && isAuthenticated) {
      next({ name: 'dashboard' })

      // if none of the above matches, we have a normal navigation that should just go through
    } else {
      next()
    }
  })

  router.afterEach((to, from) => {
    const commonStore = useCommonStore()
    commonStore.setPageTitle(to.meta.title || DEFAULT_PAGE_TITLE)
    commonStore.setHeaderAction(to.meta.headerAction || null)
  })
})
