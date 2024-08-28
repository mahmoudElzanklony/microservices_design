import cookie from 'cookie';

export default defineNuxtPlugin((nuxtApp) => {
    let user = null;

    // For Server-side
    if (process.server) {
        const req = useRequestHeaders(['cookie']);
        if (req.cookie) {
            try {
                const parsedCookies = cookie.parse(req.cookie);
                if (parsedCookies.user) {
                    user = JSON.parse(parsedCookies.user);
                }
            } catch (e) {
                user = null;
            }
        }
    }

    // For Client-side
    if (process.client) {
        try {
            const parsedCookies = cookie.parse(document.cookie);
            if (parsedCookies.user) {
                user = JSON.parse(parsedCookies.user);
            }
        } catch (e) {
            user = null;
        }
    }

    // Provide the user globally
    nuxtApp.provide('auth', user);
});
