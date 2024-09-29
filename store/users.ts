// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    username:string | null,
    email:string | null,
    phone:string | null,
    created_at: string;
}


export const UserStore = defineStore('userStore', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false
    }),

    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/dashboard/users',filters)
            this.loading = false;
        },


    },
});
