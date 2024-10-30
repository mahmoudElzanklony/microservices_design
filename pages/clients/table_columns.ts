import { ServicesColumnsStore } from "../../store/serviceColumns";


export default async function createTableColumns(t: ReturnType<typeof useI18n>['t'], service_id?: any) {
    // Define default columns
    const defaultColumns = [
        {
            label: t('general_inputs.name'),
            key: 'service.name',
            sortable: true
        },
        {
            label: t('clients.url'),
            key: 'ip',
            sortable: true
        },
        {
            label: t('general_inputs.published_at'),
            key: 'published_at',
            sortable: true
        },
        {
            label: t('general_inputs.created_at'),
            key: 'created_at',
            sortable: true
        },
        {
            label: '',
            key: 'privileges'
        }
    ];

    if (!service_id) {
        // Return default columns if service_id is not provided
        return defaultColumns;
    }

    // Load columns specific to the provided service_id
    try {
        const columnsStore = ServicesColumnsStore();
        await columnsStore.get_data_action(`?service_id=${service_id}`);

        // Generate dynamic columns based on store data
        const dynamicColumns = columnsStore.data?.data.map((item: any) => ({
            label: item?.attribute?.label,
            name: item?.attribute?.name,
            type: item?.attribute?.type,
            key: 'answers'
        })) || [];

        // Add additional static columns
        dynamicColumns.push(
            {
                label: t('clients.location'),
                key: 'longitude'
            },
            {
                label: t('general_inputs.published_at'),
                key: 'published_at',
                sortable: true
            },
            {
                key: 'privileges'
            }
        );

        return dynamicColumns;
    } catch (error) {
        console.error("Failed to load dynamic columns:", error);
        return defaultColumns; // Return default columns on error
    }
}
