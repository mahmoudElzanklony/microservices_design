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
                window.location = '/'
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

    }
});