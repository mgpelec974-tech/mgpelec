import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — MGPElec",
  description:
    "Conditions Générales d'Utilisation du site www.mgpelec.re.",
};

export default function CGUPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
        MGPElec
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
        Conditions Générales d&apos;Utilisation
      </h1>
      <p className="mt-4 text-sm text-slate-500">
        Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent
        l&apos;accès et l&apos;utilisation du site internet www.mgpelec.re.
        Elles sont distinctes des Conditions Générales de Vente, qui
        régissent les prestations commandées auprès de{" "}
        {COMPANY.nomCommercial}.
      </p>

      <div className="mt-10 space-y-10 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 1 – Objet
          </h2>
          <p className="mt-3">
            Le site www.mgpelec.re a pour objet de présenter les activités
            de {COMPANY.nomCommercial}, de permettre aux visiteurs
            d&apos;obtenir une estimation indicative de devis pour une
            installation de borne de recharge, et de faciliter la prise de
            contact avec le Prestataire.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 2 – Acceptation des CGU
          </h2>
          <p className="mt-3">
            L&apos;accès et la navigation sur le site impliquent
            l&apos;acceptation pleine et entière des présentes CGU par tout
            visiteur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 3 – Accès au site
          </h2>
          <p className="mt-3">
            Le site est accessible gratuitement, sous réserve des frais de
            connexion à internet à la charge du visiteur, en tout lieu, 24
            heures sur 24, 7 jours sur 7, sauf cas de force majeure,
            interruption programmée ou non programmée pour maintenance, ou
            problème lié au fonctionnement des réseaux de télécommunication.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 4 – Simulateur de devis en ligne
          </h2>
          <p className="mt-3">
            Le simulateur de devis pour bornes de recharge accessible sur le
            site permet d&apos;obtenir une estimation calculée
            automatiquement à partir des paramètres renseignés par le
            visiteur (type de logement, stationnement, puissance de la
            borne, distance de câblage).
          </p>
          <p className="mt-3">
            Cette estimation revêt un caractère purement indicatif et ne
            constitue ni une offre contractuelle, ni un devis ferme et
            définitif. Elle est susceptible d&apos;être ajustée après étude
            de l&apos;installation électrique existante et visite, le cas
            échéant, du lieu d&apos;intervention. Seul un devis signé par le
            client engage {COMPANY.nomCommercial}, dans les conditions
            prévues par les Conditions Générales de Vente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 5 – Formulaires et envoi de messages
          </h2>
          <p className="mt-3">
            Le site propose des formulaires (contact, demande de devis)
            permettant au visiteur d&apos;adresser une demande directement à{" "}
            {COMPANY.nomCommercial} par voie électronique. Le visiteur
            s&apos;engage à renseigner des informations exactes et à ne pas
            détourner ces formulaires à des fins autres que celles pour
            lesquelles ils sont prévus.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 6 – Obligations du visiteur
          </h2>
          <p className="mt-3">Le visiteur s&apos;engage à ne pas :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              porter atteinte au bon fonctionnement du site (introduction de
              virus, tentative d&apos;intrusion, extraction massive de
              données) ;
            </li>
            <li>
              utiliser les formulaires du site à des fins d&apos;envoi
              massif de messages non sollicités (spam) ;
            </li>
            <li>
              reproduire, copier ou détourner tout ou partie du contenu du
              site en violation des droits de propriété intellectuelle visés
              à l&apos;article 8.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 7 – Disponibilité et responsabilité
          </h2>
          <p className="mt-3">
            {COMPANY.nomCommercial} met tout en œuvre pour assurer
            l&apos;accessibilité et l&apos;exactitude des informations
            publiées sur le site, sans garantir l&apos;absence
            d&apos;erreur, d&apos;interruption ou de dysfonctionnement.
          </p>
          <p className="mt-3">
            {COMPANY.nomCommercial} ne saurait être tenu responsable des
            dommages directs ou indirects résultant de l&apos;utilisation ou
            de l&apos;impossibilité d&apos;utiliser le site, y compris la
            perte de données ou l&apos;atteinte à un système informatique.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 8 – Propriété intellectuelle
          </h2>
          <p className="mt-3">
            L&apos;ensemble des éléments du site (textes, logos,
            photographies, charte graphique, code source) est protégé au
            titre du droit d&apos;auteur et de la propriété intellectuelle,
            conformément aux dispositions détaillées dans les{" "}
            <a href="/mentions-legales" className="font-semibold text-[var(--color-brand-dark)]">
              Mentions légales
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 9 – Liens hypertextes
          </h2>
          <p className="mt-3">
            Le site peut contenir des liens vers des sites tiers
            (notamment le compte Instagram @mgpelec). {COMPANY.nomCommercial}
            {" "}n&apos;exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu, leur disponibilité ou leurs
            propres conditions d&apos;utilisation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 10 – Données personnelles et cookies
          </h2>
          <p className="mt-3">
            Le traitement des données personnelles et l&apos;utilisation des
            cookies sont détaillés respectivement dans la{" "}
            <a href="/confidentialite" className="font-semibold text-[var(--color-brand-dark)]">
              Politique de confidentialité
            </a>{" "}
            et la{" "}
            <a href="/cookies" className="font-semibold text-[var(--color-brand-dark)]">
              Politique Cookies
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 11 – Modification des CGU
          </h2>
          <p className="mt-3">
            {COMPANY.nomCommercial} se réserve le droit de modifier à tout
            moment les présentes CGU. La version applicable est celle
            publiée sur le site à la date de consultation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 12 – Droit applicable et juridiction compétente
          </h2>
          <p className="mt-3">
            Les présentes CGU sont soumises au droit français. Tout litige
            relatif à leur interprétation ou à leur exécution relève, à
            défaut de résolution amiable, de la compétence des tribunaux
            français.
          </p>
        </section>
      </div>
    </main>
  );
}
