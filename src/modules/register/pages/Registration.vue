<template>
  <q-page padding>
    <q-card
      style="max-width: 400px;"
      class="q-mx-auto q-mt-lg"
      square
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
      <q-form @submit="handleRegistration">
        <q-card-section>
          <q-input
            v-model.trim="firstName"
            label="First Name"
            placeholder="John"
            type="text"
            autofocus
            :rules="[
              val => !!val || 'Field is required'
            ]"
          />
          <q-input
            v-model.trim="lastName"
            label="Last Name"
            placeholder="Doe"
            type="text"
            :rules="[
              val => !!val || 'Field is required'
            ]"
          />
          <q-input
            v-model.trim="email"
            label="Email"
            placeholder="login@example.com"
            type="email"
            :rules="[
              val => !!val || 'Field is required',
              val => validateEmail(val) || 'Type a valid Email'
            ]"
          />
          <q-input
            v-model.trim="password"
            label="Password"
            placeholder="Password"
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
            v-model.trim="confirmPass"
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            :rules="[
              val => val === password || 'Password doesn\'t match'
            ]"
          />
        </q-card-section>

        <q-card-actions
          align="right"
          class="q-px-md"
        >
          <q-btn
            class="q-px-md"
            label="Register"
            color="primary"
            :loading="$store.state.common.loading"
            type="submit"
          />
        </q-card-actions>
      </q-form>

      <q-separator inset />

      <q-card-section>
        Already Registered?
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
import { validateEmail } from 'src/validationServices'
import { APP_ID } from 'src/consts'

export default {
  name: 'Registration',

  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPass: '',
      isPwd: true,
      loading: false
    }
  },

  computed: {
    UserData () {
      return {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        client_app_id: APP_ID
      }
    }
  },

  methods: {
    validateEmail,
    ...mapActions({
      registerUser: 'register/registerUser'
    }),
    async handleRegistration () {
      await this.registerUser(this.UserData)
      this.$router.push({ name: 'EmailVerification', query: { email: this.email } })
    }
  }
}
</script>
