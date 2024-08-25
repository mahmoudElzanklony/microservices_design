// Define a function that accepts `t` as an argument
export default function createModalBoxColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.ar_name'),
            name: 'ar_name',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('general_inputs.en_name'),
            name: 'en_name',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('sections.visibility'),
            name: 'visibility',
            type:'select',
            options_type:'fixed',
            multiple:false,
            options_data:[
                {
                    id:'public',
                    name:t('sections.public'),
                },
                {
                    id:'private',
                    name:t('sections.private'),
                }
            ]
        },
        {
            label: t('navbar.attributes'),
            name: 'attributes',
            type:'select',
            options_type:'api',
            store_name:'attributes',
            multiple:true,
            options_data:[]
        },
    ];
}