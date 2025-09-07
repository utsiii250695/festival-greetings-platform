import { supabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { festivalId } = req.query;
    
    if (!festivalId) {
      return res.status(400).json({ error: 'Festival ID is required' });
    }

    try {
      // Fetch templates with their variables
      const { data: templates, error: templatesError } = await supabase
        .from('templates')
        .select(`
          id,
          name,
          template_type,
          image_url,
          html_template,
          css_styles,
          is_active,
          display_order
        `)
        .eq('festival_id', festivalId)
        .eq('is_active', true)
        .order('display_order');

      if (templatesError) throw templatesError;

      // Fetch variables for all templates
      const templateIds = templates.map(t => t.id);
      const { data: variables, error: variablesError } = await supabase
        .from('template_variables')
        .select('*')
        .in('template_id', templateIds)
        .order('display_order');

      if (variablesError) throw variablesError;

      // Group variables by template_id
      const variablesByTemplate = variables.reduce((acc, variable) => {
        if (!acc[variable.template_id]) {
          acc[variable.template_id] = [];
        }
        acc[variable.template_id].push(variable);
        return acc;
      }, {});

      // Attach variables to templates
      const templatesWithVariables = templates.map(template => ({
        ...template,
        variables: variablesByTemplate[template.id] || [],
        hasCustomTemplate: !!(template.html_template && template.css_styles)
      }));

      res.status(200).json(templatesWithVariables);
    } catch (error) {
      console.error('Error fetching templates:', error);
      res.status(500).json({ error: 'Failed to fetch templates' });
    }
  } else if (req.method === 'PUT') {
    const { id, css_styles } = req.body;
    
    if (!id || !css_styles) {
      return res.status(400).json({ error: 'Template ID and CSS styles are required' });
    }

    try {
      const { data, error } = await supabase
        .from('templates')
        .update({ css_styles })
        .eq('id', id)
        .select();

      if (error) throw error;

      res.status(200).json({ message: 'Template updated successfully', data });
    } catch (error) {
      console.error('Error updating template:', error);
      res.status(500).json({ error: 'Failed to update template' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}