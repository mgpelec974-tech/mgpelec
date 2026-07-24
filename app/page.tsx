import Link from "next/link";
import InstagramFeed, {
  INSTAGRAM_PROFILE_URL,
} from "./components/InstagramFeed";

const SERVICES = [
  {
    title: "Installation électrique",
    description:
      "Installation complète ou partielle pour constructions neuves, extensions et rénovations.",
  },
  {
    title: "Mise aux normes",
    description:
      "Mise en conformité de votre tableau électrique et de votre installation (norme NF C 15-100).",
  },
  {
    title: "Dépannage électricité",
    description:
      "Intervention rapide pour panne, disjoncteur qui saute, court-circuit ou perte de courant.",
  },
  {
    title: "Bornes de recharge (IRVE)",
    description:
      "Installation de borne de recharge pour véhicule électrique, à domicile ou en entreprise.",
  },
  {
    title: "Rénovation électrique",
    description:
      "Remplacement de tableaux, câblage et appareillage vétustes ou dangereux.",
  },
  {
    title: "Éclairage & domotique",
    description:
      "Éclairage intérieur/extérieur, prises, interrupteurs connectés et automatismes.",
  },
];

const VILLES = [
  "Saint-Denis",
  "Saint-Paul",
  "Saint-Pierre",
  "Le Tampon",
  "Saint-André",
  "Saint-Louis",
  "Saint-Benoît",
  "Le Port",
  "Sainte-Marie",
  "Sainte-Suzanne",
  "Étang-Salé",
  "Petite-Île",
];

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="inline-block rounded-full bg-[var(--color-brand)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
              Électricien à La Réunion
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Votre électricien de confiance,
              <br />
              partout à La Réunion
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              MGPElec réalise vos installations, dépannages, mises aux normes
              et poses de bornes de recharge pour véhicules électriques,
              partout sur l&apos;île.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/devis-borne-recharge"
                className="rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105"
              >
                Devis borne de recharge
              </Link>
              <a
                href="tel:+262692383069"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-[var(--color-brand-dark)] hover:text-[var(--color-brand-dark)]"
              >
                06 92 38 30 69
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Pourquoi MGPElec
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✔ Devis gratuit et sans engagement</li>
              <li>✔ Intervention sur toute l&apos;île de la Réunion</li>
              <li>✔ Spécialiste installation de bornes de recharge</li>
              <li>✔ Travail soigné et aux normes en vigueur</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-[var(--color-ink)]">
          Nos services
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Une expertise complète en électricité générale, du dépannage à
          l&apos;installation de bornes de recharge.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand)]">
              Véhicules électriques
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Installez votre borne de recharge à domicile
            </h2>
            <p className="mt-4 text-slate-300">
              Rechargez votre véhicule électrique en toute sécurité, chez
              vous ou dans votre entreprise. MGPElec étudie votre
              installation électrique et vous propose la solution adaptée à
              votre logement et à votre véhicule.
            </p>
            <Link
              href="/devis-borne-recharge"
              className="mt-6 inline-block rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-slate-200">
              <li>• Étude technique de votre installation électrique</li>
              <li>• Bornes 3,7 kW à 22 kW selon vos besoins</li>
              <li>• Pose en maison individuelle, copropriété ou entreprise</li>
              <li>• Conseils sur les aides et dispositifs en vigueur</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]">
              Nos réalisations
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Photos et vidéos de nos chantiers, directement depuis notre
              Instagram.
            </p>
          </div>
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-[var(--color-brand-dark)] hover:text-[var(--color-brand-dark)]"
          >
            Voir plus sur Instagram
          </a>
        </div>

        <div className="mt-8">
          <InstagramFeed />
        </div>
      </section>

      <section id="zone" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-[var(--color-ink)]">
          Zone d&apos;intervention
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          MGPElec intervient sur toute l&apos;île de la Réunion, notamment à :
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {VILLES.map((ville) => (
            <span
              key={ville}
              className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {ville}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl bg-amber-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
            Un projet électrique ? Contactez-nous.
          </h2>
          <p className="mt-3 text-slate-600">
            Appelez-nous ou envoyez-nous un message, nous répondons
            rapidement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+262692383069"
              className="rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105"
            >
              06 92 38 30 69
            </a>
            <a
              href="mailto:mgpelec974@gmail.com"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-[var(--color-brand-dark)] hover:text-[var(--color-brand-dark)]"
            >
              mgpelec974@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
