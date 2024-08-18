// plugins/axios.js
import axios from 'axios';
import cookie from 'cookie';

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

    // Optional: Add interceptors for request/response
    axiosInstance.interceptors.request.use((config) => {
        if (process.server) {
            const req = useRequestHeaders();
            let token = req.cookie?.token;
            try{
                token = req.cookie.split('token=')[1]
                console.log('------token-----')
                console.log(req.cookie.split('token=')[1])
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }catch (e){
                console.log(e)
            }



        } else if (process.client) {
            const token = document.cookie.split('; ').find(row => row.startsWith('token='));
            if (token) {
                config.headers.Authorization = `Bearer ${token.split('=')[1]}`;
            }
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response) => {
        // You can modify the response here
        const Toast = nuxtApp.$Toast;
        if(response?.data?.message){
            Toast.success(response?.data?.message);
        }
        return response;
    }, (error) => {
        const Toast = nuxtApp.$Toast;
        if(error?.response?.data?.errors) {
            Toast.error(error.response.data.errors);
        }
        return Promise.reject(error);
    });

    // Make Axios available globally in the Nuxt app
    nuxtApp.provide('axios', axiosInstance);
});

