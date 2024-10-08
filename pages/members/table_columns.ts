// Define a function that accepts `t` as an argument
export default function createTableColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.username'),
            key: 'username',
            sortable: true
        },
        {
            label: t('general_inputs.email'),
            key: 'email',
            sortable: true
        },
        {
            label: t('general_inputs.phone'),
            key: 'phone',
            sortable: true
        },
        {
            label: t('general_inputs.phone'),
            key: 'phone',
            sortable: true
        },
        {
            key: 'actions'
        }
    ];
}