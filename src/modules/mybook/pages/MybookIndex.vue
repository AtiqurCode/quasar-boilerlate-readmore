<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-ripple
      class="my-card cursor-pointer q-hoverable"
    >
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Uploaded all books pdf
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
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Uploaded all books pdf
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
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Uploaded all books pdf
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
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Uploaded all books pdf
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
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Uploaded all books pdf
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
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Uploaded all books pdf
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
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6 q-mb-xs">
          My Uploaded all books pdf
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

    <q-dialog v-model="createTaskDialog">
      <AddBook />
    </q-dialog>

    <q-page-sticky
      position="bottom-right"
      class="q-ma-md"
    >
      <q-btn
        class="q-py-sm fabIconBg"
        @click="onClickCreateTask"
        style="border-radius: 10px"
        color="primary"
        icon="add"
      />
    </q-page-sticky>
  </div>
</template>

<script>
import { ref } from 'vue'
import AddBook from '../components/AddBook.vue'

export default {
  data () {
    return {
      stars: ref(4),
      createTaskDialog: false,
      cancelEnabled: ref(false),
      enabled: ref(true)
    }
  },
  components: {
    AddBook
  },
  methods: {
    onCloseDialog () {
      this.createTaskDialog = false
    },
    onCreateTask () {
      this.createTaskDialog = false
    },
    onClickCreateTask () {
      this.createTaskDialog = true
      // this.$router.push('/create-task')
    },
    abs () {
      console.log(this.enabled)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
