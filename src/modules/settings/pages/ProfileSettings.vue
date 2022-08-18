<script setup>
import { ref } from 'vue'
import { useBackButton } from 'composables/backButton'
import { backEndStorageURL } from 'utilities/methods'
import { useUserStore } from 'stores/user-store'
import { useCommonStore } from 'stores/common-store'

useBackButton()

const commonStore = useCommonStore()
const userStore = useUserStore()
const { first_name: fName, last_name: lName } = userStore.userProfile
const firstName = ref(fName),
  lastName = ref(lName),
  readonly = ref(true),
  url = ref('')

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  url.value = URL.createObjectURL(file)
  userStore.uploadImage({ id: userStore.userProfile.id, imageFile: file })
}

const handleSubmit = (val) => {
  if (readonly.value) {
    readonly.value = false
  } else {
    userStore.updateUserProfile({
      id: this.userProfile.id,
      first_name: this.firstName,
      last_name: this.lastName
    })
  }
}
</script>

<template>
  <q-page padding>
    <form class="form-container">
      <div
        class="form-style"
        style="display: flex"
      >
        <label
          for="actual-btn"
          class="upload"
        >
          <q-img
            class="image"
            placeholder-src="/icons/icon.png"
            spinner-color="white"
            :src="url || backEndStorageURL(userStore.userProfile.avatar)"
            style="height: 140px; max-width: 155px"
          />
          <input
            type="file"
            id="actual-btn"
            ref="imageURL"
            @change="handleFileUpload"
            hidden
          >
          <span>CHANGE IMAGE</span>
        </label>
      </div>
    </form>
    <q-form
      @submit="handleSubmit"
      style="max-width: 500px;"
      class="q-mx-auto q-mt-md"
    >
      <q-input
        v-model.trim="firstName"
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
        v-model.trim="lastName"
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
      <div class="row justify-end">
        <q-btn
          label="Cancel"
          flat
          class="q-mr-sm"
          :to="{name: 'settings'}"
        />
        <q-btn
          label="Save"
          color="primary"
          :loading="commonStore.loading"
          type="submit"
        />
      </div>
    </q-form>
  </q-page>
</template>

<style scoped>
.form-container .upload {
  color: rgb(139, 139, 139);
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  margin: 0px;
}
.form-container .image {
  display: block;
  margin: 1rem auto;
}
.form-container .form-style {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  vertical-align: middle;
  display: flex;
  position: relative
}
.form-container .form-style:hover{
  outline: 2px solid rgba(223, 223, 223, 0.651);
}
</style>
