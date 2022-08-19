<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRegisterStore } from 'stores/register-store'
import EmailConfirmation from 'components/EmailConfirmation.vue'

const registerStore = useRegisterStore()
const route = useRoute()

const email = computed(() => route.query.email)
const handleResendEmail = () => {
  registerStore.reSendVerificationEmail(email)
}
</script>

<template>
  <EmailConfirmation
    title="Please verify your email"
    instruction="Just click on the link in that email to complete your registration."
    resend-email-label="Resend Email"
    login-btn-instruction="Or, if you already verified your Email, you can go to"
    @resend-email="handleResendEmail"
  />
</template>
