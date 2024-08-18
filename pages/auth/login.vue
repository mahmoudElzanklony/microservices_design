<template>
  <div class="flex flex-wrap justify-center items-center w-full min-h-screen">
    <div style="width: inherit" class="max-w-[500px] shadow-xl rounded p-8 bg-white">
      <div class="w-full">
        <img class="w-1/2 m-auto" src="/images/logo.png">
      </div>
      <form method="post" @submit.prevent="LoginStoreData.login">
        <div class="mb-2.5">
          <label>{{ $t('general_inputs.email') }}</label>
          <UInput name="email"
                  icon="i-heroicons-envelope"
                  size="sm"
                  required></UInput>
        </div>
        <div class="mb-2.5">
          <label>{{ $t('general_inputs.password') }}</label>
          <UInput name="password"
                  icon="i-heroicons-lock-closed"
                  size="sm"
                  type="password"
                  required></UInput>
        </div>
        <div class="mb-2.5">
          <UButton :loading="LoginStoreData.loading" type="submit" block>
            {{ $t('login.submit') }}
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {LoginStore} from "~/store/auth/login";
const LoginStoreData = LoginStore()
console.log(LoginStoreData)
definePageMeta({
  layout: false
})
</script>



<style scoped>

</style>