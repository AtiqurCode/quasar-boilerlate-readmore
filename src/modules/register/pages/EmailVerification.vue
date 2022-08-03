<template>
  <q-page padding>
    <q-card
      style="max-width: 500px;"
      class="q-mx-auto q-mt-lg"
      flat
    >
      <q-card-section class="q-pt-lg">
        <q-img
          src="~assets/logo_full.png"
          spinner-color="primary"
          contain
          style="max-height: 50px; max-width: 100%;"
        />
      </q-card-section>
      <q-card-section class="text-center text-subtitle1">
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
      <!-- <q-card-section class="text-center q-py-none">
        <p class="q-mt-none q-mb-sm text-subtitle1">
          Still can't find the email?
        </p>
        <q-btn
          label="RESEND EMAIL"
          color="primary"
          outline
          :loading="$store.state.common.loading"
          @click="handleResendCode"
        />
      </q-card-section> -->
      <q-card-section class="text-center">
        Or, if you already verified your Email, you can go to
        <q-btn
          flat
          dense
          color="primary"
          @click="$router.push('/auth')"
        >
          Login
        </q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EmailVerification',

  data () {
    return {
      loading: false
    }
  },

  methods: {
    ...mapActions({
      reSendVerificationEmail: 'register/reSendVerificationEmail'
    }),
    handleResendCode () {
      this.reSendVerificationEmail(this.email)
    }
  },

  computed: {
    email () {
      return this.$route.query.email
    }
  }
}
</script>
