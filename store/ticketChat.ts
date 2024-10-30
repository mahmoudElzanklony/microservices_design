// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";


interface DataInterface {
    id: number;
    service_id: string | null;
    ip: string | null;
    latitude: string | null;
    longitude: string | null;
    info: string | null;
    owner:object | null,
    service:object | null,
    chat:Array<string> | null,
    created_at: string;
}




export const ticketChatStore = defineStore('ticketChat', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false,
        item:null,
    }),
    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/tickets',filters)
            this.loading = false;
        },
        async save_chat_action() {
            this.loading = true;
            let target = event.target
            let route = useNuxtApp()._route

            let data = new FormData(target)
            data.append('service_private_answer_id',route.query.id)
            await new BaseStore<DataInterface>().save_action('/tickets',data)
            target.content.value = ''
            this.get_data_action('?service_id='+route.query.service_id+'&id='+route.query.id)
            this.loading = false;
        },
        async end_chat(data:object) {
            let form_data = new FormData();
            for(let item of Object.entries(data)){
                form_data.append(item[0],item[1]);
            }
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().save_action('/tickets/end',form_data)
            this.loading = false;
        },


    },
});
