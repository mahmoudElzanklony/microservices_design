import { reactive } from "vue";
import { createFormInputs, createStyleInputs} from "../../pages/services/[id]/modal_box_columns";
import { useI18n } from "vue-i18n";
import { ServicesStore} from "../../store/services";
import {useRoute} from "vue-router";
import {navigateTo} from "nuxt/app";

export function useCheckServiceBelongToOwner() {

    const service_store = ServicesStore();
    let router = useRoute();
    const config = useRuntimeConfig();
    function check_owner(){
        console.log(window.location.origin)
        console.log(config.public.clientUrl)
        if(window.location.origin == config.public.clientUrl){
            const { $auth } = useNuxtApp()

            if(service_store.item?.user_id != $auth.id){
                navigateTo('/services')
            }

        }
    }
    return {
        check_owner
    };
}
