const GOOGLE_REVIEWS_URL = "https://share.google/ZVRge8hf8KfSVNmZo";

type Review = {
  author: string;
  rating: number;
  text: string;
};

const REVIEWS: Review[] = [
  {
    author: "Jacques LEBEAU",
    rating: 5,
    text: "Devis et délais de réponse rapide. Merci pour les conseils et la pose de la borne !!",
  },
  {
    author: "Damien Boyer",
    rating: 5,
    text: "Je ne peux que recommander la société MGP Elec pour ses prestations efficaces et soigneuses. Il est intervenu à mon domicile pour de la modification de tableau, du passage de câble ainsi que la pose d'une borne de recharge.",
  },
  {
    author: "myrella laravine",
    rating: 5,
    text: "Je suis très satisfaite de la pose de ma borne de recharge. Changement de tableau électrique également très professionnel, travail minutieux, je recommande fortement.",
  },
  {
    author: "DJ-LIKE ROBERT",
    rating: 5,
    text: "Installation de ma borne de recharge réalisée par MGP Elec. Très bon travail, installation propre et conforme. Les explications sont claires et l'équipe est très professionnelle. Je recommande vivement !",
  },
  {
    author: "Laurent MOREL",
    rating: 5,
    text: "Je recommande vivement MGP Elec pour son sérieux et son professionnalisme. Du devis jusqu'à la réalisation des travaux, tout s'est très bien passé.",
  },
  {
    author: "Romain Sellom",
    rating: 5,
    text: "Top électricien. Tarif correct et conseil personnalisé, je recommande !",
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

export default function GoogleReviews() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-2xl font-extrabold text-[var(--color-heading)]">
          5,0
        </span>
        <Stars rating={5} />
        <span className="text-sm text-slate-500">Avis Google</span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review) => (
          <div
            key={review.author}
            className="flex flex-col gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-500">
                {review.author.charAt(0)}
              </span>
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
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-[var(--color-brand-dark)] hover:text-[var(--color-brand-dark)]"
      >
        Voir tous les avis sur Google
      </a>
    </div>
  );
}
