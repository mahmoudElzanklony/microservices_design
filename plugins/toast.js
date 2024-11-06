import { defineNuxtPlugin } from '#app';
/*import Toast, { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';*/

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast);
    const toastOptions = {
        timeout: 40000,  // 4 seconds
    };

    /*nuxtApp.vueApp.use(Toast, toastOptions);
    nuxtApp.provide('Toast', useToast());*/
});