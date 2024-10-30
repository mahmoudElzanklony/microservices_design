<template>
  <div class="simulation" v-if="general_info">
    <client-only>
      <div class="form flex flex-wrap">
        <h2 class="text-center text-3xl w-full"
        >{{ general_info[locale + '_main_title'] }}</h2>
        <h2 class="text-center text-xl w-full">{{ general_info[locale + '_sub_title'] }}</h2>
        <form class="form flex flex-wrap w-full"
              enctype="multipart/form-data"
              @submit.prevent="save_data"
              v-if="submit">
          <HandleFinalServiceInputs :attributes_data="attributesData" :sections_attr_ids="sections_attr_ids" :submit="submit"></HandleFinalServiceInputs>
        </form>
        <HandleFinalServiceInputs v-else :attributes_data="attributesData" :sections_attr_ids="sections_attr_ids" :submit="submit"></HandleFinalServiceInputs>

      </div>
    </client-only>
  </div>

</template>

<script setup lang="ts">

import HandleFinalServiceInputs from "./HandleFinalServiceInputs.vue";
import {embdedMicrroService} from "../store/embdedMicroService";
import {useRouter} from "nuxt/app";
import {useRoute} from "vue-router";

defineProps(['general_info','attributesData','sections_attr_ids','submit'])
  const { locale, setLocale  } = useI18n()

let store = embdedMicrroService()
let router = useRoute();
 function save_data(){
  let data = new FormData(event.target)
  data.append('service_id',router.query?.id)
  var url = (window.location != window.parent.location)
      ? document.referrer
      : document.location.href;
  data.append('url',url)
  const {  $Toast } = useNuxtApp();

   navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log(latitude,longitude)
        data.append('latitude',latitude)
        data.append('longitude',longitude)

        store.save_action(data);
      },
      error => {
        store.save_action(data);
      },
      {
        // Optional settings: Enable high accuracy and set a timeout
        enableHighAccuracy: true,
        timeout: 5000, // 5 seconds timeout
        maximumAge: 0  // Do not use cached location
      }
  );


}

</script>




<style scoped>

.simulation > div{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.simulation input.focus\:ring-primary-500:focus{
  --tw-ring-color:none !important;
}
.simulation .input-data{
  width: 100%;
}
.simulation .input-submit{
  border:0px;
  background-color:green;
  color:white;
  text-align: center;
  padding: 7px 25px;
  border-radius: 8px;
  margin: auto;
}
</style>