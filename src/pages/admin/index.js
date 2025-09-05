import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
      return;
    }
    
    fetchAnalytics();
  }, [router]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setAnalytics(data);
      calculateStats(data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const sessions = [...new Set(data.map(item => item.session_id))];
    const totalSessions = sessions.length;

    // Calculate funnel metrics
    const pageVisits = data.filter(item => item.action === 'page_visit').length;
    const languageSelects = data.filter(item => item.action === 'language_select').length;
    const festivalSelects = data.filter(item => item.action === 'festival_select').length;
    const templateSelects = data.filter(item => item.action === 'template_select').length;
    const messageCustomizes = data.filter(item => item.action === 'message_customize').length;
    const imageGenerated = data.filter(item => item.action === 'image_generated').length;
    const imageDownloaded = data.filter(item => item.action === 'image_download').length;

    // Language preferences
    const languages = {};
    data.filter(item => item.action === 'language_select').forEach(item => {
      const lang = item.data?.language || 'unknown';
      languages[lang] = (languages[lang] || 0) + 1;
    });

    // Festival preferences
    const festivals = {};
    data.filter(item => item.action === 'festival_select').forEach(item => {
      const festivalName = item.data?.festivalName?.en || 'unknown';
      festivals[festivalName] = (festivals[festivalName] || 0) + 1;
    });

    // Template preferences
    const templates = {};
    data.filter(item => item.action === 'template_select').forEach(item => {
      const templateName = item.data?.templateName || 'unknown';
      templates[templateName] = (templates[templateName] || 0) + 1;
    });

    setStats({
      totalSessions,
      pageVisits,
      languageSelects,
      festivalSelects,
      templateSelects,
      messageCustomizes,
      imageGenerated,
      imageDownloaded,
      languages,
      festivals,
      templates,
      conversionRates: {
        languageSelection: pageVisits > 0 ? Math.round((languageSelects / pageVisits) * 100) : 0,
        festivalSelection: languageSelects > 0 ? Math.round((festivalSelects / languageSelects) * 100) : 0,
        templateSelection: festivalSelects > 0 ? Math.round((templateSelects / festivalSelects) * 100) : 0,
        messageCustomization: templateSelects > 0 ? Math.round((messageCustomizes / templateSelects) * 100) : 0,
        imageGeneration: messageCustomizes > 0 ? Math.round((imageGenerated / messageCustomizes) * 100) : 0,
        imageDownload: imageGenerated > 0 ? Math.round((imageDownloaded / imageGenerated) * 100) : 0,
      }
    });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminLoggedIn');
    router.push('/admin/login');
  };

  const renderBarChart = (data, title, color = 'bg-blue-500') => {
    const maxValue = Math.max(...Object.values(data));
    
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="space-y-3">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <div className="w-20 text-sm text-gray-600 mr-4">{key}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                <div 
                  className={`${color} h-6 rounded-full flex items-center justify-end pr-2`}
                  style={{ width: `${maxValue > 0 ? (value / maxValue) * 100 : 0}%` }}
                >
                  <span className="text-white text-xs font-medium">{value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFunnel = () => {
    const funnelData = [
      { step: 'Page Visits', count: stats.pageVisits, percentage: 100 },
      { step: 'Language Selected', count: stats.languageSelects, percentage: stats.conversionRates.languageSelection },
      { step: 'Festival Selected', count: stats.festivalSelects, percentage: stats.conversionRates.festivalSelection },
      { step: 'Template Selected', count: stats.templateSelects, percentage: stats.conversionRates.templateSelection },
      { step: 'Message Customized', count: stats.messageCustomizes, percentage: stats.conversionRates.messageCustomization },
      { step: 'Image Generated', count: stats.imageGenerated, percentage: stats.conversionRates.imageGeneration },
      { step: 'Image Downloaded', count: stats.imageDownloaded, percentage: stats.conversionRates.imageDownload },
    ];

    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Conversion Funnel (7 Steps)</h3>
        <div className="space-y-4">
          {funnelData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-40 text-sm text-gray-600">{item.step}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 h-8 rounded-full flex items-center justify-between px-3"
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="text-white text-sm font-medium">{item.count}</span>
                  <span className="text-white text-sm">{item.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Festival Greetings</title>
      </Head>
      
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold">Festival Greetings Admin</h1>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="/utsav" 
                  target="_blank"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                >
                  View App
                </a>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Analytics Dashboard</h2>
              <p className="text-gray-600">Track user engagement and app performance</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-orange-600">{stats.totalSessions}</div>
                <div className="text-gray-600">Total Sessions</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">{stats.pageVisits}</div>
                <div className="text-gray-600">Page Visits</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-green-600">{stats.imageGenerated}</div>
                <div className="text-gray-600">Images Created</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-purple-600">
                  {stats.pageVisits > 0 ? Math.round((stats.imageGenerated / stats.pageVisits) * 100) : 0}%
                </div>
                <div className="text-gray-600">Conversion Rate</div>
              </div>
            </div>

            {/* Funnel Chart */}
            <div className="mb-8">
              {renderFunnel()}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {Object.keys(stats.languages || {}).length > 0 && 
                renderBarChart(stats.languages, 'Language Preferences', 'bg-blue-500')
              }
              {Object.keys(stats.festivals || {}).length > 0 && 
                renderBarChart(stats.festivals, 'Popular Festivals', 'bg-green-500')
              }
              {Object.keys(stats.templates || {}).length > 0 && 
                renderBarChart(stats.templates, 'Template Usage', 'bg-purple-500')
              }
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
              </div>
              <div className="overflow-x-auto">
                {analytics.length === 0 ? (
                  <div className="px-6 py-8 text-center text-gray-500">
                    No activity yet. Use the app to generate data!
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Details
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {analytics.slice(0, 20).map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                              {item.action.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                            {item.data ? (
                              Object.entries(item.data).map(([key, value]) => (
                                <span key={key} className="mr-2">
                                  {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
                                </span>
                              ))
                            ) : (
                              '-'
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(item.created_at).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}