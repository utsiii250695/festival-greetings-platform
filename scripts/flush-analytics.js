/**
 * Flush Analytics Data Script
 *
 * This script clears all analytics data from the user_interactions table
 * to start with a clean slate for production data collection.
 */

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables');
  console.log('Make sure you have:');
  console.log('- NEXT_PUBLIC_SUPABASE_URL');
  console.log('- SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function flushAnalyticsData() {
  console.log('🧹 Flushing analytics data...');
  console.log('================================');

  try {
    // First, show current data count
    const { count: beforeCount, error: countError } = await supabase
      .from('user_interactions')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Error counting existing data:', countError.message);
      return;
    }

    console.log(`📊 Current records in user_interactions: ${beforeCount || 0}`);

    if (beforeCount === 0) {
      console.log('✅ No data to flush - table is already empty');
      return;
    }

    // Confirm deletion
    console.log('⚠️  This will permanently delete ALL analytics data');
    console.log('🔄 Proceeding with deletion...');

    // Delete all records from user_interactions table
    const { error: deleteError } = await supabase
      .from('user_interactions')
      .delete()
      .neq('id', 0); // This condition will match all records

    if (deleteError) {
      console.error('❌ Error deleting analytics data:', deleteError.message);
      return;
    }

    // Verify deletion
    const { count: afterCount, error: verifyError } = await supabase
      .from('user_interactions')
      .select('*', { count: 'exact', head: true });

    if (verifyError) {
      console.error('❌ Error verifying deletion:', verifyError.message);
      return;
    }

    console.log(`✅ Successfully deleted ${beforeCount} records`);
    console.log(`📊 Remaining records: ${afterCount || 0}`);

    if (afterCount === 0) {
      console.log('🎉 Analytics data successfully flushed!');
      console.log('🚀 Ready for fresh data collection');
    } else {
      console.log('⚠️  Some records may still remain');
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function showAnalyticsStatus() {
  console.log('📊 Analytics Table Status');
  console.log('========================');

  try {
    const { count, error } = await supabase
      .from('user_interactions')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('❌ Error checking table:', error.message);
      return;
    }

    console.log(`📈 Total records: ${count || 0}`);

    if (count > 0) {
      // Show sample of recent data
      const { data: sample, error: sampleError } = await supabase
        .from('user_interactions')
        .select('action, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      if (!sampleError && sample.length > 0) {
        console.log('\n🔍 Recent activities:');
        sample.forEach((record, index) => {
          console.log(`  ${index + 1}. ${record.action} - ${new Date(record.created_at).toLocaleString()}`);
        });
      }
    } else {
      console.log('✨ Table is empty - ready for fresh data');
    }

  } catch (error) {
    console.error('❌ Status check error:', error.message);
  }
}

// Main execution
async function main() {
  const command = process.argv[2];

  switch (command) {
    case 'flush':
      await flushAnalyticsData();
      break;
    case 'status':
      await showAnalyticsStatus();
      break;
    default:
      console.log('🧹 Analytics Data Management');
      console.log('============================');
      console.log('Available commands:');
      console.log('  node scripts/flush-analytics.js flush   - Delete all analytics data');
      console.log('  node scripts/flush-analytics.js status  - Show current data status');
      console.log('');
      console.log('⚠️  WARNING: "flush" will permanently delete ALL analytics data');
      console.log('🎯 Use "status" first to see what data exists');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}