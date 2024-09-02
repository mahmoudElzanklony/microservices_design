import {useI18n} from "vue-i18n";
import {SectionsStore} from "../../store/sections";
import {reactive} from "vue";
import {ServicesStore} from "../../store/services";

export  function useTitlesStyles() {
    const { t } = useI18n();
    let serviceStore = ServicesStore()
    let SectionStore = SectionsStore()

    const titles = [{
        label: t('services.style.main_section'),
        icon: 'i-heroicons-information-circle',
        defaultOpen: true,
        slot: 'main_section'
    },{
        label: t('services.style.main_titles'),
        icon: 'i-heroicons-information-circle',
        defaultOpen: false,
        slot: 'main_titles'
    },{
        label: t('services.style.main_inputs'),
        icon: 'i-heroicons-information-circle',
        defaultOpen: false,
        slot: 'main_inputs'
    },{
        label: t('services.style.submit'),
        icon: 'i-heroicons-information-circle',
        defaultOpen: false,
        slot: 'submit'
    }]






    return {
        titles
    };
}
