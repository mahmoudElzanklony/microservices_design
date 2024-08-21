

export default function (row , onDelete) {
    const { t } = useI18n();

    return [
        [{
            label: t('general.edit'),
            icon: 'i-heroicons-pencil-square-20-solid',
            click: () => console.log('Edit', row.id)
        }], [{
            label: t('general.delete'),
            icon: 'i-heroicons-trash-20-solid',
            click: () =>onDelete(row.id)
        }]
    ]
}