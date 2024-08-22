// stores/user.js
import { defineStore } from 'pinia';


export const LoginStore = defineStore('login', {
    state: () => ({
        userData: null,
        loading: false,
        error: null,
    }),
    mutations:{
        setData(state,payload){
            state.userData = payload;
        }
    },
    actions: {
        async login() {
            const { $axios } = useNuxtApp();
            let data = new FormData(event.target)
            this.loading = true;
            try {
                const response = await $axios.post('/auth/login',data);
                this.userData = response.data.data;
                // Store token in a cookie
                document.cookie = `user=${JSON.stringify(this.userData)}; path=/; SameSite=Lax; Secure`;
                document.cookie = `token=${this.userData.token}; path=/; SameSite=Lax; Secure`;
                return navigateTo('/')
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        async logout() {
            const { $axios } = useNuxtApp();
            try {
                await $axios.post('/auth/logout');

                // Remove token cookie
                document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
                document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';

                this.userData = null;
                navigateTo('/auth/login')
            } catch (error) {
                console.error('Logout failed:', error);
            }
        },
    }
});