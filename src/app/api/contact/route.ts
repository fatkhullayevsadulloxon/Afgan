import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICES = ["basic", "business", "export", "representative", "other"] as const;
const COUNTRIES = ["uz", "af", "other"] as const;

type Body = {
  name?: string;
  company?: string;
  country?: string;
  email?: string;
  service?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const country = body.country?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (
    !name ||
    !company ||
    !email ||
    !EMAIL_RE.test(email) ||
    !COUNTRIES.includes(country as (typeof COUNTRIES)[number]) ||
    !SERVICES.includes(service as (typeof SERVICES)[number])
  ) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM || "Uzbekistan Business House <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ ok: true, fallback: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Murojaat: ${service} — ${name} (${company})`,
      html: `
        <h2>Янги мурожаат</h2>
        <p><strong>Исм:</strong> ${escapeHtml(name)}</p>
        <p><strong>Компания:</strong> ${escapeHtml(company)}</p>
        <p><strong>Мамлакат:</strong> ${escapeHtml(country)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Хизмат:</strong> ${escapeHtml(service)}</p>
        <p><strong>Хабар:</strong><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ ok: false, fallback: true }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, fallback: true }, { status: 502 });
  }
}
