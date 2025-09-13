import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import ImageCustomizer from '../../../components/ImageCustomizer';
import analytics from '../../../utils/analytics';

export default function TemplateEditorPage() {
  const router = useRouter();
  const { festival: festivalSlug, template: templateId, locale } = router.query;
  const { t } = useTranslation('common');
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

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

            // Track page view once data is loaded
            if (template) {
              analytics.trackPageView(`/festival/${festivalSlug}/template-editor`, {
                step: 'message_customization',
                locale: router.locale,
                festivalId: festival.id,
                festivalName: festival.name?.[router.locale] || festival.name?.en,
                templateId: template.id,
                templateName: template.name
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

  const handleCustomize = (customizationData) => {
    // Track message customization
    analytics.trackMessageCustomize(customizationData, selectedTemplate, selectedFestival);

    // Navigate to: /[locale]/festival/[festival]/preview?template=template_id
    // Store customization data in session storage for the preview page
    sessionStorage.setItem('customization', JSON.stringify(customizationData));
    router.push(`/${router.locale}/festival/${festivalSlug}/preview?template=${templateId}`);
  };

  if (!selectedFestival || !selectedTemplate) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200 flex items-center justify-center">
        <div>Loading editor...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{selectedTemplate.name} - Customize Your Message</title>
        <meta name="description" content="Customize your festival greeting message" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200">
        <ImageCustomizer
          selectedFestival={selectedFestival}
          onCustomize={handleCustomize}
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