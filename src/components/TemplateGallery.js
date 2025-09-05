import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const TemplateGallery = ({ selectedFestival, onTemplateSelect }) => {
  const { t } = useTranslation('common');

  // Hardcoded templates for now - later we'll connect to database
  const templates = [
    {
      id: 1,
      name: "Golden Glow",
      preview: (
        <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-orange-600 flex flex-col items-center justify-center text-white p-4">
          <div className="text-2xl font-bold mb-2">🪔</div>
          <div className="text-lg font-semibold">{selectedFestival?.name?.en}</div>
          <div className="text-sm mt-2">Your Message Here</div>
          <div className="text-xs mt-2 italic">- Your Family Name</div>
        </div>
      )
    },
    {
      id: 2,
      name: "Royal Purple",
      preview: (
        <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center text-white p-4">
          <div className="text-2xl font-bold mb-2">✨</div>
          <div className="text-lg font-semibold">{selectedFestival?.name?.en}</div>
          <div className="text-sm mt-2">Your Message Here</div>
          <div className="text-xs mt-2 italic">- Your Family Name</div>
        </div>
      )
    },
    {
      id: 3,
      name: "Traditional Red",
      preview: (
        <div className="w-full h-48 bg-gradient-to-br from-red-500 to-orange-500 flex flex-col items-center justify-center text-white p-4">
          <div className="text-2xl font-bold mb-2">🎊</div>
          <div className="text-lg font-semibold">{selectedFestival?.name?.en}</div>
          <div className="text-sm mt-2">Your Message Here</div>
          <div className="text-xs mt-2 italic">- Your Family Name</div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        {t('selectTemplate')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateSelect(template)}
            className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-orange-500 transition-colors"
          >
            {template.preview}
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-800">{template.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;