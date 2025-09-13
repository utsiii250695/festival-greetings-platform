/**
 * Analytics Setup and Visualization Script
 *
 * This script helps set up analytics tracking and provides utilities
 * for data visualization and reporting.
 */

const { supabase } = require('../src/lib/db');

async function setupAnalytics() {
  console.log('🔧 Setting up analytics infrastructure...');

  try {
    // Check if user_interactions table exists and has proper indexes
    console.log('📊 Checking analytics table structure...');

    const { data: interactions, error } = await supabase
      .from('user_interactions')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Error accessing user_interactions table:', error.message);
      return;
    }

    console.log('✅ user_interactions table is accessible');

    // Test analytics API endpoint
    console.log('🌐 Testing analytics API...');

    const response = await fetch('http://localhost:3000/api/analytics/summary?timeframe=7d');
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Analytics API is working');
      console.log('📈 Sample data structure:', {
        totalSessions: data.totalSessions,
        cardsGenerated: data.cardsGenerated,
        popularFestivals: data.popularFestivals.length,
        popularTemplates: data.popularTemplates.length
      });
    } else {
      console.error('❌ Analytics API error:', response.status);
    }

    console.log('🎯 Analytics setup complete!');
    console.log('📍 Access analytics dashboard at: http://localhost:3000/admin/analytics');

  } catch (error) {
    console.error('❌ Setup error:', error);
  }
}

async function generateSampleData() {
  console.log('🎲 Generating sample analytics data...');

  const sampleData = [
    {
      session_id: 'sample_001',
      action: 'page_visit',
      data: { page: '/home', step: 'welcome' },
      ip_address: '127.0.0.1',
      user_agent: 'Mozilla/5.0 Sample Browser'
    },
    {
      session_id: 'sample_001',
      action: 'language_select',
      data: { language: 'hi', availableLanguages: ['en', 'hi', 'gu'] },
      ip_address: '127.0.0.1',
      user_agent: 'Mozilla/5.0 Sample Browser'
    },
    {
      session_id: 'sample_001',
      action: 'festival_select',
      data: { festivalId: 1, festivalName: 'Diwali', festivalSlug: 'diwali' },
      ip_address: '127.0.0.1',
      user_agent: 'Mozilla/5.0 Sample Browser'
    }
  ];

  try {
    for (const interaction of sampleData) {
      const { error } = await supabase
        .from('user_interactions')
        .insert(interaction);

      if (error) {
        console.error('Error inserting sample data:', error);
      } else {
        console.log('✅ Added sample interaction:', interaction.action);
      }
    }
    console.log('🎯 Sample data generation complete!');
  } catch (error) {
    console.error('❌ Sample data error:', error);
  }
}

async function showAnalyticsSummary() {
  console.log('📊 Analytics Summary Report');
  console.log('==========================');

  try {
    // Get basic stats
    const { data: totalInteractions } = await supabase
      .from('user_interactions')
      .select('*', { count: 'exact' });

    const { data: uniqueSessions } = await supabase
      .from('user_interactions')
      .select('session_id')
      .neq('session_id', null);

    const sessionCount = new Set(uniqueSessions?.map(r => r.session_id) || []).size;

    console.log(`📈 Total interactions: ${totalInteractions?.length || 0}`);
    console.log(`👥 Unique sessions: ${sessionCount}`);

    // Get action breakdown
    const { data: actionBreakdown } = await supabase
      .from('user_interactions')
      .select('action')
      .neq('action', null);

    const actions = {};
    actionBreakdown?.forEach(row => {
      actions[row.action] = (actions[row.action] || 0) + 1;
    });

    console.log('\n🎯 Action breakdown:');
    Object.entries(actions).forEach(([action, count]) => {
      console.log(`  ${action}: ${count}`);
    });

    console.log('\n🔗 Quick links:');
    console.log('  • Analytics Dashboard: http://localhost:3000/admin/analytics');
    console.log('  • API Endpoint: http://localhost:3000/api/analytics/summary');

  } catch (error) {
    console.error('❌ Report error:', error);
  }
}

// Main execution
async function main() {
  const command = process.argv[2];

  switch (command) {
    case 'setup':
      await setupAnalytics();
      break;
    case 'sample':
      await generateSampleData();
      break;
    case 'summary':
      await showAnalyticsSummary();
      break;
    default:
      console.log('📊 Analytics Management Script');
      console.log('==============================');
      console.log('Available commands:');
      console.log('  node scripts/analytics-setup.js setup   - Set up analytics infrastructure');
      console.log('  node scripts/analytics-setup.js sample  - Generate sample data');
      console.log('  node scripts/analytics-setup.js summary - Show analytics summary');
      console.log('');
      console.log('🎯 Quick start: Run "setup" first, then "summary" to see current data');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  setupAnalytics,
  generateSampleData,
  showAnalyticsSummary
};