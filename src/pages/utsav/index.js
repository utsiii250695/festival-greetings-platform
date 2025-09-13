import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import LanguageSelector from '../../components/LanguageSelector';
import FestivalSelector from '../../components/FestivalSelector';
import TemplateGallery from '../../components/TemplateGallery';
import ImageCustomizer from '../../components/ImageCustomizer';
import ImagePreview from '../../components/ImagePreview';

const STEPS = {
  LANGUAGE: 'language',
  FESTIVAL: 'festival',
  TEMPLATE: 'template',
  CUSTOMIZE: 'customize',
  PREVIEW: 'preview'
};

export default function UtsavPage() {
  const router = useRouter();
  const { lang } = router.query;

  const [currentStep, setCurrentStep] = useState(lang ? STEPS.FESTIVAL : STEPS.LANGUAGE);
  const [selectedLanguage, setSelectedLanguage] = useState(lang || 'en');
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customization, setCustomization] = useState(null);
  const [sessionId] = useState(() => uuidv4());
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const { t } = useTranslation('common');

  // Handle language parameter from homepage
  useEffect(() => {
    if (lang && lang !== selectedLanguage) {
      setSelectedLanguage(lang);
      setCurrentStep(STEPS.FESTIVAL);
    }
  }, [lang, selectedLanguage]);

  // Track user interactions with duplicate prevention
  const trackInteraction = async (action, data) => {
    // Create unique key for this action in this session
    const stepKey = `${sessionId}_${action}`;
    
    // Avoid duplicate tracking for the same action in the same session
    if (completedSteps.has(stepKey)) {
      return; // Already tracked this step
    }
    
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          action,
          data
        })
      });
      
      // Mark this step as completed to prevent duplicates
      setCompletedSteps(prev => new Set([...prev, stepKey]));
    } catch (error) {
      console.error('Tracking error:', error);
    }
  };

  // Track page visit only once per session
  useEffect(() => {
    trackInteraction('page_visit', { page: 'utsav' });
  }, []); // Empty dependency array ensures this runs only once

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setCurrentStep(STEPS.FESTIVAL);
    trackInteraction('language_select', { language });
  };

  const handleFestivalSelect = (festival) => {
    setSelectedFestival(festival);
    setCurrentStep(STEPS.TEMPLATE);
    trackInteraction('festival_select', { 
      festivalId: festival.id, 
      festivalName: festival.name 
    });
  };

  const handleTemplateSelect = (template) => {
    console.log('Template selected with image:', template.image_url);
    setSelectedTemplate(template);
    setCurrentStep(STEPS.CUSTOMIZE);
    trackInteraction('template_select', { 
      templateId: template.id, 
      templateName: template.name,
      templateType: template.template_type,
      hasImage: !!template.image_url
    });
  };

  const handleCustomize = (customizationData) => {
    setCustomization(customizationData);
    setCurrentStep(STEPS.PREVIEW);
    trackInteraction('message_customize', { 
      messageLength: customizationData.message.length,
      hasCustomMessage: !customizationData.message.includes('Wishing you'),
      wishesFromLength: customizationData.wishesFrom.length
    });
  };

  const handleBackToCustomize = () => {
    setCurrentStep(STEPS.CUSTOMIZE);
    // Don't track going back as it's not a forward progression
  };

  // Track successful image generation (call this from ImagePreview component)
  const handleImageGenerated = () => {
    trackInteraction('image_generated', {
      festivalId: selectedFestival?.id,
      templateId: selectedTemplate?.id,
      templateType: selectedTemplate?.template_type
    });
  };

  // Track download attempts (call this from ImagePreview component)
  const handleImageDownload = () => {
    trackInteraction('image_download', {
      festivalId: selectedFestival?.id,
      templateId: selectedTemplate?.id,
      success: true
    });
  };

  return (
    <>
      <Head>
        <title>{t('pageTitle')} - Tech For Parents</title>
        <meta name="description" content={t('pageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100">
        {currentStep === STEPS.LANGUAGE && (
          <LanguageSelector onLanguageSelect={handleLanguageSelect} />
        )}

        {currentStep === STEPS.FESTIVAL && (
          <FestivalSelector onFestivalSelect={handleFestivalSelect} />
        )}

        {currentStep === STEPS.TEMPLATE && (
          <TemplateGallery 
            selectedFestival={selectedFestival}
            onTemplateSelect={handleTemplateSelect} 
          />
        )}

        {currentStep === STEPS.CUSTOMIZE && (
          <ImageCustomizer 
            selectedFestival={selectedFestival}
            onCustomize={handleCustomize} 
          />
        )}

        {currentStep === STEPS.PREVIEW && (
          <ImagePreview 
            selectedTemplate={selectedTemplate}
            selectedFestival={selectedFestival}
            customization={customization}
            onBack={handleBackToCustomize}
            onImageGenerated={handleImageGenerated}
            onImageDownload={handleImageDownload}
          />
        )}
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};