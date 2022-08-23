<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { validateEmail } from 'utilities/validators'
import { useAuthStore } from 'stores/auth-store'
import { useCommonStore } from 'stores/common-store'
import CompanyBranding from 'components/CompanyBranding.vue'

const form = reactive({
  email: '',
  last_name: ''
})

const commonStore = useCommonStore()
const authStore = useAuthStore()
const router = useRouter()
const onSubmit = async () => {
  try {
    await authStore.forgotPassword({ payload: form })
    router.push({ name: 'confirmation', query: { email: form.email } })
  } catch (error) {}
}

</script>

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
        <CompanyBranding class="q-mb-xl" />
      </q-card-section>
      <q-form @submit="onSubmit">
        <q-card-section>
          <q-input
            v-model="form.email"
            class="itc-input required"
            stack-label
            outlined
            label="Email"
            placeholder="login@example.com"
            type="email"
            autofocus
            clearable
            clear-icon="close"
            :rules="[
              val => !!val || 'Email is required',
              val => validateEmail(val) || 'Type a valid Email'
            ]"
          />
          <q-input
            v-model.trim="form.last_name"
            class="itc-input required"
            stack-label
            outlined
            label="Last Name"
            placeholder="Doe"
            clearable
            clear-icon="close"
            :rules="[val => !!val || 'Last Name is required']"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            label="Recover"
            color="primary"
            size="lg"
            no-caps
            class="full-width"
            :loading="commonStore.loading"
            type="submit"
          />
        </q-card-section>

        <q-card-section class="q-pt-none text-caption">
          Go back to
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
      </q-form>
    </q-card>
  </q-page>
</template>
