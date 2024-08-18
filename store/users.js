// stores/user.js
import { defineStore } from 'pinia';


export const useUserStore = defineStore('user', {
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
        async fetchUserData() {
            const { $axios } = useNuxtApp();
            this.loading = true;
            try {
                const response = await $axios.get('/countries');
                this.userData = response.data.data;
                return this.userData;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    }
});