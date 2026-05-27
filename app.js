/* app.js - Common UI logic for Youth Platform */

const translations = {
    ar: {
        // Sidebar & Navigation
        dashboard: "الإحصائيات العامة",
        users: "إدارة المستخدمين",
        centers: "إدارة المراكز",
        ideas: "إدارة الأفكار",
        challenges: "إدارة التحديات",
        complaints: "الشكاوى والتقارير",
        reports: "التقارير التحليلية",
        monthly_reports: "التقارير الشهرية",
        seminars: "إدارة الندوات",
        center_ideas: "أفكار المركز",
        center_challenges: "تحديات المركز",
        settings: "الإعدادات",
        logout: "تسجيل الخروج",
        home: "الرئيسية",
        
        // Page Headers & Titles
        admin_title: "مديرية الشباب والرياضة",
        admin_subtitle: "لوحة تحكم المسؤول",
        admin: "المسؤول",
        users_admin_desc: "عرض وتعديل صلاحيات المستخدمين والتحكم في الحسابات.",
        add_user: "إضافة مستخدم جديد",
        search_user_placeholder: "بحث عن مستخدم بالاسم أو البريد...",
        user_title: "منصة الشباب والرياضة",
        user_subtitle: "بوابتك للتميز والإبداع",
        welcome_back: "مرحباً بك مجدداً في منصة الشباب",
        login_title: "تسجيل الدخول",
        signup_title: "إنشاء حساب جديد",
        no_account: "ليس لديك حساب؟",
        already_have_account: "لديك حساب بالفعل؟",
        password: "كلمة المرور",
        platform_overview: "نظرة عامة على المنصة 📊",
        platform_overview_desc: "متابعة أداء المنصة وتفاعل المستخدمين لحظة بلحظة.",
        welcome_user: "أهلاً بك في منصتك الرياضية 👋",
        welcome_user_desc: "تابع نشاطك، شارك أفكارك، واكتشف تحديات جديدة اليوم.",
        
        // Common UI Elements
        search: "بحث في النظام...",
        points: "نقطة",
        loading: "جاري التحميل...",
        active_member: "عضو نشط",
        save: "حفظ التغييرات",
        cancel: "إلغاء",
        edit: "تعديل",
        delete: "حذف",
        add: "إضافة",
        details: "التفاصيل",
        more: "عرض المزيد",
        full_name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        role: "الدور",
        status: "الحالة",
        actions: "الإجراءات",
        date_joined: "تاريخ التسجيل",
        active: "نشط",
        completed: "مكتمل",
        pending: "تحت الدراسة",
        in_progress: "قيد المعالجة",
        
        // Dashboard Stats
        total_users: "إجمالي المستخدمين",
        active_centers: "المراكز النشطة",
        pending_ideas: "أفكار قيد الدراسة",
        recent_activity: "أحدث النشاطات",
        new_complaints: "شكاوى جديدة",
        proposed_ideas: "أفكار مقترحة",
        joined_challenges: "تحديات منضم لها",
        streak_days: "أيام متتالية",
        total_votes: "إجمالي التصويتات",
        registration_rate: "معدل التسجيل الجديد",
        activity_distribution: "توزيع المستخدمين حسب النشاط",
        
        // Settings Page
        profile_settings: "تعديل الملف الشخصي",
        settings_desc: "تخصيص تجربتك على المنصة وإدارة حسابك.",
        appearance_lang: "المظهر واللغة",
        language: "اللغة (Language)",
        theme: "المظهر (Theme)",
        light: "فاتح (Light)",
        dark: "داكن (Dark)",
        change_photo: "تغيير الصورة",
        
        // Centers Page
        centers_title: "المراكز الشبابية والرياضية",
        centers_desc: "اكتشف أقرب المراكز إليك والخدمات التي تقدمها.",
        centers_admin_desc: "إضافة وتعديل بيانات مراكز الشباب والأنشطة المتاحة.",
        center_name_loc: "اسم المركز والمنطقة",
        activities_label: "الأنشطة",
        all_types: "كل الأنواع",
        youth_center: "مركز شباب",
        sports_club: "نادي رياضي",
        location: "الموقع",
        
        // Auth & Signup
        join_us: "انضم إلينا وابدأ رحلتك الرياضية اليوم",
        full_name_placeholder: "أدخل اسمك الثلاثي",
        signup_btn: "إنشاء الحساب",
        login_here: "سجل دخولك هنا",
        account_type: "نوع الحساب",
        user_member: "مستخدم (شاب/فتاة)",
        manager: "مدير مركز",
        
        // Messages & Toasts
        success_update: "تم تحديث البيانات بنجاح",
        error_general: "حدث خطأ ما، يرجى المحاولة لاحقاً",
        lang_changed: "تم تغيير اللغة للعربية",
        confirm_delete: "هل أنت متأكد من الحذف؟",
        
        // Activities
        weekly_activity: "نشاطك خلال الأسبوع",
        suggested_challenges: "تحديات مقترحة",
        view_all_challenges: "عرض كل التحديات",
        recent_ideas: "آخر الأفكار المضافة",
        view_ideas_bank: "عرض بنك الأفكار",
        ideas_bank_title: "بنك الأفكار التطويرية 💡",
        ideas_bank_desc: "شاركنا أفكارك لتطوير مراكز الشباب والرياضة في محافظتك.",
        propose_new_idea: "اقترح فكرة جديدة",
        total_ideas: "إجمالي الأفكار",
        approved_ideas: "أفكار مقبولة",
        idea_title_label: "عنوان الفكرة",
        idea_title_placeholder: "مثلاً: تطوير ملعب التنس",
        idea_desc_label: "وصف الفكرة بالتفصيل",
        idea_desc_placeholder: "اشرح فكرتك وكيف ستفيد الشباب...",
        publish_idea: "نشر الفكرة",
        no_ideas_match: "لا توجد أفكار تطابق بحثك",
        vote_thanks: "شكراً لتصويتك!",
        idea_sent_success: "تم إرسال فكرتك بنجاح! ستتم مراجعتها قريباً",
        challenges_page_title: "التحديات الرياضية والشبابية 🏆",
        challenges_page_desc: "شارك في التحديات، حقق الإنجازات، واجمع النقاط لرفع ترتيبك.",
        active_challenges: "تحديات نشطة",
        my_challenges: "تحدياتي",
        earned_points_from_challenges: "نقاط من التحديات",
        no_challenges_available: "لا توجد تحديات حالياً",
        participant_count: "مشارك",
        reward_label: "الجائزة:",
        points_reward: "نقطة",
        deadline_label: "الموعد النهائي:",
        joined_success: "تم الانضمام",
        join_now: "انضم للتحدي الآن",
        join_challenge_success: "تم الانضمام للتحدي بنجاح! بالتوفيق 🚀",
        join_challenge_error: "حدث خطأ أثناء الانضمام",
        complaints_page_title: "الشكاوى والمقترحات 💬",
        complaints_page_desc: "صوتك مسموع.. أرسل شكواك أو مقترحك وسنعمل على حله في أسرع وقت.",
        submit_new_request: "تقديم طلب جديد",
        request_type: "نوع الطلب",
        complaint: "شكوى",
        suggestion: "مقترح تطوير",
        maintenance: "طلب صيانة",
        other: "أخرى",
        request_title: "العنوان",
        request_title_placeholder: "عنوان مختصر للمشكلة",
        request_details: "التفاصيل",
        request_details_placeholder: "اشرح لنا المشكلة أو المقترح بالتفصيل...",
        send_request: "إرسال الطلب",
        my_previous_requests: "طلباتي السابقة",
        no_previous_requests: "لا توجد طلبات سابقة",
        request_sent_success: "تم إرسال طلبك بنجاح! سنوافيك بالرد قريباً",
        
        // Admin Ideas & Management
        admin_ideas_title: "إدارة بنك الأفكار 💡",
        admin_ideas_desc: "مراجعة الأفكار المقدمة من الشباب واتخاذ إجراءات بشأنها.",
        idea_col: "الفكرة",
        author_col: "صاحب الفكرة",
        category_col: "التصنيف",
        votes_col: "التصويت",
        review: "مراجعة",
        approve: "موافقة",
        reject: "رفض",
        under_study: "تحت الدراسة",
        idea_details: "تفاصيل الفكرة",
        by_author: "بواسطة:",
        submission_date: "تاريخ التقديم:",
        idea_status_updated: "تم تحديث حالة الفكرة إلى",

        // Admin Challenges
        admin_challenges_title: "إدارة التحديات والمسابقات 🏆",
        admin_challenges_desc: "إنشاء تحديات جديدة ومتابعة مشاركات الشباب.",
        add_challenge: "إضافة تحدي جديد",
        challenge_col: "التحدي",
        points_col: "النقاط",
        end_date_col: "تاريخ الانتهاء",
        participants_col: "المشاركون",
        edit_challenge: "تعديل التحدي",
        challenge_title_label: "عنوان التحدي",
        challenge_desc_label: "وصف التحدي",
        points_label: "النقاط (XP)",
        category_label: "الفئة",
        sports: "رياضي",
        cultural: "ثقافي",
        volunteer: "تطوعي",
        innovative: "ابتكاري",
        end_date_label: "تاريخ الانتهاء",
        challenge_saved_success: "تم حفظ التحدي بنجاح",
        challenge_deleted_success: "تم حذف التحدي بنجاح",

        // Admin Complaints
        admin_complaints_title: "إدارة الشكاوى والبلاغات 📢",
        admin_complaints_desc: "متابعة شكاوى المستخدمين والرد عليها وتحسين جودة الخدمة.",
        subject_col: "الموضوع",
        submitted_by_col: "المقدم",
        date_col: "التاريخ",
        complaint_details: "تفاصيل الشكوى",
        update_status_label: "تحديث الحالة",
        resolved: "تم الحل",
        rejected: "مرفوضة",
        complaint_status_updated: "تم تحديث حالة الشكوى",

        // Admin Reports
        admin_reports_title: "التقارير التحليلية والإحصائيات 📊",
        admin_reports_desc: "تحليل بيانات المنصة وتفاعل الشباب بشكل معمق.",
        ideas_by_category: "توزيع الأفكار حسب التصنيف",
        complaints_status_chart: "حالات الشكاوى والبلاغات",
        full_activity_log: "سجل النشاطات الكامل",
        export_data: "تصدير البيانات",
        action_col: "الإجراء",
        details_col: "التفاصيل",
        no_activities_logged: "لا يوجد نشاطات مسجلة حالياً",
        exporting_data: "جاري تحضير ملف البيانات للتصدير...",
        export_success: "تم تصدير التقرير بنجاح (CSV)",

        new_member_badge: "عضو جديد",
        active_badge: "عضو نشط",
        pioneer_badge: "مبتكر رائد",
        sports_hero_badge: "بطل رياضي",
        search_smart: "بحث ذكي...",
        no_activity: "لا توجد نشاطات مؤخراً",
        activity_user: "المستخدم",
        activity_action: "النشاط",
        activity_time: "الوقت"
    },
    en: {
        // Sidebar & Navigation
        dashboard: "General Stats",
        users: "Users Management",
        centers: "Centers Management",
        ideas: "Ideas Management",
        challenges: "Challenges Management",
        complaints: "Complaints & Reports",
        reports: "Analytical Reports",
        monthly_reports: "Monthly Reports",
        seminars: "Seminars Management",
        center_ideas: "Center Ideas",
        center_challenges: "Center Challenges",
        settings: "Settings",
        logout: "Logout",
        home: "Home",
        
        // Page Headers & Titles
        admin_title: "Youth & Sports Directorate",
        admin_subtitle: "Admin Control Panel",
        admin: "Admin",
        users_admin_desc: "View and edit user permissions and manage accounts.",
        add_user: "Add New User",
        search_user_placeholder: "Search user by name or email...",
        user_title: "Youth & Sports Platform",
        user_subtitle: "Your Gateway to Excellence",
        welcome_back: "Welcome back to the Youth Platform",
        login_title: "Login",
        signup_title: "Create New Account",
        no_account: "Don't have an account?",
        already_have_account: "Already have an account?",
        password: "Password",
        platform_overview: "Platform Overview 📊",
        platform_overview_desc: "Monitor platform performance and user engagement in real-time.",
        welcome_user: "Welcome to your Sports Platform 👋",
        welcome_user_desc: "Track your activity, share ideas, and discover new challenges today.",
        
        // Common UI Elements
        search: "Search system...",
        points: "Points",
        loading: "Loading...",
        active_member: "Active Member",
        save: "Save Changes",
        cancel: "Cancel",
        edit: "Edit",
        delete: "Delete",
        add: "Add",
        details: "Details",
        more: "Show More",
        full_name: "Full Name",
        email: "Email Address",
        role: "Role",
        status: "Status",
        actions: "Actions",
        date_joined: "Date Joined",
        active: "Active",
        completed: "Completed",
        pending: "Pending Review",
        in_progress: "In Progress",
        
        // Dashboard Stats
        total_users: "Total Users",
        active_centers: "Active Centers",
        pending_ideas: "Pending Ideas",
        recent_activity: "Recent Activity",
        new_complaints: "New Complaints",
        proposed_ideas: "Proposed Ideas",
        joined_challenges: "Joined Challenges",
        streak_days: "Streak Days",
        total_votes: "Total Votes",
        registration_rate: "New Registration Rate",
        activity_distribution: "Activity Distribution",
        
        // Settings Page
        profile_settings: "Profile Settings",
        settings_desc: "Customize your experience and manage your account.",
        appearance_lang: "Appearance & Language",
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        change_photo: "Change Photo",
        
        // Centers Page
        centers_title: "Youth & Sports Centers",
        centers_desc: "Discover the nearest centers and their services.",
        centers_admin_desc: "Add and edit youth centers and available activities.",
        center_name_loc: "Center Name & Region",
        activities_label: "Activities",
        all_types: "All Types",
        youth_center: "Youth Center",
        sports_club: "Sports Club",
        location: "Location",
        
        // Auth & Signup
        join_us: "Join us and start your sports journey today",
        full_name_placeholder: "Enter your full name",
        signup_btn: "Create Account",
        login_here: "Login here",
        account_type: "Account Type",
        user_member: "User (Youth)",
        manager: "Center Manager",
        
        // Messages & Toasts
        success_update: "Data updated successfully",
        error_general: "Something went wrong, please try again",
        lang_changed: "Language changed to English",
        confirm_delete: "Are you sure you want to delete?",
        
        // Activities
        weekly_activity: "Your Weekly Activity",
        suggested_challenges: "Suggested Challenges",
        view_all_challenges: "View All Challenges",
        recent_ideas: "Recent Added Ideas",
        view_ideas_bank: "View Ideas Bank",
        ideas_bank_title: "Developmental Ideas Bank 💡",
        ideas_bank_desc: "Share your ideas to develop youth and sports centers in your governorate.",
        propose_new_idea: "Propose New Idea",
        total_ideas: "Total Ideas",
        approved_ideas: "Approved Ideas",
        idea_title_label: "Idea Title",
        idea_title_placeholder: "e.g., Tennis Court Development",
        idea_desc_label: "Detailed Idea Description",
        idea_desc_placeholder: "Explain your idea and how it will benefit the youth...",
        publish_idea: "Publish Idea",
        no_ideas_match: "No ideas match your search",
        vote_thanks: "Thanks for your vote!",
        idea_sent_success: "Your idea has been sent successfully! It will be reviewed soon.",
        challenges_page_title: "Sports & Youth Challenges 🏆",
        challenges_page_desc: "Participate in challenges, achieve goals, and earn points to rank up.",
        active_challenges: "Active Challenges",
        my_challenges: "My Challenges",
        earned_points_from_challenges: "Points from Challenges",
        no_challenges_available: "No challenges available currently",
        participant_count: "Participant",
        reward_label: "Reward:",
        points_reward: "Points",
        deadline_label: "Deadline:",
        joined_success: "Joined",
        join_now: "Join Challenge Now",
        join_challenge_success: "Successfully joined the challenge! Good luck 🚀",
        join_challenge_error: "An error occurred while joining",
        complaints_page_title: "Complaints & Suggestions 💬",
        complaints_page_desc: "Your voice is heard.. send your complaint or suggestion and we will work on it ASAP.",
        submit_new_request: "Submit New Request",
        request_type: "Request Type",
        complaint: "Complaint",
        suggestion: "Development Suggestion",
        maintenance: "Maintenance Request",
        other: "Other",
        request_title: "Title",
        request_title_placeholder: "Brief title of the issue",
        request_details: "Details",
        request_details_placeholder: "Explain the issue or suggestion in detail...",
        send_request: "Send Request",
        my_previous_requests: "My Previous Requests",
        no_previous_requests: "No previous requests",
        request_sent_success: "Your request has been sent successfully! We will reply soon.",
        
        // Admin Ideas & Management
        admin_ideas_title: "Ideas Bank Management 💡",
        admin_ideas_desc: "Review ideas submitted by youth and take action on them.",
        idea_col: "Idea",
        author_col: "Author",
        category_col: "Category",
        votes_col: "Votes",
        review: "Review",
        approve: "Approve",
        reject: "Reject",
        under_study: "Under Review",
        idea_details: "Idea Details",
        by_author: "By:",
        submission_date: "Submission Date:",
        idea_status_updated: "Idea status updated to",

        // Admin Challenges
        admin_challenges_title: "Challenges & Competitions Management 🏆",
        admin_challenges_desc: "Create new challenges and monitor youth participation.",
        add_challenge: "Add New Challenge",
        challenge_col: "Challenge",
        points_col: "Points",
        end_date_col: "End Date",
        participants_col: "Participants",
        edit_challenge: "Edit Challenge",
        challenge_title_label: "Challenge Title",
        challenge_desc_label: "Challenge Description",
        points_label: "Points (XP)",
        category_label: "Category",
        sports: "Sports",
        cultural: "Cultural",
        volunteer: "Volunteer",
        innovative: "Innovative",
        end_date_label: "End Date",
        challenge_saved_success: "Challenge saved successfully",
        challenge_deleted_success: "Challenge deleted successfully",

        // Admin Complaints
        admin_complaints_title: "Complaints & Reports Management 📢",
        admin_complaints_desc: "Monitor user complaints, respond to them, and improve service quality.",
        subject_col: "Subject",
        submitted_by_col: "Submitted By",
        date_col: "Date",
        complaint_details: "Complaint Details",
        update_status_label: "Update Status",
        resolved: "Resolved",
        rejected: "Rejected",
        complaint_status_updated: "Complaint status updated",

        // Admin Reports
        admin_reports_title: "Analytical Reports & Stats 📊",
        admin_reports_desc: "In-depth analysis of platform data and youth interaction.",
        ideas_by_category: "Ideas Distribution by Category",
        complaints_status_chart: "Complaints & Reports Status",
        full_activity_log: "Full Activity Log",
        export_data: "Export Data",
        action_col: "Action",
        details_col: "Details",
        no_activities_logged: "No activities registered currently",
        exporting_data: "Preparing data file for export...",
        export_success: "Report exported successfully (CSV)",

        new_member_badge: "New Member",
        active_badge: "Active Member",
        pioneer_badge: "Leading Innovator",
        sports_hero_badge: "Sports Hero",
        search_smart: "Smart Search...",
        no_activity: "No recent activities",
        activity_user: "User",
        activity_action: "Activity",
        activity_time: "Time"
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initial Apply from LocalStorage (fastest)
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('lang') || 'ar';
    applyGlobalSettings(savedTheme, savedLang);

    // 2. User Session & Database Settings
    const user = await window.getLoggedInUser();
    if (user) {
        updateUIWithUser(user);
        // If DB settings differ from LocalStorage, sync them
        if (user.theme !== savedTheme || user.language !== savedLang) {
            applyGlobalSettings(user.theme || savedTheme, user.language || savedLang);
        }
    } else {
        const isAuthPage = window.location.pathname.includes('index.html') || 
                          window.location.pathname.includes('signup.html') ||
                          window.location.pathname === '/';
        if (!isAuthPage) {
            window.location.href = 'index.html';
        }
    }

    // 3. Sidebar Toggle (for mobile)
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Close sidebar when clicking a link on mobile
    const navLinksElements = document.querySelectorAll('.nav-link');
    navLinksElements.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
            }
        });
    });
});

function applyGlobalSettings(theme, lang) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('theme', theme);
    localStorage.setItem('lang', lang);
    
    translatePage(lang);
}

function translatePage(lang) {
    const t = translations[lang];
    if (!t) return;

    // 1. Automatic Translation via data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // 2. Browser Tab Title
    const currentTitle = document.title;
    if (lang === 'en') {
        if (currentTitle.includes('لوحة التحكم')) document.title = "Dashboard | Youth Platform";
        else if (currentTitle.includes('المراكز')) document.title = "Centers | Youth Platform";
        else if (currentTitle.includes('الأفكار')) document.title = "Ideas | Youth Platform";
        else if (currentTitle.includes('التحديات')) document.title = "Challenges | Youth Platform";
        else if (currentTitle.includes('الإعدادات')) document.title = "Settings | Youth Platform";
    }

    // 3. Dynamic Sidebar Fallback
    const navLinks = document.querySelectorAll('.nav-link span');
    navLinks.forEach(span => {
        const text = span.textContent.trim();
        if (span.hasAttribute('data-i18n')) return;
        
        for (const [key, value] of Object.entries(translations.ar)) {
            if (text === value) {
                span.textContent = t[key];
                break;
            }
        }
    });

    // 4. Custom Components (Placeholders etc)
    const searchInput = document.querySelector('.search-wrapper input, .header-search input');
    if (searchInput && !searchInput.hasAttribute('data-i18n')) {
        searchInput.placeholder = t.search;
    }

    const logoutBtn = document.querySelector('.user-info-text span, .user-info h4');
    if (logoutBtn && !logoutBtn.hasAttribute('data-i18n')) {
        logoutBtn.textContent = t.logout;
    }
}

// Global Toast System with i18n Support
window.showToast = (message, type = 'success') => {
    const lang = localStorage.getItem('lang') || 'ar';
    const t = translations[lang];
    
    // 1. Translate message if it's a key
    let finalMsg = message;
    if (t && t[message]) {
        finalMsg = t[message];
    }

    // 2. Create or get container
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 30px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };

    toast.className = 'fade-in';
    toast.style.cssText = `
        background: #fff;
        color: #1e293b;
        padding: 12px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        border-right: 5px solid ${colors[type]};
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        min-width: 250px;
    `;

    const icon = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };

    toast.innerHTML = `
        <i class="fas ${icon[type]}" style="color: ${colors[type]}; font-size: 1.2rem;"></i>
        <span>${finalMsg}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
};

// Global Logout
window.logout = () => {
    localStorage.removeItem('session');
    sessionStorage.removeItem('session');
    window.location.href = 'index.html';
};

// Update UI with User Data
function updateUIWithUser(user) {
    const nameEls = document.querySelectorAll('#userName');
    const pointsEls = document.querySelectorAll('#userPoints');
    const avatarEls = document.querySelectorAll('.user-avatar');

    nameEls.forEach(el => el.textContent = user.name);
    pointsEls.forEach(el => el.textContent = user.points || 0);
    avatarEls.forEach(el => {
        if (user.avatar) {
            el.innerHTML = `<img src="${user.avatar}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
        } else {
            el.textContent = user.name.charAt(0).toUpperCase();
        }
    });
}
