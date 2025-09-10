const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};

envContent.split('\n').forEach(line => {
  if (line && !line.startsWith('#')) {
    const [key, value] = line.split('=');
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  }
});

const supabaseUrl = envVars.SUPABASE_URL;
const supabaseAnonKey = envVars.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration. Make sure SUPABASE_URL and SUPABASE_ANON_KEY are set in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function addNavratriTemplate3() {
  try {
    console.log('Adding third Navratri template...');

    // First, get the Navratri festival ID
    const { data: festivals, error: festivalError } = await supabase
      .from('festivals')
      .select('id')
      .eq('slug', 'navratri')
      .single();

    if (festivalError) {
      console.error('Error fetching Navratri festival:', festivalError);
      return;
    }

    const navratriFestivalId = festivals.id;
    console.log(`Found Navratri festival with ID: ${navratriFestivalId}`);

    // Template data with positioning at 560x580 and 400x400 text box, red text
    const templateData = {
      name: 'Maa Durga - 3',
      festival_id: navratriFestivalId,
      template_type: 3,
      image_url: 'https://lchynldakskutczmaowu.supabase.co/storage/v1/object/public/template-images/Orange%20and%20White%20Watercolor%20Navratri%20Greetings%20Instagram%20Post.png',
      html_template: `<div class="festival-card">
  <div class="background-image">
    <img src="{{IMAGE_URL}}" alt="Background" />
  </div>
  <div class="text-content">
    <div class="message">{{MESSAGE}}</div>
    <div class="wishes-from">{{WISHES_FROM}}</div>
  </div>
</div>`,
      css_styles: `.festival-card {
  position: relative;
  width: 1080px;
  height: 1350px;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-content {
  position: absolute;
  left: 560px;
  top: 580px;
  width: 400px;
  height: 400px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.message {
  color: #DC2626;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
}

.wishes-from {
  color: #DC2626;
  font-size: 22px;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
}`,
      is_active: true,
      display_order: 3
    };

    // Insert the template
    const { data: insertedTemplate, error: templateError } = await supabase
      .from('templates')
      .insert([templateData])
      .select()
      .single();

    if (templateError) {
      console.error('Error inserting template:', templateError);
      return;
    }

    console.log(`Template inserted with ID: ${insertedTemplate.id}`);

    // Add template variables
    const templateVariables = [
      {
        template_id: insertedTemplate.id,
        variable_name: 'MESSAGE',
        variable_type: 'text',
        default_value: 'Happy Navratri! May Maa Durga bless you with strength and prosperity',
        is_required: true,
        display_order: 1
      },
      {
        template_id: insertedTemplate.id,
        variable_name: 'WISHES_FROM',
        variable_type: 'text',
        default_value: 'From: Your Family',
        is_required: true,
        display_order: 2
      },
      {
        template_id: insertedTemplate.id,
        variable_name: 'IMAGE_URL',
        variable_type: 'text',
        default_value: templateData.image_url,
        is_required: false,
        display_order: 3
      }
    ];

    const { data: insertedVariables, error: variablesError } = await supabase
      .from('template_variables')
      .insert(templateVariables)
      .select();

    if (variablesError) {
      console.error('Error inserting template variables:', variablesError);
      return;
    }

    console.log(`Inserted ${insertedVariables.length} template variables`);
    console.log('✅ Third Navratri template added successfully!');
    
    console.log('\nTemplate details:');
    console.log(`- Name: ${templateData.name}`);
    console.log(`- Template Type: ${templateData.template_type}`);
    console.log(`- Text Position: 560x580`);
    console.log(`- Text Box Size: 400x400`);
    console.log(`- Text Color: Red (#DC2626)`);
    console.log(`- Background Image: ${templateData.image_url}`);

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Run the script
addNavratriTemplate3();