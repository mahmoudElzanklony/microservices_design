// stores/user.ts
import { defineStore } from 'pinia';
import dynamic_import from "../mixins/dynamic_import";
interface DataInterface {
    id: number[];
    table: string;
}

interface State {
    data: DataInterface | null;
    loading: boolean;
    error: Error | null;
}

export const DeleteStore = defineStore('delete', {
    state: (): State => ({
        data: null,
        loading: false,
        error: null,
    }),

    actions: {
        async delete_action(table:string) {
            const { $axios } = useNuxtApp();
            this.loading = true;
            try {
                let formData = new FormData();
                formData.append('table',this.data?.table)
                if(this.data?.id.length > 1){
                    for(let i of this.data.id){
                        formData.append('id[]',i)
                    }
                }else{
                    formData.append('id[]',this.data?.id)
                }

                const store = await dynamic_import(table)

                const response = await $axios.post('/deleteitem',formData);
                store.get_data_action()
            } catch (error) {
                console.log(error)
                this.error = error as Error;
            } finally {
                this.loading = false;
            }
        },


    },
});
