<template>
  <q-page padding>
    <q-card
      style="max-width: 400px;"
      class="q-mx-auto q-mt-lg"
      square
      flat
    >
      <q-card-section class="q-pt-lg">
        <q-img
          src="~assets/logo_full.png"
          spinner-color="primary"
          contain
          style="max-height: 50px; max-width: 100%;"
        />
      </q-card-section>
      <q-card-section class="text-center">
        {{ message }}
      </q-card-section>
      <div class="relative-position">
        <q-btn
          @click="$router.push({ name: 'auth' })"
          flat
          color="white"
          text-color="primary"
          label="Login"
          class="q-mt-lg text-center col-auto absolute-center"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Confirmation',
  props: {
    message: { type: String, required: true }
  }
}
</script>
