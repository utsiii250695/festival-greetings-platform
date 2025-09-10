// Query current Navratri messages from the database
// Run with: node scripts/query-navratri-messages.js

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Read environment variables from .env.local file
function loadEnvFile() {
  try {
    const envPath = path.join(__dirname, '..', '.env.local');
    const envFile = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envFile.split('\n').forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length) {
          envVars[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
        }
      }
    });
    
    return envVars;
  } catch (error) {
    console.error('Error reading .env.local file:', error.message);
    return {};
  }
}

const env = loadEnvFile();
const supabaseUrl = env.SUPABASE_URL;
const supabaseAnonKey = env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Check your .env.local file.');
  console.error('Expected: SUPABASE_URL and SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function queryNavratriMessages() {
  try {
    console.log('Querying Navratri messages (festival_id = 3)...\n');
    
    // Query messages for Navratri (festival_id = 3)
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*')
      .eq('festival_id', 3)
      .eq('is_active', true)
      .order('display_order');

    if (error) {
      throw error;
    }

    if (!messages || messages.length === 0) {
      console.log('No active Navratri messages found in the database.');
      return;
    }

    console.log(`Found ${messages.length} active Navratri messages:\n`);
    console.log('=' .repeat(80));

    messages.forEach((message, index) => {
      console.log(`Message ${index + 1} (ID: ${message.id}, Display Order: ${message.display_order})`);
      console.log('Content:');
      
      // Parse content JSON
      const content = typeof message.content === 'string' 
        ? JSON.parse(message.content) 
        : message.content;
      
      // Display each language with word count
      Object.keys(content).forEach(lang => {
        const text = content[lang];
        const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
        console.log(`  ${lang.toUpperCase()}: "${text}" (${wordCount} words)`);
      });
      
      console.log(`Created: ${new Date(message.created_at).toLocaleString()}`);
      console.log('-'.repeat(80));
    });

    // Summary statistics
    console.log('\nSUMMARY STATISTICS:');
    console.log('===================');
    
    messages.forEach((message, index) => {
      const content = typeof message.content === 'string' 
        ? JSON.parse(message.content) 
        : message.content;
      
      console.log(`\nMessage ${index + 1} word counts:`);
      Object.keys(content).forEach(lang => {
        const wordCount = content[lang].split(/\s+/).filter(word => word.length > 0).length;
        console.log(`  ${lang.toUpperCase()}: ${wordCount} words`);
      });
    });

  } catch (error) {
    console.error('Error querying messages:', error.message);
    process.exit(1);
  }
}

// Run the query
queryNavratriMessages();