<template>
  <img :src="process.env.API_BASE_URL+src">
</template>

<script setup lang="ts">
  defineProps(['src'])
</script>


<style scoped>

</style>