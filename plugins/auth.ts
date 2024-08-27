import cookie from 'cookie';

export default defineNuxtPlugin((nuxtApp) => {
    // Function to get user data from cookies
    const req = useRequestHeaders();
    let user = null;
    try{
        user = req.cookie;
        if(user) {
            user = req.cookie.split('; user=');
            if (user[1]) {
                user = JSON.parse(user[1].split(';')[0]);
            }
        }
    }catch (e){
        user = null;
    }


     nuxtApp.provide('auth', user);
})