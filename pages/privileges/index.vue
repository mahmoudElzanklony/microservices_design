<template>

  <div class="p-4">
    <p class="text-3xl text-primary mb-5">{{ $t('members.privileges') }} ({{ serviceStore.item?.main_title }}) </p>


    <form class="border-gray-100 rounded m-auto p-4" @submit.prevent="servicePrivilegesStore.save_action">
      <input type="hidden" name="service_id" :value="serviceStore.item?.id">
      <div class="container m-auto">
        <div class="body w-full">
          <div class="item item grid grid-cols-6 gap-2 mb-3">
            <h2 class="text-2xl mb-0 col-span-3">
              <span>{{ $t('general_inputs.username') }}</span>
            </h2>
            <div class="col-span-1 text-2xl" v-for="i in Object.keys($tm('controls'))" :key="i">
              {{ $tm('controls')[i] }}
            </div>
          </div>
          <div class="item item grid grid-cols-6 gap-2 mb-2"
               v-if="memberStore.loading == false"
               v-for="(row_data,ind) in memberStore?.data?.data"
               :key="ind">
            <div class="col-span-3">
              <input type="hidden" :name="'privileges['+ind+'][user_id]'" :value="row_data?.id">
               <p>{{ row_data?.username }}</p>
            </div>
            <div class="col-span-1" v-for="i in Object.keys($tm('controls'))" :key="i">
              <div>
                <label class="inline-flex items-center me-5 cursor-pointer">
                  <input type="checkbox" class="sr-only peer"

                         :checked="row_data?.services_privileges.find((e) => e.service_id == serviceStore.item?.id)?.controls?.find((e) => e?.privilege?.name == i)"
                         :name="'privileges['+ind+'][privilege]'+'[]'"
                         :value="i">
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer
                  dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300
                  dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full
                   rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
                    after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border
                    after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
                    peer-checked:bg-green-600"></div>
                </label>

              </div>
            </div>
          </div>
          <div class="" v-else>
            <div  v-for="i in 4" class="flex items-center space-x-4 mb-3">
              <div class="item item grid grid-cols-6 gap-2 mb-3">
                <div class="text-2xl mb-0 col-span-3">
                  <USkeleton class="w-20 h-20" :ui="{ rounded: 'rounded-full' }" />
                </div>

              </div>
              <USkeleton class="w-full h-4" :ui="{ rounded: 'rounded' }" />
              <div class="space-y-2">
                <USkeleton class="h-4 w-[250px]" />
                <USkeleton class="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <UButton  type="submit" block>
        {{ $t('general.save') }}
      </UButton>
    </form>
  </div>
</template>

<script setup lang="ts">
  import {useRoute} from "vue-router";
  import {ServicesStore} from "../../store/services";
  import {MemberStore} from "../../store/members";
  import {ServicePrivilegeStore} from "../../store/servicesPrivileges";


  let route = useRoute()
  let serviceStore = ServicesStore()
  let memberStore= MemberStore()
  let servicePrivilegesStore = ServicePrivilegeStore()

  if(!route.query?.service_id){
    navigateTo('/services')
  }

  serviceStore.get_specific_one(route.query.service_id)
  memberStore.get_data_action('?limit=9999')





</script>

<style lang="scss" scoped>
form{
  width: fit-content;
  box-shadow: 0px 0px 6px 1px #efefef;
}
</style>