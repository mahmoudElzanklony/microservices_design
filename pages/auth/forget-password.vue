<template>
  <div class="flex flex-wrap justify-center items-center w-full min-h-screen">
    <div style="width: inherit" class="max-w-[500px] shadow-xl rounded p-8 bg-white">
      <div class="w-full">
        <img class="w-1/2 m-auto" src="/images/logo.png">
      </div>
      <form method="post" @submit.prevent="ForgetPasswordStoreData.forgetPasswordAction()">
        <div class="mb-2.5">
          <label>{{ $t('general_inputs.email') }}</label>
          <UInput name="email"
                  icon="i-heroicons-envelope"
                  size="sm"
                  required></UInput>
        </div>
        <div class="mb-2.5">
          <RecaptchaComponent></RecaptchaComponent>
          <UButton :loading="ForgetPasswordStoreData.loading" type="submit" block>
            {{ $t('general.send') }}
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
import {ForgetPasswordStore} from "../../store/auth/forget_password";
import RecaptchaComponent from "../../components/RecaptchaComponent.vue";

const ForgetPasswordStoreData = ForgetPasswordStore()

definePageMeta({
  layout: 'main',
  head: {
    title: 'Login | تسجيل دخول'
  }
})
</script>



<style scoped>

</style>