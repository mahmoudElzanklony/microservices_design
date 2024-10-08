import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
import {navigateTo} from "nuxt/app";



export const LogoutStore = defineStore('Logout', {
    state: ()=> ({
        loading: false,
        error: null,
    }),
    actions: {
        async logout() {
            const { $axios } = useNuxtApp();
            try {
                await $axios.post('/auth/logout');

                // Remove token cookie
                document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
                document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
                window.location = '/auth/login'
                //navigateTo('/auth/login')
            } catch (error) {
                console.error('Logout failed:', error);
            }
        },
    },
});
