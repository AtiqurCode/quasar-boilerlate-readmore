<template>
  <q-page-sticky
    expand
    position="top"
    :offset="[18, 5]"
    style="z-index: 1"
  >
    <q-toolbar>
      <q-input
        type="search"
        v-model="searchValue"
        debounce="500"
        placeholder="search"
        standout="bg-primary no-shadow"
        bg-color="white"
        dense
        rounded
        style="width: 100%; max-width: 400px; display: block;"
        :class="{'q-ml-auto': right}"
      >
        <!-- @input="$emit('input-search', searchValue)"
        @keyup.enter="$emit('enter-search', searchValue)" -->
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-toolbar>
  </q-page-sticky>
</template>

<script>
export default {
  name: 'RemoteSearch',

  props: {
    right: { type: Boolean, default: false }
  },

  data () {
    return {
      searchValue: ''
    }
  }
}
</script>
