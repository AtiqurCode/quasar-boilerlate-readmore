<template>
  <div>
    <q-inner-loading :showing="isloading">
      <component
        :is="spinner"
        :size="size"
        :color="color"
      />
    </q-inner-loading>
    <transition
      appear
      :enter-active-class="enterClass"
      :leave-active-class="leaveClass"
    >
      <div v-show="!isloading">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ContentLoader',

  props: {
    loading: { type: Boolean, default: true },
    spinner: { type: String, default: 'q-spinner-grid' },
    size: { type: String, default: '3rem' },
    color: { type: String, default: 'primary' },
    enterClass: { type: String, default: 'animated fadeIn' },
    leaveClass: { type: String, default: 'animated fadeOut' }
  },

  data () {
    return {
      isloading: true
    }
  },

  // Need watcher as we want the initial loading true
  watch: {
    loading (val) {
      this.isloading = val
    }
  }
}
</script>
