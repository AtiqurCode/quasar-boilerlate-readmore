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
      <q-form @submit="handleLogin">
        <q-card-section>
          <q-input
            v-model="email"
            class="itc-input required"
            stack-label
            outlined
            label="Email"
            placeholder="login@example.com"
            type="email"
            autofocus
            clearable
            clear-icon="o_close"
            :rules="[
              val => !!val || 'Email is required',
              val => validateEmail(val) || 'Type a valid Email'
            ]"
          >
            <template #prepend>
              <q-icon name="o_email" />
            </template>
          </q-input>
          <q-input
            v-model="password"
            class="itc-input required"
            stack-label
            outlined
            label="Password"
            placeholder="password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              val => !!val || 'Password is required',
              val => val.length >= 6 || 'Minimum 6 characters required'
            ]"
          >
            <template #prepend>
              <q-icon name="o_key" />
            </template>
            <template #append>
              <q-icon
                :name="isPwd ? 'o_visibility' : 'o_visibility_off'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions class="q-pt-none">
          <q-btn
            label="Log In"
            color="primary"
            size="lg"
            no-caps
            class="full-width"
            :loading="commonStore.loading"
            type="submit"
          />
        </q-card-actions>
      </q-form>
      <q-card-section class="q-pt-none text-caption">
        Forgot password?
        <q-btn
          flat
          dense
          no-caps
          size="0.75rem"
          class="q-py-none"
          color="primary"
          label="Recover"
          @click="router.push({name: 'recoverPassword'})"
        />
      </q-card-section>

      <q-card-section class="q-pt-xl row justify-around">
        <p class="full-width">
          Or sign in with
        </p>
        <q-btn
          icon="img:/icons/google_G_logo.svg"
          color="white"
          align="center"
          size="lg"
          class="q-pa-md neumorphic"
          @click="socialLogin('google')"
        >
          <q-tooltip>
            Google
          </q-tooltip>
        </q-btn>
        <q-btn
          icon="img:/icons/facebook_f_logo.svg"
          color="white"
          align="center"
          size="lg"
          class="q-pa-md neumorphic"
          @click="socialLogin('facebook')"
        >
          <q-tooltip>
            Facebook
          </q-tooltip>
        </q-btn>
        <q-btn
          icon="img:/icons/apple_logo.svg"
          color="white"
          align="center"
          size="lg"
          class="q-pa-md neumorphic"
          @click="socialLogin('apple')"
        >
          <q-tooltip>
            Apple
          </q-tooltip>
        </q-btn>
        <q-btn
          icon="img:/icons/microsoft_live_logo.svg"
          color="white"
          align="center"
          size="lg"
          class="q-pa-md neumorphic"
          @click="socialLogin('live')"
        >
          <q-tooltip>
            MS Live
          </q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section class="text-caption">
        Don't have an account?
        <q-btn
          flat
          dense
          no-caps
          size="0.75rem"
          class="q-py-none"
          color="primary"
          label="Register Now"
          @click="router.push({name: 'registration'})"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'stores/auth-store'
import { useCommonStore } from 'stores/common-store'
import { validateEmail } from 'utilities/validators'
import CompanyBranding from 'components/CompanyBranding.vue'

const email = ref('')
const password = ref('')
const isPwd = ref(true)

const commonStore = useCommonStore()
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    await authStore.logUserIn({ data: { email: email.value, password: password.value } })
    router.push({ name: 'dashboard' })
  } catch {}
}

const socialLogin = (provider) => { }
</script>

<style scoped>
  .neumorphic::before {
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  22px 22px 44px #d9d9d9, -22px -22px 44px #ffffff;
  }
</style>
