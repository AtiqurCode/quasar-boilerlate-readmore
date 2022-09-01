<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from 'stores/common-store'
import { useAuthStore } from 'stores/auth-store'
import { useUserStore } from 'stores/user-store'
import { useCompanyStore } from 'stores/company-store'
import { navLinks } from 'src/assets/navigation-links'

const NavigationDrawer = defineAsyncComponent(() => import('components/NavigationDrawer.vue'))
// const SelectLanguage = defineAsyncComponent(() => import('components/SelectLanguage'))

const drawer = ref(true)

const userStore = useUserStore()
const commonStore = useCommonStore()
const router = useRouter()
const handleBackRoute = () => {
  if (commonStore.backButton?.routerParams) {
    router.replace(commonStore.backButton.routerParams)
  } else {
    router.back()
  }
}

const companyStore = useCompanyStore()
companyStore.setCurrentCompany()
const handleCompanySelection = (id) => {
  companyStore.setCurrentCompany(id)
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
      :user-profile="userStore.userProfile"
      :companies="companyStore.companies"
      :default-company="companyStore.currentCompany"
      @logout="handleLogout"
      @select-company="handleCompanySelection"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
