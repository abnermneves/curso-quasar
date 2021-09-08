// import Vue from 'vue'
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
// import 'leaflet/dist/leaflet.css'

import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LGeoJson } from '@vue-leaflet/vue-leaflet'
import { Icon } from 'leaflet'
import { createApp } from 'vue'
import App from '../App.vue'

const app = createApp(App)

app.use('l-map', LMap)
app.use('l-tile-layer', LTileLayer)
app.use('l-marker', LMarker)
app.use('l-tile-layer', LGeoJson)

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
