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
          <div class="flex justify-between">
            <label>{{ $t('general_inputs.password') }}</label>
            <nuxt-link class="text-primary" to="/auth/forget-password">{{ $t('login.forget_password') }}</nuxt-link>
          </div>
          <UInput name="password"
                  icon="i-heroicons-lock-closed"
                  size="sm"
                  type="password"
                  required></UInput>
        </div>
        <div class="mb-2.5">
          <RecaptchaComponent></RecaptchaComponent>
          <UButton :loading="LoginStoreData.loading" type="submit" block>
            {{ $t('login.submit') }}
          </UButton>
        </div>
        <div class="flex justify-between">
          <p>{{ $t('login.dont_have_acc') }}</p>
          <nuxt-link to="/auth/register" class="text-primary">{{ $t('login.register_here') }}</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {LoginStore} from "../../store/auth/login";
import RecaptchaComponent from "../../components/RecaptchaComponent.vue";

const LoginStoreData = LoginStore()

definePageMeta({
  layout: 'main',
  head: {
    title: 'Login | تسجيل دخول'
  }
})
</script>



<style scoped>

</style>