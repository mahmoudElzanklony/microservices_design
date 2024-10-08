<template>
  <teleport to="head">
    <link href="/assets/css/main.css" rel="stylesheet">
  </teleport>
  <div class="content">
   <HorizentalNavbarComponent></HorizentalNavbarComponent>
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <div class="container m-auto">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="mb-5">
              <span class="text-5xl">{{ $t('home.build_your_form') }} </span>
              <br><span class="text-5xl mt-2 inline-block">{{ $t('home.using') }} </span> <span class="text-5xl mt-2 inline-block text-primary">{{ $t('general.app_name') }}</span>
            </h2>
            <p>You can now interact with your clients easily by inserting your form builder<br> at your websites and get clients answers</p>

            <UButton class="mt-2"
                icon="i-heroicons-paper-airplane"
                size="lg"
                color="primary"
                variant="solid"
                :label="$t('home.get_started')"
                :trailing="false"
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
            <UBadge class="mb-3" size="lg" color="primary" variant="outline">About us</UBadge>
            <h2 class="mb-3 text-3xl text-primary">Ducimus rerum libero reprehenderit cumque</h2>
            <p class="text-xl text-gray-500">Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
          </div>
          <div class="features">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div v-for="i in 4" class="feature mb-2 p-3">
                <Icon name="i-heroicons-square-3-stack-3d" class="w-10 h-10"></Icon>
                <h2 class="text-xl text-blue-900">Eius provident</h2>
                <p class="text-gray-500 text-sm">Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="statistics bg-gray-100">
       <div class="container m-auto">
         <h2 class="text-center text-3xl">Statistics</h2>
         <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
           <div class="box rounded mb-2 p-2 text-center bg-white">
             <Icon  name="heroicons-users" class="w-9 h-9 text-primary"></Icon>
             <p class="text-xl">Happy clients</p>
             <p class="font-bold text-3xl">1000</p>
           </div>
           <div class="box rounded mb-2 p-2 text-center bg-white">
             <Icon name="heroicons-rectangle-stack" class="w-9 h-9 text-primary"></Icon>
             <p class="text-xl">Services forms</p>
             <p class="font-bold text-3xl">1000</p>
           </div>
           <div class="box rounded mb-2 p-2 text-center bg-white">
             <Icon name="heroicons-face-smile" class="w-9 h-9 text-primary"></Icon>
             <p class="text-xl">Form Answers</p>
             <p class="font-bold text-3xl">1000</p>
           </div>
           <div class="box rounded mb-2 p-2 text-center bg-white">
             <Icon name="heroicons-phone" class="w-9 h-9 text-primary"></Icon>
             <p class="text-xl">Support</p>
             <p class="font-bold text-3xl">24/7</p>
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
  layout: false,
})
/*import { useUserStore} from "~/store/members";

const userStore = useUserStore();

const { data, pending, error } =
    useAsyncData('user-data', () => userStore.fetchUserData());*/



</script>

<style lang="scss" scoped>

#hero img{
  height: 400px;
}
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

