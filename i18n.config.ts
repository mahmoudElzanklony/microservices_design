export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        ar:{
            general:{
              save:'حفظ',
              save_txt:'حفظ البيانات',
              edit:'تعديل',
              add_item:'اضافة عنصر',
              delete:'مسح',
              accept:'موافق',
              cancel:'الغاء',
            },
            search:{
              name:'ابحث بالاسم'
            },
            general_inputs:{
                name:'الاسم',
                created_at:'التاريخ',
                email:'البريد الالكتروني',
                password:'كلمة المرور',
                username:'اسم المستخدم',
                phone:'رقم الهاتف',
            },
            navbar:{
                home:'الرئيسية',
                services:'الخدمات',
                attributes:'الخصائص',
                sections:'الاقسام',
                client_reactions:'تفاعل العملاء',
                hi:'مرحبا'
            },
            delete:{
                text:'هل أنت متأكد من عملية المسح',
                note:'تذكر في حالة الموافقه علي المسح فلن تستطيع الرجوع في العملية'
            },
            login:{
              submit:'تسجيل دخول',
              logout:'تسجيل خروج',
              dont_have_acc:'لا تمتلك حساب',
              register_here:'تسجيل مستخدم جديد من هنا',
            },
            register:{
                submit:'تسجيل مستخدم جديد',
                have_acc:'هل تمتلك بالفعل حساب ؟',
                login_here:'تسجيل الدخول من هنا',
            },
            services:{
              main_title:'العنوان الرئيسي' ,
              sub_title:'العنوان الفرعي' ,
              ar_main_title:'العنوان الرئيسي بالعربي' ,
              en_main_title:'العنوان الرئيسي بالانجليزي' ,
              ar_sub_title:'العنوان الفرعي بالعربي' ,
              en_sub_title:'العنوان الفرعي بالانجليزي' ,
            },
            welcome:'مرحبا',
        },
        en: {
            general:{
                save:'Save',
                save_txt:'Save data',
                edit:'Edit',
                add_item:'Add item',
                delete:'Delete',
                accept:'Accept',
                cancel:'Cancel'
            },
            general_inputs:{
                name:'Name',
                created_at:'Date',
                email:'Email',
                password:'Password',
                username:'Username',
                phone:'Phone',
            },
            search:{
                name:'Search by name'
            },
            delete:{
                text:'Are you sure from delete process',
                note:'Note when you agree you cant go back or cancel process'
            },
            navbar:{
                home:'Home',
                services:'Services',
                attributes:'Attributes',
                sections:'Sections',
                client_reactions:'Client Reactions',
                hi:'Hi'
            },
            login:{
                submit:'Login',
                logout:'Logout',
                dont_have_acc:'Don\'t have an account ?',
                register_here:'register from here',
            },
            register:{
                submit:'Register',
                have_acc:'Do you already have an account ?',
                login_here:'login from here',
            },

            services:{
                main_title:'Main title' ,
                sub_title:'Sub title' ,
                ar_main_title:'Main title in arabic' ,
                en_main_title:'Main title in english' ,
                ar_sub_title:'Sub title in arabic' ,
                en_sub_title:'Sub title in english' ,
            },
            welcome: 'Welcome'
        },
        fr: {
            welcome: 'Bienvenue'
        }
    }
}))