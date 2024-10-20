// stores/user.ts
import { defineStore } from 'pinia';
import BaseStore from "./BaseStore";
import { useRoute } from 'vue-router'; // Import useRoute

interface DataInterface {
    id: number;
    service_id: number;
    ip: string | null;
    sub_title: string | null;
    latitude:string | null,
    longitude:string | null,
    info:string | null,
    answers:Array<string> | null,
    created_at: string;
    published_at: string | null;
}




export const ClientsStore = defineStore('clients', {
    state: () => ({
        ...new BaseStore<DataInterface>().state,
        loading:false,
        item:null,
        authorize:false,
    }),
    actions: {
        async get_data_action(filters = '') {
            this.loading = true;
            let  _route  = useRoute() // Access the route from NuxtApp
            if(_route == undefined){
                _route =  useNuxtApp()._route
            }
            let service_id = _route.query?.service_id
            if(service_id){
                if(filters.length == 0){
                    filters = '?service_id='+service_id;
                }else{
                    filters = filters + (filters.indexOf('service_id') == -1 ? '&service_id='+service_id:'')
                }
            }
            this.data = await new BaseStore<DataInterface>().get_data_action('/services-clients',filters)
            this.loading = false;
        },
        async authorize_user(data_passed:object = {}) {
            this.loading = true;
            let  _route  = useRoute() // Access the route from NuxtApp
            if(_route == undefined){
                _route =  useNuxtApp()._route
            }
            let service_id = _route.query?.service_id
            console.log(service_id)
            console.log(_route)
            if(service_id){
                let data = new FormData();
                data.append('service_id',service_id);
                console.log(data_passed)
                if(data_passed && Object.keys(data_passed).length > 0){
                    for(let k of Object.entries(data_passed)){
                        data.append(k[0],k[1]);
                    }
                }
                const { $axios } = useNuxtApp();
                try {
                    const response = await $axios.post('/services-clients/authorize', data);
                    if (response.data.status === false) {
                        window.location = '/'
                    }
                } catch (error) {
                    await navigateTo('/')
                }
            }
            this.loading = false;
        },
        async get_specific_one(id = '') {
            this.loading = true;
            this.item = await new BaseStore<DataInterface>().get_specific_one_action('/services-clients/'+id,'')
            if(this.item){
                this.item = this.item?.data;
            }
            this.loading = false;
        },


    },
});
