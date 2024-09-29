// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    data:object | null,
}


export const NotificationStore = defineStore('Notifications', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false
    }),

    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/notifications',filters)
            this.loading = false;
        },


    },
});
