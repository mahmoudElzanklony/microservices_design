<template>
  <client-only>
    <div id="map" ref="mapElement" style="height: 400px; width: 100%;"></div>
  </client-only>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mapElement = ref(null)
let props = defineProps(['lat','lon'])
onMounted(async () => {

  if (process.client) {
    const L = await import('leaflet')
    await import('leaflet/dist/leaflet.css')

    // Example lat and lon

    const zoomLevel = 13
    if(props.lat && props.lon) {
      // Initialize the map on client-side
      const map = await L.map(mapElement.value).setView([props.lat, props.lon], zoomLevel)

      // Set up map tiles from OpenStreetMap
      await L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // Add a marker
      L.marker([props.lat, props.lon]).addTo(map).openPopup()

    }

  }
})
</script>

<style scoped>
#map {
  height: 200px !important;
  width: 100%;
}
</style>
