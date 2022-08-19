<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from 'stores/auth-store'
import EmailConfirmation from 'components/EmailConfirmation.vue'

const authStore = useAuthStore()
const route = useRoute()

const email = computed(() => route.query.email)
const handleResendEmail = () => {
  authStore.reSendVerificationCode(email)
}
</script>

<template>
  <EmailConfirmation
    title="Please verify yourself"
    instruction="Find the Verification Code, copy it and follow the link."
    resend-email-label="Resend Verification Code"
    login-btn-instruction="If you are here by mistake, please go to"
    @resend-email="handleResendEmail"
  />
</template>
