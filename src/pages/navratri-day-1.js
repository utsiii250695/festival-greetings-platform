import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay1() {
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
      day1: "Day 1",
      goddess: "Maa Shailaputri",
      meaning: "The Daughter of Mountains",
      todaysColor: "Today's Color",
      white: "White",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Shailaputri Bless You",
      blessingDesc: "With the strength of mountains, the purity of snow, and the stability to achieve all your dreams. Start your Navratri journey with her divine blessings.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Continue your spiritual journey",
      day2Coming: "Day 2 coming soon! 🙏",
      day2Button: "Day 2: Maa Brahmacharini 🧘‍♀️"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day1: "दिन 1",
      goddess: "माँ शैलपुत्री",
      meaning: "पर्वतों की पुत्री",
      todaysColor: "आज का रंग",
      white: "सफेद",
      tabs: {
        story: "📖 पवित्र कहानी",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 रीति-रिवाज और प्रार्थना",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ शैलपुत्री आपको आशीर्वाद दें",
      blessingDesc: "पर्वतों की शक्ति, बर्फ की पवित्रता, और अपने सभी सपनों को पूरा करने की स्थिरता के साथ। माँ के दिव्य आशीर्वाद के साथ अपनी नवरात्रि की यात्रा शुरू करें।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जपें",
      continueJourney: "अपनी आध्यात्मिक यात्रा जारी रखें",
      day2Coming: "दिन 2 जल्द आ रहा है! 🙏",
      day2Button: "दिन 2: माँ ब्रह्मचारिणी 🧘‍♀️"
    },
    gu: {
      backToNavratri: "નવરાત્રી પર પાછા",
      day1: "દિવસ 1",
      goddess: "માં શૈલપુત્રી",
      meaning: "પર્વતોની પુત્રી",
      todaysColor: "આજનો રંગ",
      white: "સફેદ",
      tabs: {
        story: "📖 પવિત્ર વાર્તા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 રીતિ-રિવાજ અને પ્રાર્થના",
        modern: "🌟 આધુનિક પ્રાસંગિકતા"
      },
      blessing: "માં શૈલપુત્રી તમને આશીર્વાદ આપે",
      blessingDesc: "પર્વતોની શક્તિ, બરફની પવિત્રતા, અને તમારા બધા સપનાઓને પૂર્ણ કરવાની સ્થિરતા સાથે. માંના દિવ્ય આશીર્વાદ સાથે તમારી નવરાત્રીની યાત્રા શરૂ કરો.",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "વધુમાં વધુ આશીર્વાદ માટે આને 108 વાર જાપો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા ચાલુ રાખો",
      day2Coming: "દિવસ 2 ટૂંક સમયમાં આવી રહ્યો છે! 🙏",
      day2Button: "દિવસ 2: માં બ્રહ્મચારિણી 🧘‍♀️"
    }
  };

  const t = translations[currentLang];

  const tabs = [
    { id: 'story', label: t.tabs.story, icon: '📖' },
    { id: 'significance', label: t.tabs.significance, icon: '🕉️' },
    { id: 'rituals', label: t.tabs.rituals, icon: '🪔' },
    { id: 'modern', label: t.tabs.modern, icon: '🌟' }
  ];

  const storyContent = {
    en: {
      story: {
        title: "The Birth of Maa Shailaputri",
        content: [
          {
            heading: "The Reincarnation of Sati",
            text: "Long ago, when Sati, the beloved daughter of King Daksha, sacrificed herself in her father's yagna due to the insult to her husband Lord Shiva, she was reborn as the daughter of the mighty Himalayas - the King of Mountains.",
            anecdote: "💫 Did you know? The name 'Shailaputri' literally means 'Daughter of the Mountains' - 'Shaila' meaning mountain and 'Putri' meaning daughter."
          },
          {
            heading: "The Divine Union",
            text: "In this new form, she was named Parvati. Through intense penance and devotion, she won Lord Shiva's heart again. Their divine love story teaches us that true love transcends lifetimes.",
            anecdote: "🏔️ Legend says that when Parvati was born, the entire Himalayan range rejoiced, and flowers bloomed on every peak to celebrate her arrival!"
          },
          {
            heading: "The First Night's Blessing",
            text: "On the first night of Navratri, Maa Shailaputri rides her bull Nandi, holding a trident in one hand and a lotus in the other. She blesses devotees with stability, purity, and the strength to begin new journeys.",
            anecdote: "🐂 Fun fact: Her vehicle, Nandi the bull, represents dharma (righteousness) and justice - showing us the path of truth!"
          }
        ]
      },
      significance: {
        title: "Spiritual Significance of Day 1",
        content: [
          {
            heading: "The Root Chakra Connection",
            text: "Maa Shailaputri governs the Muladhara (Root Chakra), which is located at the base of our spine. This chakra represents our foundation, survival instincts, and connection to the earth.",
            anecdote: "🔴 The Root Chakra glows red, symbolizing life force and vitality - perfect for new beginnings!"
          },
          {
            heading: "Grounding and Stability",
            text: "Just as mountains are unshakeable, worshipping Maa Shailaputri brings stability to our lives. She helps us stay grounded while reaching for spiritual heights.",
            anecdote: "🧘‍♀️ Meditation tip: Visualize yourself as a mountain - rooted deep in the earth but touching the sky!"
          },
          {
            heading: "New Beginnings",
            text: "As the first form of Navratri, she represents the power of fresh starts. Any new venture begun with her blessings is said to succeed.",
            anecdote: "🌱 Many devotees start new businesses, projects, or spiritual practices on this day for guaranteed success!"
          }
        ]
      },
      rituals: {
        title: "Sacred Rituals for Day 1",
        content: [
          {
            heading: "Morning Prayers",
            text: "Wake up before sunrise and light a ghee lamp. Chant 'Om Devi Shailaputryai Namah' 108 times while visualizing her beautiful form.",
            anecdote: "🌅 Secret: The pre-dawn hours (Brahma Muhurat) are when divine energy is strongest!"
          },
          {
            heading: "Offerings",
            text: "Offer white flowers (especially jasmine), coconut, and sweets made with ghee. The color white represents purity and new beginnings.",
            anecdote: "🌼 Pro tip: If you can't find white flowers, offer white rice or milk - intention matters more than perfection!"
          },
          {
            heading: "Fasting and Food",
            text: "Observe a fast and break it with sabudana, fruits, or milk products. Many devotees wear white clothes to honor the goddess.",
            anecdote: "🥛 Modern twist: You can offer and consume white chocolate as prasadam - the goddess appreciates devotion in all forms!"
          },
          {
            heading: "Evening Aarti",
            text: "In the evening, perform aarti with camphor, sing bhajans, and share prasadam with family and neighbors.",
            anecdote: "🔥 The camphor flame represents the ego dissolving in divine love - watch it burn completely!"
          }
        ]
      },
      modern: {
        title: "Maa Shailaputri in Modern Life",
        content: [
          {
            heading: "The Working Professional",
            text: "In today's fast-paced world, Maa Shailaputri teaches us to stay grounded despite career pressures. She helps maintain work-life balance.",
            anecdote: "💼 Success story: A software engineer from Bangalore credits daily prayers to Maa Shailaputri for landing her dream job at a tech giant!"
          },
          {
            heading: "For Students and Learners",
            text: "Students pray to her for stability in studies and the strength to build strong foundations in their chosen fields.",
            anecdote: "📚 Study hack: Keep a small picture of Maa Shailaputri on your study desk for better concentration and memory!"
          },
          {
            heading: "Mental Health and Wellness",
            text: "Her grounding energy helps combat anxiety, stress, and overthinking. She brings peace to restless minds.",
            anecdote: "🧠 Wellness tip: When feeling overwhelmed, visualize yourself sitting at the foot of a mountain - instant calm!"
          },
          {
            heading: "Environmental Connection",
            text: "As the daughter of mountains, she reminds us to protect nature and stay connected to Mother Earth.",
            anecdote: "🌍 Eco-friendly devotion: Many modern devotees plant trees or clean mountains as their offering to Maa Shailaputri!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "माँ शैलपुत्री का जन्म",
        content: [
          {
            heading: "सती का पुनर्जन्म",
            text: "बहुत समय पहले, जब राजा दक्ष की प्रिय पुत्री सती ने अपने पति भगवान शिव के अपमान के कारण अपने पिता के यज्ञ में खुद को बलिदान कर दिया, तो वह पराक्रमी हिमालय के राजा - पर्वतों के राजा की पुत्री के रूप में पुनर्जन्म लिया।",
            anecdote: "💫 क्या आपको पता है? 'शैलपुत्री' नाम का अर्थ शाब्दिक रूप से 'पर्वतों की पुत्री' है - 'शैल' का अर्थ पर्वत और 'पुत्री' का अर्थ बेटी।"
          },
          {
            heading: "दिव्य मिलन",
            text: "इस नए रूप में उनका नाम पार्वती रखा गया। कठोर तपस्या और भक्ति के माध्यम से उन्होंने फिर से भगवान शिव का दिल जीत लिया। उनकी यह दिव्य प्रेम कहानी हमें सिखाती है कि सच्चा प्रेम जन्मों को पार करता है।",
            anecdote: "🏔️ पौराणिक कथा कहती है कि जब पार्वती का जन्म हुआ, तो पूरी हिमालय पर्वतमाला ने आनंद मनाया और उनके आगमन का जश्न मनाने के लिए हर चोटी पर फूल खिले!"
          },
          {
            heading: "प्रथम रात्रि का आशीर्वाद",
            text: "नवरात्रि की पहली रात्रि में, माँ शैलपुत्री अपने बैल नंदी पर सवार होती हैं, एक हाथ में त्रिशूल और दूसरे हाथ में कमल धारण करती हैं। वे भक्तों को स्थिरता, पवित्रता और नई यात्राओं की शुरुआत करने की शक्ति का आशीर्वाद देती हैं।",
            anecdote: "🐂 रोचक तथ्य: उनका वाहन, नंदी बैल, धर्म (न्याय) और न्याय का प्रतिनिधित्व करता है - हमें सत्य का रास्ता दिखाता है!"
          }
        ]
      },
      significance: {
        title: "दिन 1 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "मूल चक्र का संबंध",
            text: "माँ शैलपुत्री मूलाधार चक्र को नियंत्रित करती हैं, जो हमारी रीढ़ की हड्डी के आधार पर स्थित है। यह चक्र हमारी नींव, अस्तित्व की प्रवृत्ति और पृथ्वी के साथ संबंध का प्रतिनिधित्व करता है।",
            anecdote: "🔴 मूल चक्र लाल रंग में चमकता है, जो जीवन शक्ति और उत्साह का प्रतीक है - नई शुरुआत के लिए बिल्कुल सही!"
          },
          {
            heading: "स्थिरता और ग्राउंडिंग",
            text: "जैसे पर्वत अडिग होते हैं, वैसे ही माँ शैलपुत्री की पूजा हमारे जीवन में स्थिरता लाती है। वे हमें आध्यात्मिक ऊंचाइयों तक पहुंचते समय जमीन से जुड़े रहने में मदद करती हैं।",
            anecdote: "🧘‍♀️ मेडिटेशन टिप: अपने आप को एक पर्वत की तरह देखें - पृथ्वी में गहरी जड़ें लेकिन आकाश को छूते हुए!"
          },
          {
            heading: "नई शुरुआत",
            text: "नवरात्रि के पहले स्वरूप के रूप में, वे नई शुरुआत की शक्ति का प्रतिनिधित्व करती हैं। उनके आशीर्वाद से शुरू किया गया कोई भी नया काम सफल होता है।",
            anecdote: "🌱 कई भक्त इस दिन नए व्यवसाय, प्रोजेक्ट्स या आध्यात्मिक प्रथाओं की शुरुआत करते हैं गारंटीड सफलता के लिए!"
          }
        ]
      },
      rituals: {
        title: "दिन 1 की पवित्र विधियाँ",
        content: [
          {
            heading: "प्रातःकालीन प्रार्थनाएं",
            text: "सूर्योदय से पहले उठें और घी का दीपक जलाएं। उनके सुंदर स्वरूप की कल्पना करते हुए 'ॐ देवी शैलपुत्र्यै नमः' 108 बार जाप करें।",
            anecdote: "🌅 रहस्य: भोर के समय (ब्रह्म मुहूर्त) दिव्य ऊर्जा सबसे मजबूत होती है!"
          },
          {
            heading: "अर्पण",
            text: "सफेद फूल (खासकर चमेली), नारियल और घी से बनी मिठाइयां चढ़ाएं। सफेद रंग पवित्रता और नई शुरुआत का प्रतिनिधित्व करता है।",
            anecdote: "🌼 प्रो टिप: यदि आपको सफेद फूल नहीं मिलते, तो सफेद चावल या दूध चढ़ाएं - नीयत पूर्णता से अधिक महत्वपूर्ण है!"
          },
          {
            heading: "उपवास और भोजन",
            text: "उपवास रखें और साबूदाना, फल या दूध उत्पादों से इसे तोड़ें। कई भक्त देवी का सम्मान करने के लिए सफेद कपड़े पहनते हैं।",
            anecdote: "🥛 आधुनिक ट्विस्ट: आप सफेद चॉकलेट प्रसादम के रूप में चढ़ा और खा सकते हैं - देवी सभी रूपों में भक्ति की सराहना करती हैं!"
          },
          {
            heading: "सांझ की आरती",
            text: "शाम को कपूर से आरती करें, भजन गाएं और परिवार और पड़ोसियों के साथ प्रसाद बांटें।",
            anecdote: "🔥 कपूर की लौ अहंकार के दिव्य प्रेम में विलीन होने का प्रतिनिधित्व करती है - इसे पूरी तरह जलते हुए देखें!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ शैलपुत्री",
        content: [
          {
            heading: "कामकाजी पेशेवर",
            text: "आज की तेज़ रफ़्तार दुनिया में, माँ शैलपुत्री हमें करियर के दबाव के बावजूद भी जमीन से जुड़े रहना सिखाती हैं। वे कार्य-जीवन संतुलन बनाए रखने में मदद करती हैं।",
            anecdote: "💼 सफलता की कहानी: बैंगलोर का एक सॉफ्टवेयर इंजीनियर माँ शैलपुत्री की दैनिक प्रार्थनाओं का श्रेय देता है टेक कंपनी में अपनी ड्रीम जॉब पाने के लिए!"
          },
          {
            heading: "छात्र और शिक्षार्थी",
            text: "छात्र पढ़ाई में स्थिरता और अपने चुने हुए क्षेत्र में मजबूत नींव बनाने की शक्ति के लिए उनकी प्रार्थना करते हैं।",
            anecdote: "📚 स्टडी हैक: बेहतर एकाग्रता और याददाश्त के लिए अपने स्टडी डेस्क पर माँ शैलपुत्री की एक छोटी तस्वीर रखें!"
          },
          {
            heading: "मानसिक स्वास्थ्य और कल्याण",
            text: "उनकी ग्राउंडिंग ऊर्जा चिंता, तनाव और अतिचिंतन से लड़ने में मदद करती है। वे बेचैन मन को शांति देती हैं।",
            anecdote: "🧠 वेलनेस टिप: जब परेशान महसूस हों, तो अपने आप को पहाड़ की तलहटी में बैठे हुए देखें - तुरंत शांति!"
          },
          {
            heading: "पर्यावरणीय संबंध",
            text: "पर्वतों की पुत्री के रूप में, वे हमें प्रकृति की रक्षा करने और माँ पृथ्वी से जुड़े रहने की याद दिलाती हैं।",
            anecdote: "🌍 इको-फ्रेंडली भक्ति: कई आधुनिक भक्त माँ शैलपुत्री को अपने अर्पण के रूप में पेड़ लगाते या पहाड़ों को साफ करते हैं!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "માં શૈલપુત્રીનો જન્મ",
        content: [
          {
            heading: "સતીનો પુનર્જન્મ",
            text: "ઘણા સમય પહેલા, જ્યારે રાજા દક્ષની પ્રિય પુત્રી સતીએ તેના પતિ ભગવાન શિવના અપમાનને કારણે તેના પિતાના યજ્ઞમાં પોતાનું બલિદાન આપ્યું, ત્યારે તે પરાક્રમી હિમાલયના રાજા - પર્વતોના રાજાની પુત્રી તરીકે પુનર્જન્મ પામી.",
            anecdote: "💫 શું તમે જાણો છો? 'શૈલપુત્રી' નામનો અર્થ શાબ્દિક રીતે 'પર્વતોની પુત્રી' છે - 'શૈલ' એટલે પર્વત અને 'પુત્રી' એટલે પુત્રી."
          },
          {
            heading: "દિવ્ય મિલન",
            text: "આ નવા રૂપમાં તેનું નામ પાર્વતી રાખવામાં આવ્યું. કઠોર તપસ્યા અને ભક્તિ દ્વારા તેણે ફરીથી ભગવાન શિવનું હૃદય જીતી લીધું. તેમની આ દિવ્ય પ્રેમ કહાણી આપણને શીખવે છે કે સાચો પ્રેમ જન્મોને પાર કરે છે.",
            anecdote: "🏔️ દંતકથા કહે છે કે જ્યારે પાર્વતીનો જન્મ થયો, ત્યારે સમગ્ર હિમાલય પર્વતમાળાએ આનંદ મનાવ્યો અને તેના આગમનની ઉજવણી માટે દરેક શિખર પર ફૂલો ખીલ્યા!"
          },
          {
            heading: "પ્રથમ રાત્રિનો આશીર્વાદ",
            text: "નવરાત્રીની પ્રથમ રાત્રિએ, માં શૈલપુત્રી તેના બળદ નંદી પર સવાર થાય છે, એક હાથમાં ત્રિશૂલ અને બીજા હાથમાં કમળ ધરાવે છે. તે ભક્તોને સ્થિરતા, પવિત્રતા અને નવી યાત્રા શરૂ કરવાની શક્તિનો આશીર્વાદ આપે છે.",
            anecdote: "🐂 રસપ્રદ તથ્ય: તેનું વાહન, નંદી બળદ, ધર્મ (ન્યાય) અને ન્યાયનું પ્રતિનિધિત્વ કરે છે - આપણને સત્યનો માર્ગ બતાવે છે!"
          }
        ]
      },
      significance: {
        title: "દિવસ 1નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "મૂળ ચક્રનો જોડાણ",
            text: "માં શૈલપુત્રી મૂળાધાર ચક્રને નિયંત્રિત કરે છે, જે આપણી કરોડરજ્જુના તળિયે સ્થિત છે. આ ચક્ર આપણના પાયા, અસ્તિત્વની વૃત્તિ અને પૃથ્વી સાથેના જોડાણનું પ્રતિનિધિત્વ કરે છે.",
            anecdote: "🔴 મૂળ ચક્ર લાલ રંગે ચમકે છે, જે જીવન શક્તિ અને ઉત્સાહનું પ્રતીક છે - નવી શરૂઆત માટે સંપૂર્ણ!"
          },
          {
            heading: "ગ્રાઉન્ડિંગ અને સ્થિરતા",
            text: "જેમ પર્વતો અડગ હોય છે, તેમ માં શૈલપુત્રીની પૂજા આપણા જીવનમાં સ્થિરતા લાવે છે. તે આપણને આધ્યાત્મિક ઊંચાઈઓ સુધી પહોંચતી વખતે જમીન સાથે જોડાયેલા રહેવામાં મદદ કરે છે.",
            anecdote: "🧘‍♀️ મેડિટેશન ટિપ: તમારી જાતને એક પર્વતની કલ્પના કરો - પૃથ્વીમાં ઊંડાં મૂળ ધરાવતો પરંતુ આકાશને સ્પર્શ કરતો!"
          },
          {
            heading: "નવી શરૂઆત",
            text: "નવરાત્રીના પ્રથમ સ્વરૂપ તરીકે, તે નવી શરૂઆતની શક્તિનું પ્રતિનિધિત્વ કરે છે. તેના આશીર્વાદથી શરૂ કરવામાં આવેલ કોઈપણ નવું સાહસ સફળ થવાનું કહેવાય છે.",
            anecdote: "🌱 ઘણા ભક્તો આ દિવસે નવા વ્યવસાય, પ્રોજેક્ટ્સ અથવા આધ્યાત્મિક પ્રથાઓ શરૂ કરે છે ગેરંટીડ સફળતા માટે!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 1ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "સવારની પ્રાર્થનાઓ",
            text: "સૂર્યોદય પહેલા જાગો અને ઘીનો દીવો પ્રગટાવો. તેના સુંદર સ્વરૂપની કલ્પના કરતા 'ૐ દેવી શૈલપુત્ર્યૈ નમઃ' 108 વાર જાપ કરો.",
            anecdote: "🌅 રહસ્ય: ભોર પહેલાના સમય (બ્રહ્મ મુહૂર્ત) એ દિવ્ય શક્તિ સૌથી વધુ મજબૂત હોય છે!"
          },
          {
            heading: "અર્પણો",
            text: "સફેદ ફૂલો (ખાસ કરીને જાસ્મિન), નાળિયેર અને ઘીથી બનેલા મીઠાઈઓ અર્પણ કરો. સફેદ રંગ પવિત્રતા અને નવી શરૂઆતનું પ્રતિનિધિત્વ કરે છે.",
            anecdote: "🌼 પ્રો ટિપ: જો તમને સફેદ ફૂલો ન મળે, તો સફેદ ચોખા અથવા દૂધ અર્પણ કરો - નિષ્ઠા પૂર્ણતાથી વધુ મહત્વપૂર્ણ છે!"
          },
          {
            heading: "ઉપવાસ અને ખોરાક",
            text: "ઉપવાસ રાખો અને સાબુદાણા, ફળો અથવા દૂધના ઉત્પાદનોથી તેને તોડો. ઘણા ભક્તો દેવીનું સન્માન કરવા માટે સફેદ કપડાં પહેરે છે.",
            anecdote: "🥛 આધુનિક ટ્વિસ્ટ: તમે સફેદ ચોકલેટ પ્રસાદમ તરીકે અર્પણ કરી શકો અને લઈ શકો - દેવી બધા સ્વરૂપોમાં ભક્તિની પ્રશંસા કરે છે!"
          },
          {
            heading: "સાંજની આરતી",
            text: "સાંજે કપૂરથી આરતી કરો, ભજન ગાઓ અને પરિવાર અને પડોશીઓ સાથે પ્રસાદ વહેંચો.",
            anecdote: "🔥 કપૂરની જ્વાળા અહંકારનું દિવ્ય પ્રેમમાં વિલીન થવાનું પ્રતિનિધિત્વ કરે છે - તેને સંપૂર્ણ સળગાતી જુઓ!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં શૈલપુત્રી",
        content: [
          {
            heading: "કાર્યકારી વ્યાવસાયિક",
            text: "આજના ઝડપી જીવનમાં, માં શૈલપુત્રી આપણને કારકિર્દીના દબાણ છતાં જમીન સાથે જોડાયેલા રહેવાનું શીખવે છે. તે કાર્ય-જીવનનું સંતુલન જાળવવામાં મદદ કરે છે.",
            anecdote: "💼 સફળતાની વાર્તા: બેંગલોરના એક સોફ્ટવેર એન્જિનિયર માં શૈલપુત્રીની દૈનિક પ્રાર્થનાઓનો શ્રેય આપે છે ટેક કંપનીમાં તેની ડ્રીમ જોબ મેળવવા માટે!"
          },
          {
            heading: "વિદ્યાર્થીઓ અને શીખનારાઓ માટે",
            text: "વિદ્યાર્થીઓ અભ્યાસમાં સ્થિરતા અને પોતાના પસંદ કરેલા ક્ષેત્રમાં મજબૂત પાયો બાંધવાની શક્તિ માટે તેની પ્રાર્થના કરે છે.",
            anecdote: "📚 સ્ટડી હેક: વધુ સારી એકાગ્રતા અને યાદશક્તિ માટે તમારા અભ્યાસ ડેસ્ક પર માં શૈલપુત્રીનું નાનું ચિત્ર રાખો!"
          },
          {
            heading: "માનસિક આરોગ્ય અને કલ્યાણ",
            text: "તેની ગ્રાઉન્ડિંગ એનર્જી ચિંતા, તણાવ અને અતિ વિચારણાનો સામનો કરવામાં મદદ કરે છે. તે બેચેન મનને શાંતિ આપે છે.",
            anecdote: "🧠 વેલનેસ ટિપ: જ્યારે દબાયેલું લાગે, ત્યારે તમારી જાતને પર્વતના પગથિયે બેઠેલા હોવાની કલ્પના કરો - તુરંત શાંતિ!"
          },
          {
            heading: "પર્યાવરણીય જોડાણ",
            text: "પર્વતોની પુત્રી તરીકે, તે આપણને પ્રકૃતિની સુરક્ષા કરવા અને પૃથ્વી માતા સાથે જોડાયેલા રહેવાની યાદ અપાવે છે.",
            anecdote: "🌍 ઇકો-ફ્રેન્ડલી ભક્તિ: ઘણા આધુનિક ભક્તો માં શૈલપુત્રીને તેમના અર્પણ તરીકે વૃક્ષો વાવે છે અથવા પર્વતો સાફ કરે છે!"
          }
        ]
      }
    }
  };

  const currentContent = storyContent[currentLang] ? storyContent[currentLang][activeTab] : storyContent['en'][activeTab];

  return (
    <>
      <Head>
        <title>Day 1: Maa Shailaputri - The Mountain's Daughter | Navratri</title>
        <meta name="description" content="Discover the sacred story and spiritual significance of Maa Shailaputri, the first form of Goddess Durga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
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
                  <div className="text-3xl">🏔️</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.day1}</h1>
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
                    <span className="font-semibold text-gray-800 text-sm">{t.white}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 shadow-md hover:shadow-lg border border-gray-200'
                }`}
              >
                <span className="text-lg mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              {currentContent.title}
            </h2>

            <div className="space-y-8">
              {currentContent.content.map((section, index) => (
                <div key={index} className="relative">
                  {/* Section */}
                  <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="text-2xl mr-3">✨</span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.text}
                    </p>
                  </div>

                  {/* Anecdote Box */}
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-5 border-l-4 border-purple-500 ml-4">
                    <div className="flex items-start">
                      <div className="text-2xl mr-3 flex-shrink-0">💡</div>
                      <p className="text-purple-800 font-medium italic">
                        {section.anecdote}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < currentContent.content.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">
                  {t.blessing}
                </h3>
                <p className="text-purple-600 text-lg mb-6 max-w-2xl mx-auto">
                  {t.blessingDesc}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
                  <h4 className="font-bold text-gray-800 mb-3">{t.todaysMantra}</h4>
                  <div className="text-lg font-semibold text-purple-700 sanskrit mb-2">
                    ॐ देवी शैलपुत्र्यै नमः
                  </div>
                  <div className="text-gray-600 italic">
                    "Om Devi Shailaputryai Namah"
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {t.chantTimes}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to Next Day */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <p className="text-gray-600 mb-4">{t.continueJourney}</p>
              <button
                onClick={() => router.push(`/navratri-day-2?lang=${currentLang}`)}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {t.day2Button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}