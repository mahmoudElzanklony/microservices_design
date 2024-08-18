export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        ar:{
            general_inputs:{
                email:'البريد الالكتروني',
                password:'كلمة المرور',
            },
            login:{
              submit:'تسجيل دخول'
            },
            navbar:{
              home:'الرئيسية',
              services:'الخدمات',
              client_reactions:'تفاعل العملاء',
            },
            welcome:'مرحبا',
        },
        en: {
            general_inputs:{
                email:'Email',
                password:'Password',
            },
            login:{
                submit:'Login'
            },
            navbar:{
                home:'Home',
                services:'Services',
                client_reactions:'Client Reactions',
            },
            welcome: 'Welcome'
        },
        fr: {
            welcome: 'Bienvenue'
        }
    }
}))