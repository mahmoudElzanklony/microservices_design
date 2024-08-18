import { defineStore } from 'pinia';
import { AxiosError } from 'axios';

interface UserData {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    userData: UserData | null;
    loading: boolean;
    error: AxiosError | null;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        userData: null,
        loading: false,
        error: null,
    }),
    actions: {
        async fetchUserData() {
            const { $axios } = useNuxtApp();
            this.loading = true;
            try {
                const response = await $axios.get('/sections');
                // Ensure data is plain and serializable
                console.log('Server-side:', process.server);
                console.log('Client-side:', process.client);
                this.userData = response.data.data;
                return this.userData;
            } catch (error) {
                if (error instanceof AxiosError) {
                    this.error = error;
                } else {
                    console.error('Unexpected error:', error);
                }
                return null; // Ensure return type consistency
            } finally {
                this.loading = false;
            }
        },
    },
});
