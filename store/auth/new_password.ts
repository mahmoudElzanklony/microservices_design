import { defineStore } from 'pinia';

export const NewPasswordStore = defineStore('NewPassword', {
    state: ()=> ({
        loading: false,
        error: null,
    }),
    actions: {
        async new_pass() {
            const { $axios } = useNuxtApp();
            let data = new FormData(event.target);
            this.loading = true;
            try {
                await $axios.post('/auth/new-password',data);
                return navigateTo('/auth/login')
            } catch (error) {
                console.error('Logout failed:', error);
            }
            this.loading = false;
        },
        async check_user_otp(otp_code) {
            const { $axios } = useNuxtApp();
            try {
                let response = await $axios.get('/auth/otp-check?otp='+otp_code);
                return response?.data;
            } catch (error) {

            }
        },
    },
});
