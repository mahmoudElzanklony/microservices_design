
<template>
  <div class="search-input px-3 py-3.5 border-b border-gray-200 " v-if="$auth?.role == 'admin'">
    <label class="block w-100">{{ $t('general_inputs.username') }}</label>
    <select name="user_id" class="border border-b-cool-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1.5 ">
      <option value="">{{ $t('search.by')+$t('general_inputs.username') }}</option>
      <option v-for="i in userStore?.data?.data" :value="i?.id">{{ i?.username }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import {UserStore} from "../store/users";
  let {$auth} = useNuxtApp()
  let userStore = UserStore();
  if($auth && $auth?.role == 'admin'){

    await userStore.get_data_action('?limit=9999');
  }
</script>


<style scoped>

</style>