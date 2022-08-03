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
            v-model.trim="password"
            label="New Password"
            placeholder="Type your new Password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              val => !!val || 'Field is required',
              val => val.length >= 6 || 'Minimum length 6'
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-model.trim="re_type_password"
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            :rules="[val => val === password || 'Password doesn\'t match']"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            flat
            dense
            color="primary"
            label="UPDATE PASSWORD"
            type="submit"
          />
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
      password: '',
      re_type_password: '',
      verification_code: '',
      isPwd: true
    }
  },
  created () {
    this.verification_code = this.$route.query.verification_code
  },
  methods: {
    ...mapActions({
      forgotPassword: 'auth/forgotPassword'
    }),
    validateEmail,
    async onSubmit () {
      try {
        const data = {
          password: this.password,
          re_type_password: this.re_type_password,
          verification_code: this.verification_code
        }
        await this.forgotPassword(data)
        this.$router.push({ name: 'confirmation', params: { message: 'You have successfully changed your password. Feel free to login with your new password.' } })
      } catch (error) {}
    }
  }
}
</script>

<style></style>
