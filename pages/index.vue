<template>

  <div class="content">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <div class="container m-auto">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="mb-5">
              <span class="text-5xl">{{ $t('home.build_your_form') }} </span>
              <br><span class="text-5xl mt-2 inline-block">{{ $t('home.using') }} </span> <span class="text-5xl mt-2 inline-block text-primary">{{ $t('general.app_name') }}</span>
            </h2>
            <p>{{ $t('home.header.title') }}<br> {{ $t('home.header.complete_title') }}</p>

            <UButton class="mt-2"
                icon="i-heroicons-paper-airplane"
                size="lg"
                color="primary"
                variant="solid"
                :label="$t('home.get_started')"
                :trailing="false"
                @click="navigateTo('/services')"
            />
          </div>
          <img src="/images/header.png">
        </div>
      </div>
      <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g class="wave1">
          <use xlink:href="#wave-path" x="50" y="3"></use>
        </g>
        <g class="wave2">
          <use xlink:href="#wave-path" x="50" y="0"></use>
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9"></use>
        </g>
      </svg>

    </section><!-- /Hero Section -->

    <section class="about_us">
      <div class="container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="info">
            <UBadge class="mb-3" size="lg" color="primary" variant="outline">
              {{ $t('home.about_us.title') }}
            </UBadge>
            <h2 class="mb-3 text-3xl text-primary">{{ $t('home.about_us.idea') }}</h2>
            <p class="text-xl text-gray-500">{{ $t('home.about_us.info') }}</p>
          </div>
          <div class="features">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div v-for="(i,index) in $tm('home.features')" :key="index"
                   class="feature mb-2 p-3">
                <Icon :name="i.icon" class="w-10 h-10"></Icon>
                <h2 class="text-xl text-blue-900">{{ i.name }}</h2>
                <p class="text-gray-500 text-sm">{{ i.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="statistics bg-gray-100">
       <div class="container m-auto">
         <h2 class="text-center text-3xl mb-4">{{ $t('home.statistics.title') }}</h2>
         <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
           <div class="box rounded mb-2 p-2 text-center bg-white"
                v-for="(i,index) in $tm('home.statistics.content')"
                :key="index">
             <Icon  :name="i?.icon" class="w-9 h-9 text-primary"></Icon>
             <p class="text-xl">{{ i?.name }}</p>
             <p class="font-bold text-3xl">{{ i?.number }}</p>
           </div>

         </div>
       </div>
    </section>

    <section class="details">
      <div class="container m-auto">
        <h2 class="text-center text-3xl mb-4">What make us different from the others</h2>
        <div class="grid grid-cols-1 items-center md:grid-cols-2">
          <div class="image">
            <img src="/images/home/details-1.png">
          </div>
          <div class="info">
            <h2 class="text-2xl mb-4 text-blue-900">You know the location of every one will submit at your form builder</h2>
            <ul>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>After user complete questions and click on submit button</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>pop up will appear ask permission to know location of user user complete questions and click on submit button</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>and then location of user will be sent automatic with answers</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 items-center md:grid-cols-2">
          <div class="info">
            <h2 class="text-2xl mb-4 text-blue-900">
              You Can see clients answers for your forms services with ability of filters</h2>
            <ul>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>After user complete questions and click on submit button</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>You can see client answers at your dashboard</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>you can filters answers with values you want</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>You can contact with any client with email or phone if this exists at form service</span>
              </li>
            </ul>
          </div>
          <div class="image">
            <img src="/images/home/details-2.png">
          </div>
        </div>
        <div class="grid grid-cols-1 items-center md:grid-cols-2">
          <div class="image">
            <img src="/images/home/details-3.png">
          </div>
          <div class="info">
            <h2 class="text-2xl mb-4 text-blue-900">
              You can know important information of client that submit form builder
            </h2>
            <ul>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>After user complete questions and click on submit button</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>you can know from website form builder was submit</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>you can know the date of submit form builder</span>
              </li>
              <li class="mb-2 flex items-center space-x-1">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>you can know the location and others important data</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="need_help">
      <div class="flex justify-center items-center flex-wrap h-full content-center">
        <h2 class="text-5xl text-white mb-6 text-center w-full fw-bold">{{ $t('home.need_help') }}</h2>
        <div class="text-center grid mt-4 grid-cols-2 gap-3 max-w-fit m-auto">
          <a href="mailto:info@microservices.com" class="flex items-center text-2xl">
            <UIcon name="i-heroicons:envelope" class="w-5 h-5 text-white"></UIcon>
            <span class="text-white mx-2">info@microservices.com</span>
          </a>
          <a href="tel:+96312312312" class="flex items-center text-white text-2xl">
            <UIcon name="i-heroicons:phone" class="w-5 h-5 text-white"></UIcon>
            <span class="text-white mx-2">+96312312312</span>
          </a>
        </div>
      </div>
    </div>

    <section class="profit">
      <div class="container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div class="info">
            <h2 class="text-3xl text-blue-900 mb-4">{{ $t('home.profit.title') }}</h2>
            <ul>
              <li class="mb-2 flex items-center space-x-1"
                  v-for="(i,index) in $tm('home.profit.data')" :key="index">
                <Icon name="heroicons-check" class="w-5 h-5 text-primary"></Icon>
                <span>{{ i?.content }}</span>
              </li>
            </ul>
          </div>
          <div class="image">
            <img src="/images/header.gif">
          </div>
        </div>
      </div>
    </section>

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

definePageMeta({
  layout: 'main',
})
/*import { useUserStore} from "~/store/members";

const userStore = useUserStore();

const { data, pending, error } =
    useAsyncData('user-data', () => userStore.fetchUserData());*/



</script>

<style lang="scss" scoped>


.about_us{
  .features{
    .feature{
      border: 1px solid #dddddd;
      border-radius: 8px;
    }
  }
}
.statistics{
  .box{
    position: relative;
    text-align: center;
    p:last-of-type{
      margin-bottom: 10px;
    }
  }
}
.need_help{
  background-image: url("/images/map.jpg");
  background-size: 100% 100%;
  height: 300px;
  >div{
    background-color: #08005e61;
    a{
      border: 1px solid white;
      width: fit-content;
      padding: 4px 10px;
      border-radius: 4px;
    }
  }
}
.details{
  .info{
    ul{
      li{

      }
    }
  }
  .image{
    img{
      height: 400px;
      margin: auto;
      display: block;
    }
  }
}
</style>

