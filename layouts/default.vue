<template>
  <UVerticalNavigation :links="links" />
</template>

<script setup lang="ts">
const { t } = useI18n();
const links = [{
  label: t('navbar.home'),
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 100
}, {
  label: 'Installation',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Vertical Navigation',
  icon: 'i-heroicons-chart-bar',
  to: '/'
}, {
  label: 'Command Palette',
  icon: 'i-heroicons-command-line',
  to: '/'
}]
</script>


<style scoped>

</style>