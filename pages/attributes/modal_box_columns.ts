// Define a function that accepts `t` as an argument
export default function createModalBoxColumns(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('general_inputs.name'),
            name: 'name',
            type:'text',
            icon:'information-circle',
            required:true,
        },
        {
            label: t('attributes.ar_label'),
            name: 'ar_label',
            type:'text',
            icon:'information-circle',
            required:true,
        },
        {
            label: t('attributes.en_label'),
            name: 'en_label',
            type:'text',
            icon:'information-circle',
            required:true,
        },
        {
            label: t('attributes.ar_placeholder'),
            name: 'ar_placeholder',
            type:'text',
            icon:'information-circle',
            required:false,
        },
        {
            label: t('attributes.en_placeholder'),
            name: 'en_placeholder',
            type:'text',
            icon:'information-circle',
            required:false,
        },
        {
            label: t('attributes.icon_txt'),
            name: 'icon',
            type:'text',
            icon:'information-circle',
            required:false,
        },
        {
            label: t('sections.visibility'),
            name: 'visibility',
            type:'select',
            options_type:'fixed',
            multiple:false,
            required:true,
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
                    id:'select',
                    name:t('attributes.select'),
                },
                {
                    id:'file',
                    name:t('attributes.file'),
                }
            ]
        },
        {
            name:'option',
            required:true,
            basedOnAttributeName:'type',
            basedOnAttributeValue:'select',
            basedOnAttributeApi:'options',
            addMore:true,
            group:[
                {
                    label: t('attributes.ar_option'),
                    name: 'ar_name[]',
                    alias: 'ar_option[]',
                    type:'text',
                    icon:'information-circle',
                },
                {
                    label: t('attributes.en_option'),
                    name: 'en_name[]',
                    alias: 'en_option[]',
                    type:'text',
                    icon:'information-circle',
                }
            ]
        },
    ];
}