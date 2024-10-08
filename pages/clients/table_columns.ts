// Define a function that accepts `t` as an argument
export default function createTableColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.name'),
            key: 'service.name',
            sortable: true
        },

        /*{
            label: t('clients.location'),
            key: 'location',
            sortable: false
        },*/
        {
            label: t('clients.url'),
            key: 'ip',
            sortable: true
        },
        /*{
            label: t('clients.longitude'),
            key: 'longitude',
            sortable: true
        },
        {
            label: t('clients.latitude'),
            key: 'latitude',
            sortable: true
        },*/
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
            key: 'privileges',
        },
    ];
}