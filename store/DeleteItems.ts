// stores/user.ts
import { defineStore } from 'pinia';

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
        async delete_action(table) {
            const { $axios } = useNuxtApp();
            this.loading = true;
            try {
                let formData = new FormData();
                formData.append('table',this.data?.table)
                formData.append('id[]',this.data?.id)
                const storeModule = await import(`./${table}.ts`);
                const store = storeModule[(table[0].toUpperCase() + table.slice(1))+'Store']()

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
