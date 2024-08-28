// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";

interface DataInterface {
    id: number;
    name: string;
    main_title: string | null;
    sub_title: string | null;
    ar_main_title:string | null,
    en_main_title:string | null,
    ar_sub_title:string | null,
    en_sub_title:string | null,
    style:string | null,
    attributes:Array<string> | null,
    created_at: string;
}




export const ServicesStore = defineStore('services', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false,
        item:null,
    }),
    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            this.data = await new BaseStore<DataInterface>().get_data_action('/services',filters)
            this.loading = false;
        },
        async get_specific_one(id = '') {
            this.loading = true;
            this.item = await new BaseStore<DataInterface>().get_specific_one_action('/services/'+id,'')
            if(this.item){
                this.item = this.item?.data;
            }
            this.loading = false;
        },
        async save_action(data:FormData) {
            this.loading = true;
            await new BaseStore<DataInterface>().save_action('/services',data)
            this.data = await new BaseStore<DataInterface>().get_data_action('/services-sec-attrs','')
            this.loading = false;
        },
        async save_service_style_action(data:FormData) {
            this.loading = true;
            try{
                const { $axios } = useNuxtApp();
                const response = $axios.post('/services-sec-attrs',data);
            }catch (error){

            }
        },
        async get_attr_sec_action(service_id = '') {
            this.loading = true;
            this.item = await new BaseStore<DataInterface>().get_data_action('/services-sec-attrs/'+service_id)
            if(this.item){
                this.item = this.item?.data;
                if(this.item?.style?.style){
                    this.item.style = JSON.parse(this.item.style?.style)
                }
            }
            this.loading = false;
        },


    },
});
