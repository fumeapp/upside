const REDIRECT_HOSTS = new Set([
  "www.upsidelifts.com",
  "upsidehomelifts.com",
  "www.upsidehomelifts.com",
]);

export default defineEventHandler((event) => {
  const host = getRequestHost(event, { xForwardedHost: true }).toLowerCase().split(":")[0];
  if (host && REDIRECT_HOSTS.has(host)) {
    const url = getRequestURL(event);
    return sendRedirect(event, `https://upsidelifts.com${url.pathname}${url.search}`, 301);
  }
});
