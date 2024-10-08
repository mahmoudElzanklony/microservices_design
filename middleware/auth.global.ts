export default defineNuxtRouteMiddleware((to, from) => {
    const { $auth } = useNuxtApp()
    let guest_only = ['/auth/login','/auth/register','/auth/new-password','/auth/forget-password']
    let auth_only = ['/members','/attributes','/clients','/sections','/services','/forms','/notifications']
    let members_pages_only = ['/clients'];
    if(guest_only.includes(to.fullPath)){
        if($auth != null){
            return navigateTo('/')
        }
    }else if(auth_only.includes(to.fullPath)){
        if($auth == null){
            return navigateTo('/')
        }else{
            if($auth?.role == 'member'){
                // access pages for members
                if(!(members_pages_only.includes(to.fullPath))){
                    return navigateTo('/')
                }

            }
        }
    }
})
