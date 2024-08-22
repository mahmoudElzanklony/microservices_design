<template>

    <div class="p-4">
      <TableComponent
          :title="$t('navbar.services')"
          :columns="columns"
          :modal_inputs="box_inputs"
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
import createModalBoxColumns from "./modal_box_columns";
import {ServicesStore } from "../../store/services";
import ActionsTable from "../../fixed_data/ActionsTable";

const { t } = useI18n();

const columns = createTableColumns(t)
const box_inputs = createModalBoxColumns(t)


</script>



<style scoped>

</style>