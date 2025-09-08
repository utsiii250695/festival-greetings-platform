// src/utils/templateRenderer.js

export class TemplateRenderer {
  /**
   * Renders a template by replacing variables with actual values
   * @param {string} htmlTemplate - HTML template with {{VARIABLE}} placeholders
   * @param {string} cssStyles - CSS styles for the template
   * @param {Object} variables - Key-value pairs for variable replacement
   * @returns {string} - Rendered HTML with styles
   */
  static renderTemplate(htmlTemplate, cssStyles, variables) {
    if (!htmlTemplate) {
      console.error('No HTML template provided');
      return null;
    }

    let processedHtml = htmlTemplate;
    
    // Handle IMAGE_CONTENT special logic
    if (variables.IMAGE_URL && variables.IMAGE_URL.trim()) {
      variables.IMAGE_CONTENT = `<img src="${variables.IMAGE_URL}" alt="Festival decoration" crossorigin="anonymous" />`;
    } else {
      variables.IMAGE_CONTENT = `<div class="gradient-bg"><div class="emoji-icon">${variables.EMOJI || '🪔'}</div></div>`;
    }
    
    // Replace all variables in HTML template
    Object.entries(variables).forEach(([key, value]) => {
      const placeholder = `{{${key}}}`;
      const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      processedHtml = processedHtml.replace(regex, value || '');
    });

    // Check for any unreplaced variables
    const unreplacedVars = processedHtml.match(/\{\{[A-Z_]+\}\}/g);
    if (unreplacedVars) {
      console.warn('Unreplaced variables found:', unreplacedVars);
    }

    // Create a unique class prefix for scoping
    const uniqueId = `template-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Scope the CSS to avoid conflicts
    const scopedCss = cssStyles.replace(/\./g, `.${uniqueId} .`);
    
    // Wrap HTML in scoped container
    const scopedHtml = `<div class="${uniqueId}">${processedHtml}</div>`;
    
    // Combine CSS and HTML
    return `<style>${scopedCss}</style>${scopedHtml}`;
  }

  /**
   * Extracts variable names from a template
   * @param {string} htmlTemplate - HTML template string
   * @returns {Array} - Array of variable names
   */
  static extractVariables(htmlTemplate) {
    if (!htmlTemplate) return [];
    
    const variableRegex = /\{\{([A-Z_]+)\}\}/g;
    const variables = [];
    let match;
    
    while ((match = variableRegex.exec(htmlTemplate)) !== null) {
      if (!variables.includes(match[1])) {
        variables.push(match[1]);
      }
    }
    
    return variables;
  }

  /**
   * Validates that all required variables are provided
   * @param {Array} templateVariables - Array of variable definitions from database
   * @param {Object} providedVariables - Variables provided for rendering
   * @returns {Object} - Validation result with isValid and missing fields
   */
  static validateVariables(templateVariables, providedVariables) {
    const missing = [];
    
    templateVariables.forEach(variable => {
      if (variable.is_required && !providedVariables[variable.variable_name]) {
        missing.push(variable.variable_name);
      }
    });

    return {
      isValid: missing.length === 0,
      missing: missing
    };
  }

  /**
   * Prepares variables with defaults for template rendering
   * @param {Array} templateVariables - Variable definitions from database
   * @param {Object} userVariables - User-provided variables
   * @returns {Object} - Complete variable set with defaults
   */
  static prepareVariables(templateVariables, userVariables) {
    const variables = {};
    
    templateVariables.forEach(variable => {
      variables[variable.variable_name] = 
        userVariables[variable.variable_name] || 
        variable.default_value || 
        '';
    });

    return variables;
  }

  /**
   * Creates a React element from rendered template (for preview)
   * @param {string} renderedHtml - HTML string from renderTemplate
   * @returns {Object} - React element props
   */
  static createReactElement(renderedHtml) {
    return {
      dangerouslySetInnerHTML: { __html: renderedHtml }
    };
  }
}

export default TemplateRenderer;