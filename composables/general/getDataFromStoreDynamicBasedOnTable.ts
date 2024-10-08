// mixins/localeAndPusherMixin.js

import dynamic_import from "../../mixins/dynamic_import";

export default async function (inputs:any) {
    console.log(inputs)
    console.log(Array.isArray(inputs))
    let data = [];
    if(inputs) {
        // check if in table and you want to get data from api
        let table_obj = inputs.find((e: object) => e?.type == 'table');
        if (table_obj) {
            const table_store = await dynamic_import(table_obj?.data_start_loop_body?.data_store)

            await table_store.get_data_action()
            data = table_store?.data?.data;

        }
    }

    return data

}
