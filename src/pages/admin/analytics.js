import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import DailyFunnelChart from '../../components/DailyFunnelChart';
import ConverterAnalysis from '../../components/ConverterAnalysis';

export default function AnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('7d');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, [timeframe]);

  const fetchAnalytics = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/analytics/summary?timeframe=${timeframe}`);
      if (!response.ok) throw new Error('Failed to fetch analytics');
      const data = await response.json();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const StatCard = ({ title, value, subtitle, icon, color = 'blue' }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4" style={{ borderLeftColor: getColorClass(color) }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{formatNumber(value)}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="text-4xl" style={{ color: getColorClass(color) }}>
          {icon}
        </div>
      </div>
    </div>
  );

  const getColorClass = (color) => {
    const colors = {
      blue: '#3B82F6',
      green: '#10B981',
      purple: '#8B5CF6',
      orange: '#F59E0B',
      red: '#EF4444',
      pink: '#EC4899'
    };
    return colors[color] || colors.blue;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading analytics: {error}</p>
          <button
            onClick={fetchAnalytics}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Analytics Dashboard - Tech For Parents</title>
        <meta name="description" content="Analytics dashboard for festival greetings platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-gray-600 mt-1">Festival Greetings Platform Insights</p>
              </div>

              {/* Timeframe Selector */}
              <div className="flex space-x-2">
                {[
                  { key: '24h', label: 'Last 24h' },
                  { key: '7d', label: 'Last 7 days' },
                  { key: '30d', label: 'Last 30 days' },
                  { key: '90d', label: 'Last 90 days' }
                ].map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setTimeframe(option.key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      timeframe === option.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {analyticsData && (
            <>
              {/* Converter vs Non-Converter Analysis */}
              <div className="mb-8">
                <ConverterAnalysis timeframe={timeframe} />
              </div>

              {/* Charts and Lists */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Popular Festivals */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎉 Popular Festivals</h3>
                  {analyticsData.popularFestivals.length > 0 ? (
                    <div className="space-y-3">
                      {analyticsData.popularFestivals.map((festival, index) => (
                        <div key={festival.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg font-bold text-blue-600">#{index + 1}</span>
                            <span className="font-medium text-gray-900">{festival.name}</span>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {festival.count} selections
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No festival data available</p>
                  )}
                </div>

                {/* Popular Templates */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎨 Popular Templates</h3>
                  {analyticsData.popularTemplates.length > 0 ? (
                    <div className="space-y-3">
                      {analyticsData.popularTemplates.map((template, index) => (
                        <div key={template.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg font-bold text-green-600">#{index + 1}</span>
                            <span className="font-medium text-gray-900">{template.name}</span>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {template.count} selections
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No template data available</p>
                  )}
                </div>
              </div>

              {/* Daily Conversion Funnel */}
              <div className="mt-8">
                <DailyFunnelChart timeframe={timeframe} />
              </div>

              {/* Daily Activity Chart (Simple visualization) */}
              {analyticsData.chartData.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📈 Daily Activity</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Date</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Visits</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Cards Created</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Downloads</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analyticsData.chartData.map((day) => (
                          <tr key={day.date} className="border-b">
                            <td className="px-4 py-2 text-sm text-gray-900">
                              {new Date(day.date).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-2 text-sm text-blue-600 font-medium">{day.visits}</td>
                            <td className="px-4 py-2 text-sm text-green-600 font-medium">{day.cards}</td>
                            <td className="px-4 py-2 text-sm text-purple-600 font-medium">{day.downloads}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Footer Info */}
              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Last updated: {new Date(analyticsData.generatedAt).toLocaleString()}</p>
                <p className="mt-1">Data refreshes every time you change the timeframe</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale = 'en' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}