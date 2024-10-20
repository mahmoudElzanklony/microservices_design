import {useRoute} from "vue-router";

export default  function () {
    let actions = {
        add:true,
        delete:true,
    }
    const { $auth } = useNuxtApp()

    if(useRoute().fullPath.indexOf('services') >= 0 && $auth?.role == 'member'){
        actions = {
            add:false,
            delete:false,
        }
    }

    return actions;

}
