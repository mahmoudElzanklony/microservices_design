<template>
  <div class="content">
    <h2>aaaaaaaaaa</h2>
    <button @click="setLocale('ar')">change lang</button>
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

import { useUserStore} from "~/store/users";

const userStore = useUserStore();

const { data, pending, error } =
    useAsyncData('user-data', () => userStore.fetchUserData());



</script>

