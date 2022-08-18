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
      <q-form @submit="handleRegistration">
        <q-card-section>
          <q-input
            v-model.trim="form.first_name"
            class="itc-input required"
            stack-label
            outlined
            label="First Name"
            placeholder="John"
            type="text"
            autofocus
            :rules="[
              val => !!val || 'First Name is required'
            ]"
          />
          <q-input
            v-model.trim="form.last_name"
            class="itc-input required"
            stack-label
            outlined
            label="Last Name"
            placeholder="Doe"
            type="text"
            :rules="[
              val => !!val || 'Last Name is required'
            ]"
          />
          <q-input
            v-model="form.email"
            class="itc-input required"
            stack-label
            outlined
            label="Email"
            placeholder="login@example.com"
            type="email"
            clearable
            clear-icon="o_close"
            :rules="[
              val => !!val || 'Email is required',
              val => validateEmail(val) || 'Type a valid Email'
            ]"
          />
          <q-input
            v-model="form.password"
            class="itc-input required"
            stack-label
            outlined
            label="Password"
            placeholder="Password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              val => !!val || 'Password is required',
              val => val.length >= 6 || 'Minimum length 6'
            ]"
          >
            <template #append>
              <q-icon
                :name="isPwd ? 'o_visibility' : 'o_visibility_off'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-model="confirmPass"
            class="itc-input required"
            stack-label
            outlined
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            :rules="[
              val => val === form.password || 'Password doesn\'t match'
            ]"
          />
        </q-card-section>

        <q-card-actions class="q-pt-none">
          <q-btn
            label="Register"
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
        Already Registered?
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRegisterStore } from 'stores/register-store'
import { useCommonStore } from 'stores/common-store'
import { validateEmail } from 'utilities/validators'
import { APP_ID } from 'src/consts'
import CompanyBranding from 'src/components/CompanyBranding.vue'

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: ''
})
const confirmPass = ref(''),
  isPwd = ref(true)

const commonStore = useCommonStore()
const registerStore = useRegisterStore()
const router = useRouter()

const handleRegistration = async () => {
  try {
    await registerStore.registerUser({ ...form, client_app_id: APP_ID })
    router.push({ name: 'emailVerification', query: { email: form.email } })
  } catch {}
}
</script>
