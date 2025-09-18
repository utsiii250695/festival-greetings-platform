import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay5() {
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
      day5: "Day 5",
      goddess: "Maa Skandamata",
      meaning: "The Mother of Skanda (Kartikeya)",
      todaysColor: "Today's Color",
      green: "Green",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Skandamata Bless You",
      blessingDesc: "With the nurturing love of a divine mother, the wisdom to guide others, and the strength to protect all who seek your care.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Continue your spiritual journey",
      day6Coming: "Day 6: Maa Katyayani ⚔️",
      backToDay4: "← Day 4: Maa Kushmanda"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day5: "दिन 5",
      goddess: "माँ स्कंदमाता",
      meaning: "स्कंद (कार्तिकेय) की माता",
      todaysColor: "आज का रंग",
      green: "हरा",
      tabs: {
        story: "📖 पवित्र कथा",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 विधियाँ व प्रार्थनाएं",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ स्कंदमाता आपको आशीर्वाद दें",
      blessingDesc: "दिव्य माता के पोषण करने वाले प्रेम, दूसरों का मार्गदर्शन करने की बुद्धि, और आपकी देखभाल चाहने वाले सभी की रक्षा करने की शक्ति के साथ।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जाप करें",
      continueJourney: "अपनी आध्यात्मिक यात्रा जारी रखें",
      day6Coming: "दिन 6: माँ कात्यायनी ⚔️",
      backToDay4: "← दिन 4: माँ कूष्मांडा"
    },
    gu: {
      backToNavratri: "નવરાત્રિ પર પાછા",
      day5: "દિવસ 5",
      goddess: "માં સ્કંદમાતા",
      meaning: "સ્કંદ (કાર્તિકેય)ની માતા",
      todaysColor: "આજનો રંગ",
      green: "લીલો",
      tabs: {
        story: "📖 પવિત્ર કથા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 વિધિઓ અને પ્રાર્થનાઓ",
        modern: "🌟 આધુનિક સંદર્ભ"
      },
      blessing: "માં સ્કંદમાતા તમને આશીર્વાદ આપે",
      blessingDesc: "દિવ્ય માતાના પોષણકર્તા પ્રેમ, બીજાને માર્ગદર્શન આપવાની બુદ્ધિ, અને તમારી સંભાળ માંગનારા બધાની સુરક્ષા કરવાની શક્તિ સાથે।",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "મહત્તમ આશીર્વાદ માટે આ 108 વખત જાપ કરો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા ચાલુ રાખો",
      day6Coming: "દિવસ 6: માં કાત્યાયની ⚔️",
      backToDay4: "← દિવસ 4: માં કુષ્માંડા"
    }
  };

  const content = {
    en: {
      story: {
        title: "The Divine Mother of Lord Kartikeya",
        content: [
          {
            heading: "The Birth of Skanda",
            text: "Maa Skandamata is the fifth form of Goddess Durga, revered as the mother of Lord Skanda (also known as Kartikeya or Murugan). According to the Puranas, the demon Tarakasura had received a boon that he could only be killed by a son of Lord Shiva. When Shiva was deep in meditation after Sati's death, the gods were worried. They needed Shiva to father a child who could defeat Tarakasura. Through divine intervention and Parvati's love, Lord Kartikeya was born from Shiva's essence.",
            anecdote: "🔥 Divine fact: Kartikeya was actually born from the fire of Shiva's third eye! The six Krittikas (Pleiades stars) nursed him, which is why he's also called 'Kartikeya' - the one raised by the Krittikas!"
          },
          {
            heading: "The Nurturing Divine Mother",
            text: "As Skandamata, Parvati embodies the perfect balance of fierce protection and tender nurturing. She is depicted sitting on a lotus, holding baby Skanda in her lap while her other hands carry lotuses and display blessing mudras. Her gentle smile reflects a mother's unconditional love, while her four arms show her divine power to protect and nurture simultaneously. The lotus represents purity and spiritual growth - showing that divine motherhood purifies everything it touches.",
            anecdote: "🪷 Lotus wisdom: She sits on a lotus and holds lotus flowers because just as a lotus blooms beautifully despite growing in mud, a divine mother helps her children blossom despite life's challenges!"
          },
          {
            heading: "The Protector of All Beings",
            text: "Skandamata's love extends beyond just her own child to all beings in the universe. She became the cosmic mother who nurtures not only gods and demons but every soul seeking growth and protection. Her worship grants devotees the blessing of motherhood, fertility, and the wisdom to guide others. She teaches that true strength comes not from dominance but from the ability to nurture, guide, and protect with love.",
            anecdote: "👶 Universal mother: Devotees believe that worshipping Skandamata automatically brings blessings from baby Skanda too - it's like getting a 'two-for-one' divine blessing package!"
          }
        ]
      },
      significance: {
        title: "Day 5 Spiritual Significance",
        content: [
          {
            heading: "Throat Chakra Activation",
            text: "Maa Skandamata governs the Vishuddha (Throat Chakra), located at the throat area. This chakra represents communication, expression, truth, and creativity. Her worship helps us speak our truth with compassion, express ourselves authentically, and communicate with divine wisdom. The throat chakra is the bridge between heart and mind - emotion and logic.",
            anecdote: "💚 Green healing: The throat chakra glows in beautiful blue-green, the color of clear communication and healing words. When balanced, your words become medicine for others!"
          },
          {
            heading: "Divine Motherhood and Nurturing",
            text: "She represents the universal principle of motherhood - not just biological motherhood, but the divine feminine quality of nurturing, protecting, and guiding others to their highest potential. This includes teachers, mentors, caregivers, and anyone who helps others grow. Her energy teaches us that we all have the capacity to be nurturing forces in someone's life.",
            anecdote: "🤱 Spiritual motherhood: You don't need to have biological children to embody her energy - anyone who nurtures ideas, projects, students, or community is channeling Skandamata's divine motherhood!"
          },
          {
            heading: "Wisdom and Guidance",
            text: "As the mother of the warrior god Kartikeya, she embodies the wisdom needed to guide others on their spiritual journey. She teaches us how to balance love with discipline, how to encourage growth while providing safety, and how to let go when it's time for others to fight their own battles. Her wisdom shows us when to shelter and when to empower.",
            anecdote: "🦅 Eagle perspective: Like Kartikeya who rides a peacock and sees from great heights, Skandamata gives us the elevated perspective needed to guide others wisely - seeing both immediate needs and long-term growth!"
          }
        ]
      },
      rituals: {
        title: "Day 5 Sacred Rituals",
        content: [
          {
            heading: "Morning Nurturing Prayers",
            text: "Begin with offering green flowers, especially jasmine and green leaves to Maa Skandamata. Green represents growth, healing, and the heart chakra's expansion into throat chakra expression. Light a ghee lamp and chant 'Om Devi Skandamatayai Namah' 108 times while visualizing her gentle, nurturing form holding baby Skanda, radiating motherly love and protection.",
            anecdote: "🌿 Green goddess tip: Offer fresh green vegetables or green fruits - she loves anything that represents growth and nourishment, just like a caring mother preparing healthy food!"
          },
          {
            heading: "Throat Chakra Healing Ritual",
            text: "This is the perfect day to work on communication and self-expression. Sit in meditation and place your hand on your throat. Visualize green-blue light flowing through your throat chakra. Practice speaking positive affirmations aloud, sing devotional songs, or journal your deepest truths. Ask Skandamata to help you express yourself with love and wisdom.",
            anecdote: "🎵 Divine communication: Many devotees report that after throat chakra work with Skandamata, they become better singers, speakers, or writers - she literally gives you a divine voice upgrade!"
          },
          {
            heading: "Mothering Energy Meditation",
            text: "Whether you're a parent or not, connect with your inner nurturing energy. Meditate on how you can be more supportive, encouraging, and protective of those around you. Send loving thoughts to children, students, or anyone you mentor. If you're trying to conceive or adopt, this is an especially powerful day to pray for her blessings on fertility and parenthood.",
            anecdote: "🌱 Growth magic: Teachers and mentors often do special prayers to Skandamata before important classes or guidance sessions - she helps them find the perfect words to nurture their students' growth!"
          },
          {
            heading: "Evening Gratitude Prayers",
            text: "In the evening, perform aarti while expressing gratitude for all the mother figures in your life - your own mother, grandmothers, teachers, mentors, and mother earth herself. Share green-colored prasadam like mint chutney, green halwa, or paan (betel leaf) with family. This honors the nurturing energy that has shaped your life.",
            anecdote: "🍃 Sweet tradition: Many families prepare special green coconut laddu or spinach halwa on this day - combining the sacred color with nourishing ingredients that represent maternal care!"
          }
        ]
      },
      modern: {
        title: "Maa Skandamata in Modern Life",
        content: [
          {
            heading: "Parenting and Child Development",
            text: "Modern parents draw inspiration from her balanced approach to nurturing - providing unconditional love while preparing children for life's challenges. Her energy helps in understanding when to protect and when to empower, when to guide and when to let children learn independently. She's especially revered by parents of children with special needs or those facing parenting challenges.",
            anecdote: "👨‍👩‍👧‍👦 Modern parenting: Many parenting coaches incorporate her principles - the 'Skandamata Method' of balanced nurturing that creates both secure attachment and confident independence in children!"
          },
          {
            heading: "Education and Mentorship",
            text: "Teachers, professors, coaches, and mentors invoke her blessings for wisdom in guiding their students. Her energy helps educators find the right balance between challenge and support, pushing students to grow while providing emotional safety. She's particularly powerful for those working with difficult or traumatized students who need extra nurturing.",
            anecdote: "📚 Teacher transformation: A Mumbai school principal credits daily prayers to Skandamata for turning around a challenging school - she says it gave her the maternal wisdom to see each difficult child as someone needing love rather than punishment!"
          },
          {
            heading: "Healthcare and Caregiving",
            text: "Nurses, doctors, therapists, and caregivers draw on her nurturing energy to provide healing that goes beyond medical treatment. Her compassionate approach helps healthcare workers maintain empathy without burning out, and care for patients with both professional skill and motherly warmth. Many healthcare workers pray to her before difficult procedures or conversations.",
            anecdote: "🏥 Healing hands: Several hospitals now have Skandamata images in pediatric wards - both staff and families report that her presence brings calming, healing energy that helps children recover faster!"
          },
          {
            heading: "Creative Expression and Communication",
            text: "Writers, artists, public speakers, and content creators seek her blessings for authentic self-expression. Her throat chakra energy helps overcome creative blocks, stage fright, and fear of judgment. She provides the courage to share your truth and creativity with the world, while maintaining compassion in your communication.",
            anecdote: "🎭 Creative breakthrough: Many YouTubers and podcasters keep her image near their recording setup - they say she helps them speak naturally and authentically, like a loving mother encouraging their self-expression!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "भगवान कार्तिकेय की दिव्य माता",
        content: [
          {
            heading: "स्कंद का जन्म",
            text: "माँ स्कंदमाता देवी दुर्गा का पांचवां रूप हैं, जिन्हें भगवान स्कंद (कार्तिकेय या मुरुगन के नाम से भी जाने जाते हैं) की माता के रूप में पूजा जाता है। पुराणों के अनुसार, राक्षस तारकासुर को यह वरदान मिला था कि उसे केवल भगवान शिव के पुत्र द्वारा ही मारा जा सकता है। जब शिव सती की मृत्यु के बाद गहरे ध्यान में थे, तो देवता चिंतित थे। उन्हें शिव से एक ऐसे पुत्र की आवश्यकता थी जो तारकासुर को हरा सके। दिव्य हस्तक्षेप और पार्वती के प्रेम के माध्यम से, भगवान कार्तिकेय का जन्म शिव के तेज से हुआ।",
            anecdote: "🔥 दिव्य तथ्य: कार्तिकेय वास्तव में शिव की तीसरी आंख की आग से पैदा हुए थे! छह कृत्तिकाओं (प्लीएड्स तारे) ने उनका पालन-पोषण किया, इसीलिए उन्हें 'कार्तिकेय' भी कहा जाता है - कृत्तिकाओं द्वारा पाले गए!"
          },
          {
            heading: "पोषणकर्ता दिव्य माता",
            text: "स्कंदमाता के रूप में, पार्वती भयंकर सुरक्षा और कोमल पोषण का पूर्ण संतुलन दर्शाती हैं। उन्हें कमल पर बैठे हुए, अपनी गोद में बालक स्कंद को धारण करते हुए दिखाया गया है जबकि उनके अन्य हाथ कमल धारण करते हैं और आशीर्वाद मुद्रा प्रदर्शित करते हैं। उनकी मृदु मुस्कान माता के बिना शर्त प्रेम को दर्शाती है, जबकि उनकी चार भुजाएं एक साथ सुरक्षा और पोषण करने की दिव्य शक्ति दिखाती हैं। कमल पवित्रता और आध्यात्मिक विकास का प्रतिनिधित्व करता है - यह दर्शाता है कि दिव्य मातृत्व जिससे भी स्पर्श करता है उसे शुद्ध कर देता है।",
            anecdote: "🪷 कमल की बुद्धि: वे कमल पर बैठती हैं और कमल के फूल धारण करती हैं क्योंकि जैसे कमल कीचड़ में उगने के बावजूद सुंदरता से खिलता है, वैसे ही एक दिव्य माता अपने बच्चों को जीवन की चुनौतियों के बावजूद खिलने में मदद करती है!"
          },
          {
            heading: "सभी जीवों की रक्षक",
            text: "स्कंदमाता का प्रेम केवल अपने बच्चे तक सीमित नहीं है बल्कि ब्रह्मांड के सभी जीवों तक फैला हुआ है। वे ब्रह्मांडीय माता बनीं जो न केवल देवताओं और राक्षसों का बल्कि विकास और सुरक्षा चाहने वाली हर आत्मा का पोषण करती हैं। उनकी पूजा से भक्तों को मातृत्व, प्रजनन क्षमता और दूसरों का मार्गदर्शन करने की बुद्धि का आशीर्वाद मिलता है। वे सिखाती हैं कि सच्ची शक्ति वर्चस्व से नहीं बल्कि प्रेम के साथ पोषण, मार्गदर्शन और सुरक्षा करने की क्षमता से आती है।",
            anecdote: "👶 सार्वभौमिक माता: भक्तों का मानना है कि स्कंदमाता की पूजा से स्वतः ही बालक स्कंद का आशीर्वाद भी मिलता है - यह 'दो-के-लिए-एक' दिव्य आशीर्वाद पैकेज पाने जैसा है!"
          }
        ]
      },
      significance: {
        title: "दिन 5 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "गला चक्र सक्रियता",
            text: "माँ स्कंदमाता विशुद्ध (गला चक्र) को नियंत्रित करती हैं, जो गले के क्षेत्र में स्थित है। यह चक्र संवाद, अभिव्यक्ति, सत्य और रचनात्मकता का प्रतिनिधित्व करता है। उनकी पूजा से हमें करुणा के साथ अपना सत्य बोलने, प्रामाणिक रूप से खुद को अभिव्यक्त करने और दिव्य बुद्धि के साथ संवाद करने में मदद मिलती है। गला चक्र हृदय और मन के बीच का सेतु है - भावना और तर्क के बीच।",
            anecdote: "💚 हरा उपचार: गला चक्र सुंदर नीले-हरे रंग में चमकता है, जो स्पष्ट संवाद और उपचारक शब्दों का रंग है। जब संतुलित हो, तो आपके शब्द दूसरों के लिए दवा बन जाते हैं!"
          },
          {
            heading: "दिव्य मातृत्व और पोषण",
            text: "वे मातृत्व के सार्वभौमिक सिद्धांत का प्रतिनिधित्व करती हैं - न केवल जैविक मातृत्व, बल्कि दिव्य स्त्री गुण जो दूसरों का पोषण, सुरक्षा और उनकी उच्चतम क्षमता तक मार्गदर्शन करता है। इसमें शिक्षक, गुरु, देखभालकर्ता और कोई भी व्यक्ति शामिल है जो दूसरों को बढ़ने में मदद करता है। उनकी ऊर्जा हमें सिखाती है कि हम सभी में किसी के जीवन में पोषणकर्ता शक्ति बनने की क्षमता है।",
            anecdote: "🤱 आध्यात्मिक मातृत्व: उनकी ऊर्जा को अपनाने के लिए जैविक बच्चे होना जरूरी नहीं है - कोई भी जो विचारों, परियोजनाओं, छात्रों या समुदाय का पोषण करता है वह स्कंदमाता की दिव्य मातृत्व शक्ति का माध्यम बन रहा है!"
          },
          {
            heading: "ज्ञान और मार्गदर्शन",
            text: "योद्धा देव कार्तिकेय की माता के रूप में, वे दूसरों को उनकी आध्यात्मिक यात्रा पर मार्गदर्शन करने के लिए आवश्यक बुद्धि का प्रतीक हैं। वे हमें सिखाती हैं कि प्रेम को अनुशासन के साथ कैसे संतुलित करें, सुरक्षा प्रदान करते हुए विकास को कैसे प्रोत्साहित करें, और जब दूसरों के लिए अपनी लड़ाई लड़ने का समय हो तो कैसे छोड़ना चाहिए। उनकी बुद्धि हमें दिखाती है कि कब आश्रय देना है और कब सशक्त बनाना है।",
            anecdote: "🦅 उकाब दृष्टिकोण: जैसे कार्तिकेय मयूर पर सवार होकर ऊंचाई से देखते हैं, स्कंदमाता हमें दूसरों का बुद्धिमानी से मार्गदर्शन करने के लिए आवश्यक उन्नत दृष्टिकोण देती हैं - तत्काल आवश्यकताओं और दीर्घकालिक विकास दोनों को देखना!"
          }
        ]
      },
      rituals: {
        title: "दिन 5 की पवित्र विधियाँ",
        content: [
          {
            heading: "प्रातःकालीन पोषणकर्ता प्रार्थनाएं",
            text: "माँ स्कंदमाता को हरे फूल, विशेष रूप से चमेली और हरे पत्ते अर्पित करके शुरुआत करें। हरा रंग विकास, उपचार और हृदय चक्र के गला चक्र में विस्तार का प्रतिनिधित्व करता है। घी का दीपक जलाएं और 'ॐ देवी स्कंदमातायै नमः' का 108 बार जाप करें जबकि उनके कोमल, पोषणकर्ता रूप की कल्पना करें जो बालक स्कंद को धारण किए हुए, मातृ प्रेम और सुरक्षा की किरणें फैला रही हैं।",
            anecdote: "🌿 हरी देवी टिप: ताजी हरी सब्जियां या हरे फल अर्पित करें - वे हर उस चीज़ से प्रेम करती हैं जो विकास और पोषण का प्रतिनिधित्व करती है, बिल्कुल एक देखभाल करने वाली माँ की तरह जो स्वस्थ भोजन तैयार करती है!"
          },
          {
            heading: "गला चक्र उपचार विधि",
            text: "यह संवाد और आत्म-अभिव्यक्ति पर काम करने का सही दिन है। ध्यान में बैठें और अपना हाथ गले पर रखें। अपने गला चक्र के माध्यम से हरे-नीले प्रकाश के प्रवाह की कल्पना करें। सकारात्मक प्रतिज्ञाओं को ज़ोर से बोलने का अभ्यास करें, भक्ति गीत गाएं, या अपनी गहरी सच्चाइयों को लिखें। स्कंदमाता से प्रार्थना करें कि वे आपको प्रेम और बुद्धि के साथ अपना इज़हार करने में मदद करें।",
            anecdote: "🎵 दिव्य संवाद: कई भक्तों की रिपोर्ट है कि स्कंदमाता के साथ गला चक्र के काम के बाद, वे बेहतर गायक, वक्ता या लेखक बन जाते हैं - वे वचन देती हैं कि आपको दिव्य आवाज़ का अपग्रेड मिले!"
          },
          {
            heading: "मातृत्व ऊर्जा ध्यान",
            text: "चाहे आप माता-पिता हों या न हों, अपनी आंतरिक पोषणकर्ता ऊर्जा से जुड़ें। इस पर ध्यान करें कि आप अपने आसपास के लोगों के लिए कैसे अधिक सहायक, उत्साहजनक और सुरक्षात्मक हो सकते हैं। बच्चों, छात्रों या जिन्हें आप मार्गदर्शन देते हैं उन्हें प्रेमपूर्ण विचार भेजें। यदि आप गर्भधारण या गोद लेने की कोशिश कर रहे हैं, तो प्रजनन क्षमता और मातृत्व पर उनके आशीर्वाद के लिए प्रार्थना करने का यह विशेष रूप से शक्तिशाली दिन है।",
            anecdote: "🌱 विकास जादू: शिक्षक और गुरु अक्सर महत्वपूर्ण कक्षाओं या मार्गदर्शन सत्रों से पहले स्कंदमाता की विशेष प्रार्थना करते हैं - वे उन्हें अपने छात्रों के विकास को पोषित करने के लिए सही शब्द खोजने में मदद करती हैं!"
          },
          {
            heading: "सांझ कृतज्ञता प्रार्थनाएं",
            text: "शाम को आरती करें और अपने जीवन की सभी माता-समान व्यक्तियों के लिए कृतज्ञता व्यक्त करें - अपनी माँ, दादी-नानी, शिक्षक, गुरु और माता पृथ्वी। परिवार के साथ हरे रंग के प्रसादम जैसे पुदीना चटनी, हरा हलवा या पान बाँटें। यह उस पोषणकर्ता ऊर्जा का सम्मान करता है जिसने आपके जीवन को आकार दिया है।",
            anecdote: "🍃 मीठी परंपरा: कई परिवार इस दिन विशेष हरे नारियल के लड्डू या पालक का हलवा बनाते हैं - पवित्र रंग को पोषक तत्वों के साथ जोड़ते हुए जो मातृ देखभाल का प्रतिनिधित्व करते हैं!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ स्कंदमाता",
        content: [
          {
            heading: "पालन-पोषण और बाल विकास",
            text: "आधुनिक माता-पिता उनके पोषण के संतुलित दृष्टिकोण से प्रेरणा लेते हैं - बिना शर्त प्रेम प्रदान करते हुए बच्चों को जीवन की चुनौतियों के लिए तैयार करना। उनकी ऊर्जा यह समझने में मदद करती है कि कब सुरक्षा करनी है और कब सशक्त बनाना है, कब मार्गदर्शन करना है और कब बच्चों को स्वतंत्र रूप से सीखने देना है। विशेष आवश्यकता वाले बच्चों के माता-पिता या पालन-पोषण की चुनौतियों का सामना करने वालों द्वारा उनकी विशेष रूप से पूजा की जाती है।",
            anecdote: "👨‍👩‍👧‍👦 आधुनिक पालन-पोषण: कई पालन-पोषण कोच उनके सिद्धांतों को शामिल करते हैं - संतुलित पोषण की 'स्कंदमाता विधि' जो बच्चों में सुरक्षित लगाव और आत्मविश्वासी स्वतंत्रता दोनों बनाती है!"
          },
          {
            heading: "शिक्षा और मार्गदर्शन",
            text: "शिक्षक, प्रोफेसर, कोच और गुरु अपने छात्रों का मार्गदर्शन करने में बुद्धि के लिए उनके आशीर्वाद का आह्वान करते हैं। उनकी ऊर्जा शिक्षकों को चुनौती और समर्थन के बीच सही संतुलन खोजने में मदद करती है, छात्रों को भावनात्मक सुरक्षा प्रदान करते हुए उन्हें बढ़ने के लिए प्रेरित करना। वे विशेष रूप से कठिन या आघात झेले हुए छात्रों के साथ काम करने वालों के लिए शक्तिशाली हैं जिन्हें अतिरिक्त पोषण की आवश्यकता होती है।",
            anecdote: "📚 शिक्षक परिवर्तन: एक मुंबई स्कूल की प्रिंसिपल स्कंदमाता की दैनिक प्रार्थनाओं का श्रेय एक चुनौतीपूर्ण स्कूल को बदलने में देती है - वे कहती हैं कि इससे उन्हें हर कठिन बच्चे को सजा के बजाय प्रेम की जरूरत वाले व्यक्ति के रूप में देखने की मातृ बुद्धि मिली!"
          },
          {
            heading: "स्वास्थ्य सेवा और देखभाल",
            text: "नर्स, डॉक्टर, चिकित्सक और देखभालकर्ता उनकी पोषणकर्ता ऊर्जा का उपयोग करके ऐसा उपचार प्रदान करते हैं जो चिकित्सा उपचार से कहीं आगे जाता है। उनका करुणामय दृष्टिकोण स्वास्थ्य कर्मियों को बिना थके सहानुभूति बनाए रखने में मदद करता है, और मरीजों की पेशेवर कुशलता और मातृ गर्मजोशी दोनों के साथ देखभाल करता है। कई स्वास्थ्य कर्मचारी कठिन प्रक्रियाओं या बातचीत से पहले उनसे प्रार्थना करते हैं।",
            anecdote: "🏥 उपचारक हाथ: कई अस्पतालों में अब बाल चिकित्सा वार्डों में स्कंदमाता की तस्वीरें हैं - कर्मचारी और परिवार दोनों रिपोर्ट करते हैं कि उनकी उपस्थिति शांत, उपचारक ऊर्जा लाती है जो बच्चों को तेजी से ठीक होने में मदद करती है!"
          },
          {
            heading: "रचनात्मक अभिव्यक्ति और संवाद",
            text: "लेखक, कलाकार, सार्वजनिक वक्ता और सामग्री निर्माता प्रामाणिक आत्म-अभिव्यक्ति के लिए उनके आशीर्वाद की तलाश करते हैं। उनकी गला चक्र ऊर्जा रचनात्मक अवरोधों, मंच भय और निर्णय के डर पर काबू पाने में मदद करती है। वे दुनिया के साथ अपना सत्य और रचनात्मकता साझा करने का साहस प्रदान करती हैं, जबकि अपने संवाद में करुणा बनाए रखती हैं।",
            anecdote: "🎭 रचनात्मक सफलता: कई YouTubers और पॉडकास्टर अपने रिकॉर्डिंग सेटअप के पास उनकी तस्वीर रखते हैं - वे कहते हैं कि यह उन्हें स्वाभाविक और प्रामाणिक रूप से बोलने में मदद करती है, जैसे एक प्रेमी माँ उनकी आत्म-अभिव्यक्ति को प्रोत्साहित कर रही हो!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "ભગવાન કાર્તિકેયની દિવ્ય માતા",
        content: [
          {
            heading: "સ્કંદનો જન્મ",
            text: "માં સ્કંદમાતા દેવી દુર્गાનું પાંચમું રૂપ છે, જેમની ભગવાન સ્કંદ (કાર્તિકેય અથવા મુરુગન તરીકે પણ ઓળખાય છે)ની માતા તરીકે પૂજા કરવામાં આવે છે. પુરાણો અનુસાર, રાક્ષસ તારકાસુરને આ વરદાન મળ્યું હતું કે તેને ફક્ત ભગવાન શિવના પુત્ર દ્વારા જ માર્યો જઈ શકે. જ્યારે શિવ સતીના મૃત્યુ પછી ગહન ધ્યાનમાં હતા, ત્યારે દેવો ચિંતિત હતા. તેમને શિવથી એવા પુત્રની જરૂર હતી જે તારકાસુરને હરાવી શકે. દિવ્ય હસ્તક્ષેપ અને પાર્વતીના પ્રેમ દ્વારા, ભગવાન કાર્તિકેયનો જન્મ શિવના તેજથી થયો.",
            anecdote: "🔥 દિવ્ય તથ્ય: કાર્તિકેય ખરેખર શિવની ત્રીજી આંખના અગ્નિથી જન્મ્યા હતા! છ કૃત્તિકાઓ (પ્લીએડ્સ તારાઓ)એ તેમનું પાલન-પોષણ કર્યું, તેથી તેમને 'કાર્તિકેય' પણ કહેવામાં આવે છે - કૃત્તિકાઓ દ્વારા ઉછેરવામાં આવેલા!"
          },
          {
            heading: "પોષણકર્તા દિવ્ય માતા",
            text: "સ્કંદમાતા તરીકે, પાર્વતી ભયંકર સુરક્ષા અને કોમળ પોષણનું સંપૂર્ણ સંતુલન દર્શાવે છે. તેમને કમળ પર બેઠેલા, તેમના ખોળામાં બાળક સ્કંદને ધારણ કરતા દર્શાવવામાં આવ્યા છે જ્યારે તેમના અન્ય હાથો કમળ ધરાવે છે અને આશીર્વાદની મુદ્રા દર્શાવે છે. તેમનું મૃદુ સ્મિત માતાના અશરતી પ્રેમને દર્શાવે છે, જ્યારે તેમના ચાર હાથો એક સાથે સુરક્ષા અને પોષણ કરવાની દિવ્ય શક્તિ બતાવે છે. કમળ પવિત્રતા અને આધ્યાત્મિક વિકાસનું પ્રતિનિધિત્વ કરે છે - દર્શાવે છે કે દિવ્ય માતૃત્વ જેને પણ સ્પર્શ કરે છે તેને શુદ્ધ કરી દે છે.",
            anecdote: "🪷 કમળની શાણપણ: તેઓ કમળ પર બેસે છે અને કમળના ફૂલો ધરાવે છે કારણ કે જેમ કમળ કાદવમાં ઉગવા છતાં સુંદરતાથી ખીલે છે, તેમ દિવ્ય માતા પોતાના બાળકોને જીવનના પડકારો છતાં ખીલવામાં મદદ કરે છે!"
          },
          {
            heading: "બધા જીવોની રક્ષક",
            text: "સ્કંદમાતાનો પ્રેમ ફક્ત પોતાના બાળક સુધી મર્યાદિત નથી પરંતુ બ્રહ્માંડના બધા જીવો સુધી ફેલાયેલો છે. તેઓ બ્રહ્માંડીય માતા બન્યા જે માત્ર દેવો અને રાક્ષસોનું જ નહીં પરંતુ વિકાસ અને સુરક્ષા માંગતી દરેક આત્માનું પોષણ કરે છે. તેમની પૂજાથી ભક્તોને માતૃત્વ, પ્રજનનક્ષમતા અને બીજાઓને માર્ગદર્શન આપવાની બુદ્ધિનો આશીર્વાદ મળે છે. તેઓ શીખવે છે કે સાચી શક્તિ વર્ચસ્વથી નહીં પરંતુ પ્રેમ સાથે પોષણ, માર્ગદર્શન અને સુરક્ષા કરવાની ક્ષમતાથી આવે છે.",
            anecdote: "👶 સાર્વત્રિક માતા: ભક્તોનું માનવું છે કે સ્કંદમાતાની પૂજાથી આપોઆપ બાળક સ્કંદનો પણ આશીર્વાદ મળે છે - તે 'બે-માટે-એક' દિવ્ય આશીર્વાદ પેકેજ મેળવવા જેવું છે!"
          }
        ]
      },
      significance: {
        title: "દિવસ 5 નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "ગળા ચક્રની સક્રિયતા",
            text: "માં સ્કંદમાતા વિશુદ્ધ (ગળા ચક્ર)ને નિયંત્રિત કરે છે, જે ગળાના વિસ્તારમાં સ્થિત છે. આ ચક્ર સંવાદ, અભિવ્યક્તિ, સત્ય અને સર્જનાત્મકતાનું પ્રતિનિધિત્વ કરે છે. તેમની પૂજાથી આપણને કરુણા સાથે આપણું સત્ય બોલવામાં, પ્રમાણિકતાથી આપણી અભિવ્યક્તિ કરવામાં અને દિવ્ય શાણપણ સાથે સંવાદ કરવામાં મદદ મળે છે. ગળા ચક્ર હૃદય અને મન વચ્ચેનો સેતુ છે - લાગણી અને તર્ક વચ્ચે.",
            anecdote: "💚 લીલો ઉપચાર: ગળા ચક્ર સુંદર વાદળી-લીલા રંગમાં ચમકે છે, જે સ્પષ્ટ સંવાદ અને ઉપચારક શબ્દોનો રંગ છે. જ્યારે સંતુલિત હોય, ત્યારે તમારા શબ્દો બીજાઓ માટે દવા બની જાય છે!"
          },
          {
            heading: "દિવ્ય માતૃત્વ અને પોષણ",
            text: "તેઓ માતૃત્વના સાર્વત્રિક સિદ્ધાંતનું પ્રતિનિધિત્વ કરે છે - માત્ર જૈવિક માતૃત્વ નહીં, પરંતુ દિવ્ય સ્ત્રી ગુણ જે બીજાઓનું પોષણ, સુરક્ષા અને તેમની સર્વોચ્ચ ક્ષમતા સુધી માર્ગદર્શન કરે છે. આમાં શિક્ષકો, માર્ગદર્શકો, સંભાળ રાખનારાઓ અને કોઈપણ વ્યક્તિ શામેલ છે જે બીજાઓને વધવામાં મદદ કરે છે. તેમની ઊર્જા આપણને શીખવે છે કે આપણા બધામાં કોઈના જીવનમાં પોષણકર્તા શક્તિ બનવાની ક્ષમતા છે.",
            anecdote: "🤱 આધ્યાત્મિક માતૃત્વ: તેમની ઊર્જાને અપનાવવા માટે જૈવિક બાળકો હોવા જરૂરી નથી - કોઈપણ જે વિચારો, પ્રોજેક્ટ્સ, વિદ્યાર્થીઓ અથવા સમુદાયનું પોષણ કરે છે તે સ્કંદમાતાની દિવ્ય માતૃત્વ શક્તિનું માધ્યમ બની રહ્યું છે!"
          },
          {
            heading: "શાણપણ અને માર્ગદર્શન",
            text: "યોદ્ધા દેવ કાર્તિકેયની માતા તરીકે, તેઓ બીજાઓને તેમની આધ્યાત્મિક યાત્રામાં માર્ગદર્શન આપવા માટે જરૂરી શાણપણનું પ્રતીક છે. તેઓ આપણને શીખવે છે કે પ્રેમને શિસ્ત સાથે કેવી રીતે સંતુલિત કરવું, સુરક્ષા પ્રદાન કરતા વિકાસને કેવી રીતે પ્રોત્સાહિત કરવું, અને જ્યારે બીજાઓ માટે પોતાની લડાઈ લડવાનો સમય હોય ત્યારે કેવી રીતે છોડવું. તેમની શાણપણ આપણને બતાવે છે કે ક્યારે આશ્રય આપવો અને ક્યારે સશક્ત બનાવવું.",
            anecdote: "🦅 ગરુડ દૃષ્ટિકોણ: જેમ કાર્તિકેય મયૂર પર સવાર થઈને ઊંચાઈથી જુએ છે, સ્કંદમાતા આપણને બીજાઓનું શાણપણથી માર્ગદર્શન કરવા માટે જરૂરી ઉન્નત દૃષ્ટિકોણ આપે છે - તાત્કાલિક જરૂરિયાતો અને લાંબા ગાળાના વિકાસ બંનેને જોવું!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 5 ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "પ્રાતઃકાલીન પોષણકર્તા પ્રાર્થનાઓ",
            text: "માં સ્કંદમાતાને લીલા ફૂલો, ખાસ કરીને જાસ્મિન અને લીલા પાંદડાઓ અર્પણ કરીને શરૂઆત કરો. લીલો રંગ વૃદ્ધિ, ઉપચાર અને હૃદય ચક્રના ગળા ચક્રમાં વિસ્તરણનું પ્રતિનિધિત્વ કરે છે. ઘીનો દીવો પ્રગટાવો અને 'ॐ દેવી સ્કંદમાતાયૈ નમઃ'નો 108 વખત જાપ કરો જ્યારે તેમના કોમળ, પોષણકર્તા રૂપની કલ્પના કરો જે બાળક સ્કંદને ધારણ કરીને, માતૃ પ્રેમ અને સુરક્ષાની કિરણો ફેલાવે છે.",
            anecdote: "🌿 લીલી દેવી ટિપ: તાજી લીલી શાકભાજી અથવા લીલા ફળો અર્પણ કરો - તેઓ વૃદ્ધિ અને પોષણનું પ્રતિનિધિત્વ કરતી દરેક વસ્તુને પ્રેમ કરે છે, બિલકુલ એક સંભાળ રાખતી માં જેવી જે આરોગ્યપ્રદ ખોરાક તૈયાર કરે છે!"
          },
          {
            heading: "ગળા ચક્ર ઉપચાર વિધિ",
            text: "આ સંવાદ અને સ્વ-અભિવ્યક્તિ પર કામ કરવાનો યોગ્ય દિવસ છે. ધ્યાનમાં બેસો અને તમારો હાથ ગળા પર મૂકો. તમારા ગળા ચક્ર દ્વારા લીલા-વાદળી પ્રકાશના પ્રવાહની કલ્પના કરો. સકારાત્મક પ્રતિજ્ઞાઓને મોટેથી બોલવાનો અભ્યાસ કરો, ભક્તિ ગીતો ગાઓ, અથવા તમારા ઊંડા સત્યો લખો. સ્કંદમાતાને પ્રાર્થના કરો કે તેઓ તમને પ્રેમ અને શાણપણ સાથે તમારી અભિવ્યક્તિ કરવામાં મદદ કરે.",
            anecdote: "🎵 દિવ્ય સંવાદ: ઘણા ભક્તો જણાવે છે કે સ્કંદમાતા સાથે ગળા ચક્રના કામ પછી, તેઓ બહેતર ગાયક, વક્તા અથવા લેખક બની જાય છે - તેઓ તમને દિવ્ય અવાજનું અપગ્રેડ આપે છે!"
          },
          {
            heading: "માતૃત્વ ઊર્જા ધ્યાન",
            text: "ભલે તમે માતા-પિતા હો કે ન હો, તમારી આંતરિક પોષણકર્તા ઊર્જા સાથે જોડાઓ. આ પર ધ્યાન કરો કે તમે તમારી આસપાસના લોકો માટે કેવી રીતે વધુ સહાયક, પ્રોત્સાહનજનક અને સુરક્ષાત્મક બની શકો. બાળકો, વિદ્યાર્થીઓ અથવા જેમને તમે માર્ગદર્શન આપો છો તેમને પ્રેમભર્યા વિચારો મોકલો. જો તમે ગર્ભધારણ અથવા દત્તક લેવાનો પ્રયાસ કરી રહ્યા છો, તો પ્રજનનક્ષમતા અને માતૃત્વ પર તેમના આશીર્વાદ માટે પ્રાર્થના કરવાનો આ વિશેષ રૂપે શક્તિશાળી દિવસ છે.",
            anecdote: "🌱 વૃદ્ધિ જાદુ: શિક્ષકો અને માર્ગદર્શકો અકસર મહત્વપૂર્ણ વર્ગો અથવા માર્ગદર્શન સત્રો પહેલાં સ્કંદમાતાની ખાસ પ્રાર્થના કરે છે - તેઓ તેમને પોતાના વિદ્યાર્થીઓના વિકાસને પોષવા માટે યોગ્ય શબ્દો શોધવામાં મદદ કરે છે!"
          },
          {
            heading: "સાંજની કૃતજ્ઞતા પ્રાર્થનાઓ",
            text: "સાંજે આરતી કરો અને તમારા જીવનની બધી માતા-સમાન વ્યક્તિઓ માટે કૃતજ્ઞતા વ્યક્ત કરો - તમારી માં, દાદી-નાની, શિક્ષકો, માર્ગદર્શકો અને માતા પૃથ્વી. કુટુંબ સાથે લીલા રંગના પ્રસાદમ જેવા કે પુદીના ચટણી, લીલો હલવો અથવા પાન વહેંચો. આ તે પોષણકર્તા ઊર્જાનું સન્માન કરે છે જેણે તમારા જીવનને આકાર આપ્યો છે.",
            anecdote: "🍃 મીઠી પરંપરા: ઘણા કુટુંબો આ દિવસે ખાસ લીલા નારિયેળના લાડુ અથવા પાલકનો હલવો બનાવે છે - પવિત્ર રંગને પોષક તત્વો સાથે જોડીને જે માતૃ સંભાળનું પ્રતિનિધિત્વ કરે છે!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં સ્કંદમાતા",
        content: [
          {
            heading: "પાલન-પોષણ અને બાળ વિકાસ",
            text: "આધુનિક માતા-પિતા તેમના પોષણના સંતુલિત અભિગમથી પ્રેરણા લે છે - બિનશરતી પ્રેમ પ્રદાન કરતાં બાળકોને જીવનના પડકારો માટે તૈયાર કરવા. તેમની ઊર્જા એ સમજવામાં મદદ કરે છે કે ક્યારે સુરક્ષા કરવી અને ક્યારે સશક્ત બનાવવું, ક્યારે માર્ગદર્શન આપવું અને ક્યારે બાળકોને સ્વતંત્ર રીતે શીખવા દેવા. વિશેષ જરૂરિયાત ધરાવતા બાળકોના માતા-પિતા અથવા પાલન-પોષણના પડકારોનો સામનો કરનારાઓ દ્વારા તેમની વિશેષ રૂપે પૂજા કરવામાં આવે છે.",
            anecdote: "👨‍👩‍👧‍👦 આધુનિક પાલન-પોષણ: ઘણા પાલન-પોષણ કોચ તેમના સિદ્ધાંતોનો સમાવેશ કરે છે - સંતુલિત પોષણની 'સ્કંદમાતા પદ્ધતિ' જે બાળકોમાં સુરક્ષિત જોડાણ અને આત્મવિશ્વાસપૂર્ણ સ્વતંત્રતા બંને બનાવે છે!"
          },
          {
            heading: "શિક્ષણ અને માર્ગદર્શન",
            text: "શિક્ષકો, પ્રોફેસરો, કોચ અને માર્ગદર્શકો તેમના વિદ્યાર્થીઓને માર્ગદર્શન આપવામાં શાણપણ માટે તેમના આશીર્વાદની અરજ કરે છે. તેમની ઊર્જા શિક્ષકોને પડકાર અને સમર્થન વચ્ચેનું યોગ્ય સંતુલન શોધવામાં મદદ કરે છે, વિદ્યાર્થીઓને ભાવનાત્મક સુરક્ષા પ્રદાન કરતાં તેમને વધવા માટે પ્રેરિત કરવા. તેઓ ખાસ કરીને મુશ્કેલ અથવા આઘાત સહન કરેલા વિદ્યાર્થીઓ સાથે કામ કરનારાઓ માટે શક્તિશાળી છે જેમને વધારાના પોષણની જરૂર હોય છે.",
            anecdote: "📚 શિક્ષક પરિવર્તન: એક મુંબઈ શાળાની આચાર્યા સ્કંદમાતાની દૈનિક પ્રાર્થનાઓનો શ્રેય એક પડકારજનક શાળાને બદલવામાં આપે છે - તેઓ કહે છે કે તેનાથી તેમને દરેક મુશ્કેલ બાળકને સજાની બદલે પ્રેમની જરૂર હોય તેવી વ્યક્તિ તરીકે જોવાની માતૃ બુદ્ધિ મળી!"
          },
          {
            heading: "આરોગ્ય સેવા અને સંભાળ",
            text: "નર્સો, ડોકટરો, ચિકિત્સકો અને સંભાળ રાખનારાઓ તેમની પોષણકર્તા ઊર્જાનો ઉપયોગ કરીને એવી હીલિંગ પ્રદાન કરે છે જે તબીબી સારવાર કરતાં આગળ વધે છે. તેમનો દયાળુ અભિગમ આરોગ્ય કર્મચારીઓને બર્નઆઉટ કર્યા વિના સહાનુભૂતિ જાળવવામાં મદદ કરે છે, અને દર્દીઓની વ્યાવસાયિક કૌશલ્ય અને માતૃ ગરમજોશી બંને સાથે સંભાળ રાખે છે. ઘણા આરોગ્ય કર્મચારીઓ મુશ્કેલ પ્રક્રિયાઓ અથવા વાર્તાલાપ પહેલાં તેમની પ્રાર્થના કરે છે.",
            anecdote: "🏥 ઉપચારક હાથ: ઘણી હોસ્પિટલોમાં હવે બાળ ચિકિત્સા વોર્ડોમાં સ્કંદમાતાની છબીઓ છે - સ્ટાફ અને કુટુંબો બંને જણાવે છે કે તેમની હાજરી શાંત, ઉપચારક ઊર્જા લાવે છે જે બાળકોને ઝડપથી સાજા થવામાં મદદ કરે છે!"
          },
          {
            heading: "સર્જનાત્મક અભિવ્યક્તિ અને સંવાદ",
            text: "લેખકો, કલાકારો, જાહેર વક્તાઓ અને સામગ્રી નિર્માતાઓ પ્રમાણિક સ્વ-અભિવ્યક્તિ માટે તેમના આશીર્વાદની શોધ કરે છે. તેમની ગળા ચક્રની ઊર્જા સર્જનાત્મક અવરોધો, સ્ટેજ ભય અને નિર્ણયના ડરને દૂર કરવામાં મદદ કરે છે. તેઓ વિશ્વ સાથે તમારા સત્ય અને સર્જનાત્મકતાને વહેંચવાની હિંમત પ્રદાન કરે છે, જ્યારે તમારા સંવાદમાં કરુણા જાળવે છે.",
            anecdote: "🎭 સર્જનાત્મક સફળતા: ઘણા YouTubers અને પોડકાસ્ટરો તેમના રેકોર્ડિંગ સેટઅપ પાસે તેમની છબી રાખે છે - તેઓ કહે છે કે તે તેમને કુદરતી અને પ્રમાણિકતાથી બોલવામાં મદદ કરે છે, જેમ કે પ્રેમાળ માં તેમની સ્વ-અભિવ્યક્તિને પ્રોત્સાહિત કરી રહી હોય!"
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
        <title>Navratri Day 5: Maa Skandamata - The Divine Mother</title>
        <meta name="description" content="Explore the spiritual significance and sacred stories of Maa Skandamata on Day 5 of Navratri. Discover rituals, mantras, and modern relevance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-100 border-b border-green-200 shadow-sm">
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
                      router.push(`/navratri-day-5?lang=${e.target.value}`);
                    }}
                    className="appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-medium shadow-sm"
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
                  <div className="text-3xl">🪷</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.day5}</h1>
                  </div>
                </div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-gray-600 italic">"{t.meaning}"</p>
              </div>

              {/* Right side - Today's Color */}
              <div className="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium mb-1">{t.todaysColor}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-gray-400 rounded-full"></div>
                    <span className="font-semibold text-gray-800 text-sm">{t.green}</span>
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
              onClick={() => router.push(`/navratri-day-4?lang=${currentLang}`)}
              className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm"
            >
              {t.backToDay4}
            </button>
            <div className="text-center">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      day === 5
                        ? 'bg-green-500 text-white'
                        : day === 1 || day === 2 || day === 3 || day === 4
                        ? 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    onClick={() => {
                      if (day === 1) router.push(`/navratri-day-1?lang=${currentLang}`);
                      if (day === 2) router.push(`/navratri-day-2?lang=${currentLang}`);
                      if (day === 3) router.push(`/navratri-day-3?lang=${currentLang}`);
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
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
              {currentContent.title}
            </h2>

            <div className="space-y-8">
              {currentContent.content.map((section, index) => (
                <div key={index} className="relative">
                  {/* Section */}
                  <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6 mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="text-2xl mr-3">✨</span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.text}
                    </p>
                  </div>

                  {/* Anecdote Box */}
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-5 border-l-4 border-green-500 ml-4">
                    <div className="flex items-start">
                      <div className="text-2xl mr-3 flex-shrink-0">💡</div>
                      <p className="text-green-800 font-medium italic">
                        {section.anecdote}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < currentContent.content.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {t.blessing}
                </h3>
                <p className="text-green-600 text-lg mb-6 max-w-2xl mx-auto">
                  {t.blessingDesc}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
                  <h4 className="font-bold text-gray-800 mb-3">{t.todaysMantra}</h4>
                  <div className="text-lg font-semibold text-green-700 sanskrit mb-2">
                    ॐ देवी स्कन्दमातायै नमः
                  </div>
                  <div className="text-gray-600 italic">
                    "Om Devi Skandamatayai Namah"
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
                onClick={() => router.push(`/navratri-day-6?lang=${currentLang}`)}
                className="px-8 py-4 bg-gradient-to-r from-gray-500 to-green-500 text-white font-semibold rounded-xl hover:from-gray-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {t.day6Coming}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}