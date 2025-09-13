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