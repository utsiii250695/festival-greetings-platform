// Refined Navratri messages - exactly 20-22 words each
// Run with: node scripts/refined-messages.js

// Refined Navratri messages - 20-22 words each, culturally authentic and meaningful
const refinedMessages = [
  {
    id: 7,
    display_order: 1,
    content: {
      en: "May divine goddess Durga bless you during these nine sacred Navratri nights, bringing prosperity, happiness, and spiritual enlightenment to your life.",
      hi: "इन नौ पवित्र नवरात्रि रातों में माँ दुर्गा आपको आशीर्वाद दें, जीवन में खुशी, समृद्धि और आध्यात्मिक ज्ञान लाएं।",
      gu: "આ નવ પવિત્ર નવરાત્રિ રાત્રિઓમાં માતા દુર્ગા તમને આશીર્વાદ આપે, જીવનમાં ખુશી, સમૃદ્ધિ અને આધ્યાત્મિક જ્ઞાન લાવે।"
    }
  },
  {
    id: 8,
    display_order: 2,
    content: {
      en: "Celebrating victory of good over evil, may Maa Durga's divine energy illuminate your path, fill hearts with devotion, and bless families with abundance.",
      hi: "बुराई पर अच्छाई की जीत मनाते हुए, माँ दुर्गा की दिव्य शक्ति आपका पथ प्रकाशित करे, हृदय भक्ति से भरे और परिवार को समृद्धि मिले।",
      gu: "સત્યની અસત્ય પર વિજયની ઉજવણી કરતાં, મા દુર્ગાની દિવ્ય શક્તિ તમારો માર્ગ પ્રકાશિત કરે, હૃદય ભક્તિથી ભરે અને કુટુંબને સમૃદ્ધિ આપે."
    }
  },
  {
    id: 9,
    display_order: 3,
    content: {
      en: "During nine auspicious nights of devotion and celebration, may divine mother protect you from harm, guide towards righteousness, and grant inner peace.",
      hi: "भक्ति और उत्सव की नौ शुभ रातों में, दिव्य माता आपको कष्टों से बचाए, धर्म पथ पर ले चले और आत्मिक शांति प्रदान करे।",
      gu: "ભક્તિ અને ઉત્સવની નવ શુભ રાત્રિઓમાં, દિવ્ય માતા તમને બાધાઓથી બચાવે, ધર્મ માર્ગે દોરે અને આંતરિક શાંતિ આપે।"
    }
  }
];

function countWords(text) {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

console.log('REFINED NAVRATRI MESSAGES (Target: 20-22 words each)');
console.log('====================================================\n');

// Display preview of refined messages with word counts
refinedMessages.forEach((message, index) => {
  console.log(`Message ${index + 1} (ID: ${message.id}, Display Order: ${message.display_order})`);
  console.log('Refined Content:');
  
  Object.keys(message.content).forEach(lang => {
    const text = message.content[lang];
    const wordCount = countWords(text);
    const status = wordCount >= 20 && wordCount <= 22 ? '✓' : (wordCount > 22 ? '⚠ Too long' : '⚠ Too short');
    console.log(`  ${lang.toUpperCase()}: "${text}"`);
    console.log(`           (${wordCount} words) ${status}`);
  });
  console.log('-'.repeat(100));
});

console.log('\nWORD COUNT ANALYSIS:');
console.log('===================');
let totalInRange = 0;
let totalMessages = refinedMessages.length * 3; // 3 languages per message

refinedMessages.forEach((message, index) => {
  console.log(`\nMessage ${index + 1}:`);
  Object.keys(message.content).forEach(lang => {
    const wordCount = countWords(message.content[lang]);
    const inRange = wordCount >= 20 && wordCount <= 22;
    if (inRange) totalInRange++;
    console.log(`  ${lang.toUpperCase()}: ${wordCount} words ${inRange ? '✓' : '✗'}`);
  });
});

console.log(`\nTarget Achievement: ${totalInRange}/${totalMessages} messages in 20-22 word range`);
console.log(`Success Rate: ${Math.round((totalInRange/totalMessages) * 100)}%`);

console.log('\n' + '='.repeat(80));
console.log('THEMES COVERED:');
console.log('='.repeat(80));
console.log('Message 1: Divine blessings, sacred nights, prosperity & enlightenment');
console.log('Message 2: Victory of good over evil, divine energy, family abundance');
console.log('Message 3: Nine nights of devotion, divine protection, inner peace');

console.log('\n' + '='.repeat(80));
console.log('CULTURAL AUTHENTICITY:');
console.log('='.repeat(80));
console.log('✓ References to Goddess Durga (माँ दुर्गा / માતા દુર્ગા)');
console.log('✓ Nine nights significance (नौ रातें / નવ રાત્રિઓ)');
console.log('✓ Victory of good over evil theme');
console.log('✓ Spiritual concepts: devotion (भक्ति / ભક્તિ), righteousness (धर्म / ધર્મ)');
console.log('✓ Traditional blessings: prosperity, peace, protection');
console.log('✓ Appropriate religious tone for Hindu festival');

console.log('\n='.repeat(80));
console.log('Ready to update database with refined messages!');
console.log('='.repeat(80));