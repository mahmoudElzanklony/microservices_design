import { useNuxtApp } from '#app';

interface BaseState<T>{
    data: T | null,
    loading:boolean,
    error:any | null
}
export default class BaseStore <T>{
    public state :BaseState<T>;
    public axios  = null;
    constructor() {
        this.state = {
            data :null,
            loading:false,
            error:null
        }
        const { $axios } = useNuxtApp();
        this.axios = $axios;
    }

    async get_data_action(end_point:string = '', filters:string = ''){
        try{
            const response = await this.axios.get<{data:T}>(end_point+filters)
            return response?.data;
        }catch (error){
            this.state.error = error;
        }

    }

    async save_action(end_point:string = '',filters:FormData){
        try{
            const response = this.axios.post<{data:T}>(end_point,filters);
            document.querySelector('.fixed form').reset()
            return response.data
        }catch (error){
            this.state.error = error
        }

    }
}