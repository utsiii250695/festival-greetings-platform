import { useTranslation } from 'next-i18next';

const FestivalSelector = ({ onFestivalSelect }) => {
  const { t, i18n } = useTranslation('common');

  // For now, we'll use hardcoded festivals. Later we'll connect to database
  const festivals = [
    {
      id: 1,
      name: { en: "Diwali", hi: "दीवाली", gu: "દિવાળી" },
      description: { en: "Festival of Lights", hi: "रोशनी का त्योहार", gu: "પ્રકાશનો તહેવાર" }
    },
    {
      id: 2,
      name: { en: "Dhanteras", hi: "धनतेरस", gu: "ધનતેરસ" },
      description: { en: "Festival of Wealth", hi: "धन का त्योहार", gu: "ધનનો તહેવાર" }
    },
    {
      id: 3,
      name: { en: "Navratri", hi: "नवरात्रि", gu: "નવરાત્રી" },
      description: { en: "Nine Nights Festival", hi: "नौ रातों का त्योहार", gu: "નવ રાત્રિનો તહેવાર" }
    }
  ];

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