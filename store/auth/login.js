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
                const response = await $axios.post('/login',data);
                this.userData = response.data.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    }
});