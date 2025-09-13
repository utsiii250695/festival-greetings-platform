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

async function addNavratriTemplate4() {
  try {
    console.log('Adding fourth Navratri template with brown styling...');

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

    // Template data with positioning at 250x1200 and 500x400 text box, brown text
    const templateData = {
      name: 'Brown & Yellow Minimalist',
      festival_id: navratriFestivalId,
      template_type: 4,
      image_url: 'https://lchynldakskutczmaowu.supabase.co/storage/v1/object/public/template-images/Brown%20and%20Yellow%20Minimalist%20Happy%20Navratri%20Greeting%20Instagram%20Story.png',
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
  left: 250px;
  top: 1200px;
  width: 500px;
  height: 400px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.message {
  color: #8B4513;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
}

.wishes-from {
  color: #8B4513;
  font-size: 22px;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
}`,
      is_active: true,
      display_order: 4
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
    console.log('✅ Fourth Navratri template added successfully!');
    
    console.log('\nTemplate details:');
    console.log(`- Name: ${templateData.name}`);
    console.log(`- Template Type: ${templateData.template_type}`);
    console.log(`- Text Position: 250x1200`);
    console.log(`- Text Box Size: 500x400`);
    console.log(`- Text Color: Brown (#8B4513)`);
    console.log(`- Background Image: ${templateData.image_url}`);

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Run the script
addNavratriTemplate4();