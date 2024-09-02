<template>
  <div class="p-4">
    <FinalServiceComponent v-if="SectionStore.data?.data" :general_info="general_info"
                           :sections_attr_ids="sections_attr_ids"
                           :submit="true"
                           :sectionData="SectionStore.data?.data"></FinalServiceComponent>
  </div>


</template>

<script setup lang="ts">

import FinalServiceComponent from "../../components/FinalServiceComponent";
import {SectionsStore} from "../../store/sections";
import {ServicesStore} from "../../store/services";
import { useRoute } from 'vue-router';
import {useFormManagement} from "../../composables/services_style/useFormManagement";
import {useStyleManagement} from "../../composables/services_style/useStyleManagement";
import {reactive} from "vue";

definePageMeta({
  layout: false,
  head: {
    title: 'Micro service'
  }
})

let { sections_attr_ids } = useFormManagement();
let SectionStore = SectionsStore()
let ServiceStore = ServicesStore()
let router = useRoute();
let general_info = reactive({});
const { handleFormStyle} = useStyleManagement();
let style_form_service_data = reactive({})


if(router?.query?.id) {
  //await serviceStore.get_specific_one(router?.params?.id)
  await ServiceStore.get_attr_sec_action(router?.query?.id);
  await SectionStore.get_data_action('?ownership=true&limit=99999');
  general_info = ServiceStore?.item;
  if (general_info?.style) {
    style_form_service_data = general_info?.style
  }

  if (general_info?.sec_attr_data?.length > 0) {
    sections_attr_ids = general_info?.sec_attr_data
  }
  if (general_info?.style) {
    handleFormStyle(general_info?.style, 200)
  }


}
</script>



<style scoped>

</style>