<template>
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

import DeleteBoxComponent from "./DeleteBoxComponent.vue";
import ModalBoxComponent from "./ModalBoxComponent.vue";
import {onMounted, ref, watch} from "vue";
import FilterTable from "../dom/FilterTable";
let props = defineProps(['store','table','deleted_ids','isOpen','modal_inputs','edited_row','isOpenForModal']);
const filterString = ref(''); // for filter inputs
// for pagination table
const page = ref(1)
watch(() => page.value, async (newVal) => {
  await props.store.get_data_action(filterString.value.length < 3 ? '?page='+page.value:filterString.value+'&page='+page.value);
});


onMounted(async ()=>{
  FilterTable('.search-input input,.search-input select',updateFilters)
})



async function updateFilters(newFilters) {
  page.value = 1;
  filterString.value = `${newFilters}`
  await props.store.get_data_action(filterString.value);
}





// for delete
let deleted_ids = []
// get data from store



const handleDelete = (row:id|object,type:string) => {
  if(type == 'edit'){
    props.isOpenForModal.value = true;
    props.edited_row = row
  }else{
    props.isOpen.value = true;
    deleted_ids[0] = row;
  }

};
const closeModal = () => {
  props.isOpen.value = false;
  props.isOpenForModal.value = false
}
// Actions function with emit


async function deleteItems(){

  delete_store.data = {table:(props.db_table != null ? props.db_table:props.table),id:selected.value.map((e)=> e?.id)}

  await delete_store.delete_action(props.table)
  await store.get_data_action(filterString.value.length < 3 ? '?page='+page.value:filterString.value+'&page='+page.value);


}
</script>



<style scoped>

</style>