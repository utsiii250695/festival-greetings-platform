// Enhanced Analytics Utility
import { v4 as uuidv4 } from 'uuid';

class Analytics {
  constructor() {
    this.sessionId = null;
    this.userId = null;
    this.completedActions = new Set();
    this.startTime = Date.now();
  }

  // Initialize session
  init() {
    if (typeof window === 'undefined') return;

    // Get or create session ID
    this.sessionId = sessionStorage.getItem('analytics_session_id');
    if (!this.sessionId) {
      this.sessionId = uuidv4();
      sessionStorage.setItem('analytics_session_id', this.sessionId);
    }

    // Get or create user ID (persists across sessions)
    this.userId = localStorage.getItem('analytics_user_id');
    if (!this.userId) {
      this.userId = uuidv4();
      localStorage.setItem('analytics_user_id', this.userId);
    }

    // Track session start
    this.track('session_start', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      screen: {
        width: window.screen.width,
        height: window.screen.height
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  // Generic tracking function
  async track(action, data = {}, options = {}) {
    if (typeof window === 'undefined') return;

    const {
      deduplicate = true,
      timeout = 5000,
      critical = false
    } = options;

    // Prevent duplicate tracking for the same action in the same session
    const actionKey = `${this.sessionId}_${action}`;
    if (deduplicate && this.completedActions.has(actionKey)) {
      return;
    }

    const payload = {
      sessionId: this.sessionId,
      userId: this.userId,
      action,
      data: {
        ...data,
        timestamp: new Date().toISOString(),
        sessionDuration: Date.now() - this.startTime,
        page: window.location.pathname,
        referrer: document.referrer || null,
        language: navigator.language,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok && deduplicate) {
        this.completedActions.add(actionKey);
      }

      return response.ok;
    } catch (error) {
      console.error('Analytics tracking error:', error);

      // For critical events, store for retry
      if (critical) {
        this.storeForRetry(payload);
      }

      return false;
    }
  }

  // Store failed critical events for retry
  storeForRetry(payload) {
    try {
      const failedEvents = JSON.parse(localStorage.getItem('analytics_failed_events') || '[]');
      failedEvents.push(payload);

      // Keep only last 50 failed events
      if (failedEvents.length > 50) {
        failedEvents.splice(0, failedEvents.length - 50);
      }

      localStorage.setItem('analytics_failed_events', JSON.stringify(failedEvents));
    } catch (error) {
      console.error('Failed to store analytics event for retry:', error);
    }
  }

  // Retry failed events
  async retryFailedEvents() {
    try {
      const failedEvents = JSON.parse(localStorage.getItem('analytics_failed_events') || '[]');
      if (failedEvents.length === 0) return;

      const retryPromises = failedEvents.map(payload =>
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => null)
      );

      await Promise.allSettled(retryPromises);
      localStorage.removeItem('analytics_failed_events');
    } catch (error) {
      console.error('Failed to retry analytics events:', error);
    }
  }

  // Specific tracking methods for better developer experience

  // Page tracking
  trackPageView(page, additionalData = {}) {
    return this.track('page_visit', {
      page,
      ...additionalData
    });
  }

  // Language selection
  trackLanguageSelect(language) {
    return this.track('language_select', {
      language,
      availableLanguages: ['en', 'hi', 'gu']
    }, { critical: true });
  }

  // Festival selection
  trackFestivalSelect(festival) {
    return this.track('festival_select', {
      festivalId: festival.id,
      festivalName: festival.name,
      festivalSlug: festival.slug
    }, { critical: true });
  }

  // Template selection
  trackTemplateSelect(template, festival) {
    return this.track('template_select', {
      templateId: template.id,
      templateName: template.name,
      templateType: template.template_type,
      festivalId: festival.id,
      festivalName: festival.name,
      hasCustomTemplate: !!template.html_template
    }, { critical: true });
  }

  // Message customization
  trackMessageCustomize(customization, template, festival) {
    return this.track('message_customize', {
      messageLength: customization.message?.length || 0,
      wishesFromLength: customization.wishesFrom?.length || 0,
      hasCustomMessage: !customization.message?.includes('Wishing you'),
      templateId: template.id,
      festivalId: festival.id
    });
  }

  // Image generation
  trackImageGenerated(template, festival, customization) {
    return this.track('image_generated', {
      templateId: template.id,
      templateType: template.template_type,
      festivalId: festival.id,
      messageLength: customization.message?.length || 0,
      generationTime: Date.now()
    }, { critical: true });
  }

  // Image download
  trackImageDownload(template, festival, format = 'png') {
    return this.track('image_download', {
      templateId: template.id,
      festivalId: festival.id,
      format,
      downloadTime: Date.now()
    }, { critical: true });
  }

  // Share events
  trackShare(platform, template, festival) {
    return this.track('share', {
      platform,
      templateId: template.id,
      festivalId: festival.id
    });
  }

  // Error tracking
  trackError(error, context = {}) {
    return this.track('error', {
      message: error.message,
      stack: error.stack,
      context,
      userAgent: navigator.userAgent
    }, { critical: true });
  }

  // Performance tracking
  trackPerformance(metric, value, context = {}) {
    return this.track('performance', {
      metric,
      value,
      context
    });
  }

  // User feedback
  trackFeedback(rating, comment = '', context = {}) {
    return this.track('feedback', {
      rating,
      comment,
      context
    }, { critical: true });
  }

  // Session end
  trackSessionEnd() {
    const sessionDuration = Date.now() - this.startTime;
    return this.track('session_end', {
      duration: sessionDuration,
      endTime: new Date().toISOString()
    }, { critical: true, deduplicate: false });
  }
}

// Create singleton instance
const analytics = new Analytics();

// Auto-initialize on client side
if (typeof window !== 'undefined') {
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => analytics.init());
  } else {
    analytics.init();
  }

  // Track session end on page unload
  window.addEventListener('beforeunload', () => {
    analytics.trackSessionEnd();
  });

  // Retry failed events on page load
  analytics.retryFailedEvents();
}

export default analytics;