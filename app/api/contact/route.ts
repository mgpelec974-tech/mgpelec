import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "mgpelec974@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Configuration email manquante côté serveur." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name || !name.trim()) {
    return NextResponse.json({ error: "Nom manquant." }, { status: 400 });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!message || !message.trim()) {
    return NextResponse.json({ error: "Message manquant." }, { status: 400 });
  }

  const text = [
    "Nouveau message depuis le site MGPElec",
    "",
    `Nom : ${name.trim()}`,
    `Email : ${email}`,
    "",
    message.trim(),
  ].join("\n");

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "MGPElec <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Message du site - ${name.trim()}`,
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
