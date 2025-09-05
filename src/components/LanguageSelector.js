import { useState } from 'react';
import { useRouter } from 'next/router';

const LanguageSelector = ({ onLanguageSelect }) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' }
  ];

  const handleLanguageSelect = (langCode) => {
    router.push(router.asPath, router.asPath, { locale: langCode });
    onLanguageSelect(langCode);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Select Language / भाषा चुनें / ભાષા પસંદ કરો
        </h2>
        <div className="space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-lg"
            >
              <div className="font-semibold">{lang.nativeName}</div>
              <div className="text-sm text-gray-600">{lang.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;