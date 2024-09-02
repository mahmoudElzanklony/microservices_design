// stores/user.ts
import { defineStore } from 'pinia';



export const embdedMicrroService = defineStore('embdedMicrroService', {
    state: () => ({
        data:[],
        loading:false,
        error:null
    }),

    actions: {

        async save_action(data:FormData) {
            this.loading = true;
            const { $axios } = useNuxtApp();
            this.data =  await $axios.post('/services-clients/save-answers',data,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            this.loading = false;
        },


    },
});
