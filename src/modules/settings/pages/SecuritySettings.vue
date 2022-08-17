<template>
  <q-page padding>
    <q-form
      @submit="handleSetupStore"
      style="max-width: 99%;"
    >
      <q-input
        v-model.trim="oldPassword"
        label="Old Password"
        placeholder="Type your current Password"
        :type="isOldPwd ? 'password' : 'text'"
        :rules="[val => !!val || 'Field is required']"
      >
        <template v-slot:append>
          <q-icon
            :name="isOldPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isOldPwd = !isOldPwd"
          />
        </template>
      </q-input>
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
        v-model.trim="confirmPass"
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        :rules="[val => val === password || 'Password doesn\'t match']"
      />
      <q-btn
        label="Update"
        color="primary"
        :loading="loading"
        type="submit"
        class="q-mt-md"
      />
      <q-btn
        label="Cancel"
        color="grey"
        class="q-ml-sm q-mt-md"
        to="/settings"
      />
    </q-form>
  </q-page>
</template>

<script>
import { renderBackButton } from 'src/mixins/backButtonMixin'
import { mapActions } from 'vuex'
export default {
  name: 'SecuritySettings',

  mixins: [
    renderBackButton({ name: 'Settings' })
  ],

  data () {
    return {
      oldPassword: '',
      password: '',
      confirmPass: '',
      isOldPwd: true,
      isPwd: true,
      loading: false
    }
  },

  methods: {
    ...mapActions({
      resetPassword: 'settings/resetPassword'
    }),
    handleSetupStore () {
      const data = {
        password: this.oldPassword,
        newpassword: this.password,
        retypepassword: this.confirmPass
      }
      this.resetPassword(data)
    }
  }
}
</script>
