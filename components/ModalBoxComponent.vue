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
          <input type="hidden" name="id" v-if="Object.keys(edited_row).length > 0"
                 :value="edited_row?.id">
          <div class="mb-5" v-for="(i,index) in inputs" :key="index">
            <label class="mb-3 text-cool-500">{{ i?.label }}</label>

            <UInput
                    v-if="i?.type == 'text' && i?.basedOnAttributeName == undefined"
                    :name="i?.name"
                    :model-value="Object.keys(edited_row).length > 0 ? edited_row[i['name']]:''"
                    :icon="'i-heroicons-'+i?.icon"
                    size="sm"
                    :required="i?.required"></UInput>
            <USelectMenu  v-else-if="i?.type == 'select' && i?.basedOnAttributeName == undefined"
                    searchable
                    size="sm"
                    :multiple="i?.multiple"
                    value-attribute="id"
                    option-attribute="name"
                    v-model="selected_options_inputs[i?.name]"
                    :name="i?.name"
                    :searchable-placeholder="'select option'"
                    class="w-full block"
                    :placeholder="'Select a '+i?.name" :required="i?.required"
                    :options="i?.options_type == 'api'?select_options_api[i?.name]:i?.options_data"
            ></USelectMenu>
            <div class="mt-3"
                 v-if="i?.basedOnAttributeName != undefined && i?.basedOnAttributeName == inputs[index-1]?.name && selected_options_inputs[i?.basedOnAttributeName] == i?.basedOnAttributeValue">
              <div class="flex justify-between space-x-1 items-center mb-2"
                   v-for="(item,key) in dynamic_inputs[i?.basedOnAttributeValue]" :key="key">
                <UInput v-for="(lang,k) in i['group']" :key="k"
                    :name="lang?.alias"
                    :placeholder="lang?.label"
                    :model-value="item[lang?.name.replace('[]','')]"
                    v-model="dynamic_inputs[i?.basedOnAttributeValue][key][lang?.name.replace('[]','')]"
                    :icon="'i-heroicons-'+lang?.icon"
                    size="sm"
                    :required="i?.required"></UInput>
                <UButton
                         v-if="key > 0"
                         @click="dynamic_inputs[i?.basedOnAttributeValue].splice(key,1)"
                         icon="i-heroicons-x-mark" color="red">
                </UButton>

              </div>

              <UButton class="mt-3"
                       @click="create_dynamic_input(dynamic_inputs,inputs,edited_row,i?.basedOnAttributeValue)"
                       icon="i-heroicons-plus" color="blue">
              </UButton>
            </div>
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
let dynamic_inputs = reactive({});
import create_dynamic_input from "../composables/Attribute/useSelectOption";
let status = ref(false) // for close , open modal
const emit = defineEmits(['update:isOpen']);
const { t } = useI18n();






let selected_options_inputs = reactive({});
let select_options_api = reactive({}); // to get data from api and put it at select
selections_options()

if(props?.edited_row){
  for(let i =0; i < Object.keys(dynamic_inputs); i++){
    if(Object.values(selected_options_inputs).includes(Object.keys(dynamic_inputs)[i])){
      dynamic_inputs[Object.keys(dynamic_inputs)[i]] = props?.edited_row['options']
    }
  }

}

watch(() => props.isOpen, (newVal) => {
  status.value = newVal;
  create_dynamic_input(dynamic_inputs,props.inputs,props.edited_row)
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
    let formData = new FormData(event.target);

    await props.store.save_action(formData);
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
        selected_options_inputs[props.inputs[i]?.name] = (props.edited_row[props.inputs[i]?.name]?.map((e) => e?.id));
      }
      if(props.inputs[i]?.options_type == 'api'){
         let store = await dynamic_import(props.inputs[i]?.store_name)
        await store.get_data_action('?limit=9999')
        select_options_api[props.inputs[i]?.name] = store?.data?.data

      }
    }
  }
}

/*
*
* <!-- for Input dynamic
                                    :model-value="Object.keys(edited_row).length > 0 ? edited_row[i['basedOnAttributeApi']][key][lang?.name.replace('[]','')]:''"
                -->
* */
</script>
