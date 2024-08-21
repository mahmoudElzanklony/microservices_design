// stores/user.ts
import { defineStore } from 'pinia';

interface DataInterface {
    id: number;
    name: string;
    main_title: string | null;
    sub_title: string | null;
    ar_main_title:string | null,
    en_main_title:string | null,
    ar_sub_title:string | null,
    en_sub_title:string | null,
    created_at: string;
}

interface State {
    data: DataInterface | null;
    loading: boolean;
    error: Error | null;
}

export const ServicesStore = defineStore('services', {
    state: (): State => ({
        data: null,
        loading: false,
        error: null,
    }),

    actions: {
        async get_data_action(filters = '') {
            const { $axios } = useNuxtApp();

            this.loading = true;

            try {
                const response = await $axios.get<{ data: State }>('/services'+filters);
                this.data = response.data;

            } catch (error) {
                this.error = error as Error;
            } finally {
                this.loading = false;
            }
        },


    },
});
