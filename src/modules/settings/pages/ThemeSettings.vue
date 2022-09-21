<template>
  <q-page padding>
    <q-select
      label="Change Theme Color"
      :options="colorList"
      option-label="name"
      option-value="value"
      v-model="primary"
      label-color="primary"
    >
      <template #option="scope">
        <q-item
          clickable
          @click="setThemeColor(scope.opt)"
        >
          <q-item-section>
            <q-item-label :style="{ color: scope.opt.value}">
              {{ scope.opt.name }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </q-page>
</template>

<script>
import { renderBackButton } from 'src/mixins/backButtonMixin'
import { colors } from 'quasar'

export default {
  name: 'AccountSettings',

  mixins: [
    renderBackButton({ name: 'Settings' })
  ],

  data () {
    return {
      primary: {
        name: '',
        value: ''
      },
      colorList: [
        {
          name: 'Default',
          value: '#027be3'
        },
        {
          name: 'Crimson',
          value: '#DC143C'
        },
        {
          name: 'OrangeRed',
          value: '#FF4500'
        },
        {
          name: 'Yellow',
          value: '#FFFF00'
        },
        {
          name: 'BlueViolet',
          value: '#8A2BE2'
        },
        {
          name: 'Orchid',
          value: '#DA70D6'
        },
        {
          name: 'DeepPink',
          value: '#FF1493'
        },
        {
          name: 'DarkSlateBlue',
          value: '#483D8B'
        },
        {
          name: 'LimeGreen',
          value: '#32CD32'
        },
        {
          name: 'Green',
          value: '#008000'
        },
        {
          name: 'LightSeaGreen',
          value: '#20B2AA'
        },
        {
          name: 'Cyan',
          value: '#00FFFF'
        },
        {
          name: 'MediumBlue',
          value: '#0000CD'
        },
        {
          name: 'Gray',
          value: '#808080'
        }

      ]
    }
  },

  created () {
    const colorCode = colors.getBrand('primary')
    const colorName = this.colorList.find(color => color.value === colorCode).name

    this.primary.name = colorName
    this.primary.value = colorCode
  },

  methods: {
    setThemeColor (color) {
      this.primary.name = color.name
      this.primary.value = color.value

      colors.setBrand('primary', this.primary.value)
    }

  }
}
</script>
