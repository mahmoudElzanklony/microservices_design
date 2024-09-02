<template>
  <div class="flex">
    <NavbarComponent class="w-fit md:w-[300px] bg-gray-50 p-4 border-e h-screen flex flex-col justify-between pb-8"></NavbarComponent>
    <div class="content w-full max-h-screen overflow-y-scroll">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import {onMounted} from "vue";

  onMounted(() => {
    const { $pusher, $Toast , $auth } = useNuxtApp();


    const channel = $pusher.subscribe('messages');

    // Bind to the 'message.sent' event
    channel.bind('message.sent', (data) => {
      console.log(data?.message);
      let output = JSON.parse(data?.message);
      console.log(output)
      if (output && output.message) {
        if(output.user_id){
           if(output.user_id == $auth?.id){
             $Toast.success(output.message)
           }
        }
      }
    });

  });
</script>


<style scoped>

</style>