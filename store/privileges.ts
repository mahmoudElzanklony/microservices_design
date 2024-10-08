// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    name:string | null,
}


export const PrivilegeStore = defineStore('privilegeStore', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false
    }),

    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/privileges',filters)
            this.loading = false;
        },
        async save_action(data:FormData) {
            this.loading = true;
            await  new BaseStore<DataInterface>().save_action('/privileges',data)
            this.data = await new BaseStore<DataInterface>().get_data_action('/privileges','')
            this.loading = false;
        },


    },
});
