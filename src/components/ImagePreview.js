import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useTranslation } from 'next-i18next';

const ImagePreview = ({ selectedTemplate, selectedFestival, customization, onBack, onImageGenerated, onImageDownload }) => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [fullTemplate, setFullTemplate] = useState(null);
  const templateRef = useRef(null);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    console.log('ImagePreview received template:', selectedTemplate);
    console.log('Template image URL:', selectedTemplate?.image_url);
    
    const fetchTemplateData = async () => {
      if (selectedTemplate?.id) {
        try {
          const response = await fetch(`/api/templates?festivalId=${selectedFestival.id}`);
          const templates = await response.json();
          const currentTemplate = templates.find(t => t.id === selectedTemplate.id);
          setFullTemplate(currentTemplate);
          console.log('Full template data fetched:', currentTemplate);
        } catch (error) {
          console.error('Error fetching template data:', error);
        }
      }
    };

    fetchTemplateData();
  }, [selectedTemplate, selectedFestival]);

  useEffect(() => {
    if (fullTemplate) {
      generateImage();
    }
  }, [fullTemplate]);

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      setTimeout(async () => {
        const canvas = await html2canvas(templateRef.current, {
          width: 400,
          height: 600,
          scale: 2,
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

        <div className="inline-block mb-6 rounded-lg overflow-hidden shadow-lg">
          {isGenerating ? (
            <div className="w-96 h-[600px] flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Generating your image...</p>
              </div>
            </div>
          ) : generatedImage ? (
            <img 
              src={generatedImage} 
              alt="Generated festival greeting" 
              className="w-96 h-[600px] object-cover"
            />
          ) : (
            createTemplate()
          )}
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