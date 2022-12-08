<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Share books lists
        </div>
        <div class="row no-wrap items-center">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="primary"
          />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              color="teal"
              icon="bookmark"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="share"
            />
          </q-card-actions>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Share books lists
        </div>
        <div class="row no-wrap items-center">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="primary"
          />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              color="teal"
              icon="bookmark"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="share"
            />
          </q-card-actions>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Share books lists
        </div>
        <div class="row no-wrap items-center">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="primary"
          />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              color="teal"
              icon="bookmark"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="share"
            />
          </q-card-actions>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Share books lists
        </div>
        <div class="row no-wrap items-center">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="primary"
          />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              color="teal"
              icon="bookmark"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="share"
            />
          </q-card-actions>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Share books lists
        </div>
        <div class="row no-wrap items-center">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="primary"
          />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              color="teal"
              icon="bookmark"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="share"
            />
          </q-card-actions>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Share books lists
        </div>
        <div class="row no-wrap items-center">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="primary"
          />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              color="teal"
              icon="bookmark"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="share"
            />
          </q-card-actions>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Share books lists
        </div>
        <div class="row no-wrap items-center">
          <q-rating
            size="18px"
            v-model="stars"
            :max="5"
            color="primary"
          />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          <q-card-actions align="right">
            <q-btn
              flat
              round
              color="teal"
              icon="bookmark"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="share"
            />
          </q-card-actions>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(4)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
