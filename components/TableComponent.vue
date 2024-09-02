<template>
    <teleport to="body">
      <ModalBox :is-open="isOpen"></ModalBox>
    </teleport>
    <div class="flex items-center justify-between my-2.5">
      <h2 class="text-3xl mb-0">
        <span>{{ title }}</span>
        <span  class="text-xl mx-2">({{ $t('general.total') }}:</span>
        <strong class="text-xl text-primary">{{ store.data?.meta?.total }}</strong>
        <span class="text-xl">)</span>
      </h2>
      <ul class="flex items-center">
        <li>
          <UButton v-if="modal_inputs.length > 0"
              class="mx-3"
              icon="i-heroicons-plus"
              size="lg"
              color="primary"
              variant="solid"
              @click="isOpenForModal = true; edited_row = {}"
              :label="$t('general.add_item')"
              :trailing="false"
          />
          <UButton
              icon="i-heroicons-trash"
              size="lg"
              color="red"
              variant="solid"
              :label="$t('general.delete')"
              :trailing="false"
          />
        </li>
      </ul>
    </div>
    <div class="filters flex">
      <slot name="filters"></slot>
    </div>
    <UTable
        :loading="store?.loading"
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
        :progress="{ color: 'primary', animation: 'carousel' }"
        :columns="columns"
        :rows="store.data?.data"
        v-model="selected"
        sort-mode="manual"
    >

      <template v-for="i in data_row_relations"  v-slot:[`${i[0]}-data`] = {row} >
        <UBadge  color="black" v-if="row[i[0]].length == 0">{{ $t('general.no_data') }}</UBadge>
        <UBadge size="sm" :class="key > 0 ? 'mx-1':'' " :key="key" v-for="(item,key) in row[i[0]]" :label="item[i[1]]" variant="subtle"></UBadge>
      </template>
      <template #icon-data="{ row }">
        <div class="flex space-x-2 items-center">
          <UBadge size="sm" class="text-xs p-1">{{ row?.icon }}</UBadge>
          <Icon class="w-8 h-8" :name="'heroicons:'+row?.icon"></Icon>
        </div>
      </template>

      <template v-if="store.data?.data.length > 0 && store.data?.data[0].latitude" #expand="{ row }">
        <handle-table-client-answer :row="row"></handle-table-client-answer>
      </template>
      <template #actions-data="{ row }">
        <UDropdown :items="row_actions(row,handleDelete)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page"
                   :pageCount="10"
                   :total="store.data?.meta?.total" />
    </div>

  <DeleteBoxComponent @update:isOpen="closeModal"
                      :table="table"
                      :id="deleted_ids"
                      :is-open="isOpen"></DeleteBoxComponent>

  <ModalBoxComponent v-if="modal_inputs.length > 0" @update:isOpen="closeModal"
                     :edited_row="edited_row"
                     :is-open="isOpenForModal"
                     :store="store"
                     :inputs="modal_inputs"></ModalBoxComponent>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref, watch} from "vue";
import ModalBox from "./ModalBoxComponent.vue";
import FilterTable from "../dom/FilterTable";
import process from "node:process";
import HandleTableClientAnswer from "./HandleTableClientAnswer.vue";
// define variables
let props = defineProps(['title','columns','data_row_relations','modal_inputs','table','store_name','row_actions'])
//---------------- start of store------------
let store = props.store_name()
await store.get_data_action();


//---------------- end of store------------
const filterString = ref(''); // for filter inputs
let isOpen = ref(false); // for delete modal pop up
let isOpenForModal = ref(false); // for edit modal pop up
let edited_row = reactive({})
const selected = ref([store.data?.data.length > 0 ? store.data?.data[0] : '' ])
// for pagination table
const page = ref(1)
watch(() => page.value, async (newVal) => {
  await store.get_data_action(filterString.value.length < 3 ? '?page='+page.value:filterString.value+'&page='+page.value);
});


onMounted(async ()=>{
  FilterTable('.search-input input,.search-input select',updateFilters)
})



async function updateFilters(newFilters) {
  page.value = 1;
  filterString.value = `${newFilters}`
  await store.get_data_action(filterString.value);
}





// for delete
let deleted_ids = []
// get data from store



const handleDelete = (row:id|object,type:string) => {
  console.log(row)
  console.log(type)
  if(type == 'edit'){
    isOpenForModal.value = true;
    edited_row = row
  }else{
    isOpen.value = true;
    deleted_ids[0] = row;
  }

};
const closeModal = () => {
  isOpen.value = false;
  isOpenForModal.value = false
}
// Actions function with emit






</script>


<style scoped>

</style>