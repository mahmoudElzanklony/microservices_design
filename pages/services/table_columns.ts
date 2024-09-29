// Define a function that accepts `t` as an argument
export default function createTableColumns(t: ReturnType<typeof useI18n>['t']) {
    let {$auth} = useNuxtApp();
    let arr = [];
    if($auth && $auth?.role == 'admin'){
        arr.push({
            label: t('general_inputs.username'),
            key: 'user.username',
            sortable: true
        });
    }
    arr.push(
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
            label: t('attributes.type'),
            key: 'type',
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
    );

    return arr;
}