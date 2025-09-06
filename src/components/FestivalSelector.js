import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const FestivalSelector = ({ onFestivalSelect }) => {
  const { t, i18n } = useTranslation('common');
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFestivals();
  }, []);

  const fetchFestivals = async () => {
    try {
      const response = await fetch('/api/festivals');
      const data = await response.json();
      setFestivals(data);
    } catch (error) {
      console.error('Error fetching festivals:', error);
      // Fallback to empty array if API fails
      setFestivals([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {t('selectFestival')}
        </h1>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
        <p className="text-center mt-4 text-gray-600">Loading festivals...</p>
      </div>
    );
  }

  if (festivals.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {t('selectFestival')}
        </h1>
        <div className="text-center">
          <p className="text-gray-600">No festivals available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {t('selectFestival')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => (
          <button
            key={festival.id}
            onClick={() => onFestivalSelect(festival)}
            className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {festival.name[i18n.language] || festival.name.en}
            </h3>
            <p className="text-gray-600">
              {festival.description[i18n.language] || festival.description.en}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FestivalSelector;