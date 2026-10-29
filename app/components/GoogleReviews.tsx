import Image from "next/image";
import { getGoogleReviews } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-[var(--color-brand)]" aria-hidden>
      {"★".repeat(Math.round(rating))}
      {"☆".repeat(Math.max(0, 5 - Math.round(rating)))}
    </span>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();

  if (!data || data.reviews.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
        Nos avis Google s&apos;afficheront ici dès que la connexion sera
        configurée.
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-2xl font-extrabold text-[var(--color-heading)]">
          {data.overallRating.toLocaleString("fr-FR", {
            maximumFractionDigits: 1,
          })}
        </span>
        <Stars rating={data.overallRating} />
        <span className="text-sm text-slate-500">
          {data.reviewCount} avis Google
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.reviews.slice(0, 6).map((review, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              {review.authorPhotoUrl ? (
                <Image
                  src={review.authorPhotoUrl}
                  alt={review.authorName}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-500">
                  {review.authorName.charAt(0)}
                </span>
              )}
              <div>
                <p className="text-sm font-semibold text-[var(--color-heading)]">
                  {review.authorName}
                </p>
                <p className="text-xs text-slate-400">{review.relativeTime}</p>
              </div>
            </div>
            <Stars rating={review.rating} />
            <p className="line-clamp-5 text-sm text-slate-600">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {data.mapsUrl && (
        <a
          href={data.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-[var(--color-brand-dark)] hover:text-[var(--color-brand-dark)]"
        >
          Voir tous les avis sur Google
        </a>
      )}
    </div>
  );
}
