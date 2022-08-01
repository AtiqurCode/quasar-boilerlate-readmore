<template>
  <q-layout view="lHh Lpr lff">
    <q-header
      elevated
      class="bg-primary"
    >
      <q-toolbar>
        <q-btn
          v-if="!backButton"
          flat
          round
          dense
          icon="menu"
          @click="drawer = !drawer"
        />
        <q-btn
          v-else
          flat
          round
          dense
          icon="arrow_back"
          @click="handleBackRoute"
        />
        <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>

        <component :is="headerAction" />

        <!-- <select-language class="q-pl-md" /> -->
      </q-toolbar>
    </q-header>

    <left-menu
      v-model:drawer-state="drawer"
      :nav-links="navLinks"
      :user-profile="userProfile"
      :companies="companies"
      :default-company="defaultCompany"
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
import { defineAsyncComponent, ref } from 'vue'
import { navLinks } from 'assets/links'

const LeftMenu = defineAsyncComponent(() => import('components/LeftMenu'))
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

const handleLogout = () => {
  // this.logOutUser()
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
