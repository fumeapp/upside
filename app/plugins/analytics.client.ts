export default defineNuxtPlugin(() => {
  const { trackEvent } = useAnalytics();

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute("href") || "";
    if (href.startsWith("tel:")) {
      trackEvent("click_to_call", {
        phone_number: href.replace("tel:", ""),
        link_text: anchor.textContent?.trim() || "phone_icon",
      });
    } else if (href.startsWith("mailto:")) {
      trackEvent("click_email", {
        email_address: href.replace("mailto:", "").split("?")[0],
      });
    }
  });
});
