<template>

    <div class="p-4">
      <TableComponent
          :title="$t('navbar.services')"
          :columns="columns"
          :store_name="ServicesStore"

      >
        <template #filters>
          <div class="flex search-input px-3 py-3.5 border-b border-gray-200 ">
            <UInput name="search"  :placeholder="$t('search.name')" />
          </div>

        </template>
      </TableComponent>
    </div>
</template>

<script setup lang="ts">
import createTableColumns from "./table_columns";
import FilterTable from "../../dom/FilterTable";
import ModalBox from "../../components/ModalBoxComponent.vue";
import {ServicesStore } from "../../store/services";

import {onMounted} from "vue";
const { t } = useI18n();

onMounted(()=>{
  FilterTable('.search-input input',ServicesStore())
})

const columns = createTableColumns(t)
const isModalOpen = ref(false);

</script>



<style scoped>

</style>