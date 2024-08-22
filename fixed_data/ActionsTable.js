

export default function (row , handlePopUp) {
    const { t } = useI18n();

    return [
        [{
            label: t('general.edit'),
            icon: 'i-heroicons-pencil-square-20-solid',
            click: () => handlePopUp(row , 'edit')
        }], [{
            label: t('general.delete'),
            icon: 'i-heroicons-trash-20-solid',
            click: () =>handlePopUp(row?.id , 'delete')
        }]
    ]
}