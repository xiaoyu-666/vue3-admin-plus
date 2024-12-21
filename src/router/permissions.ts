import { useRoutesStore } from '@/stores/modules/routes'
import type { Router } from 'vue-router'
export function setupPermissions(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // const { routes, setRoutes } = useRoutesStore()
    const { setRoutes } = useRoutesStore()

    await setRoutes()
    next()
  })
}
