import { consultationSchema } from "~~/shared/schemas/consultation";
import { sendConsultationEmail } from "../utils/email";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const parsed = consultationSchema.safeParse(body);

  if (!parsed.success) {
    throw createError({
      statusCode: 422,
      statusMessage: "Validation failed",
      data: {
        issues: parsed.error.issues,
      },
    });
  }

  // Silently accept honeypot bot submissions without sending email
  if (parsed.data.website.length > 0) {
    return {
      ok: true,
      delivered: false,
    };
  }

  const config = useRuntimeConfig(event);
  const { delivered } = await sendConsultationEmail(event, parsed.data, {
    from: config.mail.from,
    to: config.mail.to,
  });

  return {
    ok: true,
    delivered,
  };
});
