import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import FestivalSelector from '../../components/FestivalSelector';
import analytics from '../../utils/analytics';

export default function FestivalPage() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  useEffect(() => {
    // Track page view
    analytics.trackPageView('/festival', {
      step: 'festival_selection',
      locale: locale
    });
  }, [locale]);

  const handleFestivalSelect = (festival) => {
    // Track festival selection
    analytics.trackFestivalSelect(festival);

    // Navigate to: /[locale]/festival/[festival] with explicit locale prefix
    router.push(`/${locale}/festival/${festival.slug}`);
  };

  return (
    <>
      <Head>
        <title>Festival Selection - {locale?.toUpperCase()}</title>
        <meta name="description" content="Choose your festival" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200">
        <div className="container mx-auto px-4 py-8">
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

          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Festival Selection
          </h1>
          <p className="text-center mb-8 text-gray-700">
            Language: <span className="font-bold">{locale?.toUpperCase()}</span>
          </p>

          <FestivalSelector onFestivalSelect={handleFestivalSelect} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}