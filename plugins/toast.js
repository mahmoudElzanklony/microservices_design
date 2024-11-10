// plugins/toast.js
import { defineNuxtPlugin } from '#app';
import Toastification from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
    // Initialize Toastification globally with options
    nuxtApp.vueApp.use(Toastification, {
        timeout: 4000,  // 4 seconds
    });
});
