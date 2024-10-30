<template>
  <div class="ticket p-4">
    <UCard>
      <template #header>
        <div class="flex justify-between">
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-users" class="w-10 h-10 text-primary" />
            <div>
              <p class="font-bold">{{ chatStore?.data?.data?.service?.name }}</p>
              <p>{{ chatStore?.data?.data?.owner?.user_id != $auth?.id ? chatStore?.data?.data?.owner?.user?.username:$auth?.username }}</p>
            </div>
          </div>
          <div class="text-gray-500 flex items-center justify-between space-x-2">
            <UIcon name="i-heroicons-clock" class="w-5 h-5 text-gray-800" />
            {{ chatStore?.data?.data?.created_at }}
          </div>
        </div>
      </template>

      <div class="chat">
        <div v-for="(i,index) in chatStore?.data?.data?.chat" :key="index" :class="i?.type =='client'?'client':'support'">
          <p :class="'mb-2 flex justify-between items-center '+(i?.type == 'client'?'flex-row-reverse':'')">
            <span :class="'p-2 rounded '+(i?.type == 'client'?'bg-gray-200 ':'bg-primary white')">{{ i?.content }}</span>
            <span class="text-gray-500">{{ i?.created_at }}</span>
          </p>
        </div>
      </div>

      <template #footer>
        <form @submit.prevent="chatStore.save_chat_action" v-if="chatStore?.data?.data?.owner?.status == 1">
          <UInput
              icon="i-heroicons-chat-bubble-oval-left-ellipsis"
              size="lg"
              name="content"
              color="white"
              :trailing="false"
              placeholder="Write your message then press enter"
          />
        </form>
        <p v-else>
          <UAlert
              icon="i-heroicons-chat-bubble-oval-left-ellipsis"
              :description="$t('tickets.chat.ended')"
              title="Ticket is closed"
              color="primary"
              variant="soft"
          />
        </p>

      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ClientsStore} from "../../../store/clients";
import {ticketChatStore} from "../../../store/ticketChat";
let chatStore = ticketChatStore()
let router = useRoute();

if(router.query.service_id && router.query.id){
  try{
    await ClientsStore().authorize_user({type:'reply'})
  }catch (e){}
  try{
    await chatStore.get_data_action('?service_id='+router.query.service_id+'&id='+router.query.id)
  }catch (e){}
}else{
  navigateTo('/')
}
</script>



<style scoped>

</style>