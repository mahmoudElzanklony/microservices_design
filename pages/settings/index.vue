<template>

  <div class="content">
    <form name="user_info" @submit.prevent="user_store.save_info">
      <div class="container m-auto">
        <UAlert
            class="mt-4 mb-4"
            icon="i-heroicons-information-circle"
            :title="$t('general.main_info')"
            color="primary"
            variant="soft"></UAlert>
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-2" v-for="(i,index) in form_inputs['users_info']" :key="index">
            <label class="mb-2">{{ i?.label }}</label>
            <UInput
                :name="i?.name"
                :icon="'i-heroicons-'+i?.icon"
                size="sm"
                :model-value="i?.type != 'password' ? $auth[i?.name]:''"
                :type="i?.type"
                :placeholder="i.hasOwnProperty('placeholder') ? (typeof (i?.placeholder) == 'string' ? i?.placeholder:(Object.keys(edited_row).length > 0 ? i?.placeholder['update']:i?.placeholder['create'])):''"
                :required="i?.required"
            ></UInput>
          </div>
        </div>
        <UButton color="primary" block
                 icon="i-heroicons-check"
                 type="submit"
                 class=" mt-3" variant="solid">
          {{ $t('general.save') }}
        </UButton>

      </div>
    </form>
  </div>
</template>

<script setup>

import {createFormInputs} from "./form_inputs";
import {UserStore} from "../../store/users";
const { t } = useI18n()
let user_store = UserStore()
let form_inputs = createFormInputs(t)




</script>



