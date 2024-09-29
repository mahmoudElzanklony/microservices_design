import { reactive } from "vue";
import { createFormInputs, createStyleInputs} from "../../pages/services/[id]/modal_box_columns";
import { useI18n } from "vue-i18n";
import { SectionsStore} from "../../store/sections";

export function useFormManagement() {
    const { t } = useI18n();
    const sectionStore = SectionsStore();

    const inputs = createFormInputs(t);
    const styles = createStyleInputs(t);

    const main_inputs_up_down = [
        {
            label: t("general.main_info"),
            icon: "i-heroicons-information-circle",
            defaultOpen: true,
            slot: "service_info",
        },
    ];

    const section_attributes_up_down = [
        {
            label: t("services.attributes_data"),
            icon: "i-heroicons-rectangle-stack",
            defaultOpen: false,
            slot: "attributes_info",
        },
    ];

    let sections_attr_ids = reactive([{ id: null, attribute_id: null }]);



    const fetchSections = async () => {
        await sectionStore.get_data_action("?ownership=true&limit=99999");
    };

    return {
        inputs,
        styles,
        main_inputs_up_down,
        section_attributes_up_down,
        sections_attr_ids,
        fetchSections,
    };
}
