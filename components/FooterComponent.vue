<template>
  <footer class="p-2 bg-gray-50">
    <div class="container m-auto">
      <div class="grid grid-cols-2 md:grid-cols-3">
        <div class="text-center">
          <img class="w-1/2" src="/images/logo.png">
        </div>
        <div>
          <p class="fw-bold text-3xl mb-5">{{ $t('footer.main_links') }}</p>
          <ul>
            <li v-for="(i,index) in main_links" :key="index" class="mb-2">
              <nuxt-link :to="i.to" class="flex items-center">
                <UIcon :name="i?.icon" class="w-5 h-5 text-gray-500"></UIcon>
                <span class="text-blue-900 mx-2">{{ i.label }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <p class="fw-bold text-3xl mb-5">{{ $t('footer.contact') }}</p>
          <ul>
            <li  class="mb-2">
              <a href="mailto:info@microservices.com" class="flex items-center">
                <UIcon name="i-heroicons:envelope" class="w-5 h-5 text-gray-500"></UIcon>
                <span class="text-blue-900 mx-2">info@microservices.com</span>
              </a>
            </li>
            <li  class="mb-2">
              <a href="tel:+96312312312"  class="flex items-center">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 text-gray-500"></UIcon>
                <span class="text-blue-900 mx-2">+96312312312</span>
              </a>
            </li>
            <li  class="mb-2">
              <a href="tel:+96312312312" class="flex items-center">
                <UIcon name="i-heroicons-device-phone-mobile" class="w-5 h-5 text-gray-500"></UIcon>
                <span class="text-blue-900 mx-2">+96312312312</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute()
const localeRoute = useLocaleRoute()

const { $auth } = useNuxtApp()
const { t ,  locale, setLocale } = useI18n();

const main_links = [
    {
      label: t('navbar.home'),
      icon: 'i-heroicons-home',
      to: localeRoute({ path:'/' })
    },{
      label: t('navbar.statistics'),
      icon: 'i-heroicons-chart-bar',
      to: localeRoute({ path:'/statistics' })
    },
    {
      label: t('footer.terms'),
      icon: 'i-heroicons-question-mark-circle',
      to: localeRoute({ path:'/terms' })
    },
    {
      label: t('footer.privacy'),
      icon: 'i-heroicons-user-group',
      to: localeRoute({ path:'/privacy' })
    }
]
</script>


<style scoped>

</style>