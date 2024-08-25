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
        <form method="post" enctype="multipart/form-data"
              @submit.prevent="save">
          <div class="mb-5" v-for="(i,index) in inputs" :key="index">
            <label class="mb-3 text-cool-500">{{ i?.label }}</label>
            <input type="hidden" name="id" v-if="Object.keys(edited_row).length > 0" :value="edited_row?.id">
            <UInput
                    v-if="i?.type == 'text'"
                    :name="i?.name"
                    :model-value="Object.keys(edited_row).length > 0 ? edited_row[i['name']]:''"
                    :icon="'i-heroicons-'+i?.icon"
                    size="sm"
                    required></UInput>
            <USelectMenu  v-else-if="i?.type == 'select'"
                    searchable
                    size="sm"
                    :multiple="i?.multiple"
                    value-attribute="id"
                    option-attribute="name"
                    v-model="selected_options_inputs[i?.name]"
                    :name="i?.name"
                    :searchable-placeholder="$t('search.by')+$t('sections.visibility')"
                    class="w-full block"
                    placeholder="Select a visibility" required
                    :options="i?.options_type == 'api'?select_options_api[i?.name]:i?.options_data"
            ></USelectMenu>
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
import {ref, watch, defineEmits, reactive} from "vue";
import dynamic_import from "../mixins/dynamic_import";

const props = defineProps({
  isOpen: Boolean,
  inputs: Array,
  edited_row:Object,
  store:Object,
});

let status = ref(false) // for close , open modal
const emit = defineEmits(['update:isOpen']);
const { t } = useI18n();


let selected_options_inputs = reactive({});
let select_options_api = reactive({}); // to get data from api and put it at select
selections_options()

watch(() => props.isOpen, (newVal) => {
  status.value = newVal;
});
watch(() => props.edited_row, (newVal) => {
  selections_options()
});



function closeModal() {
  emit('update:isOpen', false);  // Emit the change to parent component
  status.value = false;
}
async function save(){
  try{
    await props.store.save_action(new FormData(event.target));
  }catch (e){
    console.log(e)
  }
}

// this for select option value at form
async function selections_options(){
  for(let i = 0; i < props.inputs?.length; i++){
    if(props.inputs[i]?.type == 'select'){
      // check if value is string
      if(typeof props.edited_row[props.inputs[i]?.name] == 'string'){
        selected_options_inputs[props.inputs[i]?.name] = ref(Object.keys(props.edited_row).length > 0 ? props.edited_row[props.inputs[i]?.name]:'') // for select ui
      }else{
        // this is array (multiple selections per select)
        selected_options_inputs[props.inputs[i]?.name] = reactive(props.edited_row[props.inputs[i]?.name]?.map((e) => e?.id));
      }
      if(props.inputs[i]?.options_type == 'api'){
         let store = await dynamic_import(props.inputs[i]?.store_name)
        await store.get_data_action('?limit=9999')
        select_options_api[props.inputs[i]?.name] = store?.data?.data

      }
    }
  }
}

</script>
