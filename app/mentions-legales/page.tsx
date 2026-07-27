import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Mentions légales — MGPElec",
  description: "Mentions légales du site www.mgpelec.re, édité par MGP ELEC.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
        MGPElec
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
        Mentions légales
      </h1>
      <p className="mt-4 text-sm text-slate-500">
        Conformément aux dispositions des articles 6-III et 19 de la loi
        n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
        numérique (LCEN), il est porté à la connaissance des utilisateurs et
        visiteurs du site www.mgpelec.re les informations suivantes.
      </p>

      <div className="mt-10 space-y-10 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 1 – Éditeur du site
          </h2>
          <p className="mt-3">Le site www.mgpelec.re est édité par :</p>
          <ul className="mt-3 space-y-1">
            <li>
              <strong>Nom commercial :</strong> {COMPANY.nomCommercial}
            </li>
            <li>
              <strong>Forme juridique :</strong> {COMPANY.formeJuridique}
            </li>
            <li>
              <strong>Dirigeant / responsable de la publication :</strong>{" "}
              {COMPANY.dirigeant}
            </li>
            <li>
              <strong>SIREN :</strong> {COMPANY.siren}
            </li>
            <li>
              <strong>Adresse du siège :</strong> {COMPANY.adresse},{" "}
              {COMPANY.codePostal} {COMPANY.ville}, {COMPANY.departement}
            </li>
            <li>
              <strong>Téléphone :</strong>{" "}
              <a href={COMPANY.telephoneHref} className="text-[var(--color-brand-dark)]">
                {COMPANY.telephone}
              </a>
            </li>
            <li>
              <strong>E-mail :</strong>{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-[var(--color-brand-dark)]">
                {COMPANY.email}
              </a>
            </li>
            <li>
              <strong>Activité :</strong> Travaux d&apos;installation
              électrique, mise en conformité, dépannage électrique et
              installation de bornes de recharge pour véhicules électriques
              (IRVE).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 2 – Directeur de la publication
          </h2>
          <p className="mt-3">
            Le directeur de la publication du site est {COMPANY.dirigeant},
            en sa qualité de dirigeant de {COMPANY.nomCommercial}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 3 – Hébergement
          </h2>
          <p className="mt-3">
            Le site est hébergé et déployé par :
          </p>
          <ul className="mt-3 space-y-1">
            <li>
              <strong>{COMPANY.hebergementApplicatif.nom}</strong> —{" "}
              {COMPANY.hebergementApplicatif.adresse} —{" "}
              {COMPANY.hebergementApplicatif.site}
            </li>
          </ul>
          <p className="mt-3">
            Le nom de domaine www.mgpelec.re est enregistré auprès de :
          </p>
          <ul className="mt-3 space-y-1">
            <li>
              <strong>{COMPANY.hebergeur.nom}</strong> —{" "}
              {COMPANY.hebergeur.adresse} — {COMPANY.hebergeur.site}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 4 – Assurance professionnelle
          </h2>
          <p className="mt-3">
            {COMPANY.nomCommercial} est couvert par un contrat
            d&apos;assurance responsabilité civile professionnelle et
            responsabilité civile décennale souscrit auprès de{" "}
            {COMPANY.assurance.compagnie} (par l&apos;intermédiaire du
            courtier {COMPANY.assurance.courtier}), contrat n°
            {COMPANY.assurance.contrat}, couvrant les activités
            d&apos;électricité, de télécommunication, d&apos;alarmes
            intrusion et d&apos;alarmes incendie, pour la période en cours de
            validité.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 5 – Propriété intellectuelle
          </h2>
          <p className="mt-3">
            L&apos;ensemble des éléments composant le site www.mgpelec.re
            (textes, logos, photographies, mise en page, charte graphique,
            simulateur de devis, code source) est, sauf mention contraire,
            la propriété exclusive de {COMPANY.nomCommercial} ou fait
            l&apos;objet d&apos;une autorisation d&apos;utilisation.
          </p>
          <p className="mt-3">
            Toute reproduction, représentation, modification, publication ou
            adaptation de tout ou partie des éléments du site, quel que soit
            le moyen ou le procédé utilisé, est interdite sans
            l&apos;autorisation écrite préalable de {COMPANY.nomCommercial},
            sauf autorisation générale de la loi (notamment article L.
            122-5 du Code de la propriété intellectuelle).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 6 – Limitation de responsabilité
          </h2>
          <p className="mt-3">
            {COMPANY.nomCommercial} s&apos;efforce d&apos;assurer
            l&apos;exactitude et la mise à jour des informations diffusées
            sur le site, sans toutefois pouvoir garantir l&apos;exhaustivité
            ou l&apos;absence de modification par des tiers (piratage,
            virus).
          </p>
          <p className="mt-3">
            Les prix, tarifs et estimations affichés sur le simulateur de
            devis en ligne sont donnés à titre indicatif et ne constituent
            pas une offre contractuelle ferme et définitive : seul un devis
            signé, daté et accepté par le client engage
            {" "}{COMPANY.nomCommercial}.
          </p>
          <p className="mt-3">
            {COMPANY.nomCommercial} ne pourra être tenu responsable des
            dommages directs ou indirects résultant de l&apos;accès ou de
            l&apos;utilisation du site, y compris l&apos;inaccessibilité,
            les pertes de données ou la présence de virus.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 7 – Liens hypertextes
          </h2>
          <p className="mt-3">
            Le site peut contenir des liens hypertextes vers d&apos;autres
            sites (notamment le compte Instagram @mgpelec). {COMPANY.nomCommercial}
            {" "}n&apos;exerce aucun contrôle sur ces sites tiers et
            décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 8 – Données personnelles
          </h2>
          <p className="mt-3">
            Le traitement des données personnelles collectées via le site
            (formulaire de contact, simulateur de devis) est détaillé dans
            la{" "}
            <a href="/confidentialite" className="font-semibold text-[var(--color-brand-dark)]">
              Politique de confidentialité
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 9 – Droit applicable
          </h2>
          <p className="mt-3">
            Les présentes mentions légales sont soumises au droit français.
            En cas de litige, et à défaut de résolution amiable, les
            tribunaux français seront seuls compétents.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Contact
          </h2>
          <p className="mt-3">
            Pour toute question relative aux présentes mentions légales :{" "}
            <a href={`mailto:${COMPANY.email}`} className="font-semibold text-[var(--color-brand-dark)]">
              {COMPANY.email}
            </a>{" "}
            — {COMPANY.telephone}
          </p>
        </section>
      </div>
    </main>
  );
}
