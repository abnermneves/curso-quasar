<template>
  <q-page class="q-pa-md">
    <!-- <q-card>
      <q-card-section>
        <l-map style="height:50vh">
          <l-geo-json :geojson="geojson" :options="geojsonOptions" />
        </l-map>
      </q-card-section>
    </q-card> -->
    <q-card>
      <q-card-section>
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
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import 'leaflet/dist/leaflet.css'
// import { LMap, LGeoJson } from '@vue-leaflet/vue-leaflet'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

export default defineComponent({
  name: 'Maps',
  components: {
    'l-map': LMap,
    'l-tile-layer': LTileLayer,
    'l-marker': LMarker
    // 'l-geo-json': LGeoJson
  },
  data () {
    return {
      geojson: {
        type: 'FeatureCollection',
        features: [
          // ...
        ]
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482]
    }
  },
  async beforeMount () {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import('leaflet/dist/leaflet-src.esm')

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 })
    this.mapIsReady = true
  },
  mounted () {
    this.getLocation()
  },
  methods: {
    getLocation () {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = [position.coords.latitude, position.coords.longitude]
          this.markerLatLng = [position.coords.latitude, position.coords.longitude]
        })
      } else {
        alert('Localização indisponível no seu navegador.')
      }
    }
  }
})

</script>
