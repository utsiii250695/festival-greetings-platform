import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import analytics from '../../utils/analytics';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeStep, setWelcomeStep] = useState(0);
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  useEffect(() => {
    // Track page view
    analytics.trackPageView('/home', { step: 'welcome' });

    // Welcome animation sequence
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      analytics.trackPageView('/home', { step: 'language_selection' });
    }, 5000);

    // Step animation for welcome sequence
    const stepTimer = setInterval(() => {
      setWelcomeStep(prev => (prev + 1) % 4);
    }, 1000);

    return () => {
      clearTimeout(welcomeTimer);
      clearInterval(stepTimer);
    };
  }, []);

  const getGreeting = () => {
    const greetings = [
      "नमस्ते",  // Hindi
      "Namaste", // English
      "નમસ્તે"    // Gujarati
    ];

    return greetings[welcomeStep % 3];
  };

  const startCardCreation = () => {
    router.push('/utsav');
  };

  if (showWelcome) {
    return (
      <>
        <Head>
          <title>Tech For Parents - Festival Greetings</title>
          <meta name="description" content="Create beautiful festival greeting cards for your family" />
        </Head>

        <div className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200 flex items-center justify-center relative">
          {/* Welcome content */}
          <div className="text-center px-8">
            <div className="mb-8">
              <div className="text-8xl mb-8">🙏</div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                {getGreeting()}
              </h1>
              <div className="flex justify-center space-x-2 mt-8">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      dot === welcomeStep % 3 ? 'bg-orange-500 scale-125' : 'bg-orange-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const selectLanguage = (language) => {
    // Track language selection
    analytics.trackLanguageSelect(language);

    // Redirect to festival page with explicit language prefix
    // Force the URL to always include the language prefix
    router.push(`/${language}/festival`);
  };

  return (
    <>
      <Head>
        <title>Tech For Parents - Festival Greetings</title>
        <meta name="description" content="Create beautiful festival greeting cards for your family" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-green-200 flex items-center justify-center relative overflow-hidden">

        {/* Main content */}
        <div className="relative z-10 w-full max-w-lg mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-6 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-4 leading-relaxed py-2">
              Festival Greetings
            </h1>
            <p className="text-gray-700 text-lg mb-2">त्योहारों की शुभकामनाएं</p>
            <p className="text-gray-600">Choose your language to get started</p>
          </div>

          {/* Language selection */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-300">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Select Language / भाषा चुनें / ભાષા પસંદ કરો
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => selectLanguage('en')}
                className="w-full p-5 text-left border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-102 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg text-gray-800 group-hover:text-orange-700">English</div>
                    <div className="text-sm text-gray-600">Create festival cards in English</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => selectLanguage('hi')}
                className="w-full p-5 text-left border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-102 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg text-gray-800 group-hover:text-orange-700">हिंदी</div>
                    <div className="text-sm text-gray-600">हिंदी में त्योहार कार्ड बनाएं</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => selectLanguage('gu')}
                className="w-full p-5 text-left border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-102 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg text-gray-800 group-hover:text-orange-700">ગુજરાતી</div>
                    <div className="text-sm text-gray-600">ગુજરાતીમાં તહેવાર કાર્ડ બનાવો</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center mt-8 pb-8 text-gray-600">
            <p className="text-sm">Made with love for Indian families</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0px); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
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