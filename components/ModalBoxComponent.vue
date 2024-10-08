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
            <label class="mb-3 text-cool-500" v-if="i?.label?.indexOf('http') >= 0">
              {{ i?.label.substr(0,i?.label.indexOf('https://')) }}
              <a class="text-blue-900"  :href="i?.label.substr(i?.label.indexOf('https://'), i?.label.indexOf(' ', i?.label.indexOf('https://')) - i?.label.indexOf('https://')) || i?.label.substr(str.indexOf('https://'))">
                {{ i?.label.substr(i?.label.indexOf('https://'), i?.label.indexOf(' ', i?.label.indexOf('https://')) - i?.label.indexOf('https://')) || i?.label.substr(str.indexOf('https://')) }}
              </a>
              {{ i?.label.substr(i?.label.indexOf('https://') + (i?.label.substr(i?.label.indexOf('https://'), i?.label.indexOf(' ', i?.label.indexOf('https://')) - i?.label.indexOf('https://')) || i?.label.substr(str.indexOf('https://'))).length) }}
            </label>
            <label v-else>{{ i?.label }}</label>
            <UInput
                    v-if="!(i?.type == 'select' || i?.type == 'table') && i?.basedOnAttributeName == undefined"
                    :name="i?.name"
                    :model-value="Object.keys(edited_row).length > 0 ? edited_row[i['name']]:''"
                    :icon="'i-heroicons-'+i?.icon"
                    size="sm"
                    :type="i?.type"
                    :placeholder="i.hasOwnProperty('placeholder') ? (typeof (i?.placeholder) == 'string' ? i?.placeholder:(Object.keys(edited_row).length > 0 ? i?.placeholder['update']:i?.placeholder['create'])):''"
                    :required="typeof (i?.required) == 'string' ? i?.required:(Object.keys(edited_row).length > 0 ? i?.required['update']:i?.required['create'])"
                    ></UInput>
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

            <!-- start in inputs is table -->

            <div v-else-if="i?.type == 'table'" class="mt-2">
              <div class="header w-full grid grid-cols-6 gap-2 text-white bg-blue-900 p-2 rounded mb-2">
                <p v-for="(col,index) in i?.table_columns" :key="index" :class="'text-sm '+(index == 0 ? 'col-span-3':'col-span-1')">
                  {{ col?.label }}
                </p>
              </div>
              <div class="body w-full">
                <div class="item grid grid-cols-6 gap-2 mb-2" v-for="(row_data,ind) in table_data"
                     :key="ind">
                  <div v-for="(col,index_col) in i?.table_columns" :key="index_col" :class="index_col == 0 ? 'col-span-3':'col-span-1'">
                    <div v-if="index_col == i?.data_loop_start_index" class="flex space-x-1 items-center">
                      <input class="w-4 h-4" type="checkbox"
                             v-model="check_box_privileges[row_data[i?.data_start_loop_body?.value?.id]].status"
                             :value="true"
                             >
                      <span>{{ row_data[i?.data_start_loop_body?.value?.value] }}</span>
                    </div>
                    <div v-else>
                      <label class="inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" class="sr-only peer"
                               :checked="check_box_privileges[row_data[i?.data_start_loop_body?.value?.id]].data?.find((e) => e == i?.table_columns[index_col]['id'])"
                               :disabled="check_box_privileges[row_data[i?.data_start_loop_body?.value?.id]].status == false"

                               :name="'item['+row_data[i?.data_start_loop_body?.value?.id]+']'+'[]'"
                               v-model="check_box_privileges[row_data[i?.data_start_loop_body?.value?.id]].data"
                               :value="i?.table_columns[index_col]['id']">
                        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      </label>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <!-- end in inputs is table -->
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
                    :type="i?.type ?? 'text'"
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
import {ref, watch, defineEmits, reactive, onMounted} from "vue";
import dynamic_import from "../mixins/dynamic_import";
import getDataFromStoreDynamicBasedOnTable from "../composables/general/getDataFromStoreDynamicBasedOnTable";

const props = defineProps({
  isOpen: Boolean,
  inputs: Array,
  edited_row:Object,
  store:Object,
});
let dynamic_inputs = reactive({});
import create_dynamic_input from "../composables/Attribute/useSelectOption";
import {keys} from "pusher-js/types/src/core/utils/collections";
let status = ref(false) // for close , open modal
const emit = defineEmits(['update:isOpen']);
const { t } = useI18n();

let table_data = ref([]);
let check_box_privileges = reactive({});



try {
//const response = await $axios.post('/deleteitem',formData);
  store.get_data_action()
}catch (e){}

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
// watch checkbox services privileges from edited row
  console.log('----------------------controls----------------')
  if(table_data.value && table_data.value.length > 0) {
    for (let ser of table_data.value) {
      check_box_privileges[ser?.id] = {
        status:false,
        data:[]
      }
    }
  }
  if(Object.keys(check_box_privileges).length > 0){
      for(let item of Object.keys(check_box_privileges)){
        let controls = props?.edited_row?.services_privileges?.find((e) => e?.service_id == item)?.controls;
        if(controls){
          check_box_privileges[item]['status'] = true;
          check_box_privileges[item]['data'] = [...controls.map((e) => e?.privilege?.id)]
        }
      }
  }
});
watch(() => props.inputs, async (newVal) => {

  table_data.value = await getDataFromStoreDynamicBasedOnTable(newVal)
}, { immediate: true } );







function closeModal() {
  emit('update:isOpen', false);  // Emit the change to parent component
  status.value = false;
}
async function save(){
  try{
    let formData = new FormData(event.target);

    await props.store.save_action(formData);
    //closeModal()
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
