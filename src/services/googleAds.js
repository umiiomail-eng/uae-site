const CONVERSION_ID = import.meta.env.VITE_GOOGLE_ADS_ID;
const CONVERSION_LABEL = import.meta.env.VITE_GOOGLE_ADS_LABEL;

export function trackGoogleAdsConversion() {

  if (!window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
  });

}