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
          <UButton v-if="modal_inputs.length > 0 && add_delete_actions?.add"
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
              v-if="add_delete_actions?.delete"
              icon="i-heroicons-trash"
              size="lg"
              color="red"
              variant="solid"
              :label="$t('general.delete')"
              :trailing="false"
              @click="deleteItems"
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
      <!-- start of sections  -->
      <template v-for="i in data_row_relations"  v-slot:[`${i[0]}-data`] = {row} >
        <UBadge  color="black" v-if="row[i[0]].length == 0">{{ $t('general.no_data') }}</UBadge>
        <UBadge size="sm" :class="key > 0 ? 'mx-1':'' " :key="key" v-for="(item,key) in row[i[0]]" :label="item[i[1]]" variant="subtle"></UBadge>
      </template>
      <!-- start of sections  -->

      <!-- start of attributes  -->
      <template #icon-data="{ row }">
        <div class="flex space-x-2 items-center">
          <Icon class="w-8 h-8" :name="'heroicons:'+row?.icon"></Icon>
        </div>
      </template>
      <!-- end of attributes  -->

      <!-- start of services  -->
      <template #type-data="{ row }">
        <div class="flex space-x-2 items-center">
          <span>{{ row?.type.replace('_',' ') }}</span>
        </div>
      </template>
      <template #answers_url-data="{ row }">
        <div class="flex space-x-2 items-center">
          <nuxt-link :to="'/clients?service_id='+row?.id" class="text-primary">{{ $t('general.press_here') }}</nuxt-link>
        </div>
      </template>
      <!-- end of services  -->



      <!-- start of client reply reactions -->
      <template #privileges-data="{ row }">
        <UDropdown :items="clients_answers_privileges(row)">
          <UButton color="gray" variant="ghost"
                   icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
      <!-- start of client reply reactions -->

      <template #answers-data="{ row , column }">
        <ClientAnswerColumnComponent :row="row" :column="column"></ClientAnswerColumnComponent>
      </template>
      <template #longitude-data="{ row }">
        <UButton color="gray" v-if="row.longitude && row.latitude"
                 @click="edited_row = row; isOpenForMapModal = true;">{{ $t('general.press_here') }}</UButton>
        <UBadge v-else color="gray" variant="solid">{{ $t('general.unknown') }}</UBadge>
      </template>
      <!-- end of client reply reactions -->

      <template #actions-data="{ row }">
        <UDropdown :items="row_actions(row,handleDelete)">
          <UButton color="gray" variant="ghost"
                   icon="i-heroicons-ellipsis-horizontal-20-solid" />
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

  <MapLocationComponent :is-open="isOpenForMapModal" :row="edited_row" @update:isOpen="closeModal"></MapLocationComponent>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref, watch} from "vue";
import ModalBox from "./ModalBoxComponent.vue";
import FilterTable from "../dom/FilterTable";
import process from "node:process";
import {DeleteStore} from "../store/DeleteItems";
import HandleTableClientAnswer from "./HandleTableClientAnswer.vue";
import clients_answers_privileges from "../composables/clients_answers/privileges";
import ClientAnswerColumnComponent from "./TableWithDifferentData/ClientAnswerColumnComponent.vue";
import PaginationWithDeleteWithModalBoxComponent from "./PaginationWithDeleteWithModalBoxComponent.vue";
import ManageDifferentColumnDataComponent from "./TableWithDifferentData/ManageDifferentColumnDataComponent.vue";
import MapLocationComponent from "./MapLocationComponent.vue";
import tableAddDeleteActionsControl from "../composables/general/tableAddDeleteActionsControl";

const config = useRuntimeConfig();
const add_delete_actions = tableAddDeleteActionsControl();
console.log(add_delete_actions)
// define variables
let props = defineProps(['title','columns','data_row_relations','modal_inputs','table','db_table','store_name','row_actions'])
//---------------- start of store------------
let store = props.store_name()
let delete_store = DeleteStore()
await store.get_data_action();



//---------------- end of store------------
const filterString = ref(''); // for filter inputs
let isOpen = ref(false); // for delete modal pop up
let isOpenForModal = ref(false); // for edit modal pop up
let isOpenForMapModal = ref(false); // for edit modal pop up
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
  isOpenForMapModal.value = false
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