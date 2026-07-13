const CONVERSION_ID = import.meta.env.VITE_GOOGLE_ADS_ID;
const CONVERSION_LABEL = import.meta.env.VITE_GOOGLE_ADS_LABEL;

export function trackGoogleAdsConversion() {

  console.log("Google Ads function started");

  console.log("gtag =", window.gtag);

  console.log("ID =", CONVERSION_ID);
  console.log("LABEL =", CONVERSION_LABEL);

  if (!window.gtag) {
    console.log("gtag not found");
    return;
  }

  window.gtag("event", "conversion", {
    send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
  });

  console.log("Conversion event sent");
}