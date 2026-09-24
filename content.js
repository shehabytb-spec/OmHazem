// ==========================================
// ملف المحتوى والإعدادات للمنصة (content.js)
// ==========================================

export const siteData = {
    // معلومات المنصة الأساسية
    logoTitle: { ar: "تحفيظ أونلاين", en: "Tahfeez Online" },
    logoSub: { ar: "منصة تعليم القرآن الكريم والتجويد", en: "Quran & Tajweed Learning Platform" },
    
    // روابط التواصل الاجتماعي (أرقام واتساب وتليجرام)
    whatsappNumber: "201004675704",
    telegramLink: "https://t.me/+201004675704",

    // روابط وقوائم التنقل العليا
    navLinks: [
        { id: "about", text: { ar: "الرئيسية", en: "Home" } },
        { id: "why-us", text: { ar: "لماذا نحن", en: "Why Us" } },
        { id: "services", text: { ar: "برامجنا", en: "Programs" } },
        { id: "packages", text: { ar: "الباقات", en: "Packages" } },
        { id: "steps", text: { ar: "كيف تبدأ", en: "How to Start" } },
        { id: "trial-booking", text: { ar: "حجز حصة", en: "Book Trial" } },
        { id: "playlist", text: { ar: "التلاوات", en: "Recitations" } },
        { id: "testimonials", text: { ar: "آراء الطلاب", en: "Reviews" } },
        { id: "faq", text: { ar: "الأسئلة الشائعة", en: "FAQ" } }
    ],

    // قسم الهيرو (الواجهة الرئيسية)
    hero: {
        badge: { ar: "✨ جلسات فردية خاصة عبر جوجل ميت والتليجرام", en: "✨ Private 1-on-1 Sessions via Google Meet & Telegram" },
        title: { 
            ar: "تعلم القرآن الكريم في منصة <span>تحفيظ أونلاين</span>", 
            en: "Learn Quran Online at <span>Tahfeez Online</span>" 
        },
        desc: { 
            ar: "أكاديمية متخصصة للنساء والأطفال لتعليم التلاوة الصحيحة، وتدريس أحكام التجويد، وتحفيظ كتاب الله تعالى على يد محفظة أزهرية.", 
            en: "A specialized academy for women and children to teach correct recitation, Tajweed rules, and Quran memorization under an Al-Azhari female teacher." 
        },
        ctaBtn: { ar: "احجز حصة تجريبية مجانية", en: "Book a Free Trial Session" }
    },

    // بطاقة المعلمة
    bioCard: {
        name: { ar: "الشيخة / معلّمة التلاوة", en: "Sheikh / Recitation Teacher" },
        sub: { ar: "معلمة القرآن والتجويد بالمنصة", en: "Quran & Tajweed Instructor" },
        features: [
            { ar: "حفظ متقن وسند متصل", en: "Certified Memorization & Ijaza" },
            { ar: "خبرة طويلة في تعليم الأطفال والنساء", en: "Extensive Experience Teaching Kids & Women" },
            { ar: "أسلوب تربوي مبسط ومحبب", en: "Gentle & Engaging Teaching Method" }
        ]
    },

    // لماذا تختارنا
    whyUs: {
        title: { ar: "لماذا تختار منصة تحفيظ أونلاين؟", en: "Why Choose Tahfeez Online?" },
        sub: { ar: "نوفر لك بيئة تعليمية إسلامية متكاملة تجمع بين الإتقان والسهولة", en: "We provide an integrated Islamic educational environment combining mastery and ease." },
        items: [
            {
                icon: "fa-solid fa-chalkboard-user",
                title: { ar: "معلمة أزهرية متخصصة", en: "Specialized Al-Azhar Teacher" },
                desc: { ar: "تلقي العلوم الشرعية وتلاوة القرآن على أصولها الصحيحة.", en: "Learning Quran and Tajweed rules according to authentic scholarly standards." }
            },
            {
                icon: "fa-solid fa-clock",
                title: { ar: "مواعيد مرنة تناسب الجميع", en: "Flexible Schedules" },
                desc: { ar: "تحديد الأوقات المناسبة لجدول طفلك أو جدولك اليومي بكل سهولة.", en: "Easily schedule lessons to fit your child's or your daily routine." }
            },
            {
                icon: "fa-solid fa-shield-heart",
                title: { ar: "بيئة آمنة ومخصصة", en: "Safe & Private Environment" },
                desc: { ar: "جلسات فردية خاصة بالكامل لضمان التركيز والخصوصية التامة.", en: "Completely private individual sessions to ensure full focus and privacy." }
            }
        ]
    },

    // البرامج التعليمية
    services: {
        title: { ar: "برامجنا التعليمية", en: "Our Educational Programs" },
        sub: { ar: "خطط دراسية مخصصة تناسب كافة المستويات والأعمار", en: "Customized study plans suitable for all levels and ages." },
        items: [
            {
                icon: "fa-solid fa-child-reaching",
                title: { ar: "تحفيظ الأطفال والناشئة", en: "Children's Memorization" },
                desc: { ar: "تأسيس الأطفال على القراءة الصحيحة وحفظ السور القصيرة بطرق تفاعلية.", en: "Founding children in correct reading and memorizing short Surahs interactively." }
            },
            {
                icon: "fa-solid fa-person-dress",
                title: { ar: "برنامج النساء والفتيات", en: "Women & Girls Program" },
                desc: { ar: "حفظ القرآن الكريم وتصحيح التلاوة بتدبر وخشوع للنساء والفتيات.", en: "Memorizing the Quran and perfecting recitation with reflection for women and girls." }
            },
            {
                icon: "fa-solid fa-book-quran",
                title: { ar: "دورة التجويد وأحكام التلاوة", en: "Tajweed & Recitation Course" },
                desc: { ar: "دراسة أحكام النون السكنية والميم، المدود، ومخارج الحروف بدقة.", en: "Studying Tajweed rules, noon/meem sakinah, elongation, and articulation points." }
            }
        ]
    },

    // باقات الحصص
    packages: {
        title: { ar: "باقات الحصص الشهرية", en: "Monthly Lesson Packages" },
        sub: { ar: "اختر الباقة المناسبة لك أو لطفلك لاستمرارية حفظ كتاب الله بانتظام", en: "Choose the right package for you or your child to maintain regular Quran memorization." },
        items: [
            {
                title: { ar: " الأساسية", en: "Basic " },
                price: { ar: "8 حصص شهرياً ", en: "8 Sessions Monthly" },
                priceSub: { ar: "شهرياً (حصتان أسبوعياً)", en: "(2 sessions/week)" },
                badge: null,
                isFeatured: false,
                features: [
                    { ar: "مدة الحصة: 30 دقيقة", en: "Session Duration: 30 mins" },
                    { ar: "متابعة مستمرة للحفظ والتراجع", en: "Continuous memorization tracking" },
                    { ar: "تقرير دوري لولي الأمر", en: "Periodic progress report" }
                ],
                btnText: { ar: "اختر الباقة", en: "Select Package" }
            },
            {
                title: { ar: "المتقدمة", en: "Advanced" },
                price: { ar: "16 حصة شهرياً ", en: "16 Sessions Monthly" },
                priceSub: { ar: "(4 حصص أسبوعياً)", en: "(4 sessions/week)" },
                badge: { ar: "الأكثر طلباً ⭐", en: "Most Popular ⭐" },
                isFeatured: true,
                features: [
                    { ar: "مدة الحصة: 30 دقيقة", en: "Session Duration: 30 mins" },
                    { ar: "حفظ وتثبيت وتجويد مكثف", en: "Intensive memorization & Tajweed" },
                    { ar: "مرونة كاملة في المواعيد", en: "Full schedule flexibility" },
                    { ar: "حصة تجريبية مجانية", en: "Free trial session included" }
                ],
                btnText: { ar: "اختر الباقة", en: "Select Package" }
            },
            {
                title: { ar: "المكثفة", en: "Intensive Package" },
                price: { ar: "20 حصة شهريا", en: "20 Sessions Monthly" },
                priceSub: { ar: " (5 حصص أسبوعياً)", en: " (5 sessions/week)" },
                badge: { ar: "للحفظ السريع 🚀", en: "Fast Memorization 🚀" },
                isFeatured: false,
                features: [
                    { ar: "مدة الحصة: 30 دقيقة", en: "Session Duration: 30 mins" },
                    { ar: "معدل حفظ عالي وسريع", en: "High and fast memorization rate" },
                    { ar: "مراجعة شاملة للأجزاء السابقة", en: "Comprehensive review of previous parts" }
                ],
                btnText: { ar: "اختر الباقة", en: "Select Package" }
            }
        ]
    },

    // خطوات البدء
    steps: {
        title: { ar: "كيف تبدأ رحلتك معنا؟", en: "How to Start Your Journey?" },
        sub: { ar: "خطوات بسيطة وسريعة للانضمام لحلقاتنا القرآنية", en: "Simple and quick steps to join our Quran circles." },
        items: [
            { num: "01", title: { ar: "تواصل معنا", en: "Contact Us" }, desc: { ar: "اضغط على زر الحجز وواملأ الفراغات وأرسل لنا.", en: "Click the booking button and reach out via WhatsApp or Telegram." } },
            { num: "02", title: { ar: "الحصة التجريبية", en: "Trial Session" }, desc: { ar: "تحديد مستوى الطالب وتجربة طريقة الشرح بمرونة.", en: "Assess the student's level and experience the teaching method." } },
            { num: "03", title: { ar: "اختيار الوقت", en: "Choose Package" }, desc: { ar: "اختيار الوقت المناسب لبمواعد حصصك.", en: "Select the appropriate number of weekly sessions." } },
        ]
    },

    // الأسئلة الشائعة
    faq: {
        title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
        sub: { ar: "إجابات على أبرز التساؤلات قبل البدء معنا", en: "Answers to the most prominent questions before starting with us." },
        items: [
            {
                q: { ar: "ما هي البرامج المستخدمة في الحصص؟", en: "What applications are used for sessions?" },
                a: { ar: "تتم الحصص عبر تطبيق Google Meet أو من خلال مكالمات الفيديو عبر التليجرام بجودة عالية ووضوح تام.", en: "Sessions are conducted via Google Meet or Telegram video calls with high quality and clarity." }
            },
            {
                q: { ar: "هل الحصص فردية أم في مجموعات؟", en: "Are sessions individual or in groups?" },
                a: { ar: "جميع الحصص فردية خاصة تماماً (معلمة واحدة مع طالب واحد أو طفل واحد) لضمان التركيز الكامل وسرعة الحفظ.", en: "All sessions are completely private and individual (one teacher with one student/child) to ensure full focus." }
            },
            {
                q: { ar: "هل توجد حصة تجريبية مجانية؟", en: "Is there a free trial session?" },
                a: { ar: "نعم، نقدم حصة تجريبية مجانية لتقييم مستوى الطالب والتعرف على المعلمة قبل الاشتراك في أي باقة.", en: "Yes, we offer a free trial session to evaluate the student's level and meet the teacher before subscribing." }
            }
        ]
    },

    // نماذج التلاوات
    playlist: {
        title: { ar: "نماذج التلاوات الصوتية", en: "Audio Recitation Samples" },
        sub: { ar: "نماذج تلاوة صوتية من طلابنا", en: "Audio recitation samples from our students" },
        columns: [
            {
                title: { ar: "تلاوات الأطفال", en: "Kids Recitations" },
                tracks: [
                    { title: { ar: "سورة الفاتحة - طفل 7 سنوات", en: "Surah Al-Fatihah - 7yo" }, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
                    { title: { ar: "سورة الإخلاص - طفلة 8 سنوات", en: "Surah Al-Ikhlas - 8yo" }, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
                ]
            },
            {
                title: { ar: "تلاوات النساء", en: "Women Recitations" },
                tracks: [
                    { title: { ar: "سورة الملك - نموذج تلاوة", en: "Surah Al-Mulk - Sample" }, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
                    { title: { ar: "سورة يس - تطبيق أحكام التجويد", en: "Surah Yasin - Tajweed" }, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
                ]
            },
            {
                title: { ar: "تطبيق التجويد", en: "Tajweed Practice" },
                tracks: [
                    { title: { ar: "أحكام النون السكنية والميم", en: "Noon & Meem Rules" }, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
                    { title: { ar: "مخارج الحروف والصفات", en: "Articulation Points" }, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
                ]
            }
        ]
    }
};

// ==========================================
// منطق تحميل وتطبيق النصوص، اللغة، وربط العناصر في الموقع
// ==========================================
let currentLang = 'ar';

export function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    renderContent();
}

function renderContent() {
    // تحديث العناوين الأساسية والشعار
    document.getElementById('logoTitle').textContent = siteData.logoTitle[currentLang];
    document.getElementById('logoSub').textContent = siteData.logoSub[currentLang];
    document.getElementById('bgWatermark').textContent = siteData.logoTitle[currentLang];
    document.getElementById('langLabel').textContent = currentLang === 'ar' ? 'English' : 'عربي';

    // روابط التنقل (Navbar)
    const navLinksEl = document.getElementById('navLinks');
    navLinksEl.innerHTML = siteData.navLinks.map(link => `<li><a href="#${link.id}">${link.text[currentLang]}</a></li>`).join('');

    // قسم الهيرو
    document.getElementById('heroBadge').textContent = siteData.hero.badge[currentLang];
    document.getElementById('heroTitle').innerHTML = siteData.hero.title[currentLang];
    document.getElementById('heroDesc').textContent = siteData.hero.desc[currentLang];
    document.querySelectorAll('.js-cta-btn-text').forEach(el => el.textContent = siteData.hero.ctaBtn[currentLang]);

    // بطاقة المعلمة
    document.getElementById('bioName').textContent = siteData.bioCard.name[currentLang];
    document.getElementById('bioSub').textContent = siteData.bioCard.sub[currentLang];
    const bioFeaturesEl = document.getElementById('bioFeatures');
    bioFeaturesEl.innerHTML = siteData.bioCard.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f[currentLang]}</li>`).join('');

    // لماذا تختارنا
    document.getElementById('whyUsTitle').textContent = siteData.whyUs.title[currentLang];
    document.getElementById('whyUsSub').textContent = siteData.whyUs.sub[currentLang];
    const whyUsGrid = document.getElementById('whyUsGrid');
    whyUsGrid.innerHTML = siteData.whyUs.items.map(item => `
        <div class="glass-card">
            <div class="card-icon"><i class="${item.icon}"></i></div>
            <h4>${item.title[currentLang]}</h4>
            <p>${item.desc[currentLang]}</p>
        </div>
    `).join('');

    // البرامج
    document.getElementById('servicesTitle').textContent = siteData.services.title[currentLang];
    document.getElementById('servicesSub').textContent = siteData.services.sub[currentLang];
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = siteData.services.items.map(item => `
        <div class="glass-card">
            <div class="card-icon"><i class="${item.icon}"></i></div>
            <h4>${item.title[currentLang]}</h4>
            <p>${item.desc[currentLang]}</p>
        </div>
    `).join('');

    // الباقات
    document.getElementById('packagesTitle').textContent = siteData.packages.title[currentLang];
    document.getElementById('packagesSub').textContent = siteData.packages.sub[currentLang];
    const packagesGrid = document.getElementById('packagesGrid');
    packagesGrid.innerHTML = siteData.packages.items.map(pkg => `
        <div class="package-card ${pkg.isFeatured ? 'featured' : ''}">
            ${pkg.badge ? `<div class="package-badge">${pkg.badge[currentLang]}</div>` : ''}
            <div>
                <h4>${pkg.title[currentLang]}</h4>
                <div class="package-price">${pkg.price[currentLang]} <span>/ ${pkg.priceSub[currentLang]}</span></div>
                <ul class="package-features">
                    ${pkg.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f[currentLang]}</li>`).join('')}
                </ul>
            </div>
            <a href="#trial-booking" class="btn-package">${pkg.btnText[currentLang]}</a>
        </div>
    `).join('');

    // خطوات البدء
    document.getElementById('stepsTitle').textContent = siteData.steps.title[currentLang];
    document.getElementById('stepsSub').textContent = siteData.steps.sub[currentLang];
    const stepsGrid = document.getElementById('stepsGrid');
    stepsGrid.innerHTML = siteData.steps.items.map(step => `
        <div class="step-card">
            <div class="step-number">${step.num}</div>
            <h4>${step.title[currentLang]}</h4>
            <p>${step.desc[currentLang]}</p>
        </div>
    `).join('');

    // نماذج التلاوات
    document.getElementById('playlistTitle').textContent = siteData.playlist.title[currentLang];
    document.getElementById('playlistSub').textContent = siteData.playlist.sub[currentLang];
    const playlistColumnsGrid = document.getElementById('playlistColumnsGrid');
    playlistColumnsGrid.innerHTML = siteData.playlist.columns.map((col, colIdx) => `
        <div class="playlist-column">
            <h4 style="color: var(--accent-gold); margin-bottom: 15px; font-family: 'Amiri', serif;">${col.title[currentLang]}</h4>
            ${col.tracks.map((track, trackIdx) => `
                <div class="audio-track-card-compact">
                    <button class="play-btn-compact" id="playBtn-${colIdx}-${trackIdx}" onclick="togglePlayAudio('${colIdx}', '${trackIdx}', '${track.url}')">
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <div style="flex-grow: 1; font-size: 0.85rem;">
                        <div style="font-weight: 500; margin-bottom: 4px;">${track.title[currentLang]}</div>
                        <div class="track-progress-compact" onclick="seekAudio(event, '${colIdx}', '${trackIdx}')">
                            <div class="track-progress-fill-compact" id="progressFill-${colIdx}-${trackIdx}"></div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');

    // الأسئلة الشائعة
    document.getElementById('faqTitle').textContent = siteData.faq.title[currentLang];
    document.getElementById('faqSub').textContent = siteData.faq.sub[currentLang];
    const faqAccordion = document.getElementById('faqAccordion');
    faqAccordion.innerHTML = siteData.faq.items.map(faq => `
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFaq(this)">
                <span>${faq.q[currentLang]}</span>
                <i class="fa-solid fa-chevron-down" style="transition: 0.3s;"></i>
            </div>
            <div class="faq-answer">${faq.a[currentLang]}</div>
        </div>
    `).join('');

    // تفعيل روابط الواتساب والتليجرام العامة
    document.querySelectorAll('.js-wa-link').forEach(el => {
        el.href = `https://wa.me/${siteData.whatsappNumber}`;
    });
    document.querySelectorAll('.js-tg-link').forEach(el => {
        el.href = siteData.telegramLink;
    });
}

// تشغيل مشغل الصوتيات المصغر
let currentAudio = null;
let currentPlayingBtn = null;
let progressInterval = null;

window.togglePlayAudio = function(colIdx, trackIdx, url) {
    const btn = document.getElementById(`playBtn-${colIdx}-${trackIdx}`);
    const fill = document.getElementById(`progressFill-${colIdx}-${trackIdx}`);

    if (currentAudio && currentAudio.src === url) {
        if (currentAudio.paused) {
            currentAudio.play();
            btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            startProgressTracking(currentAudio, fill);
        } else {
            currentAudio.pause();
            btn.innerHTML = '<i class="fa-solid fa-play"></i>';
            clearInterval(progressInterval);
        }
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        if (currentPlayingBtn) currentPlayingBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        clearInterval(progressInterval);
    }

    currentAudio = new Audio(url);
    currentPlayingBtn = btn;
    currentAudio.play();
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';

    startProgressTracking(currentAudio, fill);

    currentAudio.onended = () => {
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        fill.style.width = '0%';
        clearInterval(progressInterval);
    };
};

function startProgressTracking(audioObj, fillEl) {
    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        if (audioObj.duration) {
            const percentage = (audioObj.currentTime / audioObj.duration) * 100;
            fillEl.style.width = `${percentage}%`;
        }
    }, 200);
}

window.seekAudio = function(event, colIdx, trackIdx) {
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = progressBar.clientWidth;
    const percentage = clickX / width;

    if (currentAudio && currentAudio.duration) {
        currentAudio.currentTime = percentage * currentAudio.duration;
    }
};

// تفعيل الأسئلة الشائعة الأكورديون
window.toggleFaq = function(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) {
        item.classList.add('active');
    }
};

window.toggleLanguage = toggleLanguage;

// التشغيل الأولي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
});
