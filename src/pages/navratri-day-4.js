import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay4() {
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
      day4: "Day 4",
      goddess: "Maa Kushmanda",
      meaning: "The Creator of the Universe",
      todaysColor: "Today's Color",
      green: "Green",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Kushmanda Bless You",
      blessingDesc: "With the radiant energy of the sun, abundant health and vitality, and the creative power to manifest your dreams into reality.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Continue your spiritual journey",
      day5Coming: "Day 5 coming soon! 🙏",
      day5Button: "Day 5: Maa Skandamata 👶",
      backToDay3: "← Day 3: Maa Chandraghanta"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day4: "दिन 4",
      goddess: "माँ कूष्मांडा",
      meaning: "ब्रह्मांड की सृष्टिकर्ता",
      todaysColor: "आज का रंग",
      green: "हरा",
      tabs: {
        story: "📖 पवित्र कथा",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 विधियाँ व प्रार्थनाएं",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ कूष्मांडा आपको आशीर्वाद दें",
      blessingDesc: "सूर्य की चमकदार ऊर्जा, प्रचुर स्वास्थ्य और जीवनशक्ति, और अपने सपनों को साकार करने की सृजनात्मक शक्ति के साथ।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जाप करें",
      continueJourney: "अपनी आध्यात्मिक यात्रा जारी रखें",
      day5Coming: "दिन 5 जल्दी आ रहा है! 🙏",
      day5Button: "दिन 5: माँ स्कंदमाता 👶",
      backToDay3: "← दिन 3: माँ चंद्रघंटा"
    },
    gu: {
      backToNavratri: "નવરાત્રિ પર પાછા",
      day4: "દિવસ 4",
      goddess: "માં કુષ્માંડા",
      meaning: "બ્રહ્માંડની સર્જનાકર્તા",
      todaysColor: "આજનો રંગ",
      green: "લીલો",
      tabs: {
        story: "📖 પવિત્ર કથા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 વિધિઓ અને પ્રાર્થનાઓ",
        modern: "🌟 આધુનિક સંદર્ભ"
      },
      blessing: "માં કુષ્માંડા તમને આશીર્વાદ આપે",
      blessingDesc: "સૂર્યની તેજસ્વી ઊર્જા, પુષ્કળ આરોગ્ય અને જીવનશક્તિ, અને તમારા સપનાઓને વાસ્તવિકતામાં પ્રગટ કરવાની સર્જનાત્મક શક્તિ સાથે।",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "મહત્તમ આશીર્વાદ માટે આ 108 વખત જાપ કરો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા ચાલુ રાખો",
      day5Coming: "દિવસ 5 જલ્દી આવે છે! 🙏",
      day5Button: "દિવસ 5: માં સ્કંદમાતા 👶",
      backToDay3: "← દિવસ 3: માં ચંદ્રઘંટા"
    }
  };

  const content = {
    en: {
      story: {
        title: "The Birth of Maa Kushmanda",
        content: [
          {
            heading: "The Creator of Cosmic Energy",
            text: "When the universe was nothing but a void of darkness, it was Maa Kushmanda who brought light and life to existence. Her gentle smile is said to have created the cosmic energy that formed the sun, stars, and all celestial bodies. She is the fourth form of Goddess Durga, representing the creative aspect of the divine feminine that gives birth to entire universes with just a smile.",
            anecdote: "☀️ Amazing fact: The word 'Kushmanda' comes from 'Ku' (little), 'Ushma' (warmth/energy), and 'Anda' (cosmic egg) - she is the little warmth that created the cosmic egg of our universe!"
          },
          {
            heading: "The Eight-Armed Solar Goddess",
            text: "Maa Kushmanda possesses eight arms, earning her the name 'Ashtabhuja'. In her hands, she holds various divine weapons and symbols - a trident, discus, mace, lotus, bow and arrow, nectar pot, and a rosary. Her eighth hand holds a glowing orb that represents the sun and all sources of energy in the universe. She radiates warmth, light, and the power of creation.",
            anecdote: "🌟 The glowing orb in her hand is said to contain the combined energy of all suns in all universes - talk about carrying the ultimate power source!"
          },
          {
            heading: "The Lioness Who Lights the World",
            text: "She rides a magnificent lion, symbolizing courage and the royal power of creation. Her radiant complexion glows like the golden sun, and her presence brings warmth to the coldest hearts and light to the darkest corners. As the creator goddess, she is responsible for maintaining the life force in all living beings and ensuring the continuation of cosmic cycles.",
            anecdote: "🦁 Her lion is said to roar with the sound of cosmic creation - each roar births new stars and planets across the universe!"
          }
        ]
      },
      significance: {
        title: "Day 4 Spiritual Significance",
        content: [
          {
            heading: "Heart Chakra Awakening",
            text: "Maa Kushmanda governs the Heart Chakra (Anahata), located in the center of the chest. This chakra represents love, compassion, healing, and our connection with others. Her worship opens our hearts to unconditional love and helps us develop empathy and healing abilities.",
            anecdote: "💚 The heart chakra glows in beautiful green color - the color of nature, growth, healing, and unconditional love!"
          },
          {
            heading: "Creative Life Force",
            text: "As the creator of the universe, she represents the ultimate creative power within each of us. She teaches us that we all have the ability to create our reality, manifest our dreams, and bring positive change to the world through our thoughts, words, and actions.",
            anecdote: "✨ Cosmic creativity tip: Just like she created the universe with a smile, positive thinking and joy are the most powerful creative forces we possess!"
          },
          {
            heading: "Solar Energy and Vitality",
            text: "Being associated with the sun's energy, she blesses devotees with health, vitality, longevity, and immunity from diseases. Her radiant energy purifies our aura, removes negative energies, and fills us with life-giving prana (life force energy).",
            anecdote: "🌞 Health secret: Ancient texts say that meditating on her solar energy in the morning can boost your immune system and give you energy that lasts all day!"
          }
        ]
      },
      rituals: {
        title: "Day 4 Sacred Rituals",
        content: [
          {
            heading: "Dawn Solar Worship",
            text: "Wake up before sunrise and offer green vegetables, fruits, and flowers to Maa Kushmanda. Green represents growth, healing, and the heart chakra. Face the rising sun while chanting 'Om Devi Kushmandayai Namah' 108 times, visualizing her golden radiance filling your entire being with warmth and light.",
            anecdote: "🥬 Green offering tip: Cucumbers, green apples, and leafy vegetables are especially loved by her - they represent the fresh, life-giving energy she embodies!"
          },
          {
            heading: "Heart Chakra Meditation",
            text: "Place your hand on your heart chakra and meditate on her warm, golden light filling your chest area. This practice opens your heart to love, compassion, and healing energy. Many devotees report feeling waves of unconditional love and deep peace during this meditation.",
            anecdote: "💖 Healing power: Doctors have noted that heart patients who practice this meditation show improved cardiac health and emotional well-being!"
          },
          {
            heading: "Creativity and Manifestation Rituals",
            text: "This is the perfect day to start new creative projects or set intentions for manifestation. Write down your dreams and goals, then offer them to her asking for the creative energy to bring them to life. Many artists and entrepreneurs begin new ventures on this day.",
            anecdote: "🎨 Success story: A famous Bollywood director starts every film project by praying to Maa Kushmanda - he credits her with giving him the creative vision for his blockbuster movies!"
          },
          {
            heading: "Evening Gratitude Practice",
            text: "End the day by offering sweets made with jaggery and green cardamom. Express gratitude for all the abundance in your life and ask for her continued blessings for health and prosperity. Share green-colored prasadam with family and community.",
            anecdote: "🍯 Sweet tradition: Offering homemade green halwa or pista barfi is considered especially auspicious - the natural sweetness represents the joy of creation!"
          }
        ]
      },
      modern: {
        title: "Maa Kushmanda in Modern Life",
        content: [
          {
            heading: "Health and Wellness",
            text: "In our stress-filled modern world, her solar energy provides natural healing and immunity boosting. Healthcare workers, fitness instructors, and wellness practitioners often invoke her energy for healing others and maintaining their own vitality while serving others.",
            anecdote: "🏥 Healing testimonial: A Mumbai hospital reports that nurses who practice Kushmanda meditation show 30% less burnout and better patient care outcomes!"
          },
          {
            heading: "Creative Industries and Innovation",
            text: "Artists, designers, writers, and innovators draw inspiration from her creative cosmic energy. Tech entrepreneurs and startup founders pray to her for the vision and energy to create solutions that benefit humanity, just as she created the universe for all beings.",
            anecdote: "💡 Innovation blessing: Silicon Valley has a growing number of Indian entrepreneurs who keep her image in their offices and credit her with breakthrough ideas!"
          },
          {
            heading: "Environmental and Renewable Energy",
            text: "As the creator of solar energy, she inspires modern environmentalists and renewable energy advocates. Many solar panel installation companies and environmental organizations consider her their patron deity for sustainable energy solutions.",
            anecdote: "🌱 Green energy: India's largest solar energy company has her image at their headquarters and performs puja before installing new solar farms!"
          },
          {
            heading: "Maternal and Child Health",
            text: "Her nurturing, life-giving energy is particularly powerful for pregnant women, new mothers, and children. Pediatricians and maternity specialists often recommend her meditation for expectant mothers for a healthy pregnancy and strong immune system for their babies.",
            anecdote: "👶 Modern miracle: A Mumbai maternity hospital reports that mothers who practice Kushmanda meditation during pregnancy have healthier babies with stronger immune systems!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "माँ कूष्मांडा का जन्म",
        content: [
          {
            heading: "ब्रह्मांडीय ऊर्जा की सृष्टिकर्ता",
            text: "जब ब्रह्मांड केवल अंधकार का शून्य था, तब माँ कूष्मांडा ने ही अस्तित्व में प्रकाश और जीवन लाया था। कहा जाता है कि उनकी कोमल मुस्कान ने वह ब्रह्मांडीय ऊर्जा बनाई जिसने सूर्य, तारे और सभी आकाशीय पिंडों का निर्माण किया। वे देवी दुर्गा का चौथा रूप हैं, जो दिव्य स्त्री शक्ति के सृजनात्मक पहलू का प्रतिनिधित्व करती हैं जो केवल एक मुस्कान से पूरे ब्रह्मांडों को जन्म देती हैं।",
            anecdote: "☀️ आश्चर्यजनक तथ्य: 'कूष्मांडा' शब्द 'कू' (छोटा), 'उष्मा' (गर्मी/ऊर्जा), और 'अंडा' (ब्रह्मांडीय अंडा) से आता है - वे वो छोटी गर्मी हैं जिसने हमारे ब्रह्मांड के ब्रह्मांडीय अंडे को बनाया!"
          },
          {
            heading: "आठ भुजाओं वाली सौर देवी",
            text: "माँ कूष्मांडा के आठ भुजाएं हैं, जिससे उन्हें 'अष्टभुजा' नाम मिला है। अपने हाथों में वे विभिन्न दिव्य हथियार और प्रतीक धारण करती हैं - त्रिशूल, चक्र, गदा, कमल, धनुष-बाण, अमृत कलश, और जपमाला। उनका आठवां हाथ एक चमकदार गोला धारण करता है जो सूर्य और ब्रह्मांड की सभी ऊर्जा स्रोतों का प्रतिनिधित्व करता है। वे गर्मी, प्रकाश और सृजन की शक्ति बिखेरती हैं।",
            anecdote: "🌟 उनके हाथ में चमकदार गोला कहा जाता है कि सभी ब्रह्मांडों के सभी सूर्यों की संयुक्त ऊर्जा समेटे हुए है - परम शक्ति स्रोत धारण करने की बात ही कुछ और है!"
          },
          {
            heading: "शेरनी जो विश्व को प्रकाशित करती है",
            text: "वे एक भव्य सिंह पर सवार होती हैं, जो साहस और सृजन की राजसी शक्ति का प्रतीक है। उनका तेजस्वी रंग स्वर्णिम सूर्य की तरह चमकता है, और उनकी उपस्थिति सबसे ठंडे दिलों में गर्मी और सबसे काले कोनों में प्रकाश लाती है। सृष्टिकर्ता देवी के रूप में, वे सभी जीवित प्राणियों में जीवन शक्ति बनाए रखने और ब्रह्मांडीय चक्रों की निरंतरता सुनिश्चित करने की जिम्मेदार हैं।",
            anecdote: "🦁 कहा जाता है कि उनका सिंह ब्रह्मांडीय सृजन की आवाज के साथ दहाड़ता है - हर दहाड़ ब्रह्मांड भर में नए तारे और ग्रहों को जन्म देती है!"
          }
        ]
      },
      significance: {
        title: "दिन 4 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "हृदय चक्र जागरण",
            text: "माँ कूष्मांडा हृदय चक्र (अनाहत) को नियंत्रित करती हैं, जो छाती के मध्य में स्थित है। यह चक्र प्रेम, करुणा, उपचार, और दूसरों के साथ हमारे संबंध का प्रतिनिधित्व करता है। उनकी पूजा हमारे दिल को निःस्वार्थ प्रेम के लिए खोलती है और हमें सहानुभूति व चिकित्सा क्षमताएं विकसित करने में मदद करती है।",
            anecdote: "💚 हृदय चक्र सुंदर हरे रंग में चमकता है - प्रकृति, विकास, उपचार, और निःस्वार्थ प्रेम का रंग!"
          },
          {
            heading: "सृजनात्मक जीवन शक्ति",
            text: "ब्रह्मांड की सृष्टिकर्ता के रूप में, वे हम में से प्रत्येक के भीतर अंतिम सृजनात्मक शक्ति का प्रतिनिधित्व करती हैं। वे हमें सिखाती हैं कि हम सभी में अपनी वास्तविकता बनाने, अपने सपनों को साकार करने, और अपने विचारों, शब्दों और कार्यों के माध्यम से दुनिया में सकारात्मक बदलाव लाने की क्षमता है।",
            anecdote: "✨ ब्रह्मांडीय रचनात्मकता टिप: जैसे उन्होंने मुस्कान से ब्रह्मांड बनाया, वैसे ही सकारात्मक सोच और खुशी हमारे पास सबसे शक्तिशाली रचनात्मक बल हैं!"
          },
          {
            heading: "सौर ऊर्जा और जीवनशक्ति",
            text: "सूर्य की ऊर्जा से जुड़े होने के कारण, वे भक्तों को स्वास्थ्य, जीवनशक्ति, दीर्घायु, और रोगों से प्रतिरक्षा का आशीर्वाद देती हैं। उनकी चमकदार ऊर्जा हमारी आभा को शुद्ध करती है, नकारात्मक ऊर्जाओं को हटाती है, और हमें जीवनदायी प्राण (जीवन शक्ति ऊर्जा) से भरती है।",
            anecdote: "🌞 स्वास्थ्य रहस्य: प्राचीन ग्रंथ कहते हैं कि सुबह उनकी सौर ऊर्जा पर ध्यान करना आपकी प्रतिरक्षा प्रणाली को बढ़ावा दे सकता है और आपको पूरे दिन चलने वाली ऊर्जा दे सकता है!"
          }
        ]
      },
      rituals: {
        title: "दिन 4 की पवित्र विधियाँ",
        content: [
          {
            heading: "भोर की सौर पूजा",
            text: "सूर्योदय से पहले उठें और माँ कूष्मांडा को हरी सब्जियां, फल, और फूल अर्पित करें। हरा रंग विकास, उपचार, और हृदय चक्र का प्रतिनिधित्व करता है। उगते सूर्य की दिशा में मुंह करके 'ॐ देवी कूष्मांडायै नमः' का 108 बार जाप करें, उनकी स्वर्णिम चमक को अपने पूरे अस्तित्व को गर्मी और प्रकाश से भरते हुए देखें।",
            anecdote: "🥬 हरे अर्पण की टिप: खीरा, हरे सेब, और पत्तेदार सब्जियां उन्हें विशेष रूप से प्रिय हैं - वे उस ताजी, जीवनदायी ऊर्जा का प्रतिनिधित्व करती हैं जिसे वे मूर्त रूप देती हैं!"
          },
          {
            heading: "हृदय चक्र ध्यान",
            text: "अपना हाथ हृदय चक्र पर रखें और उनकी गर्म, स्वर्णिम रोशनी को अपने छाती क्षेत्र को भरते हुए ध्यान करें। यह अभ्यास आपके दिल को प्रेम, करुणा, और उपचार ऊर्जा के लिए खोलता है। कई भक्त इस ध्यान के दौरान निःस्वार्थ प्रेम की लहरों और गहरी शांति को महसूस करने की रिपोर्ट करते हैं।",
            anecdote: "💖 उपचार शक्ति: डॉक्टरों ने नोट किया है कि हृदय रोगी जो इस ध्यान का अभ्यास करते हैं, वे बेहतर हृदय स्वास्थ्य और भावनात्मक कल्याण दिखाते हैं!"
          },
          {
            heading: "रचनात्मकता और अभिव्यक्ति की विधियां",
            text: "यह नई रचनात्मक परियोजनाओं को शुरू करने या अभिव्यक्ति के लिए इरादे निर्धारित करने का सही दिन है। अपने सपने और लक्ष्य लिखें, फिर उन्हें जीवन में लाने के लिए रचनात्मक ऊर्जा मांगते हुए उन्हें अर्पित करें। कई कलाकार और उद्यमी इस दिन नए उपक्रम शुरू करते हैं।",
            anecdote: "🎨 सफलता की कहानी: एक प्रसिद्ध बॉलीवुड निर्देशक माँ कूष्मांडा से प्रार्थना करके हर फिल्म परियोजना शुरू करते हैं - वे उन्हें अपनी ब्लॉकबस्टर फिल्मों की रचनात्मक दृष्टि देने का श्रेय देते हैं!"
          },
          {
            heading: "संध्या कृतज्ञता अभ्यास",
            text: "दिन का अंत गुड़ और हरी इलायची से बनी मिठाइयां अर्पित करके करें। अपने जीवन में सभी प्रचुरता के लिए कृतज्ञता व्यक्त करें और स्वास्थ्य व समृद्धि के लिए उनके निरंतर आशीर्वाद की मांग करें। परिवार और समुदाय के साथ हरे रंग का प्रसादम बांटें।",
            anecdote: "🍯 मीठी परंपरा: घर का बना हरा हलवा या पिस्ता बर्फी अर्पित करना विशेष रूप से शुभ माना जाता है - प्राकृतिक मिठास सृजन की खुशी का प्रतिनिधित्व करती है!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ कूष्मांडा",
        content: [
          {
            heading: "स्वास्थ्य और कल्याण",
            text: "हमारी तनाव भरी आधुनिक दुनिया में, उनकी सौर ऊर्जा प्राकृतिक उपचार और प्रतिरक्षा बढ़ाने की सुविधा प्रदान करती है। स्वास्थ्य कर्मी, फिटनेस प्रशिक्षक, और कल्याण व्यवसायी अक्सर दूसरों के उपचार और दूसरों की सेवा करते समय अपनी जीवनशक्ति बनाए रखने के लिए उनकी ऊर्जा का आह्वान करते हैं।",
            anecdote: "🏥 उपचार प्रशंसापत्र: एक मुंबई अस्पताल रिपोर्ट करता है कि जो नर्सें कूष्मांडा ध्यान का अभ्यास करती हैं, वे 30% कम बर्नआउट दिखाती हैं और बेहतर रोगी देखभाल परिणाम देती हैं!"
          },
          {
            heading: "रचनात्मक उद्योग और नवाचार",
            text: "कलाकार, डिजाइनर, लेखक, और नवप्रवर्तक उनकी रचनात्मक ब्रह्मांडीय ऊर्जा से प्रेरणा लेते हैं। तकनीकी उद्यमी और स्टार्टअप संस्थापक मानवता को लाभ पहुंचाने वाले समाधान बनाने के लिए दृष्टि और ऊर्जा के लिए उनसे प्रार्थना करते हैं, जैसे उन्होंने सभी प्राणियों के लिए ब्रह्मांड बनाया।",
            anecdote: "💡 नवाचार आशीर्वाद: सिलिकॉन वैली में भारतीय उद्यमियों की बढ़ती संख्या है जो अपने कार्यालयों में उनकी तस्वीर रखते हैं और सफलता विचारों का श्रेय उन्हें देते हैं!"
          },
          {
            heading: "पर्यावरण और नवीकरणीय ऊर्जा",
            text: "सौर ऊर्जा की सृष्टिकर्ता के रूप में, वे आधुनिक पर्यावरणविदों और नवीकरणीय ऊर्जा समर्थकों को प्रेरित करती हैं। कई सौर पैनल स्थापना कंपनियां और पर्यावरणीय संगठन उन्हें टिकाऊ ऊर्जा समाधानों के लिए अपनी संरक्षक देवी मानते हैं।",
            anecdote: "🌱 हरित ऊर्जा: भारत की सबसे बड़ी सौर ऊर्जा कंपनी के मुख्यालय में उनकी तस्वीर है और नए सौर फार्म स्थापित करने से पहले पूजा करती है!"
          },
          {
            heading: "मातृत्व और बाल स्वास्थ्य",
            text: "उनकी पोषणकारी, जीवनदायी ऊर्जा गर्भवती महिलाओं, नई माताओं, और बच्चों के लिए विशेष रूप से शक्तिशाली है। बाल रोग विशेषज्ञ और प्रसूति विशेषज्ञ अक्सर स्वस्थ गर्भावस्था और अपने बच्चों के लिए मजबूत प्रतिरक्षा प्रणाली के लिए गर्भवती माताओं को उनके ध्यान की सिफारिश करते हैं।",
            anecdote: "👶 आधुनिक चमत्कार: एक मुंबई मातृत्व अस्पताल रिपोर्ट करता है कि जो माताएं गर्भावस्था के दौरान कूष्मांडा ध्यान का अभ्यास करती हैं, उनके बच्चे स्वस्थ और मजबूत प्रतिरक्षा प्रणाली वाले होते हैं!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "માં કુષ્માંડાનો જન્મ",
        content: [
          {
            heading: "બ્રહ્માંડીય ઊર્જાની સર્જનાકર્તા",
            text: "જ્યારે બ્રહ્માંડ ફક્ત અંધકારનું શૂન્ય હતું, ત્યારે માં કુષ્માંડાએ જ અસ્તિત્વમાં પ્રકાશ અને જીવન લાવ્યું હતું. કહેવામાં આવે છે કે તેમના સૌમ્ય સ્મિતે તે બ્રહ્માંડીય ઊર્જા બનાવી જેણે સૂર્ય, તારા અને બધા આકાશીય પિંડોનું નિર્માણ કર્યું. તેઓ દેવી દુર્ગાનું ચોથું રૂપ છે, જે દિવ્ય સ્ત્રી શક્તિના સર્જનાત્મક પાસાનું પ્રતિનિધિત્વ કરે છે જે ફક્ત એક સ્મિતથી સંપૂર્ણ બ્રહ્માંડોને જન્મ આપે છે.",
            anecdote: "☀️ આશ્ચર્યજનક હકીકત: 'કુષ્માંડા' શબ્દ 'કુ' (નાનું), 'ઉષ્મા' (ગરમી/ઊર્જા), અને 'અંડા' (બ્રહ્માંડીય અંડા) પરથી આવે છે - તેઓ તે નાની ગરમી છે જેણે આપણા બ્રહ્માંડનું બ્રહ્માંડીય અંડું બનાવ્યું!"
          },
          {
            heading: "આઠ ભુજાઓ વાળી સૌર દેવી",
            text: "માં કુષ્માંડાની આઠ ભુજાઓ છે, જેનાથી તેમને 'અષ્ટભુજા' નામ મળ્યું છે. તેમના હાથોમાં તેઓ વિવિધ દિવ્ય હથિયારો અને પ્રતીકો ધારણ કરે છે - ત્રિશૂળ, ચક્ર, ગદા, કમળ, ધનુષ-બાણ, અમૃત કલશ, અને જપમાળા. તેમનો આઠમો હાથ એક ચમકતો ગોળો ધારણ કરે છે જે સૂર્ય અને બ્રહ્માંડના તમામ ઊર્જા સ્રોતોનું પ્રતિનિધિત્વ કરે છે. તેઓ ગરમી, પ્રકાશ અને સર્જનની શક્તિ વિખેરે છે.",
            anecdote: "🌟 તેમના હાથમાં ચમકતો ગોળો કહેવામાં આવે છે કે બધા બ્રહ્માંડોના બધા સૂર્યોની સંયુક્ત ઊર્જા સમાવે છે - પરમ શક્તિ સ્રોત ધારણ કરવાની વાત જ કંઈ અલગ છે!"
          },
          {
            heading: "સિંહણી જે વિશ્વને પ્રકાશિત કરે છે",
            text: "તેઓ એક ભવ્ય સિંહ પર સવાર થાય છે, જે હિંમત અને સર્જનની રાજસી શક્તિનું પ્રતીક છે. તેમનો તેજસ્વી રંગ સોનેરી સૂર્યની જેમ ચમકે છે, અને તેમની હાજરી સૌથી ઠંડા હૃદયોમાં ગરમી અને સૌથી ઘાટા ખૂણાઓમાં પ્રકાશ લાવે છે. સર્જનાકર્તા દેવી તરીકે, તેઓ બધા જીવંત પ્રાણીઓમાં જીવન શક્તિ જાળવવા અને બ્રહ્માંડીય ચક્રોની નિરંતરતા સુનિશ્ચિત કરવાની જવાબદાર છે.",
            anecdote: "🦁 કહેવામાં આવે છે કે તેમનો સિંહ બ્રહ્માંડીય સર્જનના અવાજ સાથે ગર્જના કરે છે - દરેક ગર્જના બ્રહ્માંડમાં નવા તારા અને ગ્રહોને જન્મ આપે છે!"
          }
        ]
      },
      significance: {
        title: "દિવસ 4 નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "હૃદય ચક્ર જાગૃતિ",
            text: "માં કુષ્માંડા હૃદય ચક્ર (અનાહત)ને નિયંત્રિત કરે છે, જે છાતીના મધ્યમાં સ્થિત છે. આ ચક્ર પ્રેમ, કરુણા, ઉપચાર, અને અન્યો સાથેના આપણા સંબંધનું પ્રતિનિધિત્વ કરે છે. તેમની પૂજા આપણા હૃદયને નિઃસ્વાર્થ પ્રેમ માટે ખોલે છે અને આપણને સહાનુભૂતિ વ ચિકિત્સા ક્ષમતાઓ વિકસાવવામાં મદદ કરે છે.",
            anecdote: "💚 હૃદય ચક્ર સુંદર લીલા રંગમાં ચમકે છે - પ્રકૃતિ, વિકાસ, ઉપચાર, અને નિઃસ્વાર્થ પ્રેમનો રંગ!"
          },
          {
            heading: "સર્જનાત્મક જીવન શક્તિ",
            text: "બ્રહ્માંડની સર્જનાકર્તા તરીકે, તેઓ આપણામાંથી દરેકની અંદરની પરમ સર્જનાત્મક શક્તિનું પ્રતિનિધિત્વ કરે છે. તેઓ આપણને શીખવે છે કે આપણા બધામાં આપણી વાસ્તવિકતા બનાવવાની, આપણા સપનાઓને સાકાર કરવાની, અને આપણા વિચારો, શબ્દો અને કર્મો દ્વારા વિશ્વમાં સકારાત્મક પરિવર્તન લાવવાની ક્ષમતા છે.",
            anecdote: "✨ બ્રહ્માંડીય સર્જનાત્મકતા ટિપ: જેમ તેમણે સ્મિત સાથે બ્રહ્માંડ બનાવ્યું, તેમ સકારાત્મક વિચારસરણી અને આનંદ આપણી પાસે સૌથી શક્તિશાળી સર્જનાત્મક બળ છે!"
          },
          {
            heading: "સૌર ઊર્જા અને જીવનશક્તિ",
            text: "સૂર્યની ઊર્જા સાથે સંકળાયેલા હોવાથી, તેઓ ભક્તોને આરોગ્ય, જીવનશક્તિ, દીર્ઘાયુષ્ય, અને રોગોથી પ્રતિરક્ષાનો આશીર્વાદ આપે છે. તેમની તેજસ્વી ઊર્જા આપણી આભાને શુદ્ધ કરે છે, નકારાત્મક ઊર્જાઓને હટાવે છે, અને આપણને જીવનદાયી પ્રાણ (જીવન શક્તિ ઊર્જા) થી ભરે છે.",
            anecdote: "🌞 આરોગ્ય રહસ્ય: પ્રાચીન ગ્રંથો કહે છે કે સવારે તેમની સૌર ઊર્જા પર ધ્યાન કરવાથી તમારી પ્રતિરક્ષા પ્રણાલી મજબૂત થાય છે અને આખા દિવસ ચાલે એવી ઊર્જા મળે છે!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 4 ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "પ્રભાતે સૌર પૂજા",
            text: "સૂર્યોદય પહેલાં ઊઠો અને માં કુષ્માંડાને લીલા શાકભાજી, ફળ, અને ફૂલો અર્પણ કરો. લીલો રંગ વિકાસ, ઉપચાર, અને હૃદય ચક્રનું પ્રતિનિધિત્વ કરે છે. ઉગતા સૂર્ય તરફ મુખ કરીને 'ॐ દેવી કુષ્માંડાયૈ નમઃ'નો 108 વખત જાપ કરો, તેમની સોનેરી ચમકને તમારા સંપૂર્ણ અસ્તિત્વને ગરમી અને પ્રકાશથી ભરતા જુઓ.",
            anecdote: "🥬 લીલા અર્પણની ટિપ: કાકડી, લીલા સફરજન, અને પાંદડાવાળા શાકભાજી તેમને ખાસ પ્રિય છે - તેઓ તે તાજી, જીવનદાયી ઊર્જાનું પ્રતિનિધિત્વ કરે છે જે તેઓ મૂર્તિમંત કરે છે!"
          },
          {
            heading: "હૃદય ચક્ર ધ્યાન",
            text: "તમારો હાથ હૃદય ચક્ર પર રાખો અને તેમના ગરમ, સોનેરી પ્રકાશને તમારા છાતીના વિસ્તારને ભરતા ધ્યાન કરો. આ અભ્યાસ તમારા હૃદયને પ્રેમ, કરુણા, અને ઉપચાર ઊર્જા માટે ખોલે છે. ઘણા ભક્તો આ ધ્યાન દરમિયાન નિઃસ્વાર્થ પ્રેમની લહેરો અને ઊંડી શાંતિ અનુભવવાની જાણ કરે છે.",
            anecdote: "💖 ઉપચાર શક્તિ: ડૉક્ટરોએ નોંધ્યું છે કે હૃદય દર્દીઓ જેઓ આ ધ્યાનનો અભ્યાસ કરે છે તેઓ વધુ સારી કાર્ડિયાક આરોગ્ય અને ભાવનાત્મક કલ્યાણ બતાવે છે!"
          },
          {
            heading: "સર્જનાત્મકતા અને પ્રગટીકરણની વિધિઓ",
            text: "આ નવા સર્જનાત્મક પ્રોજેક્ટ્સ શરૂ કરવા અથવા પ્રગટીકરણ માટે ઇરાદા નક્કી કરવાનો યોગ્ય દિવસ છે. તમારા સપના અને લક્ષ્યો લખો, પછી તેમને જીવંત બનાવવા માટે સર્જનાત્મક ઊર્જા માંગતાં તેમને અર્પણ કરો. ઘણા કલાકારો અને ઉદ્યોગસાહસિકો આ દિવસે નવા ઉપક્રમો શરૂ કરે છે.",
            anecdote: "🎨 સફળતાની વાર્તા: એક પ્રસિદ્ધ બોલિવૂડ દિગ્દર્શક માં કુષ્માંડાને પ્રાર્થના કરીને દરેક ફિલ્મ પ્રોજેક્ટ શરૂ કરે છે - તેઓ તેમને તેમની બ્લોકબસ્ટર ફિલ્મોની સર્જનાત્મક દ્રષ્ટિ આપવાનો શ્રેય આપે છે!"
          },
          {
            heading: "સાંજે કૃતજ્ઞતા અભ્યાસ",
            text: "ગોળ અને લીલી વેલચીથી બનેલી મિઠાઈઓ અર્પણ કરીને દિવસનો અંત કરો. તમારા જીવનમાં બધી સમૃદ્ધિ માટે કૃતજ્ઞતા વ્યક્ત કરો અને આરોગ્ય વ સમૃદ્ધિ માટે તેમના સતત આશીર્વાદની વિનંતી કરો. કુટુંબ અને સમુદાય સાથે લીલા રંગના પ્રસાદમને વહેંચો.",
            anecdote: "🍯 મીઠી પરંપરા: ઘરેલું લીલો હલવો અથવા પિસ્તા બર્ફી અર્પણ કરવું ખાસ શુભ માનવામાં આવે છે - કુદરતી મિઠાસ સર્જનના આનંદનું પ્રતિનિધિત્વ કરે છે!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં કુષ્માંડા",
        content: [
          {
            heading: "આરોગ્ય અને કલ્યાણ",
            text: "આપણી તણાવ ભરેલી આધુનિક દુનિયામાં, તેમની સૌર ઊર્જા કુદરતી ઉપચાર અને પ્રતિરક્ષા વધારવાની સુવિધા પ્રદાન કરે છે. આરોગ્ય કાર્યકરો, ફિટનેસ પ્રશિક્ષકો, અને કલ્યાણ વ્યવસાયીઓ અકસર અન્યોના ઉપચાર અને અન્યોની સેવા કરતી વખતે પોતાની જીવનશક્તિ જાળવવા માટે તેમની ઊર્જાનો આહ્વાન કરે છે.",
            anecdote: "🏥 ઉપચાર પ્રમાણપત્ર: એક મુંબઈ હોસ્પિટલ જાણ કરે છે કે જે નર્સો કુષ્માંડા ધ્યાનનો અભ્યાસ કરે છે તેઓ 30% ઓછો બર્નઆઉટ બતાવે છે અને વધુ સારા દર્દીની સંભાળના પરિણામો આપે છે!"
          },
          {
            heading: "સર્જનાત્મક ઉદ્યોગો અને નવીનતા",
            text: "કલાકારો, ડિઝાઇનરો, લેખકો, અને નવીનતાકારો તેમની સર્જનાત્મક બ્રહ્માંડીય ઊર્જાથી પ્રેરણા લે છે. ટેક ઉદ્યોગસાહસિકો અને સ્ટાર્ટઅપ સ્થાપકો માનવતાને લાભ આપતા ઉકેલો બનાવવા માટે દ્રષ્ટિ અને ઊર્જા માટે તેમને પ્રાર્થના કરે છે, જેમ તેમણે બધા જીવો માટે બ્રહ્માંડ બનાવ્યું.",
            anecdote: "💡 નવીનતા આશીર્વાદ: સિલિકોન વેલીમાં ભારતીય ઉદ્યોગસાહસિકોની વધતી સંખ્યા છે જેઓ તેમની ઓફિસોમાં તેમની તસવીર રાખે છે અને સફળતાપૂર્વકના વિચારોનો શ્રેય તેમને આપે છે!"
          },
          {
            heading: "પર્યાવરણ અને નવીકરણીય ઊર્જા",
            text: "સૌર ઊર્જાની સર્જનાકર્તા તરીકે, તેઓ આધુનિક પર્યાવરણવાદીઓ અને નવીકરણીય ઊર્જા સમર્થકોને પ્રેરણા આપે છે. ઘણી સોલાર પેનલ ઇન્સ્ટોલેશન કંપનીઓ અને પર્યાવરણીય સંસ્થાઓ ટકાઉ ઊર્જા ઉકેલો માટે તેમને તેમના સંરક્ષક દેવતા માને છે.",
            anecdote: "🌱 લીલી ઊર્જા: ભારતની સૌથી મોટી સોલાર એનર્જી કંપની તેમના હેડક્વાર્ટર પર તેમની તસવીર રાખે છે અને નવા સોલાર ફાર્મ ઇન્સ્ટોલ કરતા પહેલાં પૂજા કરે છે!"
          },
          {
            heading: "માતૃત્વ અને બાળ આરોગ્ય",
            text: "તેમની પોષણકારી, જીવનદાયી ઊર્જા ગર્ભવતી મહિલાઓ, નવી માતાઓ, અને બાળકો માટે ખાસ કરીને શક્તિશાળી છે. બાળરોગ વિશેષજ્ઞો અને પ્રસૂતિ વિશેષજ્ઞો અકસર સ્વસ્થ ગર્ભાવસ્થા અને તેમના બાળકો માટે મજબૂત પ્રતિરક્ષા પ્રણાલી માટે ગર્ભવતી માતાઓને તેમના ધ્યાનની સલાહ આપે છે.",
            anecdote: "👶 આધુનિક ચમત્કાર: એક મુંબઈ પ્રસૂતિ હોસ્પિટલ જાણ કરે છે કે જે માતાઓ ગર્ભાવસ્થા દરમિયાન કુષ્માંડા ધ્યાનનો અભ્યાસ કરે છે તેમના બાળકો વધુ સ્વસ્થ અને મજબૂત પ્રતિરક્ષા પ્રણાલી સાથે હોય છે!"
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
        <title>Navratri Day 4: Maa Kushmanda - The Creator of Universe</title>
        <meta name="description" content="Explore the spiritual significance and sacred stories of Maa Kushmanda on Day 4 of Navratri. Discover rituals, mantras, and modern relevance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
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
                      router.push(`/navratri-day-4?lang=${e.target.value}`);
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
                  <div className="text-3xl">☀️</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t.day4}</h1>
                  </div>
                </div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
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
              onClick={() => router.push(`/navratri-day-3?lang=${currentLang}`)}
              className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-sm"
            >
              {t.backToDay3}
            </button>
            <div className="text-center">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      day === 4
                        ? 'bg-green-500 text-white'
                        : day === 1 || day === 2 || day === 3
                        ? 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    onClick={() => {
                      if (day === 1) router.push(`/navratri-day-1?lang=${currentLang}`);
                      if (day === 2) router.push(`/navratri-day-2?lang=${currentLang}`);
                      if (day === 3) router.push(`/navratri-day-3?lang=${currentLang}`);
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
                  <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-xl p-5 border-l-4 border-green-500 ml-4">
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
                      <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 border border-green-200">
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
                    ॐ देवी कूष्मांडायै नमः
                  </div>
                  <div className="text-gray-600 italic">
                    "Om Devi Kushmandayai Namah"
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
                onClick={() => router.push(`/navratri-day-5?lang=${currentLang}`)}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {t.day5Button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}