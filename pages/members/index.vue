<template>

  <div class="p-4">
    <TableComponent
        :title="$t('navbar.members')"
        :columns="columns"
        :modal_inputs="box_inputs"
        table="sections"
        :row_actions="ActionsTable"
        :store_name="MemberStore"

    >
      <template #filters>
        <form class="flex space-x-2">
          <div class="search-input px-3 py-3.5 border-b border-gray-200 " v-if="$auth?.role == 'admin'">
            <label class="block w-100">{{ $t('general_inputs.username') }}</label>
            <UInput name="username"
                    icon="i-heroicons-user"
                    size="sm"
                    ></UInput>
          </div>

        </form>

      </template>
    </TableComponent>
  </div>
</template>

<script setup lang="ts">
import createTableColumns from "./table_columns";
import createModalBoxColumns from "./modal_box_columns";
import {MemberStore} from "../../store/members";
import ActionsTable from "../../fixed_data/ActionsTable";
import {PrivilegeStore} from "../../store/privileges";
import {ref} from "vue";
import FilterByUserNameComponent from "../../components/FilterByUserNameComponent.vue";

const { t } = useI18n();
let Privilegestore = PrivilegeStore();
await Privilegestore.get_data_action('?limit=9999');
Privilegestore?.data?.data
const {$auth} = useNuxtApp();


const columns = createTableColumns(t)
const box_inputs = createModalBoxColumns(t,Privilegestore?.data?.data)
const selected = ref()


</script>



<style scoped>

</style>