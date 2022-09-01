<script setup>
import { useQuasar } from 'quasar'

defineProps({
  menus: { type: Array, reqiured: true, default: () => [] }
})

const $q = useQuasar()
const handlerInterceptor = (handler, warning) => {
  if (warning.show) {
    const { entityName, additionalMsg, entityType, prompt } = warning
    const promptObj = prompt
      ? {
          model: '',
          label: 'Singnature (Minimum 3 characters)',
          stackLabel: true,
          isValid: val => val.length > 2
        }
      : undefined

    $q.dialog({
      html: true,
      title: '⚠️ Warning !!!',
      message: `<div>
            You are about to Delete${entityType ? ` ${entityType}` : ''}
            ${' '}
            <span class="text-bold">${entityName}</span>.
            ${additionalMsg ? `<p class="q-my-sm">${additionalMsg}</p>` : ''}
            <p class="q-my-none">To proceed please ${prompt ? 'provide an anonymous signature' : 'press DELETE button'}.</p>

          </div>`,
      prompt: promptObj,
      ok: { color: 'red', flat: true, label: 'Delete' },
      cancel: true
    }).onOk(() => handler())
  } else handler()
}
</script>

<template>
  <q-btn
    size="12px"
    flat
    dense
    round
    icon="o_more_vert"
  >
    <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
      auto-close
      self="center right"
    >
      <q-list
        separator
        dense
        style="min-width: 100px"
      >
        <template v-for="({show = true, label, handler, warning = {}}, index) in menus">
          <q-item
            v-if="show"
            :key="index"
            clickable
            @click="handlerInterceptor(handler, warning)"
          >
            <q-item-section>{{ label }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-menu>
  </q-btn>
</template>
