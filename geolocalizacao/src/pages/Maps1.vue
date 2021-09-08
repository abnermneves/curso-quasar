<template>
  <q-page class="q-pa-md">
    <l-map
      style="height: 350px"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      >
      </l-tile-layer>
      <l-marker
        :lat-lng="markerLatLng"
      >
      </l-marker>
    </l-map>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Maps',
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 3,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482]
    }
  }
})

</script>
