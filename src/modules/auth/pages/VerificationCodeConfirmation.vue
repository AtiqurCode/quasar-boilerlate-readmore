<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from 'stores/auth-store'
import EmailConfirmation from 'components/EmailConfirmation.vue'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

const email = computed(() => route.query.email)
const handleResendEmail = () => {
  authStore.reSendVerificationCode({ email: email.value })
}
</script>

<template>
  <EmailConfirmation
    title="Please verify yourself"
    instruction="Find the <b>Verification Code</b>, copy it and follow the link."
    resend-email-label="Resend Verification Code"
    login-btn-instruction="If you are here by mistake, please go to"
    @resend-email="handleResendEmail"
  >
    <q-card-section>
      <q-btn
        no-caps
        size="0.75rem"
        class="q-py-none"
        color="primary"
        label="Enter verification code"
        @click="router.push({name: 'resetPassword', query: { email }})"
      />
    </q-card-section>
  </EmailConfirmation>
</template>
