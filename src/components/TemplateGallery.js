import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { TemplateRenderer } from '../utils/templateRenderer';

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
      
      const transformedTemplates = data.map(template => ({
        id: template.id,
        name: template.name,
        template_type: template.template_type,
        image_url: template.image_url,
        html_template: template.html_template,
        css_styles: template.css_styles,
        variables: template.variables,
        hasCustomTemplate: template.hasCustomTemplate,
        preview: createTemplatePreview(template, selectedFestival)
      }));
      
      setTemplates(transformedTemplates);
    } catch (error) {
      console.error('Error fetching templates:', error);
      setTemplates([]);
    } finally {
      setLoading(false);
    }
  };

  const createTemplatePreview = (template, festival) => {
    // If template has custom HTML/CSS, render the actual template
    if (template.hasCustomTemplate && template.html_template && template.css_styles) {
      const sampleVariables = {
        IMAGE_URL: template.image_url || '',
        FESTIVAL_NAME: festival?.name?.en || 'Festival',
        MESSAGE: 'May this festival bring joy, prosperity and happiness to your family. Wishing you all the divine blessings!',
        WISHES_FROM: 'The Sharma Family'
      };

      const renderedHtml = TemplateRenderer.renderTemplate(
        template.html_template,
        template.css_styles,
        sampleVariables
      );

      if (renderedHtml) {
        // Calculate scale to fit 320px width (1080px * scale = 320px)
        const scale = 320 / 1080;
        
        return (
          <div className="w-80 h-80 bg-gray-100 rounded-lg shadow-lg overflow-hidden border-2 border-yellow-400 relative flex items-center justify-center">
            <div 
              className="absolute"
              style={{ 
                width: '1080px',
                height: '1350px',
                transform: `scale(${scale})`,
                transformOrigin: 'center center'
              }}
              dangerouslySetInnerHTML={{ __html: renderedHtml }}
            />
          </div>
        );
      }
    }

    // Fallback for templates without custom HTML/CSS
    const cardStyle = "w-full h-80 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yellow-400";

    return (
      <div className={cardStyle}>
        {/* Top Image Section */}
        <div className="w-full h-48 overflow-hidden">
          {template.image_url ? (
            <img 
              src={template.image_url} 
              alt="Template decoration"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Template preview image failed to load:', template.image_url);
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${getBackgroundClass(template.template_type)}`}>
              <div className="text-4xl">
                {getEmojiForType(template.template_type)}
              </div>
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-4 h-32 flex flex-col justify-between text-center">
          {/* Festival Title */}
          <h3 className="text-xl font-bold text-orange-700 mb-2" style={{fontFamily: 'Cardo, serif'}}>
            {festival?.name?.en}
          </h3>
          
          {/* Message Preview */}
          <p className="text-sm text-gray-600 mb-2">
            Your Message Here
          </p>
          
          {/* Signature Preview */}
          <p className="text-xs italic text-blue-900 font-semibold">
            Your Family Name
          </p>
        </div>
      </div>
    );
  };

  const getBackgroundClass = (templateType) => {
    switch(templateType) {
      case 1:
      case 4: // Golden templates
        return "bg-gradient-to-br from-yellow-400 to-orange-600";
      case 2:
      case 5: // Purple templates
        return "bg-gradient-to-br from-purple-600 to-pink-600";
      case 3:
      case 6: // Red templates
        return "bg-gradient-to-br from-red-500 to-orange-500";
      case 7: // Dark template
        return "bg-gradient-to-b from-gray-900 to-black";
      default:
        return "bg-gradient-to-br from-gray-400 to-gray-600";
    }
  };

  const getEmojiForType = (templateType) => {
    switch(templateType) {
      case 1:
      case 4:
      case 7:
        return "🪔";
      case 2:
      case 5:
        return "✨";
      case 3:
      case 6:
        return "🎊";
      default:
        return "🪔";
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
      <div className="flex flex-wrap justify-center gap-8">
        {templates.map((template) => (
          <div key={template.id} className="text-center">
            <button
              onClick={() => onTemplateSelect(template)}
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
            >
              {template.preview}
            </button>
            <div className="mt-4 text-center">
              <span className="text-lg font-semibold text-gray-800">{template.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;