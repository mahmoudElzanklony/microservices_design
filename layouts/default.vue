<template>
  <div class="flex">
    <NavbarComponent class="w-fit md:w-[300px] bg-gray-50 p-4 border-e h-screen flex flex-col justify-between pb-8"></NavbarComponent>
    <div class="content w-full max-h-screen overflow-y-scroll">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, watch } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()

  // Function to update the HTML 'dir' attribute based on the current locale
  const setHtmlDirection = (currentLocale) => {
    const isRtl = ['ar', 'he', 'fa'].includes(currentLocale)  // Adjust based on your RTL languages
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
  }

  // Watch for changes in the locale and set the direction accordingly
  watch(locale, (newLocale) => {
    setHtmlDirection(newLocale)
  })


  onMounted(() => {
    setHtmlDirection(locale.value)
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