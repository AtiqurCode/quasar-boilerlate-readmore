<script setup>
import { reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from 'stores/auth-store'
import { useCommonStore } from 'stores/common-store'
import CompanyBranding from 'components/CompanyBranding.vue'

const route = useRoute()
const router = useRouter()

const form = reactive({
  password: '',
  re_type_password: '',
  recovery_code: ''
})
const isPwd = ref(true)

const email = computed(() => route.query.email)
const commonStore = useCommonStore()
const authStore = useAuthStore()
const onSubmit = async () => {
  try {
    await authStore.forgotPassword({ payload: { ...form, email: email.value }, notifyOptions: { message: 'Password reset successly' } })
    router.push({ name: 'login' })
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
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-card-section>
          <q-input
            v-model.trim="form.password"
            class="itc-input required"
            stack-label
            outlined
            label="New Password"
            placeholder="Type your new Password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              val => !!val || 'Password is required',
              val => val.length >= 6 || 'Minimum 6 characters required'
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
            v-model="form.re_type_password"
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
          <q-input
            v-model="form.recovery_code"
            class="itc-input required"
            stack-label
            outlined
            label="Verification Code"
            placeholder="XXXX"
            type="text"
            :rules="[
              val => !!val || 'Verification Code is required'
            ]"
          />
        </q-card-section>

        <q-card-actions class="q-py-none">
          <q-btn
            label="Update Password"
            color="primary"
            size="lg"
            no-caps
            class="full-width"
            :loading="commonStore.loading"
            type="submit"
          />
        </q-card-actions>
        <q-card-section class="q-pt-none text-caption">
          If you are here by mistake, please go to
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
