// Define a function that accepts `t` as an argument
export function createFormInputs(t: ReturnType<typeof useI18n>['t']) {
    return [
        {
            label: t('services.name'),
            name: 'name',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('services.ar_main_title'),
            name: 'ar_main_title',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('services.en_main_title'),
            name: 'en_main_title',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('services.ar_sub_title'),
            name: 'ar_sub_title',
            type:'text',
            icon:'information-circle',
        },
        {
            label: t('services.en_sub_title'),
            name: 'en_sub_title',
            type:'text',
            icon:'information-circle',
        }
    ];
}

export function createStyleInputs(t: ReturnType<typeof useI18n>['t']) {
    return {
        main_titles:[
            {
                label: t('services.style.color'),
                name: 'color',
                type:'color',
                icon:'information-circle',
            },
            {
                label: t('services.style.font_size'),
                name: 'font-size',
                type:'select',
                options:[12,14,16,18,20,22,24,26,28,30,32,34,36,38,40].map((e)=> e+'px')
            },
            {
                label: t('services.style.margin'),
                name: 'margin',
                type:'select',
                options:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40].map((e)=> e+'px')
            },
        ],
        main_inputs:[
            {
                label: t('services.style.color'),
                name: 'color',
                type:'color',
                icon:'information-circle',
            },
            {
                label: t('services.style.font_size'),
                name: 'font-size',
                type:'select',
                options:[12,14,16,18,20,22,24,26,28,30,32,34,36,38,40].map((e)=> e+'px')
            },
            {
                label: t('services.style.font_family'),
                name: 'font-family',
                type:'select',
                options:['arial','cairo','cursive','monospace']
            },
            {
                label: t('services.style.width'),
                name: 'width',
                type:'number',
                icon:'information-circle',
            },
            {
                label: t('services.style.margin'),
                name: 'margin',
                type:'select',
                options:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40].map((e)=> e+'px')
            },
        ],
        submit:[
            {
                label: t('services.style.background_color'),
                name: 'background-color',
                type:'color',
                icon:'information-circle',
            },
            {
                label: t('services.style.width'),
                name: 'width',
                type:'number',
                icon:'information-circle',
            },
            /*{
                label: t('services.style.margin'),
                name: 'margin',
                type:'select',
                options:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40].map((e)=> e+'px')
            },*/
        ]

    };
}

