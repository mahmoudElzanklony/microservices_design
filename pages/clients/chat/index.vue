<template>
  <div class="ticket p-4">
    <UCard>
      <template #header>
        <Placeholder class="h-8" />
      </template>

      <Placeholder class="h-32" />

      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ClientsStore} from "../../../store/clients";

let router = useRoute();

if(router.query.service_id){
  try{
    await ClientsStore().authorize_user({type:'reply'})
  }catch (e){}

}
</script>



<style scoped>

</style>