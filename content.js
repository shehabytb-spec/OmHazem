import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, query } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBUx0fDtd32M_9J3BCFihWsFH13xPsXcT4",
    authDomain: "tahfeez-nline.firebaseapp.com",
    projectId: "tahfeez-nline",
    storageBucket: "tahfeez-nline.firebasestorage.app",
    messagingSenderId: "707326367320",
    appId: "1:707326367320:web:a1eddd1ae995dd62e25c2d",
    measurementId: "G-KRFRM3LP1W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const siteData = {
    contact: {
        whatsappNumber: "201004675704",
        whatsappMessage: "السلام عليكمُ، أرغب في حجز حصة تجريبية مجانية عبر موقع تحفيظ أونلاين",
        telegramLink: "https://t.me/+201004675704"
    },
    header: {
        logoTitle: { ar: "تحفيظ أونلاين", en: "Tahfeez Online" },
        logoSub: { ar: "منصة تعليم القرآن الكريم والتجويد", en: "Online Quran & Tajweed Academy" },
        navLinks: [
            { id: "about", text: { ar: "عن المعلمة", en: "About" } },
            { id: "why-us", text: { ar: "مميزات المنصة", en: "Why Us" } },
            { id: "services", text: { ar: "البرامج", en: "Programs" } },
            { id: "packages", text: { ar: "باقات الحصص", en: "Packages" } },
            { id: "steps", text: { ar: "خطوات البدء", en: "How to Start" } },
            { id: "trial-booking", text: { ar: "حجز حصة تجريبية", en: "Book Trial" } },
            { id: "playlist", text: { ar: "نماذج التلاوات", en: "Recitations" } },
            { id: "testimonials", text: { ar: "آراء وتجارب الحفظ", en: "Reviews" } },
            { id: "faq", text: { ar: "الأسئلة الشائعة", en: "FAQ" } }
        ]
    },
    hero: {
        badge: { ar: "✨ جلسات فردية خاصة عبر جوجل ميت والتليجرام", en: "✨ 1-on-1 Private Live Classes" },
        title: { ar: "تعلم القرآن الكريم في منصة <span>تحفيظ أونلاين</span>", en: "Learn Quran Online with <span>Tahfeez Online</span>" },
        description: { ar: "أكاديمية متخصصة للنساء والأطفال لتعليم التلاوة الصحيحة، وتدريس أحكام التجويد، وتحفيظ كتاب الله تعالى على يد محفظة أزهرية.", en: "A specialized academy for women and children to teach correct recitation and Tajweed." },
        ctaButton: { ar: "احجز حصة تجريبية مجانية", en: "Book Free Trial Class" },
        bioCard: {
            name: { ar: "الشيخة / معلّمة التلاوة", en: "Certified Quran Tutor" },
            subtitle: { ar: "معلمة القرآن والتجويد بالمنصة", en: "Quran & Tajweed Instructor" },
            features: [
                { icon: "fa-certificate", text: { ar: "حاصلة على ليسانس الدراسات الإسلامية والعربية شعبة أصول الدين قسم الحديث وعلومه", en: "Certified Al-Azhar Graduate" } },
                { icon: "fa-clock", text: { ar: "خبرة أكثر من 20 سنوات في التدريس المباشر والتحفيظ أونلاين", en: "7+ Years of Online Teaching Experience" } },
                { icon: "fa-child-reaching", text: { ar: "متخصصة في التعامل مع الأطفال والنساء فقط", en: "Specialized for Women & Children" } }
            ]
        }
    },
    whyUs: {
        title: { ar: "لماذا تختار منصة تحفيظ أونلاين؟", en: "Why Choose Tahfeez Online?" },
        subtitle: { ar: "نوفر لك بيئة تعليمية إسلامية متكاملة تجمع بين الإتقان والسهولة", en: "We provide an integrated Islamic learning environment" },
        cards: [
            { icon: "fa-user-shield", title: { ar: "خصوصية وحرية كاملة", en: "100% Privacy" }, desc: { ar: "حلقات خاصة ومباشرة فردية (1-on-1) مخصصة للنساء والأطفال فقط مع معلمات متقنات.", en: "Private 1-on-1 sessions dedicated to women and children." } },
            { icon: "fa-calendar-check", title: { ar: "مرونة عالية في المواعيد", en: "Flexible Schedule" }, desc: { ar: "نظام أوقات مرن يتناسب مع كافة التوقيتات والدول حول العالم.", en: "Flexible timing structured to accommodate global time zones." } },
            { icon: "fa-chart-line", title: { ar: "متابعة وتقارير دورية", en: "Progress Tracking" }, desc: { ar: "خطة دراسية لكل طالب مع متابعة مستمرة لمستوى الحفظ والمراجعة.", en: "Personalized study plan with continuous reports." } }
        ]
    },
    services: {
        title: { ar: "برامجنا التعليمية", en: "Our Educational Programs" },
        subtitle: { ar: "خطط دراسية مخصصة تناسب كافة المستويات والأعمار", en: "Customized study plans designed for all ages" },
        cards: [
            { icon: "fa-baby", title: { ar: "تحفيظ الأطفال والناشئة", en: "Kids Quran Memorization" }, desc: { ar: "أسلوب شيق ومبسط لترسيخ الحفظ لدى الأطفال مع تعليم نور البيان.", en: "Fun and interactive methods to help kids memorize." } },
            { icon: "fa-female", title: { ar: "برنامج النساء والفتيات", en: "Women Quran Program" }, desc: { ar: "حلقات خاصة فردية للنساء لضبط التلاوة وتصحيح المخارج.", en: "Private sessions for women focusing on Tajweed." } },
            { icon: "fa-book-open-reader", title: { ar: "دورة تصحيح التلاوة وتجويد الحروف", en: "Correct Recitation Course" }, desc: { ar: "تدريب مكثف على مخارج الحروف وصفاتها وأحكام التجويد.", en: "Intensive training on letter articulation and Tajweed." } }
        ]
    },
    packages: {
        title: { ar: "باقات الحصص الشهرية", en: "Monthly Class Packages" },
        subtitle: { ar: "اختر الباقة المناسبة لك أو لطفلك لاستمرارية حفظ كتاب الله بانتظام", en: "Choose the right package for consistent memorization" },
        items: [
            { title: { ar: "الباقة الأساسية", en: "Basic Package" }, price: { ar: "8 حصص", en: "8 Classes" }, priceSub: { ar: "شهرياً (حصتان أسبوعياً)", en: "Per Month (2 classes/week)" }, features: [{ ar: "مدة الحصة: 60 دقيقة", en: "Duration: 60 mins" }, { ar: "متابعة فردية خاصة", en: "Private Session" }], featured: false },
            { title: { ar: "الباقة الأكثر طلباً", en: "Popular Package" }, price: { ar: "16 حصة", en: "16 Classes" }, priceSub: { ar: "4 حصص أسبوعيا", en: "4 sessions per week" }, features: [{ ar: "مدة الحصة: 45 دقيقة", en: "Duration: 45 mins" }, { ar: "متابعة فردية خاصة ومكثفة", en: "Intensive Session" }], badge: { ar: "الأكثر طلباً", en: "Most Popular" }, featured: true },
            { title: { ar: "الباقة المكثفة", en: "Intensive Package" }, price: { ar: "20 حصة", en: "20 Classes" }, priceSub: { ar: "شهرياً (5 حصص أسبوعياً)", en: "Per Month (5 classes/week)" }, features: [{ ar: "مدة الحصة: 60 دقيقة", en: "Duration: 60 mins" }, { ar: "تثبيت الحفظ وإتقان التجويد", en: "Advanced Tajweed" }], featured: false }
        ]
    },
    steps: {
        title: { ar: "كيف تبدأ رحلتك معنا؟", en: "How to Start Your Journey?" },
        subtitle: { ar: "خطوات بسيطة وسريعة للانضمام لحلقاتنا القرآنية", en: "Simple steps to join our classes" },
        items: [
            { number: 1, title: { ar: "التواصل والتسجيل", en: "Contact Us" }, desc: { ar: "اضغطي على زر الواتساب وتواصلي معنا.", en: "Click the WhatsApp button to request joining." } },
            { number: 2, title: { ar: "الحصة التجريبية", en: "Free Trial Class" }, desc: { ar: "حجز موعد لحصة تجريبية مجانية لتقييم المستوى.", en: "Book a free trial class to assess level." } },
            { number: 3, title: { ar: "تحديد الخطة والمواعيد", en: "Set Plan & Timing" }, desc: { ar: "اختيار الأوقات وصياغة خطة الحفظ.", en: "Choose your convenient days and plan." } },
            { number: 4, title: { ar: "بدء الدراسة والانتظام", en: "Start Learning" }, desc: { ar: "الانطلاق في رحلة الحفظ عبر زوم أو تليجرام.", en: "Begin your journey live via Zoom or Telegram." } }
        ]
    },
    playlist: {
        title: { ar: "نماذج التلاوات الصوتية", en: "Quran Recitation Samples" },
        subtitle: { ar: "نماذج تلاوة صوتية من طلابنا", en: "Audio recitation samples from students" },
        columns: [
            { header: { ar: "نماذج تلاوات الطلاب", en: "Student Recitations" }, tracks: [{ id: 1, audioUrl: "https://server8.mp3quran.net/afs/001.mp3" }, { id: 2, audioUrl: "https://server7.mp3quran.net/basit/001.mp3" }, { id: 3, audioUrl: "https://server13.mp3quran.net/hssri/001.mp3" }] },
            { header: { ar: "نماذج تلاوات الطلاب", en: "Student Recitations" }, tracks: [{ id: 4, audioUrl: "https://server10.mp3quran.net/minsh/001.mp3" }, { id: 5, audioUrl: "https://server11.mp3quran.net/sds/001.mp3" }, { id: 6, audioUrl: "https://server9.mp3quran.net/shur/001.mp3" }] },
            { header: { ar: "نماذج تلاوات الطلاب", en: "Student Recitations" }, tracks: [{ id: 7, audioUrl: "https://server6.mp3quran.net/maher/001.mp3" }, { id: 8, audioUrl: "https://server4.mp3quran.net/yasser/001.mp3" }, { id: 9, audioUrl: "https://server12.mp3quran.net/ajm/001.mp3" }] }
        ]
    },
    testimonials: {
        title: { ar: "آراء وتجارب الحفظ", en: "Reviews & Memorization Experiences" },
        subtitle: { ar: "شاركنا تجربتك في حفظ القرآن الكريم واطلع على تعليقات ومراجعات المشتركين", en: "Share your experience and read reviews" }
    },
    faq: {
        title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
        subtitle: { ar: "إجابات على أبرز التساؤلات قبل البدء معنا", en: "Find answers to common questions" },
        items: [
            { q: { ar: "كيف يتم إجراء الحصص أونلاين؟", en: "How are online classes conducted?" }, a: { ar: "تتم الحصص عبر تطبيق Zoom أو Telegram بصوت واضح وجلسات فردية خاصة.", en: "Classes are conducted via Zoom or Telegram in private sessions." } },
            { q: { ar: "ما هي طرق الدفع المتاحة داخل وخارج مصر؟", en: "What payment methods are supported?" }, a: { ar: "داخل مصر (فودافون كاش / إنستا باي)، وخارج مصر (PayPal / تحويل بنكي / Western Union).", en: "Inside Egypt via Vodafone Cash/InstaPay, Internationally via PayPal/Western Union." } }
        ]
    },
    footer: {
        copyright: { ar: "منصة تحفيظ أونلاين. جميع الحقوق محفوظة.", en: "Tahfeez Online Academy. All Rights Reserved." },
        telegramBtn: { ar: "تواصل عبر تليجرام", en: "Telegram Contact" }
    }
};

let currentLang = 'ar';
let loggedInUser = null;

function renderPage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    const waUrl = `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(siteData.contact.whatsappMessage)}`;
    document.querySelectorAll('.js-wa-link').forEach(link => link.href = waUrl);
    document.querySelectorAll('.js-tg-link').forEach(link => link.href = siteData.contact.telegramLink);

    document.getElementById('langLabel').textContent = lang === 'ar' ? 'English' : 'عربي';
    document.getElementById('logoTitle').textContent = siteData.header.logoTitle[lang];
    document.getElementById('logoSub').textContent = siteData.header.logoSub[lang];
    document.getElementById('bgWatermark').textContent = siteData.header.logoTitle[lang];

    document.getElementById('navLinks').innerHTML = siteData.header.navLinks.map(link => 
        `<li><a href="#${link.id}">${link.text[lang]}</a></li>`
    ).join('');

    document.getElementById('heroBadge').textContent = siteData.hero.badge[lang];
    document.getElementById('heroTitle').innerHTML = siteData.hero.title[lang];
    document.getElementById('heroDesc').textContent = siteData.hero.description[lang];
    document.querySelectorAll('.js-cta-btn-text').forEach(el => el.textContent = siteData.hero.ctaButton[lang]);

    document.getElementById('bioName').textContent = siteData.hero.bioCard.name[lang];
    document.getElementById('bioSub').textContent = siteData.hero.bioCard.subtitle[lang];
    document.getElementById('bioFeatures').innerHTML = siteData.hero.bioCard.features.map(feat => 
        `<li><i class="fa-solid ${feat.icon}"></i> <span>${feat.text[lang]}</span></li>`
    ).join('');

    document.getElementById('whyUsTitle').textContent = siteData.whyUs.title[lang];
    document.getElementById('whyUsSub').textContent = siteData.whyUs.subtitle[lang];
    document.getElementById('whyUsGrid').innerHTML = siteData.whyUs.cards.map(card => 
        `<div class="glass-card">
            <div class="card-icon"><i class="fa-solid ${card.icon}"></i></div>
            <h4>${card.title[lang]}</h4>
            <p>${card.desc[lang]}</p>
        </div>`
    ).join('');

    document.getElementById('servicesTitle').textContent = siteData.services.title[lang];
    document.getElementById('servicesSub').textContent = siteData.services.subtitle[lang];
    document.getElementById('servicesGrid').innerHTML = siteData.services.cards.map(card => 
        `<div class="glass-card">
            <div class="card-icon"><i class="fa-solid ${card.icon}"></i></div>
            <h4>${card.title[lang]}</h4>
            <p>${card.desc[lang]}</p>
        </div>`
    ).join('');

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

    document.getElementById('stepsTitle').textContent = siteData.steps.title[lang];
    document.getElementById('stepsSub').textContent = siteData.steps.subtitle[lang];
    document.getElementById('stepsGrid').innerHTML = siteData.steps.items.map(step => 
        `<div class="step-card">
            <div class="step-number">${step.number}</div>
            <h4>${step.title[lang]}</h4>
            <p>${step.desc[lang]}</p>
        </div>`
    ).join('');

    document.getElementById('playlistTitle').textContent = siteData.playlist.title[lang];
    document.getElementById('playlistSub').textContent = siteData.playlist.subtitle[lang];
    document.getElementById('playlistColumnsGrid').innerHTML = siteData.playlist.columns.map(col => 
        `<div class="playlist-column">
            <div class="column-header">${col.header[lang]}</div>
            ${col.tracks.map(track => 
                `<div class="audio-track-card-compact">
                    <button class="play-btn-compact" type="button" onclick="window.playTrack(${track.id})">
                        <i class="fa-solid fa-play" id="playIcon${track.id}"></i>
                    </button>
                    <div class="track-progress-compact" onclick="window.seekTrack(event, ${track.id})">
                        <div class="track-progress-fill-compact" id="progressFill${track.id}"></div>
                    </div>
                    <audio id="audioTrack${track.id}" src="${track.audioUrl}"></audio>
                </div>`
            ).join('')}
        </div>`
    ).join('');

    document.getElementById('testimonialsTitle').textContent = siteData.testimonials.title[lang];
    document.getElementById('testimonialsSub').textContent = siteData.testimonials.subtitle[lang];

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

    document.getElementById('footerCopyright').textContent = siteData.footer.copyright[lang];
    document.getElementById('footerWaText').textContent = `واتساب: ${siteData.contact.whatsappNumber}`;
    document.getElementById('footerTgText').textContent = siteData.footer.telegramBtn[lang];
}

// دالة لمعالجة وإرسال رسالة حجز الحصة التجريبية بالصيغة المطلوبة
window.sendTrialMessage = function(platform) {
    const name = document.getElementById('childName').value.trim();
    const age = document.getElementById('childAge').value.trim();
    const gender = document.getElementById('childGender').value;
    const program = document.getElementById('programName').value;
    const pkg = document.getElementById('packageName').value;

    if (!name || !age) {
        alert(currentLang === 'ar' ? 'الرجاء إدخال اسم وسن الطفل/الطالب' : 'Please fill in the child name and age.');
        document.getElementById('childName').focus();
        return;
    }

    // صياغة النص المطلوب وتعديل الضمائر (ذكر/أنثى)
    const genderText = gender === 'ولد' ? 'طفل ولد' : 'طفلة بنت';
    const message = `السلام عليكم ورحمة الله وبركاته, أريد أن أشترك في منصة تحفيظ أونلاين, لدي ${genderText} عمره ${age} سنوات واسمه ${name} وأريد أن اشترك في برنامج ${program} مع باقة ${pkg} وأريد حجز الحصة التجريبية.`;

    if (platform === 'whatsapp') {
        const url = `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    } else if (platform === 'telegram') {
        // إرسال عبر تليجرام (باستخدام رابط المعرف أو تليجرام مباشرة مع النص)
        const tgBaseUrl = siteData.contact.telegramLink;
        // ملاحظة: تليجرام يدعم ?text= في الروابط المباشرة لبعض التطبيقات أو القنوات المخصصة
        const url = `${tgBaseUrl}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
};

// ==========================================================================
// Firebase Authentication & Firestore Comments Integration Logic
// ==========================================================================

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authContainer = document.getElementById('authContainer');
const commentFormCard = document.getElementById('commentFormCard');
const userInfoDisplay = document.getElementById('userInfoDisplay');
const userCommentForm = document.getElementById('userCommentForm');
const testimonialsGrid = document.getElementById('testimonialsGrid');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        signInWithPopup(auth, googleProvider).catch((error) => {
            console.error("خطأ في تسجيل الدخول:", error);
            alert("حدث خطأ أثناء تسجيل الدخول. تأكد من تفعيل Google Provider في لوحة Firebase Authentication.");
        });
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth);
    });
}

onAuthStateChanged(auth, (user) => {
    loggedInUser = user;
    if (user) {
        if (authContainer) authContainer.style.display = 'none';
        if (commentFormCard) commentFormCard.style.display = 'block';
        if (userInfoDisplay) userInfoDisplay.textContent = `مرحباً بك، ${user.displayName}`;

        if (userCommentForm) {
            userCommentForm.onsubmit = async (e) => {
                e.preventDefault();
                const textVal = document.getElementById('userCommentInput').value.trim();
                const editingId = document.getElementById('editingMessageId').value;
                if(!textVal) return;

                try {
                    if (editingId) {
                        // تعديل التعليق الحالي
                        await updateDoc(doc(db, "comments", editingId), {
                            text: textVal
                        });
                        document.getElementById('editingMessageId').value = '';
                        document.getElementById('submitCommentBtn').textContent = currentLang === 'ar' ? 'نشر التعليق' : 'Post Comment';
                        alert(currentLang === 'ar' ? 'تم تعديل التعليق بنجاح!' : 'Comment updated successfully!');
                    } else {
                        // إضافة تعليق جديد
                        await addDoc(collection(db, "comments"), {
                            name: user.displayName,
                            avatar: user.photoURL,
                            text: textVal,
                            uid: user.uid,
                            createdAt: serverTimestamp()
                        });
                        alert(currentLang === 'ar' ? 'تم نشر تعليقك بنجاح!' : 'Your comment has been posted successfully!');
                    }
                    document.getElementById('userCommentInput').value = '';
                } catch (err) {
                    console.error("خطأ أثناء حفظ التعليق:", err);
                    alert(currentLang === 'ar' ? 'حدث خطأ أثناء تنفيذ الطلب.' : 'Error processing request.');
                }
            };
        }
    } else {
        if (authContainer) authContainer.style.display = 'block';
        if (commentFormCard) commentFormCard.style.display = 'none';
        // إعادة تعيين حقل التعديل في حال تسجيل الخروج
        document.getElementById('editingMessageId').value = '';
        if(document.getElementById('submitCommentBtn')) {
            document.getElementById('submitCommentBtn').textContent = currentLang === 'ar' ? 'نشر التعليق' : 'Post Comment';
        }
    }
});

// دوال التعديل والحذف التي تعمل عند الضغط على الأزرار داخل الموقع
window.editComment = function(id, text) {
    document.getElementById('editingMessageId').value = id;
    document.getElementById('userCommentInput').value = text;
    document.getElementById('submitCommentBtn').textContent = currentLang === 'ar' ? 'تعديل التعليق' : 'Update Comment';
    document.getElementById('commentFormCard').scrollIntoView({ behavior: 'smooth' });
};

window.deleteComment = async function(id) {
    if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من حذف هذا التعليق؟' : 'Are you sure you want to delete this comment?')) {
        try {
            await deleteDoc(doc(db, "comments", id));
            alert(currentLang === 'ar' ? 'تم الحذف بنجاح' : 'Deleted successfully');
        } catch (error) {
            console.error("خطأ أثناء الحذف: ", error);
            alert(currentLang === 'ar' ? 'حدث خطأ أثناء الحذف.' : 'Error deleting comment.');
        }
    }
};

const q = query(collection(db, "comments"));
onSnapshot(q, (snapshot) => {
    let commentsHTML = '';
    snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const docId = docSnap.id;

        // تحقق إذا كان التعليق يخص المستخدم الحالي لإظهار أزرار التعديل والحذف
        let actionButtonsHTML = '';
        if (loggedInUser && data.uid === loggedInUser.uid) {
            actionButtonsHTML = `
                <div class="msg-actions">
                    <button class="btn-edit-msg" onclick="window.editComment('${docId}', \`${data.text.replace(/`/g, '\\`')}\`)">
                        <i class="fa-solid fa-pen"></i> ${currentLang === 'ar' ? 'تعديل' : 'Edit'}
                    </button>
                    <button class="btn-delete-msg" onclick="window.deleteComment('${docId}')">
                        <i class="fa-solid fa-trash"></i> ${currentLang === 'ar' ? 'حذف' : 'Delete'}
                    </button>
                </div>
            `;
        }

        commentsHTML += `
            <div class="testimonial-card">
                <div class="testimonial-stars">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <p class="testimonial-text">«${data.text}»</p>
                <div class="testimonial-author">
                    <div class="author-info" style="display: flex; align-items: center; gap: 10px;">
                        ${data.avatar ? `<img src="${data.avatar}" alt="avatar" style="width: 35px; height: 35px; border-radius: 50%; border: 1px solid var(--green-light);">` : ''}
                        <div>
                            <h5>${data.name}</h5>
                            <span>${currentLang === 'ar' ? 'مستخدم مسجل بالموقع' : 'Verified User'}</span>
                        </div>
                    </div>
                </div>
                ${actionButtonsHTML}
            </div>
        `;
    });
    
    if(snapshot.empty) {
        commentsHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">${currentLang === 'ar' ? 'كن أول من يشاركنا رأيه وتجربته!' : 'Be the first to share your experience!'}</div>`;
    }

    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = commentsHTML;
    }
});

window.toggleLanguage = function() {
    renderPage(currentLang === 'ar' ? 'en' : 'ar');
};

let activeAudio = null;
let activeTrackNum = null;

window.playTrack = function(trackNum) {
    const currentAudio = document.getElementById(`audioTrack${trackNum}`);
    const currentIcon = document.getElementById(`playIcon${trackNum}`);
    if (!currentAudio) return;

    if (activeAudio && activeAudio !== currentAudio) {
        activeAudio.pause();
        if (activeTrackNum) {
            const prevIcon = document.getElementById(`playIcon${activeTrackNum}`);
            if(prevIcon) prevIcon.className = 'fa-solid fa-play';
        }
    }

    if (currentAudio.paused) {
        currentAudio.play().then(() => {
            currentIcon.className = 'fa-solid fa-pause';
            activeAudio = currentAudio;
            activeTrackNum = trackNum;
        }).catch(err => console.log("Audio play blocked/error:", err));
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
        const fill = document.getElementById(`progressFill${trackNum}`);
        if(fill) fill.style.width = '0%';
        activeAudio = null;
        activeTrackNum = null;
    };
};

window.seekTrack = function(e, trackNum) {
    const trackAudio = document.getElementById(`audioTrack${trackNum}`);
    if(!trackAudio || !trackAudio.duration) return;
    const container = e.currentTarget;
    const clickPos = e.clientX - container.getBoundingClientRect().left;
    const containerWidth = container.offsetWidth;
    trackAudio.currentTime = (clickPos / containerWidth) * trackAudio.duration;
};

window.toggleFaq = function(element) {
    element.parentElement.classList.toggle('active');
};

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

document.addEventListener('DOMContentLoaded', () => {
    renderPage('ar');
});
