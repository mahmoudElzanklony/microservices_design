<template>

      <span v-if="column?.type == 'file'">
        <a class="text-primary" target="_blank" :href="config.public.hostUrl+'/clients_answers/'+row['answers'].find((e)=> e?.attribute?.name == column?.name)?.answer">
          {{ $t('general.press_here') }}
        </a>
      </span>
  <span v-else>{{ row['answers'].find((e)=> e?.attribute?.name == column?.name)?.answer }}</span>
  <!-- your td content -->
</template>

<script setup lang="ts">
defineProps(['row','column']);
const config = useRuntimeConfig();
</script>



<style scoped>

</style>