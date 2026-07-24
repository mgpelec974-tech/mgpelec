import { get } from "@vercel/edge-config";

const EDGE_CONFIG_KEY = "instagramAccessToken";

// En local (pas d'Edge Config connecté), on retombe sur la variable
// d'environnement INSTAGRAM_ACCESS_TOKEN pour pouvoir développer sans Vercel.
export async function getInstagramAccessToken(): Promise<string | null> {
  if (process.env.EDGE_CONFIG) {
    try {
      const token = await get<string>(EDGE_CONFIG_KEY);
      if (token) return token;
    } catch {
      // Edge Config indisponible, on retombe sur l'env var ci-dessous.
    }
  }
  return process.env.INSTAGRAM_ACCESS_TOKEN ?? null;
}

export async function saveInstagramAccessToken(token: string): Promise<void> {
  const edgeConfigId = process.env.EDGE_CONFIG_ID;
  const vercelApiToken = process.env.VERCEL_API_TOKEN;

  if (!edgeConfigId || !vercelApiToken) {
    throw new Error(
      "EDGE_CONFIG_ID et VERCEL_API_TOKEN sont requis pour sauvegarder le token."
    );
  }

  const res = await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${vercelApiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { operation: "update", key: EDGE_CONFIG_KEY, value: token },
        ],
      }),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Échec de mise à jour de l'Edge Config : ${detail}`);
  }
}
