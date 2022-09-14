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
        @input="handleFilter"
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-toolbar>
  </q-page-sticky>
</template>

<script>
export default {
  name: 'LocalSearch',

  props: {
    right: { type: Boolean, default: false },
    list: { type: Array, required: true },
    filterKey: { type: String, required: true }
  },

  data () {
    return {
      searchValue: ''
    }
  },

  methods: {
    handleFilter (val) {
      // if (val) {
      //   const userVal = val.toString()
      //   const filtered = this.list.filter(item => item[this.filterKey].toLowerCase().indexOf(userVal) > -1)
      //   this.$emit('input-search', filtered)
      // } else this.$emit('input-search', this.list)
    }
  },

  watch: {
    list () {
      this.handleFilter(this.searchValue)
    }
  }
}
</script>
