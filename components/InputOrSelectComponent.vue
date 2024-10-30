<template>

  <UInput
      v-if="!(i?.type == 'select' || i?.type == 'table') && i?.basedOnAttributeName == undefined"
      :name="i?.name"
      :model-value="input_val"
      :icon="'i-heroicons-'+i?.icon"
      size="sm"
      :type="i?.type"
      :placeholder="i.hasOwnProperty('placeholder') ? (typeof (i?.placeholder) == 'string' ? i?.placeholder:(Object.keys(edited_row).length > 0 ? i?.placeholder['update']:i?.placeholder['create'])):''"
      :required="typeof (i?.required) == 'string' ? i?.required:(edited_row && Object.keys(edited_row).length > 0 ? i?.required['update']:i?.required['create'])"
  ></UInput>
  <USelectMenu  v-else-if="i?.type == 'select' && i?.basedOnAttributeName == undefined"
                searchable
                size="sm"
                :multiple="i?.multiple"
                value-attribute="id"
                option-attribute="name"
                v-model="input_val"
                :name="i?.name"
                :searchable-placeholder="'select option'"
                class="w-full block"
                :placeholder="'Select a '+i?.name" :required="i?.required"
                :options="i?.options_type == 'api'?select_options_api[i?.name]:i?.options_data"
  ></USelectMenu>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  let input_val = ref('');
  let props = defineProps(['i','selected_options_inputs','select_options_api','edited_row'])
  if(!(props?.i?.type == 'select' || props?.i?.type == 'table') && props?.i?.basedOnAttributeName == undefined){
    input_val.value = (Object.keys(props?.edited_row).length > 0 ? props?.edited_row[props?.i?.name]:'')
  }else{
    input_val.value = props?.selected_options_inputs[props?.i?.name]
  }
</script>



<style scoped>

</style>