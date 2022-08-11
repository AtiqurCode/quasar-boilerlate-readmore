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
          v-if="backButton"
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

    <LeftMenu
      v-model:drawer-state="drawer"
      :nav-links="navLinks"
      :user-profile="authStore.userProfile"
      :companies="authStore.companies"
      :default-company="authStore.defaultCompany"
      :logout="handleLogout"
    />

    <q-page-container>
      <router-view
        v-model:back-button="backButton"
        v-model:back-target="backRoute"
      />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useCommonStore } from 'stores/common-store'
import { useAuthStore } from 'stores/auth-store'
import { navLinks } from 'src/assets/navigation-links'
import LeftMenu from 'src/components/LeftMenu.vue'

// const LeftMenu = defineAsyncComponent(() => import('components/LeftMenu'))
// const SelectLanguage = defineAsyncComponent(() => import('components/SelectLanguage'))

const drawer = ref(true)
const backButton = ref(false)

const backRoute = ref(null)
const handleBackRoute = () => {
  // if (this.backRoute) {
  //   this.$router.replace(this.backRoute)
  // } else {
  //   this.$router.back()
  // }
}

const commonStore = useCommonStore()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logOutUser()
}
</script>

<!-- <script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',

  components: {
    LeftMenu: () => import('components/LeftMenu'),
    SelectLanguage: () => import('components/SelectLanguage')
  },

  data () {
    return {
      drawer: true,
      backButton: false,
      backRoute: null
    }
  },

  computed: {
    ...mapState({
      pageTitle: state => state.common.pageTitle,
      headerAction: state => state.common.headerAction,
      userProfile: state => state.auth.userProfile,
      defaultCompany: state => state.auth.defaultCompany,
      companies: state => state.companies.loadedCompanies
    }),
    navLinks () {
      return navLinks
    }
  },

  methods: {
    ...mapActions({
      logOutUser: 'auth/logOutUser'
    }),
    handleBackRoute () {
      if (this.backRoute) {
        this.$router.replace(this.backRoute)
      } else {
        this.$router.back()
      }
    },
    handleLogout () {
      this.logOutUser()
    }
  }
}
</script>
-->
