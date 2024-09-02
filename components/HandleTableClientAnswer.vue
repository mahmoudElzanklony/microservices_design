

<template>
  <div class="p-4 flex items-center justify-between">
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
              <tr>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{{ $t('general_inputs.question') }}</th>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{{ $t('general_inputs.answer') }}</th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
              <tr v-for="(answer,index) in row?.answers" :key="index">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {{ answer?.attribute?.[locale+'_label'] }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  <span v-if="answer?.attribute?.type != 'file'">{{ answer?.answer }}</span>
                  <a v-else target="_blank" class="text-primary"
                     :href="config.public.hostUrl+'/clients_answers/'+answer?.answer">{{ $t('general.press_here') }}</a>
                </td>

              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <MapComponent :lat="row?.latitude" :lon="row?.longitude" />
  </div>

</template>

<script setup lang="ts">
  defineProps(['row'])
  const config = useRuntimeConfig()
  const { locale  } = useI18n()
</script>


<style scoped>

</style>