<template>
  <div class="flex flex-wrap justify-center items-center w-full min-h-screen">
    <div style="width: inherit" class="max-w-[500px] shadow-xl rounded p-8 bg-white">
      <div class="w-full">
        <img class="w-1/2 m-auto" src="/images/logo.png">
      </div>
      <form method="post" @submit.prevent="NewPasswordStoreData.new_pass">
        <input type="hidden" name="otp" :value="route?.query?.otp">
        <div class="mb-2.5">
          <div class="flex justify-between">
            <label>{{ $t('general_inputs.password') }}</label>
          </div>
          <UInput name="password"
                  icon="i-heroicons-lock-closed"
                  size="sm"
                  type="password"
                  required></UInput>
        </div>
        <div class="mb-2.5">
          <div class="flex justify-between">
            <label>{{ $t('login.confirmed_password') }}</label>
          </div>
          <UInput name="password_confirmation"
                  icon="i-heroicons-lock-closed"
                  size="sm"
                  type="password"
                  required></UInput>
        </div>
        <div class="mb-2.5">
          <RecaptchaComponent></RecaptchaComponent>
          <UButton :loading="NewPasswordStoreData.loading" type="submit" block>
            {{ $t('general.save') }}
          </UButton>
        </div>
        <div class="flex justify-between">
          <p>{{ $t('login.dont_have_acc') }}</p>
          <nuxt-link to="/auth/login" class="text-primary">{{ $t('login.submit') }}</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NewPasswordStore} from "../../store/auth/new_password";
import RecaptchaComponent from "../../components/RecaptchaComponent.vue";
import {useRoute} from "vue-router";
import {useRouter} from "nuxt/app";
let route = useRoute()
let router = useRouter()

const NewPasswordStoreData = NewPasswordStore()

const { data, pending, error } =
    useAsyncData('user-check-otp', () => NewPasswordStoreData.check_user_otp(route?.query?.otp));
console.log(data?.value?.data)
console.log(error)
if(!(data?.value?.data)){
  router.push('/auth/login')
}

definePageMeta({
  layout: 'main',
  head: {
    title: 'Login | تسجيل دخول'
  }
})
</script>



<style scoped>

</style>