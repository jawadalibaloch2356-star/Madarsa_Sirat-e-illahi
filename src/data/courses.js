export const courseCategories = [
  { id: "all", label: "All Courses" },
  { id: "quran", label: "Quranic Studies" },
  { id: "language", label: "Arabic Language" },
  { id: "sharia", label: "Islamic Studies" }
];

export const coursesData = [
  {
    id: "quran-reading",
    title: "Quran Reading & Qaida (Nazira)",
    category: "quran",
    categoryLabel: "Quranic Studies",
    level: "Beginner",
    duration: "6 - 12 Months",
    image: "/images/course_quran.jpg",
    description: "Foundational course focusing on correct pronunciation of Arabic alphabets, basic reading rules, and fluent Quranic recitation.",
    highlights: [
      "Letter recognition and articulation points (Makharij)",
      "Vowel markings and basic word joining",
      "Paced reading practice under expert supervision"
    ]
  },
  {
    id: "tajweed-rules",
    title: "Tajweed & Recitation Excellence",
    category: "quran",
    categoryLabel: "Quranic Studies",
    level: "Intermediate",
    duration: "4 Months",
    image: "/images/course_tajweed.jpg",
    description: "In-depth mastery of Tajweed rules, phonetics, elongation (Madd), stop marks (Waqf), and melodic Quranic recitation.",
    highlights: [
      "Rules of Nun Sakinah, Tanween, and Meem Sakinah",
      "Correct characteristics of letters (Sifaat)",
      "Practical correction of common recitation mistakes"
    ]
  },
  {
    id: "hifz-memorization",
    title: "Hifz-ul-Quran (Memorization Program)",
    category: "quran",
    categoryLabel: "Quranic Studies",
    level: "All Levels",
    duration: "2 - 3 Years",
    image: "/images/Hifz.jpeg",
    description: "A structured, disciplined program designed to guide dedicated students through full Quranic memorization with rigorous daily revision.",
    highlights: [
      "Personalized daily lesson plans (Sabaq)",
      "Daily recent revision (Sabaqi) and overall review (Manzil)",
      "Character development and spiritual mentorship"
    ]
  },
  
  {
    id: "islamic-studies",
    title: "Islamic Studies & Hadith Foundations",
    category: "sharia",
    categoryLabel: "Islamic Studies",
    level: "All Levels",
    duration: "1 Year",
    image: "/images/Deeniyat.jpeg",
    description: "Essential knowledge covering Islamic Creed (Aqeedah), Jurisprudence (Fiqh of Worship), Seerah, and Hadith studies.",
    highlights: [
      "Foundational tenets of faith and core beliefs",
      "Practical Fiqh of daily worship, purity, and ethics",
      "Prophetic biographical study and Hadith commentary"
    ]
  }
];
