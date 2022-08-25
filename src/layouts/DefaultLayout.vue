<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from 'stores/common-store'
import { useAuthStore } from 'stores/auth-store'
import { navLinks } from 'src/assets/navigation-links'

const NavigationDrawer = defineAsyncComponent(() => import('components/NavigationDrawer.vue'))
// const SelectLanguage = defineAsyncComponent(() => import('components/SelectLanguage'))

const drawer = ref(true)

const commonStore = useCommonStore()
const router = useRouter()
const handleBackRoute = () => {
  if (commonStore.backButton?.routerParams) {
    router.replace(commonStore.backButton.routerParams)
  } else {
    router.back()
  }
}

const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logOutUser()
}
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <q-header
      elevated
      class="bg-primary"
    >
      <q-toolbar>
        <q-btn
          v-if="!drawer"
          flat
          round
          dense
          icon="o_menu"
          @click="drawer = !drawer"
        />
        <q-btn
          v-if="commonStore.backButton?.show"
          flat
          round
          dense
          style="height: 2.4em"
          icon="o_arrow_back"
          @click="handleBackRoute"
        />
        <q-toolbar-title>{{ commonStore.pageTitle }}</q-toolbar-title>

        <!-- <component :is="headerAction" /> -->

        <!-- <select-language class="q-pl-md" /> -->
      </q-toolbar>
    </q-header>

    <NavigationDrawer
      v-model:drawer-state="drawer"
      :nav-links="navLinks"
      :user-profile="authStore.userProfile"
      :companies="authStore.companies"
      :default-company="authStore.defaultCompany"
      :logout="handleLogout"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
