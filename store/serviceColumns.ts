// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    name:Array<string> | null,
    created_at: string;
}




export const ServicesColumnsStore = defineStore('servicesColumns', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false,
        item:null,
    }),
    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/services-clients/columns',filters)
            this.loading = false;
        },



    },
});
