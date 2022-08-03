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
      <q-form @submit="handleLogin">
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
            v-model.trim="password"
            class="q-pt-sm"
            label="Password"
            placeholder="password"
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
        </q-card-section>

        <q-card-actions
          align="right"
          class="q-px-md"
        >
          <q-btn
            label="login"
            color="primary"
            class="q-px-md"
            :loading="$store.state.common.loading"
            type="submit"
          />
        </q-card-actions>
      </q-form>
      <q-card-section class="q-pt-none">
        Forgot your password?
        <q-btn
          flat
          dense
          color="primary"
          @click="$router.push({name: 'recover-password'})"
        >
          Recover
        </q-btn>
      </q-card-section>

      <q-separator inset />

      <!-- <q-card-actions
        vertical
        class="q-px-md"
        align="left"
      >
        <q-btn
          color="green"
          style="width: 300px;"
          label="Login with Google"
          icon="fab fa-google"
          class="q-px-md q-my-sm"
          align="left"
          @click="socialLogin('google')"
        />
        <q-btn
          color="blue"
          style="width: 300px;"
          label="Login with Facebook"
          icon="fab fa-facebook"
          class="q-px-md q-my-sm"
          align="left"
          @click="socialLogin('facebook')"
        />
        <q-btn
          color="red"
          style="width: 300px;"
          label="Login with Microsoft Live"
          icon="fab fa-windows"
          class="q-px-md q-my-sm"
          align="left"
          @click="socialLogin('live')"
        />
      </q-card-actions> -->

      <q-card-section class="q-pt-none">
        New to our system?
        <q-btn
          flat
          dense
          color="primary"
          @click="$router.push('/register')"
        >
          Register
        </q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { validateEmail } from 'src/validationServices'

/**
 * @module Auth/pages/LoginIndex
 * @author S.M. Shakil Islam<sm.shakil@itconquest.com>
 * @description Renders Login Forms
 * @vue-data {String} [email=null] - Email address of a user
 * @vue-data {String} [password=null] - Password of a user
 * @vue-data {Boolean} [isPwd=true] - Confirm password during registration
 * @vue-data {String} [emailValidationRegex] - Regex string to validate Email
 * @vue-computed {Object} [UserData = null] - logged in user information
 * @vue-computed {Object} [error=null] - Holds login form errors
 * @vue-computed {Boolean} [loading=false] - Loading state of login form
 */
export default {
  name: 'LoginIndex',

  data () {
    return {
      email: '',
      password: '',
      isPwd: true,
      loading: false
    }
  },

  computed: {
    UserData () {
      return {
        email: this.email,
        password: this.password
      }
    }
  },

  methods: {
    onClickButton () { },
    validateEmail,
    ...mapActions({
      login: 'auth/logUserIn'
    }),
    /**
     * @description Dispatch handleLogin method to log in a user. This uses `email` and `password`
     * from Auth Store and redirect user to **dashboard** page
     * @todo Exception not handled properly
     * @async
     */
    handleLogin () {
      this.login({ data: this.UserData }).then(() => {
        this.$router.push('/dashboard')
      })
    },

    /**
     * @description Dispatch socialLogin method to log in a user using Social Account.
     * from Auth Store and redirect user to **dashboard** page
     * @todo Exception not handled properly
     * @async
     */
    socialLogin (provider) {
    }
  }
}
</script>
