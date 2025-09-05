import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const TemplateGallery = ({ selectedFestival, onTemplateSelect }) => {
  const { t } = useTranslation('common');
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedFestival?.id) {
      fetchTemplates();
    }
  }, [selectedFestival]);

  const fetchTemplates = async () => {
    try {
      const response = await fetch(`/api/templates?festivalId=${selectedFestival.id}`);
      const data = await response.json();
      
      // Transform database templates to match our UI expectations
      const transformedTemplates = data.map(template => ({
        id: template.id,
        name: template.name,
        template_type: template.template_type,
        preview: createTemplatePreview(template.template_type, selectedFestival)
      }));
      
      setTemplates(transformedTemplates);
    } catch (error) {
      console.error('Error fetching templates:', error);
      // Fallback to empty array if API fails
      setTemplates([]);
    } finally {
      setLoading(false);
    }
  };

  const createTemplatePreview = (templateType, festival) => {
    const baseStyle = "w-full h-48 flex flex-col items-center justify-center text-white p-4";
    
    switch(templateType) {
      case 1: // Golden Glow
        return (
          <div className={`${baseStyle} bg-gradient-to-br from-yellow-400 to-orange-600`}>
            <div className="text-2xl font-bold mb-2">🪔</div>
            <div className="text-lg font-semibold">{festival?.name?.en}</div>
            <div className="text-sm mt-2">Your Message Here</div>
            <div className="text-xs mt-2 italic">- Your Family Name</div>
          </div>
        );
      case 2: // Royal Purple
        return (
          <div className={`${baseStyle} bg-gradient-to-br from-purple-600 to-pink-600`}>
            <div className="text-2xl font-bold mb-2">✨</div>
            <div className="text-lg font-semibold">{festival?.name?.en}</div>
            <div className="text-sm mt-2">Your Message Here</div>
            <div className="text-xs mt-2 italic">- Your Family Name</div>
          </div>
        );
      case 3: // Traditional Red
        return (
          <div className={`${baseStyle} bg-gradient-to-br from-red-500 to-orange-500`}>
            <div className="text-2xl font-bold mb-2">🎊</div>
            <div className="text-lg font-semibold">{festival?.name?.en}</div>
            <div className="text-sm mt-2">Your Message Here</div>
            <div className="text-xs mt-2 italic">- Your Family Name</div>
          </div>
        );
      case 4: // Elegant Blue
        return (
            <div className={`${baseStyle} bg-gradient-to-br from-blue-500 to-indigo-700`}>
            <div className="text-2xl font-bold mb-2">🌟</div>
            <div className="text-lg font-semibold">{festival?.name?.en}</div>
            <div className="text-sm mt-2">Your Message Here</div>
            <div className="text-xs mt-2 italic">- Your Family Name</div>
            </div>
        );
      case 5: // Rose Gold
        return (
            <div className={`${baseStyle} bg-gradient-to-br from-pink-400 to-rose-600`}>
            <div className="text-2xl font-bold mb-2">🌸</div>
            <div className="text-lg font-semibold">{festival?.name?.en}</div>
            <div className="text-sm mt-2">Your Message Here</div>
            <div className="text-xs mt-2 italic">- Your Family Name</div>
            </div>
        );
      case 6: // Classic Green
        return (
            <div className={`${baseStyle} bg-gradient-to-br from-green-500 to-emerald-700`}>
            <div className="text-2xl font-bold mb-2">🍃</div>
            <div className="text-lg font-semibold">{festival?.name?.en}</div>
            <div className="text-sm mt-2">Your Message Here</div>
            <div className="text-xs mt-2 italic">- Your Family Name</div>
            </div>
        );  
      default:
        return (
          <div className={`${baseStyle} bg-gradient-to-br from-gray-400 to-gray-600`}>
            <div className="text-lg font-semibold">Template Preview</div>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          {t('selectTemplate')}
        </h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
        <p className="text-center mt-4 text-gray-600">Loading templates...</p>
      </div>
    );
  }

  if (templates.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          {t('selectTemplate')}
        </h2>
        <div className="text-center">
          <p className="text-gray-600">No templates available for this festival.</p>
        </div>
      </div>
    );
  }

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