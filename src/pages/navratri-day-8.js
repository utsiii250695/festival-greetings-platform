import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay8() {
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
      day8: "Day 8",
      goddess: "Maa Mahagauri",
      meaning: "The Extremely Pure & Radiant One",
      todaysColor: "Today's Color",
      peacockGreen: "Peacock Green",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Mahagauri Bless You",
      blessingDesc: "With the purity of fresh snow, the peace of a calm mind, and the radiant beauty that comes from complete forgiveness and spiritual cleansing.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Complete your spiritual journey",
      day9Coming: "Day 9: Maa Siddhidatri 🌸",
      backToDay7: "← Day 7: Maa Kalaratri"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day8: "दिन 8",
      goddess: "माँ महागौरी",
      meaning: "अत्यंत पवित्र और दीप्तिमान",
      todaysColor: "आज का रंग",
      peacockGreen: "मोर हरा",
      tabs: {
        story: "📖 पवित्र कथा",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 विधियाँ व प्रार्थनाएं",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ महागौरी आपको आशीर्वाद दें",
      blessingDesc: "ताज़ी बर्फ की पवित्रता, शांत मन की शांति, और संपूर्ण क्षमा और आध्यात्मिक शुद्धिकरण से आने वाली दीप्तिमान सुंदरता के साथ।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जाप करें",
      continueJourney: "अपनी आध्यात्मिक यात्रा पूरी करें",
      day9Coming: "दिन 9: माँ सिद्धिदात्री 🌸",
      backToDay7: "← दिन 7: माँ कालरात्रि"
    },
    gu: {
      backToNavratri: "નવરાત્રિ પર પાછા",
      day8: "દિવસ 8",
      goddess: "માં મહાગૌરી",
      meaning: "અત્યંત પવિત્ર અને તેજસ્વી",
      todaysColor: "આજનો રંગ",
      peacockGreen: "મોર લીલો",
      tabs: {
        story: "📖 પવિત્ર કથા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 વિધિઓ અને પ્રાર્થનાઓ",
        modern: "🌟 આધુનિક સંદર્ભ"
      },
      blessing: "માં મહાગૌરી તમને આશીર્વાદ આપે",
      blessingDesc: "તાજા બરફની પવિત્રતા, શાંત મનની શાંતિ, અને સંપૂર્ણ ક્ષમા અને આધ્યાત્મિક શુદ્ધિકરણથી આવતી તેજસ્વી સુંદરતા સાથે.",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "મહત્તમ આશીર્વાદ માટે આ 108 વખત જાપ કરો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા પૂર્ણ કરો",
      day9Coming: "દિવસ 9: માં સિદ્ધિદાત્રી 🌸",
      backToDay7: "← દિવસ 7: માં કાલરાત્રિ"
    }
  };

  const content = {
    en: {
      story: {
        title: "The Divine Transformation to Pure Radiance",
        content: [
          {
            heading: "From Dark to Light",
            text: "Maa Mahagauri is the eighth form of Goddess Durga, representing the complete transformation from darkness to light, from impurity to absolute purity. After the intense spiritual destruction by Kalaratri on Day 7, Mahagauri emerges as the pure, radiant consciousness - as white as fresh snow, as bright as the moon, symbolizing the soul's return to its original pristine state. Her very name means 'Extremely Pure' (Maha = Great, Gauri = Fair/Pure).",
            anecdote: "❄️ Divine makeover: She's like the universe's ultimate glow-up story - from the scary Kalaratri to the radiant Mahagauri in just one day! It's the cosmic equivalent of a complete spiritual spa transformation!"
          },
          {
            heading: "The Legend of Purification",
            text: "According to the Puranas, when Parvati performed severe penance to win Lord Shiva, her body became dark and covered with dirt from years of austere practices. When Shiva finally accepted her devotion, he washed her in the pure waters of the Ganges flowing from his hair. Instantly, she emerged as Mahagauri - extremely fair, radiant, and pure. This transformation represents how sincere spiritual practice, no matter how difficult, ultimately leads to purification and divine union.",
            anecdote: "🚿 Cosmic spa day: Imagine getting a bath from the celestial Ganges by Lord Shiva himself - the ultimate divine detox and glow treatment that transforms you from dusty to absolutely luminous!"
          },
          {
            heading: "The Goddess of Fresh Beginnings",
            text: "Mahagauri represents the soul after complete purification - all past karma cleansed, all negativity removed, ready for a fresh start. She sits on a white bull (Nandi), carries a trident and drum, and has four arms that bestow fearlessness and blessings. Her peaceful expression shows the serenity that comes after weathering all storms. She is the divine reset button - offering everyone a chance to start anew with a clean slate.",
            anecdote: "🔄 Spiritual factory reset: She's like the 'restore to factory settings' option for your soul - all the bugs, viruses, and corrupted files of negative karma get wiped clean, and you get a fresh spiritual operating system!"
          }
        ]
      },
      significance: {
        title: "Day 8 Spiritual Significance",
        content: [
          {
            heading: "Complete Purification",
            text: "Mahagauri represents the culmination of the spiritual cleansing process that began with Kalaratri's destruction. She governs the purified consciousness - the mind that has been cleared of all negative thoughts, emotions, and karmic impressions. Her worship helps remove sins, negative karma, and psychological impurities, leaving the devotee in a state of pristine spiritual clarity.",
            anecdote: "🧼 Soul soap: Praying to Mahagauri is like using the universe's strongest spiritual detergent - it removes stains of karma that you didn't even know existed, leaving your consciousness sparkling clean!"
          },
          {
            heading: "Peace and Forgiveness",
            text: "She embodies the divine quality of forgiveness - both receiving forgiveness for past mistakes and developing the ability to forgive others completely. Her pure white color represents the peace that comes from letting go of all grudges, resentments, and anger. She teaches that true purity comes not from never making mistakes, but from complete forgiveness and learning from our experiences.",
            anecdote: "🕊️ Divine forgiveness manager: She's like having a cosmic HR department that specializes in conflict resolution - all past grievances, mistakes, and conflicts get resolved with divine understanding and compassion!"
          },
          {
            heading: "Renewal and Fresh Start",
            text: "Her energy provides the spiritual momentum for new beginnings. After the destruction of Day 7, she offers the creative energy for rebirth and renewal. She helps devotees leave behind old patterns, relationships, and situations that no longer serve their highest good, and step into new phases of life with confidence and purity of intention.",
            anecdote: "🌱 Cosmic spring cleaning: Worshipping Mahagauri is like having the universe's best life coach who helps you Marie Kondo your entire existence - keeping only what sparks spiritual joy and releasing everything else with gratitude!"
          }
        ]
      },
      rituals: {
        title: "Day 8 Sacred Rituals",
        content: [
          {
            heading: "Morning Purity Prayers",
            text: "Begin with offering white flowers, especially white lotuses, jasmine, and white roses to Maa Mahagauri. White represents purity, peace, and new beginnings. Light white candles or ghee lamps and chant 'Om Devi Mahagauryai Namah' 108 times while visualizing yourself surrounded by pure white light that cleanses every cell of your being.",
            anecdote: "🌸 White flower power: Devotees create elaborate white flower mandalas on this day - they say each petal represents a purified thought, and by the end, your mind becomes like a garden of pure intentions!"
          },
          {
            heading: "Purification Bath Ritual",
            text: "This is the traditional day for taking a purifying bath with sacred intentions. Add rose water, milk, or Ganges water to your bath if possible. As you bathe, visualize all impurities - physical, mental, emotional, and spiritual - being washed away. Imagine emerging from the bath as radiant and pure as Mahagauri herself.",
            anecdote: "🛁 Divine shower thoughts: Many devotees report having profound spiritual insights during this purification bath - it's like the physical cleansing opens channels for divine wisdom to flow in!"
          },
          {
            heading: "Forgiveness Ceremony",
            text: "Write down on white paper all the people you need to forgive (including yourself) and all the mistakes you want to release. Offer these papers to sacred fire while chanting her mantra. Then write letters of forgiveness - you don't need to send them, the act of writing with genuine intention creates powerful healing and release.",
            anecdote: "💌 Cosmic mail service: Some devotees actually send these forgiveness letters (or emails!) on this day - they report miraculous reconciliations and healing of relationships that seemed impossible to repair!"
          },
          {
            heading: "White Light Meditation",
            text: "Sit in meditation and visualize brilliant white light entering through your crown chakra and filling your entire being. See this light dissolving all darkness, fear, anger, and negativity. Feel yourself becoming as pure and radiant as fresh snow. This meditation helps integrate the purification energy and establish lasting inner peace.",
            anecdote: "✨ Glow-up meditation: Practitioners describe feeling like they're literally glowing after this meditation - some say people comment on how radiant and peaceful they look for days afterward!"
          }
        ]
      },
      modern: {
        title: "Maa Mahagauri in Modern Life",
        content: [
          {
            heading: "Mental Health and Inner Peace",
            text: "Her energy is incredibly healing for anxiety, depression, and emotional turmoil. She provides the peace and clarity needed for mental health recovery. Many therapists working with Hindu clients incorporate her symbolism for healing trauma, releasing guilt and shame, and developing self-compassion. Her pure energy helps calm racing thoughts and provides emotional stability.",
            anecdote: "🧘‍♀️ Divine therapy: A psychiatrist reports that patients who connect with Mahagauri's energy show faster recovery from depression - they describe feeling 'spiritually clean' and free from the heavy emotions that were weighing them down!"
          },
          {
            heading: "Relationship Healing and Forgiveness",
            text: "Her forgiveness energy is powerful for healing broken relationships, family conflicts, and romantic issues. She helps people release resentment, communicate with love, and rebuild trust. Marriage counselors and family therapists often recommend her worship during relationship crisis as her energy facilitates genuine forgiveness and fresh starts.",
            anecdote: "💕 Love reset button: A couples therapist keeps Mahagauri's image in her office - she says it helps couples move from blame and anger to genuine understanding and forgiveness, often in just one session!"
          },
          {
            heading: "Addiction Recovery and Clean Living",
            text: "Her purification energy supports recovery from all kinds of addictions - substances, behaviors, or toxic patterns. She provides the spiritual strength to maintain sobriety and the mental clarity to make healthy choices. Recovery programs often invoke her energy for the purification needed to start fresh and maintain clean living.",
            anecdote: "🚭 Divine detox: A rehabilitation center has a Mahagauri meditation garden where patients in recovery practice her white light visualization - they report feeling 'spiritually clean' which helps them maintain their physical sobriety!"
          },
          {
            heading: "Career Transitions and New Beginnings",
            text: "Her fresh start energy is perfect for career changes, moving to new places, or beginning new life chapters. She provides the clarity to know what to leave behind and the confidence to step into new opportunities. Entrepreneurs, students, and anyone making major life transitions draw on her energy for guidance and purification of intentions.",
            anecdote: "🚀 Career reboot goddess: A tech executive credits Mahagauri prayers for helping her transition from corporate life to running her own wellness startup - she says the goddess helped her 'delete' old limiting beliefs and 'install' new empowering ones!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "शुद्ध तेज में दिव्य रूपांतरण",
        content: [
          {
            heading: "अंधकार से प्रकाश तक",
            text: "माँ महागौरी देवी दुर्गा का आठवां रूप हैं, जो अंधकार से प्रकाश, अशुद्धता से परम पवित्रता में संपूर्ण रूपांतरण का प्रतिनिधित्व करती हैं। दिन 7 पर कालरात्रि के तीव्र आध्यात्मिक विनाश के बाद, महागौरी शुद्ध, दीप्तिमान चेतना के रूप में उभरती हैं - ताज़ी बर्फ की तरह सफेद, चांद की तरह उज्ज्वल, आत्मा की अपनी मूल प्राचीन अवस्था में वापसी का प्रतीक। उनका नाम ही 'अत्यंत पवित्र' का अर्थ है (महा = महान, गौरी = गोरी/पवित्र)।",
            anecdote: "❄️ दिव्य मेकओवर: वे ब्रह्मांड की परम चमक-दमक की कहानी जैसी हैं - डरावनी कालरात्रि से दीप्तिमान महागौरी तक केवल एक दिन में! यह संपूर्ण आध्यात्मिक स्पा रूपांतरण के ब्रह्मांडीय समकक्ष है!"
          },
          {
            heading: "शुद्धिकरण की पौराणिक कथा",
            text: "पुराणों के अनुसार, जब पार्वती ने भगवान शिव को पाने के लिए कठोर तपस्या की, तो वर्षों के कठिन अभ्यास से उनका शरीर काला हो गया और धूल से भर गया। जब शिव ने अंततः उनकी भक्ति को स्वीकार किया, तो उन्होंने उन्हें अपने बालों से बहती गंगा के पवित्र जल में स्नान कराया। तुरंत, वे महागौरी के रूप में प्रकट हुईं - अत्यंत गोरी, दीप्तिमान और पवित्र। यह रूपांतरण दर्शाता है कि सच्ची आध्यात्मिक साधना, चाहे वह कितनी भी कठिन हो, अंततः शुद्धिकरण और दिव्य मिलन की ओर ले जाती है।",
            anecdote: "🚿 ब्रह्मांडीय स्पा दिन: भगवान शिव द्वारा स्वयं आकाशीय गंगा से स्नान कराने की कल्पना करें - परम दिव्य डिटॉक्स और चमक उपचार जो आपको धूल भरे से पूर्णतः प्रकाशमान बना देता है!"
          },
          {
            heading: "नई शुरुआत की देवी",
            text: "महागौरी संपूर्ण शुद्धिकरण के बाद की आत्मा का प्रतिनिधित्व करती हैं - सभी पिछले कर्म धुले हुए, सभी नकारात्मकता हटाई हुई, एक नई शुरुआत के लिए तैयार। वे सफेद बैल (नंदी) पर बैठती हैं, त्रिशूल और डमरू धारण करती हैं, और उनकी चार भुजाएं निर्भयता और आशीर्वाद प्रदान करती हैं। उनकी शांत अभिव्यक्ति सभी तूफानों को झेलने के बाद आने वाली शांति को दर्शाती है। वे दिव्य रीसेट बटन हैं - सभी को साफ स्लेट के साथ नई शुरुआत का मौका देती हैं।",
            anecdote: "🔄 आध्यात्मिक फैक्टरी रीसेट: वे आपकी आत्मा के लिए 'फैक्टरी सेटिंग्स पर रीस्टोर' विकल्प जैसी हैं - नकारात्मक कर्म के सभी बग, वायरस और भ्रष्ट फाइलें साफ हो जाती हैं, और आपको एक नया आध्यात्मिक ऑपरेटिंग सिस्टम मिलता है!"
          }
        ]
      },
      significance: {
        title: "दिन 8 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "संपूर्ण शुद्धिकरण",
            text: "महागौरी उस आध्यात्मिक सफाई प्रक्रिया की परिणति का प्रतिनिधित्व करती हैं जो कालरात्रि के विनाश से शुरू हुई थी। वे शुद्धिकृत चेतना को नियंत्रित करती हैं - वह मन जो सभी नकारात्मक विचारों, भावनाओं और कर्म के संस्कारों से मुक्त हो गया है। उनकी पूजा पापों, नकारात्मक कर्म और मनोवैज्ञानिक अशुद्धताओं को हटाने में मदद करती है, भक्त को आध्यात्मिक स्पष्टता की प्राचीन अवस्था में छोड़ देती है।",
            anecdote: "🧼 आत्मा का साबुन: महागौरी से प्रार्थना करना ब्रह्मांड के सबसे मजबूत आध्यात्मिक डिटर्जेंट का उपयोग करने जैसा है - यह कर्म के उन दागों को हटाता है जिनके बारे में आप जानते भी नहीं थे, आपकी चेतना को चमकदार साफ छोड़ देता है!"
          },
          {
            heading: "शांति और क्षमा",
            text: "वे क्षमा के दिव्य गुण की मूर्ति हैं - पिछली गलतियों के लिए क्षमा प्राप्त करना और दूसरों को पूर्णतः क्षमा करने की क्षमता विकसित करना दोनों। उनका शुद्ध सफेद रंग सभी शिकायतों, आक्रोश और क्रोध को छोड़ने से आने वाली शांति का प्रतिनिधित्व करता है। वे सिखाती हैं कि सच्ची पवित्रता कभी गलती न करने से नहीं, बल्कि संपूर्ण क्षमा और अपने अनुभवों से सीखने से आती है।",
            anecdote: "🕊️ दिव्य क्षमा प्रबंधक: वे ब्रह्मांडीय HR विभाग रखने जैसी हैं जो संघर्ष समाधान में विशेषज्ञता रखता है - सभी पिछली शिकायतें, गलतियां और संघर्ष दिव्य समझ और करुणा के साथ हल हो जाते हैं!"
          },
          {
            heading: "नवीकरण और नई शुरुआत",
            text: "उनकी ऊर्जा नई शुरुआत के लिए आध्यात्मिक गति प्रदान करती है। दिन 7 के विनाश के बाद, वे पुनर्जन्म और नवीकरण के लिए सृजनात्मक ऊर्जा प्रदान करती हैं। वे भक्तों को पुराने पैटर्न, रिश्ते और स्थितियों को छोड़ने में मदद करती हैं जो अब उनके उच्चतम कल्याण की सेवा नहीं करते, और आत्मविश्वास और इरादे की पवित्रता के साथ जीवन के नए चरणों में कदम रखने में मदद करती हैं।",
            anecdote: "🌱 ब्रह्मांडीय स्प्रिंग क्लीनिंग: महागौरी की पूजा करना ब्रह्मांड के सबसे अच्छे जीवन कोच का होना जैसा है जो आपके पूरे अस्तित्व को मैरी कोंडो करने में मदद करते हैं - केवल वही रखना जो आध्यात्मिक आनंद देता है और बाकी सब कुछ कृतज्ञता के साथ छोड़ना!"
          }
        ]
      },
      rituals: {
        title: "दिन 8 की पवित्र विधियाँ",
        content: [
          {
            heading: "प्रातःकालीन पवित्रता प्रार्थनाएं",
            text: "माँ महागौरी को सफेद फूल, विशेषकर सफेद कमल, चमेली और सफेद गुलाब अर्पित करके शुरुआत करें। सफेद रंग पवित्रता, शांति और नई शुरुआत का प्रतिनिधित्व करता है। सफेद मोमबत्तियां या घी के दीप जलाएं और 'ॐ देवी महागौर्यै नमः' का 108 बार जाप करें जबकि अपने आप को शुद्ध सफेद प्रकाश से घिरा हुआ देखें जो आपके अस्तित्व के हर कोशिका को साफ करता है।",
            anecdote: "🌸 सफेद फूल शक्ति: भक्त इस दिन विस्तृत सफेद फूलों के मंडल बनाते हैं - वे कहते हैं कि हर पंखुड़ी एक शुद्धिकृत विचार का प्रतिनिधित्व करती है, और अंत तक आपका मन शुद्ध इरादों के बगीचे की तरह हो जाता है!"
          },
          {
            heading: "शुद्धिकरण स्नान अनुष्ठान",
            text: "यह पवित्र इरादों के साथ शुद्धिकारी स्नान करने का पारंपरिक दिन है। यदि संभव हो तो अपने स्नान में गुलाब जल, दूध या गंगा जल मिलाएं। जैसे ही आप स्नान करते हैं, सभी अशुद्धताओं - शारीरिक, मानसिक, भावनात्मक और आध्यात्मिक - को धुलते हुए देखें। कल्पना करें कि आप स्नान से महागौरी की तरह दीप्तिमान और पवित्र निकल रहे हैं।",
            anecdote: "🛁 दिव्य शावर विचार: कई भक्त इस शुद्धिकरण स्नान के दौरान गहरी आध्यात्मिक अंतर्दृष्टि प्राप्त करने की रिपोर्ट करते हैं - यह ऐसा है जैसे शारीरिक सफाई दिव्य ज्ञान के प्रवाह के लिए चैनल खोल देती है!"
          },
          {
            heading: "क्षमा समारोह",
            text: "सफेद कागज पर उन सभी लोगों को लिखें जिन्हें आप क्षमा करना चाहते हैं (खुद को भी शामिल करें) और सभी गलतियों को जिन्हें आप छोड़ना चाहते हैं। उनके मंत्र का जाप करते हुए इन कागजों को पवित्र अग्नि को अर्पित करें। फिर क्षमा के पत्र लिखें - आपको उन्हें भेजने की जरूरत नहीं, सच्चे इरादे से लिखने की क्रिया ही शक्तिशाली उपचार और मुक्ति बनाती है।",
            anecdote: "💌 ब्रह्मांडीय डाक सेवा: कुछ भक्त वास्तव में इस दिन ये क्षमा पत्र (या ईमेल!) भेजते हैं - वे चमत्कारी सुलह और उन रिश्तों के उपचार की रिपोर्ट करते हैं जो मरम्मत असंभव लग रहे थे!"
          },
          {
            heading: "सफेद प्रकाश ध्यान",
            text: "ध्यान में बैठें और उज्ज्वल सफेद प्रकाश को अपने मुकुट चक्र के माध्यम से प्रवेश करते और अपने पूरे अस्तित्व को भरते देखें। इस प्रकाश को सभी अंधकार, डर, क्रोध और नकारात्मकता को घोलते देखें। अपने आप को ताज़ी बर्फ की तरह शुद्ध और दीप्तिमान महसूस करें। यह ध्यान शुद्धिकरण ऊर्जा को एकीकृत करने और स्थायी आंतरिक शांति स्थापित करने में मदद करता है।",
            anecdote: "✨ ग्लो-अप ध्यान: अभ्यासी इस ध्यान के बाद सचमुच चमकते हुए महसूस करने का वर्णन करते हैं - कुछ कहते हैं कि लोग बाद में दिनों तक टिप्पणी करते हैं कि वे कितने दीप्तिमान और शांत दिख रहे हैं!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ महागौरी",
        content: [
          {
            heading: "मानसिक स्वास्थ्य और आंतरिक शांति",
            text: "उनकी ऊर्जा चिंता, अवसाद और भावनात्मक उथल-पुथल के लिए अविश्वसनीय रूप से उपचारक है। वे मानसिक स्वास्थ्य रिकवरी के लिए आवश्यक शांति और स्पष्टता प्रदान करती हैं। हिंदू ग्राहकों के साथ काम करने वाले कई चिकित्सक आघात के उपचार, अपराधबोध और शर्म को मुक्त करने, और आत्म-करुणा विकसित करने के लिए उनकी प्रतीकात्मकता को शामिल करते हैं। उनकी शुद्ध ऊर्जा दौड़ते विचारों को शांत करने और भावनात्मक स्थिरता प्रदान करने में मदद करती है।",
            anecdote: "🧘‍♀️ दिव्य चिकित्सा: एक मानसिक चिकित्सक रिपोर्ट करते हैं कि जो मरीज़ महागौरी की ऊर्जा से जुड़ते हैं वे अवसाद से तेज़ रिकवरी दिखाते हैं - वे 'आध्यात्मिक रूप से साफ' महसूस करने और उन भारी भावनाओं से मुक्त होने का वर्णन करते हैं जो उन्हें दबा रही थीं!"
          },
          {
            heading: "रिश्ते की चिकित्सा और क्षमा",
            text: "उनकी क्षमा ऊर्जा टूटे रिश्तों, पारिवारिक संघर्ष और रोमांटिक मुद्दों के उपचार के लिए शक्तिशाली है। वे लोगों को आक्रोश छोड़ने, प्रेम से संवाद करने और विश्वास को फिर से बनाने में मदद करती हैं। विवाह सलाहकार और पारिवारिक चिकित्सक अक्सर रिश्ते के संकट के दौरान उनकी पूजा की सिफारिश करते हैं क्योंकि उनकी ऊर्जा वास्तविक क्षमा और नई शुरुआत को सुविधाजनक बनाती है।",
            anecdote: "💕 प्रेम रीसेट बटन: एक कपल्स थेरेपिस्ट अपने ऑफिस में महागौरी की तस्वीर रखती हैं - वे कहती हैं कि यह जोड़ों को दोष और गुस्से से वास्तविक समझ और क्षमा की ओर जाने में मदद करती है, अक्सर केवल एक सत्र में!"
          },
          {
            heading: "नशा रिकवरी और स्वच्छ जीवन",
            text: "उनकी शुद्धिकरण ऊर्जा सभी प्रकार की लत से रिकवरी का समर्थन करती है - पदार्थ, व्यवहार या विषाक्त पैटर्न। वे संयम बनाए रखने के लिए आध्यात्मिक शक्ति और स्वस्थ विकल्प बनाने के लिए मानसिक स्पष्टता प्रदान करती हैं। रिकवरी प्रोग्राम अक्सर नई शुरुआत करने और स्वच्छ जीवन बनाए रखने के लिए आवश्यक शुद्धिकरण के लिए उनकी ऊर्जा का आह्वान करते हैं।",
            anecdote: "🚭 दिव्य डिटॉक्स: एक पुनर्वास केंद्र में महागौरी ध्यान उद्यान है जहां रिकवरी में मरीज़ उनकी सफेद प्रकाश कल्पना का अभ्यास करते हैं - वे 'आध्यात्मिक रूप से साफ' महसूस करने की रिपोर्ट करते हैं जो उन्हें अपनी शारीरिक संयम बनाए रखने में मदद करती है!"
          },
          {
            heading: "करियर संक्रमण और नई शुरुआत",
            text: "उनकी नई शुरुआत ऊर्जा करियर बदलाव, नई जगहों पर जाने या नए जीवन अध्याय शुरू करने के लिए सही है। वे क्या छोड़ना है यह जानने की स्पष्टता और नए अवसरों में कदम रखने का आत्मविश्वास प्रदान करती हैं। उद्यमी, छात्र और प्रमुख जीवन संक्रमण करने वाले कोई भी मार्गदर्शन और इरादों की शुद्धता के लिए उनकी ऊर्जा का सहारा लेते हैं।",
            anecdote: "🚀 करियर रीबूट देवी: एक टेक एक्जीक्यूटिव महागौरी प्रार्थनाओं का श्रेय कॉर्पोरेट जीवन से अपना खुद का वेलनेस स्टार्टअप चलाने के संक्रमण में मदद के लिए देती हैं - वे कहती हैं कि देवी ने उन्हें पुरानी सीमित मान्यताओं को 'डिलीट' करने और नई सशक्त मान्यताओं को 'इंस्टॉल' करने में मदद की!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "શુદ્ધ તેજમાં દિવ્ય પરિવર્તન",
        content: [
          {
            heading: "અંધકારથી પ્રકાશ સુધી",
            text: "માં મહાગૌરી દેવી દુર્ગાનું આઠમું રૂપ છે, જે અંધકારથી પ્રકાશ, અશુદ્ધતાથી પરમ પવિત્રતામાં સંપૂર્ણ પરિવર્તનનું પ્રતિનિધિત્વ કરે છે. દિવસ 7 પર કાલરાત્રિના તીવ્ર આધ્યાત્મિક વિનાશ પછી, મહાગૌરી શુદ્ધ, તેજસ્વી ચેતના તરીકે ઉભરે છે - તાજા બરફની જેમ સફેદ, ચંદ્રની જેમ ઉજ્જવળ, આત્માની તેની મૂળ પ્રિસ્ટાઇન અવસ્થામાં પરત ફરવાનું પ્રતીક. તેમનું નામ જ 'અત્યંત શુદ્ધ'નો અર્થ છે (મહા = મહાન, ગૌરી = ગોરી/શુદ્ધ).",
            anecdote: "❄️ દિવ્ય મેકઓવર: તેઓ બ્રહ્માંડની પરમ ગ્લો-અપ સ્ટોરી જેવા છે - ડરામણી કાલરાત્રિથી તેજસ્વી મહાગૌરી સુધી માત્ર એક દિવસમાં! આ સંપૂર્ણ આધ્યાત્મિક સ્પા પરિવર્તનની બ્રહ્માંડીય સમકક્ષ છે!"
          },
          {
            heading: "શુદ્ધિકરણની દંતકથા",
            text: "પુરાણો અનુસાર, જ્યારે પાર્વતીએ ભગવાન શિવને પામવા માટે કઠોર તપસ્યા કરી, ત્યારે વર્ષોના કઠોર અભ્યાસથી તેમનું શરીર કાળું થઈ ગયું અને ધૂળથી ભરાઈ ગયું. જ્યારે શિવે આખરે તેમની ભક્તિને સ્વીકારી, ત્યારે તેમણે તેમના વાળમાંથી વહેતા ગંગાના પવિત્ર જળમાં તેમને સ્નાન કરાવ્યું. તરત જ, તેઓ મહાગૌરી તરીકે ઉભરી આવ્યા - અત્યંત ગોરી, તેજસ્વી અને શુદ્ધ. આ પરિવર્તન દર્શાવે છે કે સાચી આધ્યાત્મિક સાધના, ભલે તે કેટલી પણ કઠિન હોય, આખરે શુદ્ધિકરણ અને દિવ્ય મિલન તરફ લઈ જાય છે.",
            anecdote: "🚿 બ્રહ્માંડીય સ્પા દિવસ: ભગવાન શિવ દ્વારા પોતે આકાશીય ગંગાથી સ્નાન કરાવવાની કલ્પના કરો - પરમ દિવ્ય ડિટોક્સ અને ગ્લો ટ્રીટમેન્ટ જે તમને ધૂળિયાથી બિલકુલ પ્રકાશમાન બનાવે છે!"
          },
          {
            heading: "નવી શરૂઆતની દેવી",
            text: "મહાગૌરી સંપૂર્ણ શુદ્ધિકરણ પછીની આત્માનું પ્રતિનિધિત્વ કરે છે - બધા ભૂતકાળના કર્મ ધોવાયા હુઓ, બધી નકારાત્મકતા દૂર કરવામાં આવી, નવી શરૂઆત માટે તૈયાર. તેઓ સફેદ બળદ (નંદી) પર બેસે છે, ત્રિશૂળ અને ડમરુ ધરાવે છે, અને તેમના ચાર હાથ નિર્ભયતા અને આશીર્વાદ આપે છે. તેમની શાંત અભિવ્યક્તિ બધા તોફાનોને સહન કર્યા પછી આવતી શાંતિ દર્શાવે છે. તેઓ દિવ્ય રીસેટ બટન છે - બધાને સાફ સ્લેટ સાથે નવી શરૂઆતની તક આપે છે.",
            anecdote: "🔄 આધ્યાત્મિક ફેક્ટરી રીસેટ: તેઓ તમારી આત્મા માટે 'ફેક્ટરી સેટિંગ્સ પર રિસ્ટોર' વિકલ્પ જેવા છે - નકારાત્મક કર્મના બધા બગ્સ, વાયરસ અને દૂષિત ફાઈલો સાફ થઈ જાય છે, અને તમને નવી આધ્યાત્મિક ઓપરેટિંગ સિસ્ટમ મળે છે!"
          }
        ]
      },
      significance: {
        title: "દિવસ 8 નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "સંપૂર્ણ શુદ્ધિકરણ",
            text: "મહાગૌરી તે આધ્યાત્મિક સફાઈ પ્રક્રિયાના પરિણામનું પ્રતિનિધિત્વ કરે છે જે કાલરાત્રિના વિનાશથી શરૂ થઈ હતી. તેઓ શુદ્ધિકૃત ચેતનાને નિયંત્રિત કરે છે - તે મન જે બધા નકારાત્મક વિચારો, લાગણીઓ અને કર્મના સંસ્કારોથી મુક્ત થઈ ગયું છે. તેમની પૂજા પાપો, નકારાત્મક કર્મ અને માનસિક અશુદ્ધતાઓને દૂર કરવામાં મદદ કરે છે, ભક્તને આધ્યાત્મિક સ્પષ્ટતાની પ્રિસ્ટાઇન અવસ્થામાં છોડી દે છે.",
            anecdote: "🧼 આત્મા સાબુ: મહાગૌરીની પ્રાર્થના કરવી એ બ્રહ્માંડના સૌથી મજબૂત આધ્યાત્મિક ડિટર્જન્ટનો ઉપયોગ કરવા જેવું છે - તે કર્મના એવા ડાઘ દૂર કરે છે જેના વિશે તમે જાણતા પણ ન હતા, તમારી ચેતનાને ચમકદાર સાફ છોડી દે છે!"
          },
          {
            heading: "શાંતિ અને ક્ષમા",
            text: "તેઓ ક્ષમાના દિવ્ય ગુણની મૂર્તિ છે - ભૂતકાળની ભૂલો માટે ક્ષમા મેળવવી અને બીજાઓને સંપૂર્ણ રીતે ક્ષમા કરવાની ક્ષમતા વિકસાવવી બંને. તેમનો શુદ્ધ સફેદ રંગ બધી ફરિયાદો, રોષ અને ગુસ્સો છોડવાથી આવતી શાંતિનું પ્રતિનિધિત્વ કરે છે. તેઓ શીખવે છે કે સાચી પવિત્રતા ક્યારેય ભૂલ ન કરવાથી નહીં, પરંતુ સંપૂર્ણ ક્ષમા અને આપણા અનુભવોમાંથી શીખવાથી આવે છે.",
            anecdote: "🕊️ દિવ્ય ક્ષમા મેનેજર: તેઓ બ્રહ્માંડીય HR વિભાગ રાખવા જેવા છે જે સંઘર્ષ નિરાકરણમાં વિશેષજ્ઞતા ધરાવે છે - બધી ભૂતકાળની ફરિયાદો, ભૂલો અને સંઘર્ષો દિવ્ય સમજ અને કરુણા સાથે હલ થઈ જાય છે!"
          },
          {
            heading: "નવીકરણ અને નવી શરૂઆત",
            text: "તેમની ઊર્જા નવી શરૂઆત માટે આધ્યાત્મિક ગતિ પ્રદાન કરે છે. દિવસ 7 ના વિનાશ પછી, તેઓ પુનર્જન્મ અને નવીકરણ માટે સર્જનાત્મક ઊર્જા પ્રદાન કરે છે. તેઓ ભક્તોને જૂના પેટર્ન, સંબંધો અને પરિસ્થિતિઓ છોડવામાં મદદ કરે છે જે હવે તેમના ઉચ્ચતમ કલ્યાણની સેવા કરતા નથી, અને આત્મવિશ્વાસ અને ઇરાદાની પવિત્રતા સાથે જીવનના નવા તબક્કાઓમાં પ્રવેશ કરવામાં મદદ કરે છે.",
            anecdote: "🌱 બ્રહ્માંડીય સ્પ્રિંગ ક્લીનિંગ: મહાગૌરીની પૂજા કરવી એ બ્રહ્માંડના શ્રેષ્ઠ લાઇફ કોચ રાખવા જેવું છે જે તમારા સમગ્ર અસ્તિત્વને મેરી કોંડો કરવામાં મદદ કરે છે - ફક્ત તે જ રાખવું જે આધ્યાત્મિક આનંદ આપે છે અને બાકી બધું કૃતજ્ઞતા સાથે છોડવું!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 8 ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "પ્રાતઃકાલીન પવિત્રતા પ્રાર્થનાઓ",
            text: "માં મહાગૌરીને સફેદ ફૂલો, ખાસ કરીને સફેદ કમળ, જાસ્મિન અને સફેદ ગુલાબ અર્પણ કરીને શરૂઆત કરો. સફેદ રંગ પવિત્રતા, શાંતિ અને નવી શરૂઆતનું પ્રતિનિધિત્વ કરે છે. સફેદ મોમબત્તીઓ અથવા ઘીના દીવાઓ પ્રગટાવો અને 'ॐ દેવી મહાગૌર્યૈ નમઃ'નો 108 વખત જાપ કરો જ્યારે તમારી જાતને શુદ્ધ સફેદ પ્રકાશથી ઘેરાયેલા જુઓ જે તમારા અસ્તિત્વના દરેક કોષને સાફ કરે છે.",
            anecdote: "🌸 સફેદ ફૂલ શક્તિ: ભક્તો આ દિવસે વિસ્તૃત સફેદ ફૂલોના મંડળ બનાવે છે - તેઓ કહે છે કે દરેક પાંખડી એક શુદ્ધિકૃત વિચારનું પ્રતિનિધિત્વ કરે છે, અને અંતે તમારું મન શુદ્ધ ઇરાદાઓના બગીચા જેવું બની જાય છે!"
          },
          {
            heading: "શુદ્ધિકરણ સ્નાન વિધિ",
            text: "આ પવિત્ર ઇરાદાઓ સાથે શુદ્ધિકારી સ્નાન કરવાનો પરંપરાગત દિવસ છે. જો શક્ય હોય તો તમારા સ્નાનમાં ગુલાબ જળ, દૂધ અથવા ગંગા જળ મેળવો. જેમ તમે સ્નાન કરો છો, બધી અશુદ્ધતાઓ - શારીરિક, માનસિક, ભાવનાત્મક અને આધ્યાત્મિક - ધોવાતી જોવાની કલ્પના કરો. સ્નાનમાંથી મહાગૌરીની જેમ તેજસ્વી અને શુદ્ધ બહાર આવવાની કલ્પના કરો.",
            anecdote: "🛁 દિવ્ય શાવર વિચારો: ઘણા ભક્તો આ શુદ્ધિકરણ સ્નાન દરમિયાન ગહન આધ્યાત્મિક અંતદૃષ્ટિ મેળવવાની જાણ કરે છે - એવું લાગે છે કે શારીરિક સફાઈ દિવ્ય શાણપણ વહેવા માટે ચેનલો ખોલે છે!"
          },
          {
            heading: "ક્ષમા સમારોહ",
            text: "સફેદ કાગળ પર તે બધા લોકો લખો જેમને તમે ક્ષમા કરવા માંગો છો (તમારી જાતને પણ સામેલ કરીને) અને બધી ભૂલો જેમને તમે છોડવા માંગો છો. તેમના મંત્રનો જાપ કરતા આ કાગળોને પવિત્ર અગ્નિને અર્પણ કરો. પછી ક્ષમાના પત્રો લખો - તમારે તેમને મોકલવાની જરૂર નથી, સાચા ઇરાદાથી લખવાની ક્રિયા જ શક્તિશાળી ઉપચાર અને મુક્તિ બનાવે છે.",
            anecdote: "💌 બ્રહ્માંડીય ટપાલ સેવા: કેટલાક ભક્તો ખરેખર આ દિવસે આ ક્ષમા પત્રો (અથવા ઇમેઇલ!) મોકલે છે - તેઓ ચમત્કારિક સમાધાન અને એવા સંબંધોના ઉપચારની જાણ કરે છે જે રિપેર અશક્ય લાગતા હતા!"
          },
          {
            heading: "સફેદ પ્રકાશ ધ્યાન",
            text: "ધ્યાનમાં બેસો અને ઉજ્જવળ સફેદ પ્રકાશને તમારા મુકુટ ચક્ર દ્વારા પ્રવેશ કરતા અને તમારા સમગ્ર અસ્તિત્વને ભરતા જુઓ. આ પ્રકાશને બધા અંધકાર, ડર, ગુસ્સો અને નકારાત્મકતાને ઓગાળતા જુઓ. તમારી જાતને તાજા બરફની જેમ શુદ્ધ અને તેજસ્વી અનુભવો. આ ધ્યાન શુદ્ધિકરણ ઊર્જાને એકીકૃત કરવામાં અને સ્થાયી આંતરિક શાંતિ સ્થાપિત કરવામાં મદદ કરે છે.",
            anecdote: "✨ ગ્લો-અપ ધ્યાન: સાધકો આ ધ્યાન પછી લિટરલી ચમકતા હોવાની લાગણીનું વર્ણન કરે છે - કેટલાક કહે છે કે લોકો દિવસો પછી પણ કમેન્ટ કરે છે કે તેઓ કેટલા તેજસ્વી અને શાંત દેખાય છે!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં મહાગૌરી",
        content: [
          {
            heading: "માનસિક આરોગ્ય અને આંતરિક શાંતિ",
            text: "તેમની ઊર્જા ચિંતા, ડિપ્રેશન અને ભાવનાત્મક ઉથલપાથલ માટે અવિશ્વસનીય રીતે ઉપચારક છે. તેઓ માનસિક આરોગ્ય પુનઃપ્રાપ્તિ માટે જરૂરી શાંતિ અને સ્પષ્ટતા પ્રદાન કરે છે. હિંદુ ક્લાયન્ટ્સ સાથે કામ કરતા ઘણા ચિકિત્સકો આઘાતનું ઉપચાર, અપરાધ અને શરમ છોડવા, અને સ્વ-કરુણા વિકસાવવા માટે તેમની પ્રતીકાત્મકતાનો સમાવેશ કરે છે. તેમની શુદ્ધ ઊર્જા દોડતા વિચારોને શાંત કરવામાં અને ભાવનાત્મક સ્થિરતા પ્રદાન કરવામાં મદદ કરે છે.",
            anecdote: "🧘‍♀️ દિવ્ય થેરાપી: એક મનોચિકિત્સક જણાવે છે કે જે દર્દીઓ મહાગૌરીની ઊર્જા સાથે જોડાય છે તેઓ ડિપ્રેશનથી ઝડપી પુનઃપ્રાપ્તિ બતાવે છે - તેઓ 'આધ્યાત્મિક રૂપે સાફ' લાગવાનું અને તેમને દબાવતી ભારે લાગણીઓથી મુક્ત થવાનું વર્ણન કરે છે!"
          },
          {
            heading: "સંબંધ ઉપચાર અને ક્ષમા",
            text: "તેમની ક્ષમા ઊર્જા તૂટેલા સંબંધો, પારિવારિક સંઘર્ષ અને રોમેન્ટિક મુદ્દાઓના ઉપચાર માટે શક્તિશાળી છે. તેઓ લોકોને રોષ છોડવા, પ્રેમ સાથે સંવાદ કરવા અને વિશ્વાસ ફરીથી બનાવવામાં મદદ કરે છે. લગ્ન સલાહકારો અને કુટુંબ ચિકિત્સકો ઘણીવાર સંબંધ સંકટ દરમિયાન તેમની પૂજાની ભલામણ કરે છે કારણ કે તેમની ઊર્જા સાચી ક્ષમા અને નવી શરૂઆતને સુવિધાજનક બનાવે છે.",
            anecdote: "💕 પ્રેમ રીસેટ બટન: એક કપલ્સ થેરાપિસ્ટ પોતાની ઓફિસમાં મહાગૌરીની છબી રાખે છે - તેઓ કહે છે કે તે કપલ્સને દોષ અને ગુસ્સાથી સાચી સમજ અને ક્ષમા તરફ જવામાં મદદ કરે છે, ઘણીવાર માત્ર એક સત્રમાં!"
          },
          {
            heading: "લત પુનઃપ્રાપ્તિ અને સ્વચ્છ જીવન",
            text: "તેમની શુદ્ધિકરણ ઊર્જા બધા પ્રકારની લતથી પુનઃપ્રાપ્તિને સમર્થન આપે છે - પદાર્થો, વર્તણૂકો અથવા ઝેરી પેટર્ન. તેઓ સંયમ જાળવવા માટે આધ્યાત્મિક શક્તિ અને આરોગ્યપ્રદ પસંદગીઓ કરવા માટે માનસિક સ્પષ્ટતા પ્રદાન કરે છે. પુનઃપ્રાપ્તિ પ્રોગ્રામ્સ ઘણીવાર નવી શરૂઆત કરવા અને સ્વચ્છ જીવન જાળવવા માટે જરૂરી શુદ્ધિકરણ માટે તેમની ઊર્જાનું આહ્વાન કરે છે.",
            anecdote: "🚭 દિવ્ય ડિટોક્સ: એક પુનર્વસન કેન્દ્રમાં મહાગૌરી ધ્યાન બગીચો છે જ્યાં પુનઃપ્રાપ્તિમાં દર્દીઓ તેમના સફેદ પ્રકાશ વિઝ્યુલાઇઝેશનનો અભ્યાસ કરે છે - તેઓ 'આધ્યાત્મિક રૂપે સ્વચ્છ' લાગવાની જાણ કરે છે જે તેમને તેમની શારીરિક સંયમ જાળવવામાં મદદ કરે છે!"
          },
          {
            heading: "કેરિયર પરિવર્તન અને નવી શરૂઆત",
            text: "તેમની નવી શરૂઆતની ઊર્જા કેરિયર બદલાવ, નવા સ્થળોએ જવા અથવા નવા જીવન અધ્યાય શરૂ કરવા માટે યોગ્ય છે. તેઓ શું છોડવાનું છે તે જાણવાની સ્પષ્ટતા અને નવી તકોમાં પ્રવેશ કરવાનો આત્મવિશ્વાસ પ્રદાન કરે છે. ઉદ્યોગસાહસિકો, વિદ્યાર્થીઓ અને મુખ્ય જીવન પરિવર્તન કરનાર કોઈપણ વ્યક્તિ માર્ગદર્શન અને ઇરાદાઓની પવિત્રતા માટે તેમની ઊર્જાનો સહારો લે છે.",
            anecdote: "🚀 કેરિયર રીબૂટ દેવી: એક ટેક એક્ઝિક્યુટિવ મહાગૌરી પ્રાર્થનાઓનો શ્રેય કોર્પોરેટ જીવનથી પોતાનો વેલનેસ સ્ટાર્ટઅપ ચલાવવાના સંક્રમણમાં મદદ માટે આપે છે - તેઓ કહે છે કે દેવીએ તેમને જૂની મર્યાદિત માન્યતાઓને 'ડિલીટ' કરવા અને નવી સશક્ત માન્યતાઓને 'ઇન્સ્ટોલ' કરવામાં મદદ કરી!"
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
        <title>Navratri Day 8: Maa Mahagauri - The Pure Radiant One</title>
        <meta name="description" content="Explore the spiritual significance and sacred stories of Maa Mahagauri on Day 8 of Navratri. Discover rituals, mantras, and modern relevance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-white to-teal-50 border-b border-teal-200 shadow-sm">
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
                      router.push(`/navratri-day-8?lang=${e.target.value}`);
                    }}
                    className="appearance-none bg-white border border-gray-200 text-gray-700 px-3 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium shadow-sm text-sm"
                  >
                    {languages.map(lang => (
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
                  <div className="text-2xl sm:text-3xl">🔉️</div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{t.day8}</h1>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-gray-600 italic mb-3">"{t.meaning}"</p>

                {/* Today's Color - Mobile */}
                <div className="inline-block bg-white rounded-lg px-3 py-2 border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 font-medium mb-1">{t.todaysColor}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 border-2 border-gray-400 rounded-full"></div>
                      <span className="font-semibold text-gray-800 text-sm">{t.peacockGreen}</span>
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
                      router.push(`/navratri-day-8?lang=${e.target.value}`);
                    }}
                    className="appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium shadow-sm"
                  >
                    {languages.map(lang => (
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
                  <div className="text-3xl">🪶</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.day8}</h1>
                  </div>
                </div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-gray-600 italic">"{t.meaning}"</p>
              </div>

              {/* Right side - Today's Color */}
              <div className="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">{t.todaysColor}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-teal-500 border-2 border-gray-400 rounded-full"></div>
                    <span className="font-semibold text-gray-800 text-sm">{t.peacockGreen}</span>
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
              onClick={() => router.push(`/navratri-day-7?lang=${currentLang}`)}
              className="flex items-center px-3 sm:px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm text-sm sm:text-base"
            >
              {t.backToDay7}
            </button>
            <div className="text-center">
              <div className="flex space-x-1 sm:space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                      day === 8
                        ? 'bg-teal-500 text-white shadow-lg'
                        : day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6 || day === 7
                        ? 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    onClick={() => {
                      if (day === 1) router.push(`/navratri-day-1?lang=${currentLang}`);
                      if (day === 2) router.push(`/navratri-day-2?lang=${currentLang}`);
                      if (day === 3) router.push(`/navratri-day-3?lang=${currentLang}`);
                      if (day === 4) router.push(`/navratri-day-4?lang=${currentLang}`);
                      if (day === 5) router.push(`/navratri-day-5?lang=${currentLang}`);
                      if (day === 6) router.push(`/navratri-day-6?lang=${currentLang}`);
                      if (day === 7) router.push(`/navratri-day-7?lang=${currentLang}`);
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-20 sm:w-32"></div> {/* Spacer to balance layout */}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {Object.entries(t.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-sm sm:text-base ${
                  activeTab === key
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-teal-50 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-teal-100">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 text-teal-800">
              {currentContent.title}
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {currentContent.content.map((section, index) => (
                <div key={index} className="relative">
                  {/* Section */}
                  <div className="bg-gradient-to-r from-white to-teal-50 rounded-xl p-4 sm:p-6 mb-3 sm:mb-4 border border-teal-100">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <span className="text-xl sm:text-2xl mr-2 sm:mr-3">✨</span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {section.text}
                    </p>
                  </div>

                  {/* Anecdote Box */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 sm:p-5 border-l-4 border-teal-500 ml-2 sm:ml-4">
                    <div className="flex items-start">
                      <div className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">💡</div>
                      <p className="text-teal-800 font-medium italic text-sm sm:text-base">
                        {section.anecdote}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < currentContent.content.length - 1 && (
                    <div className="flex justify-center my-6 sm:my-8">
                      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-teal-200">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🙏</div>
                <h3 className="text-xl sm:text-2xl font-bold text-teal-800 mb-3 sm:mb-4">
                  {t.blessing}
                </h3>
                <p className="text-teal-600 text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
                  {t.blessingDesc}
                </p>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg max-w-md mx-auto border border-teal-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-sm sm:text-base">{t.todaysMantra}</h4>
                  <div className="text-base sm:text-lg font-semibold text-teal-700 sanskrit mb-2">
                    ॐ देवी महागौर्यै नमः
                  </div>
                  <div className="text-gray-600 italic text-sm sm:text-base">
                    "Om Devi Mahagauryai Namah"
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {t.chantTimes}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to Next Day */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-teal-200">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{t.continueJourney}</p>
              <button
                onClick={() => router.push(`/navratri-day-9?lang=${currentLang}`)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-pink-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                {t.day9Coming}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}