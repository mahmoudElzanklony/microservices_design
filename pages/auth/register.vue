<template>
  <div class="flex flex-wrap justify-center items-center w-full min-h-screen">
    <div style="width: inherit" class="max-w-[500px] shadow-xl rounded p-8 bg-white">
      <div class="w-full">
        <img class="w-1/2 m-auto" src="/images/logo.png">
      </div>
      <form method="post" @submit.prevent="store.register">
        <div class="mb-2.5">
          <label>{{ $t('general_inputs.username') }}</label>
          <UInput name="username"
                  icon="i-heroicons-user"
                  size="sm"
                  required></UInput>
        </div>
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
          <label>{{ $t('general_inputs.phone') }}</label>
          <UInput name="phone"
                  type="number" min="1"
                  icon="i-heroicons-phone"
                  size="sm"
                  required></UInput>
        </div>
        <div class="mb-2.5">
          <UButton :loading="store.loading" type="submit" block>
            {{ $t('register.submit') }}
          </UButton>
        </div>
        <div class="flex justify-between">
          <p>{{ $t('register.have_acc') }} </p>
          <nuxt-link to="/auth/login" class="text-primary">{{ $t('register.login_here') }}</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RegisterStore} from "../../store/auth/register";

const store = RegisterStore()
definePageMeta({
  layout: 'main',
  head: {
    title: 'Register | تسجيل مستخدم جديد'
  }
})
</script>



<style scoped>

</style>