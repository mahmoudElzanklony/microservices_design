<template>

  <div class="p-4">
    <div class="notifications container m-auto">
      <h2 class="text-3xl mb-3">{{ $t('notifications.name') }}</h2>
      <div class="notification flex justify-between items-center mb-2" v-for="(i,index) in NotificationStoreData.data?.data" :key="index">
        <div class="flex items-center">
          <img src="/images/avatar-default.svg">
          <div>
            <p class="font-bold text-primary">{{ $t('notifications.service_client_submit') }}</p>
            <p>{{ i?.content }}</p>
          </div>
        </div>
        <p class="text-gray-500">{{ i?.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import createTableColumns from "./table_columns";
import {NotificationStore} from "../../store/notifications";
import {ref} from "vue";

const { t } = useI18n();

const columns = createTableColumns(t)
const selected = ref()
const NotificationStoreData = NotificationStore()
NotificationStoreData.get_data_action()

definePageMeta({
  layout: 'main',
  head: {
    title: 'Login | تسجيل دخول'
  }
})
</script>



<style lang="scss" scoped>
.notification{
  border-bottom: 1px solid #dddddd;
  padding-bottom: 10px;
  img{
    height: 50px;
  }
}
</style>