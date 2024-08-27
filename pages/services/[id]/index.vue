<template>
  <ClientOnly>
    <form class="p-6">
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
       <div class="simulation">
          <div class="form flex flex-wrap">
             <h2 class="text-center text-3xl w-full"
                 >{{ general_info[locale + '_main_title'] }}</h2>
             <h2 class="text-center text-xl w-full">{{ general_info[locale + '_sub_title'] }}</h2>
             <div class="input-data"  v-for="(i,index) in sections_attr_ids" :key="index">
               <label v-if="i?.section_id != null">{{ SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.label }}</label>
               <UInput v-if="i?.section_id != null"
                   :name="SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.name"
                   :icon="'i-heroicons-'+(SectionStore.data?.data.find((e) => e.id === i['section_id'])?.attributes?.find((e) => e?.id == i['attribute_id'])?.icon)"
                   size="sm"
                   required></UInput>
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
  import {createFormInputs , createStyleInputs} from "./modal_box_columns";
  import {computed, getCurrentInstance, reactive, ref, watch} from "vue";
  import StyleBoxItemServiceComponent from "../../../components/StyleBoxItemServiceComponent.vue";


  // -----------end  of import---------------------
  // -----------start  of validation service id---------------------

  let router = useRoute();
  let serviceStore = ServicesStore()
  let SectionStore = SectionsStore()
  const { locale, setLocale  } = useI18n()

  if(router?.params?.id){
     await serviceStore.get_specific_one(router?.params?.id)

    if(!serviceStore.item){
      navigateTo('/services')
    }
  }else{
    navigateTo('/services')
  }
  let general_info = serviceStore?.item;

  // -----------end  of validation service id---------------------
  // -----------start  of declare form inputs---------------------
  const { t } = useI18n();
  let inputs = createFormInputs(t)
  let styles = createStyleInputs(t)

  const main_inputs_up_down = [{
    label: t('general.main_info'),
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    slot: 'service_info'
  }]
  const section_attributes_up_down = [{
    label: t('services.attributes_data'),
    icon: 'i-heroicons-rectangle-stack',
    defaultOpen: false,
    slot: 'attributes_info'
  }]


  await SectionStore.get_data_action('?ownership=true&limit=99999');
  // -----------end  of declare form inputs---------------------
  // -----------start  of declare sec attr reactive---------------------
  let sections_attr_ids = reactive([{id:null,section_id:null,attribute_id:null}]);


  const addSection = () => {
    sections_attr_ids.push({ id:null,section_id: null, attribute_id: null })
  }
  const removeSec = (index) => {
    sections_attr_ids.splice(index, 1)
  }

  // -----------end  of declare sec attr reactive---------------------

  // --------------------start of style----------------------------
  const titles = [{
    label: t('services.style.main_titles'),
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    slot: 'main_titles'
  },{
    label: t('services.style.main_inputs'),
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
    slot: 'main_inputs'
  },{
    label: t('services.style.submit'),
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
    slot: 'submit'
  }]
  let style_form_service_data = reactive({})
  const toStyleString = (obj) => {
    return Object.entries(obj)

        .map(([key, value]) => `${key}:${value}${key === 'width' ? '%':''}`)
        .join(";");
  };
  function handleFormStyle(data){
    style_form_service_data = data;
    let main_titles_style = toStyleString(data?.main_titles || {});
    let main_inputs_style = toStyleString(data?.main_inputs || {});
    let submit = toStyleString(data?.submit || {});
    // main titles
    document.querySelector('.simulation h2').style.cssText = main_titles_style;
    document.querySelector('.simulation h2:last-of-type').style.cssText = main_titles_style;
    // main input
    for(let input of document.querySelectorAll('.simulation .input-data')){
      input.style.cssText = main_inputs_style
    }
    // submit input
    document.querySelector('.simulation .input-submit').style.cssText = submit;
  }
  // watch changes when updated attr ids
  watch(() => sections_attr_ids, (newVal) => {
    handleFormStyle(style_form_service_data)
  },{
    deep:true
  });

  // --------------------end of style----------------------------



</script>



<style scoped>
.sec_attr{
  border-bottom: 1px solid #ddd;
}
.simulation{
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