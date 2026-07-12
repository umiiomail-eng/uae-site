// استبدل هذه القيم لاحقًا
const CONVERSION_ID = "AW-18134556823";
const CONVERSION_LABEL = "XXXXXXXXXXXXXXXXXXXX";

export function trackGoogleAdsConversion() {

  if (!window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
  });

}