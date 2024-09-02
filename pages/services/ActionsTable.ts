import {navigateTo} from "nuxt/app";

export default function (row , handlePopUp) {
    const { t } = useI18n();
    const localeRoute = useLocaleRoute()
    return [
        [{
            label: t('general.edit'),
            icon: 'i-heroicons-pencil-square-20-solid',
            click: () => handlePopUp(row , 'edit')
        }],[{
            label: t('services.style_service'),
            icon: 'i-heroicons-plus',
            click: () =>navigateTo(localeRoute({ path: '/services/'+row?.id})?.fullPath)
        }], [{
            label: t('general.delete'),
            icon: 'i-heroicons-trash-20-solid',
            click: () =>handlePopUp(row?.id , 'delete')
        }]
    ]
}