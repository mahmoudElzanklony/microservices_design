// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    service_id: number;
    privilege_id: number;
    privileges:Array<string> | null,
    created_at: string;

}




export const ServicePrivilegeStore = defineStore('servicePrivilege', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false,
        item:null,
    }),
    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/services-clients/privileges',filters)
            this.loading = false;
        },
        async save_action() {
            this.loading = true;
            let form_data = new FormData(event.target)
            await new BaseStore<DataInterface>().save_action('/services/assign-members',form_data)
            this.loading = false;
        },
    },
});
