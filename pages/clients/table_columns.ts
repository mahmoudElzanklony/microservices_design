// Define a function that accepts `t` as an argument
import {ServicesColumnsStore} from "../../store/serviceColumns";
import {useRoute} from "vue-router";
import {ClientsStore} from "../../store/clients";

export default async function createTableColumns(t: ReturnType<typeof useI18n>['t']) {
    let router = useRoute();

    if(router.query.service_id){
        try{
            let columns_store = ServicesColumnsStore();
            await columns_store.get_data_action('?service_id='+router.query.service_id)

            let columns = [];

            for (const [index, item] of columns_store.data?.data.entries()) {
                columns.push({
                    label: item?.attribute?.label,
                    name: item?.attribute?.name,
                    type: item?.attribute?.type,
                    key: `answers`,
                });
            }
            console.log(columns)
            columns.push({
                label: t('clients.location'),
                key: 'longitude',
            },{
                label: t('general_inputs.published_at'),
                key: 'published_at',
                sortable: true
            },{
                key: 'privileges',
            })
            return columns;
        }catch (e){}

    }else{
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
}