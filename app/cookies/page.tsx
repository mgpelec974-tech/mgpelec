import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique Cookies — MGPElec",
  description:
    "Politique relative aux cookies et traceurs du site www.mgpelec.re.",
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
        MGPElec
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
        Politique Cookies
      </h1>

      <div className="mt-10 space-y-10 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 1 – Qu'est-ce qu'un cookie ?
          </h2>
          <p className="mt-3">
            Un cookie (ou traceur) est un petit fichier texte déposé sur le
            terminal d&apos;un visiteur lors de la consultation d&apos;un
            site internet, permettant notamment de reconnaître ce terminal
            lors de visites ultérieures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 2 – Absence de cookies de mesure d'audience et de publicité
          </h2>
          <p className="mt-3">
            Le site www.mgpelec.re ne dépose, à ce jour, aucun cookie de
            mesure d&apos;audience (statistiques), de publicité ciblée ou de
            profilage. Aucun outil de suivi tiers de type Google Analytics
            ou équivalent n&apos;est installé sur le site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 3 – Contenus tiers intégrés
          </h2>
          <p className="mt-3">
            Le site intègre certains contenus provenant de services tiers,
            susceptibles de déposer leurs propres cookies ou traceurs
            techniques, sur lesquels {COMPANY.nomCommercial} n&apos;a aucun
            contrôle :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>OpenStreetMap</strong> : la carte de la zone
              d&apos;intervention affichée sur la page d&apos;accueil est
              chargée depuis openstreetmap.org ;
            </li>
            <li>
              <strong>Instagram</strong> : les photos et vidéos affichées
              dans la section « Nos réalisations » sont hébergées sur les
              serveurs d&apos;Instagram (Meta Platforms, Inc.) et chargées
              directement depuis ceux-ci.
            </li>
          </ul>
          <p className="mt-3">
            Ces services tiers sont susceptibles de déposer des cookies
            techniques propres, régis par leur propre politique de
            confidentialité, que nous vous invitons à consulter directement
            auprès de ces prestataires.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 4 – Cookies techniques essentiels
          </h2>
          <p className="mt-3">
            L&apos;hébergeur technique du site ({COMPANY.hebergementApplicatif.nom})
            peut être amené à utiliser des éléments techniques strictement
            nécessaires au fonctionnement et à la sécurité du site
            (répartition de charge, prévention des attaques). Ces éléments,
            dispensés de consentement au titre de l&apos;article 82 de la
            loi Informatique et Libertés, ne servent à aucune finalité de
            suivi du visiteur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 5 – Gestion des cookies par le visiteur
          </h2>
          <p className="mt-3">
            Le visiteur peut à tout moment configurer son navigateur pour
            refuser l&apos;enregistrement de cookies, ou être averti avant
            leur dépôt. La configuration de chaque navigateur est
            différente ; elle est décrite dans le menu d&apos;aide du
            navigateur utilisé.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Article 6 – Évolution de la présente politique
          </h2>
          <p className="mt-3">
            En cas d&apos;ajout futur d&apos;outils de mesure d&apos;audience
            ou de tout autre traceur soumis à consentement,{" "}
            {COMPANY.nomCommercial} mettra en place un bandeau de recueil du
            consentement conforme à la réglementation applicable, et mettra
            à jour la présente politique en conséquence.
          </p>
        </section>
      </div>
    </main>
  );
}
