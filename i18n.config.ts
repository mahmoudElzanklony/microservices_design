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
              send:'ارسال',
              save_txt:'حفظ البيانات',
              edit:'تعديل',
              add_item:'اضافة عنصر',
              delete:'مسح',
              accept:'موافق',
              cancel:'الغاء',
              add_sec:'اضافة قسم جديد',
              add_attr:'اضافة حقل ادخال',
              start_date:'بدايه الفتره الزمنية',
              end_date:'نهاية الفتره الزمنية',
              no_data:'لا يوجد بيانات',
              main_info:'المعلومات الاساسية',
              total:'الأجمالي',
              press_here:'اضغط هنا',
              app_name:'MicroServices',
              dashboard:'لوحه التحكم',
              view:'عرض',
              reply:'رد',
              markAsEnd:'انهاء المحادثة'
            },
            search:{
              name:'ابحث بالاسم',
              by:'أبحث عن طريق ',
              get_started:'أبدا تجربتك الان',

            },
            controls:{
                view:'رؤيه البيانات',
                reply:'الرد علي العميل',
                markAsEnd:'انهاء المحادثه'
            },
            home:{
                build_your_form:'قم ببناء اي فورم تريدها',
                using:'عن طريق',
                get_started:'أبدا الان',
                header:{
                    title:'يمكنك الآن التفاعل مع عملائك بسهولة عن طريق إدخال منشئ النماذج الخاص بك',
                    complete_title:' في مواقع الويب الخاصة بك واحصل على إجابات العملاء'
                },
                about_us:{
                    title:'ماذا تعرف عنا',
                    idea:'مايكرو سيرفس هي فكره لتوفير الوقت',
                    info:'نحن نحاول بتوفير الوقت لدي عملائنا ببناء نماذج فورم لوضعها في مواقعهم الخاصه لسهوله تفاعل المستخدمين و ملئها بكل سرعه كما نتيح خاصيه معرفه رابط الموقع الذي تم من خلاله ارسال النموذج و موقع المستخدم علي الخريطه و مميزات اخري ',
                },
                features:[
                    {
                        icon:'i-heroicons-square-3-stack-3d',
                        name:'بناء عدد لا نهائي من النماذج',
                        content:'يمكنك إنشاء نماذج تحتوي على العديد من المدخلات باستخدام أي نوع من المدخلات تفضله',
                    },
                    {
                        icon:'i-heroicons-clock',
                        name:'الاشعارات تأتي في الوقت الحقيقي',
                        content:'بمجرد حدوث أي إرسال جديد إلى النموذج الخاص بك، ستتلقى إشعارًا وستشاهد إجابات النموذج',
                    },
                    {
                        icon:'i-heroicons-map-pin',
                        name:'تتبع موقع المستخدم',
                        content:'بمجرد حدوث أي إرسال جديد إلى النموذج الخاص بك، يمكنك معرفة موقع المستخدم على الخريطة الصغيرة',
                    },
                    {
                        icon:'i-heroicons-share',
                        name:'نموذج المشاركة المتعددة',
                        content:'يمكنك مشاركة نموذج واحد مع العديد من المواقع ويمكنك تصفية عناوين الراوبط للمواقع من نظامنا',
                    }
                ],
                need_help:'تحتاج الي مساعدة',
                statistics:{
                    title:'احصائيات سريعه',
                    content:[
                        {
                            icon:'heroicons-members',
                            name:'عملاء سعداء',
                            number:'+9999',
                        },
                        {
                            icon:'heroicons-rectangle-stack',
                            name:'نماذج الخدمات',
                            number:'+2000',
                        },
                        {
                            icon:'heroicons-face-smile',
                            name:'اجابات النماذج',
                            number:'+9000',
                        },
                        {
                            icon:'heroicons-phone',
                            name:'دعم فني',
                            number:'24/7',
                        },

                    ]
                },
                profit:{
                    title:'ما الذي ستأخذه من استخدامك لمايكرو سيرفيس',
                    data:[
                        {content:'توفير الوقت عن طريق بناء نماذج في ثواني معدوده'},
                        {content:'سهوله التفاعل مع عملائك'},
                        {content:'صناعه التقارير بكل سهولة مع امكانية فلتره البيانات'},
                        {content:'معرفة مكان عميلك علي الخريطة'},
                    ]
                }

            },
            general_inputs:{
                name:'الاسم',
                question:'السؤال',
                answer:'الاجابة',
                created_at:'التاريخ',
                published_at:'تم النشر منذ',
                email:'البريد الالكتروني',
                password:'كلمة المرور',
                username:'اسم المستخدم',
                phone:'رقم الهاتف',
                ar_name:'الاسم بالعربي',
                en_name:'الاسم بالانجليزي',

            },
            navbar:{
                home:'الرئيسية',
                services:'النماذج',
                attributes:'الخصائص',
                sections:'الاقسام',
                client_reactions:'ردود العملاء',
                statistics:'الأحصائيات',
                notifications:'الاشعارات',
                members:'الأعضاء',
                hi:'مرحبا'
            },
            delete:{
                text:'هل أنت متأكد من عملية المسح',
                note:'تذكر في حالة الموافقه علي المسح فلن تستطيع الرجوع في العملية'
            },
            notifications:{
                name:'الاشعارات',
                service_client_submit:'ارسال بيانات نموذج الخدمة',
            },
            login:{
              submit:'تسجيل دخول',
              logout:'تسجيل خروج',
              dont_have_acc:'لا تمتلك حساب',
              register_here:'تسجيل مستخدم جديد من هنا',
              forget_password:'نسيت كلمة المرور',
              confirmed_password:'تأكيد كلمة المرور'
            },
            register:{
                submit:'تسجيل مستخدم جديد',
                have_acc:'هل تمتلك بالفعل حساب ؟',
                login_here:'تسجيل الدخول من هنا',
            },
            services:{
              service:'النموذج',
              name:'الاسم',
              main_title:'العنوان الرئيسي' ,
              sub_title:'العنوان الفرعي' ,
              ar_main_title:'العنوان الرئيسي بالعربي' ,
              en_main_title:'العنوان الرئيسي بالانجليزي' ,
              ar_sub_title:'العنوان الفرعي بالعربي' ,
              en_sub_title:'العنوان الفرعي بالانجليزي' ,
              attributes_data:'حقول ادخال الخدمه',
              style_service:'تصميم الخدمة',
              insert_iframe:'ضع هذا الكود الخاص بهذه الخدمة في اي موقع خاص بك',
              arabic_service:'الكود الخاص بالخدمة باللغة العربيه',
              english_service:'الكود الخاص بالخدمة باللغة الانجليزي',
              contact:'تواصل',
              in_mail:'ميل سيستم',
                style:{
                main_section:'نموذج ملئ البيانات',
                main_titles:'العنواين الاساسية',
                main_inputs:'حقول الادخال',
                submit:'حقل ارسال البيانات',
                color:'لون الخط',
                margin:'المسافات',
                font_size:'حجم الخط',
                font_family:'نوع الخط',
                width:'المساحة',
                border_width:'حجم الحدود',
                border_style:'نوع الحدود',
                border_color:'لون الحدود',
                border_radius:'انحناء الحدود',
                background_color:'لون الخلفية'
              }
            },
            members:{
                privileges:'الصلاحيات',
                leave_password:'أترك كلمة المرور فارغه في حالة عدم رغبتك في التعديل عليها',
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
                ar_option:'الاختيار بالعربي',
                en_option:'الاختيار بالانجليزي',
                ar_label:'اسم الوسم بالعربي',
                en_label:'اسم الوسم بالانجليزي',
                ar_placeholder:'التوضيح الذي يكتب في حقل الادخال بخط رمادي بالعربي',
                en_placeholder:'التوضيح الذي يكتب في حقل الادخال بخط رمادي بالانجليزي',
                icon:'الايقون',
                icon_txt:'اضغط علي رابط الخاص بالايقونات  https://icones.js.org/collection/heroicons وقم بنقل اسم الايقون بداخل حقل الادخال',
                type:'النوع',
                text:'نص',
                textarea:'نص كبير',
                date:'تاريخ',
                checkbox:'مربع اختيار',
                select:'اختر من متعدد',
                options:'الاختيارات',
                file:'ملف',
            },
            clients:{
              answers_count:'عدد الاجابات',
              location:'الموقع',
              longitude:'خطوط الطول',
              latitude:'خطوط العرض',
              url:'الرابط',
            },
            footer:{
                main_links:'الروابط المهمة',
                policy:'ساسية الخصوصية',
                privacy:'سياسة المستخدم',
                contact:'التواصل',
                terms:'شروط الاستخدام',
            },
            tips:{
                upload:'اقصي حجم للملف المرفوع هو 30 ميجا'
            },
            welcome:'مرحبا',
        },
        en: {
            errors:{
                num_error_input:'value cant less than 0 or exceed 100'
            },
            general:{
                save:'Save',
                send:'Send',
                save_txt:'Save data',
                edit:'Edit',
                add_sec:'Add new section',
                add_attr:'Add new attribute',
                add_item:'Add item',
                delete:'Delete',
                accept:'Accept',
                cancel:'Cancel',
                start_date:'Start date',
                end_date:'End date',
                no_data:'No data',
                main_info:'General info',
                total:'Total',
                press_here:'Press here',
                app_name:'MicroServices',
                dashboard:'Dashboard',
                view:'View',
                reply:'Reply',
                markAsEnd:'Mark as end'
            },
            general_inputs:{
                question:'Question',
                answer:'Answer',
                name:'Name',
                created_at:'Date',
                published_at:'Published at',
                email:'Email',
                password:'Password',
                username:'Username',
                phone:'Phone',
                ar_name:'Name in arabic',
                en_name:'Name in english',
            },
            controls:{
              view:'View',
              reply:'Reply',
              markAsEnd:'Mark As End'
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
                services:'Forms',
                attributes:'Attributes',
                sections:'Sections',
                client_reactions:'Client Answers',
                statistics:'Statistics',
                notifications:'Notifications',
                members:'Members',
                hi:'Hi'
            },
            home:{
                build_your_form:'Build your personal form',
                using:'using',
                get_started:'Get started',
                header:{
                    title:'You can now interact with your clients easily by inserting your form builder',
                    complete_title:' at your websites and get clients answers'
                },
                about_us:{
                    title:'About us',
                    idea:'Microservices is an idea to save time',
                    info:'We try to save our clients time by building forms to place them on their own websites to facilitate user interaction and fill them out quickly. We also provide the feature of knowing the link to the website through which the form was sent and the user’s location on the map and other features.',
                },
                features:[
                    {
                        icon:'i-heroicons-square-3-stack-3d',
                        name:'Build unlimited forms',
                        content:'You can build forms with many inputs with any type of input you prefer',
                    },
                    {
                        icon:'i-heroicons-clock',
                        name:'Real time notifications',
                        content:'Once any new submit to your form happen you will get notification and you see form answers',
                    },
                    {
                        icon:'i-heroicons-map-pin',
                        name:'Tracking user location',
                        content:'Once any new submit to your form happen you can know location of user at small map',
                    },
                    {
                        icon:'i-heroicons-share',
                        name:'multi sharing form',
                        content:'you can share one form with many websites and you can filter websites url from our system',
                    }
                ],
                statistics:{
                    title:'Quick statistics',
                    content:[
                        {
                            icon:'heroicons-members',
                            name:'Happy clients',
                            number:'+9999',
                        },
                        {
                            icon:'heroicons-rectangle-stack',
                            name:'Services forms',
                            number:'+2000',
                        },
                        {
                            icon:'heroicons-face-smile',
                            name:'Form answers',
                            number:'+9000',
                        },
                        {
                            icon:'heroicons-phone',
                            name:'Support',
                            number:'24/7',
                        },

                    ]
                },
                need_help:'Need help',
                profit:{
                    title:'What you will gain from microservices',
                    data:[
                        {content:'Save time to build dynamic forms'},
                        {content:'Easy to interact with your clients'},
                        {content:'make reports easily with ability to filter data'},
                        {content:'know location of each your client'},
                    ]
                }
            },
            notifications:{
                name:'Notifications',
                service_client_submit:'Client form submit',
            },
            login:{
                submit:'Login',
                logout:'Logout',
                dont_have_acc:'Don\'t have an account ?',
                register_here:'register from here',
                forget_password:'Forget password',
                confirmed_password:'Password confirmation'
            },
            register:{
                submit:'Register',
                have_acc:'Do you already have an account ?',
                login_here:'login from here',
            },
            members:{
              privileges:'Privileges',
              leave_password:'Leave password empty in case you dont want to update it',
            },
            services:{
                service:'Forms',
                name:'Name',
                main_title:'Main title' ,
                sub_title:'Sub title' ,
                ar_main_title:'Main title in arabic' ,
                en_main_title:'Main title in english' ,
                ar_sub_title:'Sub title in arabic' ,
                en_sub_title:'Sub title in english' ,
                attributes_data:'Service Attributes Data',
                style_service:'Service style',
                insert_iframe:'put this code at your own website to enable this service',
                arabic_service:'Code for arabic iframe',
                english_service:'Code for english iframe',
                contact:'Contact',
                in_mail:'In mail',
                style:{
                    main_section:'Main form',
                    main_titles:'Main titles',
                    main_inputs:'Main inputs',
                    submit:'Submit Form input',
                    color:'Font color',
                    margin:'Margin',
                    font_size:'Font size',
                    font_family:'Font family',
                    width:'Width',
                    border_width:'Border width',
                    border_style:'Border style',
                    border_color:'Border color',
                    border_radius:'Border curve',
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
                ar_option:'Option in arabic',
                en_option:'Option in english',
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
                icon_txt:'click on  https://icones.js.org/collection/heroicons service and copy the icon name into the field',
            },
            clients:{
                answers_count:'Answers count',
                longitude:'Longitude',
                location:'Location',
                latitude:'Latitude',
                url:'Url',
            },
            footer:{
                main_links:'Main links',
                policy:'Policy',
                privacy:'User privacy',
                contact:'Contact',
                terms:'Terms',

            },
            tips:{
                upload:'max uploaded file is 30M'
            },
            welcome: 'Welcome'
        },
        fr: {
            welcome: 'Bienvenue'
        }
    }
}))