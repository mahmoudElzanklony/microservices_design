<template>
  <div class="input-data"  v-for="(i,index) in sections_attr_ids" :key="index">
    <label v-if="i?.section_id != null">{{ sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id']).label }}</label>
    <input type="hidden" name="section_id[]" :value="sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.id">
    <input type="hidden" name="attribute_id[]" :value="sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id'])?.id">
    <UInput v-if="!(i?.section_id == null || sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id']).type == 'select')"
            :style="{ outline: 'none' }"
            :type="sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id']).type"
            :name="sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id']).type != 'file' ?'answer[]':'files[]'"
            v-model="selected[index]"
            :icon="'i-heroicons-'+(sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id']).icon)"
            size="sm"
    ></UInput>
    <USelectMenu v-else
                 searchable
                 size="sm"
                 value-attribute="name"
                 option-attribute="name"
                 :name="'answer[]'"
                 v-model="selected[index]"
                 :searchable-placeholder="$t('search.by')+sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id'])?.name"
                 class="w-full block"
                 placeholder="Select best option"
                 :options="sectionData.find((e) => e.attributes.find((a) => a.id == i['attribute_id']))?.attributes?.find((e) => e?.id == i['attribute_id'])?.options"
    ></USelectMenu>
  </div>
  <div class="input-submit">
    <button class="w-full"  :type="submit == true?'submit':'button'" >
      {{ $t('general.save') }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";

  let props = defineProps(['sections_attr_ids','sectionData','submit'])
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