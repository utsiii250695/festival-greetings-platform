import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import ImagePreview from '../../../components/ImagePreview';
import analytics from '../../../utils/analytics';

export default function PreviewPage() {
  const router = useRouter();
  const { festival: festivalSlug, template: templateId, locale } = router.query;
  const { t } = useTranslation('common');
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customization, setCustomization] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (festivalSlug && templateId) {
        try {
          // Fetch festival
          const festivalsResponse = await fetch('/api/festivals');
          const festivals = await festivalsResponse.json();
          const festival = festivals.find(f => f.slug === festivalSlug);
          setSelectedFestival(festival);

          // Fetch template
          if (festival) {
            const templatesResponse = await fetch(`/api/templates?festivalId=${festival.id}`);
            const templates = await templatesResponse.json();
            const template = templates.find(t => t.id === parseInt(templateId));
            setSelectedTemplate(template);
          }

          // Get customization from session storage
          const storedCustomization = sessionStorage.getItem('customization');
          if (storedCustomization) {
            const customData = JSON.parse(storedCustomization);
            setCustomization(customData);

            // Track page view once all data is loaded
            if (festival && template) {
              analytics.trackPageView(`/festival/${festivalSlug}/preview`, {
                step: 'final_preview',
                locale: router.locale,
                festivalId: festival.id,
                festivalName: festival.name?.[router.locale] || festival.name?.en,
                templateId: template.id,
                templateName: template.name,
                hasCustomMessage: !customData.message?.includes('Wishing you'),
                messageLength: customData.message?.length || 0
              });
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [festivalSlug, templateId]);

  const handleBackToCustomize = () => {
    // Go back to template editor with locale prefix
    router.push(`/${router.locale}/festival/${festivalSlug}/template-editor?template=${templateId}`);
  };

  const handleImageGenerated = () => {
    // Track image generation
    analytics.trackImageGenerated(selectedTemplate, selectedFestival, customization);
  };

  const handleImageDownload = (format = 'png') => {
    // Track image download
    analytics.trackImageDownload(selectedTemplate, selectedFestival, format);
  };

  if (!selectedFestival || !selectedTemplate || !customization) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200 flex items-center justify-center">
        <div>Loading preview...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Preview Your {selectedFestival?.name?.[locale] || selectedFestival?.name?.en} Greeting</title>
        <meta name="description" content="Preview and download your festival greeting card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200">
        <ImagePreview
          selectedTemplate={selectedTemplate}
          selectedFestival={selectedFestival}
          customization={customization}
          onBack={handleBackToCustomize}
          onImageGenerated={handleImageGenerated}
          onImageDownload={handleImageDownload}
        />
      </main>
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}