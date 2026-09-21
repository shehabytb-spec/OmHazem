/* ==========================================================================
   قاعدة بيانات محتوى الموقع (Site Content Database)
   ========================================================================== */

const siteData = {
    // معلومات التواصل العامة
    contact: {
        whatsappNumber: "201004675704",
        whatsappMessage: "السلام عليكمُ، أرغب في حجز حصة تجريبية مجانية عبر موقع تحفيظ أونلاين",
        telegramLink: "https://t.me/+201004675704"
    },

    // الهيدر والقائمة العلوية
    header: {
        logoTitle: { ar: "تحفيظ أونلاين", en: "Tahfeez Online" },
        logoSub: { ar: "منصة تعليم القرآن الكريم والتجويد", en: "Online Quran & Tajweed Academy" },
        navLinks: [
            { id: "about", text: { ar: "عن المعلمة", en: "About" } },
            { id: "why-us", text: { ar: "مميزات المنصة", en: "Why Us" } },
            { id: "services", text: { ar: "البرامج", en: "Programs" } },
            { id: "packages", text: { ar: "باقات الحصص", en: "Packages" } },
            { id: "steps", text: { ar: "خطوات البدء", en: "How to Start" } },
            { id: "playlist", text: { ar: "نماذج التلاوات", en: "Recitations" } },
            { id: "testimonials", text: { ar: "آراء الطالبات", en: "Reviews" } },
            { id: "faq", text: { ar: "الأسئلة الشائعة", en: "FAQ" } }
        ]
    },

    // قسم الواجهة (Hero Section)
    hero: {
        badge: { ar: "✨ جلسات فردية خاصة عبر جوجل ميت والتليجرام", en: "✨ 1-on-1 Private Live Classes" },
        title: { 
            ar: "تعلم القرآن الكريم في منصة <span>تحفيظ أونلاين</span>", 
            en: "Learn Quran Online with <span>Tahfeez Online</span>" 
        },
        description: { 
            ar: "أكاديمية متخصصة للنساء والأطفال لتعليم التلاوة الصحيحة، وتدريس أحكام التجويد، وتحفيظ كتاب الله تعالى على يد محفظة أزهرية.", 
            en: "A specialized academy for women and children to teach correct recitation, Tajweed rules, and the memorization of the Holy Quran under the guidance of a female Al-Azhar certified tutor." 
        },
        ctaButton: { ar: "احجز حصة تجريبية مجانية", en: "Book Free Trial Class" },
        
        // بطاقة المعلمة (Bio Card)
        bioCard: {
            name: { ar: "الشيخة / معلّمة التلاوة", en: "Certified Quran Tutor" },
            subtitle: { ar: "معلمة القرآن والتجويد بالمنصة", en: "Quran & Tajweed Instructor" },
            features: [
                { icon: "fa-certificate", text: { ar: "حاصلة على ليسانس الدراسات الإسلامية والعربية شعبة أصول الدين", en: "Certified Ijazah with Connected Chain of Narration" } },
                { icon: "fa-clock", text: { ar: "خبرة أكثر من 20 سنة في التدريس المباشر والتحفيظ أونلاين", en: "7+ Years of Online Teaching Experience" } },
                { icon: "fa-child-reaching", text: { ar: "متخصصة في التعامل مع الأطفال والنساء فقط", en: "Specialized for Women & Children" } }
            ]
        }
    },

    // قسم مميزات المنصة (Why Us)
    whyUs: {
        title: { ar: "لماذا تختار منصة تحفيظ أونلاين؟", en: "Why Choose Tahfeez Online?" },
        subtitle: { ar: "نوفر لك بيئة تعليمية إسلامية متكاملة تجمع بين الإتقان والسهولة", en: "We provide an integrated Islamic learning environment combining accuracy and ease" },
        cards: [
            {
                icon: "fa-user-shield",
                title: { ar: "خصوصية وحرية كاملة", en: "100% Privacy" },
                desc: { ar: "حلقات خاصة ومباشرة فردية (1-on-1) مخصصة للنساء والأطفال فقط مع معلمات متقنات.", en: "Private 1-on-1 sessions dedicated to women and children with qualified female tutors." }
            },
            {
                icon: "fa-calendar-check",
                title: { ar: "مرونة عالية في المواعيد", en: "Flexible Schedule" },
                desc: { ar: "نظام أوقات مرن يتناسب مع كافة التوقيتات والدول حول العالم لتحديد المواعيد المناسبة لك.", en: "Flexible timing structured to accommodate students from different time zones worldwide." }
            },
            {
                icon: "fa-chart-line",
                title: { ar: "متابعة وتقارير دورية", en: "Progress Tracking" },
                desc: { ar: "خطة دراسية لكل طالب مع متابعة مستمرة لمستوى الحفظ، المراجعة، والتجويد بانتظام.", en: "Personalized study plan with continuous reports tracking memorization and Tajweed progress." }
            }
        ]
    },

    // قسم البرامج التعليمية (Services - مع تعديل البرنامج الأخير لدورة تصحيح التلاوة وتجويد الحروف)
    services: {
        title: { ar: "برامجنا التعليمية", en: "Our Educational Programs" },
        subtitle: { ar: "خطط دراسية مخصصة تناسب كافة المستويات والأعمار", en: "Customized study plans designed for all ages and levels" },
        cards: [
            {
                icon: "fa-baby",
                title: { ar: "تحفيظ الأطفال والناشئة", en: "Kids Quran Memorization" },
                desc: { ar: "أسلوب شيق ومبسط لترسيخ الحفظ لدى الأطفال مع تعليم نور البيان والقراءة الصحيحة بالتحفيز والتشجيع.", en: "Fun and interactive methods to help kids memorize Quran with proper pronunciation and Noor Al-Bayan." }
            },
            {
                icon: "fa-female",
                title: { ar: "برنامج النساء والفتيات", en: "Women Quran Program" },
                desc: { ar: "حلقات فردية خاصة للنساء لضبط التلاوة، تصحيح المخارج، وحفظ السور مع شرح أحكام التجويد بطريقة سهلة.", en: "Private 1-on-1 sessions for women focusing on Tajweed rules, memorization, and accurate recitation." }
            },
            {
                icon: "fa-book-open-reader",
                title: { ar: "دورة تصحيح التلاوة وتجويد الحروف", en: "Correct Recitation & Tajweed Rules Course" },
                desc: { ar: "تدريب مكثف على مخارج الحروف وصفاتها، وتصحيح الأخطاء الشائعة في التلاوة، وإتقان أحكام التجويد التطبيقي.", en: "Intensive training on letter articulation, correcting common recitation errors, and mastering applied Tajweed rules." }
            }
        ]
    },

    // قسم باقات الحصص الشهرية (Packages)
    packages: {
        title: { ar: "باقات الحصص الشهرية", en: "Monthly Class Packages" },
        subtitle: { ar: "اختر الباقة المناسبة لك أو لطفلك لاستمرارية حفظ كتاب الله بانتظام", en: "Choose the right package for consistent Quran memorization" },
        items: [
            {
                title: { ar: "الباقة الأساسية", en: "Basic Package" },
                price: { ar: "٤ حصص", en: "4 Classes" },
                priceSub: { ar: "شهرياً (حصة أسبوعياً)", en: "Per Month (1 class/week)" },
                features: [
                    { ar: "مدة الحصة: 30 دقيقة", en: "Class Duration: 30 mins" },
                    { ar: "متابعة فردية خاصة", en: "Private 1-on-1 Session" },
                    { ar: "تقرير شهري للمستوى", en: "Monthly Progress Report" }
                ],
                featured: false
            },
            {
                title: { ar: "الباقة الأكثر طلباً", en: "Popular Package" },
                price: { ar: "٨ حصص", en: "8 Classes" },
                priceSub: { ar: "شهرياً (حصتان أسبوعياً)", en: "Per Month (2 classes/week)" },
                features: [
                    { ar: "مدة الحصة: 45 دقيقة", en: "Class Duration: 45 mins" },
                    { ar: "متابعة فردية خاصة ومكثفة", en: "Intensive 1-on-1 Session" },
                    { ar: "خطة مخصصة للحفظ والمراجعة", en: "Custom Memorization Plan" },
                    { ar: "تقرير دوري أسبوعي", en: "Weekly Progress Report" }
                ],
                badge: { ar: "الأكثر طلباً", en: "Most Popular" },
                featured: true
            },
            {
                title: { ar: "الباقة المكثفة", en: "Intensive Package" },
                price: { ar: "١٢ حصة", en: "12 Classes" },
                priceSub: { ar: "شهرياً (3 حصص أسبوعياً)", en: "Per Month (3 classes/week)" },
                features: [
                    { ar: "مدة الحصة: 45 دقيقة", en: "Class Duration: 45 mins" },
                    { ar: "تثبيت الحفظ وإتقان التجويد", en: "Advanced Tajweed & Retention" },
                    { ar: "أولوية اختيار المواعيد", en: "Priority Schedule Selection" },
                    { ar: "متابعة مباشرة مستمرة", en: "Continuous Direct Support" }
                ],
                featured: false
            }
        ]
    },

    // قسم خطوات البدء (Steps)
    steps: {
        title: { ar: "كيف تبدأ رحلتك معنا؟", en: "How to Start Your Journey?" },
        subtitle: { ar: "خطوات بسيطة وسريعة للانضمام لحلقاتنا القرآنية", en: "Simple and quick steps to join our Quranic classes" },
        items: [
            {
                number: 1,
                title: { ar: "التواصل والتسجيل", en: "Contact Us" },
                desc: { ar: "اضغطي على زر الواتساب وتواصلي معنا لتأكيد الرغبة بالانضمام.", en: "Click the WhatsApp button and contact us to request joining." }
            },
            {
                number: 2,
                title: { ar: "الحصة التجريبية", en: "Free Trial Class" },
                desc: { ar: "حجز موعد لحصة تجريبية مجانية لتقييم المستوى والتعرف على المعلمة.", en: "Book a free trial class to assess level and get introduced to the tutor." }
            },
            {
                number: 3,
                title: { ar: "تحديد الخطة والمواعيد", en: "Set Plan & Timing" },
                desc: { ar: "اختيار أيام المواعيد المناسبة لكِ وصياغة خطة الحفظ المخصصة.", en: "Choose your convenient class days and create a tailored study plan." }
            },
            {
                number: 4,
                title: { ar: "بدء الدراسة والانتظام", en: "Start Learning" },
                desc: { ar: "الانطلاق في رحلة الحفظ والمراجعة عبر تطبيق الزوم أو التليجرام.", en: "Begin your memorization journey live via Zoom or Telegram." }
            }
        ]
    },

    // قسم نماذج التلاوات / الطلاب (3 أعمدة × 3 نماذج = 9 نماذج لأصوات مشايخ مؤقتاً)
    playlist: {
        title: { ar: "نماذج التلاوات الصوتية", en: "Quran Recitation Samples" },
        subtitle: { ar: "نماذج صوتية مختارة لأصوات مشايخ وقراء معتمدة (سيتم إضافة تسجيلات الطالبات قريباً)", en: "Selected sample audio tracks (Student records will be added soon)" },
        columns: [
            {
                header: { ar: "العمود الأول: التلاوات المرتلة", en: "Column 1: Murattal Recitations" },
                tracks: [
                    { id: 1, audioUrl: "https://server8.mp3quran.net/afs/001.mp3" },
                    { id: 2, audioUrl: "https://server7.mp3quran.net/basit/001.mp3" },
                    { id: 3, audioUrl: "https://server13.mp3quran.net/hssri/001.mp3" }
                ]
            },
            {
                header: { ar: "العمود الثاني: التلاوات المجودة", en: "Column 2: Mujawwad Recitations" },
                tracks: [
                    { id: 4, audioUrl: "https://server10.mp3quran.net/minsh/001.mp3" },
                    { id: 5, audioUrl: "https://server11.mp3quran.net/sds/001.mp3" },
                    { id: 6, audioUrl: "https://server9.mp3quran.net/shur/001.mp3" }
                ]
            },
            {
                header: { ar: "العمود الثالث: أصوات خاشعة", en: "Column 3: Emotional Recitations" },
                tracks: [
                    { id: 7, audioUrl: "https://server6.mp3quran.net/maher/001.mp3" },
                    { id: 8, audioUrl: "https://server4.mp3quran.net/yasser/001.mp3" },
                    { id: 9, audioUrl: "https://server12.mp3quran.net/ajm/001.mp3" }
                ]
            }
        ]
    },

    // قسم آراء الطالبات (Testimonials)
    testimonials: {
        title: { ar: "آراء وتجارب الطالبات", en: "Student Testimonials" },
        subtitle: { ar: "ما تقوله طالباتنا وأمهات الأطفال عن تجربتهن معنا", en: "What our students and parents say about learning with us" },
        items: [
            {
                text: { ar: "«ما شاء الله المعلمة صبورة جداً مع أطفالي وطريقتها في الشرح وتحفيز الأطفال جعلتهم يحبون حصة القرآن ينتظرونها بشغف.»", en: "«The tutor is very patient with my kids. Her teaching method makes children look forward to Quran class eagerly.»" },
                author: { ar: "أم عبد الله", en: "Um Abdullah" },
                location: { ar: "ولية أمر - السعودية", en: "Parent - Saudi Arabia" }
            },
            {
                text: { ar: "«كنت أجد صعوبة في ضبط أحكام التجويد ومخارج الحروف، وبفضل الله ثم التوجيه المستمر في الحلقات الفردية تحسن نطقي كثيراً.»", en: "«I struggled with Tajweed rules, but thanks to the targeted individual correction, my pronunciation improved vastly.»" },
                author: { ar: "أستاذة سارة", en: "Sara M." },
                location: { ar: "طالبة بالمنصة - الإمارات", en: "Student - UAE" }
            },
            {
                text: { ar: "«التزام بالوقت، ومرونة عالية، وبيئة هادئة ومريحة جداً أثناء الحصة. جزاكم الله خيراً على هذا المجهود الطيب.»", en: "«Punctual, flexible, and very comfortable learning atmosphere during sessions. May Allah reward you well.»" },
                author: { ar: "مريم إبراهيم", en: "Mariam I." },
                location: { ar: "طالبة مراجعة - مصر", en: "Student - Egypt" }
            }
        ]
    },

    // قسم الأسئلة الشائعة (FAQ)
    faq: {
        title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
        subtitle: { ar: "إجابات على أبرز التساؤلات قبل البدء معنا", en: "Find answers to common questions about our online classes" },
        items: [
            {
                q: { ar: "كيف يتم إجراء الحصص أونلاين؟", en: "How are online classes conducted?" },
                a: { ar: "تتم الحصص عبر تطبيق Zoom أو Telegram بصوت واضح وجلسات فردية خاصة لضمان التركيز والسرية.", en: "Classes are conducted via Zoom or Telegram in private 1-on-1 audio/video sessions ensuring high focus and privacy." }
            },
            {
                q: { ar: "ما هي طرق الدفع المتاحة داخل وخارج مصر؟", en: "What payment methods are supported?" },
                a: { ar: "نوفر طرق دفع متعددة وسهلة: داخل مصر (فودافون كاش / إنستا باي InstaPay)، وخارج مصر (PayPal / تحويل بنكي / Western Union).", en: "Inside Egypt: Vodafone Cash or InstaPay. Internationally: PayPal, Bank Transfer, or Western Union." }
            }
        ]
    },

    // الفوتر (Footer)
    footer: {
        copyright: { ar: "منصة تحفيظ أونلاين. جميع الحقوق محفوظة.", en: "Tahfeez Online Academy. All Rights Reserved." },
        telegramBtn: { ar: "تواصل عبر تليجرام", en: "Telegram Contact" }
    }
};

/* ==========================================================================
   منطق بناء وتحديث الصفحة ديناميكياً (Dynamic Rendering Engine)
   ========================================================================== */

let currentLang = 'ar';

function renderPage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // 1. WhatsApp Links Update
    const waUrl = `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(siteData.contact.whatsappMessage)}`;
    document.querySelectorAll('.js-wa-link').forEach(link => link.href = waUrl);

    // Telegram Links Update
    document.querySelectorAll('.js-tg-link').forEach(link => link.href = siteData.contact.telegramLink);

    // 2. Language Switcher Label
    document.getElementById('langLabel').textContent = lang === 'ar' ? 'English' : 'عربي';

    // 3. Header & Logo
    document.getElementById('logoTitle').textContent = siteData.header.logoTitle[lang];
    document.getElementById('logoSub').textContent = siteData.header.logoSub[lang];
    document.getElementById('bgWatermark').textContent = siteData.header.logoTitle[lang];

    const navContainer = document.getElementById('navLinks');
    navContainer.innerHTML = siteData.header.navLinks.map(link => 
        `<li><a href="#${link.id}">${link.text[lang]}</a></li>`
    ).join('');

    // 4. Hero Section
    document.getElementById('heroBadge').textContent = siteData.hero.badge[lang];
    document.getElementById('heroTitle').innerHTML = siteData.hero.title[lang];
    document.getElementById('heroDesc').textContent = siteData.hero.description[lang];
    document.querySelectorAll('.js-cta-btn-text').forEach(el => el.textContent = siteData.hero.ctaButton[lang]);

    // Hero Bio Card
    document.getElementById('bioName').textContent = siteData.hero.bioCard.name[lang];
    document.getElementById('bioSub').textContent = siteData.hero.bioCard.subtitle[lang];
    document.getElementById('bioFeatures').innerHTML = siteData.hero.bioCard.features.map(feat => 
        `<li><i class="fa-solid ${feat.icon}"></i> <span>${feat.text[lang]}</span></li>`
    ).join('');

    // 5. Why Choose Us Section
    document.getElementById('whyUsTitle').textContent = siteData.whyUs.title[lang];
    document.getElementById('whyUsSub').textContent = siteData.whyUs.subtitle[lang];
    document.getElementById('whyUsGrid').innerHTML = siteData.whyUs.cards.map(card => 
        `<div class="glass-card">
            <div class="card-icon"><i class="fa-solid ${card.icon}"></i></div>
            <h4>${card.title[lang]}</h4>
            <p>${card.desc[lang]}</p>
        </div>`
    ).join('');

    // 6. Services Section
    document.getElementById('servicesTitle').textContent = siteData.services.title[lang];
    document.getElementById('servicesSub').textContent = siteData.services.subtitle[lang];
    document.getElementById('servicesGrid').innerHTML = siteData.services.cards.map(card => 
        `<div class="glass-card">
            <div class="card-icon"><i class="fa-solid ${card.icon}"></i></div>
            <h4>${card.title[lang]}</h4>
            <p>${card.desc[lang]}</p>
        </div>`
    ).join('');

    // 7. Packages Section (باقات الحصص)
    document.getElementById('packagesTitle').textContent = siteData.packages.title[lang];
    document.getElementById('packagesSub').textContent = siteData.packages.subtitle[lang];
    document.getElementById('packagesGrid').innerHTML = siteData.packages.items.map(pkg => 
        `<div class="package-card ${pkg.featured ? 'featured' : ''}">
            ${pkg.badge ? `<div class="package-badge">${pkg.badge[lang]}</div>` : ''}
            <div>
                <h4>${pkg.title[lang]}</h4>
                <div class="package-price">${pkg.price[lang]}<br><span>${pkg.priceSub[lang]}</span></div>
                <ul class="package-features">
                    ${pkg.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f[lang]}</span></li>`).join('')}
                </ul>
            </div>
            <a href="${waUrl}" target="_blank" class="btn-package">${lang === 'ar' ? 'اختر الباقة' : 'Choose Package'}</a>
        </div>`
    ).join('');

    // 8. Steps Section
    document.getElementById('stepsTitle').textContent = siteData.steps.title[lang];
    document.getElementById('stepsSub').textContent = siteData.steps.subtitle[lang];
    document.getElementById('stepsGrid').innerHTML = siteData.steps.items.map(step => 
        `<div class="step-card">
            <div class="step-number">${step.number}</div>
            <h4>${step.title[lang]}</h4>
            <p>${step.desc[lang]}</p>
        </div>`
    ).join('');

    // 9. Recitation / Student Playlist Section (3 أعمدة × 3 تسجيلات)
    document.getElementById('playlistTitle').textContent = siteData.playlist.title[lang];
    document.getElementById('playlistSub').textContent = siteData.playlist.subtitle[lang];
    document.getElementById('playlistColumnsGrid').innerHTML = siteData.playlist.columns.map(col => 
        `<div class="playlist-column">
            <div class="column-header">${col.header[lang]}</div>
            ${col.tracks.map(track => 
                `<div class="audio-track-card-compact">
                    <button class="play-btn-compact" onclick="playTrack(${track.id})">
                        <i class="fa-solid fa-play" id="playIcon${track.id}"></i>
                    </button>
                    <div class="track-progress-compact" onclick="seekTrack(event, ${track.id})">
                        <div class="track-progress-fill-compact" id="progressFill${track.id}"></div>
                    </div>
                    <audio id="audioTrack${track.id}" src="${track.audioUrl}"></audio>
                </div>`
            ).join('')}
        </div>`
    ).join('');

    // 10. Testimonials Section
    document.getElementById('testimonialsTitle').textContent = siteData.testimonials.title[lang];
    document.getElementById('testimonialsSub').textContent = siteData.testimonials.subtitle[lang];
    document.getElementById('testimonialsGrid').innerHTML = siteData.testimonials.items.map(item => 
        `<div class="testimonial-card">
            <div class="testimonial-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-text">${item.text[lang]}</p>
            <div class="testimonial-author">
                <div class="author-info">
                    <h5>${item.author[lang]}</h5>
                    <span>${item.location[lang]}</span>
                </div>
            </div>
        </div>`
    ).join('');

    // 11. FAQ Section
    document.getElementById('faqTitle').textContent = siteData.faq.title[lang];
    document.getElementById('faqSub').textContent = siteData.faq.subtitle[lang];
    document.getElementById('faqAccordion').innerHTML = siteData.faq.items.map(item => 
        `<div class="faq-item">
            <div class="faq-question" onclick="toggleFaq(this)">
                <span>${item.q[lang]}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                ${item.a[lang]}
            </div>
        </div>`
    ).join('');

    // 12. Footer
    document.getElementById('footerCopyright').textContent = siteData.footer.copyright[lang];
    document.getElementById('footerWaText').textContent = `واتساب: ${siteData.contact.whatsappNumber}`;
    document.getElementById('footerTgText').textContent = siteData.footer.telegramBtn[lang];
}

// تبديل اللغة عند الضغط على الزر
function toggleLanguage() {
    renderPage(currentLang === 'ar' ? 'en' : 'ar');
}

/* ==========================================================================
   مشغل الصوتيات وأحداث الواجهة (Audio & UI Interaction Handlers)
   ========================================================================== */

let activeAudio = null;
let activeTrackNum = null;

function playTrack(trackNum) {
    const currentAudio = document.getElementById(`audioTrack${trackNum}`);
    const currentIcon = document.getElementById(`playIcon${trackNum}`);

    if (activeAudio && activeAudio !== currentAudio) {
        activeAudio.pause();
        if (activeTrackNum) {
            document.getElementById(`playIcon${activeTrackNum}`).className = 'fa-solid fa-play';
        }
    }

    if (currentAudio.paused) {
        currentAudio.play();
        currentIcon.className = 'fa-solid fa-pause';
        activeAudio = currentAudio;
        activeTrackNum = trackNum;
    } else {
        currentAudio.pause();
        currentIcon.className = 'fa-solid fa-play';
        activeAudio = null;
        activeTrackNum = null;
    }

    currentAudio.ontimeupdate = () => {
        const fill = document.getElementById(`progressFill${trackNum}`);
        if(fill && currentAudio.duration) {
            const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
            fill.style.width = `${percent}%`;
        }
    };

    currentAudio.onended = () => {
        currentIcon.className = 'fa-solid fa-play';
        document.getElementById(`progressFill${trackNum}`).style.width = '0%';
        activeAudio = null;
        activeTrackNum = null;
    };
}

function seekTrack(e, trackNum) {
    const trackAudio = document.getElementById(`audioTrack${trackNum}`);
    const container = e.currentTarget;
    const clickPos = e.clientX - container.getBoundingClientRect().left;
    const containerWidth = container.offsetWidth;
    if (trackAudio.duration) {
        trackAudio.currentTime = (clickPos / containerWidth) * trackAudio.duration;
    }
}

function toggleFaq(element) {
    element.parentElement.classList.toggle('active');
}

// التأثيرات عند التمرير (Scroll Header Effect)
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// بدء العرض فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderPage('ar');
});
