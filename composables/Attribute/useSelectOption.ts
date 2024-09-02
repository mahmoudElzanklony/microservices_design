export default function create_dynamic_input (dynamic_inputs,inputs,edited_row , name = ''){
    for(let i = 0; i < inputs?.length; i++){
        if(inputs[i]?.basedOnAttributeValue){
            if(name == '') {
                dynamic_inputs[inputs[i]?.basedOnAttributeValue] = []
                let res = {};
                let data_comming_api = edited_row[inputs[i]?.basedOnAttributeApi];
                if(data_comming_api?.length > 0){
                    for(let o of data_comming_api){
                        res = {};
                        for (let item of inputs[i]['group']) {
                            res[item?.name.replace('[]', '')] = o[item?.name.replace('[]', '')]
                        }
                        dynamic_inputs[inputs[i]?.basedOnAttributeValue].push(res)
                    }
                }else{
                    for (let item of inputs[i]['group']) {
                        res[item?.name.replace('[]', '')] = ''
                    }
                    dynamic_inputs[inputs[i]?.basedOnAttributeValue].push(res)
                }

            }else{
                let last_one = dynamic_inputs[name][0];
                let r = {};
                for(let j = 0; j < Object.keys(last_one).length; j++){
                    r[Object.keys(last_one)[j]] = '';
                }
                dynamic_inputs[name].push(r);
                break;
            }
        }
    }
}