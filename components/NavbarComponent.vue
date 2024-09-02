

<template>
  <nav class="flex flex-col items-center">
    <ul class="w-full">
      <li v-for="(i,index) in links"
          class="p-2.5 hover:bg-green-600 hover:text-white hover:rounded hover:transition-all">
        <nuxt-link :to="localeRoute({ path: i?.to})?.fullPath" class="flex items-center w-full">
          <UIcon :name="i?.icon"></UIcon>
          <span class="mx-1.5">{{ i?.label }}</span>
        </nuxt-link>
      </li>
    </ul>
    <div class="text-center">
      <image-server-component v-if="$auth?.image" :src="$auth?.image?.name"></image-server-component>
      <img v-else src="/images/default.png" class="w-1/2 m-auto">
      <div class="flex items-center space-x-1 justify-center my-4">
        <p class="text-lg">{{ $t('navbar.hi') }}</p>
        <p class="text-lg font-bold text-green-600">{{ $auth?.username }}</p>
        <img class="w-7" src="/icons/hand.svg">
      </div>
      <UButton
          icon="i-heroicons-arrow-left-start-on-rectangle-solid"
          size="sm"
          color="primary"
          variant="outline"
          :label="$t('login.logout')"
          @click="store.logout"
          :trailing="false"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import {LoginStore} from "../store/auth/login";
let store = LoginStore()
import ImageServerComponent from "./ImageServerComponent.vue";
const localeRoute = useLocaleRoute()

const { $auth } = useNuxtApp()
const { t } = useI18n();
const links = [
  {
    label: t('navbar.home'),
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: t('navbar.attributes'),
    icon: 'i-heroicons-chart-bar',
    to: '/attributes'
  },
  {
    label: t('navbar.sections'),
    icon: 'i-heroicons-command-line',
    to: '/sections'
  },
  {
    label: t('navbar.services'),
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/services'
  },
  {
    label: t('navbar.client_reactions'),
    icon: 'i-heroicons-users',
    to: '/clients'
  }
]


</script>


<style scoped>

</style>