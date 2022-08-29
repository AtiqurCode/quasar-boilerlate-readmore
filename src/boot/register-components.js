// import ContentLoader from 'src/global-components/ContentLoader'
// import LocalSearch from 'src/global-components/LocalSearch'
// import RemoteSearch from 'src/global-components/RemoteSearch'
import OverflowMenu from 'src/global-components/OverflowMenu.vue'
import LightBox from 'src/global-components/LightBox.vue'
import MediaManager from 'src/global-components/MediaManager.vue'

export default ({ app }) => {
  // app.component('ContentLoader', ContentLoader)
  // app.component('LocalSearch', LocalSearch)
  // app.component('RemoteSearch', RemoteSearch)
  app.component('OverflowMenu', OverflowMenu)
  app.component('LightBox', LightBox)
  app.component('MediaManager', MediaManager)
}
