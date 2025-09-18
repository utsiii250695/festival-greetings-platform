import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay6() {
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
      day6: "Day 6",
      goddess: "Maa Katyayani",
      meaning: "The Fierce Warrior Goddess",
      todaysColor: "Today's Color",
      grey: "Grey",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Katyayani Bless You",
      blessingDesc: "With the courage to fight injustice, the strength to overcome all obstacles, and the wisdom to know when to be fierce and when to be compassionate.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Continue your spiritual journey",
      day7Coming: "Day 7: Maa Kalaratri 🔥",
      backToDay5: "← Day 5: Maa Skandamata"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day6: "दिन 6",
      goddess: "माँ कात्यायनी",
      meaning: "भयंकर योद्धा देवी",
      todaysColor: "आज का रंग",
      grey: "धूसर",
      tabs: {
        story: "📖 पवित्र कथा",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 विधियाँ व प्रार्थनाएं",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ कात्यायनी आपको आशीर्वाद दें",
      blessingDesc: "अन्याय से लड़ने का साहस, सभी बाधाओं को पार करने की शक्ति, और यह जानने की बुद्धि के साथ कि कब भयंकर होना है और कब दयालु होना है।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जाप करें",
      continueJourney: "अपनी आध्यात्मिक यात्रा जारी रखें",
      day7Coming: "दिन 7: माँ कालरात्रि 🔥",
      backToDay5: "← दिन 5: माँ स्कंदमाता"
    },
    gu: {
      backToNavratri: "નવરાત્રિ પર પાછા",
      day6: "દિવસ 6",
      goddess: "માં કાત્યાયની",
      meaning: "ભયંકર યોદ્ધા દેવી",
      todaysColor: "આજનો રંગ",
      grey: "ધૂસર",
      tabs: {
        story: "📖 પવિત્ર કથા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 વિધિઓ અને પ્રાર્થનાઓ",
        modern: "🌟 આધુનિક સંદર્ભ"
      },
      blessing: "માં કાત્યાયની તમને આશીર્વાદ આપે",
      blessingDesc: "અન્યાય સામે લડવાની હિંમત, બધી અવરોધોને પાર કરવાની શક્તિ, અને એ જાણવાની બુદ્ધિ સાથે કે ક્યારે ભયંકર થવું અને ક્યારે દયાળુ થવું.",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "મહત્તમ આશીર્વાદ માટે આ 108 વખત જાપ કરો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા ચાલુ રાખો",
      day7Coming: "દિવસ 7: માં કાલરાત્રિ 🔥",
      backToDay5: "← દિવસ 5: માં સ્કંદમાતા"
    }
  };

  const content = {
    en: {
      story: {
        title: "The Fierce Warrior Born from Divine Anger",
        content: [
          {
            heading: "The Birth from Sacred Fury",
            text: "Maa Katyayani is the sixth form of Goddess Durga, born from the collective anger and divine energy of all gods to defeat the mighty demon Mahishasura. When this buffalo-demon became invincible through his boons and terrorized the three worlds, the gods united their shakti (divine energy) and fury to create the ultimate warrior goddess. She emerged as Katyayani in the hermitage of sage Katyayana, who had performed intense penance to have the Divine Mother as his daughter.",
            anecdote: "⚔️ Divine teamwork: Every god contributed their best weapon to her - Shiva's trident, Vishnu's discus, Indra's thunderbolt! She was literally armed with the entire divine arsenal - the ultimate cosmic superhero!"
          },
          {
            heading: "The Ultimate Battle",
            text: "The battle between Maa Katyayani and Mahishasura lasted for nine days and nights, shaking all three worlds. Mahishasura kept changing forms - from buffalo to lion to elephant to human - using his shape-shifting powers to escape death. But Katyayani, with her divine intelligence and unwavering determination, countered every strategy. Finally, when he took his original buffalo form, she beheaded him with her sword, liberating the universe from his tyranny.",
            anecdote: "🐃 Shape-shifter showdown: Mahishasura thought he was playing the ultimate game of hide-and-seek by changing forms, but Katyayani was like divine GPS - no matter what shape he took, she could track him down!"
          },
          {
            heading: "The Protector of Dharma",
            text: "After her victory, Maa Katyayani established herself as the fierce protector of righteousness (dharma) and the destroyer of evil forces. She represents the divine feminine power that rises when injustice becomes unbearable and when the innocent need protection. Her story teaches us that sometimes, love must wear armor and compassion must carry a sword to protect the vulnerable and restore cosmic balance.",
            anecdote: "⚖️ Cosmic justice: She's like the universe's ultimate judge and jury rolled into one - when evil crosses all limits, she delivers the final verdict with divine authority!"
          }
        ]
      },
      significance: {
        title: "Day 6 Spiritual Significance",
        content: [
          {
            heading: "Third Eye Chakra Activation",
            text: "Maa Katyayani governs the Ajna Chakra (Third Eye), located between the eyebrows. This chakra represents intuition, wisdom, spiritual insight, and the ability to see beyond illusions. Her worship helps us develop spiritual discernment, recognize truth from falsehood, and see situations with divine clarity. The third eye gives us the vision to identify what needs to be changed or fought against.",
            anecdote: "👁️ Divine vision: When your third eye chakra is balanced through her blessings, you develop what devotees call 'dharma vision' - the supernatural ability to instantly spot injustice and know exactly what needs to be done about it!"
          },
          {
            heading: "Fierce Divine Feminine",
            text: "She embodies the fierce aspect of the divine feminine - the mother who becomes a warrior to protect her children. This energy teaches us that gentleness without strength is weakness, and strength without purpose is destruction. True power lies in knowing when to be soft and when to be steel, when to heal and when to fight, when to forgive and when to take action.",
            anecdote: "🦁 Mama bear energy: She represents that fierce maternal instinct where a normally gentle mother becomes absolutely unstoppable when her children are threatened - pure protective love in warrior form!"
          },
          {
            heading: "Justice and Courage",
            text: "Her energy awakens our inner warrior - not for aggression or violence, but for fighting injustice, standing up for the oppressed, and protecting the innocent. She gives us the courage to speak truth to power, the strength to stand alone if necessary, and the wisdom to choose our battles carefully. Her worship develops moral courage and ethical backbone.",
            anecdote: "🛡️ Divine courage injection: Devotees say that praying to Katyayani is like getting a shot of liquid courage straight from the cosmic pharmacy - suddenly you find the guts to do what's right, even when it's scary!"
          }
        ]
      },
      rituals: {
        title: "Day 6 Sacred Rituals",
        content: [
          {
            heading: "Morning Warrior Prayers",
            text: "Begin with offering red flowers, especially red roses and hibiscus to Maa Katyayani, as red represents courage, strength, and the warrior spirit. Light a mustard oil lamp (for strength) and chant 'Om Devi Katyayanyai Namah' 108 times while visualizing her fierce form with multiple weapons, riding her lion, ready to destroy all negativity in your life.",
            anecdote: "🌹 Red power ritual: Many devotees wear red clothing on this day and offer red sindoor (vermillion) - they say it's like wearing the divine warrior's colors and instantly feeling more confident and fearless!"
          },
          {
            heading: "Third Eye Awakening Meditation",
            text: "This is the perfect day for third eye meditation. Sit quietly and focus on the point between your eyebrows. Visualize a bright indigo light pulsating there. Ask Katyayani to grant you divine vision to see through illusions, recognize truth, and have the courage to act on your spiritual insights. This practice develops intuition and spiritual discernment.",
            anecdote: "🧿 Spiritual x-ray vision: Regular practitioners report developing an almost supernatural ability to sense people's true intentions and see through fake spiritual teachers or manipulative situations - like having divine lie-detector powers!"
          },
          {
            heading: "Courage Building Ceremony",
            text: "Write down your fears, the injustices you want to fight against, or the situations where you need more courage on red paper. Offer these to her sacred fire while chanting her mantra. This ritual helps transform fear into fearlessness, doubt into determination, and weakness into warrior strength. Many devotees do this before important confrontations or life-changing decisions.",
            anecdote: "🔥 Fear-to-fearless alchemy: Lawyers, activists, and whistle-blowers often perform this ritual before taking on powerful opponents - they describe it as trading their anxiety for divine armor!"
          },
          {
            heading: "Evening Protection Prayers",
            text: "In the evening, perform aarti with a sword or knife (symbolizing her weapons) placed in front of her image. Pray for protection of your family, community, and all innocent beings from negative forces. Share red-colored prasadam like red halwa, pomegranate, or red sweets. This creates a protective energy field around you and your loved ones.",
            anecdote: "⚔️ Divine security system: Many families keep a blessed red thread from her temple as protection in their homes and vehicles - they call it their '24/7 divine security subscription'!"
          }
        ]
      },
      modern: {
        title: "Maa Katyayani in Modern Life",
        content: [
          {
            heading: "Women's Safety and Empowerment",
            text: "In today's world, she's especially revered by women seeking protection from harassment, violence, and discrimination. Her energy empowers women to defend themselves, report crimes fearlessly, and fight for gender equality. Many women's rights activists, self-defense instructors, and female police officers draw inspiration from her fearless warrior energy.",
            anecdote: "👮‍♀️ Divine backup: Female police officers often carry her small image or chant her mantra before dangerous operations - they report feeling an invisible protective presence and supernatural courage during confrontations!"
          },
          {
            heading: "Social Justice and Activism",
            text: "Activists fighting corruption, environmental destruction, human rights violations, and social injustice invoke her energy. She provides the moral courage to expose wrongdoing, the strength to withstand retaliation, and the persistence to fight long battles for justice. Her worship is popular among journalists, lawyers, and social workers in dangerous situations.",
            anecdote: "📰 Truth warrior blessing: An investigative journalist credits prayers to Katyayani for giving her the courage to expose a major corruption scandal - she says the goddess gave her both the boldness to investigate and divine protection from retaliation!"
          },
          {
            heading: "Breaking Toxic Patterns",
            text: "Her fierce energy helps people break free from toxic relationships, addictive behaviors, and self-destructive patterns. She provides the inner strength to leave abusive situations, the courage to seek help, and the determination to rebuild life on healthier foundations. Therapists often recommend her worship for clients who need to develop healthy boundaries.",
            anecdote: "💪 Liberation warrior: Support groups for domestic violence survivors often invoke her energy - survivors describe feeling like they suddenly found an inner lioness that helped them escape and rebuild their lives with dignity!"
          },
          {
            heading: "Leadership in Crisis",
            text: "Leaders facing organizational crises, ethical dilemmas, or hostile takeovers draw on her warrior wisdom. She helps develop crisis leadership skills - the ability to make tough decisions, stand by principles under pressure, and protect team members from destructive forces. Her energy is especially powerful for whistle-blowers and ethical leaders.",
            anecdote: "🏢 Corporate dharma warrior: A CEO who exposed major fraud in her company despite threats to her career credits daily prayers to Katyayani - she says the goddess gave her the backbone to choose dharma over personal safety and financial security!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "दिव्य क्रोध से जन्मी भयंकर योद्धा",
        content: [
          {
            heading: "पवित्र क्रोध से जन्म",
            text: "माँ कात्यायनी देवी दुर्गा का छठा रूप हैं, जो महान राक्षस महिषासुर को हराने के लिए सभी देवताओं के सामूहिक क्रोध और दिव्य ऊर्जा से जन्मी थीं। जब यह भैंस-राक्षस अपने वरदानों के कारण अजेय हो गया और तीनों लोकों को आतंकित करने लगा, तो देवताओं ने अपनी शक्ति (दिव्य ऊर्जा) और क्रोध को मिलाकर परम योद्धा देवी का सृजन किया। वे ऋषि कत्यायन के आश्रम में कात्यायनी के रूप में प्रकट हुईं, जिन्होंने दिव्य माता को अपनी पुत्री के रूप में पाने के लिए कठोर तपस्या की थी।",
            anecdote: "⚔️ दिव्य टीम वर्क: हर देवता ने अपना सर्वश्रेष्ठ हथियार उन्हें दिया - शिव का त्रिशूल, विष्णु का चक्र, इंद्र का वज्र! वे सचमुच पूरे दिव्य शस्त्रागार से सुसज्जित थीं - परम ब्रह्मांडीय सुपर हीरो!"
          },
          {
            heading: "परम युद्ध",
            text: "माँ कात्यायनी और महिषासुर के बीच युद्ध नौ दिन और रातों तक चला, जिससे तीनों लोक हिल गए। महिषासुर लगातार रूप बदलता रहा - भैंस से शेर, हाथी से मनुष्य तक - मृत्यु से बचने के लिए अपनी आकार-परिवर्तन शक्तियों का उपयोग करते हुए। लेकिन कात्यायनी ने अपनी दिव्य बुद्धि और अटल दृढ़ता से हर रणनीति का मुकाबला किया। अंततः, जब उसने अपना मूल भैंस रूप धारण किया, तो उन्होंने अपनी तलवार से उसका सिर काट दिया, ब्रह्मांड को उसके अत्याचार से मुक्त कर दिया।",
            anecdote: "🐃 आकार-बदलने वाला द्वंद: महिषासुर सोचता था कि वह रूप बदलकर छुप-छुपकर खेलने का अंतिम खेल खेल रहा है, लेकिन कात्यायनी दिव्य GPS की तरह थीं - वह चाहे कोई भी रूप ले, वे उसे खोज ही लेती थीं!"
          },
          {
            heading: "धर्म की रक्षक",
            text: "अपनी विजय के बाद, माँ कात्यायनी ने खुद को धर्म की भयंकर रक्षक और दुष्ट शक्तियों की विनाशक के रूप में स्थापित किया। वे उस दिव्य स्त्री शक्ति का प्रतिनिधित्व करती हैं जो तब उठती है जब अन्याय असहनीय हो जाता है और जब निर्दोषों को सुरक्षा की आवश्यकता होती है। उनकी कहानी हमें सिखाती है कि कभी-कभी, प्रेम को कवच पहनना चाहिए और करुणा को तलवार उठानी चाहिए ताकि कमजोरों की रक्षा हो सके और ब्रह्मांडीय संतुलन बहाल हो सके।",
            anecdote: "⚖️ ब्रह्मांडीय न्याय: वे ब्रह्मांड की परम न्यायाधीश और जूरी दोनों की तरह हैं - जब बुराई सभी सीमाएं पार कर जाती है, तो वे दिव्य अधिकार के साथ अंतिम फैसला सुनाती हैं!"
          }
        ]
      },
      significance: {
        title: "दिन 6 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "तीसरी आंख चक्र सक्रियता",
            text: "माँ कात्यायनी आज्ञा चक्र (तीसरी आंख) को नियंत्रित करती हैं, जो भौंहों के बीच स्थित है। यह चक्र अंतर्ज्ञान, बुद्धि, आध्यात्मिक अंतर्दृष्टि और भ्रम से परे देखने की क्षमता का प्रतिनिधित्व करता है। उनकी पूजा हमें आध्यात्मिक विवेक विकसित करने, सत्य को असत्य से पहचानने और परिस्थितियों को दिव्य स्पष्टता से देखने में मदद करती है। तीसरी आंख हमें यह दर्शन देती है कि क्या बदला जाना चाहिए या किसके विरुद्ध लड़ना चाहिए।",
            anecdote: "👁️ दिव्य दृष्टि: जब तीसरी आंख चक्र उनके आशीर्वाद से संतुलित हो जाता है, तो आप वह विकसित करते हैं जिसे भक्त 'धर्म दृष्टि' कहते हैं - अन्याय को तुरंत पहचानने और यह जानने की अलौकिक क्षमता कि इसके बारे में क्या करना है!"
          },
          {
            heading: "भयंकर दिव्य स्त्री शक्ति",
            text: "वे दिव्य स्त्री के भयंकर पहलू का प्रतीक हैं - वह माता जो अपने बच्चों की रक्षा के लिए योद्धा बन जाती है। यह ऊर्जा हमें सिखाती है कि बिना शक्ति की कोमलता कमजोरी है, और बिना उद्देश्य की शक्ति विनाश है। सच्ची शक्ति यह जानने में है कि कब नरम होना है और कब इस्पात बनना है, कब चंगा करना है और कब लड़ना है, कब क्षमा करना है और कब कार्रवाई करनी है।",
            anecdote: "🦁 माँ भालू ऊर्जा: वे उस भयंकर मातृ प्रवृत्ति का प्रतिनिधित्व करती हैं जहां एक सामान्यतः कोमल माता अपने बच्चों को धमकी मिलने पर बिल्कुल अजेय हो जाती है - योद्धा रूप में शुद्ध सुरक्षात्मक प्रेम!"
          },
          {
            heading: "न्याय और साहस",
            text: "उनकी ऊर्जा हमारे भीतर के योद्धा को जगाती है - आक्रामकता या हिंसा के लिए नहीं, बल्कि अन्याय से लड़ने, उत्पीड़ितों के लिए खड़े होने और निर्दोषों की रक्षा करने के लिए। वे हमें शक्ति के सामने सच बोलने का साहस, आवश्यक होने पर अकेले खड़े होने की शक्ति, और अपनी लड़ाइयों को सावधानी से चुनने की बुद्धि देती हैं। उनकी पूजा नैतिक साहस और नैतिक रीढ़ विकसित करती है।",
            anecdote: "🛡️ दिव्य साहस इंजेक्शन: भक्त कहते हैं कि कात्यायनी से प्रार्थना करना ब्रह्मांडीय फार्मेसी से सीधे तरल साहस का इंजेक्शन लेने जैसा है - अचानक आप में वह हिम्मत आ जाती है जो सही है वह करने की, भले ही वह डरावना हो!"
          }
        ]
      },
      rituals: {
        title: "दिन 6 की पवित्र विधियाँ",
        content: [
          {
            heading: "प्रातःकालीन योद्धा प्रार्थनाएं",
            text: "माँ कात्यायनी को लाल फूल, विशेष रूप से लाल गुलाब और जवाकुसुम अर्पित करके शुरुआत करें, क्योंकि लाल रंग साहस, शक्ति और योद्धा भावना का प्रतिनिधित्व करता है। सरसों का तेल का दीपक जलाएं (शक्ति के लिए) और 'ॐ देवी कात्यायन्यै नमः' का 108 बार जाप करें जबकि उनके भयंकर रूप की कल्पना करें जो अनेक हथियारों के साथ, अपने सिंह पर सवार, आपके जीवन की सभी नकारात्मकता को नष्ट करने के लिए तैयार हैं।",
            anecdote: "🌹 लाल शक्ति अनुष्ठान: कई भक्त इस दिन लाल वस्त्र पहनते हैं और लाल सिंदूर अर्पित करते हैं - वे कहते हैं कि यह दिव्य योद्धा के रंग पहनने जैसा है और तुरंत अधिक आत्मविश्वासी और निर्भीक महसूस करने जैसा है!"
          },
          {
            heading: "तीसरी आंख जागृति ध्यान",
            text: "यह तीसरी आंख ध्यान का सही दिन है। शांति से बैठें और अपनी भौंहों के बीच के बिंदु पर ध्यान दें। वहां एक उज्ज्वल नील प्रकाश की कल्पना करें जो स्पंदित हो रहा है। कात्यायनी से प्रार्थना करें कि वे आपको भ्रम के माध्यम से देखने, सत्य को पहचानने और अपनी आध्यात्मिक अंतर्दृष्टि पर कार्य करने का साहस प्रदान करें। यह अभ्यास अंतर्ज्ञान और आध्यात्मिक विवेक विकसित करता है।",
            anecdote: "🧿 आध्यात्मिक एक्स-रे दृष्टि: नियमित साधक रिपोर्ट करते हैं कि उन्होंने लोगों के सच्चे इरादों को समझने और नकली आध्यात्मिक गुरुओं या चालबाज़ी भरी परिस्थितियों को पहचानने की लगभग अलौकिक क्षमता विकसित की है - जैसे दिव्य झूठ-पकड़ने की शक्तियां हों!"
          },
          {
            heading: "साहस निर्माण समारोह",
            text: "अपने डर, जिन अन्यायों से आप लड़ना चाहते हैं, या जिन परिस्थितियों में आपको अधिक साहस की आवश्यकता है, उन्हें लाल कागज पर लिखें। उनके मंत्र जाप करते हुए इन्हें उनकी पवित्र अग्नि को अर्पित करें। यह अनुष्ठान डर को निर्भयता में, संदेह को दृढ़ता में, और कमजोरी को योद्धा शक्ति में बदलने में मदद करता है। कई भक्त महत्वपूर्ण टकराव या जीवन बदलने वाले निर्णयों से पहले यह करते हैं।",
            anecdote: "🔥 डर-से-निर्भयता रसायन: वकील, कार्यकर्ता और व्हिसल-ब्लोअर अक्सर शक्तिशाली विरोधियों से टकराने से पहले यह अनुष्ठान करते हैं - वे इसे अपनी चिंता को दिव्य कवच से बदलने के रूप में वर्णित करते हैं!"
          },
          {
            heading: "सांझ सुरक्षा प्रार्थनाएं",
            text: "शाम को उनकी तस्वीर के सामने तलवार या चाकू (उनके हथियारों का प्रतीक) रखकर आरती करें। अपने परिवार, समुदाय और सभी निर्दोष प्राणियों की नकारात्मक शक्तियों से सुरक्षा के लिए प्रार्थना करें। लाल रंग के प्रसादम जैसे लाल हलवा, अनार या लाल मिठाइयां बांटें। यह आपके और आपके प्रियजनों के चारों ओर सुरक्षात्मक ऊर्जा क्षेत्र बनाता है।",
            anecdote: "⚔️ दिव्य सुरक्षा प्रणाली: कई परिवार अपने घरों और वाहनों में उनके मंदिर से आशीर्वादित लाल धागा सुरक्षा के रूप में रखते हैं - वे इसे अपना '24/7 दिव्य सुरक्षा सब्सक्रिप्शन' कहते हैं!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ कात्यायनी",
        content: [
          {
            heading: "महिला सुरक्षा और सशक्तिकरण",
            text: "आज के युग में, उत्पीड़न, हिंसा और भेदभाव से सुरक्षा चाहने वाली महिलाओं द्वारा उनकी विशेष रूप से पूजा की जाती है। उनकी ऊर्जा महिलाओं को अपना बचाव करने, निर्भीकता से अपराधों की रिपोर्ट करने और लैंगिक समानता के लिए लड़ने का सामर्थ्य देती है। कई महिला अधिकार कार्यकर्ता, आत्मरक्षा प्रशिक्षक और महिला पुलिस अधिकारी उनकी निर्भीक योद्धा ऊर्जा से प्रेरणा लेते हैं।",
            anecdote: "👮‍♀️ दिव्य समर्थन: महिला पुलिस अधिकारी अक्सर खतरनाक ऑपरेशन से पहले उनकी छोटी तस्वीर रखती हैं या उनके मंत्र का जाप करती हैं - वे रिपोर्ट करती हैं कि टकराव के दौरान अदृश्य सुरक्षात्मक उपस्थिति और अलौकिक साहस महसूस करती हैं!"
          },
          {
            heading: "सामाजिक न्याय और सक्रियता",
            text: "भ्रष्टाचार, पर्यावरणीय विनाश, मानवाधिकार उल्लंघन और सामाजिक अन्याय से लड़ने वाले कार्यकर्ता उनकी ऊर्जा का आह्वान करते हैं। वे गलत काम को उजागर करने का नैतिक साहस, प्रतिशोध को झेलने की शक्ति, और न्याय के लिए लंबी लड़ाई लड़ने की दृढ़ता प्रदान करती हैं। खतरनाक परिस्थितियों में काम करने वाले पत्रकारों, वकीलों और समाजसेवियों के बीच उनकी पूजा लोकप्रिय है।",
            anecdote: "📰 सत्य योद्धा आशीर्वाद: एक खोजी पत्रकार कात्यायनी की प्रार्थनाओं का श्रेय एक बड़े भ्रष्टाचार घोटाले को उजागर करने के साहस के लिए देती है - वे कहती हैं कि देवी ने उन्हें जांच करने की निर्भीकता और प्रतिशोध से दिव्य सुरक्षा दोनों दी!"
          },
          {
            heading: "विषाक्त पैटर्न तोड़ना",
            text: "उनकी भयंकर ऊर्जा लोगों को विषाक्त रिश्तों, नशे की लत और आत्म-विनाशकारी पैटर्न से मुक्त होने में मदद करती है। वे दुर्व्यवहार की स्थितियों से बाहर निकलने की आंतरिक शक्ति, मदद मांगने का साहस, और स्वस्थ नींव पर जीवन को फिर से बनाने का दृढ़ संकल्प प्रदान करती हैं। चिकित्सक अक्सर उन ग्राहकों के लिए उनकी पूजा की सिफारिश करते हैं जिन्हें स्वस्थ सीमाएं विकसित करनी हैं।",
            anecdote: "💪 मुक्ति योद्धा: घरेलू हिंसा से बचे लोगों के सहायता समूह अक्सर उनकी ऊर्जा का आह्वान करते हैं - बचे हुए लोग बताते हैं कि उन्हें लगता है जैसे अचानक उन्होंने एक आंतरिक शेरनी पाई जिसने उन्हें भागने और अपने जीवन को गरिमा के साथ फिर से बनाने में मदद की!"
          },
          {
            heading: "संकट में नेतृत्व",
            text: "संगठनात्मक संकट, नैतिक दुविधा या शत्रुतापूर्ण अधिग्रहण का सामना करने वाले नेता उनकी योद्धा बुद्धि का सहारा लेते हैं। वे संकट नेतृत्व कौशल विकसित करने में मदद करती हैं - कठिन निर्णय लेने की क्षमता, दबाव में सिद्धांतों पर खड़े रहना, और टीम के सदस्यों को विनाशकारी शक्तियों से बचाना। उनकी ऊर्जा विशेष रूप से व्हिसल-ब्लोअर और नैतिक नेताओं के लिए शक्तिशाली है।",
            anecdote: "🏢 कॉर्पोरेट धर्म योद्धा: एक CEO जिसने अपने करियर को खतरे में डालने के बावजूद अपनी कंपनी में बड़े धोखाधड़ी का पर्दाफाश किया, वे कात्यायनी की दैनिक प्रार्थनाओं का श्रेय देती हैं - वे कहती हैं कि देवी ने उन्हें व्यक्तिगत सुरक्षा और वित्तीय सुरक्षा पर धर्म चुनने की रीढ़ दी!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "દિવ્ય ક્રોધથી જન્મેલી ભયંકર યોદ્ધા",
        content: [
          {
            heading: "પવિત્ર ક્રોધથી જન્મ",
            text: "માં કાત્યાયની દેવી દુર્ગાનું છઠ્ઠું રૂપ છે, જે મહાન રાક્ષસ મહિષાસુરને હરાવવા માટે બધા દેવોના સામૂહિક ક્રોધ અને દિવ્ય ઊર્જાથી જન્મ્યા હતા. જ્યારે આ ભેંસ-રાક્ષસ પોતાના વરદાનોના કારણે અજેય થઈ ગયો અને ત્રણે લોકોને આતંકિત કરવા લાગ્યો, ત્યારે દેવોએ પોતાની શક્તિ (દિવ્ય ઊર્જા) અને ક્રોધને એકત્ર કરીને પરમ યોદ્ધા દેવીનું સર્જન કર્યું. તેઓ ઋષિ કત્યાયનના આશ્રમમાં કાત્યાયની તરીકે પ્રગટ થયા, જેમણે દિવ્ય માતાને પોતાની પુત્રી તરીકે પામવા માટે કઠોર તપસ્યા કરી હતી.",
            anecdote: "⚔️ દિવ્ય ટીમ વર્ક: દરેક દેવે પોતાનું શ્રેષ્ઠ હથિયાર તેમને આપ્યું - શિવનો ત્રિશૂળ, વિષ્ણુનો ચક્ર, ઇન્દ્રનો વજ્ર! તેઓ શાબ્દિક રીતે સમગ્ર દિવ્ય શસ્ત્રાગારથી સજ્જ હતા - પરમ બ્રહ્માંડીય સુપર હીરો!"
          },
          {
            heading: "પરમ યુદ્ધ",
            text: "માં કાત્યાયની અને મહિષાસુર વચ્ચેનું યુદ્ધ નવ દિવસ અને રાત્રિઓ સુધી ચાલ્યું, જેનાથી ત્રણે લોકો હચમચી ગયા. મહિષાસુર સતત આકાર બદલતો રહ્યો - ભેંસથી સિંહ, હાથીથી માનવ સુધી - મૃત્યુથી બચવા માટે પોતાની આકાર-પરિવર્તન શક્તિઓનો ઉપયોગ કરતો હતો. પરંતુ કાત્યાયનીએ પોતાની દિવ્ય બુદ્ધિ અને અટલ દ્રઢતાથી દરેક વ્યૂહરચનાનો સામનો કર્યો. અંતમાં, જ્યારે તેણે પોતાનું મૂળ ભેંસનું રૂપ ધારણ કર્યું, ત્યારે તેમણે પોતાની તલવારથી તેનું માથું કાપી નાખ્યું, બ્રહ્માંડને તેના અત્યાચારથી મુક્ત કર્યું.",
            anecdote: "🐃 આકાર બદલવાનો દ્વંદ: મહિષાસુર વિચારતો હતો કે તે આકાર બદલીને લુકાઈ-છુપાઈની અંતિમ રમત રમી રહ્યો છે, પરંતુ કાત્યાયની દિવ્ય GPS જેવા હતા - તે ભલે કોઈપણ આકાર લે, તેઓ તેને શોધી જ લેતા હતા!"
          },
          {
            heading: "ધર્મની રક્ષક",
            text: "પોતાની વિજય પછી, માં કાત્યાયનીએ પોતાને ધર્મના ભયંકર રક્ષક અને દુષ્ટ શક્તિઓના વિનાશક તરીકે સ્થાપિત કર્યા. તેઓ તે દિવ્ય સ્ત્રી શક્તિનું પ્રતિનિધિત્વ કરે છે જે ત્યારે ઊઠે છે જ્યારે અન્યાય અસહનીય બની જાય છે અને જ્યારે નિર્દોષોને સુરક્ષાની જરૂર હોય છે. તેમની કથા આપણને શીખવે છે કે કેટલીકવાર, પ્રેમે બખ્તર પહેરવું પડે છે અને કરુણાએ તલવાર ઉપાડવી પડે છે જેથી નબળાઓની સુરક્ષા થાય અને બ્રહ્માંડીય સંતુલન પુનઃસ્થાપિત થાય.",
            anecdote: "⚖️ બ્રહ્માંડીય ન્યાય: તેઓ બ્રહ્માંડના પરમ ન્યાયાધીશ અને જ્યુરી બંનેના જેવા છે - જ્યારે અશુભ બધી મર્યાદાઓ પાર કરી જાય છે, ત્યારે તેઓ દિવ્ય સત્તા સાથે અંતિમ ચુકાદો આપે છે!"
          }
        ]
      },
      significance: {
        title: "દિવસ 6 નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "ત્રીજી આંખ ચક્રની સક્રિયતા",
            text: "માં કાત્યાયની આજ્ઞા ચક્ર (ત્રીજી આંખ)ને નિયંત્રિત કરે છે, જે ભમરની વચ્ચે સ્થિત છે. આ ચક્ર અંતર્જ્ઞાન, શાણપણ, આધ્યાત્મિક અંતર્દૃષ્ટિ અને ભ્રમોથી પરે જોવાની ક્ષમતાનું પ્રતિનિધિત્વ કરે છે. તેમની પૂજાથી આપણને આધ્યાત્મિક વિવેક વિકસાવવામાં, સત્યને અસત્યથી ઓળખવામાં અને પરિસ્થિતિઓને દિવ્ય સ્પષ્ટતાથી જોવામાં મદદ મળે છે. ત્રીજી આંખ આપણને તે દ્રષ્ટિ આપે છે કે શું બદલવાની અથવા શાની સામે લડવાની જરૂર છે.",
            anecdote: "👁️ દિવ્ય દૃષ્ટિ: જ્યારે ત્રીજી આંખ ચક્ર તેમના આશીર્વાદથી સંતુલિત થાય છે, ત્યારે તમે તે વિકસાવો છો જેને ભક્તો 'ધર્મ દૃષ્ટિ' કહે છે - અન્યાયને તુરત ઓળખવાની અને તેના વિશે શું કરવાનું છે તે જાણવાની અલૌકિક ક્ષમતા!"
          },
          {
            heading: "ભયંકર દિવ્ય સ્ત્રી શક્તિ",
            text: "તેઓ દિવ્ય સ્ત્રીના ભયંકર પાસાંનું પ્રતીક છે - તે માતા જે પોતાના બાળકોની સુરક્ષા માટે યોદ્ધા બની જાય છે. આ ઊર્જા આપણને શીખવે છે કે શક્તિ વિનાની કોમળતા નબળાઈ છે, અને ઉદ્દેશ્ય વિનાની શક્તિ વિનાશ છે. સાચી શક્તિ એ જાણવામાં છે કે ક્યારે નરમ રહેવું અને ક્યારે ઇસ્પાત બનવું, ક્યારે સાજા કરવું અને ક્યારે લડવું, ક્યારે માફ કરવું અને ક્યારે પગલાં લેવા.",
            anecdote: "🦁 મામા ભાલુ ઊર્જા: તેઓ તે ભયંકર માતૃ વૃત્તિનું પ્રતિનિધિત્વ કરે છે જ્યાં સામાન્ય રીતે કોમળ માતા જ્યારે પોતાના બાળકોને ધમકી આપવામાં આવે ત્યારે બિલકુલ અજેય બની જાય છે - યોદ્ધા રૂપમાં શુદ્ધ સુરક્ષાત્મક પ્રેમ!"
          },
          {
            heading: "ન્યાય અને હિંમત",
            text: "તેમની ઊર્જા આપણા અંતરના યોદ્ધાને જગાડે છે - આક્રમકતા અથવા હિંસા માટે નહીં, પરંતુ અન્યાય સામે લડવા, દબાયેલા લોકો માટે ઊભા રહેવા અને નિર્દોષોની સુરક્ષા કરવા માટે. તેઓ આપણને સત્તા સામે સત્ય બોલવાની હિંમત, જરૂરી હોય ત્યારે એકલા ઊભા રહેવાની શક્તિ, અને આપણી લડાઈઓ સાવધાનીથી પસંદ કરવાની શાણપણ આપે છે. તેમની પૂજા નૈતિક હિંમત અને નૈતિક કરોડરજ્જુ વિકસાવે છે.",
            anecdote: "🛡️ દિવ્ય હિંમત ઈન્જેક્શન: ભક્તો કહે છે કે કાત્યાયનીને પ્રાર્થના કરવી એ બ્રહ્માંડીય ફાર્મસીથી સીધું પ્રવાહી હિંમતનું ઈન્જેક્શન લેવા જેવું છે - અચાનક તમને તે કરવાની હિંમત મળે છે જે સાચું છે, ભલે તે ડરાવનું હોય!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 6 ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "પ્રાતઃકાલીન યોદ્ધા પ્રાર્થનાઓ",
            text: "માં કાત્યાયનીને લાલ ફૂલો, ખાસ કરીને લાલ ગુલાબ અને જાસ્વંદ અર્પણ કરીને શરૂઆત કરો, કારણ કે લાલ રંગ હિંમત, શક્તિ અને યોદ્ધા ભાવનાનું પ્રતિનિધિત્વ કરે છે. મસ્ટર્ડ તેલનો દીવો પ્રગટાવો (શક્તિ માટે) અને 'ॐ દેવી કાત્યાયન્યૈ નમઃ'નો 108 વખત જાપ કરો જ્યારે તેમના ભયંકર રૂપની કલ્પના કરો જે અનેક હથિયારો સાથે, પોતાના સિંહ પર સવાર, તમારા જીવનની બધી નકારાત્મકતાને નષ્ટ કરવા તૈયાર છે.",
            anecdote: "🌹 લાલ શક્તિ અનુષ્ઠાન: ઘણા ભક્તો આ દિવસે લાલ વસ્ત્રો પહેરે છે અને લાલ સિંદૂર અર્પણ કરે છે - તેઓ કહે છે કે તે દિવ્ય યોદ્ધાના રંગો પહેરવા જેવું છે અને તુરત જ વધુ આત્મવિશ્વાસ અને નિર્ભયતા અનુભવવા જેવું છે!"
          },
          {
            heading: "ત્રીજી આંખ જાગરણ ધ્યાન",
            text: "આ ત્રીજી આંખ ધ્યાન માટેનો યોગ્ય દિવસ છે. શાંતિથી બેસો અને તમારા ભમર વચ્ચેના બિંદુ પર ધ્યાન આપો. ત્યાં એક તેજસ્વી ઈન્ડિગો પ્રકાશની કલ્પના કરો જે સ્પંદિત થઈ રહ્યો છે. કાત્યાયનીને પ્રાર્થના કરો કે તેઓ તમને ભ્રમોથી પાર જોવા, સત્યને ઓળખવા અને તમારી આધ્યાત્મિક અંતર્દૃષ્ટિ પર કાર્ય કરવાની હિંમત આપે. આ અભ્યાસ અંતર્જ્ઞાન અને આધ્યાત્મિક વિવેક વિકસાવે છે.",
            anecdote: "🧿 આધ્યાત્મિક એક્સ-રે દૃષ્ટિ: નિયમિત સાધકો જણાવે છે કે તેમણે લોકોના સાચા ઇરાદાઓને સમજવાની અને નકલી આધ્યાત્મિક શિક્ષકો અથવા છેતરપિંડી ભરી પરિસ્થિતિઓને ઓળખવાની લગભગ અલૌકિક ક્ષમતા વિકસાવી છે - જેમ કે દિવ્ય જૂઠ-શોધક શક્તિઓ હોય!"
          },
          {
            heading: "હિંમત નિર્માણ સમારોહ",
            text: "તમારા ડર, જે અન્યાય સામે તમે લડવા માંગો છો, અથવા જે પરિસ્થિતિઓમાં તમને વધુ હિંમતની જરૂર છે તે લાલ કાગળ પર લખો. તેમના મંત્રનો જાપ કરતા આને તેમની પવિત્ર અગ્નિને અર્પણ કરો. આ વિધિ ડરને નિર્ભયતામાં, શંકાને દ્રઢતામાં, અને નબળાઈને યોદ્ધા શક્તિમાં પરિવર્તિત કરવામાં મદદ કરે છે. ઘણા ભક્તો મહત્વપૂર્ણ સંઘર્ષ અથવા જીવન બદલતા નિર્ણયો પહેલાં આ કરે છે.",
            anecdote: "🔥 ડર-થી-નિર્ભયતા રસાયણ: વકીલો, કાર્યકર્તાઓ અને વ્હિસલ-બ્લોઅરો અકસર શક્તિશાળી વિરોધીઓ સામે લડવા પહેલાં આ અનુષ્ઠાન કરે છે - તેઓ તેને પોતાની ચિંતાને દિવ્ય બખ્તર સાથે બદલવા તરીકે વર્ણવે છે!"
          },
          {
            heading: "સાંજની સુરક્ષા પ્રાર્થનાઓ",
            text: "સાંજે તેમની છબીની સામે તલવાર અથવા છરી (તેમના હથિયારોનું પ્રતીક) મૂકીને આરતી કરો. તમારા કુટુંબ, સમુદાય અને બધા નિર્દોષ જીવોની નકારાત્મક શક્તિઓથી સુરક્ષા માટે પ્રાર્થના કરો. લાલ રંગના પ્રસાદમ જેવા કે લાલ હલવો, દાડમ, અથવા લાલ મિઠાઈઓ વહેંચો. આ તમારા અને તમારા પ્રિયજનોની આસપાસ સુરક્ષાત્મક ઊર્જા ક્ષેત્ર બનાવે છે.",
            anecdote: "⚔️ દિવ્ય સુરક્ષા પ્રણાલી: ઘણા પરિવારો પોતાના ઘરો અને વાહનોમાં તેમના મંદિરથી આશીર્વાદિત લાલ દોરો સુરક્ષા તરીકે રાખે છે - તેઓ તેને પોતાનું '24/7 દિવ્ય સુરક્ષા સબ્સ્ક્રિપ્શન' કહે છે!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં કાત્યાયની",
        content: [
          {
            heading: "મહિલા સુરક્ષા અને સશક્તિકરણ",
            text: "આજના જમાનામાં, ઉત્પીડન, હિંસા અને ભેદભાવથી સુરક્ષા માંગતી મહિલાઓ દ્વારા તેમની વિશેષ પૂજા કરવામાં આવે છે. તેમની ઊર્જા મહિલાઓને પોતાનો બચાવ કરવા, નિર્ભીકતાથી ગુનાઓની જાણ કરવા અને લિંગ સમાનતા માટે લડવાનું સામર્થ્ય આપે છે. ઘણી મહિલા અધિકાર કાર્યકર્તાઓ, સ્વ-સંરક્ષણ પ્રશિક્ષકો અને મહિલા પોલીસ અધિકારીઓ તેમની નિર્ભીક યોદ્ધા ઊર્જાથી પ્રેરણા લે છે.",
            anecdote: "👮‍♀️ દિવ્ય આધાર: મહિલા પોલીસ અધિકારીઓ અકસર ખતરનાક ઓપરેશન પહેલાં તેમની નાની છબી રાખે છે અથવા તેમના મંત્રનો જાપ કરે છે - તેઓ જણાવે છે કે સંઘર્ષ દરમિયાન અદૃશ્ય સુરક્ષાત્મક હાજરી અને અલૌકિક હિંમત અનુભવે છે!"
          },
          {
            heading: "સામાજિક ન્યાય અને સક્રિયતા",
            text: "ભ્રષ્ટાચાર, પર્યાવરણીય વિનાશ, માનવ અધિકાર ઉલ્લંઘન અને સામાજિક અન્યાય સામે લડતા કાર્યકર્તાઓ તેમની ઊર્જાનું આહ્વાન કરે છે. તેઓ ખોટાં કામને ઉજાગર કરવાનું નૈતિક હિંમત, બદલો સહન કરવાની શક્તિ, અને ન્યાય માટે લાંબી લડાઈ લડવાની દ્રઢતા પ્રદાન કરે છે. ખતરનાક પરિસ્થિતિઓમાં કામ કરતા પત્રકારો, વકીલો અને સમાજસેવકોમાં તેમની પૂજા લોકપ્રિય છે.",
            anecdote: "📰 સત્ય યોદ્ધા આશીર્વાદ: એક તપાસ પત્રકાર કાત્યાયનીની પ્રાર્થનાઓનો શ્રેય એક મોટા ભ્રષ્ટાચાર ઘોટાળાને ઉજાગર કરવાની હિંમત માટે આપે છે - તેઓ કહે છે કે દેવીએ તેમને તપાસ કરવાની નિર્ભીકતા અને બદલાથી દિવ્ય સુરક્ષા બંને આપ્યું!"
          },
          {
            heading: "ઝેરી પેટર્ન તોડવા",
            text: "તેમની ભયંકર ઊર્જા લોકોને ઝેરી સંબંધો, વ્યસનકારી વર્તણૂકો અને સ્વ-વિનાશકારી પેટર્નમાંથી મુક્ત થવામાં મદદ કરે છે. તેઓ દુર્વ્યવહારની પરિસ્થિતિઓમાંથી બહાર નીકળવાની આંતરિક શક્તિ, મદદ માંગવાની હિંમત, અને આરોગ્યપ્રદ પાયા પર જીવનને ફરીથી બનાવવાના નિશ્ચય પ્રદાન કરે છે. ચિકિત્સકો અકસર તે ક્લાયન્ટ્સ માટે તેમની પૂજાની ભલામણ કરે છે જેમને આરોગ્યપ્રદ સીમાઓ વિકસાવવાની જરૂર હોય છે.",
            anecdote: "💪 મુક્તિ યોદ્ધા: ઘરેલુ હિંસાથી બચેલા લોકોના સહાય જૂથો અકસર તેમની ઊર્જાનું આહ્વાન કરે છે - બચેલા લોકો વર્ણવે છે કે તેમને લાગ્યું કે અચાનક તેમને એક આંતરિક સિંહણ મળી જેણે તેમને ભાગવા અને ગૌરવ સાથે પોતાનું જીવન ફરીથી બનાવવામાં મદદ કરી!"
          },
          {
            heading: "સંકટમાં નેતૃત્વ",
            text: "સંસ્થાકીય સંકટ, નૈતિક દ્વિધા અથવા વૈરી ટેકઓવરનો સામનો કરતા નેતાઓ તેમની યોદ્ધા શાણપણનો સહારો લે છે. તેઓ સંકટ નેતૃત્વ કૌશલ્યો વિકસાવવામાં મદદ કરે છે - કઠિન નિર્ણયો લેવાની ક્ષમતા, દબાણ હેઠળ સિદ્ધાંતો પર અડગ રહેવું, અને ટીમના સભ્યોને વિનાશકારી શક્તિઓથી બચાવવું. તેમની ઊર્જા ખાસ કરીને વ્હિસલ-બ્લોઅરો અને નૈતિક નેતાઓ માટે શક્તિશાળી છે.",
            anecdote: "🏢 કોર્પોરેટ ધર્મ યોદ્ધા: એક CEO જેણે પોતાની કારકિર્દીને જોખમમાં મૂકવા છતાં પોતાની કંપનીમાં મોટા છેતરપિંડીનો પર્દાફાશ કર્યો, તેઓ કાત્યાયનીની દૈનિક પ્રાર્થનાઓનો શ્રેય આપે છે - તેઓ કહે છે કે દેવીએ તેમને વ્યક્તિગત સુરક્ષા અને નાણાકીય સુરક્ષા પર ધર્મ પસંદ કરવાની કરોડરજ્જુ આપી!"
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
        <title>Navratri Day 6: Maa Katyayani - The Fierce Warrior Goddess</title>
        <meta name="description" content="Explore the spiritual significance and sacred stories of Maa Katyayani on Day 6 of Navratri. Discover rituals, mantras, and modern relevance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-100 to-red-100 border-b border-gray-300 shadow-sm">
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
                      router.push(`/navratri-day-6?lang=${e.target.value}`);
                    }}
                    className="appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 font-medium shadow-sm"
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
                  <div className="text-3xl">⚔️</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.day6}</h1>
                  </div>
                </div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-red-600 to-gray-600 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-gray-600 italic">"{t.meaning}"</p>
              </div>

              {/* Right side - Today's Color */}
              <div className="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">{t.todaysColor}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-gray-500 border-2 border-gray-400 rounded-full"></div>
                    <span className="font-semibold text-gray-800 text-sm">{t.grey}</span>
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
              onClick={() => router.push(`/navratri-day-5?lang=${currentLang}`)}
              className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm"
            >
              {t.backToDay5}
            </button>
            <div className="text-center">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      day === 6
                        ? 'bg-red-500 text-white'
                        : day === 1 || day === 2 || day === 3 || day === 4 || day === 5
                        ? 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    onClick={() => {
                      if (day === 1) router.push(`/navratri-day-1?lang=${currentLang}`);
                      if (day === 2) router.push(`/navratri-day-2?lang=${currentLang}`);
                      if (day === 3) router.push(`/navratri-day-3?lang=${currentLang}`);
                      if (day === 4) router.push(`/navratri-day-4?lang=${currentLang}`);
                      if (day === 5) router.push(`/navratri-day-5?lang=${currentLang}`);
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

            <div className="space-y-8">
              {currentContent.content.map((section, index) => (
                <div key={index} className="relative">
                  {/* Section */}
                  <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-6 mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="text-2xl mr-3">✨</span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.text}
                    </p>
                  </div>

                  {/* Anecdote Box */}
                  <div className="bg-gradient-to-r from-red-100 to-gray-100 rounded-xl p-5 border-l-4 border-red-500 ml-4">
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
                      <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-gray-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 border border-red-200">
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
                    ॐ देवी कात्यायन्यै नमः
                  </div>
                  <div className="text-gray-600 italic">
                    "Om Devi Katyayanyai Namah"
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
                onClick={() => router.push(`/navratri-day-7?lang=${currentLang}`)}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {t.day7Coming}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}