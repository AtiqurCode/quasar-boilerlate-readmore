<script setup>
const settingItems = [
  {
    header: 'General Settings',
    sections: [
      {
        title: 'My Profile',
        caption: 'Update your Account information',
        icon: 'o_face',
        hash: { name: 'profileSettings' }
      },
      {
        title: 'Change Password ',
        caption: 'Change your Password and other security information',
        icon: 'o_key',
        hash: '/settings/security'
      },
      {
        title: 'Change Theme ',
        caption: 'Change your theme color',
        icon: 'o_display_settings',
        hash: '/settings/theme'
      }
    ]
  }
]

</script>

<template>
  <q-page padding>
    <q-list>
      <div
        v-for="item in settingItems"
        :key="item.id"
      >
        <q-item-label
          v-if="item.header"
          header
        >
          {{ item.header }}
        </q-item-label>
        <q-item
          v-for="section in item.sections"
          :key="section.id"
          clickable
          v-ripple
          :to="section.hash"
        >
          <q-item-section avatar>
            <q-icon
              color="primary"
              :name="section.icon"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label overline>
              {{ section.title }}
            </q-item-label>
            <q-item-label caption>
              {{ section.caption }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-page>
</template>
