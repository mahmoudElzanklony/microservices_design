import { MemberPrivilegesStore } from "../../store/MemberPrivileges";
import { useI18n } from 'vue-i18n';
import { useNuxtApp } from '#app';
import { navigateTo } from '#imports';

export default function clients_answers_privileges(row: any) {
    const { t } = useI18n();
    const { $auth } = useNuxtApp();
    const store = MemberPrivilegesStore();

    // Define default actions
    const defaultActions = [
        {
            name: 'reply',
            label: t('general.reply'),
            icon: 'i-heroicons:chat-bubble-left-right',
            click: () => navigateTo(`/clients/chat?id=${row?.id}&service_id=${row?.service_id}`)
        },
        {
            name: 'markAsEnd',
            label: t('general.markAsEnd'),
            icon: 'i-heroicons:check',
            click: () => console.log('end chat', row.id)
        }
    ];

    // Helper function to create actions based on privileges
    const createActions = (privileges: string[], row: any) => {
        const actions = [];

        privileges.forEach(privilege => {
            const action = defaultActions.find((e) => e.name === privilege);
            if (action) {
                actions.push(action);
            }
        });

        return actions;
    };

    // Handle member role
    if ($auth?.role === 'member') {
        const privileges = store?.data?.data?.privileges.map(p => p.name) || [];

        if (privileges.length > 0) {
            return [createActions(privileges, row)];
        }
    }

    // Fallback for other roles (default actions)
    return [defaultActions];
}
