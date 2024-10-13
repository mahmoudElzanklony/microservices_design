// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";
import {useRoute} from "vue-router";

interface DataInterface {
    id: number;
    service_id: number;
    ip: string | null;
    sub_title: string | null;
    latitude:string | null,
    longitude:string | null,
    info:string | null,
    answers:Array<string> | null,
    created_at: string;
    published_at: string | null;
}




export const ClientsStore = defineStore('clients', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false,
        item:null,
        authorize:false,
    }),
    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            let service_id = useRoute().query?.service_id
            if(service_id){
                filters = filters.length == 0 ? '?service_id='+service_id :'';
            }
            this.data = await new BaseStore<DataInterface>().get_data_action('/services-clients',filters)
            this.loading = false;
        },
        async authorize_user() {
            this.loading = true;
            let service_id = useRoute().query?.service_id
            if(service_id){
                let data = new FormData();
                data.append('service_id',service_id);
                const { $axios } = useNuxtApp();

                try {
                    const response = await $axios.post('/services-clients/authorize', data);
                    if (response.data.status === false) {
                        // Perform navigation if the status is false
                        await navigateTo('/'); // Ensure this is awaited
                    }
                } catch (error) {
                    console.error('Authorization error:', error);
                    // You might want to navigate on error too
                    await navigateTo('/')
                }
            }

            this.loading = false;
        },
        async get_specific_one(id = '') {
            this.loading = true;
            this.item = await new BaseStore<DataInterface>().get_specific_one_action('/services-clients/'+id,'')
            if(this.item){
                this.item = this.item?.data;
            }
            this.loading = false;
        },


    },
});
