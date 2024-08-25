// Define a function that accepts `t` as an argument
export default function createTableColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.name'),
            key: 'name',
            sortable: true
        },
        {
            label: t('sections.visibility'),
            key: 'visibility',
            sortable: true
        },
        {
            label: t('navbar.attributes'),
            key: 'attributes',
            sortable: true
        },
        {
            label: t('general_inputs.created_at'),
            key: 'created_at',
            sortable: true
        },
        {
            key: 'actions'
        }
    ];
}