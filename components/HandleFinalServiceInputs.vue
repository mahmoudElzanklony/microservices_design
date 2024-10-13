<template>
  <div class="input-data mb-2"  v-for="(i,index) in sections_attr_ids" :key="index"
       :class="attributes_data.find((e) =>  e?.id == i['attribute_id'])?.type == 'recaptcha'?'!w-full':''">
    <div class="flex items-center space-x-2">
      <label v-if="i?.attribute_id != null">{{ attributes_data.find((e) => e.id ==  i['attribute_id'])?.label }}</label>
      <UTooltip v-if="attributes_data.find((e) =>  e?.id == i['attribute_id'])?.type == 'file'"
                :popper="{ placement: 'right' }"
                :text="$t('tips.upload')" >
        <UIcon
               name="i-heroicons-question-mark-circle" class="w-5 h-5 " />
      </UTooltip>

    </div>
    <input type="hidden" name="attribute_id[]" :value="i?.attribute_id">
    <RecaptchaComponent class="mt-3 w-full" v-if="attributes_data.find((e) =>  e?.id == i['attribute_id'])?.type == 'recaptcha'"></RecaptchaComponent>
    <UInput v-else-if="!(attributes_data.find((e) =>  e?.id == i['attribute_id'])?.type == 'select')"
            :style="{ outline: 'none' }"
            :type="attributes_data.find((e) =>  e?.id == i['attribute_id'])?.type"
            :name="attributes_data.find((e) =>  e?.id == i['attribute_id'])?.type != 'file' ?'answer['+index+']':'answer['+index+']'"
            v-model="selected[index]"
            :icon="'i-heroicons-'+(attributes_data.find((e) =>  e?.id == i['attribute_id'])?.icon)"
            size="sm"
    ></UInput>
    <USelectMenu v-else
                 searchable
                 size="sm"
                 value-attribute="name"
                 option-attribute="name"
                 :name="'answer['+index+']'"
                 v-model="selected[index]"
                 :searchable-placeholder="$t('search.by')+attributes_data.find((e) =>  e?.id == i['attribute_id'])?.name"
                 class="w-full block"
                 placeholder="Select best option"
                 :options="attributes_data.find((e) =>  e?.id == i['attribute_id'])?.options"
    ></USelectMenu>
  </div>
  <div class="input-submit">
    <button class="w-full"  :type="submit == true?'submit':'button'" :disabled="sections_attr_ids.find((i) => attributes_data.find((e) =>  e?.id == i['attribute_id'])?.type == 'recaptcha') != null">
      {{ $t('general.save') }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";
  import RecaptchaComponent from "./RecaptchaComponent.vue";

  let props = defineProps(['sections_attr_ids','attributes_data','submit'])
  let selected = reactive([]);
  for(let i in props.sections_attr_ids){
    selected[i] = '';
  }

</script>



<style scoped>

.input-data{
  width: 100%;
}
.input-submit{
  border:0px;
  background-color:green;
  color:white;
  text-align: center;
  padding: 7px 25px;
  border-radius: 8px;
  margin: auto;
}
</style>