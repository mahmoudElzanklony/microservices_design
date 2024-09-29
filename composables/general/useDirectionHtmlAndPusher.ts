// mixins/localeAndPusherMixin.js
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNuxtApp } from '#app'

export default function useLocaleAndPusherMixin() {
    const { locale } = useI18n()
    const { $pusher, $Toast, $auth } = useNuxtApp()

    // Function to update the HTML 'dir' attribute based on the current locale
    const setHtmlDirection = (currentLocale) => {
        const isRtl = ['ar', 'he', 'fa'].includes(currentLocale) // Adjust for RTL languages
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
    }

    // Watch for changes in the locale and set the direction accordingly
    watch(locale, (newLocale) => {
        setHtmlDirection(newLocale)
    })

    // Setup pusher and handle message events
    const setupPusher = () => {
        const channel = $pusher.subscribe('messages')

        // Bind to the 'message.sent' event
        channel.bind('message.sent', (data) => {
            console.log(data?.message)
            let output = JSON.parse(data?.message)
            console.log(output)
            if (output && output.message) {
                if (output.user_id) {
                    if (output.user_id === $auth?.id) {
                        $Toast.success(output.message)
                    }
                }
            }
        })
    }

    onMounted(() => {
        setHtmlDirection(locale.value)
        setupPusher()
    })
}
