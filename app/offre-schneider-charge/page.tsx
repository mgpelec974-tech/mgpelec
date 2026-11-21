import type { Metadata } from "next";
import Image from "next/image";
import OffreForm from "../components/OffreForm";

export const metadata: Metadata = {
  title: "Offre borne Schneider Charge — MGPElec",
  description:
    "Offre du moment : borne de recharge Schneider Charge installée à 1 500 € TTC, câble 10 mètres et mise en service inclus. Stock limité.",
};

export default function OffreSchneiderChargePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <span className="inline-block rounded-full bg-[var(--color-brand)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
        Offre du moment — Stock limité
      </span>
      <h1 className="mt-3 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
        Borne de recharge Schneider Charge installée à 1&nbsp;500&nbsp;€ TTC
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Laissez-nous vos coordonnées, je vous recontacte rapidement pour
        organiser l&apos;installation.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
        <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <div className="relative aspect-square w-full">
            <Image
              src="/promo/schneider-charge-promo.png"
              alt="Promotion borne de recharge Schneider Charge à 1 500 € TTC"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-amber-50 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            Pour profiter de l&apos;offre :
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
            <li>✔ Borne Schneider Charge</li>
            <li>✔ 10 mètres de câble inclus</li>
            <li>✔ Installation comprise (mise en service)</li>
          </ul>
          <div className="mt-5 border-t border-black/10 pt-5">
            <OffreForm />
          </div>
        </div>
      </div>
    </main>
  );
}
