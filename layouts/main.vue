<template>
  <teleport to="head">
    <link href="/assets/css/main.css" rel="stylesheet">
  </teleport>
  <div>

    <HorizentalNavbarComponent></HorizentalNavbarComponent>
    <div class="content">
      <slot />
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script setup lang="ts">
import useLocaleAndPusherMixin from "../composables/general/useDirectionHtmlAndPusher";

// Call the composable (mixin) to use the logic
useLocaleAndPusherMixin()


</script>


<style scoped>

</style>