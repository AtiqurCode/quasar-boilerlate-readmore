<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCommonStore } from 'stores/common-store'
import CompanyBranding from 'components/CompanyBranding.vue'

const commonStore = useCommonStore()
const route = useRoute()
const router = useRouter()

defineProps({
  title: { type: String, default: '' },
  instruction: { type: String, default: '' },
  resendEmailLabel: { type: String, default: '' },
  handleResendEmail: { type: Function, default: () => {} },
  loginBtnInstruction: { type: String, default: '' }
})

const email = computed(() => route.query.email)

const emit = defineEmits(['resendEmail'])
</script>

<template>
  <q-page
    padding
    class="row justify-center items-center"
  >
    <q-card
      style="width: 400px; max-width: 100%;"
      class="text-center"
      flat
    >
      <q-card-section>
        <CompanyBranding />
      </q-card-section>
      <q-card-section class="text-subtitle1">
        <h6 class="q-mt-none q-mb-md">
          {{ title }}
        </h6>
        <p class="q-mb-none">
          You're almost there! We've sent an email to
        </p>
        <b>{{ email || 'your email address.' }}</b>
        <p class="q-mt-md q-mb-none">
          {{ instruction }} If you don't see it, you may need to <b>check your spam</b> folder.
        </p>
      </q-card-section>
      <q-card-section
        v-if="resendEmailLabel"
        class="q-py-none text-caption"
      >
        Still can't find the email?
        <q-btn
          flat
          dense
          no-caps
          size="0.75rem"
          class="q-py-none"
          color="primary"
          :label="resendEmailLabel"
          :loading="commonStore.loading"
          @click="emit('resendEmail')"
        />
      </q-card-section>
      <q-card-section class="q-pt-none text-caption">
        {{ loginBtnInstruction }}
        <q-btn
          flat
          dense
          no-caps
          size="0.75rem"
          class="q-py-none"
          color="primary"
          label="Login"
          @click="router.push({name: 'login'})"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
