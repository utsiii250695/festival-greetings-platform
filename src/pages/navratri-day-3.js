import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay3() {
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
      day3: "Day 3",
      goddess: "Maa Chandraghanta",
      meaning: "The Goddess with Moon-Bell",
      todaysColor: "Today's Color",
      yellow: "Yellow",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Chandraghanta Bless You",
      blessingDesc: "With the courage to face all challenges, the wisdom to make right decisions, and the divine protection to overcome any obstacles in your path.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Continue your spiritual journey",
      day4Coming: "Day 4 coming soon! 🙏",
      day4Button: "Day 4: Maa Kushmanda ☀️",
      backToDay2: "← Day 2: Maa Brahmacharini"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day3: "दिन 3",
      goddess: "माँ चंद्रघंटा",
      meaning: "चंद्र-घंटा वाली देवी",
      todaysColor: "आज का रंग",
      yellow: "पीला",
      tabs: {
        story: "📖 पवित्र कथा",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 विधियाँ व प्रार्थनाएं",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ चंद्रघंटा आपको आशीर्वाद दें",
      blessingDesc: "सभी चुनौतियों का सामना करने का साहस, सही निर्णय लेने की बुद्धि, और आपके रास्ते की किसी भी बाधा को दूर करने की दिव्य सुरक्षा के साथ।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जाप करें",
      continueJourney: "अपनी आध्यात्मिक यात्रा जारी रखें",
      day4Coming: "दिन 4 जल्दी आ रहा है! 🙏",
      day4Button: "दिन 4: माँ कूष्मांडा ☀️",
      backToDay2: "← दिन 2: माँ ब्रह्मचारिणी"
    },
    gu: {
      backToNavratri: "નવરાત્રિ પર પાછા",
      day3: "દિવસ 3",
      goddess: "માં ચંદ્રઘંટા",
      meaning: "ચંદ્ર-ઘંટા વાળી દેવી",
      todaysColor: "આજનો રંગ",
      yellow: "પીળો",
      tabs: {
        story: "📖 પવિત્ર કથા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 વિધિઓ અને પ્રાર્થનાઓ",
        modern: "🌟 આધુનિક સંદર્ભ"
      },
      blessing: "માં ચંદ્રઘંટા તમને આશીર્વાદ આપે",
      blessingDesc: "બધી પડકારોનો સામનો કરવાની હિંમત, સાચા નિર્ણયો લેવાની બુદ્ધિ, અને તમારા રસ્તાની કોઈપણ અવરોધને દૂર કરવાની દિવ્ય સુરક્ષા સાથે।",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "મહત્તમ આશીર્વાદ માટે આ 108 વખત જાપ કરો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા ચાલુ રાખો",
      day4Coming: "દિવસ 4 જલ્દી આવે છે! 🙏",
      day4Button: "દિવસ 4: માં કુષ્માંડા ☀️",
      backToDay2: "← દિવસ 2: માં બ્રહ્મચારિણી"
    }
  };

  const content = {
    en: {
      story: {
        title: "The Birth of Maa Chandraghanta",
        content: [
          {
            heading: "The Divine Marriage Transformation",
            text: "After Lord Shiva accepted Parvati as his bride following her intense penance as Brahmacharini, their wedding day arrived. However, when Shiva appeared at the ceremony with his usual fierce appearance - adorned with snakes, ash, and accompanied by ghosts and goblins - Parvati's mother Menaka and all the wedding guests were terrified. To save the situation and her family's honor, Parvati transformed herself into a fierce, warrior-like form.",
            anecdote: "🎭 Fun fact: This was the first time the gentle Parvati revealed her Shakti power to protect her family's dignity - showing that even the most compassionate can be fierce when needed!"
          },
          {
            heading: "The Moon-Bell Crown",
            text: "In this new form, she adorned her forehead with a half-moon (Chandra) shaped like a bell (Ghanta), hence the name 'Chandraghanta'. This crescent moon bell not only added to her beauty but also became a symbol of her readiness for battle. Her ten hands carried various weapons, and she rode a fierce lion, ready to protect righteousness and destroy evil forces.",
            anecdote: "🌙 The bell-shaped moon on her forehead produces the sacred sound 'Om' continuously, which purifies the atmosphere and drives away negative energies - like a divine air purifier!"
          },
          {
            heading: "The Protector Emerges",
            text: "With her transformation, Maa Chandraghanta established herself as the fierce protector aspect of the Divine Mother. She became the guardian who fights demons, protects devotees from harm, and ensures justice prevails. Her fierce appearance intimidated even the most powerful demons, while her compassionate heart blessed her devotees with courage and fearlessness.",
            anecdote: "⚔️ Legend says that when she rings the bell on her forehead during battles, the sound is so powerful that even the bravest demons flee in terror, but to her devotees, it sounds like the most beautiful celestial music!"
          }
        ]
      },
      significance: {
        title: "Day 3 Spiritual Significance",
        content: [
          {
            heading: "Solar Plexus Chakra Activation",
            text: "Maa Chandraghanta governs the Solar Plexus Chakra (Manipura), located in the stomach area. This chakra represents personal power, confidence, self-esteem, and our ability to control our lives. Her worship helps us develop inner strength and overcome fear and anxiety.",
            anecdote: "💛 The solar plexus chakra glows in bright yellow - the color of the sun, confidence, and personal power. It's literally your inner sunshine!"
          },
          {
            heading: "Balance of Beauty and Strength",
            text: "She perfectly embodies the balance between feminine grace and warrior strength. This teaches us that we can be gentle and compassionate while still being strong and protective when needed. True power lies in knowing when to be soft and when to be fierce.",
            anecdote: "🦁 Like her lion mount, she shows us how to have both the gentleness of a cat and the roar of a lion - adapting our energy to what the situation requires!"
          },
          {
            heading: "Protection from Negativity",
            text: "The constant ringing of her moon-bell creates a protective shield around her devotees, warding off negative energies, evil influences, and psychic attacks. She is especially powerful in protecting against fears, phobias, and mental disturbances.",
            anecdote: "🔔 Many devotees report that after praying to her, they feel an invisible protective shield around them - like having a divine bodyguard 24/7!"
          }
        ]
      },
      rituals: {
        title: "Day 3 Sacred Rituals",
        content: [
          {
            heading: "Morning Warrior Prayers",
            text: "Begin at dawn by offering yellow flowers, especially marigolds and yellow roses to Maa Chandraghanta. Yellow represents the sun's energy and courage. Light a ghee lamp and chant 'Om Devi Chandraghantayai Namah' 108 times while visualizing her fierce yet beautiful form protecting you.",
            anecdote: "🌻 Pro tip: If you can't find yellow flowers, offer turmeric powder or yellow sweets - the color intention matters more than the specific flower!"
          },
          {
            heading: "Courage Building Rituals",
            text: "This is the perfect day to ask for courage to face your fears and challenges. Write down your fears on paper and symbolically burn them while chanting her mantra. Place her image or symbol in areas where you need protection - your workspace, car, or home entrance.",
            anecdote: "🔥 Confidence ritual: Many devotees carry a small yellow cloth blessed by her during important meetings or challenging situations - it's like carrying divine courage in your pocket!"
          },
          {
            heading: "Golden Hour Meditation",
            text: "Meditate during sunrise (golden hour) while wearing yellow clothes. Focus on your solar plexus chakra and imagine it glowing with bright yellow light. This practice helps build confidence and personal power while connecting with her solar energy.",
            anecdote: "☀️ Life hack: CEOs and leaders often do this meditation before important presentations or decisions - they call it their 'golden confidence boost'!"
          },
          {
            heading: "Evening Protection Prayers",
            text: "In the evening, perform aarti while ringing a small bell to mimic her divine bell's sound. Ask for protection for your loved ones and yourself. Share yellow-colored prasadam like laddu, halwa, or yellow rice with family and neighbors.",
            anecdote: "🍯 Golden prasadam: Honey mixed with turmeric powder makes an excellent offering and health tonic - ancient Ayurveda meets devotional practice!"
          }
        ]
      },
      modern: {
        title: "Maa Chandraghanta in Modern Life",
        content: [
          {
            heading: "Leadership and Confidence",
            text: "In corporate and leadership roles, her energy helps develop assertiveness without aggression. She teaches us how to be strong leaders who can make tough decisions while maintaining compassion. Her blessing is particularly powerful for those in management positions or facing workplace challenges.",
            anecdote: "👔 Success story: A Mumbai executive credits daily prayers to Maa Chandraghanta for her promotion to CEO - she says it gave her the courage to voice her ideas and lead with both strength and empathy!"
          },
          {
            heading: "Women's Safety and Empowerment",
            text: "She is especially revered by women seeking protection and empowerment. Her fierce energy provides courage to stand up against injustice, harassment, or discrimination. Many women pray to her before traveling alone or facing difficult situations.",
            anecdote: "🛡️ Modern protection: Women often carry her image or chant her mantra while using ride-sharing apps or walking alone at night - they report feeling divinely protected!"
          },
          {
            heading: "Mental Health and Anxiety",
            text: "Her bell's vibrations are believed to calm anxiety and panic attacks. Modern practitioners combine her meditation with breathing exercises and therapy for treating anxiety disorders, PTSD, and confidence issues. Her energy provides the courage to seek help and face mental health challenges.",
            anecdote: "🧠 Therapeutic approach: Some progressive therapists incorporate her visualizations in confidence-building sessions - patients imagine her protective energy surrounding them during panic attacks!"
          },
          {
            heading: "Social Justice and Activism",
            text: "Activists and social workers draw inspiration from her warrior energy to fight for justice and protect the vulnerable. She provides the courage to speak truth to power and stand up for what's right, even when it's difficult or dangerous.",
            anecdote: "⚖️ Modern warriors: Several human rights lawyers and activists have her image in their offices, drawing daily inspiration from her fearless protection of dharma (righteousness)!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "माँ चंद्रघंटा का जन्म",
        content: [
          {
            heading: "दिव्य विवाह का रूपांतरण",
            text: "ब्रह्मचारिणी के रूप में कठोर तपस्या के बाद भगवान शिव द्वारा पार्वती को अपनी दुल्हन के रूप में स्वीकार करने के बाद, उनका विवाह दिन आ गया। हालांकि, जब शिव अपने सामान्य भयानक रूप में - सांपों से सजे, राख लगाए, और भूत-प्रेतों के साथ - समारोह में प्रकट हुए, तो पार्वती की मां मेनका और सभी विवाह अतिथि भयभीत हो गए। स्थिति को संभालने और अपने परिवार के सम्मान को बचाने के लिए, पार्वती ने खुद को एक भयंकर, योद्धा जैसे रूप में बदल लिया।",
            anecdote: "🎭 मजेदार तथ्य: यह पहली बार था जब कोमल पार्वती ने अपने परिवार की गरिमा की रक्षा के लिए अपनी शक्ति का प्रकटीकरण किया - यह दिखाते हुए कि सबसे दयालु भी जरूरत पड़ने पर भयंकर हो सकते हैं!"
          },
          {
            heading: "चंद्र-घंटा का मुकुट",
            text: "इस नए रूप में, उन्होंने अपने माथे पर एक अर्धचंद्र (चंद्र) को घंटे (घंटा) के आकार में सजाया, इसलिए नाम 'चंद्रघंटा' पड़ा। यह अर्धचंद्र घंटा न केवल उनकी सुंदरता में वृद्धि करता था बल्कि युद्ध के लिए उनकी तैयारी का प्रतीक भी बना। उनके दस हाथों में विभिन्न हथियार थे, और वे एक भयंकर सिंह पर सवार थीं, धर्म की रक्षा करने और दुष्ट शक्तियों को नष्ट करने के लिए तैयार।",
            anecdote: "🌙 उनके माथे पर घंटे के आकार का चंद्रमा निरंतर पवित्र ध्वनि 'ॐ' उत्पन्न करता है, जो वातावरण को शुद्ध करता है और नकारात्मक ऊर्जाओं को दूर भगाता है - जैसे एक दिव्य वायु शुद्धक!"
          },
          {
            heading: "रक्षक का उदय",
            text: "अपने रूपांतरण के साथ, माँ चंद्रघंटा ने खुद को दिव्य माता के भयंकर रक्षक पहलू के रूप में स्थापित किया। वे संरक्षक बनीं जो राक्षसों से लड़ती हैं, भक्तों को नुकसान से बचाती हैं, और न्याय की विजय सुनिश्चित करती हैं। उनका भयंकर रूप सबसे शक्तिशाली राक्षसों को भी डराता था, जबकि उनका दयालु हृदय अपने भक्तों को साहस और निर्भयता का आशीर्वाद देता था।",
            anecdote: "⚔️ पौराणिक कथा कहती है कि जब वे युद्ध के दौरान अपने माथे की घंटी बजाती हैं, तो आवाज इतनी शक्तिशाली होती है कि सबसे बहादुर राक्षस भी भय से भाग जाते हैं, लेकिन उनके भक्तों को यह सबसे सुंदर स्वर्गीय संगीत की तरह लगती है!"
          }
        ]
      },
      significance: {
        title: "दिन 3 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "सोलर प्लेक्सस चक्र सक्रियता",
            text: "माँ चंद्रघंटा सोलर प्लेक्सस चक्र (मणिपुर) को नियंत्रित करती हैं, जो पेट के क्षेत्र में स्थित है। यह चक्र व्यक्तिगत शक्ति, आत्मविश्वास, आत्म-सम्मान और हमारे जीवन को नियंत्रित करने की क्षमता का प्रतिनिधित्व करता है। उनकी पूजा से हमें आंतरिक शक्ति विकसित करने और डर व चिंता पर काबू पाने में मदद मिलती है।",
            anecdote: "💛 सोलर प्लेक्सस चक्र उज्ज्वल पीले रंग में चमकता है - सूरज, आत्मविश्वास और व्यक्तिगत शक्ति का रंग। यह सचमुच आपकी आंतरिक धूप है!"
          },
          {
            heading: "सुंदरता और शक्ति का संतुलन",
            text: "वे स्त्री अनुग्रह और योद्धा शक्ति के बीच संपूर्ण संतुलन का प्रतीक हैं। यह हमें सिखाता है कि हम कोमल और दयालु हो सकते हैं और फिर भी जरूरत पड़ने पर मजबूत और सुरक्षात्मक हो सकते हैं। सच्ची शक्ति यह जानने में है कि कब नरम होना है और कब भयंकर होना है।",
            anecdote: "🦁 अपने सिंह वाहन की तरह, वे हमें दिखाती हैं कि कैसे बिल्ली की कोमलता और सिंह की दहाड़ दोनों रखी जाए - स्थिति की आवश्यकता के अनुसार अपनी ऊर्जा को अनुकूलित करना!"
          },
          {
            heading: "नकारात्मकता से सुरक्षा",
            text: "उनकी चंद्र-घंटी की निरंतर ध्वनि उनके भक्तों के चारों ओर एक सुरक्षात्मक ढाल बनाती है, जो नकारात्मक ऊर्जाओं, दुष्ट प्रभावों और मानसिक आक्रमणों को दूर रखती है। वे डर, भय और मानसिक विकारों से सुरक्षा में विशेष रूप से शक्तिशाली हैं।",
            anecdote: "🔔 कई भक्त बताते हैं कि उनसे प्रार्थना करने के बाद, वे अपने चारों ओर एक अदृश्य सुरक्षा ढाल महसूस करते हैं - जैसे 24/7 दिव्य अंगरक्षक हो!"
          }
        ]
      },
      rituals: {
        title: "दिन 3 की पवित्र विधियाँ",
        content: [
          {
            heading: "प्रातःकालीन योद्धा प्रार्थनाएं",
            text: "भोर में माँ चंद्रघंटा को पीले फूल, खासकर गेंदे और पीले गुलाब अर्पित करके शुरुआत करें। पीला रंग सूर्य की ऊर्जा और साहस का प्रतिनिधित्व करता है। घी का दीपक जलाएं और उनके भयंकर फिर भी सुंदर रूप की कल्पना करते हुए 'ॐ देवी चंद्रघंटायै नमः' का 108 बार जाप करें जो आपकी रक्षा कर रहा है।",
            anecdote: "🌻 गुरु टिप: यदि आपको पीले फूल नहीं मिलते, तो हल्दी पाउडर या पीली मिठाइयां अर्पित करें - रंग की नीयत विशिष्ट फूल से अधिक महत्वपूर्ण है!"
          },
          {
            heading: "साहस निर्माण की विधियाँ",
            text: "यह आपके डर और चुनौतियों का सामना करने के लिए साहस मांगने का सही दिन है। अपने डर को कागज पर लिखें और उनका मंत्र जाप करते हुए प्रतीकात्मक रूप से जलाएं। जहां आपको सुरक्षा चाहिए - आपके कार्यक्षेत्र, कार या घर के प्रवेश द्वार पर उनकी तस्वीर या प्रतीक रखें।",
            anecdote: "🔥 आत्मविश्वास की विधि: कई भक्त महत्वपूर्ण बैठकों या चुनौतीपूर्ण स्थितियों के दौरान उनसे आशीर्वादित एक छोटा पीला कपड़ा रखते हैं - यह जेब में दिव्य साहस रखने जैसा है!"
          },
          {
            heading: "स्वर्णिम घंटे का ध्यान",
            text: "पीले कपड़े पहनकर सूर्योदय (स्वर्णिम घंटा) के दौरान ध्यान करें। अपने सोलर प्लेक्सस चक्र पर ध्यान दें और कल्पना करें कि यह उज्ज्वल पीली रोशनी से चमक रहा है। यह अभ्यास आत्मविश्वास और व्यक्तिगत शक्ति बनाने में मदद करता है जबकि उनकी सौर ऊर्जा से जुड़ता है।",
            anecdote: "☀️ जीवन हैक: CEO और नेता अक्सर महत्वपूर्ण प्रस्तुतियों या निर्णयों से पहले यह ध्यान करते हैं - वे इसे अपना 'स्वर्णिम आत्मविश्वास बूस्ट' कहते हैं!"
          },
          {
            heading: "सांझ की सुरक्षा प्रार्थनाएं",
            text: "शाम को उनकी दिव्य घंटी की आवाज की नकल करने के लिए एक छोटी घंटी बजाते हुए आरती करें। अपने प्रियजनों और खुद के लिए सुरक्षा मांगें। परिवार और पड़ोसियों के साथ लड्डू, हलवा या पीले चावल जैसे पीले रंग के प्रसादम को बांटें।",
            anecdote: "🍯 स्वर्णिम प्रसादम: हल्दी पाउडर के साथ मिश्रित शहद एक उत्कृष्ट अर्पण और स्वास्थ्य टॉनिक बनता है - प्राचीन आयुर्वेद भक्ति अभ्यास से मिलता है!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ चंद्रघंटा",
        content: [
          {
            heading: "नेतृत्व और आत्मविश्वास",
            text: "कॉर्पोरेट और नेतृत्व भूमिकाओं में, उनकी ऊर्जा आक्रामकता के बिना दृढ़ता विकसित करने में मदद करती है। वे हमें सिखाती हैं कि कैसे मजबूत नेता बनें जो करुणा बनाए रखते हुए कठिन निर्णय ले सकें। उनका आशीर्वाद प्रबंधन पदों पर या कार्यक्षेत्र की चुनौतियों का सामना करने वालों के लिए विशेष रूप से शक्तिशाली है।",
            anecdote: "👔 सफलता की कहानी: एक मुंबई कार्यकारी माँ चंद्रघंटा की दैनिक प्रार्थनाओं का श्रेय अपनी CEO पदोन्नति को देती है - वे कहती हैं कि इससे उन्हें अपने विचार व्यक्त करने और शक्ति व सहानुभूति दोनों के साथ नेतृत्व करने का साहस मिला!"
          },
          {
            heading: "महिला सुरक्षा और सशक्तिकरण",
            text: "सुरक्षा और सशक्तिकरण चाहने वाली महिलाओं द्वारा उनकी विशेष रूप से पूजा की जाती है। उनकी भयंकर ऊर्जा अन्याय, उत्पीड़न या भेदभाव के खिलाफ खड़े होने का साहस प्रदान करती है। कई महिलाएं अकेले यात्रा करने या कठिन स्थितियों का सामना करने से पहले उनसे प्रार्थना करती हैं।",
            anecdote: "🛡️ आधुनिक सुरक्षा: महिलाएं अक्सर राइड-शेयरिंग ऐप्स का उपयोग करते समय या रात में अकेले चलते समय उनकी तस्वीर रखती हैं या उनके मंत्र का जाप करती हैं - वे दिव्य रूप से सुरक्षित महसूस करने की रिपोर्ट करती हैं!"
          },
          {
            heading: "मानसिक स्वास्थ्य और चिंता",
            text: "उनकी घंटी के कंपन चिंता और पैनिक अटैक को शांत करने में सहायक माने जाते हैं। आधुनिक साधक चिंता विकार, PTSD और आत्मविश्वास की समस्याओं के इलाज के लिए उनके ध्यान को सांस की तकनीकों और थेरेपी के साथ जोड़ते हैं। उनकी ऊर्जा मदद मांगने और मानसिक स्वास्थ्य चुनौतियों का सामना करने का साहस प्रदान करती है।",
            anecdote: "🧠 चिकित्सीय दृष्टिकोण: कुछ प्रगतिशील चिकित्सक आत्मविश्वास निर्माण सत्रों में उनकी कल्पनाओं को शामिल करते हैं - मरीज़ पैनिक अटैक के दौरान उनकी सुरक्षात्मक ऊर्जा से घिरे होने की कल्पना करते हैं!"
          },
          {
            heading: "सामाजिक न्याय और सक्रियता",
            text: "कार्यकर्ता और समाजसेवी न्याय के लिए लड़ने और कमजोरों की रक्षा करने के लिए उनकी योद्धा ऊर्जा से प्रेरणा लेते हैं। वे शक्ति के सामने सच बोलने और सही के लिए खड़े होने का साहस प्रदान करती हैं, भले ही यह कठिन या खतरनाक हो।",
            anecdote: "⚖️ आधुनिक योद्धा: कई मानवाधिकार वकीलों और कार्यकर्ताओं के कार्यालयों में उनकी तस्वीर है, जो धर्म (न्याय) की निर्भीक सुरक्षा से दैनिक प्रेरणा लेते हैं!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "માં ચંદ્રઘંટાનો જન્મ",
        content: [
          {
            heading: "દિવ્ય લગ્નનું રૂપાંતરણ",
            text: "બ્રહ્મચારિણી તરીકે કઠોર તપસ્યા પછી ભગવાન શિવે પાર્વતીને તેમની દુલ્હન તરીકે સ્વીકાર કર્યા પછી, તેમના લગ્નનો દિવસ આવ્યો. જો કે, જ્યારે શિવ તેમના સામાન્ય ભયંકર રૂપમાં - સાપથી સજ્જ, રાખ લગાવીને, અને ભૂત-પ્રેતોના સાથે - સમારોહમાં પ્રગટ થયા, ત્યારે પાર્વતીની માતા મેનકા અને બધા લગ્ન મહેમાનો ભયભીત થઈ ગયા. પરિસ્થિતિને સંભાળવા અને પોતાના કુટુંબના સન્માનને બચાવવા માટે, પાર્વતીએ પોતાને એક ભયંકર, યોદ્ધા જેવા રૂપમાં પરિવર્તિત કર્યા.",
            anecdote: "🎭 મજાનો તથ્ય: આ પ્રથમ વખત હતું જ્યારે સૌમ્ય પાર્વતીએ પોતાના કુટુંબની ગરિમાની રક્ષા માટે પોતાની શક્તિ શક્તિનું પ્રદર્શન કર્યું - દર્શાવતા કે સૌથી દયાળુ પણ જરૂર પડ્યે ભયંકર બની શકે છે!"
          },
          {
            heading: "ચંદ્ર-ઘંટાનો મુકુટ",
            text: "આ નવા રૂપમાં, તેમણે પોતાના કપાળ પર અર્ધચંદ્ર (ચંદ્ર)ને ઘંટા (ઘંટા) આકારમાં સજાવ્યો, તેથી નામ 'ચંદ્રઘંટા' પડ્યું. આ અર્ધચંદ્ર ઘંટા માત્ર તેમની સુંદરતામાં વધારો કરતા ન હતા પરંતુ યુદ્ધ માટે તેમની તૈયારીનું પ્રતીક પણ બન્યા. તેમના દસ હાથોમાં વિવિધ હથિયારો હતા, અને તેઓ એક ભયંકર સિંહ પર સવાર હતા, ધર્મની રક્ષા અને દુષ્ટ શક્તિઓનો નાશ કરવા તૈયાર.",
            anecdote: "🌙 તેમના કપાળ પર ઘંટા આકારનો ચંદ્ર સતત પવિત્ર ધ્વનિ 'ॐ' ઉત્પન્ન કરે છે, જે વાતાવરણને શુદ્ધ કરે છે અને નકારાત્મક ઊર્જાઓને દૂર કરે છે - જેમ કે દિવ્ય હવા શુદ્ધિકરણ!"
          },
          {
            heading: "રક્ષકનો ઉદય",
            text: "તેમના રૂપાંતરણ સાથે, માં ચંદ્રઘંટાએ પોતાને દિવ્ય માતાના ભયંકર રક્ષક પાસા તરીકે સ્થાપિત કર્યા. તેઓ સંરક્ષક બન્યા જે રાક્ષસોથી લડે છે, ભક્તોને નુકસાનથી બચાવે છે, અને ન્યાયની વિજય સુનિશ્ચિત કરે છે. તેમનો ભયંકર દેખાવ સૌથી શક્તિશાળી રાક્ષસોને પણ ડરાવતો હતો, જ્યારે તેમનું દયાળુ હૃદય પોતાના ભક્તોને હિંમત અને નિર્ભયતાનો આશીર્વાદ આપતું હતું.",
            anecdote: "⚔️ દંતકથા કહે છે કે જ્યારે તેઓ યુદ્ધ દરમિયાન પોતાના કપાળની ઘંટી વગાડે છે, ત્યારે અવાજ એટલો શક્તિશાળી હોય છે કે સૌથી બહાદુર રાક્ષસો પણ ડરથી ભાગી જાય છે, પરંતુ તેમના ભક્તોને તે સૌથી સુંદર સ્વર્ગીય સંગીત જેવો લાગે છે!"
          }
        ]
      },
      significance: {
        title: "દિવસ 3 નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "સોલાર પ્લેક્સસ ચક્ર સક્રિયતા",
            text: "માં ચંદ્રઘંટા સોલાર પ્લેક્સસ ચક્ર (મણિપુર)ને નિયંત્રિત કરે છે, જે પેટના વિસ્તારમાં સ્થિત છે. આ ચક્ર વ્યક્તિગત શક્તિ, આત્મવિશ્વાસ, આત્મ-સન્માન અને આપણા જીવનને નિયંત્રિત કરવાની ક્ષમતાનું પ્રતિનિધિત્વ કરે છે. તેમની પૂજાથી આપણને આંતરિક શક્તિ વિકસાવવામાં અને ડર વ ચિંતા પર કાબુ મેળવવામાં મદદ મળે છે.",
            anecdote: "💛 સોલાર પ્લેક્સસ ચક્ર તેજસ્વી પીળા રંગમાં ચમકે છે - સૂર્ય, આત્મવિશ્વાસ અને વ્યક્તિગત શક્તિનો રંગ. તે ખરેખર તમારી આંતરિક સૂર્યપ્રકાશ છે!"
          },
          {
            heading: "સુંદરતા અને શક્તિનું સંતુલન",
            text: "તેઓ સ્ત્રી અનુગ્રહ અને યોદ્ધા શક્તિ વચ્ચેનું સંપૂર્ણ સંતુલન દર્શાવે છે. આ આપણને શીખવે છે કે આપણે સૌમ્ય અને દયાળુ હોઈ શકીએ છીએ અને તે જ સમયે જરૂર પડ્યે મજબૂત અને સુરક્ષાત્મક પણ હોઈ શકીએ છીએ. સાચી શક્તિ એ જાણવામાં છે કે ક્યારે નરમ રહેવું અને ક્યારે ભયંકર બનવું.",
            anecdote: "🦁 તેમના સિંહ વાહનની જેમ, તેઓ આપણને બતાવે છે કે કેવી રીતે બિલાડીની કોમળતા અને સિંહની ગર્જના બંને રાખવા - પરિસ્થિતિની આવશ્યકતા અનુસાર આપણી ઊર્જાને અનુકૂલિત કરવી!"
          },
          {
            heading: "નકારાત્મકતાથી સુરક્ષા",
            text: "તેમની ચંદ્ર-ઘંટીનો સતત અવાજ તેમના ભક્તોની આસપાસ સુરક્ષાત્મક ઢાલ બનાવે છે, જે નકારાત્મક ઊર્જાઓ, દુષ્ટ પ્રભાવો અને માનસિક હુમલાઓથી બચાવે છે. તેઓ ડર, ભય અને માનસિક વિકારોથી સુરક્ષામાં વિશેષ રૂપે શક્તિશાળી છે.",
            anecdote: "🔔 ઘણા ભક્તો જણાવે છે કે તેમની પ્રાર્થના પછી, તેઓ પોતાની આસપાસ અદ્રશ્ય સુરક્ષા ઢાલ અનુભવે છે - જેમ કે 24/7 દિવ્ય અંગરક્ષક હોય!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 3 ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "પ્રાતઃકાલીન યોદ્ધા પ્રાર્થનાઓ",
            text: "ભોરે માં ચંદ્રઘંટાને પીળા ફૂલો, ખાસ કરીને મેરીગોલ્ડ અને પીળા ગુલાબ અર્પણ કરીને શરૂઆત કરો. પીળો રંગ સૂર્યની ઊર્જા અને હિંમતનું પ્રતિનિધિત્વ કરે છે. ઘીનો દીવો પ્રગટાવો અને તેમના ભયંકર છતાં સુંદર રૂપની કલ્પના કરતાં 'ॐ દેવી ચંદ્રઘંટાયૈ નમઃ'નો 108 વખત જાપ કરો જે તમારી રક્ષા કરે છે.",
            anecdote: "🌻 પ્રો ટિપ: જો તમને પીળા ફૂલો ન મળે, તો હળદરનો પાવડર અથવા પીળી મિઠાઈઓ અર્પણ કરો - રંગની મનસા ચોક્કસ ફૂલ કરતાં વધુ મહત્વપૂર્ણ છે!"
          },
          {
            heading: "હિંમત નિર્માણની વિધિઓ",
            text: "આ તમારા ડર અને પડકારોનો સામનો કરવા માટે હિંમત માંગવાનો યોગ્ય દિવસ છે. તમારા ડરને કાગળ પર લખો અને તેમના મંત્રનો જાપ કરતાં પ્રતીકાત્મક રીતે બાળી દો. જ્યાં તમને સુરક્ષાની જરૂર હોય - તમારા કાર્યક્ષેત્ર, કાર અથવા ઘરના પ્રવેશદ્વાર પર તેમની તસવીર અથવા પ્રતીક મૂકો.",
            anecdote: "🔥 આત્મવિશ્વાસની વિધિ: ઘણા ભક્તો મહત્વપૂર્ણ મીટિંગ્સ અથવા પડકારજનક પરિસ્થિતિઓ દરમિયાન તેમનાથી આશીર્વાદિત નાનો પીળો કપડો રાખે છે - તે ખિસ્સામાં દિવ્ય હિંમત રાખવા જેવું છે!"
          },
          {
            heading: "સોનેરી કલાકનું ધ્યાન",
            text: "પીળા વસ્ત્રો પહેરીને સૂર્યોદય (સોનેરી કલાક) દરમિયાન ધ્યાન કરો. તમારા સોલાર પ્લેક્સસ ચક્ર પર ધ્યાન આપો અને કલ્પના કરો કે તે તેજસ્વી પીળા પ્રકાશથી ચમકે છે. આ અભ્યાસ આત્મવિશ્વાસ અને વ્યક્તિગત શક્તિ નિર્માણમાં મદદ કરે છે જ્યારે તેમની સૌર ઊર્જા સાથે જોડાય છે.",
            anecdote: "☀️ લાઇફ હેક: CEOs અને નેતાઓ અકસર મહત્વપૂર્ણ પ્રસ્તુતિઓ અથવા નિર્ણયો પહેલાં આ ધ્યાન કરે છે - તેઓ તેને તેમનો 'સોનેરી આત્મવિશ્વાસ બૂસ્ટ' કહે છે!"
          },
          {
            heading: "સાંજની સુરક્ષા પ્રાર્થનાઓ",
            text: "સાંજે તેમની દિવ્ય ઘંટીના અવાજની નકલ કરવા માટે નાની ઘંટી વગાડતાં આરતી કરો. તમારા પ્રિયજનો અને તમારા માટે સુરક્ષા માંગો. કુટુંબ અને પડોશીઓ સાથે લાડુ, હલવો અથવા પીળા ચોખા જેવા પીળા રંગના પ્રસાદમને વહેંચો.",
            anecdote: "🍯 સોનેરી પ્રસાદમ: હળદર પાવડર સાથે મિશ્રિત મધ ઉત્કૃષ્ટ અર્પણ અને આરોગ્ય ટોનિક બનાવે છે - પ્રાચીન આયુર્વેદ ભક્તિ અભ્યાસ સાથે મળે છે!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં ચંદ્રઘંટા",
        content: [
          {
            heading: "નેતૃત્વ અને આત્મવિશ્વાસ",
            text: "કોર્પોરેટ અને નેતૃત્વ ભૂમિકાઓમાં, તેમની ઊર્જા આક્રમકતા વિના દ્રઢતા વિકસાવવામાં મદદ કરે છે. તેઓ આપણને શીખવે છે કે કેવી રીતે મજબૂત નેતા બનવું જે દયા જાળવતાં કઠિન નિર્ણયો લઈ શકે. તેમનો આશીર્વાદ મેનેજમેન્ટ પોઝિશનમાં અથવા કાર્યક્ષેત્રની પડકારોનો સામનો કરનારાઓ માટે વિશેષ રૂપે શક્તિશાળી છે.",
            anecdote: "👔 સફળતાની વાર્તા: એક મુંબઈ એક્ઝિક્યુટિવ માં ચંદ્રઘંટાની દૈનિક પ્રાર્થનાઓનો શ્રેય તેમની CEO પ્રમોશનને આપે છે - તેઓ કહે છે કે તેનાથી તેમને પોતાના વિચારો વ્યક્ત કરવાની અને શક્તિ વ સહાનુભૂતિ બંને સાથે નેતૃત્વ કરવાની હિંમત મળી!"
          },
          {
            heading: "મહિલા સુરક્ષા અને સશક્તિકરણ",
            text: "સુરક્ષા અને સશક્તિકરણ ઇચ્છતી મહિલાઓ દ્વારા તેમની વિશેષ રૂપે પૂજા કરવામાં આવે છે. તેમની ભયંકર ઊર્જા અન્યાય, ઉત્પીડન અથવા ભેદભાવ સામે ઊભા રહેવાની હિંમત પ્રદાન કરે છે. ઘણી મહિલાઓ એકલા મુસાફરી કરવા અથવા મુશ્કેલ પરિસ્થિતિઓનો સામનો કરવા પહેલાં તેમની પ્રાર્થના કરે છે.",
            anecdote: "🛡️ આધુનિક સુરક્ષા: મહિલાઓ અકસર રાઇડ-શેરિંગ એપ્સનો ઉપયોગ કરતી વખતે અથવા રાત્રે એકલા ચાલતી વખતે તેમની તસવીર રાખે છે અથવા તેમના મંત્રનો જાપ કરે છે - તેઓ દિવ્ય રીતે સુરક્ષિત લાગવાની જાણ કરે છે!"
          },
          {
            heading: "માનસિક આરોગ્ય અને ચિંતા",
            text: "તેમની ઘંટીના કંપનો ચિંતા અને પેનિક એટેકને શાંત કરવામાં મદદરૂપ માનવામાં આવે છે. આધુનિક સાધકો ચિંતા વિકાર, PTSD અને આત્મવિશ્વાસની સમસ્યાઓના ઇલાજ માટે તેમના ધ્યાનને શ્વાસની તકનીકો અને થેરાપી સાથે જોડે છે. તેમની ઊર્જા મદદ માંગવાની અને માનસિક આરોગ્ય પડકારોનો સામનો કરવાની હિંમત પ્રદાન કરે છે.",
            anecdote: "🧠 થેરાપ્યુટિક અભિગમ: કેટલાક પ્રગતિશીલ થેરાપિસ્ટ આત્મવિશ્વાસ નિર્માણ સત્રોમાં તેમની કલ્પનાઓનો સમાવેશ કરે છે - દર્દીઓ પેનિક એટેક દરમિયાન તેમની સુરક્ષાત્મક ઊર્જાથી ઘેરાયેલા હોવાની કલ્પના કરે છે!"
          },
          {
            heading: "સામાજિક ન્યાય અને સક્રિયતા",
            text: "કાર્યકર્તાઓ અને સમાજસેવકો ન્યાય માટે લડવા અને નબળાઓની રક્ષા કરવા માટે તેમની યોદ્ધા ઊર્જાથી પ્રેરણા લે છે. તેઓ શક્તિ સામે સત્ય બોલવાની અને સાચા માટે ઊભા રહેવાની હિંમત પ્રદાન કરે છે, ભલે તે કઠિન અથવા ખતરનાક હોય.",
            anecdote: "⚖️ આધુનિક યોદ્ધાઓ: ઘણા માનવાધિકાર વકીલો અને કાર્યકર્તાઓના ઓફિસમાં તેમની તસવીર છે, જેઓ ધર્મ (ન્યાય)ની નિર્ભય સુરક્ષાથી દૈનિક પ્રેરણા લે છે!"
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
        <title>Navratri Day 3: Maa Chandraghanta - The Moon-Bell Goddess</title>
        <meta name="description" content="Explore the spiritual significance and sacred stories of Maa Chandraghanta on Day 3 of Navratri. Discover rituals, mantras, and modern relevance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
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
                  <div className="text-2xl sm:text-3xl">🌙</div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{t.day3}</h1>
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
                      <span className="font-semibold text-gray-800 text-sm">{t.blue}</span>
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
                  <div className="text-3xl">🌙</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.day3}</h1>
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
                    <span className="font-semibold text-gray-800 text-sm">{t.blue}</span>
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
              onClick={() => router.push(`/navratri-day-2?lang=${currentLang}`)}
              className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm"
            >
              {t.backToDay2}
            </button>
            <div className="text-center">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      day === 3
                        ? 'bg-yellow-500 text-white'
                        : day === 1 || day === 2 || day === 4
                        ? 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    onClick={() => {
                      if (day === 1) router.push(`/navratri-day-1?lang=${currentLang}`);
                      if (day === 2) router.push(`/navratri-day-2?lang=${currentLang}`);
                      if (day === 4) router.push(`/navratri-day-4?lang=${currentLang}`);
                    }}
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
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-yellow-800">
              {currentContent.title}
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {currentContent.content.map((section, index) => (
                <div key={index} className="relative">
                  {/* Section */}
                  <div className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl p-6 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <span className="text-2xl mr-3">✨</span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {section.text}
                    </p>
                  </div>

                  {/* Anecdote Box */}
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-5 border-l-4 border-yellow-500 ml-4">
                    <div className="flex items-start">
                      <div className="text-2xl mr-3 flex-shrink-0">💡</div>
                      <p className="text-yellow-800 font-medium italic">
                        {section.anecdote}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < currentContent.content.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  {t.blessing}
                </h3>
                <p className="text-yellow-600 text-lg mb-6 max-w-2xl mx-auto">
                  {t.blessingDesc}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
                  <h4 className="font-bold text-gray-800 mb-3">{t.todaysMantra}</h4>
                  <div className="text-lg font-semibold text-yellow-700 sanskrit mb-2">
                    ॐ देवी चन्द्रघन्तायै नमः
                  </div>
                  <div className="text-gray-600 italic">
                    "Om Devi Chandraghantayai Namah"
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
                onClick={() => router.push(`/navratri-day-4?lang=${currentLang}`)}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {t.day4Button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}