
<template >

  <UAccordion :items="title">

    <template v-for="(sec,key) in title" class="mb-4" :key="key"
              v-slot:[slot_name(sec)]>
      <div class="style-sec mb-4" v-for="(i,index) in inputs[slot_name(sec)]" :key="index">
        <label>{{ i?.label }}</label>
        <UTextarea v-if="i?.type == 'textarea'" :name="i?.name"></UTextarea>
        <UInput
            v-else-if="i?.type != 'select'"
            :type="i?.type"
             min="0" max="100"
            :name="i?.name"
            @change="change_value_num_fn"
            size="sm"
            v-model="style_elements[slot_name(sec)][i?.name]"
            :icon="'i-heroicons-'+i?.icon"
            required
        ></UInput>
        <USelectMenu
            v-else
            searchable
            size="sm"
            v-model="style_elements[slot_name(sec)][i?.name]"

            :name="i?.name"
            :searchable-placeholder="$t('search.by') + i?.name"
            class="w-full block"
            placeholder="Select a section"
            required
            :options="i?.options"
        ></USelectMenu>
      </div>

    </template>
  </UAccordion>
</template>
<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {useNuxtApp} from "nuxt/app";
  const { t } = useI18n();
  let props = defineProps(['title','inputs','styles'])
  // Define the emit function
  const emit = defineEmits(['form_style_fn']);
  let slot_name = (sec:string) => sec['slot'] ;
  let style_elements = props.styles;

  if(!style_elements){
    style_elements = reactive({})
    for(let i of Object.values(props.title)){
       style_elements[i?.slot] = reactive({})
      for(let input_name of props.inputs[i?.slot]){
        style_elements[i?.slot][input_name?.name] = ''
      }
    }
  }

watch(() => style_elements, (newVal) => {
  emit('form_style_fn', newVal);
},{
  deep:true
});


function change_value_num_fn(){
  const Toast = useNuxtApp().$Toast;
  if(event.target.value < 0){
    event.target.value = 0;
    Toast.error(t('errors.num_error_input'));
  }else if(event.target.value > 100){
    event.target.value = 100;
    Toast.error(t('errors.num_error_input'));
  }



}
</script>


<style scoped>

</style>