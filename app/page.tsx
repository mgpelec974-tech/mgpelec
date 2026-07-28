import Link from "next/link";
import Image from "next/image";
import InstagramFeed, {
  INSTAGRAM_PROFILE_URL,
} from "./components/InstagramFeed";
import ContactForm from "./components/ContactForm";

const SERVICES = [
  {
    title: "Installation électrique",
    description:
      "Installation complète ou partielle pour constructions neuves, extensions et rénovations.",
    image: "/services/installation-electrique.png",
  },
  {
    title: "Mise aux normes",
    description:
      "Mise en conformité de votre tableau électrique et de votre installation (norme NF C 15-100).",
    image: "/services/mise-aux-normes.webp",
  },
  {
    title: "Dépannage électricité",
    description:
      "Intervention rapide pour panne, disjoncteur qui saute, court-circuit ou perte de courant.",
    image: "/services/depannage-electricite.jpg",
  },
  {
    title: "Bornes de recharge (IRVE)",
    description:
      "Installation de borne de recharge pour véhicule électrique, à domicile ou en entreprise.",
    image: "/services/bornes-irve.png",
  },
  {
    title: "Rénovation électrique",
    description:
      "Remplacement de tableaux, câblage et appareillage vétustes ou dangereux.",
    image: "/services/renovation-electrique.png",
  },
  {
    title: "Éclairage & domotique",
    description:
      "Éclairage intérieur/extérieur, prises, interrupteurs connectés et automatismes.",
    image: "/services/eclairage-domotique.png",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[var(--color-ink)] px-4 pb-12 pt-24 text-center sm:px-6">
        <Image
          src="/hero-bg.png"
          alt="MGPElec — Électricien à La Réunion"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/70 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand)]">
            Électricien à La Réunion
          </p>
          <p className="mt-3 text-xl italic text-slate-200">
            « Éclairons votre quotidien avec expertise ! »
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/devis-borne-recharge"
              className="rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-105"
            >
              Simulez votre devis borne de recharge
            </Link>
            <a
              href="tel:+262692383069"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white"
            >
              06 92 38 30 69
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-heading)] sm:text-4xl">
              Une expertise électrique reconnue, au service de tous vos
              projets
            </h2>
            <p className="mt-6 text-slate-600">
              Notre équipe d&apos;électriciens qualifiés et expérimentés
              intervient aussi bien sur des constructions neuves que sur des
              projets de rénovation, de mise aux normes ou de dépannage.
            </p>
            <p className="mt-4 text-slate-600">
              Nous accompagnons particuliers et professionnels avec le même
              niveau d&apos;exigence : un travail soigné, réalisé dans les
              règles de l&apos;art et dans les délais annoncés.
            </p>
            <p className="mt-4 text-slate-600">
              Votre satisfaction est notre priorité, du premier contact
              jusqu&apos;à la mise en service de votre installation.
            </p>
            <p className="mt-6 flex items-start gap-3 text-lg text-slate-700">
              <span className="text-3xl leading-none text-[var(--color-accent-blue)]">
                «
              </span>
              Un accompagnement sur-mesure, à chaque étape de votre projet.
              <span className="text-3xl leading-none text-[var(--color-accent-blue)]">
                »
              </span>
            </p>
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
              <li className="flex flex-wrap items-center gap-2">
                <span>✔ Facilité de paiement en 3x, 4x ou 10x avec Alma</span>
                <span className="inline-flex items-center gap-0.5 rounded bg-[var(--color-brand)] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
                  Nouveau !
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-[var(--color-heading)]">
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
              className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="font-semibold text-[var(--color-heading)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
              {service.image && (
                <div className="relative h-40 w-full bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
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
              className="mt-6 inline-block rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-slate-200">
              <li>• Étude technique de votre installation électrique</li>
              <li>• Bornes Hager et Wallbox selon vos besoins</li>
              <li>• Pose en maison individuelle, copropriété ou entreprise</li>
              <li>• Conseils sur les aides et dispositifs en vigueur</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-heading)]">
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
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-heading)]">
              Zone d&apos;intervention
            </h2>
            <p className="mt-4 text-slate-600">
              MGPElec accompagne particuliers, professionnels et
              copropriétés dans{" "}
              <strong>toute l&apos;île de la Réunion</strong> — installation
              électrique, dépannage, mise aux normes ou pose de borne de
              recharge.
            </p>
            <p className="mt-4 text-slate-600">
              Basés à Saint-André, nous intervenons rapidement chez vous,
              avec la même exigence de qualité sur chaque chantier, où que
              vous soyez sur l&apos;île.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
            <iframe
              title="Zone d'intervention MGPElec - Île de la Réunion"
              src="https://www.openstreetmap.org/export/embed.html?bbox=55.15%2C-21.42%2C55.85%2C-20.85&layer=mapnik"
              className="h-80 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl bg-[var(--color-ink)] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Un projet électrique ? Contactez-nous.
          </h2>
          <p className="mt-3 text-slate-300">
            Appelez-nous ou envoyez-nous un message, nous répondons
            rapidement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+262692383069"
              className="rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-105"
            >
              06 92 38 30 69
            </a>
            <a
              href="mailto:contact@mgpelec.re"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white"
            >
              contact@mgpelec.re
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
