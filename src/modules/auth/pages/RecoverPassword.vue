<template>
  <q-page padding>
    <q-card
      style="max-width: 400px;"
      class="q-mx-auto q-mt-lg"
      square
      flat
    >
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-card-section class="q-pt-lg">
          <q-img
            src="~assets/logo_full.png"
            spinner-color="primary"
            contain
            style="max-height: 50px; max-width: 100%;"
          />
        </q-card-section>
        <q-card-section>
          <q-input
            v-model.trim="email"
            label="Email"
            placeholder="login@example.com"
            type="email"
            autofocus
            clearable
            :rules="[
              val => !!val || 'Field is required',
              val => validateEmail(val) || 'Type a valid Email'
            ]"
          />
          <q-input
            v-model.trim="lastName"
            label="Last Name"
            placeholder="Doe"
            clearable
            :rules="[val => !!val || 'Field is required']"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            flat
            dense
            color="primary"
            type="submit"
          >
            Recover
          </q-btn>
        </q-card-section>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { validateEmail } from 'src/validationServices'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      lastName: ''
    }
  },
  methods: {
    ...mapActions({
      forgotPassword: 'auth/forgotPassword'
    }),
    validateEmail,
    async onSubmit () {
      const data = {
        email: this.email,
        last_name: this.lastName
      }
      try {
        await this.forgotPassword(data)
        this.$router.push({ name: 'confirmation', params: { message: 'We have sent a password reset link to your email address.' } })
      } catch (error) {}
    }
  }
}
</script>

<style></style>
