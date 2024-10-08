// Define a function that accepts `t` as an argument
export default function createModalBoxColumns(t: ReturnType<typeof useI18n>['t'],privileges:any) {
    let table_columns = [
        {
            label:t('navbar.services'),
            key:'service',
            id:null
         }
    ];
    for(let p of privileges){
        table_columns.push({
            label:t('controls.'+p?.name),
            key:p?.name,
            id:p?.id,
        })
    }


    return  [
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
            icon:'key',
            placeholder:{
                create:'',
                update:t('members.leave_password')
            },
            required:{
                create:true,
                update:false,
            },
        },
        {
            label: t('general_inputs.phone'),
            name: 'phone',
            type:'text',
            icon:'phone',
            required:true,
        },
        {
            label: t('members.privileges'),
            name: 'privileges',
            type:'table',
            helper_store:'privileges',
            options_type:'api',
            store_name:'attributes',
            multiple:true,
            required:true,
            table_columns:table_columns,
            data_loop_start_index:0,
            data_start_loop_body:{ // get data loop so i will loop services data at table body
                name:t('navbar.services'),
                data_type:'api',
                data_store:'services',
                value:{
                    id:'id',
                    value:'name'
                }
            },

        },
    ];
}