<template>

  <div class="p-4">
    <TableComponent
        :title="$t('navbar.sections')"
        :columns="columns"
        :data_row_relations="[]"
        :modal_inputs="box_inputs"
        table="sections"
        :row_actions="ActionsTable"
        :store_name="AttributesStore"

    >

      <template #filters>
        <form class="flex space-x-2">
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('general_inputs.name') }}</label>
            <UInput name="name"  :placeholder="$t('search.by')+$t('general_inputs.name')" />
          </div>
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('attributes.label') }}</label>
            <UInput name="label"  :placeholder="$t('search.by')+$t('attributes.label')" />
          </div>
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('attributes.placeholder') }}</label>
            <UInput name="placeholder"  :placeholder="$t('search.by')+$t('attributes.placeholder')" />
          </div>
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('sections.visibility') }}</label>
            <select name="visibility" class="border border-b-cool-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1.5 ">
              <option value="">{{ $t('search.by')+$t('sections.visibility') }}</option>
              <option v-for="i in ['public','private']" :value="i">{{ $t('sections.'+i) }}</option>
            </select>
          </div>
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('attributes.type') }}</label>
            <select name="type" class="border border-b-cool-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1.5 ">
              <option value="">{{ $t('search.by')+$t('attributes.type') }}</option>
              <option v-for="i in ['text', 'textarea','select','date','file','checkbox']" :value="i">{{ $t('attributes.'+i) }}</option>
            </select>
          </div>

        </form>

      </template>
    </TableComponent>
  </div>
</template>

<script setup lang="ts">
import createTableColumns from "./table_columns";
import createModalBoxColumns from "./modal_box_columns";
import {AttributesStore} from "../../store/attributes";
import ActionsTable from "../../fixed_data/ActionsTable";
import {ref} from "vue";

const { t } = useI18n();

const columns = createTableColumns(t)
const box_inputs = createModalBoxColumns(t)
const selected = ref()

</script>



<style scoped>

</style>