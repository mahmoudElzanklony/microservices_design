import Pusher from 'pusher-js';

export default defineNuxtPlugin(nuxtApp => {
    // Ensure that environment variables are loaded and not undefined
    const config = useRuntimeConfig();
    //console.log(config)
    //console.log(config.public)
    if (!config.public.PUSHER_APP_KEY || !config.public.PUSHER_APP_CLUSTER) {
        throw new Error('Pusher app key and/or cluster is not set in the environment variables.');
    }

    const pusher = new Pusher(config.public.PUSHER_APP_KEY, {
        cluster: config.public.PUSHER_APP_CLUSTER,
        wsHost: config.public.hostUrl,  // Update if your WebSocket server is hosted elsewhere
        wsPort: 6001,          // Update if your WebSocket server uses a different port
        forceTLS: true,
        disableStats: true
    });


    // Inject the pusher instance globally
    nuxtApp.provide('pusher', pusher);
});
