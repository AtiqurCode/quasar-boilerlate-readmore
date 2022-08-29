<script setup>
import { ref } from 'vue'
defineProps({
  show: { type: Boolean, default: false },
  header: { type: String, default: '' },
  media: { type: String, default: null }
})

const maximized = ref(false)

const emit = defineEmits(['update:show', 'on-close'])
</script>

<template>
  <q-dialog
    :model-value="show"
    @update:model-value="emit('update:show', !show)"
    :maximized="maximized"
  >
    <q-card :class="{'default-dimension' : !maximized}">
      <q-bar>
        <div class="ellipsis">
          {{ header }}
        </div>

        <q-space />

        <q-btn
          dense
          flat
          :icon="maximized ? 'o_close_fullscreen' : 'o_crop_square'"
          @click="maximized = !maximized"
        />
        <q-btn
          dense
          flat
          icon="close"
          v-close-popup
          @click="emit('update:show', false); emit('on-close')"
        >
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <q-img
          v-if="media"
          :src="media"
          spinner-color="white"
          style="height: auto; max-width: 100%"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.default-dimension {
  width: 500px;
  max-width: 98vw;
  max-height: 95vh;
}
</style>
