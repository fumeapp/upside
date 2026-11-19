import { describe, expect, it, vi } from "vitest";
import { consultationSchema } from "../shared/schemas/consultation";
import { buildConsultationEmail, escapeHtml, sendConsultationEmail } from "../server/utils/email";

describe("consultationSchema", () => {
  const validPayload = {
    firstName: "Jane",
    lastName: "Homeowner",
    phone: "(949) 555-0199",
    zipCode: "92614",
    email: "jane@example.com",
    contactMethod: "Phone Call" as const,
    productInterest: "Stiltz Duo+ (Compact 2-Person)" as const,
    comments: "Looking at retrofitting next to our living room stairs.",
    ocSpecial: true,
    smsOptIn: true,
  };

  it("accepts a valid consultation submission", () => {
    const result = consultationSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.firstName).toBe("Jane");
      expect(result.data.ocSpecial).toBe(true);
      expect(result.data.website).toBe("");
    }
  });

  it("rejects invalid zip code and email", () => {
    const result = consultationSchema.safeParse({
      ...validPayload,
      zipCode: "9261",
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((i) => i.path[0]);
      expect(paths).toContain("zipCode");
      expect(paths).toContain("email");
    }
  });
});

describe("consultation email builder & delivery", () => {
  it("escapes HTML special characters safely", () => {
    expect(escapeHtml(`<script>alert("x")</script>`)).toBe(
      "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;",
    );
  });

  it("builds subject, html, and text with lead details", () => {
    const parsed = consultationSchema.parse({
      firstName: "Robert",
      lastName: "Miller",
      phone: "949-555-2200",
      zipCode: "92660",
      email: "robert@example.com",
      contactMethod: "Irvine Showroom Appointment",
      productInterest: "Stiltz Trio+ (Wheelchair Accessible)",
      comments: "Remodeling our Newport Beach home <phase 2>.",
      ocSpecial: true,
      smsOptIn: false,
    });

    const email = buildConsultationEmail(parsed);
    expect(email.subject).toContain("Robert Miller (92660)");
    expect(email.subject).toContain("Stiltz Trio+");
    expect(email.html).toContain("tel:9495552200");
    expect(email.html).toContain("&lt;phase 2&gt;");
    expect(email.html).toContain("Yes — requested details");
    expect(email.text).toContain("OC 55+ Special: Yes");
  });

  it("dispatches through Cloudflare SEND_EMAIL binding when available", async () => {
    const send = vi.fn().mockResolvedValue({ messageId: "msg_123" });
    const mockEvent = {
      context: {
        cloudflare: {
          env: {
            SEND_EMAIL: { send },
          },
        },
      },
    } as any;

    const parsed = consultationSchema.parse({
      firstName: "Susan",
      lastName: "Lee",
      phone: "949.555.0144",
      zipCode: "92614",
      email: "susan@example.com",
      contactMethod: "Email",
      productInterest: "Stiltz Vista (Clear Panoramic)",
    });

    const result = await sendConsultationEmail(mockEvent, parsed, {
      from: "upside@fume.bio",
      to: "Jeff@UpsideLifts.com",
    });

    expect(result.delivered).toBe(true);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "upside@fume.bio",
        to: "Jeff@UpsideLifts.com",
        replyTo: "susan@example.com",
      }),
    );
  });
});
