// Define a function that accepts `t` as an argument
export default function createTableColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.name'),
            key: 'name',
            sortable: true
        },
        {
            label: t('services.main_title'),
            key: 'main_title',
            sortable: true
        },
        {
            label: t('services.sub_title'),
            key: 'sub_title',
            sortable: true
        },
        {
            label: t('general_inputs.created_at'),
            key: 'created_at',
            sortable: true
        }
    ];
}