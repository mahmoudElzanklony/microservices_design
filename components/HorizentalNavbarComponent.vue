<template>
  <UHorizontalNavigation :links="links"
                         :ui="{


active: 'text-primary dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full',
                    label: 'hidden md:block ',
                    inactive:
                        'text-gray-600 hover:text-primary-500  duration-300',
                    icon: {
                        base: 'sm:h-6 sm:w-6',
                        active: 'text-primary duration-300',
                        inactive:
                            'text-gray-600 group-hover:text-primary-500  duration-300',
                    },
                }"
                         class="border-b m-auto container border-gray-200 dark:border-gray-800" />
</template>

<script setup lang="ts">
const route = useRoute()
const localeRoute = useLocaleRoute()
import {LogoutStore} from "../store/auth/logout";

const LogoutStoreData = LogoutStore()
const { $auth } = useNuxtApp()
const { t ,  locale, setLocale } = useI18n();

let links = [
  [{

    label: t('navbar.home'),
    icon: 'i-heroicons-home',
    to: localeRoute({ path:'/' })
  }, {
    label: t('navbar.statistics'),
    icon: 'i-heroicons-chart-bar',
    to: localeRoute({ path:'/statistics' })
  },{
    label: t('footer.terms'),
    icon: 'i-heroicons-question-mark-circle',
    to: localeRoute({ path:'/terms' })
  },
    {
      label: t('footer.privacy'),
      icon: 'i-heroicons-user-group',
      to: localeRoute({ path:'/privacy' })
    }],
  [{
    label: locale.value == 'en' ?'العربية':'English',
    icon: 'i-heroicons-language-solid',
   // to: locale.value == 'en'?'/ar':'/',
    click:() =>{setLocale(locale.value == 'en'?'ar':'en'); setTimeout(()=>window.location = document.URL,40)},
  }]
]

if(!$auth){
  links[1].push({
    label: t('login.submit'),
    icon: 'i-heroicons-arrow-left-on-rectangle-solid',
    to: localeRoute({ path:'/auth/login' }),
    click:() => {}
  },{
    label: t('register.submit'),
    icon: 'i-heroicons-arrow-left-on-rectangle-solid',
    to: localeRoute({ path:'/auth/register' }),
    click:() => {}
  })
}else{
  links[1].push({
    label: t('general.dashboard'),
    icon: 'i-heroicons-rocket-launch',
    to: localeRoute({ path:'/services' }),
    click:() => {}
  },{
    label: t('notifications.name'),
    icon: 'i-heroicons-bell-alert',
    to: localeRoute({ path:'/notifications' }),
    click:() => {}
  },{
    label: t('login.logout'),
    icon: 'i-heroicons-arrow-left-on-rectangle-solid',
    to: '#',
    click:() => LogoutStoreData.logout()
  })
}
</script>



