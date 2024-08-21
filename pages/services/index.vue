<template>

    <div class="p-4">
      <TableComponent
          :title="$t('navbar.services')"
          :columns="columns"
          table="services"
          :row_actions="ActionsTable"
          :store_name="ServicesStore"

      >
        <template #filters>
          <form>
            <div class="flex search-input px-3 py-3.5 border-b border-gray-200 ">
              <UInput name="name"  :placeholder="$t('search.name')" />
            </div>
          </form>

        </template>
      </TableComponent>
    </div>
</template>

<script setup lang="ts">
import createTableColumns from "./table_columns";
import FilterTable from "../../dom/FilterTable";
import ModalBox from "../../components/ModalBoxComponent.vue";
import {ServicesStore } from "../../store/services";
import ActionsTable from "../../fixed_data/ActionsTable";

import {onMounted} from "vue";
const { t } = useI18n();




const columns = createTableColumns(t)


</script>



<style scoped>

</style>