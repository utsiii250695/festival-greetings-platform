import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay2() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('story');
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
      backToNavratri: "Back to Navratri",
      day2: "Day 2",
      goddess: "Maa Brahmacharini",
      meaning: "The Devoted Seeker of Knowledge",
      todaysColor: "Today's Color",
      red: "Red",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Brahmacharini Bless You",
      blessingDesc: "With unwavering devotion, endless knowledge, and the strength to pursue your highest spiritual goals. Continue your Navratri journey with her divine wisdom.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Continue your spiritual journey",
      day3Coming: "Day 3 coming soon! 🙏",
      day3Button: "Day 3: Maa Chandraghanta 🌙",
      backToDay1: "← Day 1: Maa Shailaputri"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day2: "दिन 2",
      goddess: "माँ ब्रह्मचारिणी",
      meaning: "ज्ञान की समर्पित साधिका",
      todaysColor: "आज का रंग",
      red: "लाल",
      tabs: {
        story: "📖 पवित्र कथा",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 विधियाँ व प्रार्थनाएं",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ ब्रह्मचारिणी आपको आशीर्वाद दें",
      blessingDesc: "अटूट भक्ति, असीम ज्ञान और आपके सर्वोच्च आध्यात्मिक लक्ष्यों को प्राप्त करने की शक्ति के साथ। उनकी दिव्य बुद्धि के साथ अपनी नवरात्रि यात्रा जारी रखें।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जाप करें",
      continueJourney: "अपनी आध्यात्मिक यात्रा जारी रखें",
      day3Coming: "दिन 3 जल्दी आ रहा है! 🙏",
      day3Button: "दिन 3: माँ चंद्रघंटा 🌙",
      backToDay1: "← दिन 1: माँ शैलपुत्री"
    },
    gu: {
      backToNavratri: "નવરાત્રિ પર પાછા",
      day2: "દિવસ 2",
      goddess: "માં બ્રહ્મચારિણી",
      meaning: "જ્ઞાનની સમર્પિત સાધિકા",
      todaysColor: "આજનો રંગ",
      red: "લાલ",
      tabs: {
        story: "📖 પવિત્ર કથા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 વિધિઓ અને પ્રાર્થનાઓ",
        modern: "🌟 આધુનિક સંદર્ભ"
      },
      blessing: "માં બ્રહ્મચારિણી તમને આશીર્વાદ આપે",
      blessingDesc: "અટૂટ ભક્તિ, અનંત જ્ઞાન અને તમારા સર્વોચ્ચ આધ્યાત્મિક લક્ષ્યો પ્રાપ્ત કરવાની શક્તિ સાથે. તેમની દિવ્ય બુદ્ધિ સાથે તમારી નવરાત્રિ યાત્રા ચાલુ રાખો.",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "મહત્તમ આશીર્વાદ માટે આ 108 વખત જાપ કરો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા ચાલુ રાખો",
      day3Coming: "દિવસ 3 જલ્દી આવે છે! 🙏",
      day3Button: "દિવસ 3: માં ચંદ્રઘંટા 🌙",
      backToDay1: "← દિવસ 1: માં શૈલપુત્રી"
    }
  };

  const content = {
    en: {
      story: {
        title: "The Birth of Maa Brahmacharini",
        content: [
          {
            heading: "The Path of Severe Penance",
            text: "After her birth as Parvati, the daughter of mountains, she was determined to win Lord Shiva's heart through devotion and penance. She left the comforts of her father's palace and went to the dense forests to perform severe austerities. For thousands of years, she survived only on fruits and vegetables, then only on leaves, and eventually gave up even that, earning her the name 'Aparna' (one who doesn't even eat leaves).",
            anecdote: "🍃 Amazing fact: During her penance, she survived for 1000 years eating only fruits, then 100 years eating only leaves, and then completely gave up food and water for many years!"
          },
          {
            heading: "The Ultimate Test of Devotion",
            text: "Her penance was so intense that it created heat that threatened to destroy the three worlds. The gods themselves became worried and requested Lord Brahma to intervene. Seeing her unmatched devotion and determination, even the cosmic forces had to acknowledge her spiritual power. She meditated in scorching summers, freezing winters, and torrential rains without any shelter.",
            anecdote: "🔥 Legend says her tapasya was so powerful that it created a divine glow around her that could be seen from the heavens - even the sun seemed dim in comparison!"
          },
          {
            heading: "Recognition and Union",
            text: "Finally, Lord Shiva, impressed by her unprecedented devotion and penance, appeared before her. He acknowledged that no one in the universe had shown such dedication to spiritual pursuit. Their divine marriage represents the union of devotion (Shakti) with consciousness (Shiva), showing us that ultimate spiritual realization comes through unwavering dedication.",
            anecdote: "💫 The moment Lord Shiva accepted her, the entire universe celebrated - flowers rained from the sky, and divine beings sang celestial songs!"
          }
        ]
      },
      significance: {
        title: "Day 2 Spiritual Significance",
        content: [
          {
            heading: "Sacral Chakra Connection",
            text: "Maa Brahmacharini governs the Sacral Chakra (Swadhisthana), located below the navel. This chakra represents creativity, relationships, sexuality, and our emotional well-being. Her worship helps us balance our emotional responses and channel our creative energies properly.",
            anecdote: "🧡 The sacral chakra glows in beautiful orange color - the color of creativity, enthusiasm, and emotional balance!"
          },
          {
            heading: "The Power of Self-Discipline",
            text: "Her name 'Brahmacharini' means 'one who practices Brahmacharya' - the path of celibacy and spiritual discipline. She teaches us that true strength comes from self-control and that spiritual progress requires sacrificing immediate pleasures for higher goals.",
            anecdote: "💪 Modern insight: Just like athletes train rigorously for Olympic gold, spiritual seekers practice brahmacharya for the ultimate prize - self-realization!"
          },
          {
            heading: "Knowledge and Wisdom",
            text: "She holds a rosary (japamala) in one hand and a water pot (kamandal) in the other, representing the pursuit of knowledge through prayer and purification. She is the patron of students, researchers, and all those who seek knowledge and wisdom.",
            anecdote: "📿 Pro tip: Students often keep a small rosary on their study desk and chant her mantra before important exams for enhanced focus and memory!"
          }
        ]
      },
      rituals: {
        title: "Day 2 Sacred Rituals",
        content: [
          {
            heading: "Morning Worship",
            text: "Wake up before sunrise and offer red flowers (especially hibiscus or roses) to Maa Brahmacharini. Red represents the fire of devotion and determination. Light a ghee lamp and chant 'Om Devi Brahmacharinyai Namah' 108 times while meditating on her serene form.",
            anecdote: "🌹 Secret: If you can't find red flowers, offer red colored sweets or even red cloth - the goddess appreciates the sentiment behind the offering!"
          },
          {
            heading: "Study and Learning Rituals",
            text: "This is the perfect day to begin any new learning endeavor. Place your books and study materials near her image, and ask for her blessings for knowledge and wisdom. Many devotees start new courses or educational pursuits on this day.",
            anecdote: "📚 Student success story: A medical student from Mumbai credits her daily prayers to Maa Brahmacharini for her success in clearing the NEET exam on her first attempt!"
          },
          {
            heading: "Fasting and Austerity",
            text: "Observe a fast and eat simple, pure food. Many devotees consume only fruits, milk, or water. The key is to practice some form of self-restraint in honor of her severe penance. Wear red or orange clothes to honor her energy.",
            anecdote: "🥛 Modern twist: You can offer and consume red-colored healthy smoothies (strawberry, watermelon) as prasadam - staying healthy while honoring tradition!"
          },
          {
            heading: "Evening Prayers",
            text: "In the evening, perform aarti with camphor, sing bhajans about her penance and devotion, and share prasadam with family and neighbors. Read or listen to stories of great devotees who achieved their goals through persistent effort.",
            anecdote: "🎵 Musical devotion: Playing soft instrumental music during meditation creates a peaceful atmosphere - Maa Brahmacharini appreciates serene, focused worship!"
          }
        ]
      },
      modern: {
        title: "Maa Brahmacharini in Modern Life",
        content: [
          {
            heading: "Goal Achievement and Persistence",
            text: "In today's world of instant gratification, Maa Brahmacharini teaches us the value of long-term commitment and persistent effort. Whether it's building a career, learning a skill, or pursuing fitness goals, her energy helps us stay focused and disciplined.",
            anecdote: "🎯 Success story: A startup founder from Bengaluru practiced daily meditation to Maa Brahmacharini during his company's difficult early years - he credits her guidance for his eventual breakthrough!"
          },
          {
            heading: "Academic Excellence",
            text: "Students preparing for competitive exams, pursuing higher degrees, or conducting research find her blessings particularly powerful. She helps overcome the distractions of modern life and maintain focus on educational goals.",
            anecdote: "🎓 Study hack: Many IIT and medical college students keep her image in their study rooms and follow the '108 chants before study' routine for better concentration!"
          },
          {
            heading: "Relationship Wisdom",
            text: "Her balanced approach to relationships - passionate yet disciplined - helps modern individuals navigate complex relationship dynamics. She teaches us when to be devoted and when to maintain healthy boundaries.",
            anecdote: "💕 Relationship tip: Couples often pray to her together for patience and understanding during challenging times in their marriage or partnership!"
          },
          {
            heading: "Digital Detox and Mindfulness",
            text: "In our hyper-connected world, her example of renunciation inspires us to take regular breaks from technology and social media. She encourages mindful living and conscious choices about what we consume mentally and emotionally.",
            anecdote: "📱 Modern austerity: Many young professionals observe 'Brahmacharini hours' - dedicated phone-free time for study, meditation, or meaningful conversations!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "माँ ब्रह्मचारिणी का जन्म",
        content: [
          {
            heading: "कठोर तपस्या का मार्ग",
            text: "पर्वतों की पुत्री पार्वती के रूप में जन्म लेने के बाद, वह भक्ति और तपस्या के माध्यम से भगवान शिव का हृदय जीतने के लिए दृढ़ संकल्पित थीं। उन्होंने अपने पिता के महल के आराम को त्याग दिया और कठोर तपस्या करने के लिए घने जंगलों में चली गईं। हजारों सालों तक वे केवल फल और सब्जियों पर जीवित रहीं, फिर केवल पत्तों पर, और अंततः उसे भी त्याग दिया, जिससे उन्हें 'अपर्णा' (जो पत्ते भी नहीं खाती) नाम मिला।",
            anecdote: "🍃 आश्चर्यजनक तथ्य: अपनी तपस्या के दौरान, उन्होंने 1000 साल केवल फल खाकर जीवन बिताया, फिर 100 साल केवल पत्ते खाकर, और फिर कई वर्षों तक भोजन और पानी दोनों का पूर्ण त्याग कर दिया!"
          },
          {
            heading: "भक्ति की अंतिम परीक्षा",
            text: "उनकी तपस्या इतनी तीव्र थी कि इससे उत्पन्न गर्मी से तीनों लोकों के नष्ट होने का खतरा पैदा हो गया। देवता स्वयं चिंतित हो गए और भगवान ब्रह्मा से हस्तक्षेप करने का अनुरोध किया। उनकी अतुलनीय भक्ति और दृढ़ता देखकर, ब्रह्मांडीय शक्तियों को भी उनकी आध्यात्मिक शक्ति को स्वीकार करना पड़ा। उन्होंने तपती गर्मियों, जमाने वाली ठंड और मूसलाधार बारिश में बिना किसी आश्रय के ध्यान किया।",
            anecdote: "🔥 पौराणिक कथा कहती है कि उनकी तपस्या इतनी शक्तिशाली थी कि इसने उनके चारों ओर एक दिव्य प्रकाश उत्पन्न किया जो स्वर्गलोक से दिखाई देता था - सूर्य भी उसकी तुलना में मद्धिम लगता था!"
          },
          {
            heading: "मान्यता और मिलन",
            text: "अंततः, भगवान शिव, उनकी अभूतपूर्व भक्ति और तपस्या से प्रभावित होकर, उनके सामने प्रकट हुए। उन्होंने स्वीकार किया कि ब्रह्मांड में किसी ने भी आध्यात्मिक साधना के प्रति इतनी समर्पणा नहीं दिखाई थी। उनका दिव्य विवाह भक्ति (शक्ति) का चेतना (शिव) के साथ मिलन दर्शाता है, जो हमें यह सिखाता है कि परम आध्यात्मिक अनुभूति अटूट समर्पण से ही आती है।",
            anecdote: "💫 जिस क्षण भगवान शिव ने उन्हें स्वीकार किया, पूरे ब्रह्मांड ने उत्सव मनाया - आकाश से फूल बरसे और दिव्य प्राणियों ने स्वर्गीय गीत गाए!"
          }
        ]
      },
      significance: {
        title: "दिन 2 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "स्वाधिष्ठान चक्र का संबंध",
            text: "माँ ब्रह्मचारिणी स्वाधिष्ठान चक्र को नियंत्रित करती हैं, जो नाभि के नीचे स्थित है। यह चक्र रचनात्मकता, रिश्तों, कामुकता और हमारी भावनात्मक भलाई का प्रतिनिधित्व करता है। उनकी पूजा से हमारी भावनात्मक प्रतिक्रियाओं को संतुलित करने और रचनात्मक ऊर्जाओं को सही तरीके से प्रवाहित करने में मदद मिलती है।",
            anecdote: "🧡 स्वाधिष्ठान चक्र सुंदर नारंगी रंग में चमकता है - रचनात्मकता, उत्साह और भावनात्मक संतुलन का रंग!"
          },
          {
            heading: "आत्म-अनुशासन की शक्ति",
            text: "उनका नाम 'ब्रह्मचारिणी' का अर्थ है 'जो ब्रह्मचर्य का पालन करती है' - संयम और आध्यात्मिक अनुशासन का मार्ग। वे हमें सिखाती हैं कि सच्ची शक्ति आत्म-नियंत्रण से आती है और आध्यात्मिक प्रगति के लिए उच्च लक्ष्यों के लिए तत्काल सुखों का बलिदान आवश्यक है।",
            anecdote: "💪 आधुनिक दृष्टिकोण: जैसे एथलीट ओलंपिक स्वर्ण के लिए कठोर प्रशिक्षण करते हैं, वैसे ही आध्यात्मिक साधक परम पुरस्कार - आत्म-साक्षात्कार के लिए ब्रह्मचर्य का अभ्यास करते हैं!"
          },
          {
            heading: "ज्ञान और बुद्धि",
            text: "वे एक हाथ में जपमाला और दूसरे हाथ में कमंडल धारण करती हैं, जो प्रार्थना और शुद्धीकरण के माध्यम से ज्ञान की खोज का प्रतिनिधित्व करते हैं। वे छात्रों, शोधकर्ताओं और सभी ज्ञान व बुद्धि चाहने वालों की संरक्षक हैं।",
            anecdote: "📿 गुरु मंत्र: छात्र अक्सर अपनी पढ़ाई की मेज पर एक छोटी जपमाला रखते हैं और बेहतर एकाग्रता और स्मृति के लिए महत्वपूर्ण परीक्षाओं से पहले उनका मंत्र जाप करते हैं!"
          }
        ]
      },
      rituals: {
        title: "दिन 2 की पवित्र विधियाँ",
        content: [
          {
            heading: "प्रातःकालीन पूजा",
            text: "सूर्योदय से पहले उठें और माँ ब्रह्मचारिणी को लाल फूल (खासकर जासुम या गुलाब) चढ़ाएं। लाल रंग भक्ति और दृढ़ता की अग्नि का प्रतिनिधित्व करता है। घी का दीपक जलाएं और उनके शांत रूप पर ध्यान करते हुए 'ॐ देवी ब्रह्मचारिण्यै नमः' 108 बार जाप करें।",
            anecdote: "🌹 रहस्य: यदि आपको लाल फूल न मिलें, तो लाल रंग की मिठाइयां या यहाँ तक कि लाल कपड़ा भी चढ़ा सकते हैं - देवी अर्पण के पीछे की भावना की सराहना करती हैं!"
          },
          {
            heading: "अध्ययन और शिक्षा की विधियाँ",
            text: "यह कोई भी नया शिक्षण कार्य शुरू करने का आदर्श दिन है। अपनी किताबें और अध्ययन सामग्री उनकी तस्वीर के पास रखें, और ज्ञान व बुद्धि के लिए उनका आशीर्वाद मांगें। कई भक्त इस दिन नए कोर्स या शैक्षणिक प्रयास शुरू करते हैं।",
            anecdote: "📚 छात्र सफलता की कहानी: मुंबई की एक मेडिकल छात्रा माँ ब्रह्मचारिणी की दैनिक प्रार्थनाओं का श्रेय अपनी पहली कोशिश में NEET परीक्षा पास करने को देती है!"
          },
          {
            heading: "उपवास और तपस्या",
            text: "उपवास रखें और सादा, शुद्ध भोजन करें। कई भक्त केवल फल, दूध या पानी का सेवन करते हैं। मुख्य बात उनकी कठोर तपस्या के सम्मान में किसी प्रकार का आत्म-संयम करना है। उनकी ऊर्जा का सम्मान करने के लिए लाल या नारंगी वस्त्र धारण करें।",
            anecdote: "🥛 आधुनिक ट्विस्ट: आप प्रसादम के रूप में लाल रंग की स्वस्थ स्मूदी (स्ट्रॉबेरी, तरबूज) चढ़ा और पी सकते हैं - परंपरा का सम्मान करते हुए स्वस्थ रहना!"
          },
          {
            heading: "सांझ की प्रार्थनाएं",
            text: "शाम को कपूर से आरती करें, उनकी तपस्या और भक्ति के भजन गाएं, और परिवार व पड़ोसियों के साथ प्रसाद बांटें। महान भक्तों की कहानियां पढ़ें या सुनें जिन्होंने निरंतर प्रयास से अपने लक्ष्य प्राप्त किए।",
            anecdote: "🎵 संगीतमय भक्ति: ध्यान के दौरान मधुर वाद्य संगीत बजाना शांतिपूर्ण वातावरण बनाता है - माँ ब्रह्मचारिणी शांत, केंद्रित पूजा की सराहना करती हैं!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ ब्रह्मचारिणी",
        content: [
          {
            heading: "लक्ष्य प्राप्ति और दृढ़ता",
            text: "त्वरित संतुष्टि की आज की दुनिया में, माँ ब्रह्मचारिणी हमें दीर्घकालिक प्रतिबद्धता और निरंतर प्रयास का मूल्य सिखाती हैं। चाहे वह करियर बनाना हो, कोई कौशल सीखना हो, या फिटनेस लक्ष्य पूरे करने हों, उनकी ऊर्जा हमें केंद्रित और अनुशासित रहने में मदद करती है।",
            anecdote: "🎯 सफलता की कहानी: बेंगलुरु के एक स्टार्टअप संस्थापक ने अपनी कंपनी के कठिन प्रारंभिक वर्षों के दौरान माँ ब्रह्मचारिणी की दैनिक ध्यान साधना की - वे अपनी अंतिम सफलता का श्रेय उनके मार्गदर्शन को देते हैं!"
          },
          {
            heading: "शैक्षणिक उत्कृष्टता",
            text: "प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्र, उच्च डिग्री हासिल करने वाले, या अनुसंधान करने वाले उनके आशीर्वाद को विशेष रूप से शक्तिशाली पाते हैं। वे आधुनिक जीवन की विकर्षणों को दूर करने और शैक्षणिक लक्ष्यों पर ध्यान बनाए रखने में मदद करती हैं।",
            anecdote: "🎓 अध्ययन हैक: कई IIT और मेडिकल कॉलेज के छात्र अपने अध्ययन कक्ष में उनकी तस्वीर रखते हैं और बेहतर एकाग्रता के लिए 'अध्ययन से पहले 108 जाप' की दिनचर्या अपनाते हैं!"
          },
          {
            heading: "रिश्तों की बुद्धि",
            text: "रिश्तों के प्रति उनका संतुलित दृष्टिकोण - भावुक फिर भी अनुशासित - आधुनिक व्यक्तियों को जटिल रिश्तों की गतिशीलता को समझने में मदद करता है। वे हमें सिखाती हैं कि कब समर्पित होना है और कब स्वस्थ सीमाएं बनाए रखनी हैं।",
            anecdote: "💕 रिश्ते की सलाह: जोड़े अक्सर अपनी शादी या साझेदारी में चुनौतीपूर्ण समयों के दौरान धैर्य और समझ के लिए एक साथ उनसे प्रार्थना करते हैं!"
          },
          {
            heading: "डिजिटल डिटॉक्स और माइंडफुलनेस",
            text: "हमारी अति-संयुक्त दुनिया में, उनका त्याग का उदाहरण हमें प्रौद्योगिकी और सोशल मीडिया से नियमित विराम लेने की प्रेरणा देता है। वे सचेत जीवन और हम मानसिक व भावनात्मक रूप से क्या उपभोग करते हैं, उसके बारे में सचेत विकल्प बनाने को प्रोत्साहित करती हैं।",
            anecdote: "📱 आधुनिक तपस्या: कई युवा पेशेवर 'ब्रह्मचारिणी घंटे' का पालन करते हैं - अध्ययन, ध्यान या सार्थक बातचीत के लिए समर्पित फोन-मुक्त समय!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "માં બ્રહ્મચારિણીનો જન્મ",
        content: [
          {
            heading: "કઠોર તપસ્યાનો માર્ગ",
            text: "પર્વતોની પુત્રી પાર્વતી તરીકે જન્મ લીધા પછી, તેઓ ભક્તિ અને તપસ્યા દ્વારા ભગવાન શિવનું હૃદય જીતવા માટે દ્રઢ સંકલ્પિત હતા. તેમણે પોતાના પિતાના મહેલના આરામનો ત્યાગ કર્યો અને કઠોર તપસ્યા કરવા માટે ઘન જંગલોમાં ગયા. હજારો વર્ષો સુધી તેઓ ફક્ત ફળ અને શાકભાજી પર જીવ્યા, પછી ફક્ત પાંદડા પર, અને અંતે તે પણ છોડી દીધા, જેનાથી તેમને 'અપર્ણા' (જે પાંદડા પણ ખાતા નથી) નામ મળ્યું.",
            anecdote: "🍃 આશ્ચર્યજનક હકીકત: તેમની તપસ્યા દરમિયાન, તેઓએ 1000 વર્ષ ફક્ત ફળ ખાઈને જીવન વિતાવ્યું, પછી 100 વર્ષ ફક્ત પાંદડા ખાઈને, અને પછી ઘણા વર્ષો સુધી ખોરાક અને પાણી બંનેનો સંપૂર્ણ ત્યાગ કર્યો!"
          },
          {
            heading: "ભક્તિની અંતિમ કસોટી",
            text: "તેમની તપસ્યા એટલી તીવ્ર હતી કે તેનાથી ઉત્પન્ન ગરમીથી ત્રણેય લોકોના નાશનો ભય સર્જાયો. દેવતાઓ પોતે ચિંતિત થઈ ગયા અને ભગવાન બ્રહ્માને હસ્તક્ષેપ કરવા વિનંતી કરી. તેમની અતુલનીય ભક્તિ અને દ્રઢતા જોઈને, બ્રહ્માંડીય શક્તિઓએ પણ તેમની આધ્યાત્મિક શક્તિને સ્વીકારવી પડી. તેમણે તીવ્ર ઉનાળામાં, થીજાવી દેતી ઠંડીમાં અને મુશળધાર વરસાદમાં કોઈ આશ્રય વિના ધ્યાન કર્યું.",
            anecdote: "🔥 દંતકથા કહે છે કે તેમની તપસ્યા એટલી શક્તિશાળી હતી કે તેણે તેમની આસપાસ દિવ્ય પ્રકાશ સર્જ્યો જે સ્વર્ગલોકથી દેખાતો હતો - સૂર્ય પણ તેની સરખામણીમાં મંદ લાગતો હતો!"
          },
          {
            heading: "માન્યતા અને મિલન",
            text: "અંતે, ભગવાન શિવ, તેમની અભૂતપૂર્વ ભક્તિ અને તપસ્યાથી પ્રભાવિત થઈને, તેમની સમક્ષ પ્રગટ થયા. તેમણે સ્વીકાર્યું કે બ્રહ્માંડમાં કોઈએ પણ આધ્યાત્મિક સાધના પ્રત્યે આટલી સમર્પણા દર્શાવી ન હતી. તેમના દિવ્ય લગ્ન ભક્તિ (શક્તિ)નું ચેતના (શિવ) સાથે મિલન દર્શાવે છે, જે આપણને શીખવે છે કે પરમ આધ્યાત્મિક અનુભૂતિ અટૂટ સમર્પણથી જ આવે છે.",
            anecdote: "💫 જે ક્ષણે ભગવાન શિવે તેમને સ્વીકાર્યા, સમગ્ર બ્રહ્માંડે ઉત્સવ મનાવ્યો - આકાશમાંથી ફૂલો વરસ્યા અને દિવ્ય પ્રાણીઓએ સ્વર્ગીય ગીતો ગાયા!"
          }
        ]
      },
      significance: {
        title: "દિવસ 2 નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "સ્વાધિષ્ઠાન ચક્રનો સંબંધ",
            text: "માં બ્રહ્મચારિણી સ્વાધિષ્ઠાન ચક્રને નિયંત્રિત કરે છે, જે નાભિની નીચે સ્થિત છે. આ ચક્ર સર્જનાત્મકતા, સંબંધો, કામુકતા અને આપણી ભાવનાત્મક સુખાકારીનું પ્રતિનિધિત્વ કરે છે. તેમની પૂજાથી આપણી ભાવનાત્મક પ્રતિક્રિયાઓને સંતુલિત કરવામાં અને સર્જનાત્મક ઊર્જાઓને યોગ્ય રીતે વાળવામાં મદદ મળે છે.",
            anecdote: "🧡 સ્વાધિષ્ઠાન ચક્ર સુંદર નારંગી રંગમાં ચમકે છે - સર્જનાત્મકતા, ઉત્સાહ અને ભાવનાત્મક સંતુલનનો રંગ!"
          },
          {
            heading: "આત્મ-અનુશાસનની શક્તિ",
            text: "તેમના 'બ્રહ્મચારિણી' નામનો અર્થ છે 'જે બ્રહ્મચર્યનું પાલન કરે છે' - સંયમ અને આધ્યાત્મિક અનુશાસનનો માર્ગ. તેઓ આપણને શીખવે છે કે સાચી શક્તિ આત્મ-નિયંત્રણથી આવે છે અને આધ્યાત્મિક પ્રગતિ માટે ઉચ્ચ ધ્યેયો માટે તાત્કાલિક સુખોનું બલિદાન જરૂરી છે.",
            anecdote: "💪 આધુનિક દૃષ્ટિકોણ: જેમ એથલીટ્સ ઓલિમ્પિક ગોલ્ડ માટે કઠોર તાલીમ કરે છે, તેમ આધ્યાત્મિક સાધકો પરમ ઇનામ - આત્મ-સાક્ષાત્કાર માટે બ્રહ્મચર્યનું અભ્યાસ કરે છે!"
          },
          {
            heading: "જ્ઞાન અને બુદ્ધિ",
            text: "તેઓ એક હાથમાં જપમાળા અને બીજા હાથમાં કમંડલ ધારણ કરે છે, જે પ્રાર્થના અને શુદ્ધિકરણ દ્વારા જ્ઞાનની શોધનું પ્રતિનિધિત્વ કરે છે. તેઓ વિદ્યાર્થીઓ, સંશોધકો અને બધા જ્ઞાન વ બુદ્ધિ ઇચ્છનારાઓના સંરક્ષક છે.",
            anecdote: "📿 ગુરુ મંત્ર: વિદ્યાર્થીઓ અકસર તેમના અભ્યાસની ટેબલ પર નાની જપમાળા રાખે છે અને વધુ સારી એકાગ્રતા અને સ્મૃતિ માટે મહત્વપૂર્ણ પરીક્ષાઓ પહેલાં તેમના મંત્રનો જાપ કરે છે!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 2 ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "પ્રાતઃકાલીન પૂજા",
            text: "સૂર્યોદય પહેલાં ઉઠો અને માં બ્રહ્મચારિણીને લાલ ફૂલો (ખાસ કરીને જાસવંતી કે ગુલાબ) અર્પણ કરો. લાલ રંગ ભક્તિ અને દ્રઢતાની અગ્નિનું પ્રતિનિધિત્વ કરે છે. ઘીનો દીવો પ્રગટાવો અને તેમના શાંત સ્વરૂપ પર ધ્યાન કરતાં 'ॐ દેવી બ્રહ્મચારિણ્યૈ નમઃ' 108 વખત જાપ કરો.",
            anecdote: "🌹 રહસ્ય: જો તમને લાલ ફૂલો ન મળે, તો લાલ રંગની મિઠાઈઓ કે લાલ કપડું પણ અર્પણ કરી શકો - દેવી અર્પણ પાછળની ભાવનાની પ્રશંસા કરે છે!"
          },
          {
            heading: "અભ્યાસ અને શિક્ષણની વિધિઓ",
            text: "આ કોઈ પણ નયા શિક્ષણ કાર્યની શરૂઆત કરવાનો આદર્શ દિવસ છે. તમારા પુસ્તકો અને અભ્યાસ સામગ્રી તેમની તસવીર પાસે રાખો, અને જ્ઞાન વ બુદ્ધિ માટે તેમનો આશીર્વાદ માંગો. ઘણા ભક્તો આ દિવસે નયા કોર્સ કે શૈક્ષણિક પ્રયાસોની શરૂઆત કરે છે.",
            anecdote: "📚 વિદ્યાર્થીની સફળતાની વાર્તા: મુંબઈની એક મેડિકલ વિદ્યાર્થીનીએ માં બ્રહ્મચારિણીની દૈનિક પ્રાર્થનાઓનો શ્રેય પોતાની પહેલી કોશિશમાં NEET પરીક્ષા પાસ કરવામાં આપ્યો છે!"
          },
          {
            heading: "ઉપવાસ અને તપસ્યા",
            text: "ઉપવાસ રાખો અને સાદો, શુદ્ધ ખોરાક કરો. ઘણા ભક્તો ફક્ત ફળ, દૂધ કે પાણીનું સેવન કરે છે. મુખ્ય વાત તેમની કઠોર તપસ્યાના સન્માનમાં કોઈ પ્રકારનો આત્મ-સંયમ કરવાની છે. તેમની ઊર્જાનું સન્માન કરવા માટે લાલ કે નારંગી વસ્ત્રો ધારણ કરો.",
            anecdote: "🥛 આધુનિક ટ્વિસ્ટ: તમે પ્રસાદમ તરીકે લાલ રંગની તંદુરસ્ત સ્મૂધી (સ્ટ્રોબેરી, તરબૂચ) અર્પણ કરી અને પી શકો - પરંપરાનું સન્માન કરતાં તંદુરસ્ત રહેવું!"
          },
          {
            heading: "સાંજની પ્રાર્થનાઓ",
            text: "સાંજે કપૂરથી આરતી કરો, તેમની તપસ્યા અને ભક્તિના ભજનો ગાઓ, અને કુટુંબ વ પડોશીઓ સાથે પ્રસાદ વહેંચો. મહાન ભક્તોની વાર્તાઓ વાંચો કે સાંભળો જેમણે સતત પ્રયાસથી પોતાના ધ્યેયો પ્રાપ્ત કર્યા.",
            anecdote: "🎵 સંગીતમય ભક્તિ: ધ્યાન દરમિયાન મધુર વાદ્ય સંગીત વગાડવાથી શાંતિપૂર્ણ વાતાવરણ બને છે - માં બ્રહ્મચારિણી શાંત, કેન્દ્રિત પૂજાની પ્રશંસા કરે છે!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં બ્રહ્મચારિણી",
        content: [
          {
            heading: "ધ્યેય પ્રાપ્તિ અને દ્રઢતા",
            text: "ત્વરિત સંતોષની આજની દુનિયામાં, માં બ્રહ્મચારિણી આપણને લાંબાગાળાની પ્રતિબદ્ધતા અને સતત પ્રયાસનું મૂલ્ય શીખવે છે. પછી તે કારકિર્દી બનાવવાનું હોય, કોઈ કૌશલ્ય શીખવાનું હોય, કે ફિટનેસ ધ્યેયો પૂરા કરવાના હોય, તેમની ઊર્જા આપણને કેન્દ્રિત અને અનુશાસિત રહેવામાં મદદ કરે છે.",
            anecdote: "🎯 સફળતાની વાર્તા: બેંગલુરુના એક સ્ટાર્ટઅપ સ્થાપકે તેમની કંપનીના કઠિન પ્રારંભિક વર્ષો દરમિયાન માં બ્રહ્મચારિણીની દૈનિક ધ્યાન સાધના કરી - તેઓ તેમની અંતિમ સફળતાનો શ્રેય તેમના માર્ગદર્શનને આપે છે!"
          },
          {
            heading: "શૈક્ષણિક ઉત્કૃષ્ટતા",
            text: "સ્પર્ધાત્મક પરીક્ષાઓની તૈયારી કરતા વિદ્યાર્થીઓ, ઉચ્ચ ડિગ્રી મેળવતા, કે સંશોધન કરતા તેમના આશીર્વાદને વિશેષ રૂપે શક્તિશાળી લાગે છે. તેઓ આધુનિક જીવનની વિક્ષેપોને દૂર કરવામાં અને શૈક્ષણિક ધ્યેયો પર ધ્યાન જાળવવામાં મદદ કરે છે.",
            anecdote: "🎓 અભ્યાસ હૅક: ઘણા IIT અને મેડિકલ કૉલેજના વિદ્યાર્થીઓ તેમના અભ્યાસ ખંડમાં તેમની તસવીર રાખે છે અને વધુ સારી એકાગ્રતા માટે 'અભ્યાસ પહેલાં 108 જાપ'ની દિનચર્યા અપનાવે છે!"
          },
          {
            heading: "સંબંધોની બુદ્ધિ",
            text: "સંબંધો પ્રત્યે તેમનો સંતુલિત દૃષ્ટિકોણ - ભાવુક છતાં અનુશાસિત - આધુનિક વ્યક્તિઓને જટિલ સંબંધોની ગતિશીલતાને સમજવામાં મદદ કરે છે. તેઓ આપણને શીખવે છે કે ક્યારે સમર્પિત રહેવું અને ક્યારે તંદુરસ્ત સીમાઓ રાખવી.",
            anecdote: "💕 સંબંધની સલાહ: જોડકાં અકસર તેમના લગ્ન કે ભાગીદારીમાં પડકારજનક સમય દરમિયાન ધૈર્ય અને સમજણ માટે એકસાથે તેમની પ્રાર્થના કરે છે!"
          },
          {
            heading: "ડિજિટલ ડીટોક્સ અને માઇન્ડફુલનેસ",
            text: "આપણી અતિ-જોડાયેલી દુનિયામાં, તેમનો ત્યાગનો ઉદાહરણ આપણને ટેકનોલોજી અને સોશિયલ મીડિયાથી નિયમિત વિરામ લેવાની પ્રેરણા આપે છે. તેઓ સચેત જીવન અને આપણે માનસિક વ ભાવનાત્મક રીતે શું ઉપભોગ કરીએ છીએ તે વિશે સભાન પસંદગીઓ કરવાને પ્રોત્સાહિત કરે છે.",
            anecdote: "📱 આધુનિક તપસ્યા: ઘણા યુવા વ્યાવસાયિકો 'બ્રહ્મચારિણી કલાકો'નું પાલન કરે છે - અભ્યાસ, ધ્યાન કે અર્થપૂર્ણ વાતચીત માટે સમર્પિત ફોન-મુક્ત સમય!"
          }
        ]
      }
    }
  };

  const t = translations[currentLang];
  const currentContent = content[currentLang][activeTab];

  return (
    <>
      <Head>
        <title>Navratri Day 2: Maa Brahmacharini - The Devoted Seeker</title>
        <meta name="description" content="Explore the spiritual significance and sacred stories of Maa Brahmacharini on Day 2 of Navratri. Discover rituals, mantras, and modern relevance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Mobile Header */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => router.push(`/navratri-celebration?lang=${currentLang}`)}
                  className="flex items-center px-3 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="font-medium">{t.backToNavratri}</span>
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
                    className="appearance-none bg-white border border-gray-200 text-gray-700 px-3 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium shadow-sm text-sm"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.nativeName}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="text-2xl sm:text-3xl">🧘‍♀️</div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{t.day2}</h1>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-gray-600 italic mb-3">"{t.meaning}"</p>

                {/* Today's Color - Mobile */}
                <div className="inline-block bg-white rounded-lg px-3 py-2 border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 font-medium mb-1">{t.todaysColor}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
                      <span className="font-semibold text-gray-800 text-sm">{t.red}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-between">
              {/* Left side - Back button and Language selector */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => router.push(`/navratri-celebration?lang=${currentLang}`)}
                  className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="font-medium">{t.backToNavratri}</span>
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
                    className="appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium shadow-sm"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.nativeName}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Center - Main Title */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-1">
                  <div className="text-3xl">🧘‍♀️</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.day2}</h1>
                  </div>
                </div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-gray-600 italic">"{t.meaning}"</p>
              </div>

              {/* Right side - Today's Color */}
              <div className="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">{t.todaysColor}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
                    <span className="font-semibold text-gray-800 text-sm">{t.red}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>

        {/* Navigation between days */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => router.push(`/navratri-day-1?lang=${currentLang}`)}
              className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm"
            >
              {t.backToDay1}
            </button>
            <div className="text-center">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      day === 2
                        ? 'bg-red-500 text-white'
                        : day === 1
                        ? 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    onClick={() => day === 1 ? router.push(`/navratri-day-1?lang=${currentLang}`) : null}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-32"></div> {/* Spacer to balance layout */}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.entries(t.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
              {currentContent.title}
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {currentContent.content.map((section, index) => (
                <div key={index} className="relative">
                  {/* Section */}
                  <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-6 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <span className="text-2xl mr-3">✨</span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {section.text}
                    </p>
                  </div>

                  {/* Anecdote Box */}
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-5 border-l-4 border-red-500 ml-4">
                    <div className="flex items-start">
                      <div className="text-2xl mr-3 flex-shrink-0">💡</div>
                      <p className="text-red-800 font-medium italic">
                        {section.anecdote}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < currentContent.content.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  {t.blessing}
                </h3>
                <p className="text-red-600 text-lg mb-6 max-w-2xl mx-auto">
                  {t.blessingDesc}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
                  <h4 className="font-bold text-gray-800 mb-3">{t.todaysMantra}</h4>
                  <div className="text-lg font-semibold text-red-700 sanskrit mb-2">
                    ॐ देवी ब्रह्मचारिण्यै नमः
                  </div>
                  <div className="text-gray-600 italic">
                    "Om Devi Brahmacharinyai Namah"
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {t.chantTimes}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to Next Day */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 w-full max-w-md mx-auto">
              <p className="text-gray-600 mb-4">{t.continueJourney}</p>
              <button
                onClick={() => router.push(`/navratri-day-3?lang=${currentLang}`)}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {t.day3Button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}