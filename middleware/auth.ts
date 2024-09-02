const { $auth } = useNuxtApp(); // Assuming you have an auth plugin or state management for authentication

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('---------------------auth------------------')
    console.log($auth)
    if (!$auth) {
        return navigateTo('/auth/login');
    }
});