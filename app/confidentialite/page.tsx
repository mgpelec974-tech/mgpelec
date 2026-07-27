import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité — MGPElec",
  description:
    "Politique de confidentialité et de protection des données personnelles du site www.mgpelec.re.",
};

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
        MGPElec
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-sm text-slate-500">
        La présente politique décrit la manière dont {COMPANY.nomCommercial}
        {" "}traite les données à caractère personnel des visiteurs et
        clients du site www.mgpelec.re, conformément au Règlement (UE)
        2016/679 du 27 avril 2016 (RGPD) et à la loi n°78-17 du 6 janvier
        1978 modifiée relative à l&apos;informatique, aux fichiers et aux
        libertés.
      </p>

      <div className="mt-10 space-y-10 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 1 – Responsable de traitement
          </h2>
          <p className="mt-3">
            Le responsable du traitement des données collectées sur le site
            est {COMPANY.nomCommercial}, {COMPANY.formeJuridique}, SIREN{" "}
            {COMPANY.siren}, {COMPANY.adresse}, {COMPANY.codePostal}{" "}
            {COMPANY.ville}, joignable à l&apos;adresse{" "}
            <a href={`mailto:${COMPANY.email}`} className="font-semibold text-[var(--color-brand-dark)]">
              {COMPANY.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 2 – Données collectées
          </h2>
          <p className="mt-3">
            Le site www.mgpelec.re collecte les données suivantes,
            uniquement lorsque le visiteur les renseigne volontairement dans
            l&apos;un des formulaires du site :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>Formulaire de contact :</strong> nom, adresse e-mail,
              contenu du message.
            </li>
            <li>
              <strong>Simulateur de devis borne de recharge :</strong>{" "}
              adresse e-mail, numéro de téléphone, configuration du projet
              renseignée (type de logement, stationnement, puissance
              souhaitée, distance de câblage).
            </li>
          </ul>
          <p className="mt-3">
            Le site ne dépose aucun cookie de mesure d&apos;audience ou de
            publicité ciblée. Le détail des éléments techniques déposés est
            précisé dans la{" "}
            <a href="/cookies" className="font-semibold text-[var(--color-brand-dark)]">
              Politique Cookies
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 3 – Finalités du traitement
          </h2>
          <p className="mt-3">Les données collectées sont utilisées exclusivement pour :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>répondre aux demandes de devis et aux demandes de contact ;</li>
            <li>établir et transmettre des devis et factures ;</li>
            <li>assurer le suivi de la relation commerciale et, le cas échéant, le service après-vente.</li>
          </ul>
          <p className="mt-3">
            Aucune donnée n&apos;est utilisée à des fins de prospection
            commerciale non sollicitée, de profilage automatisé ou revendue
            à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 4 – Base légale des traitements
          </h2>
          <p className="mt-3">
            Les traitements décrits à l&apos;article 3 reposent sur
            l&apos;exécution de mesures précontractuelles prises à la
            demande du visiteur (établissement d&apos;un devis) et, à
            défaut, sur l&apos;intérêt légitime du responsable de traitement
            à répondre aux sollicitations qui lui sont adressées (article 6,
            paragraphe 1, points b) et f) du RGPD).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 5 – Destinataires des données
          </h2>
          <p className="mt-3">
            Les données collectées sont destinées à {COMPANY.nomCommercial}
            {" "}et ne sont communiquées à aucun tiers à des fins
            commerciales. Elles transitent, pour les seuls besoins
            techniques d&apos;acheminement, par les sous-traitants suivants
            :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>Resend</strong> (service d&apos;envoi d&apos;e-mails
              transactionnels), pour la transmission des messages du
              formulaire de contact et du simulateur de devis à
              l&apos;adresse e-mail du responsable de traitement ;
            </li>
            <li>
              <strong>{COMPANY.hebergementApplicatif.nom}</strong>, pour
              l&apos;hébergement technique du site et de ses formulaires.
            </li>
          </ul>
          <p className="mt-3">
            Ces prestataires peuvent être établis en dehors de
            l&apos;Union européenne. Dans ce cas, le transfert des données
            est encadré par des garanties appropriées, telles que les
            clauses contractuelles types de la Commission européenne.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 6 – Durée de conservation
          </h2>
          <p className="mt-3">
            Les données relatives à une demande de devis ou de contact sont
            conservées pendant une durée de 3 ans à compter du dernier
            contact, à des fins de suivi commercial, sauf conclusion
            d&apos;un contrat, auquel cas les données sont conservées
            conformément aux durées légales de conservation des documents
            commerciaux et comptables (notamment 10 ans pour les documents
            comptables en application du Code de commerce).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 7 – Sécurité des données
          </h2>
          <p className="mt-3">
            Le responsable de traitement met en œuvre les mesures
            techniques et organisationnelles raisonnables pour préserver la
            sécurité, l&apos;intégrité et la confidentialité des données
            collectées, et empêcher qu&apos;elles ne soient déformées,
            endommagées ou communiquées à des tiers non autorisés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 8 – Droits des personnes concernées
          </h2>
          <p className="mt-3">
            Conformément au RGPD, toute personne dispose des droits suivants
            sur ses données personnelles :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>droit d&apos;accès ;</li>
            <li>droit de rectification ;</li>
            <li>droit à l&apos;effacement (« droit à l&apos;oubli ») ;</li>
            <li>droit à la limitation du traitement ;</li>
            <li>droit d&apos;opposition ;</li>
            <li>droit à la portabilité des données ;</li>
            <li>droit de définir des directives relatives au sort des données après le décès.</li>
          </ul>
          <p className="mt-3">
            Ces droits peuvent être exercés à tout moment par e-mail à{" "}
            <a href={`mailto:${COMPANY.email}`} className="font-semibold text-[var(--color-brand-dark)]">
              {COMPANY.email}
            </a>
            , accompagné d&apos;un justificatif d&apos;identité. Une réponse
            est apportée dans un délai maximal d&apos;un mois.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 9 – Réclamation auprès de la CNIL
          </h2>
          <p className="mt-3">
            Si la personne concernée estime, après avoir contacté le
            responsable de traitement, que ses droits ne sont pas respectés,
            elle peut adresser une réclamation à la Commission Nationale de
            l&apos;Informatique et des Libertés (CNIL) — 3 Place de
            Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 10 – Modification de la présente politique
          </h2>
          <p className="mt-3">
            La présente politique de confidentialité peut être mise à jour à
            tout moment, notamment pour se conformer à toute évolution
            réglementaire, technique ou jurisprudentielle. La version
            applicable est celle publiée sur le site à la date de la
            consultation.
          </p>
        </section>
      </div>
    </main>
  );
}
