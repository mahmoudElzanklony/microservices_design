
import {ServicePrivilegeStore} from "../../store/servicesPrivileges";

export  default async function clients_answers_privileges (row:any) {
    const { t } = useI18n()
     const items = (row) => [
            [{
                label: t('general.reply'),
                icon:'i-heroicons:chat-bubble-left-right',
                click:() => navigateTo('/clients/chat/' + row?.id)
            }, {
                label: t('general.markAsEnd'),
                icon:'i-heroicons:check',
                click:() => console.log('end chat', row.id)
            }]
        ]
    return items(row)
}
