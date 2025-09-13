import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useTranslation } from 'next-i18next';
import { TemplateRenderer } from '../utils/templateRenderer';

const ImagePreview = ({ selectedTemplate, selectedFestival, customization, onBack, onImageGenerated, onImageDownload }) => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [fullTemplate, setFullTemplate] = useState(null);
  const [isLoadingTemplate, setIsLoadingTemplate] = useState(true);
  const templateRef = useRef(null);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    console.log('ImagePreview received template:', selectedTemplate);
    console.log('Template image URL:', selectedTemplate?.image_url);
    
    const fetchTemplateData = async () => {
      if (selectedTemplate?.id) {
        setIsLoadingTemplate(true);
        try {
          const response = await fetch(`/api/templates?festivalId=${selectedFestival.id}`);
          const templates = await response.json();
          const currentTemplate = templates.find(t => t.id === selectedTemplate.id);
          setFullTemplate(currentTemplate);
          console.log('Full template data fetched:', currentTemplate);
        } catch (error) {
          console.error('Error fetching template data:', error);
        } finally {
          setIsLoadingTemplate(false);
        }
      }
    };

    fetchTemplateData();
  }, [selectedTemplate, selectedFestival]);

  useEffect(() => {
    if (fullTemplate) {
      // Set loading immediately to prevent showing dummy template
      setIsGenerating(true);
      generateImage();
    }
  }, [fullTemplate]);

  const generateImage = async () => {
    // Loading state is already set in useEffect, no need to set again
    try {
      setTimeout(async () => {
        const canvas = await html2canvas(templateRef.current, {
          scale: 1,
          backgroundColor: '#ffffff',
          useCORS: true,
          allowTaint: true
        });
        
        const imageDataUrl = canvas.toDataURL('image/png');
        setGeneratedImage(imageDataUrl);
        setIsGenerating(false);
        
        if (onImageGenerated) {
          onImageGenerated();
        }
      }, 500);
    } catch (error) {
      console.error('Image generation failed:', error);
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;

    const link = document.createElement('a');
    link.download = `festival-greeting-${Date.now()}.png`;
    link.href = generatedImage;
    link.click();

    if (onImageDownload) {
      onImageDownload();
    }
  };

  const handleShare = async () => {
    if (!generatedImage) return;
    
    try {
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const file = new File([blob], 'festival-greeting.png', { type: 'image/png' });
      
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Festival Greeting',
          text: customization.message
        });
      } else {
        const message = `${customization.message}\n\n- ${customization.wishesFrom}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      console.error('Sharing failed:', error);
      const message = `${customization.message}\n\n- ${customization.wishesFrom}`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const getCardBackground = (templateType) => {
    switch(templateType) {
      case 1:
      case 4: // Golden templates
        return 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)';
      case 2:
      case 5: // Purple templates
        return 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)';
      case 3:
      case 6: // Red templates
        return 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)';
      case 7: // Dark template
        return 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)';
      default:
        return 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)';
    }
  };

  const getEmojiForType = (templateType) => {
    switch(templateType) {
      case 1:
      case 4:
      case 7:
        return '🪔';
      case 2:
      case 5:
        return '✨';
      case 3:
      case 6:
        return '🎊';
      default:
        return '🪔';
    }
  };

  const createTemplate = () => {
    // Check if this template has custom HTML/CSS (db-driven template)
    if (fullTemplate?.hasCustomTemplate && fullTemplate.html_template && fullTemplate.css_styles) {
      // Prepare variables for the template
      const templateVariables = {
        IMAGE_URL: fullTemplate.image_url || '',
        FESTIVAL_NAME: selectedFestival?.name?.[i18n.language] || selectedFestival?.name?.en || 'Festival',
        MESSAGE: customization.message || '',
        SIGNATURE_PREFIX: 'With love and light,',
        WISHES_FROM: customization.wishesFrom || ''
      };

      // Use TemplateRenderer to create the dynamic template
      const renderedHtml = TemplateRenderer.renderTemplate(
        fullTemplate.html_template,
        fullTemplate.css_styles,
        templateVariables
      );

      // Return the rendered template as a div with dangerouslySetInnerHTML
      if (renderedHtml) {
        return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
      }
    }

    // Fallback to the original hardcoded template for templates without custom HTML/CSS
    const cardStyle = {
      width: '400px',
      height: '600px',
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      border: '2px solid #f0a500',
      fontFamily: 'Cardo, serif',
      display: 'flex',
      flexDirection: 'column'
    };

    return (
      <div style={cardStyle}>
        {/* Top Image Section */}
        <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
          {fullTemplate?.image_url ? (
            <img 
              src={fullTemplate.image_url}
              alt="Festival decoration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                console.error('Image failed to load:', fullTemplate.image_url);
                e.target.style.display = 'none';
              }}
              crossOrigin="anonymous"
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              background: getCardBackground(selectedTemplate?.template_type),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '72px'
            }}>
              {getEmojiForType(selectedTemplate?.template_type)}
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div style={{ 
          padding: '30px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center'
        }}>
          {/* Festival Title */}
          <h1 style={{
            fontSize: '2.8rem',
            color: '#d45c00',
            margin: '0 0 20px 0',
            fontWeight: '700',
            fontFamily: 'Cardo, serif'
          }}>
            {selectedFestival?.name?.[i18n.language] || selectedFestival?.name?.en}
          </h1>
          
          {/* Message Content */}
          <div style={{
            fontSize: '1.1rem',
            color: '#333',
            lineHeight: '1.6',
            margin: '15px 0',
            flex: 1
          }}>
            {customization.message}
          </div>
          
          {/* Signature */}
          <div style={{
            marginTop: '30px',
            fontStyle: 'italic',
            fontWeight: '700',
            color: '#0c1445',
            fontSize: '1.1rem'
          }}>
            With love and light,<br/>
            {customization.wishesFrom}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        {t('preview')}
      </h2>

      <div className="text-center">
        <div 
          ref={templateRef}
          style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
        >
          {createTemplate()}
        </div>

        <div className="inline-block mb-6 rounded-lg overflow-hidden shadow-lg relative">
          {/* Show loader during template fetch AND image generation */}
          {(isLoadingTemplate || isGenerating) && (
            <div className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-sm z-20 flex items-center justify-center">
              <div className="text-center">
                <div className="relative">
                  {/* Animated festival card mockup */}
                  <div className="w-24 h-36 bg-gradient-to-br from-orange-200 to-pink-200 rounded-lg mb-4 mx-auto border-2 border-orange-300 animate-pulse">
                    <div className="w-full h-16 bg-gradient-to-br from-orange-300 to-pink-300 rounded-t-md"></div>
                    <div className="p-2 space-y-1">
                      <div className="h-2 bg-orange-300 rounded animate-pulse"></div>
                      <div className="h-1.5 bg-orange-200 rounded animate-pulse"></div>
                      <div className="h-1.5 bg-orange-200 rounded w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                  {/* Spinning glow effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-orange-400 animate-spin" style={{ animationDuration: '3s' }}></div>
                </div>
                <p className="text-gray-700 font-medium mt-2">
                  {isLoadingTemplate ? 'Preparing your template...' : 'Creating your beautiful card...'}
                </p>
                <div className="flex justify-center mt-2 space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* Fixed size container to prevent layout shifts */}
          <div className="w-96 h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Show generated image when ready */}
            {generatedImage && !isGenerating ? (
              <img
                src={generatedImage}
                alt="Generated festival greeting"
                className="max-w-sm max-h-[800px] object-contain transition-opacity duration-500 opacity-100"
              />
            ) : (
              /* Placeholder during loading */
              <div className="w-full h-full flex items-center justify-center opacity-20">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <p>Your card will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownload}
            disabled={isGenerating || !generatedImage}
            className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg"
          >
            {t('download')}
          </button>
          
          <button
            onClick={handleShare}
            disabled={isGenerating || !generatedImage}
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg"
          >
            Share Message
          </button>

          <button
            onClick={onBack}
            className="px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-lg"
          >
            Edit Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;