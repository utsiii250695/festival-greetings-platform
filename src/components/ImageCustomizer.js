import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const ImageCustomizer = ({ selectedFestival, onCustomize }) => {
  const [customMessage, setCustomMessage] = useState('');
  const [wishesFrom, setWishesFrom] = useState('');
  const [selectedMessage, setSelectedMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    if (selectedFestival?.id) {
      fetchMessages();
    }
  }, [selectedFestival]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`/api/messages?festivalId=${selectedFestival.id}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      // Fallback to empty array if API fails
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    const finalMessage = customMessage || selectedMessage;
    if (finalMessage && wishesFrom) {
      onCustomize({
        message: finalMessage,
        wishesFrom: wishesFrom
      });
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          {t('customizeMessage')}
        </h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
        <p className="text-center mt-4 text-gray-600">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        {t('customizeMessage')}
      </h2>
      
      <div className="space-y-6">
        {/* Pre-written messages */}
        {messages.length > 0 && (
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {t('selectMessage')}
            </label>
            <div className="space-y-2">
              {messages.map((msg, index) => {
                const messageText = msg.content[i18n.language] || msg.content.en;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedMessage(messageText);
                      setCustomMessage('');
                    }}
                    className={`w-full p-3 text-left border rounded-lg transition-colors ${
                      selectedMessage === messageText
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {messageText}
                  </button>
                );
              })}
            </div>
          </div>
        )}

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