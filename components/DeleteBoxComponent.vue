<template>
  <UModal v-model="status" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ t('general.delete') }}
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

      <div class="px-6">
        <p class="text-3xl mb-2">{{ t('delete.text') }}</p>
        <p class="text-neutral-400 accent-gray-50 mb-4">{{ t('delete.note') }}</p>
        <div class="flex items-center justify-center space-x-3">
          <UButton
              icon="i-heroicons-check"
              size="lg"
              color="primary"
              variant="solid"
              :label="t('general.accept')"
              :trailing="false"
              @click="delete_item"
          />
          <UButton
              icon="i-heroicons-x-mark"
              size="lg"
              color="red"
              variant="solid"
              :label="t('general.cancel')"
              :trailing="false"
              @click="closeModal"
          />
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from "vue";
import {DeleteStore} from "../store/DeleteItems";

const props = defineProps({
  isOpen: Boolean,
  table: String,
  id: Array as PropType<number[]>
});
let store = DeleteStore();

store.data = {
  table:props?.table,
  id:props?.id
}
let status = ref(false) // for close , open modal
const emit = defineEmits(['update:isOpen']);
const { t } = useI18n();


watch(() => props.isOpen, (newVal) => {
  status.value = newVal;
});

function closeModal() {
  emit('update:isOpen', false);  // Emit the change to parent component
  status.value = false;
}

async function delete_item(){
  await store.delete_action(props?.table)
  closeModal()
}

</script>
