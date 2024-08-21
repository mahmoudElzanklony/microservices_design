<template>
  <div class="flex">
    <NavbarComponent class="w-fit md:w-[300px] bg-gray-50 p-4 border-e h-screen flex flex-col justify-between pb-8"></NavbarComponent>
    <div class="content w-full max-h-screen overflow-y-scroll">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped>

</style>