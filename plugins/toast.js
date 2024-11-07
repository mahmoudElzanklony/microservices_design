import { defineNuxtPlugin } from '#app';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin(nuxtApp => {
    const toastOptions = {
        timeout: 40000,  // 40 seconds
    };

    // Set up the plugin
    nuxtApp.vueApp.use(Toast, toastOptions);

    // Provide the useToast function
    const useToast = nuxtApp.vueApp.config.globalProperties.$toast;
    nuxtApp.provide('toast', useToast);
});
