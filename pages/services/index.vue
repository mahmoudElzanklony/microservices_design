<template>

    <div class="p-4">
      <TableComponent
          :title="$t('navbar.services')"
          :columns="columns"
          :data_row_relations="[]"
          :modal_inputs="box_inputs"
          table="services"
          :row_actions="ActionsTable"
          :store_name="ServicesStore"

      >
        <template #filters>
          <form class="flex space-x-2">
            <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
              <label class="block w-100">{{ $t('services.name') }}</label>
              <UInput name="name"  :placeholder="$t('search.by')+$t('services.name')" />
            </div>
            <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
              <label class="block w-100">{{ $t('services.main_title') }}</label>
              <UInput name="main_title"  :placeholder="$t('search.by')+$t('services.main_title')" />
            </div>
            <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
              <label class="block w-100">{{ $t('services.sub_title') }}</label>
              <UInput name="sub_title"  :placeholder="$t('search.by')+$t('services.sub_title')" />
            </div>
            <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
              <label class="block w-100">{{ $t('general.start_date') }}</label>
              <UInput name="start_date" type="date" />
            </div>
            <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
              <label class="block w-100">{{ $t('general.end_date') }}</label>
              <UInput name="end_date" type="date" />
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