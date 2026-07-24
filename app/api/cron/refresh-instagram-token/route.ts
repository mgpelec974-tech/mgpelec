import { NextResponse } from "next/server";
import {
  getInstagramAccessToken,
  saveInstagramAccessToken,
} from "@/lib/instagram-token";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (
    !process.env.CRON_SECRET ||
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const currentToken = await getInstagramAccessToken();
  if (!currentToken) {
    return NextResponse.json(
      { error: "Aucun token Instagram à renouveler." },
      { status: 500 }
    );
  }

  try {
    const refreshUrl = new URL("https://graph.instagram.com/refresh_access_token");
    refreshUrl.searchParams.set("grant_type", "ig_refresh_token");
    refreshUrl.searchParams.set("access_token", currentToken);

    const res = await fetch(refreshUrl);
    const data = await res.json();

    if (!res.ok || !data.access_token) {
      return NextResponse.json(
        { error: "Échec du renouvellement auprès d'Instagram.", detail: data },
        { status: 502 }
      );
    }

    await saveInstagramAccessToken(data.access_token);

    return NextResponse.json({
      ok: true,
      expiresInSeconds: data.expires_in,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
