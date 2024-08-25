// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    ar_name:string | null,
    en_name:string | null,
    visibility:string | null,
    created_at: string;
}


export const SectionsStore = defineStore('sections', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false
    }),

    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/sections',filters)
            this.loading = false;
        },
        async save_action(data:FormData) {
            this.loading = true;
            await  await new BaseStore<DataInterface>().save_action('/sections',data)
            this.data = await new BaseStore<DataInterface>().get_data_action('/sections','')
            this.loading = false;
        },


    },
});
