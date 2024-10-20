<template>
  <ClientAnswerColumnComponent v-if="name == 'answers-data'" :row="row" :column="column"></ClientAnswerColumnComponent>
</template>
<script setup lang="ts">
  import ClientAnswerColumnComponent from "./ClientAnswerColumnComponent.vue";

  let props = defineProps(['name','row','column'])
  console.log('-----------------manage different data-------------')
  console.log(props.row)
  console.log(props.column)
</script>
<style scoped>

</style>