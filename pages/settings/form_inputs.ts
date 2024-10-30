// Define a function that accepts `t` as an argument
export function createFormInputs(t: ReturnType<typeof useI18n>['t']) {

    let users_info = [
        {
            label: t('general_inputs.username'),
            name: 'username',
            type:'text',
            icon:'information-circle',
            required:true,
        },
        {
            label: t('general_inputs.email'),
            name: 'email',
            type:'email',
            icon:'envelope',
            required:true,
        },
        {
            label: t('general_inputs.password'),
            name: 'password',
            type:'password',
            icon:'lock-closed',
            required:false,
            placeholder:t('members.leave_password')
        },
        {
            label: t('general_inputs.phone'),
            name: 'phone',
            type:'number',
            icon:'phone',
            required:true,
        },


    ]
    return {
        users_info,
    }
}

