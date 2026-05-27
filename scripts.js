// وظائف القائمة الجانبية والتفاعل
document.addEventListener('DOMContentLoaded', function() {
    // تحديث رسالة الترحيب حسب دور المستخدم
    updateWelcomeMessage();
    
    function updateWelcomeMessage() {
        const welcomeMessage = document.querySelector('.welcome-message');
        if (!welcomeMessage) return;
        
        // الحصول على بيانات المستخدم من التخزين المحلي أو الجلسة
        let userData = null;
        try {
            userData = JSON.parse(localStorage.getItem('userData')) || 
                      JSON.parse(sessionStorage.getItem('userData'));
        } catch (error) {
            console.log('لا توجد بيانات مستخدم مسجل');
        }
        
        if (userData && userData.loggedIn) {
            // إذا كان المستخدم مسجل دخوله
            if (userData.role === 'قائد الفريق') {
                welcomeMessage.textContent = `مرحباً بك قائد فريق الأنامل الرقمية (${userData.name})`;
            } else {
                welcomeMessage.textContent = `مرحباً بك عضو فريق الأنامل الرقمية ${userData.name}`;
            }
        } else {
              // الرسالة الافتراضية للزوار غير المسجلين
              welcomeMessage.textContent = 'مرحباً بكم في فريق الأنامل الرقمية';
           }
     }
     
     // جعل دالة تحديث الرسالة متاحة عالمياً
     window.updateWelcomeMessage = updateWelcomeMessage;
    // عناصر القائمة الجانبية
    const sideNav = document.getElementById('sideNav');
    const closeNav = document.getElementById('closeNav');
    const menuBtn = document.getElementById('menuBtn');
    const navOverlay = document.getElementById('navOverlay');

    // فتح القائمة الجانبية
    function openSideNav() {
        if (sideNav) {
            sideNav.classList.add('open');
        }
        if (navOverlay) {
            navOverlay.classList.add('open');
        }
        // منع التمرير في الخلفية
        document.body.style.overflow = 'hidden';
    }

    // إغلاق القائمة الجانبية
    function closeSideNav() {
        if (sideNav) {
            sideNav.classList.remove('open');
        }
        if (navOverlay) {
            navOverlay.classList.remove('open');
        }
        // إعادة تفعيل التمرير
        document.body.style.overflow = '';
    }

    // إضافة مستمع الأحداث لزر الإغلاق
    if (closeNav) {
        closeNav.addEventListener('click', closeSideNav);
    }

    // تبديل حالة القائمة الجانبية
    function toggleSideNav() {
        if (sideNav && sideNav.classList.contains('open')) {
            closeSideNav();
        } else {
            openSideNav();
        }
    }

    // إضافة مستمع الأحداث لزر القائمة (toggle)
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSideNav();
        });
    }

    // إضافة مستمع الأحداث للخلفية المظللة
    if (navOverlay) {
        navOverlay.addEventListener('click', closeSideNav);
    }

    // إغلاق القائمة عند الضغط على مفتاح Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSideNav();
        }
    });

    // وظيفة تبديل الثيم (إذا كان موجود)
    const toggleThemeBtn = document.getElementById('toggleTheme');
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // حفظ حالة الثيم في localStorage
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('darkTheme', isDark);
            
            // تغيير أيقونة الزر
            const icon = this.querySelector('i');
            if (isDark) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });

        // تطبيق الثيم المحفوظ عند تحميل الصفحة
        const savedTheme = localStorage.getItem('darkTheme');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-theme');
            const icon = toggleThemeBtn.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        }
    }

    // تحسين تجربة المستخدم - إضافة تأثيرات hover للروابط
    const navLinks = document.querySelectorAll('.side-nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // إضافة تأثير smooth scroll للروابط الداخلية
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    closeSideNav(); // إغلاق القائمة بعد النقر على رابط داخلي
                }
            }
        });
    });

    console.log('تم تحميل سكريبت القائمة الجانبية بنجاح');
});

// وظائف إضافية للتحسين

// تأثير التمرير للهيدر
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(23, 24, 28, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(23, 24, 28, 0.9)';
            header.style.backdropFilter = 'blur(5px)';
        }
    }
});

// تحسين الأداء - lazy loading للصور
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}
 // تحسينات للقائمة الجانبية على الهواتف
    document.addEventListener('DOMContentLoaded', function () {
      const sideNav = document.getElementById('sideNav');
      const closeNav = document.getElementById('closeNav');
      const menuBtn = document.getElementById('menuBtn');
      const navOverlay = document.getElementById('navOverlay');

      // فتح القائمة الجانبية
      function openSideNav() {
        if (sideNav) {
          sideNav.classList.add('open');
        }
        if (navOverlay) {
          navOverlay.classList.add('open');
        }
        // منع التمرير في الخلفية
        document.body.classList.add('no-scroll');
      }

      // إغلاق القائمة الجانبية
      function closeSideNav() {
        if (sideNav) {
          sideNav.classList.remove('open');
        }
        if (navOverlay) {
          navOverlay.classList.remove('open');
        }
        // إعادة تفعيل التمرير
        document.body.classList.remove('no-scroll');
      }

      // إضافة مستمع الأحداث لزر الإغلاق
      if (closeNav) {
        closeNav.addEventListener('click', closeSideNav);
      }

      // إضافة مستمع الأحداث لزر القائمة
      if (menuBtn) {
        menuBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          openSideNav();
        });
      }

      // إضافة مستمع الأحداث للخلفية المظللة
      if (navOverlay) {
        navOverlay.addEventListener('click', closeSideNav);
      }

      // إغلاق القائمة عند الضغط على مفتاح Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeSideNav();
        }
      });

      // منع إغلاق القائمة عند النقر عليها
      if (sideNav) {
        sideNav.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }

      // إغلاق القائمة تلقائيًا عند تغيير حجم النافذة إلى حجم كبير
      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
          closeSideNav();
        }
      });

      // إضافة تأثيرات للروابط عند التحويم
      const navLinks = document.querySelectorAll('.side-nav-links a');
      navLinks.forEach(link => {
        link.addEventListener('touchstart', function () {
          this.classList.add('hover-effect');
        });

        link.addEventListener('touchend', function () {
          setTimeout(() => {
            this.classList.remove('hover-effect');
          }, 150);
        });
      });
    });
