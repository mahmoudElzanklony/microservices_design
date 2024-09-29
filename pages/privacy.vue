<template>

  <div class="content">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <div class="container m-auto">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="mb-5">
              <span class="text-5xl">{{ $t('home.build_your_form') }} </span>
              <br><span class="text-5xl mt-2 inline-block">{{ $t('home.using') }} </span> <span class="text-5xl mt-2 inline-block text-primary">{{ $t('general.app_name') }}</span>
            </h2>
            <p>You can now interact with your clients easily by inserting your form builder<br> at your websites and get clients answers</p>

            <UButton class="mt-2"
                     icon="i-heroicons-paper-airplane"
                     size="lg"
                     color="primary"
                     variant="solid"
                     :label="$t('home.get_started')"
                     :trailing="false"
            />
          </div>
          <img src="/images/header.png">
        </div>
      </div>
      <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g class="wave1">
          <use xlink:href="#wave-path" x="50" y="3"></use>
        </g>
        <g class="wave2">
          <use xlink:href="#wave-path" x="50" y="0"></use>
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9"></use>
        </g>
      </svg>

    </section><!-- /Hero Section -->
    <div class="container m-auto">
      <div v-if="locale == 'en'">
        <h2 class="mb-4 text-3xl fw-bold text-blue-900">Privacy</h2>
        <p class="text-xl mb-2">
          At Microservices , the privacy of our visitors is of utmost importance to us. This Privacy Policy document outlines the types of personal information that is received and collected by Job Definitions and how it is used.<br><br>

          <strong>Information Collection and Use:</strong><br>
          When you visit Job Definitions, we automatically receive and record certain information from your computer and browser, including your IP address, cookie information, and the pages you visit. We use this information to analyze trends, administer the site, track user movements, and gather demographic information for aggregate use. This information is not linked to any personally identifiable information.<br><br>

          <strong>Cookies:</strong><br>
          Job Definitions uses cookies to store information about visitors' preferences, record user-specific information, and customize web page content based on visitors' browser type or other information that the visitor sends via their browser.<br><br>

          <strong>Information Sharing:</strong><br>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.<br><br>

          <strong>Security:</strong><br>
          We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.<br><br>
        </p>
      </div>
      <div v-else>
        <h2 class="mb-4 text-3xl fw-bold text-blue-900">سياسة الخصوصية</h2>
        <p class="text-xl mb-2">
          في ميكرو سيرفيس، نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها والكشف عنها وحمايتها عند زيارتك لموقعنا الإلكتروني واستخدام خدماتنا. من خلال الوصول إلى تعريفات الوظيفة أو استخدامها، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه.<br><br>

          <strong>المعلومات التي نجمعها:</strong><br>
          قد نقوم بجمع معلومات شخصية، مثل اسمك وعنوان بريدك الإلكتروني والتفاصيل الأخرى ذات الصلة عند تسجيل حساب أو إرسال معلومات عبر موقعنا الإلكتروني. نقوم أيضًا بجمع معلومات غير شخصية، مثل عنوان IP الخاص بك وسلوك التصفح، لتحسين خدماتنا وتحسين تجربة المستخدم الخاصة بك.<br><br>

          <strong>استخدام المعلومات:</strong><br>
          نحن نستخدم المعلومات التي تم جمعها لتوفير خدماتنا وتخصيصها، والرد على الاستفسارات والطلبات، وتحسين وظائف موقعنا، والتواصل معك بشأن التحديثات والمعلومات ذات الصلة. يجوز لنا أيضًا استخدام البيانات المجمعة والمجهولة المصدر لأغراض إحصائية وتحليلية.<br><br>

          <strong>مشاركة المعلومات:</strong><br>
          نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. ومع ذلك، قد نشارك معلوماتك مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا وتقديم خدماتنا. يجوز لنا أيضًا الكشف عن معلوماتك عندما يقتضي القانون ذلك أو لحماية حقوقنا أو سلامتنا أو ممتلكاتنا.
          <br><br>

          <strong>أمن البيانات:</strong><br>
          نحن نستخدم إجراءات أمنية متوافقة مع معايير الصناعة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الكشف عنها أو تغييرها أو إتلافها. ومع ذلك، يرجى ملاحظة أنه لا توجد وسيلة نقل عبر الإنترنت أو التخزين الإلكتروني آمنة بنسبة 100%، ولا يمكننا ضمان الأمان المطلق.
          <br><br>
          <strong>روابط الطرف الثالث:</strong><br>
          قد يحتوي موقعنا على روابط لمواقع أو خدمات تابعة لجهات خارجية. نحن لسنا مسؤولين عن ممارسات الخصوصية أو المحتوى الخاص بهذه الأطراف الثالثة. نحن نشجعك على مراجعة سياسات الخصوصية لتلك المواقع قبل تقديم أي معلومات شخصية.
          <br><br>

          <strong>تحديثات سياسة الخصوصية:</strong><br>
          نحن نحتفظ بالحق في تحديث أو تعديل سياسة الخصوصية هذه في أي وقت. أي تغييرات ستكون سارية فور نشرها على موقعنا. وتقع على عاتقك مسؤولية مراجعة سياسة الخصوصية بشكل دوري لمعرفة أي تحديثات.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>


const localeRoute = useLocaleRoute()

const { locale, setLocale  } = useI18n()


definePageMeta({
  layout: 'main',
})

</script>



