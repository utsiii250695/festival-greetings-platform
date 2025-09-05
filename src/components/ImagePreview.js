import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useTranslation } from 'next-i18next';

const ImagePreview = ({ selectedTemplate, selectedFestival, customization, onBack }) => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const templateRef = useRef(null);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    generateImage();
  }, []);

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      // Wait a moment for the DOM to render
      setTimeout(async () => {
        const canvas = await html2canvas(templateRef.current, {
          width: 400,
          height: 400,
          scale: 2,
          backgroundColor: null
        });
        
        const imageDataUrl = canvas.toDataURL('image/png');
        setGeneratedImage(imageDataUrl);
        setIsGenerating(false);
      }, 100);
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
  };

  const handleShare = async () => {
  if (!generatedImage) return;
  
  try {
    // Convert data URL to blob for sharing
    const response = await fetch(generatedImage);
    const blob = await response.blob();
    const file = new File([blob], 'festival-greeting.png', { type: 'image/png' });
    
    // Check if we can share files
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: 'Festival Greeting',
        text: customization.message
      });
    } else {
      // Fallback: open WhatsApp with just the text message
      const message = `${customization.message}\n\n- ${customization.wishesFrom}`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  } catch (error) {
    console.error('Sharing failed:', error);
    // Fallback to WhatsApp with text only
    const message = `${customization.message}\n\n- ${customization.wishesFrom}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
};

  // Create the template with user's data
  const createTemplate = () => {
    const baseStyle = {
      width: '400px',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '20px',
      fontFamily: 'Poppins, sans-serif',
      textAlign: 'center'
    };

    let backgroundStyle = {};
    let emoji = '';
    
    // Different styles based on selected template
    switch(selectedTemplate?.id) {
      case 1: // Golden Glow
        backgroundStyle = { background: 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)' };
        emoji = '🪔';
        break;
      case 2: // Royal Purple
        backgroundStyle = { background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)' };
        emoji = '✨';
        break;
      case 3: // Traditional Red
        backgroundStyle = { background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)' };
        emoji = '🎊';
        break;
      default:
        backgroundStyle = { background: 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)' };
        emoji = '🪔';
    }

    return (
      <div style={{...baseStyle, ...backgroundStyle}}>
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>{emoji}</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          {selectedFestival?.name?.[i18n.language] || selectedFestival?.name?.en}
        </div>
        <div style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.4' }}>
          {customization.message}
        </div>
        <div style={{ fontSize: '16px', fontStyle: 'italic' }}>
          - {customization.wishesFrom}
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
        {/* Hidden template for image generation */}
        <div 
          ref={templateRef}
          style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
        >
          {createTemplate()}
        </div>

        {/* Preview display */}
        <div className="inline-block mb-6 border rounded-lg overflow-hidden shadow-lg">
          {isGenerating ? (
            <div className="w-96 h-96 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Generating your image...</p>
              </div>
            </div>
          ) : generatedImage ? (
            <img 
              src={generatedImage} 
              alt="Generated festival greeting" 
              className="w-96 h-96 object-cover"
            />
          ) : (
            createTemplate()
          )}
        </div>

        {/* Action buttons */}
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
            {t('shareWhatsApp')}
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