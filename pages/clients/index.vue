<template>

  <div class="p-4">
    <TableComponent
        :title="$t('navbar.client_reactions')"
        :columns="columns"
        :data_row_relations="[]"
        :modal_inputs="[]"
        table="clients"
        db_table="clients_services_sections_private_data"
        :row_actions="ActionsTable"
        :store_name="ClientsStore"

    >

      <template #filters>
        <form class="flex space-x-2">
          <div class="search-input px-3 py-3.5 border-b border-gray-200 ">
            <label class="block w-100">{{ $t('navbar.services') }}</label>
            <select name="service_id" class="border border-b-cool-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1.5 ">
              <option value="">{{ $t('search.by')+$t('services.service') }}</option>
              <option v-for="(i,key) in serviceStore.data?.data" :key="key" :value="i?.id">{{ i?.name }}</option>
            </select>
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
import {ClientsStore} from "../../store/clients";
import ActionsTable from "../../fixed_data/ActionsTable";
import {ServicesStore} from "../../store/services";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {MemberPrivilegesStore} from "../../store/MemberPrivileges";

const { t } = useI18n();
let router = useRoute();
let store = MemberPrivilegesStore()

console.log(router.query)
console.log(router.query.service_id)
if(router.query.service_id){
  try{
    await ClientsStore().authorize_user()
  }catch (e){}


  if(store.data == null){
    await store.get_data_action('?service_id='+router.query.service_id)
  }
  console.log(store.data)

}
const columns = await createTableColumns(t)


const selected = ref()
const serviceStore = ServicesStore()
await serviceStore.get_data_action('?limit=9999');
</script>



<style scoped>

</style>