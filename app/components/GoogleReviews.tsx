import Image from "next/image";
import { getGoogleReviews } from "@/lib/google-reviews";

const GOOGLE_REVIEWS_URL = "https://share.google/ZVRge8hf8KfSVNmZo";

type Review = {
  author: string;
  rating: number;
  text: string;
  photoUrl?: string;
};

const FALLBACK_REVIEWS: Review[] = [
  {
    author: "franck grondin",
    rating: 5,
    text: "Très bon travail, rapide et professionnel. Une personne à l'écoute, disponible et efficace. Je recommande vivement !",
  },
  {
    author: "Ulrich 974",
    rating: 5,
    text: "Très satisfait du travail réalisé ! Électricien professionnel, ponctuel et à l'écoute. Travail propre, rapide et soigné, avec de bons conseils. Je recommande cette entreprise les yeux fermés.",
  },
  {
    author: "Gwendoline SELLY",
    rating: 5,
    text: "Merci MGPelec pour les conseils et l'écoute. Je recommande.",
  },
  {
    author: "Angelie ROBERT",
    rating: 5,
    text: "Super professionnel. Merci MGPELEC",
  },
  {
    author: "Johanna Ferrere",
    rating: 5,
    text: "Excellent travail",
  },
  {
    author: "Perrier athenais",
    rating: 5,
    text: "Professionnels efficace et rapide",
  },
];

function maskAuthor(author: string) {
  return `${author.slice(0, 3)}...`;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-[var(--color-brand)]" aria-hidden>
      {"★".repeat(rating)}
      {"☆".repeat(Math.max(0, 5 - rating))}
    </span>
  );
}

export default async function GoogleReviews() {
  const live = await getGoogleReviews();

  const reviews: Review[] =
    live && live.reviews.length > 0
      ? live.reviews.map((review) => ({
          author: review.authorName,
          rating: review.rating,
          text: review.text,
          photoUrl: review.authorPhotoUrl,
        }))
      : FALLBACK_REVIEWS;

  const reviewsUrl = live?.mapsUrl || GOOGLE_REVIEWS_URL;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-2xl font-extrabold text-[var(--color-heading)]">
          {live ? live.overallRating.toLocaleString("fr-FR", { maximumFractionDigits: 1 }) : "5,0"}
        </span>
        <Stars rating={5} />
        <span className="text-sm text-slate-500">
          {live ? `${live.reviewCount} avis Google` : "Avis Google"}
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((review, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              {review.photoUrl ? (
                <Image
                  src={review.photoUrl}
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-500">
                  {review.author.charAt(0)}
                </span>
              )}
              <p className="text-sm font-semibold text-[var(--color-heading)]">
                {maskAuthor(review.author)}
              </p>
            </div>
            <Stars rating={review.rating} />
            <p className="text-sm text-slate-600">{review.text}</p>
          </div>
        ))}
      </div>

      <a
        href={reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-[var(--color-brand-dark)] hover:text-[var(--color-brand-dark)]"
      >
        Voir tous les avis sur Google
      </a>
    </div>
  );
}
