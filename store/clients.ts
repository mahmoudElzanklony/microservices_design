// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

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
    }),
    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/services-clients',filters)
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
