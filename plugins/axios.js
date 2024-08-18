// plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    // Create a new Axios instance with the base URL from runtime config
    const axiosInstance = axios.create({
        baseURL: config.public.axiosBaseUrl,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Optional: Add interceptors for request/response
    axiosInstance.interceptors.request.use((request) => {
        // You can modify the request here, like adding headers
        return request;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response) => {
        // You can modify the response here
        const Toast = nuxtApp.$Toast;
        console.log(response)
        /*if(response?.message) {
            Toast.success(response?.message);
        }*/
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