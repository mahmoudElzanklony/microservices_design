<template>

  <div class="p-4">
    <TableComponent
        :title="$t('navbar.sections')"
        :columns="columns"
        :data_row_relations="[['attributes','name']]"
        :modal_inputs="box_inputs"
        table="sections"
        :row_actions="ActionsTable"
        :store_name="SectionsStore"

    >
      <template #filters>
        <form class="flex space-x-2">
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('general_inputs.name') }}</label>
            <UInput name="name"  :placeholder="$t('search.by')+$t('general_inputs.name')" />
          </div>
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('sections.visibility') }}</label>
            <select name="visibility" class="border border-b-cool-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1.5 ">
              <option value="">{{ $t('search.by')+$t('sections.visibility') }}</option>
              <option v-for="i in ['public','private']" :value="i">{{ $t('sections.'+i) }}</option>
            </select>
          </div>
          <div v-if="false" class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('sections.visibility') }}</label>
            <USelectMenu
                searchable
                v-model="selected"
                name="visibility"
                :searchable-placeholder="$t('search.by')+$t('sections.visibility')"
                class="w-full lg:w-48"
                placeholder="Select a visibility"
                :options="['public', 'private']"
                ></USelectMenu>
          </div>
        </form>

      </template>
    </TableComponent>
  </div>
</template>

<script setup lang="ts">
import createTableColumns from "./table_columns";
import createModalBoxColumns from "./modal_box_columns";
import {SectionsStore} from "../../store/sections";
import ActionsTable from "../../fixed_data/ActionsTable";
import {ref} from "vue";

const { t } = useI18n();

const columns = createTableColumns(t)
const box_inputs = createModalBoxColumns(t)
const selected = ref()

</script>



<style scoped>

</style>