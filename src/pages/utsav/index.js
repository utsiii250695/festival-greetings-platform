import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
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
  const [currentStep, setCurrentStep] = useState(STEPS.LANGUAGE);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customization, setCustomization] = useState(null);
  const { t } = useTranslation('common');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setCurrentStep(STEPS.FESTIVAL);
  };

  const handleFestivalSelect = (festival) => {
    setSelectedFestival(festival);
    setCurrentStep(STEPS.TEMPLATE);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setCurrentStep(STEPS.CUSTOMIZE);
  };

  const handleCustomize = (customizationData) => {
    setCustomization(customizationData);
    setCurrentStep(STEPS.PREVIEW);
  };

  const handleBackToCustomize = () => {
    setCurrentStep(STEPS.CUSTOMIZE);
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