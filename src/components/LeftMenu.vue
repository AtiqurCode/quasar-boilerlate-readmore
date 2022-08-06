<script setup>
import { computed } from 'vue'
// import { backEndStorageURL } from 'utilities/methods'
import { useAuthStore } from 'stores/auth-store'

const props = defineProps({
  drawerState: { type: Boolean, default: false },
  navLinks: { type: Array, required: true },
  userProfile: { type: Object, required: false, default: () => {} },
  companies: { type: Array, required: false, default: () => [] },
  defaultCompany: { type: String, required: false, default: '' },
  logout: { type: Function, default: () => { } }
})

const emit = defineEmits(['update:drawerState'])
const drawerOpened = computed({
  get () {
    return props.drawerState
  },
  set (val) {
    emit('update:drawerState', val)
  }
})

// const fullName = computed(() => {
//   const {
//     first_name: fName,
//     last_name: lName
//   } = props.userProfile
//   return `${fName || ''} ${lName || ''}`
// })

const selectedCompany = computed({
  get () { return props.defaultCompany },
  set () { }
})

// const profileImage = computed(() => {
//   const {
//     avatar: image
//   } = props.userProfile
//   return backEndStorageURL(image) || 'https://cdn.quasar.dev/img/boy-avatar.png'
// })

const defaultCompanyImage = computed(() => {
  const {
    default_image_name: image
  } = props.companies.find(company => company.id === selectedCompany.value) || {}
  return image ? `companies/${image}` : 'images/menu-banner.jpg'
})

const authStore = useAuthStore()
const handleCompanySelection = (id) => {
  authStore.setDefaultCompany(id)
}
</script>

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
          <!-- <q-avatar size="56px">
            <img :src="profileImage">
          </q-avatar> -->
          <div class="block q-pt-sm vertical-middle">
            <div class="text-weight-bold ellipsis">
              <!-- {{ fullName }} -->
            </div>
            <div
              class="text-weight-light ellipsis"
              style="font-size: 11px"
            >
              {{ userProfile?.email }}
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
