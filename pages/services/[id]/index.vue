<template>
  <div>
    <div class="p-6 overflow-hidden">
      <UCard class="overflow-hidden" :ui="{header:'p-0',}">
        <template #header>
          <p class="bg-primary p-2">
            <span class="text-white text-2xl">{{ $t('services.insert_iframe') }}</span>
          </p>
        </template>
        <div>
          <div class="mb-4">
            <div class="flex justify-between items-center mb-2">
              <p class="text-1xl text-gray-700">{{ $t('services.arabic_service') }}</p>
              <UIcon @click="copyToClipboard" class="text-primary w-6 h-6 cursor-pointer" name="heroicons:clipboard-document-check-solid"></UIcon>
            </div>
            <pre class="arabic text-red-800 font-bold"> </pre>
          </div>
          <div class="mb-4">
            <div class="flex justify-between items-center mb-2">
              <p class="text-1xl text-gray-700">{{ $t('services.english_service') }}</p>
              <UIcon @click="copyToClipboard" class="text-primary w-6 h-6 cursor-pointer" name="heroicons:clipboard-document-check-solid"></UIcon>
            </div>
            <pre class="english text-red-800 font-bold"></pre>
          </div>

        </div>
      </UCard>
    </div>
    <ClientOnly>
      <form class="p-6" method="post"
            @submit.prevent="save_data_service_style_fn">
        <div class="grid grid-cols-3 gap-7">
          <div>
            <UAccordion class="mb-3" :items="main_inputs_up_down">
              <template #service_info>
                <input type="hidden" name="id"
                       v-if="serviceStore.item"
                       :value="serviceStore.item?.id">
                <div class="mb-5" v-for="(i,index) in inputs" :key="index">
                  <label class="mb-3 text-cool-500">{{ i?.label }}</label>

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
                        :name="'attribute_id[]'"
                        v-model="i['attribute_id']"
                        :searchable-placeholder="$t('search.by')+$t('attributes.attribute')"
                        class="w-full block"
                        placeholder="Select a attribute" required
                        :options="AttributeStore.data?.data"
                    ></USelectMenu>
                  </div>
                </div>
                <UButton @click="addSection"
                         icon="i-heroicons-plus"
                         size="md"
                         color="blue"
                         variant="solid"
                         :label="$t('general.add_attr')"
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
          <FinalServiceComponent v-if="SectionStore.data?.data" :general_info="general_info"
                                 :sections_attr_ids="sections_attr_ids"
                                 :attributes-data="AttributeStore.data?.data"></FinalServiceComponent>


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

  </div>
</template>

<script setup lang="ts">
  // -----------start  of import---------------------
  import { useRoute } from 'vue-router';
  import {navigateTo} from "nuxt/app";

  import {ServicesStore} from "../../../store/services";
  import {SectionsStore} from "../../../store/sections";
  import {AttributesStore} from "../../../store/attributes";
  import {onMounted, reactive, watch} from "vue";
  import StyleBoxItemServiceComponent from "../../../components/StyleBoxItemServiceComponent.vue";
  import { useFormManagement} from "../../../composables/services_style/useFormManagement";
  import {useStyleManagement} from "../../../composables/services_style/useStyleManagement";
  import {useTitlesStyles} from "../../../composables/services_style/useTitlesStyles";
  import {useCheckServiceBelongToOwner} from "../../../composables/services_style/useCheckServiceBelongToOwner";
  import FinalServiceComponent from "../../../components/FinalServiceComponent.vue";

  let { inputs, styles, main_inputs_up_down,sections_attr_ids, section_attributes_up_down,
    fetchSections } = useFormManagement();
  let {  titles} = useTitlesStyles()
  const { handleFormStyle , styleFormServiceData} = useStyleManagement();
  let general_info = reactive({});
  // get sections with attributes
  await fetchSections();
  let style_form_service_data = reactive({})
  let {check_owner} = useCheckServiceBelongToOwner();




  function addSection(){
    sections_attr_ids.push({ id: null, attribute_id: null });
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
  let AttributeStore = AttributesStore()
  let {$auth} = useNuxtApp();


  AttributeStore.get_data_action('?ownership=true&limit=9999');
  let config = useRuntimeConfig()



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
      handleFormStyle(styleFormServiceData?.value)
    }, {
      deep: true
    });

    // save style data
    function save_data_service_style_fn() {
      let data = new FormData(event.target);

      for (let i of sections_attr_ids) {
        data.append('type[]', AttributeStore.data?.data.find((e) => e.id === i['attribute_id'])?.type)
      }
     // data.append('style', JSON.stringify(style_form_service_data));
      data.append('style', JSON.stringify(styleFormServiceData?.value));
      data.append('service_id', router?.params?.id);
      serviceStore.save_service_style_action(data);
    }

  // --------------------end of style----------------------------
  onMounted(()=>{
     document.querySelector('pre.arabic').textContent =
         '<iframe allow="geolocation;" src="'+config.public.clientUrl+'/ar/services/embedded?id='+router?.params?.id+'" width="100%" height="450" style="border:none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    document.querySelector('pre.english').textContent =
        '<iframe allow="geolocation;" src="'+config.public.clientUrl+'/en/services/embedded?id='+router?.params?.id+'" width="100%"  height="450" style="border:none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  })
  const {  $Toast } = useNuxtApp();

  function copyToClipboard() {
    let el = event.target.parentElement.nextElementSibling;

    navigator.clipboard.writeText(el.textContent).then(() => {
      $Toast.success('copied successfully');
    }).catch(err => {
      $Toast.error('Failed to copy text: ', err);
    });
  }


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
pre{
  white-space: break-spaces;
}
</style>