import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database helper functions
export const dbHelpers = {
  // Get active festivals
  async getFestivals() {
    const { data, error } = await supabase
      .from('festivals')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (error) throw error;
    return data;
  },

  // Get templates for a festival
  async getTemplates(festivalId) {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .eq('festival_id', festivalId)
      .eq('is_active', true)
      .order('display_order');
    
    if (error) throw error;
    return data;
  },

  // Get messages for a festival
  async getMessages(festivalId) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('festival_id', festivalId)
      .eq('is_active', true)
      .order('display_order');
    
    if (error) throw error;
    return data;
  }
};