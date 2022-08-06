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
      <q-card-section class="q-py-none">
        <CompanyBranding />
      </q-card-section>
      <q-card-section class="text-subtitle1">
        <h6 class="q-mt-none q-mb-md">
          Please verify your email
        </h6>
        <p class="q-mb-none">
          You're almost there! We've sent an email to
        </p>
        <b>{{ email }}</b>
        <p class="q-mt-md q-mb-none">
          Just click on the link in that email to complete your registration. If you don't see it, you may need to <b>check your spam</b> folder.
        </p>
      </q-card-section>
      <q-card-section class="q-py-none text-caption">
        Still can't find the email?
        <q-btn
          flat
          dense
          no-caps
          size="0.75rem"
          class="q-py-none"
          color="primary"
          label="Resend Email"
          :loading="commonStore.loading"
          @click="handleResendEmail"
        />
      </q-card-section>
      <q-card-section class="q-pt-none text-caption">
        Or, if you already verified your Email, you can go to
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

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRegisterStore } from 'stores/register-store'
import { useCommonStore } from 'stores/common-store'
import CompanyBranding from 'components/CompanyBranding.vue'

const commonStore = useCommonStore()
const registerStore = useRegisterStore()
const route = useRoute()
const router = useRouter()

const email = computed(() => route.query.email)
const handleResendEmail = () => {
  registerStore.reSendVerificationEmail(email)
}
</script>
