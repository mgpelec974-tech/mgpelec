import type { Metadata } from "next";
import DevisForm from "./DevisForm";

export const metadata: Metadata = {
  title: "Devis borne de recharge — MGPElec",
  description:
    "Simulateur de devis instantané pour l'installation d'une borne de recharge de véhicule électrique à La Réunion.",
};

const STEPS = [
  "Configurez votre borne",
  "Obtenez un prix instantané",
  "Contactez-moi pour valider",
];

const TRUST_BADGES = [
  "Certifié IRVE",
  "Assurance décennale",
  "RC Pro",
  "Devis gratuit",
];

export default function DevisBorneRechargePage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--color-brand)]/20 blur-3xl [animation:blob-float_9s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[var(--color-accent-blue)]/10 blur-3xl [animation:blob-float_11s_ease-in-out_infinite]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="inline-block rounded-full bg-[var(--color-brand)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
          Simulateur de devis instantané
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
          Votre borne de recharge, chiffrée en direct
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Configurez votre projet ci-dessous : le prix se met à jour en
          temps réel. Contactez-moi ensuite par téléphone ou par email pour
          valider, partout à La Réunion.
        </p>

        <ol className="mt-8 flex flex-wrap gap-3">
          {STEPS.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-brand)] text-xs font-bold text-white">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <DevisForm />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
