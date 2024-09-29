import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
import {navigateTo} from "nuxt/app";



export const ForgetPasswordStore = defineStore('ForgetPassword', {
    state: ()=> ({
        loading: false,
        error: null,
    }),
    actions: {
        async forgetPasswordAction() {
            const { $axios } = useNuxtApp();
            let data = new FormData(event.target);
            this.loading = true;
            try {
                await $axios.post('/auth/forget-password',data);

            } catch (error) {
                console.error('Logout failed:', error);
            }
            this.loading = false;
        },

    },
});
