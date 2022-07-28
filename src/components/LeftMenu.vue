<template>
  <q-drawer
    v-model="drawerOpened"
    :width="250"
    :breakpoint="800"
    show-if-above
  >
    <q-scroll-area style="height: calc(100% - 170px); margin-top: 170px; border-right: 1px solid #ddd">
      <q-list padding>
        <q-item
          v-for="navLink in navLinks"
          :key="navLink.id"
          clickable
          v-ripple
          :to="navLink.hash"
        >
          <q-item-section avatar>
            <q-icon :name="navLink.icon" />
          </q-item-section>

          <q-item-section>
            {{ navLink.label }}
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="logout"
        >
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>

          <q-item-section>
            Logout
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      :src="defaultCompanyImage"
      style="height: 170px"
    >
      <div
        class="absolute-top full-height"
        style="background: unset;"
      >
        <div>
          <q-avatar size="56px">
            <img :src="profileImage">
          </q-avatar>
          <div class="block q-pt-sm vertical-middle">
            <div class="text-weight-bold ellipsis">
              {{ fullName }}
            </div>
            <div
              class="text-weight-light ellipsis"
              style="font-size: 11px"
            >
              {{ userProfile.email }}
            </div>
          </div>
        </div>

        <q-select
          dark
          color="white"
          borderless
          dense
          :options="companies"
          option-value="id"
          option-label="company_name"
          v-model="selectedCompany"
          map-options
          emit-value
          @input="handleCompanySelection"
        />
      </div>
    </q-img>
  </q-drawer>
</template>

<script>
import { mapActions } from 'vuex'
import { imageURL } from 'src/utilities.js'

export default {
  name: 'LeftMenu',

  props: {
    drawerState: { type: Boolean, default: false },
    navLinks: { type: Array, required: true },
    userProfile: { type: Object, required: false, default: () => {} },
    companies: { type: Array, required: false, default: () => [] },
    defaultCompany: { type: String, required: false, default: '' },
    logout: { type: Function, default: () => { } }
  },

  computed: {
    drawerOpened: {
      get () {
        return this.drawerState
      },
      set (val) {
        this.$emit('update:drawerState', val)
      }
    },
    fullName () {
      const {
        first_name: fName,
        last_name: lName
      } = this.userProfile
      return `${fName || ''} ${lName || ''}`
    },
    selectedCompany: {
      get () { return this.defaultCompany },
      set () { }
    },
    profileImage () {
      const {
        avatar: image
      } = this.userProfile
      return imageURL(image) || 'https://cdn.quasar.dev/img/boy-avatar.png'
    },

    defaultCompanyImage () {
      const {
        default_image_name: image
      } = this.companies.find(company => company.id === this.selectedCompany) || {}
      return image ? `companies/${image}` : 'menu-banner.jpg'
    }
  },

  methods: {
    ...mapActions({
      setDefaultCompany: 'auth/setDefaultCompany'
    }),
    imageURL,
    handleCompanySelection (id) {
      this.setDefaultCompany(id)
    }
  }
}
</script>
