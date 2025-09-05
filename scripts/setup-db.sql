// scripts/setup-db.sql
-- Run this script in your Supabase SQL editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Languages table
CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  code VARCHAR(10) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  native_name VARCHAR(50) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert default languages
INSERT INTO languages (code, name, native_name) VALUES
('en', 'English', 'English'),
('hi', 'Hindi', 'हिंदी'),
('gu', 'Gujarati', 'ગુજરાતી');

-- Festivals table
CREATE TABLE festivals (
  id SERIAL PRIMARY KEY,
  name JSONB NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description JSONB,
  is_active BOOLEAN DEFAULT true,
  start_date DATE,
  end_date DATE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Sample festivals
INSERT INTO festivals (name, slug, description, is_active, display_order) VALUES
('{"en": "Diwali", "hi": "दीवाली", "gu": "દિવાળી"}', 'diwali', '{"en": "Festival of Lights", "hi": "रोशनी का त्योहार", "gu": "પ્રકાશનો તહેવાર"}', true, 1),
('{"en": "Dhanteras", "hi": "धनतेरस", "gu": "ધનતેરસ"}', 'dhanteras', '{"en": "Festival of Wealth", "hi": "धन का त्योहार", "gu": "ધનનો તહેવાર"}', true, 2),
('{"en": "Navratri", "hi": "नवरात्रि", "gu": "નવરાત્રી"}', 'navratri', '{"en": "Nine Nights Festival", "hi": "नौ रातों का त्योहार", "gu": "નવ રાત્રિનો તહેવાર"}', true, 3);

-- Templates table
CREATE TABLE templates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  festival_id INTEGER REFERENCES festivals(id),
  html_content TEXT NOT NULL,
  css_content TEXT NOT NULL,
  thumbnail_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Sample templates
INSERT INTO templates (name, festival_id, html_content, css_content, is_active, display_order) VALUES
('Golden Diwali', 1, '<div class="template-container"><div class="header">{{FESTIVAL_NAME}}</div><div class="message">{{MESSAGE}}</div><div class="wishes-from">{{WISHES_FROM}}</div></div>', '.template-container { width: 400px; height: 400px; background: linear-gradient(45deg, #ff6b35, #f7931e); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; } .header { font-size: 24px; font-weight: bold; margin-bottom: 20px; } .message { font-size: 18px; margin-bottom: 20px; } .wishes-from { font-size: 16px; font-style: italic; }', true, 1),
('Traditional Diwali', 1, '<div class="template-container"><div class="diya">🪔</div><div class="header">{{FESTIVAL_NAME}}</div><div class="message">{{MESSAGE}}</div><div class="wishes-from">{{WISHES_FROM}}</div></div>', '.template-container { width: 400px; height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; } .diya { font-size: 48px; margin-bottom: 10px; } .header { font-size: 24px; font-weight: bold; margin-bottom: 20px; } .message { font-size: 18px; margin-bottom: 20px; } .wishes-from { font-size: 16px; font-style: italic; }', true, 2);

-- Messages table
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  festival_id INTEGER REFERENCES festivals(id),
  content JSONB NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sample messages
INSERT INTO messages (festival_id, content, display_order, is_active) VALUES
(1, '{"en": "Wishing you a very Happy Diwali!", "hi": "आपको दीवाली की हार्दिक शुभकामनाएं!", "gu": "તમને દિવાળીની હાર્દિક શુભકામનાઓ!"}', 1, true),
(1, '{"en": "May this Diwali bring happiness and prosperity", "hi": "यह दीवाली खुशियां और समृद्धि लाए", "gu": "આ દિવાળી ખુશી અને સમૃદ્ધિ લાવે"}', 2, true),
(1, '{"en": "Light up your life with joy and happiness", "hi": "अपने जीवन को खुशी और प्रसन्नता से रोशन करें", "gu": "તમારા જીવનને આનંદ અને ખુશીથી પ્રકાશિત કરો"}', 3, true);

-- User interactions table
CREATE TABLE user_interactions (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(100),
  action VARCHAR(50) NOT NULL,
  data JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Phone numbers table
CREATE TABLE phone_numbers (
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(20) NOT NULL,
  country_code VARCHAR(5) DEFAULT '+91',
  session_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Admin users table
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Configuration table
CREATE TABLE app_config (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Default configuration
INSERT INTO app_config (key, value, description) VALUES
('phone_capture_enabled', 'true', 'Enable/disable phone number capture modal'),
('admin_email', '"admin@techforparents.in"', 'Admin email address'),
('site_name', '"Tech For Parents - Utsav"', 'Site name for branding');