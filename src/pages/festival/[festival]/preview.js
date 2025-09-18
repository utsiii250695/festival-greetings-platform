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
        <div className="container mx-auto px-4 py-4 sm:py-6">
          {/* Home Button */}
          <div className="mb-4 sm:mb-6">
            <button
              onClick={() => router.push('/home')}
              className="flex items-center px-3 sm:px-4 py-2 bg-white text-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:bg-blue-50 border border-blue-200 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </button>
          </div>
        </div>

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