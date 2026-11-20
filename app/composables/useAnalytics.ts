declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
    if (!import.meta.client) return;

    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: name,
      ...params,
    });
  };

  return { trackEvent };
};
