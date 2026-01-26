// بيانات الأعضاء
const members = {
  // القائد
  "Ahmed Abdelraouf": { name: "Ahmed Abdelraouf", password: "AhmedDF@2025!", role: "قائد الفريق" },
  
  // الأعضاء
  "Baraa saad": { name: "Baraa saad", password: "BaraaS@2025#", role: "عضو" },
  "Eyad abdelraouf": { name: "Eyad abdelraouf", password: "EyadA@2025$", role: "عضو" },
  "Yassen sayad": { name: "Yassen sayad", password: "YassenS@2025%", role: "عضو" },
  "Anas mohamed": { name: "Anas mohamed", password: "AnasM@2025^", role: "عضو" },
  "Ahmed elsayed": { name: "Ahmed elsayed", password: "AhmedE@2025&", role: "عضو" },
  "Hamza sherif": { name: "Hamza sherif", password: "HamzaS@2025*", role: "عضو" },
  "Hla sarhan": { name: "Hla sarhan", password: "HlaS@2025+", role: "عضو" },
  "Jana eslam": { name: "Jana eslam", password: "JanaE@2025-", role: "عضو" },
  "Salma mostafa": { name: "Salma mostafa", password: "SalmaM@2025=", role: "عضو" },
  "Soha sameh": { name: "Soha sameh", password: "SohaS@2025[", role: "عضو" },
  "Jana mohamed": { name: "Jana mohamed", password: "JanaM@2025]", role: "عضو" },
  "Jana hazem": { name: "Jana hazem", password: "JanaH@2025{", role: "عضو" },
  "Fayroz tarek": { name: "Fayroz tarek", password: "FayrozT@2025}", role: "عضو" },
  "Jomana hazem": { name: "Jomana hazem", password: "JomanaH@2025|", role: "عضو" },
  "Nada elsayed": { name: "Nada elsayed", password: "NadaE@2025;", role: "عضو" },
  "Renad mahmoud": { name: "Renad mahmoud", password: "RenadM@2025:", role: "عضو" },
  "Jana maher": { name: "Jana maher", password: "JanaMa@2025'", role: "عضو" },
  "Malak abdelfatah": { name: "Malak abdelfatah", password: "MalakA@2025\"", role: "عضو" },
  "Sama abdelfatah": { name: "Sama abdelfatah", password: "SamaA@2025<", role: "عضو" },
  "Sama eslam": { name: "Sama eslam", password: "SamaE@2025>", role: "عضو" },
  "Dina mohamed": { name: "Dina mohamed", password: "DinaM@2025?", role: "عضو" },
  "Baraa mohamed": { name: "Baraa mohamed", password: "BaraaM@2025/", role: "عضو" },
  "Hana nabil": { name: "Hana nabil", password: "HanaN@2025~", role: "عضو" },
  "Yassen mahmoud": { name: "Yassen mahmoud", password: "YassenM@2025`", role: "عضو" },
  "Farida magdy": { name: "Farida magdy", password: "FaridaM@2025!", role: "عضو" },
  "Anas saad": { name: "Anas saad", password: "AnasS@2025@", role: "عضو" }
};

// تسجيل الدخول
function loginUser(username, password, rememberMe) {
  if (members[username]) {
    if (members[username].password === password) {
      // حفظ بيانات الجلسة
      const userData = {
        username: username,
        name: members[username].name,
        role: members[username].role,
        loggedIn: true
      };
      
      if (rememberMe) {
        localStorage.setItem('userData', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('userData', JSON.stringify(userData));
      }
      
      return { success: true, message: "تم تسجيل الدخول بنجاح" };
    } else {
      return { success: false, message: "كلمة المرور غير صحيحة" };
    }
  } else {
    return { success: false, message: "اسم المستخدم غير مسجل" };
  }
}

// التحقق من حالة تسجيل الدخول
function checkAuth() {
  let userData = sessionStorage.getItem('userData') || localStorage.getItem('userData');
  
  if (userData) {
    userData = JSON.parse(userData);
    return userData.loggedIn === true;
  }
  
  return false;
}

// تسجيل الخروج
function logout() {
  sessionStorage.removeItem('userData');
  localStorage.removeItem('userData');
  localStorage.removeItem('dfTeamLoggedIn');
  localStorage.removeItem('dfTeamUser');
  
  // تحديث رسالة الترحيب إذا كانت الدالة متاحة
  if (typeof window.updateWelcomeMessage === 'function') {
    window.updateWelcomeMessage();
  }
  
  window.location.href = 'login.html';
}

// الحصول على بيانات المستخدم
function getUserData() {
  let userData = sessionStorage.getItem('userData') || localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
}

// حماية الصفحات
function protectPage() {
  if (!checkAuth() && !window.location.pathname.includes('login.html')) {
    window.location.href = 'login.html';
  }
}

// تنفيذ حماية الصفحة عند تحميلها
protectPage();
// static/js/auth.js

/**
 * نظام المصادقة المعدل مع تصحيح مشكلة التوجيه
 */

class AuthSystem {
  constructor() {
    this.members = {
      "Ahmed Abdelraouf": { password: "AhmedDF@2025!", role: "قائد الفريق" },
      "Baraa saad": { password: "BaraaS@2025#", role: "عضو" },
      "Eyad abdelraouf": { password: "EyadA@2025$", role: "عضو" },
      "Yassen sayad": { password: "YassenS@2025%", role: "عضو" },
      "Anas mohamed": { password: "AnasM@2025^", role: "عضو" },
      "Ahmed elsayed": { password: "AhmedE@2025&", role: "عضو" },
      "Hamza sherif": { password: "HamzaS@2025*", role: "عضو" },
      "Hla sarhan": { password: "HlaS@2025+", role: "عضو" },
      "Jana eslam": { password: "JanaE@2025-", role: "عضو" },
      "Salma mostafa": { password: "SalmaM@2025=", role: "عضو" },
      "Soha sameh": { password: "SohaS@2025[", role: "عضو" },
      "Jana mohamed": { password: "JanaM@2025]", role: "عضو" },
      "Jana hazem": { password: "JanaH@2025{", role: "عضو" },
      "Fayroz tarek": { password: "FayrozT@2025}", role: "عضو" },
      "Jomana hazem": { password: "JomanaH@2025|", role: "عضو" },
      "Nada elsayed": { password: "NadaE@2025;", role: "عضو" },
      "Renad mahmoud": { password: "RenadM@2025:", role: "عضو" },
      "Jana maher": { password: "JanaMa@2025'", role: "عضو" },
      "Malak abdelfatah": { password: "MalakA@2025\"", role: "عضو" },
      "Sama abdelfatah": { password: "SamaA@2025<", role: "عضو" },
      "Sama eslam": { password: "SamaE@2025>", role: "عضو" },
      "Dina mohamed": { password: "DinaM@2025?", role: "عضو" },
      "Baraa mohamed": { password: "BaraaM@2025/", role: "عضو" },
      "Hana nabil": { password: "HanaN@2025~", role: "عضو" },
      "Yassen mahmoud": { password: "YassenM@2025`", role: "عضو" },
      "Farida magdy": { password: "FaridaM@2025!", role: "عضو" },
      "Anas saad": { password: "AnasS@2025@", role: "عضو" }
    };
    
    this.init();
  }
  
  init() {
    console.log('تهيئة نظام المصادقة...');
    this.checkAuthState();
    this.setupEventListeners();
  }
  
  checkAuthState() {
    console.log('التحقق من حالة المصادقة...');
    const isLoginPage = this.isLoginPage();
    const isLoggedIn = this.isLoggedIn();
    
    console.log(`حالة الدخول: ${isLoggedIn}, صفحة تسجيل دخول: ${isLoginPage}`);
    
    if (isLoggedIn && isLoginPage) {
      console.log('المستخدم مسجل دخول ويحاول الوصول لصفحة التسجيل - توجيه للرئيسية');
      this.redirectToHome();
    }
  }
  
  setupEventListeners() {
    console.log('إعداد مستمعي الأحداث...');
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('تم تقديم نموذج تسجيل الدخول');
        this.handleLogin(e);
      });
    }
    
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
      togglePassword.addEventListener('click', () => {
        this.togglePasswordVisibility();
      });
    }
  }
  
  handleLogin(e) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    console.log(`محاولة تسجيل دخول باسم: ${username}`);
    
    if (!username || !password) {
      console.log('بيانات ناقصة');
      this.showError('الرجاء إدخال اسم المستخدم وكلمة المرور');
      return;
    }
    
    const member = this.members[username];
    
    if (member && member.password === password) {
      console.log('تسجيل دخول ناجح');
      this.loginSuccess(username, member.role);
    } else {
      console.log('فشل تسجيل الدخول');
      this.loginFailed();
    }
  }
  
  loginSuccess(username, role) {
    console.log(`تسجيل دخول ناجح لـ ${username} (${role})`);
    
    localStorage.setItem('dfTeamLoggedIn', 'true');
    localStorage.setItem('dfTeamUser', JSON.stringify({
      name: username,
      role: role,
      loginTime: new Date().getTime()
    }));
    
    // حفظ بيانات المستخدم بالتنسيق المطلوب لرسالة الترحيب
    const userData = {
      username: username,
      name: username,
      role: role,
      loggedIn: true
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    this.showWelcomeMessage(username);
    
    // استخدام replace بدلاً من href لمنع مشاكل التوجيه
    setTimeout(() => {
      console.log('التوجيه إلى الصفحة الرئيسية');
      window.location.replace('index.html');
    }, 1000);
  }
  
  // ... (بقية الدوال كما هي)
}

// تهيئة النظام مع التحقق من الأخطاء
try {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('صفحة جاهزة - تهيئة نظام المصادقة');
    const authSystem = new AuthSystem();
  });
} catch (error) {
  console.error('حدث خطأ في نظام المصادقة:', error);
}