import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "mgpelec974@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type DevisPayload = {
  visitorEmail: string;
  visitorPhone: string;
  summaryLines: string[];
  priceLines: string[];
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Configuration email manquante côté serveur." },
      { status: 500 }
    );
  }

  let payload: DevisPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { visitorEmail, visitorPhone, summaryLines, priceLines } = payload;

  if (!visitorEmail || !EMAIL_REGEX.test(visitorEmail)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!visitorPhone || visitorPhone.trim().length < 6) {
    return NextResponse.json({ error: "Téléphone invalide." }, { status: 400 });
  }
  if (!Array.isArray(summaryLines) || !Array.isArray(priceLines)) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const text = [
    "Nouvelle demande de devis - Borne de recharge",
    "",
    `Téléphone : ${visitorPhone}`,
    `Email : ${visitorEmail}`,
    "",
    ...summaryLines,
    "",
    ...priceLines,
  ].join("\n");

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "MGPElec <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: visitorEmail,
      subject: `Demande de devis - Borne de recharge (${visitorPhone})`,
      text,
    });

    if (error) {
      return NextResponse.json({ error: "Envoi impossible." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Envoi impossible." }, { status: 500 });
  }
}
