import type { H3Event } from "h3";
import type { ConsultationPayload } from "~~/shared/schemas/consultation";

export const escapeHtml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export interface SendEmailBinding {
  send: (msg: {
    from: string;
    to: string;
    replyTo?: string;
    subject: string;
    html: string;
    text?: string;
  }) => Promise<unknown>;
}

export const buildConsultationEmail = (payload: ConsultationPayload) => {
  const fullName = `${payload.firstName} ${payload.lastName}`;
  const subject = `New Consultation Request: ${fullName} (${payload.zipCode}) — ${payload.productInterest}`;
  const phoneDigits = payload.phone.replace(/[^\d+]/g, "");

  const notesHtml = payload.comments
    ? `<p style="margin: 0; white-space: pre-wrap; color: #2b3238; line-height: 1.6;">${escapeHtml(payload.comments)}</p>`
    : `<p style="margin: 0; color: #6d7a85; font-style: italic;">No additional comments provided.</p>`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #d7dde1; border-radius: 12px; overflow: hidden;">
      <div style="background: #49535c; color: #ffffff; padding: 20px 24px;">
        <p style="margin: 0; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #b8d883; font-weight: 700;">
          Upside Home Lifts · New Website Lead
        </p>
        <h1 style="margin: 6px 0 0; font-size: 20px; font-weight: 700;">
          Free Consultation Request from ${escapeHtml(fullName)}
        </h1>
      </div>

      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #5a6670; width: 170px; border-bottom: 1px solid #eceff1;">Name</td>
            <td style="padding: 8px 0; color: #181d22; font-weight: 600; border-bottom: 1px solid #eceff1;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5a6670; border-bottom: 1px solid #eceff1;">Phone</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eceff1;">
              <a href="tel:${escapeHtml(phoneDigits)}" style="color: #4c6620; font-weight: 600; text-decoration: none;">${escapeHtml(payload.phone)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5a6670; border-bottom: 1px solid #eceff1;">Email</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eceff1;">
              <a href="mailto:${escapeHtml(payload.email)}" style="color: #4c6620; font-weight: 600; text-decoration: none;">${escapeHtml(payload.email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5a6670; border-bottom: 1px solid #eceff1;">Installation ZIP</td>
            <td style="padding: 8px 0; color: #181d22; font-weight: 600; border-bottom: 1px solid #eceff1;">${escapeHtml(payload.zipCode)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5a6670; border-bottom: 1px solid #eceff1;">Preferred Contact</td>
            <td style="padding: 8px 0; color: #181d22; border-bottom: 1px solid #eceff1;">${escapeHtml(payload.contactMethod)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5a6670; border-bottom: 1px solid #eceff1;">Model Interest</td>
            <td style="padding: 8px 0; color: #181d22; font-weight: 600; border-bottom: 1px solid #eceff1;">${escapeHtml(payload.productInterest)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5a6670; border-bottom: 1px solid #eceff1;">OC 55+ Special</td>
            <td style="padding: 8px 0; color: #181d22; border-bottom: 1px solid #eceff1;">${payload.ocSpecial ? "Yes — requested details" : "Not selected"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5a6670;">SMS Follow-Up Opt-In</td>
            <td style="padding: 8px 0; color: #181d22;">${payload.smsOptIn ? "Yes" : "No"}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 14px 16px; background: #f6f7f8; border-radius: 8px;">
          <p style="margin: 0 0 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #5a6670;">
            Questions / Project Notes
          </p>
          ${notesHtml}
        </div>
      </div>

      <div style="background: #f6f7f8; padding: 14px 24px; font-size: 12px; color: #5a6670; border-top: 1px solid #eceff1;">
        Sent from upsidelifts.com · Reply directly to this email to respond to ${escapeHtml(payload.firstName)}.
      </div>
    </div>
  `.trim();

  const text = [
    `New Consultation Request — Upside Home Lifts`,
    `Name: ${fullName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Installation ZIP: ${payload.zipCode}`,
    `Preferred Contact: ${payload.contactMethod}`,
    `Model Interest: ${payload.productInterest}`,
    `OC 55+ Special: ${payload.ocSpecial ? "Yes" : "No"}`,
    `SMS Opt-In: ${payload.smsOptIn ? "Yes" : "No"}`,
    ``,
    `Comments:`,
    payload.comments || "(none)",
  ].join("\n");

  return { subject, html, text };
};

export const sendConsultationEmail = async (
  event: H3Event,
  payload: ConsultationPayload,
  config: { from: string; to: string },
): Promise<{ delivered: boolean }> => {
  const { cloudflare } = event.context as {
    cloudflare?: {
      env?: {
        SEND_EMAIL?: SendEmailBinding;
      };
    };
  };

  const { subject, html, text } = buildConsultationEmail(payload);

  if (!cloudflare?.env?.SEND_EMAIL) {
    return { delivered: false };
  }

  await cloudflare.env.SEND_EMAIL.send({
    from: config.from,
    to: config.to,
    replyTo: payload.email,
    subject,
    html,
    text,
  });

  return { delivered: true };
};
