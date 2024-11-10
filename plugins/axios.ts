// plugins/axios.js
import axios from 'axios';
import { useToast } from 'vue-toastification';


export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    // Create a new Axios instance with the base URL from runtime config
    const axiosInstance = axios.create({
        baseURL: config.public.axiosBaseUrl,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const Toast = useToast();



    // Optional: Add interceptors for request/response
    axiosInstance.interceptors.request.use((config) => {

        if (process.server) {
            const req = useRequestHeaders();
            let token = req.cookie?.token;
            let lang = req.cookie?.i18n_redirected;
            try{
                token = req.cookie.split('token=')[1]
                lang = req.cookie.split('i18n_redirected=')[1].split(';')[0]
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                    config.headers.lang = lang;
                }
            }catch (e){
                //console.log(e)
            }



        } else if (process.client) {
            const token = document.cookie.split('; ')
                .find(row => row.startsWith('token='));
            const lang = document.cookie.split('; ')
                .find(row => row.startsWith('i18n_redirected='));
            config.headers.mix = true; // for get data with all lang and data that put at table
            if (token) {
                config.headers.Authorization = `Bearer ${token.split('=')[1]}`;
            }
            if(lang){
                config.headers.lang = lang?.split('=')[1]
            }
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response) => {
        // You can modify the response here
        //const Toast = nuxtApp.$Toast;

        if(response?.data?.message){
            Toast.success( response?.data?.message)
        }

        return response;
    }, (error) => {

        const router = useRouter();

        if(error?.response?.data && error?.response?.data.hasOwnProperty('message') &&  error?.response?.data.message.indexOf('Unauthenticated') >= 0){
            router.push('/auth/login');
        }

        if(typeof error?.response?.data?.errors == 'string'){
            Toast.error(error?.response?.data?.errors)
        }else{
            if(error?.response?.data?.errors) {
                //console.log(error?.response?.data?.errors)
                if(typeof error?.response?.data?.errors === 'object' && error?.response?.data?.errors !== null){
                    for(let err of Object.values(error?.response?.data?.errors)){
                        Toast.error(err[0])
                    }
                }
            }
        }

        if(error?.response?.statusText == 'Unauthorized'){
            router.push('/');
        }

        return Promise.reject(error);
    });

    // Make Axios available globally in the Nuxt app
    nuxtApp.provide('axios', axiosInstance);
});

