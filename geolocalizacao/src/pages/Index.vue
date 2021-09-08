<template>
  <q-page class="q-pa-md q-gutter-md">
    <div class="row justify-center">
      <img
        alt="Quasar logo"
        src="~assets/map.svg"
        style="width: 50%"
      >
    </div>
    <div class="row justify-center">
      <q-btn
        color="primary"
        icon="location_on"
        @click="getLocation"
      >
        Minha licalização
      </q-btn>
    </div>
    <div v-if="latitude && longitude" class="text-center">
      <p class="">Latitude: {{ latitude }}</p>
      <p class="">Longitude: {{ longitude }}</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      latitude: '',
      longitude: ''
    }
  },
  methods: {
    getLocation () {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude
        })
      } else {
        alert('Localização indisponível no seu navegador.')
      }
    }
  }
})
</script>
