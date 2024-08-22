<template>
  <UModal v-model="status" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ t('general.save_txt') }}
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
        <form>
          <div class="mb-5" v-for="(i,index) in inputs" :key="index">
            <label class="mb-3 text-cool-500">{{ i?.label }}</label>
            <input type="hidden" v-if="Object.keys(edited_row).length > 0" :value="edited_row?.id">
            <UInput :name="i?.name"
                    :model-value="Object.keys(edited_row).length > 0 ? edited_row[i['name']]:''"
                    :icon="'i-heroicons-'+i?.icon"
                    size="sm"
                    required></UInput>
          </div>
          <div class="mb-2.5">
            <UButton  type="submit" block>
              {{ $t('general.save') }}
            </UButton>
          </div>
        </form>
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from "vue";

const props = defineProps({
  isOpen: Boolean,
  inputs: Array,
  edited_row:Object,
});

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


</script>
