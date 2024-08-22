<template>
    <teleport to="body">
      <ModalBox :is-open="isOpen"></ModalBox>
    </teleport>
    <div class="flex items-center justify-between my-2.5">
      <h2 class="text-3xl mb-0">{{ title }}</h2>
      <ul class="flex items-center">
        <li>
          <UButton
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

  <ModalBoxComponent @update:isOpen="closeModal"
                     :edited_row="edited_row"
                     :is-open="isOpenForModal"
                     :inputs="modal_inputs"></ModalBoxComponent>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref, watch} from "vue";
import ModalBox from "./ModalBoxComponent.vue";
import FilterTable from "../dom/FilterTable";
// define variables
let props = defineProps(['title','columns','modal_inputs','table','store_name','row_actions'])
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
  FilterTable('.search-input input',updateFilters)
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