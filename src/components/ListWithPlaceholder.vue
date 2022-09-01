<script setup>
defineProps({
  loading: { type: Boolean, default: true },
  numberOfItems: { type: Number, default: 5 },
  listProps: { type: Object, default: () => ({}) }
})
</script>

<template>
  <q-list v-bind="listProps">
    <template v-if="loading">
      <q-item
        v-for="(item, i) in Array(numberOfItems).fill(1)"
        :key="i"
      >
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton
              type="text"
              width="65%"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <slot v-else />
  </q-list>
</template>
