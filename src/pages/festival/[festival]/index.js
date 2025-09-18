import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import TemplateGallery from '../../../components/TemplateGallery';
import analytics from '../../../utils/analytics';

export default function TemplateSelectionPage() {
  const router = useRouter();
  const { festival: festivalSlug } = router.query;
  const { locale } = router;
  const { t } = useTranslation('common');
  const [selectedFestival, setSelectedFestival] = useState(null);

  console.log('Router query:', router.query);
  console.log('Festival slug:', festivalSlug);
  console.log('Locale:', locale);

  useEffect(() => {
    const fetchFestival = async () => {
      if (festivalSlug) {
        console.log('Fetching festival for slug:', festivalSlug);
        try {
          const response = await fetch('/api/festivals');
          const festivals = await response.json();
          console.log('Festivals fetched:', festivals);
          const festival = festivals.find(f => f.slug === festivalSlug);
          console.log('Found festival:', festival);
          setSelectedFestival(festival);

          // Track page view once festival is loaded
          if (festival) {
            analytics.trackPageView(`/festival/${festivalSlug}`, {
              step: 'template_selection',
              locale: locale,
              festivalId: festival.id,
              festivalName: festival.name?.[locale] || festival.name?.en
            });
          }
        } catch (error) {
          console.error('Error fetching festival:', error);
        }
      }
    };

    fetchFestival();
  }, [festivalSlug, locale]);

  const handleTemplateSelect = (template) => {
    // Track template selection
    analytics.trackTemplateSelect(template, selectedFestival);

    // Navigate to: /[locale]/festival/[festival]/template-editor?template=template_id
    router.push(`/${locale}/festival/${festivalSlug}/template-editor?template=${template.id}`);
  };

  if (!selectedFestival) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200 flex items-center justify-center">
        <div>Loading templates...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{selectedFestival?.name?.[locale] || selectedFestival?.name?.en} - Template Selection</title>
        <meta name="description" content="Choose a beautiful template for your festival greeting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200">
        <div className="container mx-auto px-4 py-6">
          {/* Home Button */}
          <div className="mb-6">
            <button
              onClick={() => router.push('/home')}
              className="flex items-center px-4 py-2 bg-white text-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:bg-blue-50 border border-blue-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </button>
          </div>
        </div>

        <TemplateGallery
          selectedFestival={selectedFestival}
          onTemplateSelect={handleTemplateSelect}
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