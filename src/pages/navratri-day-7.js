import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NavratriDay7() {
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
      day7: "Day 7",
      goddess: "Maa Kalaratri",
      meaning: "The Night of Destruction & Transformation",
      todaysColor: "Today's Color",
      orange: "Orange",
      tabs: {
        story: "📖 Sacred Story",
        significance: "🕉️ Spiritual Meaning",
        rituals: "🪔 Rituals & Prayers",
        modern: "🌟 Modern Relevance"
      },
      blessing: "May Maa Kalaratri Bless You",
      blessingDesc: "With the power to destroy all negativity, the courage to face your darkest fears, and the wisdom to emerge transformed and purified from life's challenges.",
      todaysMantra: "Today's Mantra",
      chantTimes: "Chant this 108 times for maximum blessings",
      continueJourney: "Continue your spiritual journey",
      day8Coming: "Day 8: Maa Mahagauri 🪶",
      backToDay6: "← Day 6: Maa Katyayani"
    },
    hi: {
      backToNavratri: "नवरात्रि पर वापस",
      day7: "दिन 7",
      goddess: "माँ कालरात्रि",
      meaning: "विनाश और परिवर्तन की रात्रि",
      todaysColor: "आज का रंग",
      orange: "नारंगी",
      tabs: {
        story: "📖 पवित्र कथा",
        significance: "🕉️ आध्यात्मिक अर्थ",
        rituals: "🪔 विधियाँ व प्रार्थनाएं",
        modern: "🌟 आधुनिक प्रासंगिकता"
      },
      blessing: "माँ कालरात्रि आपको आशीर्वाद दें",
      blessingDesc: "सभी नकारात्मकता को नष्ट करने की शक्ति, अपने सबसे गहरे डर का सामना करने का साहस, और जीवन की चुनौतियों से परिवर्तित और शुद्ध होकर निकलने की बुद्धि के साथ।",
      todaysMantra: "आज का मंत्र",
      chantTimes: "अधिकतम आशीर्वाद के लिए इसे 108 बार जाप करें",
      continueJourney: "अपनी आध्यात्मिक यात्रा जारी रखें",
      day8Coming: "दिन 8: माँ महागौरी 🪶",
      backToDay6: "← दिन 6: माँ कात्यायनी"
    },
    gu: {
      backToNavratri: "નવરાત્રિ પર પાછા",
      day7: "દિવસ 7",
      goddess: "માં કાલરાત્રિ",
      meaning: "વિનાશ અને પરિવર્તનની રાત્રિ",
      todaysColor: "આજનો રંગ",
      orange: "નારંગી",
      tabs: {
        story: "📖 પવિત્ર કથા",
        significance: "🕉️ આધ્યાત્મિક અર્થ",
        rituals: "🪔 વિધિઓ અને પ્રાર્થનાઓ",
        modern: "🌟 આધુનિક સંદર્ભ"
      },
      blessing: "માં કાલરાત્રિ તમને આશીર્વાદ આપે",
      blessingDesc: "બધી નકારાત્મકતાને નષ્ટ કરવાની શક્તિ, તમારા સૌથી ઊંડા ડરનો સામનો કરવાની હિંમત, અને જીવનના પડકારોથી પરિવર્તિત અને શુદ્ધ થઈને બહાર નીકળવાની શાણપણ સાથે.",
      todaysMantra: "આજનો મંત્ર",
      chantTimes: "મહત્તમ આશીર્વાદ માટે આ 108 વખત જાપ કરો",
      continueJourney: "તમારી આધ્યાત્મિક યાત્રા ચાલુ રાખો",
      day8Coming: "દિવસ 8: માં મહાગૌરી 🪶",
      backToDay6: "← દિવસ 6: માં કાત્યાયની"
    }
  };

  const content = {
    en: {
      story: {
        title: "The Terrifying Night of Divine Destruction",
        content: [
          {
            heading: "The Most Fearsome Form",
            text: "Maa Kalaratri is the seventh and most terrifying form of Goddess Durga, appearing as the dark night of destruction that consumes all evil. Her appearance is deliberately frightening - dark complexion, disheveled hair flowing like flames, four arms carrying a sword and lightning bolt, riding a donkey, with a necklace of severed heads. Yet despite her terrifying appearance, she is actually 'Shubhankari' - the auspicious one who brings ultimate good by destroying what needs to be destroyed.",
            anecdote: "🌙 Cosmic paradox: She's called 'Kala-ratri' (night of time/death) but she's actually the destroyer of 'Kala' (time/death) itself - so terrifying that even death is afraid of her! She's like the ultimate cosmic horror movie that actually has a happy ending!"
          },
          {
            heading: "The Night That Devours Demons",
            text: "According to legend, when the demons Shumbha and Nishumbha sent their most terrible army led by the demon Raktabeeja (whose every drop of blood would create a new demon), the situation seemed hopeless. That's when Kalaratri manifested - she drank all of Raktabeeja's blood before it could hit the ground, preventing new demons from being born. She single-handedly destroyed entire demon armies in one night, earning her title as the 'Night of Destruction.'",
            anecdote: "🩸 Divine vampire: She's the original vampire story but with a twist - instead of turning people into vampires, she drinks demon blood to save the world! Talk about being a ethical vampire with a noble cause!"
          },
          {
            heading: "The Protector in Disguise",
            text: "Her terrifying form serves a deeper purpose - she appears frightening only to evil forces, demons, and negative energies. To her devotees, she is the ultimate protector who removes fear itself. Her scary appearance is like a divine 'Do Not Disturb' sign for evil forces - they take one look at her and run away in terror, leaving her devotees in complete peace and safety.",
            anecdote: "😈 Reverse psychology: She's like having the scariest bodyguard in the universe - bullies and negative forces don't even think about messing with you because they're too busy running away from your protector!"
          }
        ]
      },
      significance: {
        title: "Day 7 Spiritual Significance",
        content: [
          {
            heading: "Crown Chakra and Beyond",
            text: "Maa Kalaratri governs the Sahasrara (Crown Chakra) and transcends even that, connecting us to the void beyond all chakras. This represents the dissolution of ego, the death of false identities, and the ultimate spiritual transformation. Her energy helps us release everything that is not our true Self - fears, attachments, limiting beliefs, and negative patterns that have outlived their purpose.",
            anecdote: "👑 Cosmic delete button: Worshipping her is like running a deep spiritual antivirus program that deletes not just surface-level problems but even corrupted files in your soul's operating system that you didn't even know existed!"
          },
          {
            heading: "Sacred Destruction",
            text: "She embodies the principle that sometimes destruction is necessary for creation, that sometimes things must completely end for new beginnings to emerge. Her energy teaches us that spiritual growth often requires the 'death' of our old selves - our outdated beliefs, toxic relationships, and self-limiting patterns. She is the divine surgeon who cuts away spiritual cancer with precision.",
            anecdote: "🦋 Cosmic caterpillar soup: Just like a caterpillar must completely dissolve into soup before becoming a butterfly, she helps dissolve our old self completely so our true divine nature can emerge - messy but absolutely necessary!"
          },
          {
            heading: "Fearlessness Through Fear",
            text: "Paradoxically, by appearing as our greatest fear, she helps us overcome all fears. When you can face the most terrifying aspect of the divine and find love and protection there, nothing else in the world can scare you. She teaches that our deepest fears often guard our greatest treasures - the courage to face her is the key to absolute fearlessness.",
            anecdote: "🎃 Divine horror therapy: She's like cosmic exposure therapy - once you've faced the ultimate scary movie monster and realized she's actually your loving protector, regular life problems seem like cartoons!"
          }
        ]
      },
      rituals: {
        title: "Day 7 Sacred Rituals",
        content: [
          {
            heading: "Midnight Transformation Prayers",
            text: "Begin with offering dark flowers like purple lotus, black roses, or dark blue flowers to Maa Kalaratri, as these represent the depths she helps us explore. Light a mustard oil lamp (traditional for fierce forms) and chant 'Om Devi Kalaratryai Namah' 108 times at night, preferably after 11 PM when her energy is strongest. Visualize all your fears, negativity, and obstacles being consumed by her divine fire.",
            anecdote: "🌚 Midnight divine appointment: Many devotees set alarms for 11:59 PM to pray during the transition to her time - they call it their 'cosmic midnight meeting' with the divine destroyer of problems!"
          },
          {
            heading: "Fear-Facing Ceremony",
            text: "This is the most powerful day to confront your deepest fears and limiting beliefs. Write down everything that scares you - death, failure, rejection, loss - on black paper and burn it while chanting her mantra. As the smoke rises, visualize Kalaratri consuming all these fears and replacing them with her fearless energy. This ritual literally burns away fear patterns from your subconscious.",
            anecdote: "🔥 Fear barbecue party: Devotees often gather for group fear-burning ceremonies on this night - they call it a 'fear barbecue' where everyone roasts their anxieties and emerges feeling invincible!"
          },
          {
            heading: "Shadow Work Meditation",
            text: "Sit in complete darkness (or with minimal lighting) and invite Kalaratri to show you the parts of yourself you've been avoiding - your anger, jealousy, shame, or pain. Instead of running from these 'shadow' aspects, greet them with curiosity and compassion. Ask her to transform these energies into wisdom and strength. This is advanced spiritual work that leads to profound healing.",
            anecdote: "🌑 Divine therapy session: Psychologists who practice Hindu spirituality often recommend this meditation - they say it's like having the universe's best therapist help you clean out your emotional basement!"
          },
          {
            heading: "Protection and Purification Ritual",
            text: "Create a protective energy field by placing her image or symbol at your home's entrance. Burn camphor (which represents ego dissolution) and offer black sesame seeds (for removing negative karma). Pray for protection from visible and invisible enemies, negative energies, and psychic attacks. Her fierce energy creates an impenetrable shield around you and your loved ones.",
            anecdote: "🛡️ Divine security system upgrade: Families report that after installing her protection ritual, even aggressive neighbors become mysteriously polite, scammer calls stop, and negative people avoid their homes - she's like cosmic pest control!"
          }
        ]
      },
      modern: {
        title: "Maa Kalaratri in Modern Life",
        content: [
          {
            heading: "Trauma Healing and PTSD Recovery",
            text: "Her energy is incredibly powerful for those healing from trauma, abuse, or PTSD. She helps survivors face their darkest memories with courage, process suppressed emotions, and emerge stronger. Many trauma therapists working with Hindu clients incorporate her symbolism - she represents the fierce healing power that can digest even the worst experiences and transform them into wisdom and compassion.",
            anecdote: "🏥 Divine trauma surgeon: A PTSD therapist reports that clients who connect with Kalaratri's energy show remarkable breakthroughs - they describe feeling like they have a cosmic ally who's 'scarier than their trauma' and can protect them through the healing process!"
          },
          {
            heading: "Addiction Recovery and Breaking Patterns",
            text: "Her destructive power is perfect for breaking addictive patterns, compulsive behaviors, and self-destructive cycles. She provides the fierce energy needed to say 'NO' to substances, toxic relationships, or harmful habits. Recovery programs in India often invoke her energy for the strength to face withdrawal, resist temptation, and destroy the psychological roots of addiction.",
            anecdote: "🚭 Cosmic intervention: A rehabilitation center keeps her image in their detox ward - patients report that looking at her fierce face gives them the courage to face their cravings, saying 'if she can destroy demons, I can destroy my addiction!'"
          },
          {
            heading: "End-of-Life Care and Grief Processing",
            text: "Hospice workers and those dealing with death and dying often draw on her energy. As the goddess who conquers death itself, she helps people face mortality without fear and find peace in life's transitions. Her energy supports both the dying process and helps survivors process grief by transforming loss into spiritual understanding.",
            anecdote: "🕊️ Divine hospice care: Nurses report that families who pray to Kalaratri during end-of-life care experience more peaceful transitions - she seems to help both the dying and the grieving release their fear and find acceptance!"
          },
          {
            heading: "Spiritual Transformation and Ego Death",
            text: "Advanced spiritual practitioners work with her energy for profound transformation - what mystics call 'ego death.' She helps dissolve false identities, spiritual pride, and attachments that keep us from experiencing our true nature. Her worship is particularly popular among those going through major life transitions, spiritual crises, or dark nights of the soul.",
            anecdote: "🧘‍♀️ Divine spiritual demolition: A meditation teacher describes Kalaratri worship as 'spiritual renovation' - she tears down the ego's shabby constructions so your soul can build a palace of authentic Self-realization in its place!"
          }
        ]
      }
    },
    hi: {
      story: {
        title: "दिव्य विनाश की भयानक रात्रि",
        content: [
          {
            heading: "सबसे भयावह रूप",
            text: "माँ कालरात्रि देवी दुर्गा का सातवां और सबसे भयानक रूप हैं, जो विनाश की उस काली रात के रूप में प्रकट होती हैं जो सभी बुराई को भस्म कर देती है। उनका रूप जानबूझकर डरावना है - काला रंग, आग की लपटों की तरह बिखरे बाल, चार हाथ जिनमें तलवार और वज्र हैं, गधे पर सवार, कटे हुए सिरों की माला पहने। फिर भी उनके भयानक रूप के बावजूद, वे वास्तव में 'शुभंकरी' हैं - कल्याणकारी जो जो नष्ट होना चाहिए उसे नष्ट करके परम कल्याण लाती हैं।",
            anecdote: "🌙 ब्रह्मांडीय विरोधाभास: उन्हें 'काल-रात्रि' (समय/मृत्यु की रात) कहा जाता है लेकिन वे वास्तव में 'काल' (समय/मृत्यु) की ही संहारक हैं - इतनी भयानक कि खुद मृत्यु भी उनसे डरती है! वे परम ब्रह्मांडीय हॉरर मूवी की तरह हैं जिसका अंत खुशी से होता है!"
          },
          {
            heading: "राक्षसों को निगलने वाली रात्रि",
            text: "पुराणों के अनुसार, जब राक्षस शुम्भ-निशुम्भ ने अपनी सबसे भयानक सेना भेजी जिसका नेतृत्व रक्तबीज राक्षस कर रहा था (जिसके खून की हर बूंद से नया राक्षस पैदा हो जाता था), तो स्थिति निराशाजनक लग रही थी। तभी कालरात्रि प्रकट हुईं - उन्होंने रक्तबीज का सारा खून जमीन पर गिरने से पहले ही पी लिया, जिससे नए राक्षसों का जन्म रुक गया। उन्होंने एक ही रात में पूरी राक्षस सेना का संहार कर दिया, जिससे उन्हें 'विनाश की रात्रि' की उपाधि मिली।",
            anecdote: "🩸 दिव्य वैम्पायर: वे मूल वैम्पायर कहानी हैं लेकिन एक मोड़ के साथ - लोगों को वैम्पायर बनाने के बजाय, वे दुनिया को बचाने के लिए राक्षसों का खून पीती हैं! नेक उद्देश्य वाली नैतिक वैम्पायर होने की बात ही कुछ और है!"
          },
          {
            heading: "वेश में रक्षक",
            text: "उनका भयावह रूप एक गहरे उद्देश्य की पूर्ति करता है - वे केवल बुरी शक्तियों, राक्षसों और नकारात्मक ऊर्जाओं के लिए डरावनी लगती हैं। अपने भक्तों के लिए, वे परम रक्षक हैं जो डर को ही मिटा देती हैं। उनका डरावना रूप बुरी शक्तियों के लिए दिव्य 'परेशान न करें' का संकेत है - वे उन्हें एक बार देखती हैं और वे दहशत में भाग जाती हैं, अपने भक्तों को पूर्ण शांति और सुरक्षा में छोड़कर।",
            anecdote: "😈 उल्टी मनोविज्ञान: वे ब्रह्मांड में सबसे डरावना अंगरक्षक रखने जैसा है - बुल्लियां और नकारात्मक शक्तियां आपसे छेड़छाड़ करने के बारे में सोचती भी नहीं क्योंकि वे आपके रक्षक से भागने में व्यस्त रहती हैं!"
          }
        ]
      },
      significance: {
        title: "दिन 7 का आध्यात्मिक महत्व",
        content: [
          {
            heading: "सहस्रार चक्र और उससे परे",
            text: "माँ कालरात्रि सहस्रार (मुकुट चक्र) को नियंत्रित करती हैं और उससे भी आगे जाकर हमें सभी चक्रों से परे के शून्य से जोड़ती हैं। यह अहंकार के विघटन, झूठी पहचानों की मृत्यु और परम आध्यात्मिक रूपांतरण का प्रतिनिधित्व करता है। उनकी ऊर्जा हमें वह सब कुछ छोड़ने में मदद करती है जो हमारा सच्चा स्व नहीं है - डर, आसक्तियां, सीमित विश्वास और नकारात्मक पैटर्न जो अपना उद्देश्य पूरा कर चुके हैं।",
            anecdote: "👑 ब्रह्मांडीय डिलीट बटन: उनकी पूजा एक गहरे आध्यात्मिक एंटीवायरस प्रोग्राम चलाने जैसा है जो न केवल सतही समस्याओं को बल्कि आपकी आत्मा के ऑपरेटिंग सिस्टम में उन दूषित फाइलों को भी डिलीट करता है जिनके बारे में आप जानते भी नहीं थे!"
          },
          {
            heading: "पवित्र विनाश",
            text: "वे इस सिद्धांत की मूर्ति हैं कि कभी-कभी सृजन के लिए विनाश आवश्यक होता है, कि कभी-कभी नई शुरुआत के लिए चीजों का पूरी तरह अंत होना जरूरी होता है। उनकी ऊर्जा हमें सिखाती है कि आध्यात्मिक विकास के लिए अक्सर हमारे पुराने स्व की 'मृत्यु' की आवश्यकता होती है - हमारी पुरानी मान्यताएं, विषाक्त रिश्ते और आत्म-सीमित करने वाले पैटर्न। वे दिव्य सर्जन हैं जो सटीकता से आध्यात्मिक कैंसर को काट देती हैं।",
            anecdote: "🦋 ब्रह्मांडीय कैटरपिलर सूप: जैसे एक कैटरपिलर को तितली बनने से पहले पूरी तरह सूप में घुलना पड़ता है, वे हमारे पुराने स्व को पूरी तरह घोलने में मदद करती हैं ताकि हमारी सच्ची दिव्य प्रकृति उभर सके - गंदा लेकिन बिल्कुल आवश्यक!"
          },
          {
            heading: "डर के माध्यम से निर्भयता",
            text: "विरोधाभासी रूप से, हमारे सबसे बड़े डर के रूप में प्रकट होकर, वे हमें सभी डरों पर विजय पाने में मदद करती हैं। जब आप दिव्य के सबसे भयावह पहलू का सामना कर सकते हैं और वहां प्रेम और सुरक्षा पा सकते हैं, तो दुनिया में कुछ भी आपको डरा नहीं सकता। वे सिखाती हैं कि हमारे सबसे गहरे डर अक्सर हमारे सबसे बड़े खजाने की रक्षा करते हैं - उनका सामना करने का साहस परम निर्भयता की चाबी है।",
            anecdote: "🎃 दिव्य हॉरर थेरेपी: वे ब्रह्मांडीय एक्सपोजर थेरेपी जैसी हैं - एक बार जब आप परम डरावने फिल्म के राक्षस का सामना कर लेते हैं और पता चलता है कि वे वास्तव में आपकी प्रेमी रक्षक हैं, तो नियमित जीवन की समस्याएं कार्टून जैसी लगती हैं!"
          }
        ]
      },
      rituals: {
        title: "दिन 7 की पवित्र विधियाँ",
        content: [
          {
            heading: "मध्यरात्रि रूपांतरण प्रार्थनाएं",
            text: "माँ कालरात्रि को गहरे रंग के फूल जैसे बैंगनी कमल, काले गुलाब या गहरे नीले फूल अर्पित करके शुरुआत करें, क्योंकि ये उस गहराई का प्रतिनिधित्व करते हैं जिसकी खोज में वे हमारी मदद करती हैं। सरसों का तेल का दीपक जलाएं (भयंकर रूपों के लिए पारंपरिक) और रात में, विशेषकर रात 11 बजे के बाद जब उनकी ऊर्जा सबसे मजबूत होती है, 'ॐ देवी कालरात्र्यै नमः' का 108 बार जाप करें। अपने सभी डर, नकारात्मकता और बाधाओं को उनकी दिव्य अग्नि द्वारा भस्म होते देखें।",
            anecdote: "🌚 मध्यरात्रि दिव्य मुलाकात: कई भक्त उनके समय के दौरान प्रार्थना करने के लिए रात 11:59 बजे का अलार्म सेट करते हैं - वे इसे समस्याओं की दिव्य संहारक के साथ अपनी 'ब्रह्मांडीय मध्यरात्रि मीटिंग' कहते हैं!"
          },
          {
            heading: "डर-सामना समारोह",
            text: "यह आपके सबसे गहरे डर और सीमित विश्वासों का सामना करने का सबसे शक्तिशाली दिन है। जो कुछ भी आपको डराता है - मृत्यु, विफलता, अस्वीकृति, हानि - उसे काले कागज पर लिखें और उनके मंत्र का जाप करते हुए जलाएं। जैसे ही धुआं उठता है, कालरात्रि को इन सभी डरों को भस्म करते और उन्हें अपनी निर्भीक ऊर्जा से बदलते देखें। यह अनुष्ठान आपके अवचेतन से डर के पैटर्न को सचमुच जला देता है।",
            anecdote: "🔥 डर बारबेक्यू पार्टी: भक्त अक्सर इस रात सामूहिक डर-जलाने के समारोह के लिए इकट्ठा होते हैं - वे इसे 'डर बारबेक्यू' कहते हैं जहां सभी अपनी चिंताओं को भूनते हैं और अजेय महसूस करते हुए निकलते हैं!"
          },
          {
            heading: "छाया कार्य ध्यान",
            text: "पूर्ण अंधकार में (या न्यूनतम प्रकाश के साथ) बैठें और कालरात्रि को आमंत्रित करें कि वे आपको अपने उन हिस्सों को दिखाएं जिनसे आप बचते रहे हैं - आपका गुस्सा, ईर्ष्या, शर्म या दर्द। इन 'छाया' पहलुओं से भागने के बजाय, उनका जिज्ञासा और करुणा के साथ स्वागत करें। उनसे कहें कि वे इन ऊर्जाओं को बुद्धि और शक्ति में बदल दें। यह उन्नत आध्यात्मिक कार्य है जो गहरे चंगाई का कारण बनता है।",
            anecdote: "🌑 दिव्य थेरेपी सत्र: हिंदू आध्यात्म का अभ्यास करने वाले मनोवैज्ञानिक अक्सर इस ध्यान की सिफारिश करते हैं - वे कहते हैं कि यह ब्रह्मांड के सबसे अच्छे चिकित्सक से अपना भावनात्मक तहखाना साफ कराने जैसा है!"
          },
          {
            heading: "सुरक्षा और शुद्धिकरण अनुष्ठान",
            text: "अपने घर के प्रवेश द्वार पर उनकी तस्वीर या प्रतीक रखकर एक सुरक्षात्मक ऊर्जा क्षेत्र बनाएं। कपूर जलाएं (जो अहंकार विघटन का प्रतिनिधित्व करता है) और काले तिल अर्पित करें (नकारात्मक कर्म हटाने के लिए)। दृश्य और अदृश्य शत्रुओं, नकारात्मक ऊर्जाओं और मानसिक आक्रमणों से सुरक्षा के लिए प्रार्थना करें। उनकी भयंकर ऊर्जा आपके और आपके प्रियजनों के चारों ओर एक अभेद्य ढाल बनाती है।",
            anecdote: "🛡️ दिव्य सुरक्षा प्रणाली अपग्रेड: परिवारों की रिपोर्ट है कि उनकी सुरक्षा अनुष्ठान स्थापित करने के बाद, यहां तक कि आक्रामक पड़ोसी भी रहस्यमय रूप से विनम्र हो जाते हैं, स्कैमर कॉल बंद हो जाते हैं, और नकारात्मक लोग उनके घरों से बचते हैं - वे ब्रह्मांडीय कीट नियंत्रण जैसी हैं!"
          }
        ]
      },
      modern: {
        title: "आधुनिक जीवन में माँ कालरात्रि",
        content: [
          {
            heading: "आघात उपचार और PTSD रिकवरी",
            text: "उनकी ऊर्जा आघात, दुर्व्यवहार या PTSD से ठीक होने वालों के लिए अविश्वसनीय रूप से शक्तिशाली है। वे बचे हुए लोगों को साहस के साथ अपनी सबसे काली यादों का सामना करने, दबी हुई भावनाओं को संसाधित करने और मजबूत होकर उभरने में मदद करती हैं। हिंदू ग्राहकों के साथ काम करने वाले कई आघात चिकित्सक उनकी प्रतीकात्मकता को शामिल करते हैं - वे उस भयंकर उपचार शक्ति का प्रतिनिधित्व करती हैं जो सबसे बुरे अनुभवों को भी पचा सकती है और उन्हें बुद्धि और करुणा में बदल सकती है।",
            anecdote: "🏥 दिव्य आघात सर्जन: एक PTSD चिकित्सक रिपोर्ट करते हैं कि जो ग्राहक कालरात्रि की ऊर्जा से जुड़ते हैं वे उल्लेखनीय सफलताएं दिखाते हैं - वे बताते हैं कि उन्हें लगता है जैसे उनके पास एक ब्रह्मांडीय सहयोगी है जो 'उनके आघात से भी डरावनी' है और उपचार प्रक्रिया के दौरान उनकी सुरक्षा कर सकती है!"
          },
          {
            heading: "व्यसन रिकवरी और पैटर्न तोड़ना",
            text: "उनकी विनाशक शक्ति व्यसनी पैटर्न, बाध्यकारी व्यवहार और आत्म-विनाशकारी चक्रों को तोड़ने के लिए सही है। वे पदार्थों, विषाक्त रिश्तों या हानिकारक आदतों को 'ना' कहने के लिए आवश्यक भयंकर ऊर्जा प्रदान करती हैं। भारत में रिकवरी प्रोग्राम अक्सर वापसी का सामना करने, प्रलोभन का विरोध करने और व्यसन की मनोवैज्ञानिक जड़ों को नष्ट करने की शक्ति के लिए उनकी ऊर्जा का आह्वान करते हैं।",
            anecdote: "🚭 ब्रह्मांडीय हस्तक्षेप: एक पुनर्वास केंद्र अपने डिटॉक्स वार्ड में उनकी तस्वीर रखता है - मरीज़ रिपोर्ट करते हैं कि उनके भयंकर चेहरे को देखना उन्हें अपनी इच्छाओं का सामना करने का साहस देता है, कहते हैं 'यदि वे राक्षसों को नष्ट कर सकती हैं, तो मैं अपनी लत को नष्ट कर सकता हूं!'"
          },
          {
            heading: "जीवन के अंत की देखभाल और दुःख प्रसंस्करण",
            text: "धर्मशाला कार्यकर्ता और मृत्यु और मरने से निपटने वाले लोग अक्सर उनकी ऊर्जा का सहारा लेते हैं। मृत्यु को ही जीतने वाली देवी के रूप में, वे लोगों को बिना डर के मृत्यु दर का सामना करने में मदद करती हैं और जीवन के संक्रमणों में शांति पाती हैं। उनकी ऊर्जा मरने की प्रक्रिया और बचे लोगों दोनों का समर्थन करती है ताकि वे हानि को आध्यात्मिक समझ में बदलकर दुःख को संसाधित कर सकें।",
            anecdote: "🕊️ दिव्य धर्मशाला देखभाल: नर्स रिपोर्ट करती हैं कि जो परिवार जीवन के अंत की देखभाल के दौरान कालरात्रि से प्रार्थना करते हैं वे अधिक शांतिपूर्ण संक्रमण का अनुभव करते हैं - वे मरने वाले और शोक करने वाले दोनों को अपना डर छोड़ने और स्वीकृति पाने में मदद करती लगती हैं!"
          },
          {
            heading: "आध्यात्मिक रूपांतरण और अहंकार मृत्यु",
            text: "उन्नत आध्यात्मिक साधक गहरे रूपांतरण के लिए उनकी ऊर्जा के साथ काम करते हैं - जिसे रहस्यवादी 'अहंकार मृत्यु' कहते हैं। वे झूठी पहचान, आध्यात्मिक गर्व और आसक्तियों को घोलने में मदद करती हैं जो हमें अपनी सच्ची प्रकृति का अनुभव करने से रोकती हैं। उनकी पूजा विशेष रूप से उन लोगों में लोकप्रिय है जो जीवन के प्रमुख संक्रमण, आध्यात्मिक संकट या आत्मा की काली रातों से गुजर रहे हैं।",
            anecdote: "🧘‍♀️ दिव्य आध्यात्मिक विध्वंस: एक ध्यान शिक्षक कालरात्रि पूजा को 'आध्यात्मिक नवीनीकरण' बताते हैं - वे अहंकार की घटिया निर्माणों को गिराती हैं ताकि आपकी आत्मा प्रामाणिक आत्म-साक्षात्कार का महल बना सके!"
          }
        ]
      }
    },
    gu: {
      story: {
        title: "દિવ્ય વિનાશની ભયાનક રાત્રિ",
        content: [
          {
            heading: "સૌથી ભયાવહ રૂપ",
            text: "માં કાલરાત્રિ દેવી દુર્ગાનું સાતમું અને સૌથી ભયાનક રૂપ છે, જે વિનાશની તે કાળી રાત્રિ તરીકે પ્રગટ થાય છે જે બધી અશુભતાને ભસ્મ કરી નાખે છે. તેમનો રૂપ જાણીજોઈને ડરાવનો છે - કાળો રંગ, આગની લપટોની જેમ વિખરાયેલા વાળ, ચાર હાથ જેમાં તલવાર અને વજ્ર છે, ગધેડા પર સવાર, કપાયેલા માથાઓની માળા પહેરીને. તેમ છતાં તેમના ભયાનક રૂપ છતાં, તેઓ ખરેખર 'શુભંકરી' છે - કલ્યાણકારી જે જે નાશ પામવું જોઈએ તેનો નાશ કરીને પરમ કલ્યાણ લાવે છે.",
            anecdote: "🌙 બ્રહ્માંડીય વિરોધાભાસ: તેમને 'કાલ-રાત્રિ' (સમય/મૃત્યુની રાત્રિ) કહેવામાં આવે છે પરંતુ તેઓ ખરેખર 'કાલ' (સમય/મૃત્યુ)ના જ સંહારક છે - એટલા ભયાનક કે પોતે મૃત્યુ પણ તેમનાથી ડરે છે! તેઓ પરમ બ્રહ્માંડીય હોરર મૂવી જેવા છે જેનો અંત ખુશીથી થાય છે!"
          },
          {
            heading: "રાક્ષસોને ગળી જવાની રાત્રિ",
            text: "પુરાણો અનુસાર, જ્યારે રાક્ષસ શુંભ-નિશુંભે પોતાની સૌથી ભયાનક સેના મોકલી જેનું નેતૃત્વ રક્તબીજ રાક્ષસ કરતો હતો (જેના લોહીના દરેક ટીપામાંથી નવો રાક્ષસ જન્મતો હતો), ત્યારે પરિસ્થિતિ નિરાશાજનક લાગી રહી હતી. ત્યારે જ કાલરાત્રિ પ્રગટ થયા - તેમણે રક્તબીજનું બધું લોહી જમીન પર પડતા પહેલા જ પીતું, જેનાથી નવા રાક્ષસોનો જન્મ અટકી ગયો. તેમણે એક જ રાત્રિમાં સમગ્ર રાક્ષસ સેનાનો સંહાર કરી નાખ્યો, જેનાથી તેમને 'વિનાશની રાત્રિ' ની પદવી મળી.",
            anecdote: "🩸 દિવ્ય વેમ્પાયર: તેઓ મૂળ વેમ્પાયર કથા છે પરંતુ એક વળાંક સાથે - લોકોને વેમ્પાયર બનાવવાને બદલે, તેઓ વિશ્વને બચાવવા માટે રાક્ષસોનું લોહી પીવે છે! નેક હેતુ સાથેની નૈતિક વેમ્પાયર હોવાની વાત જ અલગ છે!"
          },
          {
            heading: "વેશમાં રક્ષક",
            text: "તેમનો ભયાવહ રૂપ એક ગહન હેતુની પૂર્તિ કરે છે - તેઓ ફક્ત દુષ્ટ શક્તિઓ, રાક્ષસો અને નકારાત્મક ઊર્જાઓ માટે ડરામણા લાગે છે. પોતાના ભક્તો માટે, તેઓ પરમ રક્ષક છે જે ડરને જ મિટાવી નાખે છે. તેમનો ડરાવનો દેખાવ દુષ્ટ શક્તિઓ માટે દિવ્ય 'ડિસ્ટર્બ કરશો નહીં'નું સંકેત છે - તેઓ તેમને એક વાર જુએ છે અને તેઓ આતંકમાં ભાગી જાય છે, પોતાના ભક્તોને સંપૂર્ણ શાંતિ અને સુરક્ષામાં છોડીને.",
            anecdote: "😈 ઉલટી મનોવિજ્ઞાન: તેઓ બ્રહ્માંડમાં સૌથી ડરામણો અંગરક્ષક રાખવા જેવું છે - ધમકાવનારા અને નકારાત્મક શક્તિઓ તમારી સાથે છેડછાડ કરવા વિશે વિચારતા પણ નથી કારણ કે તેઓ તમારા રક્ષકથી ભાગવામાં વ્યસ્ત રહે છે!"
          }
        ]
      },
      significance: {
        title: "દિવસ 7 નું આધ્યાત્મિક મહત્વ",
        content: [
          {
            heading: "સહસ્રાર ચક્ર અને તેનાથી પરે",
            text: "માં કાલરાત્રિ સહસ્રાર (મુકુટ ચક્ર)ને નિયંત્રિત કરે છે અને તેનાથી પણ આગળ જઈને આપણને બધા ચક્રોથી પરેના શૂન્ય સાથે જોડે છે. આ અહંકારના વિઘટન, ખોટી ઓળખોના મૃત્યુ અને પરમ આધ્યાત્મિક પરિવર્તનનું પ્રતિનિધિત્વ કરે છે. તેમની ઊર્જા આપણને તે બધું છોડવામાં મદદ કરે છે જે આપણું સાચું સ્વ નથી - ડર, આસક્તિઓ, મર્યાદિત માન્યતાઓ અને નકારાત્મક પેટર્ન જેઓ પોતાનો હેતુ પૂરો કરી ચૂક્યા છે.",
            anecdote: "👑 બ્રહ્માંડીય ડિલીટ બટન: તેમની પૂજા કરવી એ ઊંડા આધ્યાત્મિક એન્ટીવાયરસ પ્રોગ્રામ ચલાવવા જેવું છે જે માત્ર સપાટીની સમસ્યાઓ જ નહીં પરંતુ તમારી આત્માના ઓપરેટિંગ સિસ્ટમમાં એવી દૂષિત ફાઈલો પણ ડિલીટ કરે છે જેના વિશે તમે જાણતા પણ ન હતા!"
          },
          {
            heading: "પવિત્ર વિનાશ",
            text: "તેઓ આ સિદ્ધાંતની મૂર્તિ છે કે કેટલીકવાર સર્જન માટે વિનાશ જરૂરી હોય છે, કે કેટલીકવાર નવી શરૂઆત માટે વસ્તુઓનો સંપૂર્ણ અંત આવવો જરૂરી હોય છે. તેમની ઊર્જા આપણને શીખવે છે કે આધ્યાત્મિક વિકાસ માટે અકસર આપણા જૂના સ્વનું 'મૃત્યુ' જરૂરી હોય છે - આપણી જૂની માન્યતાઓ, ઝેરી સંબંધો અને સ્વ-મર્યાદિત કરતા પેટર્ન. તેઓ દિવ્ય સર્જન છે જે ચોકસાઈથી આધ્યાત્મિક કેન્સરને કાપી નાખે છે.",
            anecdote: "🦋 બ્રહ્માંડીય કેટરપિલર સૂપ: જેમ કેટરપિલરે પતંગિયું બનતા પહેલા સંપૂર્ણ રીતે સૂપમાં ઓગળવું પડે છે, તેમ તેઓ આપણા જૂના સ્વને સંપૂર્ણ રીતે ઓગાળવામાં મદદ કરે છે જેથી આપણી સાચી દિવ્ય પ્રકૃતિ ઉભરી શકે - અવ્યવસ્થિત પણ બિલકુલ જરૂરી!"
          },
          {
            heading: "ડર દ્વારા નિર્ભયતા",
            text: "વિરોધાભાસી રૂપે, આપણા સૌથી મોટા ડર તરીકે પ્રગટ થઈને, તેઓ આપણને બધા ડર પર વિજય મેળવવામાં મદદ કરે છે. જ્યારે તમે દિવ્યના સૌથી ભયાવહ પાસાંનો સામનો કરી શકો છો અને ત્યાં પ્રેમ અને સુરક્ષા શોધી શકો છો, ત્યારે વિશ્વમાં કંઈ પણ તમને ડરાવી શકતું નથી. તેઓ શીખવે છે કે આપણા સૌથી ઊંડા ડર ઘણીવાર આપણા સૌથી મોટા ખજાનાની રક્ષા કરે છે - તેમનો સામનો કરવાની હિંમત પરમ નિર્ભયતાની ચાવી છે.",
            anecdote: "🎃 દિવ્ય હોરર થેરાપી: તેઓ બ્રહ્માંડીય એક્સપોઝર થેરાપી જેવા છે - એકવાર તમે પરમ ડરામણા ફિલ્મ મોન્સ્ટરનો સામનો કરી લો અને સમજી જાઓ કે તેઓ ખરેખર તમારા પ્રેમાળ રક્ષક છે, ત્યારે નિયમિત જીવનની સમસ્યાઓ કાર્ટૂન જેવી લાગે છે!"
          }
        ]
      },
      rituals: {
        title: "દિવસ 7 ની પવિત્ર વિધિઓ",
        content: [
          {
            heading: "મધ્યરાત્રિ પરિવર્તન પ્રાર્થનાઓ",
            text: "માં કાલરાત્રિને ઘાટા રંગના ફૂલો જેમ કે જાંબલી કમળ, કાળા ગુલાબ અથવા ઘાટા નીળા ફૂલો અર્પણ કરીને શરૂઆત કરો, કારણ કે આ તે ઊંડાઈનું પ્રતિનિધિત્વ કરે છે જેની અન્વેષણમાં તેઓ આપણી મદદ કરે છે. મસ્ટર્ડ તેલનો દીવો પ્રગટાવો (ભયંકર રૂપો માટે પરંપરાગત) અને રાત્રે, ખાસ કરીને રાત્રે 11 વાગ્યા પછી જ્યારે તેમની ઊર્જા સૌથી મજબૂત હોય છે, 'ॐ દેવી કાલરાત્ર્યૈ નમઃ'નો 108 વખત જાપ કરો. તમારા બધા ડર, નકારાત્મકતા અને અવરોધોને તેમની દિવ્ય અગ્નિ દ્વારા ભસ્મ થતા જુઓ.",
            anecdote: "🌚 મધ્યરાત્રિ દિવ્ય મુલાકાત: ઘણા ભક્તો તેમના સમય દરમિયાન પ્રાર્થના કરવા માટે રાત્રે 11:59 વાગ્યાનો અલાર્મ સેટ કરે છે - તેઓ તેને સમસ્યાઓની દિવ્ય સંહારક સાથે તેમની 'બ્રહ્માંડીય મધ્યરાત્રિ મીટિંગ' કહે છે!"
          },
          {
            heading: "ડર-સામનો સમારોહ",
            text: "આ તમારા સૌથી ઊંડા ડર અને મર્યાદિત માન્યતાઓનો સામનો કરવાનો સૌથી શક્તિશાળી દિવસ છે. જે કંઈ પણ તમને ડરાવે છે - મૃત્યુ, નિષ્ફળતા, અસ્વીકાર, નુકસાન - તેને કાળા કાગળ પર લખો અને તેમના મંત્રનો જાપ કરતા સાડો. જેમ જેમ ધુમાડો ઊઠે છે, કાલરાત્રિને આ બધા ડરને ભસ્મ કરતા અને તેમની નિર્ભય ઊર્જાથી બદલતા જુઓ. આ વિધિ તમારા અવચેતનમાંથી ડરના પેટર્નને શાબ્દિક રીતે સાડી નાખે છે.",
            anecdote: "🔥 ડર બારબેક્યુ પાર્ટી: ભક્તો ઘણીવાર આ રાત્રે સામૂહિક ડર-બાળવાના સમારોહ માટે ભેગા થાય છે - તેઓ તેને 'ડર બારબેક્યુ' કહે છે જ્યાં બધા પોતાની ચિંતાઓને શેકે છે અને અજેય અનુભવતા બહાર નીકળે છે!"
          },
          {
            heading: "છાયા કાર્ય ધ્યાન",
            text: "સંપૂર્ણ અંધકારમાં (અથવા ન્યૂનતમ પ્રકાશ સાથે) બેસો અને કાલરાત્રિને આમંત્રણ આપો કે તેઓ તમને તમારા તે ભાગો બતાવે જેનાથી તમે બચતા રહ્યા છો - તમારો ગુસ્સો, ઈર્ષ્યા, લાજ કે પીડા. આ 'છાયા' પાસાઓથી ભાગવાને બદલે, તેમનું કુતૂહલ અને કરુણા સાથે સ્વાગત કરો. તેમને કહો કે તેઓ આ ઊર્જાઓને શાણપણ અને શક્તિમાં બદલે. આ ઉન્નત આધ્યાત્મિક કાર્ય છે જે ગહન ઉપચાર તરફ દોરી જાય છે.",
            anecdote: "🌑 દિવ્ય થેરાપી સત્ર: હિંદુ આધ્યાત્મનો અભ્યાસ કરતા મનોવિજ્ઞાનીઓ ઘણીવાર આ ધ્યાનની ભલામણ કરે છે - તેઓ કહે છે કે તે બ્રહ્માંડના શ્રેષ્ઠ થેરાપિસ્ટથી તમારું ભાવનાત્મક ભોંયરું સાફ કરાવવા જેવું છે!"
          },
          {
            heading: "સુરક્ષા અને શુદ્ધિકરણ વિધિ",
            text: "તમારા ઘરના પ્રવેશદ્વાર પર તેમની છબી અથવા પ્રતીક મૂકીને સુરક્ષાત્મક ઊર્જા ક્ષેત્ર બનાવો. કપૂર સાડો (જે અહંકાર વિઘટનનું પ્રતિનિધિત્વ કરે છે) અને કાળા તલ અર્પણ કરો (નકારાત્મક કર્મ દૂર કરવા માટે). દૃશ્ય અને અદૃશ્ય શત્રુઓ, નકારાત્મક ઊર્જાઓ અને માનસિક હુમલાઓથી સુરક્ષા માટે પ્રાર્થના કરો. તેમની ભયંકર ઊર્જા તમારી અને તમારા પ્રિયજનોની આસપાસ અભેદ્ય ઢાલ બનાવે છે.",
            anecdote: "🛡️ દિવ્ય સુરક્ષા પ્રણાલી અપગ્રેડ: પરિવારો જણાવે છે કે તેમની સુરક્ષા વિધિ સ્થાપિત કર્યા પછી, આક્રમક પાડોશીઓ પણ રહસ્યમય રીતે નમ્ર બની જાય છે, સ્કેમર કૉલ્સ બંધ થઈ જાય છે, અને નકારાત્મક લોકો તેમના ઘરોથી દૂર રહે છે - તેઓ બ્રહ્માંડીય જીવાત નિયંત્રણ જેવા છે!"
          }
        ]
      },
      modern: {
        title: "આધુનિક જીવનમાં માં કાલરાત્રિ",
        content: [
          {
            heading: "આઘાત ઉપચાર અને PTSD રિકવરી",
            text: "તેમની ઊર્જા આઘાત, દુર્વ્યવહાર અથવા PTSDથી સાજા થતા લોકો માટે અવિશ્વસનીય રીતે શક્તિશાળી છે. તેઓ બચી ગયેલા લોકોને હિંમત સાથે તેમની સૌથી કાળી યાદોનો સામનો કરવા, દબાયેલી લાગણીઓને પ્રોસેસ કરવા અને મજબૂત બનીને ઉભરવામાં મદદ કરે છે. હિંદુ ક્લાયન્ટ્સ સાથે કામ કરતા ઘણા આઘાત ચિકિત્સકો તેમની પ્રતીકાત્મકતાનો સમાવેશ કરે છે - તેઓ તે ભયંકર ઉપચાર શક્તિનું પ્રતિનિધિત્વ કરે છે જે સૌથી ખરાબ અનુભવોને પણ પચાવી શકે છે અને તેમને શાણપણ અને કરુણામાં બદલી શકે છે.",
            anecdote: "🏥 દિવ્ય આઘાત સર્જન: એક PTSD ચિકિત્સક જણાવે છે કે જે ક્લાયન્ટ્સ કાલરાત્રિની ઊર્જા સાથે જોડાય છે તેઓ નોંધપાત્ર સફળતાઓ બતાવે છે - તેઓ વર્ણવે છે કે તેમને લાગે છે જેમ કે તેમની પાસે બ્રહ્માંડીય સાથી છે જે 'તેમના આઘાત કરતાં પણ ડરામણી' છે અને ઉપચાર પ્રક્રિયા દરમિયાન તેમની સુરક્ષા કરી શકે છે!"
          },
          {
            heading: "વ્યસન રિકવરી અને પેટર્ન તોડવા",
            text: "તેમની વિનાશક શક્તિ વ્યસનકારી પેટર્ન, બાધ્યતા વર્તણૂકો અને સ્વ-વિનાશકારી ચક્રને તોડવા માટે સંપૂર્ણ છે. તેઓ પદાર્થો, ઝેરી સંબંધો અથવા હાનિકારક આદતોને 'ના' કહેવા માટે જરૂરી ભયંકર ઊર્જા પ્રદાન કરે છે. ભારતમાં રિકવરી પ્રોગ્રામ્સ ઘણીવાર ઉપસારગ, લાલચનો પ્રતિકાર અને વ્યસનના મનોવૈજ્ઞાનિક મૂળનો નાશ કરવાની શક્તિ માટે તેમની ઊર્જાનું આહ્વાન કરે છે.",
            anecdote: "🚭 બ્રહ્માંડીય હસ્તક્ષેપ: એક પુનર્વસન કેન્દ્ર પોતાના ડિટોક્સ વોર્ડમાં તેમની છબી રાખે છે - દર્દીઓ જણાવે છે કે તેમનો ભયંકર ચહેરો જોવાથી તેમને પોતાની લાલસાઓનો સામનો કરવાની હિંમત મળે છે, તેઓ કહે છે 'જો તેઓ રાક્ષસોનો નાશ કરી શકે છે, તો હું મારી લતનો નાશ કરી શકું છું!'"
          },
          {
            heading: "જીવનના અંતની સંભાળ અને દુઃખ પ્રક્રિયા",
            text: "હોસ્પિસ કામદારો અને મૃત્યુ અને મરવા સાથે કામ કરતા લોકો ઘણીવાર તેમની ઊર્જાનો સહારો લે છે. મૃત્યુને જ જીતી લેતી દેવી તરીકે, તેઓ લોકોને ડર વિના મૃત્યુદરનો સામનો કરવામાં અને જીવનના સંક્રમણોમાં શાંતિ શોધવામાં મદદ કરે છે. તેમની ઊર્જા મૃત્યુ પ્રક્રિયા અને બચેલા બંનેને સહાય કરે છે જેથી તેઓ નુકસાનને આધ્યાત્મિક સમજમાં બદલીને દુઃખને પ્રોસેસ કરી શકે.",
            anecdote: "🕊️ દિવ્ય હોસ્પિસ સંભાળ: નર્સો જણાવે છે કે જે પરિવારો જીવનના અંતની સંભાળ દરમિયાન કાલરાત્રિને પ્રાર્થના કરે છે તેઓ વધુ શાંતિપૂર્ણ સંક્રમણ અનુભવે છે - તેઓ મૃત્યુ પામનારા અને શોક કરનારા બંનેને તેમનો ડર છોડવા અને સ્વીકૃતિ શોધવામાં મદદ કરે છે!"
          },
          {
            heading: "આધ્યાત્મિક પરિવર્તન અને અહંકાર મૃત્યુ",
            text: "ઉન્નત આધ્યાત્મિક સાધકો ગહન પરિવર્તન માટે તેમની ઊર્જા સાથે કામ કરે છે - જેને રહસ્યવાદીઓ 'અહંકાર મૃત્યુ' કહે છે. તેઓ ખોટી ઓળખો, આધ્યાત્મિક ગર્વ અને આસક્તિઓને ઓગાળવામાં મદદ કરે છે જે આપણને આપણી સાચી પ્રકૃતિ અનુભવવાથી રોકે છે. તેમની પૂજા ખાસ કરીને તે લોકોમાં લોકપ્રિય છે જે જીવનના મુખ્ય સંક્રમણો, આધ્યાત્મિક સંકટ અથવા આત્માની કાળી રાતોમાંથી પસાર થઈ રહ્યા છે.",
            anecdote: "🧘‍♀️ દિવ્ય આધ્યાત્મિક ધ્વંસ: એક ધ્યાન શિક્ષક કાલરાત્રિ પૂજાને 'આધ્યાત્મિક નવીકરણ' કહે છે - તેઓ અહંકારના ઘટિયા બાંધકામોને તોડી પાડે છે જેથી તમારી આત્મા પ્રમાણિક આત્મ-સાક્ષાત્કારનો મહેલ બનાવી શકે!"
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
        <title>Navratri Day 7: Maa Kalaratri - The Night of Transformation</title>
        <meta name="description" content="Explore the spiritual significance and sacred stories of Maa Kalaratri on Day 7 of Navratri. Discover rituals, mantras, and modern relevance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-orange-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-orange-900 border-b border-orange-700 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Mobile Header */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => router.push(`/navratri-celebration?lang=${currentLang}`)}
                  className="flex items-center px-3 py-2 bg-orange-100 text-gray-800 rounded-lg hover:bg-orange-200 transition-all duration-200 border border-orange-300 shadow-sm text-sm"
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
                      router.push(`/navratri-day-7?lang=${e.target.value}`);
                    }}
                    className="appearance-none bg-orange-100 border border-orange-300 text-gray-800 px-3 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium shadow-sm text-sm"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>
                        {lang.nativeName}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="text-2xl sm:text-3xl">🌈</div>
                  <h1 className="text-xl sm:text-2xl font-bold text-orange-100">{t.day7}</h1>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-orange-200 italic mb-3">"{t.meaning}"</p>

                {/* Today's Color - Mobile */}
                <div className="inline-block bg-orange-100 rounded-lg px-3 py-2 border border-orange-300 shadow-sm">
                  <div className="text-center">
                    <p className="text-xs text-gray-700 font-medium mb-1">{t.todaysColor}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 border-2 border-gray-600 rounded-full"></div>
                      <span className="font-semibold text-gray-800 text-sm">{t.orange}</span>
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
                  className="flex items-center px-4 py-2 bg-orange-100 text-gray-800 rounded-lg hover:bg-orange-200 transition-all duration-200 border border-orange-300 shadow-sm"
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
                      router.push(`/navratri-day-7?lang=${e.target.value}`);
                    }}
                    className="appearance-none bg-orange-100 border border-orange-300 text-gray-800 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium shadow-sm"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>
                        {lang.nativeName}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Center - Main Title */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-1">
                  <div className="text-3xl">🔥</div>
                  <div>
                    <h1 className="text-2xl font-bold text-orange-100">{t.day7}</h1>
                  </div>
                </div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                  {t.goddess}
                </h2>
                <p className="text-sm text-orange-200 italic">"{t.meaning}"</p>
              </div>

              {/* Right side - Today's Color */}
              <div className="bg-orange-100 rounded-lg px-4 py-3 border border-orange-300 shadow-sm">
                <div className="text-center">
                  <p className="text-xs text-gray-700 font-medium mb-1">{t.todaysColor}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 border-2 border-gray-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800 text-sm">{t.orange}</span>
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
              onClick={() => router.push(`/navratri-day-6?lang=${currentLang}`)}
              className="flex items-center px-3 sm:px-4 py-2 bg-orange-100 text-gray-800 rounded-lg hover:bg-orange-200 transition-all duration-200 border border-orange-300 shadow-sm text-sm sm:text-base"
            >
              {t.backToDay6}
            </button>
            <div className="text-center">
              <div className="flex space-x-1 sm:space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                      day === 7
                        ? 'bg-orange-500 text-white shadow-lg'
                        : day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6
                        ? 'bg-orange-200 text-gray-800 cursor-pointer hover:bg-orange-300'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                    onClick={() => {
                      if (day === 1) router.push(`/navratri-day-1?lang=${currentLang}`);
                      if (day === 2) router.push(`/navratri-day-2?lang=${currentLang}`);
                      if (day === 3) router.push(`/navratri-day-3?lang=${currentLang}`);
                      if (day === 4) router.push(`/navratri-day-4?lang=${currentLang}`);
                      if (day === 5) router.push(`/navratri-day-5?lang=${currentLang}`);
                      if (day === 6) router.push(`/navratri-day-6?lang=${currentLang}`);
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
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-orange-100 text-gray-800 hover:bg-orange-200 border border-orange-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-orange-200">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 text-orange-900">
              {currentContent.title}
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {currentContent.content.map((section, index) => (
                <div key={index} className="relative">
                  {/* Section */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 mb-3 sm:mb-4 border border-orange-200">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🔥</span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {section.text}
                    </p>
                  </div>

                  {/* Anecdote Box */}
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 sm:p-5 border-l-4 border-orange-500 ml-2 sm:ml-4">
                    <div className="flex items-start">
                      <div className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">💡</div>
                      <p className="text-orange-900 font-medium italic text-sm sm:text-base">
                        {section.anecdote}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < currentContent.content.length - 1 && (
                    <div className="flex justify-center my-6 sm:my-8">
                      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-orange-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🙏</div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4">
                  {t.blessing}
                </h3>
                <p className="text-orange-700 text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
                  {t.blessingDesc}
                </p>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg max-w-md mx-auto border border-orange-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-sm sm:text-base">{t.todaysMantra}</h4>
                  <div className="text-base sm:text-lg font-semibold text-orange-700 sanskrit mb-2">
                    ॐ देवी कालरात्र्यै नमः
                  </div>
                  <div className="text-gray-600 italic text-sm sm:text-base">
                    "Om Devi Kalaratryai Namah"
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
            <div className="inline-block bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-orange-200">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{t.continueJourney}</p>
              <button
                onClick={() => router.push(`/navratri-day-8?lang=${currentLang}`)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-white text-gray-800 font-semibold rounded-xl hover:from-orange-600 hover:to-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg border border-orange-300 text-sm sm:text-base"
              >
                {t.day8Coming}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}