<script setup>
import { ref } from 'vue'
import { useBackButton } from 'composables/backButton'
import { useUserStore } from 'stores/user-store'
import { useCommonStore } from 'stores/common-store'

useBackButton()
const commonStore = useCommonStore()
const userStore = useUserStore()

const oldPassword = ref(''),
  password = ref(''),
  confirmPass = ref(''),
  isOldPwd = ref(true),
  isPwd = ref(true)

const handleChangePassword = () => {
  const data = {
    password: oldPassword,
    newpassword: password,
    retypepassword: confirmPass
  }
  userStore.changePassword(data)
}

</script>

<template>
  <q-page padding>
    <q-form
      @submit="handleChangePassword"
      style="max-width: 500px;"
      class="q-mx-auto q-mt-md"
    >
      <q-input
        v-model.trim="oldPassword"
        class="itc-input required"
        stack-label
        outlined
        label="Old Password"
        placeholder="Type your current Password"
        :type="isOldPwd ? 'password' : 'text'"
        :rules="[val => !!val || 'Field is required']"
      >
        <template #append>
          <q-icon
            :name="isOldPwd ? 'o_visibility_off' : 'o_visibility'"
            class="cursor-pointer"
            @click="isOldPwd = !isOldPwd"
          />
        </template>
      </q-input>
      <q-input
        v-model.trim="password"
        class="itc-input required"
        stack-label
        outlined
        label="New Password"
        placeholder="Type your new Password"
        :type="isPwd ? 'password' : 'text'"
        :rules="[
          val => !!val || 'Field is required',
          val => val.length >= 6 || 'Minimum length 6'
        ]"
      >
        <template #append>
          <q-icon
            :name="isPwd ? 'o_visibility_off' : 'o_visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input
        v-model.trim="confirmPass"
        class="itc-input required"
        stack-label
        outlined
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        :rules="[val => val === password || 'Password doesn\'t match']"
      />
      <div class="row justify-end">
        <q-btn
          label="Cancel"
          flat
          class="q-mr-sm"
          :to="{name: 'settings'}"
        />
        <q-btn
          label="Update"
          color="primary"
          :loading="commonStore.loading"
          type="submit"
        />
      </div>
    </q-form>
  </q-page>
</template>
