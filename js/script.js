const translations = {
  en: {
    "logo": "Alanoud Almarshad",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-contact": "Contact",

    "hero-title": "Full Stack Web Developer",
    "hero-subtitle": "Specializing in React, Django REST, and user-focused digital experiences.",
    "btn-projects": "View Projects",
    "btn-contact": "Contact Me",

    "about-title": "About Me",
    "about-text":
      "I’m Alanoud Almarshad, a Full Stack Web Developer passionate about building seamless, user-friendly digital experiences. I focus on creating clean, modern interfaces and efficient backend systems.",

    "skills-title": "Skills",
    "skill-frontend-title": "Frontend",
    "skill-frontend-text": "React, JavaScript, HTML, CSS",
    "skill-backend-title": "Backend",
    "skill-backend-text": "Django REST, Python",
    "skill-db-title": "Databases",
    "skill-db-text": "PostgreSQL, SQL Server, Firebase",
    "skill-soft-title": "Soft Skills",
    "skill-soft-text": "Leadership, problem-solving, bilingual communication",

    "projects-title": "Projects",
    "proj1-title": "Space App",
    "proj1-tech": "React, Django REST",
    "proj1-li1": "Focus timer with ambient sounds",
    "proj1-li2": "Responsive space-themed UI",

    "proj2-title": "ProMerge",
    "proj2-tech": "JavaScript, Firebase, OpenAI API",
    "proj2-li1": "Automated document generation",
    "proj2-li2": "Email delivery of PDFs",

    "proj3-title": "Hawalik – iOS App",
    "proj3-tech": "Swift, SwiftUI, Firebase",
    "proj3-li1": "Peer-to-peer car rental",
    "proj3-li2": "Secure flows + MapKit",

    "experience-title": "Experience",
    "exp1-title": "King Fahad Medical City",
    "exp1-date": "06/2024 – 08/2024",
    "exp1-li1": "Web/database apps using C#, SQL Server",
    "exp1-li2": "Business analysis + system design",

    "contact-title": "Contact",
    "contact-text": "Feel free to reach out!",
    "cv-download": "Download CV",

    "email-label": "Email:",
    "email-link": "alanod282@gmail.com",

    "github-label": "GitHub:",
    "github-link": "github.com/alanod455",

    "linkedin-label": "LinkedIn:",
    "linkedin-link": "linkedin.com/in/alanoud",

    "footer-text": "© 2026 Alanoud Almarshad"
  },

  ar: {
    "logo": "العنود المرشد",
    "nav-about": "نبذة",
    "nav-skills": "المهارات",
    "nav-projects": "المشاريع",
    "nav-experience": "الخبرة",
    "nav-contact": "تواصل",

    "hero-title": "مطوّرة ويب شاملة",
    "hero-subtitle": "متخصصة في React و Django REST وصناعة تجارب رقمية تركز على المستخدم.",
    "btn-projects": "عرض المشاريع",
    "btn-contact": "تواصل معي",

    "about-title": "نبذة عني",
    "about-text":
      "أنا العنود المرشد، مطوّرة ويب شاملة شغوفة ببناء تجارب رقمية سلسة وسهلة الاستخدام. أركز على تصميم واجهات حديثة ونظيفة، وبناء أنظمة خلفية فعّالة.",

    "skills-title": "المهارات",
    "skill-frontend-title": "الواجهة الأمامية",
    "skill-frontend-text": "React, JavaScript, HTML, CSS",
    "skill-backend-title": "الواجهة الخلفية",
    "skill-backend-text": "Django REST, Python",
    "skill-db-title": "قواعد البيانات",
    "skill-db-text": "PostgreSQL, SQL Server, Firebase",
    "skill-soft-title": "مهارات شخصية",
    "skill-soft-text": "القيادة، حل المشكلات، التواصل بلغتين",

    "projects-title": "المشاريع",
    "proj1-title": "Space App",
    "proj1-tech": "React, Django REST",
    "proj1-li1": "مؤقت تركيز مع أصوات محيطة",
    "proj1-li2": "واجهة فضائية متجاوبة",

    "proj2-title": "ProMerge",
    "proj2-tech": "JavaScript, Firebase, OpenAI API",
    "proj2-li1": "توليد المستندات تلقائيًا",
    "proj2-li2": "إرسال ملفات PDF عبر البريد",

    "proj3-title": "Hawalik – تطبيق iOS",
    "proj3-tech": "Swift, SwiftUI, Firebase",
    "proj3-li1": "تأجير السيارات بين المستخدمين",
    "proj3-li2": "تدفقات آمنة + الخرائط",

    "experience-title": "الخبرة",
    "exp1-title": "مدينة الملك فهد الطبية",
    "exp1-date": "06/2024 – 08/2024",
    "exp1-li1": "تطوير تطبيقات الويب وقواعد البيانات باستخدام C# و SQL Server",
    "exp1-li2": "تحليل الأعمال وتصميم الأنظمة",

    "contact-title": "تواصل",
    "contact-text": "يسعدني تواصلك!",
    "cv-download": "تحميل السيرة الذاتية",

    "email-label": "البريد الإلكتروني:",
    "email-link": "alanod282@gmail.com",

    "github-label": "جيت هب:",
    "github-link": "github.com/alanod455",

    "linkedin-label": "لينكدإن:",
    "linkedin-link": "linkedin.com/in/alanoud",

    "footer-text": "© 2026 العنود المرشد"
  }
};

function setLanguage(lang) {
  for (let key in translations[lang]) {
    const el = document.getElementById(key);

    if (key === "email-link") {
      document.getElementById("email-link").textContent = translations[lang][key];
      continue;
    }
    if (key === "github-link") {
      document.getElementById("github-link").textContent = translations[lang][key];
      continue;
    }
    if (key === "linkedin-link") {
      document.getElementById("linkedin-link").textContent = translations[lang][key];
      continue;
    }

    if (el) el.textContent = translations[lang][key];
  }

  if (lang === "ar") {
    document.body.dir = "rtl";
    document.body.style.textAlign = "right";
  } else {
    document.body.dir = "ltr";
    document.body.style.textAlign = "left";
  }
}


function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const burger = document.querySelector(".hamburger");

  menu.classList.toggle("active");
  burger.classList.toggle("open");
}


const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.15}s`;
  card.classList.add("fade-up");
});

setLanguage("en");