<template>
  <!-- <div
    class="q-pa-md"
    style="max-width: 400px"
  /> -->
  <q-card style="width: 400px !important;">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-bold">
        Create Task
      </div>
      <q-space />
      <q-btn
        icon="close"
        flat
        round
        size="sm"
        dense
        @click="onClose()"
      />
    </q-card-section>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-card-section>
        <q-input
          autofocus
          dense
          color="primary"
          label="Book Name"
          :rules="[(val) => (val && val.length > 0) || 'Task name is required!']"
        >
          <template #append>
            <q-icon
              color="accent"
              size="xs"
              name="task_alt"
            />
          </template>
          <div class="q-gutter-md">
            <q-select
              v-model="model"
              :options="options"
              label="Standard"
            />
          </div>

          <!-- <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div> -->
        </q-input>
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  methods: {
    onClose () {
      this.$emit('onCloseDialog')
    }
  },
  setup () {
    return {
      model: ref(null),
      options: [
        'Classics', 'Crime', 'Fantasy', 'Historical', 'Horror'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
