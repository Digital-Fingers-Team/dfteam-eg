/**
 * IDOS Hospital Management System - Core Utilities
 * handles: Database, Session, UI Synchronization, Theme, and Language
 */

// 1. Database Initialization
const db = new Dexie("IDOSHospitalDB");
db.version(1).stores({
    users: "++id, name, email, phone, bloodType, role, department, status, registrationDate, avatar, password",
    appointments: "++id, patientId, patientName, doctorId, doctorName, specialty, date, time, status, notes, createdAt",
    messages: "++id, senderId, senderName, senderRole, receiverId, receiverName, receiverRole, content, timestamp, isRead",
    medicalRecords: "++id, patientId, patientName, doctorId, doctorName, title, diagnosis, treatment, notes, date"
});

// 2. Global State & Utilities
const IDOS = {
    db: db,
    
    get currentUser() {
        const user = localStorage.getItem("currentUser");
        return user ? JSON.parse(user) : null;
    },
    
    set currentUser(userData) {
        try {
            if (userData) {
                // تخزين البيانات الأساسية فقط لتجنب أي مشاكل في التشفير أو الحجم
                const cleanData = {
                    id: userData.id,
                    name: userData.name,
                    email: userData.email,
                    role: userData.role,
                    avatar: userData.avatar,
                    phone: userData.phone,
                    department: userData.department,
                    bloodType: userData.bloodType,
                    status: userData.status
                };
                localStorage.setItem("currentUser", JSON.stringify(cleanData));
            } else {
                localStorage.removeItem("currentUser");
            }
        } catch (e) {
            console.error("Error saving user to localStorage:", e);
        }
    },

    get currentLanguage() {
        return localStorage.getItem("currentLanguage") || "ar";
    },

    set currentLanguage(lang) {
        localStorage.setItem("currentLanguage", lang);
        document.body.dir = lang === "ar" ? "rtl" : "ltr";
        document.body.classList.toggle("ltr", lang === "en");
        document.body.classList.toggle("rtl", lang === "ar");
    },

    get darkMode() {
        return localStorage.getItem("darkMode") === "true";
    },

    set darkMode(val) {
        localStorage.setItem("darkMode", val);
        document.body.classList.toggle("dark-mode", val);
    },

    // 3. UI Synchronization
    syncUI() {
        const user = this.currentUser;
        const path = window.location.pathname;
        const isAuthPage = path.includes("login.html") || path.includes("register.html") || path.endsWith("/") || path.endsWith("index.html");

        // Apply Theme
        document.body.classList.toggle("dark-mode", this.darkMode);
        document.body.dir = this.currentLanguage === "ar" ? "rtl" : "ltr";

        if (!user) {
            // If no user and not on login/register/index, redirect to login
            if (!isAuthPage) {
                window.location.href = "login.html";
            }
            return;
        }

        // Update Name and Avatar across all possible IDs used in the project
        const nameElements = document.querySelectorAll("#userName, #user-name, .user-name, .profile-name");
        const avatarElements = document.querySelectorAll("#userAvatar, #user-avatar, .profile-avatar, .sidebar-header .logo img");
        const roleElements = document.querySelectorAll(".user-type, .user-role");

        nameElements.forEach(el => {
            el.textContent = user.name;
        });

        roleElements.forEach(el => {
            const roleMap = {
                'admin': this.currentLanguage === 'ar' ? 'مسؤول النظام' : 'Administrator',
                'doctor': this.currentLanguage === 'ar' ? 'طبيب' : 'Doctor',
                'patient': this.currentLanguage === 'ar' ? 'مريض' : 'Patient'
            };
            el.textContent = roleMap[user.role] || user.role;
        });

        avatarElements.forEach(el => {
            if (user.avatar) {
                if (user.avatar.length > 10) { // Base64 or URL
                    if (el.tagName === "IMG") {
                        el.src = user.avatar;
                    } else {
                        el.innerHTML = `<img src="${user.avatar}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
                    }
                } else { // Letter avatar
                    if (el.tagName === "IMG") {
                        // Fallback if it's an img tag but we only have a letter
                        el.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff`;
                    } else {
                        el.textContent = user.avatar;
                        el.style.display = "flex";
                        el.style.alignItems = "center";
                        el.style.justifyContent = "center";
                        el.style.background = "var(--primary)";
                        el.style.color = "white";
                        el.style.fontWeight = "bold";
                        el.style.borderRadius = "50%";
                    }
                }
            }
        });
    },

    // 4. Toast Notifications
    showToast(type, message) {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            container.className = "toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = `toast toast-${type}`;
        
        const icons = {
            success: "fa-check-circle",
            error: "fa-exclamation-circle",
            info: "fa-info-circle",
            warning: "fa-exclamation-triangle"
        };

        const currentLang = this.currentLanguage;
        toast.innerHTML = `<i class="fas ${icons[type] || 'fa-info-circle'}"></i> <span>${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(20px)";
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    },

    // 5. Logout
    logout() {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    },

    // 6. Data Seeding (Fixed Users)
    async seedData() {
        const fixedUsers = [
            {
                name: "د. حاتم سمير",
                email: "hatem@idos.com",
                password: "hatem123",
                role: "doctor",
                department: "قسم كبد و معدة",
                status: "active",
                registrationDate: new Date().toISOString(),
                avatar: "H",
                phone: "01000000001"
            },
            {
                name: "د. بسمة صقر",
                email: "basma@idos.com",
                password: "basma123",
                role: "doctor",
                department: "قسم نساء و توليد",
                status: "active",
                registrationDate: new Date().toISOString(),
                avatar: "B",
                phone: "01000000002"
            },
            {
                name: "د. عمرو الدخاخني",
                email: "amr@idos.com",
                password: "Amr123",
                role: "admin",
                department: "الإدارة العامة",
                status: "active",
                registrationDate: new Date().toISOString(),
                avatar: "A",
                phone: "01000000003"
            },
            {
                name: "د. أسامة السيد أحمد",
                email: "osama@idos.com",
                password: "osama123",
                role: "admin",
                department: "الإدارة العامة",
                status: "active",
                registrationDate: new Date().toISOString(),
                avatar: "O",
                phone: "01000000004"
            }
        ];

        try {
            for (const user of fixedUsers) {
                const exists = await this.db.users.where("email").equals(user.email).first();
                if (!exists) {
                    await this.db.users.add(user);
                    console.log(`Added fixed user: ${user.name}`);
                }
            }
        } catch (error) {
            console.error("Error seeding data:", error);
        }
    }
};

// Auto-init UI
document.addEventListener("DOMContentLoaded", async () => {
    await IDOS.seedData();
    IDOS.syncUI();
    
    // Global event listeners
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) logoutBtn.addEventListener("click", () => IDOS.logout());

    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            IDOS.darkMode = !IDOS.darkMode;
            IDOS.syncUI();
        });
    }
});

// Toast CSS (if not already present)
(function injectStyles() {
    if (document.getElementById("idos-core-styles")) return;
    const style = document.createElement("style");
    style.id = "idos-core-styles";
    style.textContent = `
        .toast-container { position: fixed; top: 20px; left: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; }
        body.rtl .toast-container { left: auto; right: 20px; }
        .toast { padding: 12px 20px; border-radius: 12px; color: white; font-weight: 600; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); transition: all 0.5s ease; animation: slideIn 0.5s ease; }
        .toast-success { background: #10b981; }
        .toast-error { background: #ef4444; }
        .toast-info { background: #3b82f6; }
        .toast-warning { background: #f59e0b; }
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        body.rtl @keyframes slideIn { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    `;
    document.head.appendChild(style);
})();