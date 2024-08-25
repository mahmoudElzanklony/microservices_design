// Define a function that accepts `t` as an argument
export default function createModalBoxColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.name'),
            name: 'name',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('attributes.ar_label'),
            name: 'ar_label',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('attributes.en_label'),
            name: 'en_label',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('attributes.ar_placeholder'),
            name: 'ar_placeholder',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('attributes.en_placeholder'),
            name: 'en_placeholder',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('attributes.icon_txt'),
            name: 'icon',
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
                },
            ]

        },
        {
            label: t('attributes.type'),
            name: 'type',
            type:'select',
            options_type:'fixed',
            multiple:false,
            options_data:[
                {
                    id:'text',
                    name:t('attributes.text'),
                },
                {
                    id:'textarea',
                    name:t('attributes.textarea'),
                },
                {
                    id:'date',
                    name:t('attributes.date'),
                },
                {
                    id:'checkbox',
                    name:t('attributes.checkbox'),
                },
                {
                    id:'file',
                    name:t('attributes.file'),
                }
            ]

        },
    ];
}