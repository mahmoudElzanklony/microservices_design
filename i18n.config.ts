export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        ar:{
            errors:{
                num_error_input:'القيمه العددية لا تستطيع ان تتخطي المأئه ولا تقل عن الصفر'
            },
            general:{
              save:'حفظ',
              save_txt:'حفظ البيانات',
              edit:'تعديل',
              add_item:'اضافة عنصر',
              delete:'مسح',
              accept:'موافق',
              cancel:'الغاء',
              add_sec:'اضافة قسم جديد',
              start_date:'بدايه الفتره الزمنية',
              end_date:'نهاية الفتره الزمنية',
              no_data:'لا يوجد بيانات',
              main_info:'المعلومات الاساسية'
            },
            search:{
              name:'ابحث بالاسم',
              by:'أبحث عن طريق ',
            },
            general_inputs:{
                name:'الاسم',
                created_at:'التاريخ',
                email:'البريد الالكتروني',
                password:'كلمة المرور',
                username:'اسم المستخدم',
                phone:'رقم الهاتف',
                ar_name:'الاسم بالعربي',
                en_name:'الاسم بالانجليزي',

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
              name:'الاسم',
              main_title:'العنوان الرئيسي' ,
              sub_title:'العنوان الفرعي' ,
              ar_main_title:'العنوان الرئيسي بالعربي' ,
              en_main_title:'العنوان الرئيسي بالانجليزي' ,
              ar_sub_title:'العنوان الفرعي بالعربي' ,
              en_sub_title:'العنوان الفرعي بالانجليزي' ,
              attributes_data:'حقول ادخال الخدمه',
              style:{
                main_titles:'العنواين الاساسية',
                main_inputs:'حقول الادخال',
                submit:'حقل ارسال البيانات',
                color:'لون الخط',
                margin:'المسافات',
                font_size:'حجم الخط',
                font_family:'نوع الخط',
                width:'المساحة',
                background_color:'لون الخلفية'
              }
            },
            sections:{
              visibility:'امكانية الظهور',
              public:'متاحه للجميع',
              private:'خاصة بي'
            },
            attributes:{
                attribute:'حقل ادخال',
                label:'الوسم',
                placeholder:'التوضيح الذي يكتب في حقل الادخال',
                ar_label:'اسم الوسم بالعربي',
                en_label:'اسم الوسم بالانجليزي',
                ar_placeholder:'التوضيح الذي يكتب في حقل الادخال بخط رمادي بالعربي',
                en_placeholder:'التوضيح الذي يكتب في حقل الادخال بخط رمادي بالانجليزي',
                icon:'الايقون',
                icon_txt:'ضع ايقون مناسبة لحقل الادخال يمكنك اضافه كود الايقون من خلال هذا الرابط https://icones.js.org/collection/heroicons مثال علي الايقون (academic-cap)',
                type:'النوع',
                text:'نص',
                textarea:'نص كبير',
                date:'تاريخ',
                checkbox:'مربع اختيار',
                select:'اختر من متعدد',
                options:'الاختيارات',
                file:'ملف',
            },
            welcome:'مرحبا',
        },
        en: {
            errors:{
                num_error_input:'value cant less than 0 or exceed 100'
            },
            general:{
                save:'Save',
                save_txt:'Save data',
                edit:'Edit',
                add_sec:'Add new section',
                add_item:'Add item',
                delete:'Delete',
                accept:'Accept',
                cancel:'Cancel',
                start_date:'Start date',
                end_date:'End date',
                no_data:'No data',
                main_info:'General info'
            },
            general_inputs:{
                name:'Name',
                created_at:'Date',
                email:'Email',
                password:'Password',
                username:'Username',
                phone:'Phone',
                ar_name:'Name in arabic',
                en_name:'Name in english',

            },
            search:{
                name:'Search by name',
                by:'Search by ',
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
                name:'Name',
                main_title:'Main title' ,
                sub_title:'Sub title' ,
                ar_main_title:'Main title in arabic' ,
                en_main_title:'Main title in english' ,
                ar_sub_title:'Sub title in arabic' ,
                en_sub_title:'Sub title in english' ,
                attributes_data:'Service Attributes Data',
                style:{
                    main_titles:'Main titles',
                    main_inputs:'Main inputs',
                    submit:'Submit Form input',
                    color:'Font color',
                    margin:'Margin',
                    font_size:'Font size',
                    font_family:'Font family',
                    width:'Width',
                    background_color:'Background Color'
                }
            },
            sections:{
                visibility:'Visibility',
                public:'Public',
                private:'Private',
            },
            attributes:{
                attribute:'Attribute',
                label:'Label',
                placeholder:'Placeholder',
                ar_label:'Label in arabic',
                en_label:'Label in english',
                ar_placeholder:'text that put at input to explain input in arabic',
                en_placeholder:'text that put at input to explain input in english',
                icon:'Icon',
                type:'Type',
                text:'Text',
                textarea:'Big text area',
                date:'Date',
                checkbox:'Checkbox',
                select:'Select',
                options:'Options',
                file:'File',
                icon_txt:'put icon for input field you can use this link to put code icon https://icones.js.org/collection/heroicons example for icon code (academic-cap)',
            },
            welcome: 'Welcome'
        },
        fr: {
            welcome: 'Bienvenue'
        }
    }
}))