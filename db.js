// db.js - Central Database Configuration using Dexie.js
const db = new Dexie("YouthSportsPlatformDB");

// Define Database Schema
db.version(8).stores({
    users: "++id, email, password, role, name, centerId, points, createdAt, status, avatar, language, theme",
    sessions: "++id, userId, token, expiresAt",
    centers: "++id, name, location, administration, capacity, rating, type, image, description",
    challenges: "++id, title, description, reward, status, category, participants, maxParticipants, deadline, createdAt",
    userChallenges: "++id, userId, challengeId, joinedAt, completed, pointsEarned",
    ideas: "++id, userId, centerId, userName, title, description, status, votes, createdAt",
    complaints: "++id, userId, centerId, userName, title, description, status, createdAt, type",
    reports: "++id, type, title, content, date, status",
    monthlyReports: "++id, centerId, month, year, status, submissionDate, [month+year], [centerId+month+year]",
    seminars: "++id, centerId, title, speaker, date, participants, status",
    activities: "++id, action, userId, userName, timestamp"
});

// Seed Initial Data if Database is Empty
async function seedDatabase() {
    try {
        // 1. Seed Centers FIRST to get correct IDs
        const centerCount = await db.centers.count();
        const firstCenter = await db.centers.get(1);
        
        // If center count is wrong OR ID 1 is not "إمياي", force re-seed centers
        if (centerCount < 70 || !firstCenter || firstCenter.name !== "مركز شباب إمياي") {
            await db.centers.clear();
            await db.centers.bulkAdd([
                { id: 1, name: "مركز شباب إمياي", location: "طوخ", administration: "طوخ", rating: 4.5, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب متميز في طوخ" },
                { id: 2, name: "مركز شباب السيفا", location: "طوخ", administration: "طوخ", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "يقدم أنشطة رياضية متنوعة" },
                { id: 3, name: "مركز شباب طنط الجزيرة", location: "طوخ", administration: "طوخ", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب نشط في طوخ" },
                { id: 4, name: "مركز شباب المنيرة", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.6, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "من أهم مراكز القناطر" },
                { id: 5, name: "مركز شباب برشوم الكبرى", location: "طوخ", administration: "طوخ", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب عريق في طوخ" },
                { id: 6, name: "مركز شباب العمار", location: "طوخ", administration: "طوخ", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "أنشطة رياضية وثقافية" },
                { id: 7, name: "مركز شباب شبرا شهاب", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "خدمة متميزة للشباب" },
                { id: 8, name: "مركز شباب أجهور الصغرى", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "مركز شباب متطور" },
                { id: 9, name: "مركز شباب الوقف", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.0, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "أنشطة متنوعة في شبين القناطر" },
                { id: 10, name: "مركز شباب بهادة", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "مركز شباب القناطر" },
                { id: 11, name: "مركز شباب البرادعة", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.5, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب نموذجي" },
                { id: 12, name: "مركز شباب صنافير", location: "قليوب", administration: "قليوب", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "أنشطة رياضية في قليوب" },
                { id: 13, name: "مركز شباب حلابة", location: "قليوب", administration: "قليوب", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب نشط في قليوب" },
                { id: 14, name: "مركز شباب قلما", location: "قليوب", administration: "قليوب", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "خدمات متميزة في قليوب" },
                { id: 15, name: "مركز شباب كفر بطا", location: "بنها", administration: "بنها", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب في بنها" },
                { id: 16, name: "مركز شباب طحلة", location: "بنها", administration: "بنها", rating: 4.5, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "أنشطة رياضية متنوعة في بنها" },
                { id: 17, name: "مركز شباب شبلنجة", location: "بنها", administration: "بنها", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب شبلنجة في بنها" },
                { id: 18, name: "مركز شباب جمجرة الجديدة", location: "بنها", administration: "بنها", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "تطوير مستمر في بنها" },
                { id: 19, name: "مركز شباب جمجرة الكبرى", location: "بنها", administration: "بنها", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "أنشطة ثقافية ورياضية في بنها" },
                { id: 20, name: "مركز شباب كفر الجزار", location: "بنها", administration: "بنها", rating: 4.6, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "من أهم مراكز بنها" },
                { id: 21, name: "مركز شباب نقباس", location: "بنها", administration: "بنها", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب متميز في بنها" },
                { id: 22, name: "مركز شباب منية السباع", location: "بنها", administration: "بنها", rating: 4.0, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "خدمات شبابية في بنها" },
                { id: 23, name: "مركز شباب الرملة", location: "بنها", administration: "بنها", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب الرملة في بنها" },
                { id: 24, name: "مركز شباب المنشية", location: "بنها", administration: "بنها", rating: 4.5, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "أنشطة متنوعة في بنها" },
                { id: 25, name: "مركز شباب بطا", location: "بنها", administration: "بنها", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب بطا في بنها" },
                { id: 26, name: "مركز شباب كفر الشيخ إبراهيم", location: "بنها", administration: "بنها", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "خدمة متميزة في بنها" },
                { id: 27, name: "مركز شباب بتمدة", location: "بنها", administration: "بنها", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب بتمدة في بنها" },
                { id: 28, name: "مركز شباب جزيرة بلي", location: "بنها", administration: "بنها", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "أنشطة رياضية في بنها" },
                { id: 29, name: "مركز شباب ميت الحوفيين", location: "بنها", administration: "بنها", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب ميت الحوفيين في بنها" },
                { id: 30, name: "مركز شباب سندنهور", location: "بنها", administration: "بنها", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "خدمات شبابية في بنها" },
                { id: 31, name: "مركز شباب فرسيس", location: "بنها", administration: "بنها", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب فرسيس في بنها" },
                { id: 32, name: "مركز شباب عزبة نجيب", location: "بنها", administration: "بنها", rating: 4.0, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "تطوير مستمر في بنها" },
                { id: 33, name: "مركز شباب كفر طحلة", location: "بنها", administration: "بنها", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "أنشطة رياضية في بنها" },
                { id: 34, name: "مركز شباب كفر أبو ذكري", location: "بنها", administration: "بنها", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "مركز شباب كفر أبو ذكري في بنها" },
                { id: 35, name: "مركز شباب كفر الأربعين", location: "بنها", administration: "بنها", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "خدمات متميزة في بنها" },
                { id: 36, name: "مركز شباب منشأة دياب", location: "بنها", administration: "بنها", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "مركز شباب منشأة دياب في بنها" },
                { id: 37, name: "مركز شباب كفر العرب", location: "بنها", administration: "بنها", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "أنشطة متنوعة في بنها" },
                { id: 38, name: "مركز شباب الحسانية", location: "طوخ", administration: "طوخ", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "مركز شباب الحسانية في طوخ" },
                { id: 39, name: "مركز شباب شبرا هارس", location: "طوخ", administration: "طوخ", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "خدمات شبابية في طوخ" },
                { id: 40, name: "مركز شباب الناصرية", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "مركز شباب الناصرية في القناطر" },
                { id: 41, name: "مركز شباب كفر الحدادين", location: "طوخ", administration: "طوخ", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "أنشطة رياضية في طوخ" },
                { id: 42, name: "مركز شباب كفر علوان", location: "قليوب", administration: "قليوب", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "مركز شباب كفر علوان في قليوب" },
                { id: 43, name: "مركز شباب نامول", location: "طوخ", administration: "طوخ", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "خدمات متميزة في طوخ" },
                { id: 44, name: "مركز شباب الدير", location: "طوخ", administration: "طوخ", rating: 4.5, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "من أهم مراكز طوخ" },
                { id: 45, name: "مركز شباب الصفا", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب الصفا في شبين القناطر" },
                { id: 46, name: "مركز شباب الصالحية", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "أنشطة متنوعة في شبين القناطر" },
                { id: 47, name: "مركز شباب كفر العمار", location: "طوخ", administration: "طوخ", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب كفر العمار في طوخ" },
                { id: 48, name: "مركز شباب كفر الجمال", location: "طوخ", administration: "طوخ", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "خدمة متميزة في طوخ" },
                { id: 49, name: "مركز شباب سندوة", location: "الخانكة", administration: "الخانكة", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب سندوة في الخانكة" },
                { id: 50, name: "مركز شباب سرياقوس", location: "الخانكة", administration: "الخانكة", rating: 4.5, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "أنشطة رياضية كبيرة في الخانكة" },
                { id: 51, name: "مركز شباب كفر الربعيين", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب كفر الربعيين في شبين" },
                { id: 52, name: "مركز شباب 24 يوليو", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "أنشطة متميزة في شبين القناطر" },
                { id: 53, name: "مركز شباب كفر حمزة", location: "الخانكة", administration: "الخانكة", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب كفر حمزة في الخانكة" },
                { id: 54, name: "مركز شباب الشقر", location: "كفر شكر", administration: "كفر شكر", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "مركز شباب الشقر في كفر شكر" },
                { id: 55, name: "مركز شباب كفر عامر", location: "بنها", administration: "بنها", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "أنشطة متنوعة في بنها" },
                { id: 56, name: "مركز شباب كفر عزب غنيم", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "مركز شباب كفر عزب غنيم في القناطر" },
                { id: 57, name: "مركز شباب كفر الولجا", location: "كفر شكر", administration: "كفر شكر", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب كفر الولجا في كفر شكر" },
                { id: 58, name: "مركز شباب كفر رجب", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "أنشطة رياضية في شبين" },
                { id: 59, name: "مركز شباب كفر الحبش", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب كفر الحبش في شبين" },
                { id: 60, name: "مركز شباب زاوية النجار", location: "قليوب", administration: "قليوب", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "مركز شباب زاوية النجار في قليوب" },
                { id: 61, name: "مركز شباب كفر الدير", location: "طوخ", administration: "طوخ", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب كفر الدير في طوخ" },
                { id: 62, name: "مركز شباب الشيخة سالمة", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "أنشطة متميزة في شبين" },
                { id: 63, name: "مركز شباب الشيخ سند", location: "قليوب", administration: "قليوب", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "مركز شباب الشيخ سند في قليوب" },
                { id: 64, name: "مركز شباب القلزم", location: "قليوب", administration: "قليوب", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "مركز شباب القلزم في قليوب" },
                { id: 65, name: "مركز شباب كفر طحوريا", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "خدمات شبابية في شبين" },
                { id: 66, name: "مركز شباب الجبلاوي وعمر", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.4, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "مركز شباب متميز في شبين" },
                { id: 67, name: "مركز شباب الحرية والسماع", location: "شبين القناطر", administration: "شبين القناطر", rating: 4.1, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "أنشطة متنوعة في شبين" },
                { id: 68, name: "مركز شباب سندبيس", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.3, type: "مركز شباب", image: "https://images.unsplash.com/photo-1540747737273-46c70b0e9851?w=800", description: "مركز شباب سندبيس في القناطر" },
                { id: 69, name: "مركز شباب قرنفيل", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.5, type: "مركز شباب", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800", description: "من أهم مراكز القناطر" },
                { id: 70, name: "مركز شباب شلقان", location: "القناطر الخيرية", administration: "القناطر الخيرية", rating: 4.2, type: "مركز شباب", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800", description: "مركز شباب شلقان في القناطر" }
            ]);
            console.log("✅ Seeded centers with deterministic IDs");
        }

        // 2. Seed Fixed Accounts
        const fixedUsers = [
            { email: "user@example.com", password: "user123", role: "user", name: "مستخدم تجريبي", points: 150, createdAt: new Date() },
            { email: "admin@example.com", password: "admin123", role: "admin", name: "مدير النظام", points: 0, createdAt: new Date() }
        ];

        for (const user of fixedUsers) {
            const exists = await db.users.where("email").equals(user.email).first();
            if (!exists) {
                await db.users.add(user);
                console.log(`✅ Added fixed user: ${user.email}`);
            }
        }

        // 3. Seed Manager Accounts for EACH Center using their ID
        const allCenters = await db.centers.orderBy('id').toArray();
        for (const center of allCenters) {
            const managerEmail = `manager_${center.id}@platform.com`; 
            
            const exists = await db.users.where("email").equals(managerEmail).first();
            if (!exists) {
                await db.users.add({
                    email: managerEmail,
                    password: "center123", 
                    role: "manager",
                    name: `مدير ${center.name}`,
                    centerId: center.id,
                    points: 0,
                    createdAt: new Date(),
                    status: "active"
                });
                console.log(`✅ Created manager account: ${managerEmail} for ${center.name}`);
            } else {
                // Force update to ensure ID sync
                await db.users.update(exists.id, { 
                    centerId: center.id,
                    name: `مدير ${center.name}`
                });
            }
        }

        // 4. Seed Ideas and Complaints
        const ideasCount = await db.ideas.count();
        if (ideasCount === 0) {
            await db.ideas.bulkAdd([
                { userId: 1, centerId: 1, userName: "مستخدم تجريبي", title: "تطوير ملاعب التنس", description: "نقترح إضافة ملاعب تنس جديدة في مركز شباب بنها", status: "تحت الدراسة", votes: 25, createdAt: new Date() },
                { userId: 1, centerId: 1, userName: "مستخدم تجريبي", title: "تطبيق للمسابقات", description: "إنشاء تطبيق خاص للمسابقات الرياضية بين مراكز المحافظة", status: "مقبولة", votes: 42, createdAt: new Date() }
            ]);
            console.log("✅ Seeded ideas");
        }

        const complaintsCount = await db.complaints.count();
        if (complaintsCount === 0) {
            await db.complaints.bulkAdd([
                { userId: 1, centerId: 1, userName: "مستخدم تجريبي", title: "صيانة الإنارة", description: "الإنارة في الملعب الخماسي تحتاج لصيانة", status: "قيد المعالجة", createdAt: new Date(), type: "صيانة" }
            ]);
            console.log("✅ Seeded complaints");
        }
    } catch (error) {
        console.error("❌ Error seeding database:", error);
    }
}

// Global helper functions
window.getLoggedInUser = async () => {
    const session = JSON.parse(localStorage.getItem('session') || sessionStorage.getItem('session') || 'null');
    if (!session || !session.loggedIn) return null;
    
    // Check if session is expired
    if (new Date().getTime() > session.expiresAt) {
        localStorage.removeItem('session');
        sessionStorage.removeItem('session');
        return null;
    }
    
    return await db.users.get(session.userId);
};

window.logout = () => {
    localStorage.removeItem('session');
    sessionStorage.removeItem('session');
    window.location.href = 'index.html';
};

// Initialize
db.open()
    .then(() => {
        console.log("✅ Database opened successfully");
        return seedDatabase();
    })
    .catch(err => {
        console.error("❌ Failed to open db: " + (err.stack || err));
    });
