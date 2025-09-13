import { useState, useEffect } from 'react';

export default function DailyFunnelChart({ timeframe = '7d' }) {
  const [funnelData, setFunnelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFunnelData();
  }, [timeframe]);

  const fetchFunnelData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/analytics/daily-funnel?timeframe=${timeframe}`);
      if (!response.ok) throw new Error('Failed to fetch funnel data');
      const data = await response.json();
      setFunnelData(data);
    } catch (error) {
      console.error('Error fetching funnel data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const FunnelStep = ({ label, value, percentage, color, isLast = false }) => (
    <div className="flex flex-col items-center">
      <div className={`w-32 h-16 ${color} rounded-lg flex items-center justify-center text-white font-bold shadow-lg`}>
        <div className="text-center">
          <div className="text-2xl">{value.toLocaleString()}</div>
          <div className="text-xs opacity-90">{label}</div>
        </div>
      </div>
      {!isLast && (
        <div className="mt-2 mb-2">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-700">{percentage}%</div>
            <div className="w-8 h-8 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const DailyRow = ({ day }) => {
    const maxValue = Math.max(
      day.funnel.step1_homepage,
      day.funnel.step2_language,
      day.funnel.step3_festival,
      day.funnel.step4_template,
      day.funnel.step5_generated
    );

    const getBarWidth = (value) => maxValue > 0 ? (value / maxValue) * 100 : 0;

    return (
      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-900">{day.displayDate}</h4>
          <div className="text-sm text-gray-600">
            Overall: {day.conversionRates.overall_conversion}%
          </div>
        </div>

        <div className="space-y-2">
          {[
            { label: 'Homepage', value: day.funnel.step1_homepage, color: 'bg-blue-500' },
            { label: 'Language', value: day.funnel.step2_language, color: 'bg-green-500' },
            { label: 'Festival', value: day.funnel.step3_festival, color: 'bg-yellow-500' },
            { label: 'Template', value: day.funnel.step4_template, color: 'bg-orange-500' },
            { label: 'Generated', value: day.funnel.step5_generated, color: 'bg-red-500' },
          ].map((step, index) => (
            <div key={step.label} className="flex items-center space-x-3">
              <div className="w-20 text-sm font-medium text-gray-700">{step.label}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                <div
                  className={`${step.color} h-4 rounded-full transition-all duration-500`}
                  style={{ width: `${getBarWidth(step.value)}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                  {step.value}
                </div>
              </div>
              <div className="w-12 text-right text-sm font-medium text-gray-600">
                {index > 0 ? `${Object.values(day.conversionRates)[index - 1]}%` : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
          <div className="space-y-4">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading funnel data: {error}</p>
          <button
            onClick={fetchFunnelData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!funnelData || funnelData.dailyFunnels.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Daily Conversion Funnel</h3>
        <div className="text-center py-8">
          <p className="text-gray-500">No funnel data available for the selected timeframe.</p>
          <p className="text-sm text-gray-400 mt-2">Start using the platform to see conversion data!</p>
        </div>
      </div>
    );
  }

  const { summary } = funnelData;

  return (
    <div className="space-y-6">
      {/* Overall Funnel Summary */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
          📊 Overall Conversion Funnel ({timeframe})
        </h3>

        <div className="flex justify-center items-center space-x-4 mb-8">
          <FunnelStep
            label="Homepage"
            value={summary.totalHomepageVisits}
            color="bg-blue-500"
          />
          <FunnelStep
            label="Language"
            value={summary.totalLanguageSelections}
            percentage={summary.overallConversion.homepage_to_language}
            color="bg-green-500"
          />
          <FunnelStep
            label="Festival"
            value={summary.totalFestivalSelections}
            percentage={summary.overallConversion.language_to_festival}
            color="bg-yellow-500"
          />
          <FunnelStep
            label="Template"
            value={summary.totalTemplateSelections}
            percentage={summary.overallConversion.festival_to_template}
            color="bg-orange-500"
          />
          <FunnelStep
            label="Generated"
            value={summary.totalImageGenerations}
            percentage={summary.overallConversion.template_to_generated}
            color="bg-red-500"
            isLast
          />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
            <div className="text-sm font-medium text-blue-700">End-to-End Conversion</div>
            <div className="text-2xl font-bold text-blue-900">
              {summary.overallConversion.end_to_end_conversion}%
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg">
            <div className="text-sm font-medium text-red-700">Biggest Drop-off</div>
            <div className="text-lg font-bold text-red-900">
              {summary.biggestDropOff.step.replace('after_', '').replace('_', ' ')}
            </div>
            <div className="text-sm text-red-600">
              -{summary.biggestDropOff.value.toLocaleString()} users
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
            <div className="text-sm font-medium text-green-700">Active Days</div>
            <div className="text-2xl font-bold text-green-900">
              {funnelData.metadata.activeDays}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Breakdown */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Daily Breakdown</h3>
        <div className="space-y-4">
          {funnelData.dailyFunnels.map((day) => (
            <DailyRow key={day.date} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
}