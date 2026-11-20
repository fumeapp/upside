export default defineEventHandler((event) => {
  const host = getRequestHost(event, { xForwardedHost: true }).toLowerCase();
  if (host === "www.upsidelifts.com") {
    const url = getRequestURL(event);
    return sendRedirect(event, `https://upsidelifts.com${url.pathname}${url.search}`, 301);
  }
});
