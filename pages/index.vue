<template>
  <div>
    <NuxtLink :to="localePath('/auth/login')">login</NuxtLink>
    <button @click="onClick">Show profile</button>

    <div>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else-if="data">
        <h1 v-for="item in data">{{item?.name }}</h1>
      </div>
    </div>
    <div>
      <button @click="setLocale('en')" class="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded">
        en
      </button>
      <button @click="setLocale('fr')" class="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded">
        fr
      </button>
      <button @click="setLocale('ar')" class="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded">
        ar
      </button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>

<script setup>

import {useAsyncData} from "#app";

const localeRoute = useLocaleRoute()

const { locale, setLocale  } = useI18n()
function onClick() {
  const route = localeRoute({ name: 'index', query: { foo: '1' } })
  if (route) {
    return navigateTo(route.fullPath)
  }
}

import { useUserStore} from "~/store/users.js";

const userStore = useUserStore();
await useAsyncData('user-data',
    () => userStore.fetchUserData())
const { data, pending, error } = await useAsyncData('user-data',
    () => userStore.fetchUserData());


</script>

