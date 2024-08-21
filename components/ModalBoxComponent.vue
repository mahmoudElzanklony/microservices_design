<template>
  <div>


    <UModal v-model="internalIsOpen" :transition="false">
      <div class="p-4">

      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
  let props = defineProps(['isOpen'])
  const internalIsOpen = ref(props.isOpen);

</script>