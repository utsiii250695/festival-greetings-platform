import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const ImageCustomizer = ({ selectedFestival, onCustomize }) => {
  const [customMessage, setCustomMessage] = useState('');
  const [wishesFrom, setWishesFrom] = useState('');
  const [selectedMessage, setSelectedMessage] = useState('');
  const { t, i18n } = useTranslation('common');

  // Hardcoded messages for now - later from database
  const preWrittenMessages = [
    {
      en: "Wishing you a very Happy Diwali!",
      hi: "आपको दीवाली की हार्दिक शुभकामनाएं!",
      gu: "તમને દિવાળીની હાર્દિક શુભકામનાઓ!"
    },
    {
      en: "May this festival bring happiness and prosperity",
      hi: "यह त्योहार खुशियां और समृद्धि लाए",
      gu: "આ તહેવાર ખુશી અને સમૃદ્ધિ લાવે"
    },
    {
      en: "Light up your life with joy and happiness",
      hi: "अपने जीवन को खुशी और प्रसन्नता से रोशन करें",
      gu: "તમારા જીવનને આનંદ અને ખુશીથી પ્રકાશિત કરો"
    }
  ];

  const handleSubmit = () => {
    const finalMessage = customMessage || selectedMessage;
    if (finalMessage && wishesFrom) {
      onCustomize({
        message: finalMessage,
        wishesFrom: wishesFrom
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        {t('customizeMessage')}
      </h2>
      
      <div className="space-y-6">
        {/* Pre-written messages */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            {t('selectMessage')}
          </label>
          <div className="space-y-2">
            {preWrittenMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedMessage(msg[i18n.language] || msg.en);
                  setCustomMessage('');
                }}
                className={`w-full p-3 text-left border rounded-lg transition-colors ${
                  selectedMessage === (msg[i18n.language] || msg.en)
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {msg[i18n.language] || msg.en}
              </button>
            ))}
          </div>
        </div>

        {/* Custom message */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            {t('customMessage')}
          </label>
          <textarea
            value={customMessage}
            onChange={(e) => {
              setCustomMessage(e.target.value);
              setSelectedMessage('');
            }}
            className="w-full p-4 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none resize-none text-lg"
            rows="3"
            placeholder={t('enterCustomMessage')}
          />
        </div>

        {/* Wishes from */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            {t('wishesFrom')}
          </label>
          <input
            type="text"
            value={wishesFrom}
            onChange={(e) => setWishesFrom(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
            placeholder={t('enterName')}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!(customMessage || selectedMessage) || !wishesFrom}
          className="w-full py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg"
        >
          {t('createImage')}
        </button>
      </div>
    </div>
  );
};

export default ImageCustomizer;