import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — MGPElec",
  description:
    "Conditions Générales de Vente de MGPElec, électricien général et installateur de bornes de recharge IRVE à La Réunion.",
};

export default function CGVPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
        MGPElec
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
        Conditions Générales de Vente
      </h1>

      <div className="mt-10 space-y-10 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 1 – Objet
          </h2>
          <p className="mt-3">
            Les présentes Conditions Générales de Vente (CGV) régissent les
            prestations réalisées par MGPElec dans les domaines suivants :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Électricité générale (neuf et rénovation)</li>
            <li>Mise en conformité d&apos;installations électriques</li>
            <li>Dépannage électrique</li>
            <li>
              Installation et maintenance de bornes de recharge pour
              véhicules électriques (IRVE)
            </li>
            <li>Maintenance électrique industrielle et tertiaire</li>
          </ul>
          <p className="mt-3">
            Toute commande implique l&apos;acceptation sans réserve des
            présentes CGV.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 2 – Devis
          </h2>
          <p className="mt-3">
            Toute prestation fait l&apos;objet d&apos;un devis détaillé.
          </p>
          <p className="mt-3">
            Le devis est valable 30 jours à compter de sa date
            d&apos;émission.
          </p>
          <p className="mt-3">Le devis devient définitif après :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>signature du client ;</li>
            <li>mention « Bon pour accord » ;</li>
            <li>versement de l&apos;acompte éventuel.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 3 – Prix
          </h2>
          <p className="mt-3">Les prix sont exprimés en euros (€).</p>
          <p className="mt-3">
            Ils peuvent être indiqués HT ou TTC selon la qualité du client.
          </p>
          <p className="mt-3">
            Les prix comprennent uniquement les prestations mentionnées dans
            le devis.
          </p>
          <p className="mt-3">
            Toute prestation supplémentaire fera l&apos;objet d&apos;un devis
            ou d&apos;un avenant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 4 – Acompte
          </h2>
          <p className="mt-3">
            Sauf mention contraire sur le devis, un acompte de 40% est
            demandé à la commande.
          </p>
          <p className="mt-3">
            Les travaux débutent après réception de cet acompte.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 5 – Délais d&apos;exécution
          </h2>
          <p className="mt-3">Les délais sont donnés à titre indicatif.</p>
          <p className="mt-3">
            MGPElec ne pourra être tenu responsable d&apos;un retard dû
            notamment à :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>intempéries ;</li>
            <li>rupture d&apos;approvisionnement ;</li>
            <li>retard du client ;</li>
            <li>intervention d&apos;autres corps de métier ;</li>
            <li>cas de force majeure.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 6 – Accès au chantier
          </h2>
          <p className="mt-3">
            Le client s&apos;engage à permettre un accès libre et sécurisé
            aux lieux d&apos;intervention.
          </p>
          <p className="mt-3">
            Tout déplacement inutile ou impossibilité d&apos;accès pourra
            être facturé.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 7 – Travaux supplémentaires
          </h2>
          <p className="mt-3">
            Toute demande de modification ou de travaux complémentaires
            après signature du devis fera l&apos;objet d&apos;un devis
            complémentaire.
          </p>
          <p className="mt-3">
            Aucun travail supplémentaire ne sera réalisé sans accord du
            client.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 8 – Réception des travaux
          </h2>
          <p className="mt-3">
            À la fin des travaux, le client procède à leur réception.
          </p>
          <p className="mt-3">
            Toute réserve devra être formulée par écrit.
          </p>
          <p className="mt-3">
            À défaut de réserve, les travaux sont réputés conformes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 9 – Modalités de paiement
          </h2>
          <p className="mt-3">Le règlement peut être effectué par :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>virement bancaire ;</li>
            <li>chèque ;</li>
            <li>espèces (dans la limite autorisée par la réglementation).</li>
          </ul>
          <p className="mt-3">
            Sauf indication contraire, le solde est payable à la fin des
            travaux.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 10 – Retard de paiement
          </h2>
          <p className="mt-3">En cas de retard de paiement :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              des intérêts de retard seront appliqués conformément aux
              dispositions légales ;
            </li>
            <li>
              une indemnité forfaitaire de 40 € pour frais de recouvrement
              sera due pour les clients professionnels.
            </li>
          </ul>
          <p className="mt-3">
            MGPElec se réserve également le droit de suspendre toute
            intervention en cours.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 11 – Garantie
          </h2>
          <p className="mt-3">
            Les travaux sont réalisés conformément aux normes françaises en
            vigueur, notamment la norme NF C 15-100.
          </p>
          <p className="mt-3">
            Les matériels bénéficient de la garantie constructeur.
          </p>
          <p className="mt-3">
            Les prestations sont couvertes par les assurances
            professionnelles souscrites par MGPElec.
          </p>
          <p className="mt-3">La garantie ne couvre pas :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>une mauvaise utilisation ;</li>
            <li>une modification de l&apos;installation par un tiers ;</li>
            <li>les dégradations accidentelles ;</li>
            <li>
              les événements extérieurs (foudre, inondation, surtension,
              incendie, etc.).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 12 – Bornes de recharge IRVE
          </h2>
          <p className="mt-3">
            Les installations de bornes de recharge sont réalisées
            conformément à la réglementation en vigueur.
          </p>
          <p className="mt-3">Le client s&apos;engage à :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>maintenir l&apos;installation en bon état ;</li>
            <li>ne pas modifier les protections électriques ;</li>
            <li>
              faire réaliser les opérations de maintenance recommandées par
              le fabricant.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 13 – Responsabilité
          </h2>
          <p className="mt-3">
            MGPElec ne pourra être tenu responsable des dommages résultant :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>d&apos;une installation existante non conforme ;</li>
            <li>d&apos;un défaut du réseau public de distribution ;</li>
            <li>d&apos;un matériel fourni par le client ;</li>
            <li>d&apos;une utilisation non conforme des équipements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 14 – Réserve de propriété
          </h2>
          <p className="mt-3">
            Les matériels installés demeurent la propriété de MGPElec
            jusqu&apos;au paiement intégral de la facture.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 15 – Protection des données
          </h2>
          <p className="mt-3">
            Les informations collectées sont utilisées uniquement dans le
            cadre de la relation commerciale.
          </p>
          <p className="mt-3">
            Conformément au RGPD, le client dispose d&apos;un droit
            d&apos;accès, de rectification, d&apos;opposition et de
            suppression de ses données personnelles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 16 – Litiges
          </h2>
          <p className="mt-3">
            Les présentes CGV sont soumises au droit français.
          </p>
          <p className="mt-3">
            En cas de litige, les parties rechercheront une solution amiable
            avant toute procédure judiciaire.
          </p>
          <p className="mt-3">
            À défaut d&apos;accord, les tribunaux territorialement
            compétents seront seuls compétents.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Coordonnées
          </h2>
          <p className="mt-3 font-semibold text-[var(--color-heading)]">
            MGPElec
          </p>
          <p className="mt-1">
            Électricité générale • Installation de bornes de recharge IRVE •
            Maintenance électrique
          </p>
          <p className="mt-3">
            E-mail :{" "}
            <a
              href="mailto:contact@mgpelec.re"
              className="font-semibold text-[var(--color-brand-dark)]"
            >
              contact@mgpelec.re
            </a>
          </p>
          <p className="mt-1">
            Site internet :{" "}
            <a
              href="https://www.mgpelec.re"
              className="font-semibold text-[var(--color-brand-dark)]"
            >
              www.mgpelec.re
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
