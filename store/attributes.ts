// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    name:string | null,
    ar_label:string | null,
    en_label:string | null,
    ar_placeholder:string | null,
    en_placeholder:string | null,
    type:string | null,
    icon:string | null,
    visibility:string | null,
    created_at: string;
}


export const AttributesStore = defineStore('attributes', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false
    }),

    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/attributes',filters)
            this.loading = false;
        },
        async save_action(data:FormData) {
            this.loading = true;
            await await new BaseStore<DataInterface>().save_action('/attributes',data)
            this.data = await new BaseStore<DataInterface>().get_data_action('/attributes','')
            this.loading = false;
        },


    },
});
