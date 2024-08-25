// Define a function that accepts `t` as an argument
export default function createTableColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.name'),
            key: 'name',
            sortable: true
        },
        {
            label: t('attributes.label'),
            key: 'label',
            sortable: true
        },
        {
            label: t('attributes.placeholder'),
            key: 'placeholder',
            sortable: true
        },
        {
            label: t('sections.visibility'),
            key: 'visibility',
            sortable: true
        },
        {
            label: t('attributes.type'),
            key: 'type',
            sortable: true
        },
        {
            label: t('attributes.icon'),
            key: 'icon',
        },
        {
            key: 'actions'
        }
    ];
}