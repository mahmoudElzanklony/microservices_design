<template>
  <UModal  v-model="status"  prevent-close>
    <UCard  :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800'}">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ $t('clients.location') }}
          </h3>
          <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="closeModal"
          />
        </div>
      </template>
      <MapComponent v-if="row?.latitude" :lat="row?.latitude" :lon="row?.longitude" />
    </UCard>
  </UModal>

</template>

<script setup lang="ts">

import MapComponent from "./MapComponent.vue";
import {defineEmits, ref, watch} from "vue";
const props = defineProps({
  isOpen: Boolean,
  row:Object
});

let status = ref(false) // for close , open modal

const emit = defineEmits(['update:isOpen']);
function closeModal() {
  emit('update:isOpen', false);  // Emit the change to parent component
  status.value = false;
}

watch(() => props.isOpen, (newVal) => {
  status.value = newVal;
});
</script>


<style scoped>

</style>