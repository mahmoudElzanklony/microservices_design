// Define a function that accepts `t` as an argument
export default function createModalBoxColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('services.name'),
            name: 'name',
            type:'text',
            icon:'information-circle',
            required:true,
        },
        {
            label: t('services.ar_main_title'),
            name: 'ar_main_title',
            type:'text',
            icon:'information-circle',
            required:true,
        },
        {
            label: t('services.en_main_title'),
            name: 'en_main_title',
            type:'text',
            icon:'information-circle',
            required:true,
        },
        {
            label: t('services.ar_sub_title'),
            name: 'ar_sub_title',
            type:'text',
            icon:'information-circle',
            required:false,
        },
        {
            label: t('services.en_sub_title'),
            name: 'en_sub_title',
            type:'text',
            icon:'information-circle',
            required:false,
        }
    ];
}