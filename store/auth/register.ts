import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
import {navigateTo} from "nuxt/app";

interface UserData{
    id: number,
    username:string,
    email:string,
    password:string,
    phone:string
}

interface UserState {
    userData: UserData | null;
    loading: boolean;
    error: AxiosError | null;
}

export const RegisterStore = defineStore('user', {
    state: (): UserState => ({
        userData: null,
        loading: false,
        error: null,
    }),
    actions: {
        async register() {
            const { $axios } = useNuxtApp();
            let data = new FormData(event?.target)
            this.loading = true;
            try {
                const response = await $axios.post('/auth/register',data);
                this.userData = response.data.data;
                setTimeout(()=>{
                    navigateTo('/auth/login')
                },2000)
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
