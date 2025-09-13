import { useState, useEffect } from 'react';

export default function ConverterAnalysis({ timeframe = '7d' }) {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalysisData();
  }, [timeframe]);

  const fetchAnalysisData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/analytics/converter-analysis?timeframe=${timeframe}`);
      if (!response.ok) throw new Error('Failed to fetch converter analysis');
      const data = await response.json();
      setAnalysisData(data);
    } catch (error) {
      console.error('Error fetching converter analysis:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const BreakdownCard = ({ title, data, color, icon, type = 'default' }) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-${color}-500`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-gray-900 flex items-center">
          <span className="text-2xl mr-2">{icon}</span>
          {title}
        </h4>
      </div>

      {data.length > 0 ? (
        <div className="space-y-3">
          {data.slice(0, 5).map((item, index) => {
            const label = item.language || item.festival || item.template || item.point;
            const value = item.count;
            const percentage = item.percentage;

            return (
              <div key={label} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full bg-${color}-${100 + index * 100} flex items-center justify-center text-xs font-bold text-${color}-800`}>
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">
                    {label === 'en' ? 'English' : label === 'hi' ? 'हिंदी' : label === 'gu' ? 'ગુજરાતી' : label}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{value}</div>
                  <div className={`text-sm text-${color}-600`}>{percentage}%</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-4">No data available</p>
      )}
    </div>
  );

  const SummaryCard = ({ title, value, subtitle, color, icon }) => (
    <div className={`bg-gradient-to-r from-${color}-50 to-${color}-100 rounded-lg p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-${color}-700 text-sm font-medium`}>{title}</p>
          <p className={`text-3xl font-bold text-${color}-900`}>{value}</p>
          {subtitle && <p className={`text-sm text-${color}-600 mt-1`}>{subtitle}</p>}
        </div>
        <div className={`text-4xl text-${color}-600`}>
          {icon}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-200 h-32 rounded-lg"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-200 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading converter analysis: {error}</p>
          <button
            onClick={fetchAnalysisData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!analysisData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center py-8">
          <p className="text-gray-500">No converter analysis data available.</p>
        </div>
      </div>
    );
  }

  const { summary, converters, nonConverters, insights } = analysisData;

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">👥 Converter vs Non-Converter Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard
            title="Total Sessions"
            value={summary.totalSessions.toLocaleString()}
            subtitle="All user sessions"
            color="blue"
            icon="👥"
          />
          <SummaryCard
            title="Converters"
            value={converters.count.toLocaleString()}
            subtitle={`${summary.conversionRate}% conversion rate`}
            color="green"
            icon="✅"
          />
          <SummaryCard
            title="Non-Converters"
            value={nonConverters.count.toLocaleString()}
            subtitle={`${100 - summary.conversionRate}% drop-off rate`}
            color="red"
            icon="❌"
          />
        </div>
      </div>

      {/* Converter Analysis */}
      <div>
        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
          ✅ Converters Analysis ({converters.count} sessions)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BreakdownCard
            title="Language Preferences"
            data={converters.languages}
            color="green"
            icon="🌍"
          />
          <BreakdownCard
            title="Festival Preferences"
            data={converters.festivals}
            color="green"
            icon="🎉"
          />
          <BreakdownCard
            title="Template Preferences"
            data={converters.templates}
            color="green"
            icon="🎨"
          />
        </div>
      </div>

      {/* Non-Converter Analysis */}
      <div>
        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
          ❌ Non-Converters Analysis ({nonConverters.count} sessions)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 gap-6">
            <BreakdownCard
              title="Language Preferences"
              data={nonConverters.languages}
              color="red"
              icon="🌍"
            />
            <BreakdownCard
              title="Festival Preferences"
              data={nonConverters.festivals}
              color="red"
              icon="🎉"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <BreakdownCard
              title="Template Attempts"
              data={nonConverters.templates}
              color="red"
              icon="🎨"
            />
            <BreakdownCard
              title="Drop-off Points"
              data={nonConverters.dropOffPoints}
              color="red"
              icon="🚪"
            />
          </div>
        </div>
      </div>

      {/* Key Insights */}
      {summary.totalSessions > 0 && (
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-l-4 border-purple-500">
          <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center">
            💡 Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Language Preferences</h4>
              <p className="text-purple-700">
                <strong>Converters prefer:</strong> {insights.preferredLanguageByConverters === 'en' ? 'English' : insights.preferredLanguageByConverters === 'hi' ? 'हिंदी' : insights.preferredLanguageByConverters === 'gu' ? 'ગુજરાતી' : insights.preferredLanguageByConverters}
              </p>
              <p className="text-purple-700">
                <strong>Non-converters prefer:</strong> {insights.preferredLanguageByNonConverters === 'en' ? 'English' : insights.preferredLanguageByNonConverters === 'hi' ? 'हिंदी' : insights.preferredLanguageByNonConverters === 'gu' ? 'ગુજરાતી' : insights.preferredLanguageByNonConverters}
              </p>
              {insights.languageDifference && (
                <p className="text-purple-600 text-sm mt-1">⚠️ Different language preferences detected</p>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">Festival Preferences</h4>
              <p className="text-purple-700">
                <strong>Converters prefer:</strong> {insights.topFestivalForConverters}
              </p>
              <p className="text-purple-700">
                <strong>Non-converters prefer:</strong> {insights.topFestivalForNonConverters}
              </p>
              <p className="text-purple-600 text-sm mt-1">
                💡 Most non-converters drop off after: {nonConverters.mostCommonDropOff}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}