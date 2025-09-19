import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriCelebration() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentLang, setCurrentLang] = useState('en');

  // Initialize language from URL params
  useEffect(() => {
    const urlLang = router.query.lang;
    if (urlLang && ['en', 'hi', 'gu'].includes(urlLang)) {
      setCurrentLang(urlLang);
    }
  }, [router.query.lang]);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' }
  ];

  const translations = {
    en: {
      title: "Navratri Celebration",
      subtitle: "Nine Sacred Days, Nine Divine Forms",
      introduction: {
        title: "The Sacred Journey of Nine Nights",
        description: "Each day of Navratri honors a unique form of Goddess Durga, representing different aspects of divine feminine energy. Click on any day below to explore its spiritual significance, stories, and celebrations."
      },
      day: "Day",
      color: "Color",
      comingSoon: "Coming Soon",
      exploreDay1: "Explore Day 1 Stories",
      exploreDay2: "Explore Day 2 Stories",
      exploreDay3: "Explore Day 3 Stories",
      exploreDay4: "Explore Day 4 Stories",
      spiritualFramework: "The Spiritual Framework of Navratri",
      days13: "Days 1-3: Durga",
      days46: "Days 4-6: Lakshmi",
      days79: "Days 7-9: Saraswati",
      destructionNegativity: "Destruction of Negativity",
      abundanceProsperity: "Abundance & Prosperity",
      wisdomKnowledge: "Wisdom & Knowledge",
      days13Desc: "The first three days honor the fierce aspect that destroys ignorance, ego, and negative tendencies within us.",
      days46Desc: "The middle three days invoke prosperity, not just material wealth, but richness of spirit and heart.",
      days79Desc: "The final three days celebrate divine knowledge, wisdom, and the purity of consciousness.",
      vijayadashami: "The 10th day, Vijayadashami, celebrates the victory of good over evil and the culmination of our spiritual journey.",
      back: "Back"
    },
    hi: {
      title: "नवरात्रि उत्सव",
      subtitle: "नौ पवित्र रातें, नौ दिव्य रूप",
      introduction: {
        title: "नौ रातों की पवित्र यात्रा",
        description: "नवरात्रि का प्रत्येक दिन देवी दुर्गा के एक अनूठे रूप को समर्पित है, जो दिव्य स्त्री शक्ति के विभिन्न पहलुओं का प्रतिनिधित्व करता है। नीचे दिए गए किसी भी दिन पर क्लिक करें और उसकी आध्यात्मिक महत्ता, कहानियों और उत्सवों को जानें।"
      },
      day: "दिन",
      color: "रंग",
      comingSoon: "जल्द आ रहा है",
      exploreDay1: "दिन 1 की कहानियां जानें",
      exploreDay2: "दिन 2 की कहानियां जानें",
      exploreDay3: "दिन 3 की कहानियां जानें",
      exploreDay4: "दिन 4 की कहानियां जानें",
      spiritualFramework: "नवरात्रि की आध्यात्मिक संरचना",
      days13: "दिन 1-3: दुर्गा",
      days46: "दिन 4-6: लक्ष्मी",
      days79: "दिन 7-9: सरस्वती",
      destructionNegativity: "नकारात्मकता का नाश",
      abundanceProsperity: "समृद्धि और खुशहाली",
      wisdomKnowledge: "ज्ञान और बुद्धि",
      days13Desc: "पहले तीन दिन उस उग्र रूप की पूजा करते हैं जो हमारे भीतर अज्ञानता, अहंकार और नकारात्मक प्रवृत्तियों को नष्ट करता है।",
      days46Desc: "बीच के तीन दिन समृद्धि का आह्वान करते हैं, न केवल भौतिक धन बल्कि आत्मा और हृदय की संपन्नता।",
      days79Desc: "अंतिम तीन दिन दिव्य ज्ञान, बुद्धि और चेतना की पवित्रता का उत्सव मनाते हैं।",
      vijayadashami: "10वां दिन, विजयदशमी, बुराई पर अच्छाई की जीत और हमारी आध्यात्मिक यात्रा की परिणति का उत्सव मनाता है।",
      back: "वापस"
    },
    gu: {
      title: "નવરાત્રી ઉત્સવ",
      subtitle: "નવ પવિત્ર રાત્રિઓ, નવ દિવ્ય સ્વરૂપો",
      introduction: {
        title: "નવ રાત્રિઓની પવિત્ર યાત્રા",
        description: "નવરાત્રીનો દરેક દિવસ માતા દુર્ગાના એક અનોખા રૂપને સમર્પિત છે, જે દિવ્ય સ્ત્રી શક્તિના વિવિધ પાસાઓનું પ્રતિનિધિત્વ કરે છે. નીચે આપેલા કોઈપણ દિવસ પર ક્લિક કરો અને તેની આધ્યાત્મિક મહત્તા, વાર્તાઓ અને ઉત્સવોને જાણો।"
      },
      day: "દિવસ",
      color: "રંગ",
      comingSoon: "ટૂંક સમયમાં આવી રહ્યું છે",
      exploreDay1: "દિવસ 1ની વાર્તાઓ જાણો",
      exploreDay2: "દિવસ 2ની વાર્તાઓ જાણો",
      exploreDay3: "દિવસ 3ની વાર્તાઓ જાણો",
      exploreDay4: "દિવસ 4ની વાર્તાઓ જાણો",
      spiritualFramework: "નવરાત્રીની આધ્યાત્મિક રચના",
      days13: "દિવસ 1-3: દુર્ગા",
      days46: "દિવસ 4-6: લક્ષ્મી",
      days79: "દિવસ 7-9: સરસ્વતી",
      destructionNegativity: "નકારાત્મકતાનો નાશ",
      abundanceProsperity: "સમૃદ્ધિ અને ખુશહાલી",
      wisdomKnowledge: "જ્ઞાન અને બુદ્ધિ",
      days13Desc: "પહેલા ત્રણ દિવસો તે ક્રોધી સ્વરૂપની પૂજા કરે છે જે આપણાની અંદરની અજ્ઞાનતા, અહંકાર અને નકારાત્મક વૃત્તિઓનો નાશ કરે છે.",
      days46Desc: "મધ્યના ત્રણ દિવસો સમૃદ્ધિનું આહ્વાન કરે છે, માત્ર ભૌતિક સંપત્તિ નહીં પરંતુ આત્મા અને હૃદયની સંપન્નતા.",
      days79Desc: "અંતિમ ત્રણ દિવસો દિવ્ય જ્ઞાન, બુદ્ધિ અને ચેતનાની પવિત્રતાનો ઉત્સવ મનાવે છે.",
      vijayadashami: "10મો દિવસ, વિજયાદશમી, અશુભ પર શુભની જીત અને આપણી આધ્યાત્મિક યાત્રાની પરાકાષ્ઠાનો ઉત્સવ મનાવે છે.",
      back: "પાછા"
    }
  };

  const navratriDays = {
    en: [
      {
        day: 1, goddess: 'Shailaputri', color: 'White', meaning: 'Daughter of Mountains',
        qualities: ['Purity', 'Strength', 'New Beginnings'], emoji: '🏔️', bgGradient: 'from-gray-100 to-white'
      },
      {
        day: 2, goddess: 'Brahmacharini', color: 'Red', meaning: 'Devoted to Brahma',
        qualities: ['Wisdom', 'Penance', 'Spiritual Practice'], emoji: '🧘‍♀️', bgGradient: 'from-red-100 to-pink-100'
      },
      {
        day: 3, goddess: 'Chandraghanta', color: 'Royal Blue', meaning: 'Bell-shaped Moon',
        qualities: ['Courage', 'Protection', 'Harmony'], emoji: '🌙', bgGradient: 'from-blue-100 to-indigo-100'
      },
      {
        day: 4, goddess: 'Kushmanda', color: 'Yellow', meaning: 'Creator of Universe',
        qualities: ['Joy', 'Health', 'Prosperity'], emoji: '☀️', bgGradient: 'from-yellow-100 to-amber-100'
      },
      {
        day: 5, goddess: 'Skandamata', color: 'Green', meaning: 'Mother of Skanda',
        qualities: ['Wisdom', 'Fertility', 'Nourishment'], emoji: '🌿', bgGradient: 'from-green-100 to-emerald-100'
      },
      {
        day: 6, goddess: 'Katyayani', color: 'Grey', meaning: 'Fierce Warrior',
        qualities: ['Strength', 'Balance', 'Fearlessness'], emoji: '⚔️', bgGradient: 'from-gray-100 to-slate-100'
      },
      {
        day: 7, goddess: 'Kalaratri', color: 'Orange', meaning: 'Night of Destruction',
        qualities: ['Destruction of Evil', 'Transformation', 'Protection'], emoji: '🔥', bgGradient: 'from-orange-100 to-red-100'
      },
      {
        day: 8, goddess: 'Mahagauri', color: 'Peacock Green', meaning: 'Extremely Fair',
        qualities: ['Forgiveness', 'Peace', 'Purity'], emoji: '🪶', bgGradient: 'from-teal-100 to-cyan-100'
      },
      {
        day: 9, goddess: 'Siddhidatri', color: 'Pink', meaning: 'Giver of Perfection',
        qualities: ['Wisdom', 'Fulfillment', 'Compassion'], emoji: '🌸', bgGradient: 'from-pink-100 to-rose-100'
      }
    ],
    hi: [
      {
        day: 1, goddess: 'शैलपुत्री', color: 'सफेद', meaning: 'पर्वतों की पुत्री',
        qualities: ['पवित्रता', 'शक्ति', 'नई शुरुआत'], emoji: '🏔️', bgGradient: 'from-gray-100 to-white'
      },
      {
        day: 2, goddess: 'ब्रह्मचारिणी', color: 'लाल', meaning: 'ब्रह्म की भक्त',
        qualities: ['ज्ञान', 'तपस्या', 'आध्यात्मिक साधना'], emoji: '🧘‍♀️', bgGradient: 'from-red-100 to-pink-100'
      },
      {
        day: 3, goddess: 'चंद्रघंटा', color: 'नीला', meaning: 'घंटे के आकार का चांद',
        qualities: ['साहस', 'सुरक्षा', 'सामंजस्य'], emoji: '🌙', bgGradient: 'from-blue-100 to-indigo-100'
      },
      {
        day: 4, goddess: 'कूष्मांडा', color: 'पीला', meaning: 'ब्रह्मांड की रचयिता',
        qualities: ['आनंद', 'स्वास्थ्य', 'समृद्धि'], emoji: '☀️', bgGradient: 'from-yellow-100 to-amber-100'
      },
      {
        day: 5, goddess: 'स्कंदमाता', color: 'हरा', meaning: 'स्कंद की माता',
        qualities: ['ज्ञान', 'प्रजनन', 'पोषण'], emoji: '🌿', bgGradient: 'from-green-100 to-emerald-100'
      },
      {
        day: 6, goddess: 'कात्यायनी', color: 'धूसर', meaning: 'वीर योद्धा',
        qualities: ['शक्ति', 'संतुलन', 'निडरता'], emoji: '⚔️', bgGradient: 'from-gray-100 to-slate-100'
      },
      {
        day: 7, goddess: 'कालरात्रि', color: 'नारंगी', meaning: 'विनाश की रात्रि',
        qualities: ['बुराई का नाश', 'परिवर्तन', 'सुरक्षा'], emoji: '🔥', bgGradient: 'from-orange-100 to-red-100'
      },
      {
        day: 8, goddess: 'महागौरी', color: 'मोर हरा', meaning: 'अत्यंत गोरी',
        qualities: ['क्षमा', 'शांति', 'पवित्रता'], emoji: '🪶', bgGradient: 'from-teal-100 to-cyan-100'
      },
      {
        day: 9, goddess: 'सिद्धिदात्री', color: 'गुलाबी', meaning: 'सिद्धि प्रदान करने वाली',
        qualities: ['ज्ञान', 'पूर्णता', 'करुणा'], emoji: '🌸', bgGradient: 'from-pink-100 to-rose-100'
      }
    ],
    gu: [
      {
        day: 1, goddess: 'શૈલપુત્રી', color: 'સફેદ', meaning: 'પર્વતોની પુત્રી',
        qualities: ['પવિત્રતા', 'શક્તિ', 'નવી શરૂઆત'], emoji: '🏔️', bgGradient: 'from-gray-100 to-white'
      },
      {
        day: 2, goddess: 'બ્રહ્મચારિણી', color: 'લાલ', meaning: 'બ્રહ્માની ભક્ત',
        qualities: ['જ્ઞાન', 'તપસ્યા', 'આધ્યાત્મિક સાધના'], emoji: '🧘‍♀️', bgGradient: 'from-red-100 to-pink-100'
      },
      {
        day: 3, goddess: 'ચંદ્રઘંટા', color: 'નીલો', meaning: 'ઘંટડીના આકારનો ચંદ્ર',
        qualities: ['હિંમત', 'સુરક્ષા', 'સામંજસ્ય'], emoji: '🌙', bgGradient: 'from-blue-100 to-indigo-100'
      },
      {
        day: 4, goddess: 'કુષ્માંડા', color: 'પીળો', meaning: 'બ્રહ્માંડની રચનાકાર',
        qualities: ['આનંદ', 'આરોગ્ય', 'સમૃદ્ધિ'], emoji: '☀️', bgGradient: 'from-yellow-100 to-amber-100'
      },
      {
        day: 5, goddess: 'સ્કંદમાતા', color: 'લીલો', meaning: 'સ્કંદની માતા',
        qualities: ['જ્ઞાન', 'ફળદ્રુપતા', 'પોષણ'], emoji: '🌿', bgGradient: 'from-green-100 to-emerald-100'
      },
      {
        day: 6, goddess: 'કાત્યાયની', color: 'ધૂસર', meaning: 'વીર યોદ્ધા',
        qualities: ['શક્તિ', 'સંતુલન', 'નિર્ભયતા'], emoji: '⚔️', bgGradient: 'from-gray-100 to-slate-100'
      },
      {
        day: 7, goddess: 'કાલરાત્રિ', color: 'નારંગી', meaning: 'વિનાશની રાત્રિ',
        qualities: ['અશુભનો નાશ', 'પરિવર્તન', 'સુરક્ષા'], emoji: '🔥', bgGradient: 'from-orange-100 to-red-100'
      },
      {
        day: 8, goddess: 'મહાગૌરી', color: 'મોર લીલો', meaning: 'અત્યંત ગોરી',
        qualities: ['ક્ષમા', 'શાંતિ', 'પવિત્રતા'], emoji: '🪶', bgGradient: 'from-teal-100 to-cyan-100'
      },
      {
        day: 9, goddess: 'સિદ્ધિદાત્રી', color: 'ગુલાબી', meaning: 'સિદ્ધિ આપનાર',
        qualities: ['જ્ઞાન', 'પૂર્ણતા', 'કરુણા'], emoji: '🌸', bgGradient: 'from-pink-100 to-rose-100'
      }
    ]
  };

  const t = translations[currentLang];
  const days = navratriDays[currentLang];

  const handleDayClick = (day) => {
    if (day === 1) {
      router.push(`/navratri-day-1?lang=${currentLang}`);
    } else if (day === 2) {
      router.push(`/navratri-day-2?lang=${currentLang}`);
    } else if (day === 3) {
      router.push(`/navratri-day-3?lang=${currentLang}`);
    } else if (day === 4) {
      router.push(`/navratri-day-4?lang=${currentLang}`);
    } else {
      // For now, only Days 1-4 are implemented
      alert(`${t.day} ${day} content coming soon! 🙏`);
    }
  };

  return (
    <>
      <Head>
        <title>{t.title} - 9 Sacred Days Journey</title>
        <meta name="description" content={t.introduction.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        {/* Header */}
        <div className="bg-white shadow-lg border-b-4 border-gradient-to-r from-purple-500 to-pink-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            {/* Mobile Header */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => window.close()}
                  className="flex items-center px-3 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-all duration-200 border border-purple-200 text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {t.back}
                </button>

                {/* Language Selector */}
                <div className="relative">
                  <select
                    value={currentLang}
                    onChange={(e) => {
                      setCurrentLang(e.target.value);
                      const newQuery = { ...router.query, lang: e.target.value };
                      router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
                    }}
                    className="appearance-none bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-700 px-3 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium text-sm"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.nativeName}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🎭 {t.title} 🎭
                </h1>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{t.subtitle}</p>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-between">
              {/* Left side - Back button and Language selector */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.close()}
                  className="flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-all duration-200 border border-purple-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {t.back}
                </button>

                {/* Language Selector */}
                <div className="relative">
                  <select
                    value={currentLang}
                    onChange={(e) => {
                      setCurrentLang(e.target.value);
                      // Update URL params
                      const newQuery = { ...router.query, lang: e.target.value };
                      router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
                    }}
                    className="appearance-none bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-700 px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.nativeName}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🎭 {t.title} 🎭
                </h1>
                <p className="text-gray-600 mt-2 text-lg">{t.subtitle}</p>
              </div>

              <div className="w-32"></div> {/* Spacer for center alignment */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Introduction */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-purple-200 mb-6 sm:mb-8 mx-auto max-w-4xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                ✨ {t.introduction.title} ✨
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                {t.introduction.description}
              </p>
            </div>
          </div>

          {/* 9 Days Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {days.map((dayInfo) => (
              <div
                key={dayInfo.day}
                onClick={() => handleDayClick(dayInfo.day)}
                className={`bg-gradient-to-br ${dayInfo.bgGradient} p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-300 group`}
              >
                <div className="text-center">
                  {/* Day Number & Emoji */}
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mr-2">{dayInfo.emoji}</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700">
                      {t.day} {dayInfo.day}
                    </div>
                  </div>

                  {/* Goddess Name */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    {currentLang === 'en' ? 'Maa ' : ''}{dayInfo.goddess}
                  </h3>

                  {/* Meaning */}
                  <p className="text-sm sm:text-base text-gray-600 italic mb-3">
                    "{dayInfo.meaning}"
                  </p>

                  {/* Color */}
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-white bg-opacity-70 rounded-full text-xs sm:text-sm font-semibold text-gray-700">
                      {t.color}: {dayInfo.color}
                    </span>
                  </div>

                  {/* Qualities */}
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {dayInfo.qualities.map((quality, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {quality}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-200 border-opacity-50">
                    <span className={`text-xs sm:text-sm font-semibold ${dayInfo.day === 1 || dayInfo.day === 2 || dayInfo.day === 3 || dayInfo.day === 4 ? 'text-purple-600' : 'text-gray-500'} group-hover:text-purple-700 transition-colors`}>
                      {dayInfo.day === 1 ? `🪔 ${t.exploreDay1}` : dayInfo.day === 2 ? `🪔 ${t.exploreDay2}` : dayInfo.day === 3 ? `🪔 ${t.exploreDay3}` : dayInfo.day === 4 ? `🪔 ${t.exploreDay4}` : `🔒 ${t.comingSoon}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spiritual Framework Section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-purple-200">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
              🕉️ {t.spiritualFramework}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* First Trilogy */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗡️</div>
                <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-2 sm:mb-3">{t.days13}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 font-semibold">{t.destructionNegativity}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t.days13Desc}
                </p>
              </div>

              {/* Second Trilogy */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-bold text-yellow-600 mb-2 sm:mb-3">{t.days46}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 font-semibold">{t.abundanceProsperity}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t.days46Desc}
                </p>
              </div>

              {/* Third Trilogy */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3">{t.days79}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 font-semibold">{t.wisdomKnowledge}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {t.days79Desc}
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <p className="text-center text-sm sm:text-base text-gray-700 italic">
                "{t.vijayadashami}" 🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}