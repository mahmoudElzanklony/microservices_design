// plugins/toast.js
import { defineNuxtPlugin } from '#app';
import Toast, { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        timeout: 4000,  // 4 seconds
    });
    const toast = useToast();
    nuxtApp.provide('toast', toast); // Provide globally as $toast
});
