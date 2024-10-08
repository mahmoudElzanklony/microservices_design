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


export const MemberStore = defineStore('memberStore', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false
    }),

    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/members',filters)
            this.loading = false;
        },
        async save_action(data:FormData) {
            this.loading = true;
            await  new BaseStore<DataInterface>().save_action('/members',data)
            this.data = await new BaseStore<DataInterface>().get_data_action('/members','')
            this.loading = false;
        },


    },
});
