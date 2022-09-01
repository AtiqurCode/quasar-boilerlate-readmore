import { onMounted, onBeforeUnmount } from 'vue'
import { useCommonStore } from 'stores/common-store'

export function useBackButton (routerParams) {
  const commonStore = useCommonStore()

  onMounted(() => commonStore.showBackButton({ show: true, routerParams }))
  onBeforeUnmount(() => commonStore.showBackButton(null))
}
