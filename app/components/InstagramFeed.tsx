import Image from "next/image";
import { getInstagramAccessToken } from "@/lib/instagram-token";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/mgpelec/";

type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
};

async function getInstagramMedia(): Promise<InstagramMedia[]> {
  const token = await getInstagramAccessToken();
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.data) ? data.data : [];
  } catch {
    return [];
  }
}

export default async function InstagramFeed() {
  const media = await getInstagramMedia();

  if (media.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
        Le flux Instagram s&apos;affichera ici dès que la connexion sera
        configurée. En attendant, retrouvez nos réalisations sur{" "}
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--color-brand-dark)]"
        >
          Instagram
        </a>
        .
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {media.map((item) => (
        <a
          key={item.id}
          href={item.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-square overflow-hidden rounded-xl border border-black/5 bg-slate-100 shadow-sm"
        >
          {item.media_type === "VIDEO" ? (
            <video
              src={item.media_url}
              poster={item.thumbnail_url}
              controls
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={item.media_url}
              alt={item.caption?.slice(0, 100) ?? "Publication Instagram MGPElec"}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Voir sur Instagram
          </span>
        </a>
      ))}
    </div>
  );
}

export { INSTAGRAM_PROFILE_URL };
