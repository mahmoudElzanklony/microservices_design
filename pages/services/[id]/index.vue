<template>
  <ClientOnly>
    <form class="p-6" method="post"
          @submit.prevent="save_data_service_style_fn">
    <div class="grid grid-cols-3 gap-7">
       <div>
         <UAccordion class="mb-3" :items="main_inputs_up_down">
           <template #service_info>
             <div class="mb-5" v-for="(i,index) in inputs" :key="index">
               <label class="mb-3 text-cool-500">{{ i?.label }}</label>
               <input type="hidden" name="id"
                      v-if="serviceStore.item"
                      :value="serviceStore.item?.id">
               <UInput
                   v-if="i?.type == 'text'"
                   :name="i?.name"
                   v-model="general_info[i?.name]"

                   :icon="'i-heroicons-'+i?.icon"
                   size="sm"
                   required></UInput>

             </div>

           </template>

         </UAccordion>
         <UAccordion class="mb-3" :items="section_attributes_up_down">
           <template #attributes_info>
             <div class="sec_attr mb-2.5" v-for="(i,index) in sections_attr_ids" :key="index">
               <div v-if="index > 0" class="flex justify-end mb-2">
                 <UIcon style="color:darkred"
                     name="i-heroicons-x-mark" color="red"
                     @click="removeSec(index)" class="w-5 h-5 cursor-pointer" />

               </div>
               <input type="hidden" v-if="i?.id" name="item_id[]" :value="i?.id">
               <div class="mb-2">
                 <USelectMenu
                     searchable
                     size="sm"
                     value-attribute="id"
                     option-attribute="name"
                     :name="'section_id[]'"
                     v-model="i['section_id']"
                     :searchable-placeholder="$t('search.by')+$t('general_inputs.name')"
                     class="w-full block"
                     placeholder="Select a section" required
                     :options="SectionStore.data?.data"
                 ></USelectMenu>
               </div>
               <div class="mb-2">
                 <USelectMenu
                     searchable
                     size="sm"
                     value-attribute="id"
                     option-attribute="name"
                     :name="'attribute_id[]'"
                     v-model="i['attribute_id']"
                     :searchable-placeholder="$t('search.by')+$t('attributes.attribute')"
                     class="w-full block"
                     placeholder="Select a attribute" required
                     :options="SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes"
                 ></USelectMenu>
               </div>
             </div>
             <UButton @click="addSection"
                 icon="i-heroicons-plus"
                 size="md"
                 color="blue"
                 variant="solid"
                 :label="$t('general.add_sec')"
                 :trailing="false"
             />
           </template>

         </UAccordion>

         <div class="mb-2.5">
           <UButton  type="submit" block>
             {{ $t('general.save') }}
           </UButton>
         </div>
       </div>
       <div class="simulation" v-if="general_info">
          <div class="form flex flex-wrap">
             <h2 class="text-center text-3xl w-full"
                 >{{ general_info[locale + '_main_title'] }}</h2>
             <h2 class="text-center text-xl w-full">{{ general_info[locale + '_sub_title'] }}</h2>
             <div class="input-data"  v-for="(i,index) in sections_attr_ids" :key="index">
               <label v-if="i?.section_id != null">{{ SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.label }}</label>
               <UInput v-if="i?.section_id != null"
                   :type="SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.type"
                   :name="SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.name"
                   :icon="'i-heroicons-'+(SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.icon)"
                   size="sm"
                   ></UInput>
             </div>
             <div class="input-submit">
               <button   type="button" >
                 {{ $t('general.save') }}
               </button>
             </div>
          </div>
       </div>
       <div class="style">
         <div >
           <StyleBoxItemServiceComponent
               @form_style_fn="handleFormStyle"
               :title="titles"
               :styles="general_info?.style"
               :inputs="styles"></StyleBoxItemServiceComponent>

         </div>
       </div>
    </div>
  </form>
  </ClientOnly>
</template>

<script setup lang="ts">
  // -----------start  of import---------------------
  import { useRoute } from 'vue-router';
  import {navigateTo,} from "nuxt/app";
  import {ServicesStore} from "../../../store/services";
  import {SectionsStore} from "../../../store/sections";
  import {reactive, watch} from "vue";
  import StyleBoxItemServiceComponent from "../../../components/StyleBoxItemServiceComponent.vue";
  import { useFormManagement} from "../../../composables/services_style/useFormManagement";
  import {useStyleManagement} from "../../../composables/services_style/useStyleManagement";
  import {useTitlesStyles} from "../../../composables/services_style/useTitlesStyles";
  import {useCheckServiceBelongToOwner} from "../../../composables/services_style/useCheckServiceBelongToOwner";

  let { inputs, styles, main_inputs_up_down,sections_attr_ids, section_attributes_up_down,
    fetchSections } = useFormManagement();
  let {  titles} = useTitlesStyles()
  const { handleFormStyle} = useStyleManagement();
  let general_info = reactive({});
  // get sections with attributes
  await fetchSections();
  let style_form_service_data = reactive({})
  let {check_owner} = useCheckServiceBelongToOwner();




  function addSection(){
    sections_attr_ids.push({ id: null, section_id: null, attribute_id: null });
  }

  const removeSec = (index) => {
    sections_attr_ids.splice(index, 1);
  };

  // -----------end  of import---------------------
  // -----------start  of validation service id---------------------
  const { locale, setLocale  } = useI18n()
  let router = useRoute();
  let serviceStore = ServicesStore()
  let SectionStore = SectionsStore()




  // -----------end  of validation service id---------------------
  // -----------start  of declare form inputs---------------------
  const { t } = useI18n();

  if(router?.params?.id) {
    //await serviceStore.get_specific_one(router?.params?.id)
    await serviceStore.get_attr_sec_action(router?.params?.id);

    general_info = serviceStore?.item;
    if (general_info?.style) {
      style_form_service_data = general_info?.style
    }

    if (general_info?.sec_attr_data?.length > 0) {
      sections_attr_ids = general_info?.sec_attr_data
    }

    setTimeout(() => {
      if (!general_info) {
        navigateTo('/services')
      }

      check_owner()
    }, 100)
  }




    // --------------------start of style----------------------------


    if (general_info?.style) {
      handleFormStyle(general_info?.style, 500)
    }
    // watch changes when updated attr ids
    watch(() => sections_attr_ids, (newVal) => {
      handleFormStyle(style_form_service_data)
    }, {
      deep: true
    });

    // save style data
    function save_data_service_style_fn() {
      console.log('test--------------')
      let data = new FormData(event.target);
      console.log(data)
      for (let i of sections_attr_ids) {
        data.append('type[]', SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.type)
      }
      data.append('style', JSON.stringify(style_form_service_data));
      data.append('service_id', router?.params?.id);
      serviceStore.save_service_style_action(data);
    }

  // --------------------end of style----------------------------



</script>



<style scoped>
.sec_attr{
  border-bottom: 1px solid #ddd;
}
.simulation > div{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
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