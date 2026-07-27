import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — MGPElec",
  description:
    "Conditions Générales de Vente de MGPElec, électricien général et installateur de bornes de recharge IRVE à La Réunion.",
};

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

type Article = {
  title: string;
  blocks: Block[];
};

const p = (text: string): Block => ({ type: "p", text });
const ul = (items: string[]): Block => ({ type: "ul", items });

const ARTICLES: Article[] = [
  {
    title: "Article 1 – Objet et champ d'application",
    blocks: [
      p(
        `Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l'ensemble des prestations réalisées par ${COMPANY.nomCommercial}, entrepreneur individuel dirigé par ${COMPANY.dirigeant}, SIREN ${COMPANY.siren}, dont le siège est situé ${COMPANY.adresse}, ${COMPANY.codePostal} ${COMPANY.ville} (ci-après « le Prestataire »), dans les domaines suivants :`
      ),
      ul([
        "Électricité générale (installation neuve et rénovation) ;",
        "Mise en conformité d'installations électriques (norme NF C 15-100) ;",
        "Dépannage électrique et recherche de panne ;",
        "Maintenance électrique, y compris industrielle et tertiaire ;",
        "Installation et maintenance de bornes de recharge pour véhicules électriques (IRVE), prises renforcées et tableaux dédiés.",
      ]),
      p(
        "Les présentes CGV s'appliquent à toute prestation conclue avec un client particulier ou professionnel, quel que soit le mode de commande (devis signé, bon de commande, contrat spécifique)."
      ),
    ],
  },
  {
    title: "Article 2 – Acceptation des CGV",
    blocks: [
      p(
        "Toute commande de prestation implique l'acceptation sans réserve des présentes CGV par le client, qui reconnaît en avoir pris connaissance préalablement à la signature du devis ou du bon de commande."
      ),
      p(
        "Les présentes CGV prévalent sur tout document du client, notamment ses conditions générales d'achat, sauf accord écrit et exprès du Prestataire dérogeant à telle ou telle clause."
      ),
    ],
  },
  {
    title: "Article 3 – Devis",
    blocks: [
      p(
        "Toute prestation fait l'objet d'un devis écrit détaillé, gratuit et sans engagement, précisant la nature des travaux, les fournitures, la main-d'œuvre, les délais indicatifs et le prix."
      ),
      p(
        "Le devis est établi sur la base des informations et de l'accès aux lieux fournis par le client. Toute information erronée ou incomplète communiquée par le client pourra donner lieu à un devis rectificatif."
      ),
    ],
  },
  {
    title: "Article 4 – Validité et acceptation du devis",
    blocks: [
      p("Le devis est valable 30 jours à compter de sa date d'émission."),
      p("Le devis devient ferme et définitif après :"),
      ul([
        "signature du client ;",
        "apposition de la mention manuscrite « Bon pour accord » ;",
        "et, le cas échéant, versement de l'acompte prévu à l'article 8.",
      ]),
      p(
        "À défaut d'acceptation dans le délai de validité, le Prestataire se réserve le droit de réviser le devis, notamment en cas d'évolution du coût des matériaux."
      ),
    ],
  },
  {
    title: "Article 5 – Prix",
    blocks: [
      p("Les prix sont exprimés en euros (€)."),
      p(
        "Ils sont indiqués hors taxes (HT) ou toutes taxes comprises (TTC) selon la qualité du client et le régime de TVA applicable à la prestation."
      ),
      p(
        "Les prix mentionnés au devis ne comprennent que les prestations expressément décrites. Toute prestation non prévue au devis fait l'objet d'un devis complémentaire ou d'un avenant, conformément à l'article 20."
      ),
    ],
  },
  {
    title: "Article 6 – Révision des prix",
    blocks: [
      p(
        "Sauf mention contraire au devis, les prix sont fermes pendant la durée de validité du devis. Au-delà, en cas d'acceptation tardive ou de report imputable au client, le Prestataire pourra proposer une actualisation des prix en fonction de l'évolution du coût des matériaux et de la main-d'œuvre."
      ),
    ],
  },
  {
    title: "Article 7 – Bon de commande",
    blocks: [
      p(
        "Pour les prestations standardisées ou de faible montant, un bon de commande pourra être émis en lieu et place d'un devis détaillé, reprenant la nature de la prestation, le prix et les présentes CGV par référence."
      ),
    ],
  },
  {
    title: "Article 8 – Acompte",
    blocks: [
      p(
        "Sauf mention contraire portée sur le devis, un acompte de 40 % du montant total TTC est demandé à la commande."
      ),
      p("Les travaux ne débutent qu'après réception effective de cet acompte."),
    ],
  },
  {
    title: "Article 9 – Modalités et moyens de paiement",
    blocks: [
      p("Le règlement peut être effectué par :"),
      ul(["virement bancaire ;", "carte bancaire ;", "chèque ;", "espèces, dans la limite légale autorisée."]),
      p(
        "Sauf indication contraire portée sur le devis ou la facture, le solde est exigible à la fin des travaux, à réception de la facture."
      ),
    ],
  },
  {
    title: "Article 10 – Paiement en 3 fois sans frais",
    blocks: [
      p(
        "Le Prestataire peut proposer, à sa seule discrétion et pour les montants qu'il détermine, un règlement en 3 fois sans frais : 40 % à la commande (acompte), 30 % à mi-exécution des travaux et 30 % à la réception, selon l'échéancier précisé sur le devis."
      ),
      p(
        "Cette facilité de paiement ne constitue pas un crédit à la consommation au sens du Code de la consommation et ne donne lieu à aucune majoration ni frais pour le client."
      ),
      p(
        "À défaut de règlement d'une échéance à son terme, l'intégralité du solde restant dû devient immédiatement exigible, sans préjudice des pénalités prévues à l'article 12."
      ),
    ],
  },
  {
    title: "Article 11 – Retard de paiement",
    blocks: [
      p(
        "Toute somme non payée à son échéance porte intérêt de plein droit, sans qu'une mise en demeure soit nécessaire, au taux d'intérêt légal en vigueur majoré, pour les clients professionnels, conformément à l'article L. 441-10 du Code de commerce."
      ),
      p(
        "Une indemnité forfaitaire pour frais de recouvrement de 40 € est due de plein droit par tout client professionnel en cas de retard de paiement, sans préjudice d'une indemnisation complémentaire sur justification si les frais de recouvrement exposés sont supérieurs à ce montant."
      ),
    ],
  },
  {
    title: "Article 12 – Pénalités et clause pénale",
    blocks: [
      p(
        "En cas de retard de paiement persistant après mise en demeure restée infructueuse pendant 15 jours, le Prestataire se réserve le droit de suspendre toute intervention en cours ou à venir, sans que cette suspension puisse lui être reprochée."
      ),
      p(
        "À titre de clause pénale, tout retard de paiement supérieur à 30 jours après mise en demeure pourra donner lieu à une majoration de 10 % des sommes dues, sans préjudice des intérêts de retard."
      ),
    ],
  },
  {
    title: "Article 13 – Délais d'exécution",
    blocks: [
      p("Les délais d'exécution communiqués au client sont donnés à titre indicatif."),
      p("Le Prestataire ne pourra être tenu responsable d'un retard dû notamment à :"),
      ul([
        "des conditions météorologiques défavorables (intempéries) ;",
        "une rupture d'approvisionnement en matériel ou fournitures ;",
        "un retard ou une carence du client (accès, informations, validations) ;",
        "l'intervention d'autres corps de métier non coordonnés par le Prestataire ;",
        "tout cas de force majeure au sens de l'article 33.",
      ]),
    ],
  },
  {
    title: "Article 14 – Report et suspension des travaux",
    blocks: [
      p(
        "Le Prestataire peut suspendre ou reporter l'exécution des travaux en cas d'impossibilité d'accès au chantier, de non-versement de l'acompte, de danger pour la sécurité des intervenants, ou de découverte en cours de chantier d'une non-conformité de l'installation existante rendant la poursuite des travaux dangereuse ou impossible en l'état."
      ),
    ],
  },
  {
    title: "Article 15 – Accès au chantier",
    blocks: [
      p(
        "Le client s'engage à permettre un accès libre, sécurisé et, le cas échéant, hors tension, aux lieux d'intervention, pendant toute la durée nécessaire à la réalisation des travaux."
      ),
      p(
        "Tout déplacement inutile du Prestataire du fait d'une impossibilité d'accès non signalée pourra être facturé au client, sur la base du tarif horaire de déplacement en vigueur."
      ),
    ],
  },
  {
    title: "Article 16 – Obligations du client",
    blocks: [
      p("Le client s'engage à :"),
      ul([
        "fournir des informations exactes et complètes sur l'installation existante et l'usage prévu ;",
        "signaler tout élément susceptible d'affecter la sécurité de l'intervention (amiante, plomb, installation vétuste, etc.) ;",
        "obtenir, le cas échéant, les autorisations nécessaires (copropriété, urbanisme, gestionnaire de réseau) ;",
        "assurer la mise à disposition de l'énergie électrique nécessaire aux travaux, sauf convention contraire.",
      ]),
    ],
  },
  {
    title: "Article 17 – Obligations du Prestataire",
    blocks: [
      p(
        "Le Prestataire s'engage à réaliser les travaux conformément aux règles de l'art, aux normes en vigueur (notamment NF C 15-100) et dans le respect des règles de sécurité applicables aux interventions sur ou à proximité d'installations électriques."
      ),
    ],
  },
  {
    title: "Article 18 – Sous-traitance",
    blocks: [
      p(
        "Le Prestataire peut, pour tout ou partie des travaux, faire appel à des sous-traitants qualifiés, sous sa responsabilité, conformément à la loi n°75-1334 du 31 décembre 1975 relative à la sous-traitance."
      ),
    ],
  },
  {
    title: "Article 19 – Fournitures et matériaux",
    blocks: [
      p(
        "Sauf stipulation contraire du devis, les fournitures et matériaux nécessaires à l'exécution des travaux sont fournis par le Prestataire, qui en garantit la conformité aux normes en vigueur."
      ),
      p(
        "Lorsque le client fournit lui-même tout ou partie du matériel (notamment une borne de recharge), la responsabilité du Prestataire est limitée à la pose et au raccordement ; il ne saurait être tenu responsable des défauts propres au matériel fourni par le client."
      ),
    ],
  },
  {
    title: "Article 20 – Travaux supplémentaires ou modificatifs",
    blocks: [
      p(
        "Toute demande de modification, d'ajout ou de travaux complémentaires postérieure à l'acceptation du devis initial fait l'objet d'un devis complémentaire ou d'un avenant écrit."
      ),
      p("Aucun travail supplémentaire n'est réalisé sans l'accord préalable et exprès du client sur son coût."),
    ],
  },
  {
    title: "Article 21 – Réserve de propriété",
    blocks: [
      p(
        "Conformément aux articles L. 624-16 et suivants du Code de commerce, le Prestataire conserve la propriété des matériels et équipements fournis jusqu'au complet paiement du prix, en principal et accessoires, nonobstant leur incorporation à l'immeuble."
      ),
      p(
        "Le transfert des risques s'opère toutefois dès la livraison ou la pose, indépendamment du transfert de propriété."
      ),
    ],
  },
  {
    title: "Article 22 – Réception des travaux",
    blocks: [
      p(
        "À l'achèvement des travaux, le client est invité à procéder à leur réception, le cas échéant au moyen d'un procès-verbal de réception signé contradictoirement."
      ),
      p("Toute réserve doit être formulée par écrit, de manière précise, au moment de la réception."),
      p("À défaut de réserve exprimée dans les conditions ci-dessus, les travaux sont réputés conformes et acceptés sans réserve."),
    ],
  },
  {
    title: "Article 23 – Levée des réserves",
    blocks: [
      p(
        "Les réserves émises à la réception font l'objet d'une reprise par le Prestataire dans un délai raisonnable, sauf impossibilité technique ou fait du client."
      ),
    ],
  },
  {
    title: "Article 24 – Garantie de parfait achèvement",
    blocks: [
      p(
        "Conformément à l'article 1792-6 du Code civil, le Prestataire est tenu, pendant un délai d'un an à compter de la réception, de réparer les désordres signalés soit lors de la réception, soit dans l'année qui suit, par voie de notification écrite."
      ),
    ],
  },
  {
    title: "Article 25 – Garantie de bon fonctionnement (biennale)",
    blocks: [
      p(
        "Conformément à l'article 1792-3 du Code civil, les éléments d'équipement dissociables de l'ouvrage (notamment certains appareillages électriques) bénéficient d'une garantie de bon fonctionnement d'une durée minimale de deux ans à compter de la réception."
      ),
    ],
  },
  {
    title: "Article 26 – Garantie décennale",
    blocks: [
      p(
        "Conformément aux articles 1792 et suivants du Code civil, le Prestataire est responsable de plein droit, pendant dix ans à compter de la réception, des dommages, y compris ceux résultant d'un vice du sol, qui compromettent la solidité de l'ouvrage ou qui, l'affectant dans l'un de ses éléments constitutifs ou l'un de ses éléments d'équipement, le rendent impropre à sa destination."
      ),
      p(
        `Cette garantie est couverte par le contrat d'assurance responsabilité civile décennale souscrit par ${COMPANY.nomCommercial} auprès de ${COMPANY.assurance.compagnie} (courtier ${COMPANY.assurance.courtier}), contrat n°${COMPANY.assurance.contrat}, dans les limites et conditions dudit contrat, une attestation étant remise sur demande.`
      ),
    ],
  },
  {
    title: "Article 27 – Exclusions de garantie",
    blocks: [
      p("Les garanties visées aux articles 24 à 26 ne couvrent pas les dommages résultant :"),
      ul([
        "d'une mauvaise utilisation ou d'un défaut d'entretien de l'installation par le client ;",
        "d'une modification, intervention ou réparation réalisée par un tiers non habilité postérieurement aux travaux ;",
        "de dégradations accidentelles ou d'actes de vandalisme ;",
        "d'événements extérieurs (foudre, inondation, surtension du réseau, incendie d'origine étrangère aux travaux, catastrophe naturelle ou climatique, etc.) ;",
        "de l'usure normale des matériels.",
      ]),
    ],
  },
  {
    title: "Article 28 – Garantie constructeur du matériel",
    blocks: [
      p(
        "Indépendamment des garanties légales visées ci-dessus, les matériels et équipements installés (bornes de recharge, tableaux, appareillages) bénéficient de la garantie propre à leur fabricant, dont les conditions sont communiquées au client sur demande."
      ),
    ],
  },
  {
    title: "Article 29 – Assurances du Prestataire",
    blocks: [
      p(
        `${COMPANY.nomCommercial} déclare être titulaire d'une assurance responsabilité civile professionnelle et responsabilité civile décennale souscrite auprès de ${COMPANY.assurance.compagnie} (courtier ${COMPANY.assurance.courtier}), contrat n°${COMPANY.assurance.contrat}, couvrant notamment les activités d'électricité, de télécommunication, d'alarmes intrusion et d'alarmes incendie. Une attestation d'assurance en cours de validité est remise au client sur simple demande.`
      ),
    ],
  },
  {
    title: "Article 30 – Responsabilité du Prestataire",
    blocks: [
      p("Le Prestataire ne pourra être tenu responsable des dommages résultant :"),
      ul([
        "d'une installation électrique existante non conforme, non signalée par le client ;",
        "d'un défaut ou d'une défaillance du réseau public de distribution d'électricité ;",
        "d'un matériel fourni par le client lui-même ;",
        "d'une utilisation non conforme des équipements installés, postérieure à la réception.",
      ]),
    ],
  },
  {
    title: "Article 31 – Limitation de responsabilité",
    blocks: [
      p(
        "Dans toute la mesure permise par la loi, la responsabilité du Prestataire au titre de l'exécution du contrat, hors garanties légales d'ordre public visées aux articles 24 à 26, est limitée au montant total facturé au titre de la prestation concernée."
      ),
    ],
  },
  {
    title: "Article 32 – Force majeure",
    blocks: [
      p(
        "Aucune des parties ne pourra être tenue responsable de l'inexécution ou du retard dans l'exécution de l'une de ses obligations résultant d'un cas de force majeure au sens de l'article 1218 du Code civil et de la jurisprudence des tribunaux français, incluant notamment les catastrophes naturelles, cyclones, événements climatiques exceptionnels propres au contexte de La Réunion, grèves générales, décisions administratives, pénuries de matériaux."
      ),
    ],
  },
  {
    title: "Article 33 – Bornes de recharge (IRVE) – Dispositions spécifiques",
    blocks: [
      p(
        "Les installations de bornes de recharge pour véhicules électriques sont réalisées conformément à la réglementation IRVE en vigueur (notamment norme NF C 15-100 et ses annexes relatives aux infrastructures de recharge)."
      ),
      p("Le client s'engage à :"),
      ul([
        "maintenir l'installation électrique et la borne en bon état de fonctionnement ;",
        "ne procéder à aucune modification des protections électriques (disjoncteur différentiel, dispositifs de protection dédiés) ;",
        "faire réaliser les opérations de maintenance périodique recommandées par le fabricant de la borne ;",
        "informer le Prestataire de tout dysfonctionnement constaté dans les meilleurs délais.",
      ]),
    ],
  },
  {
    title: "Article 34 – Contrat d'entretien et de maintenance",
    blocks: [
      p(
        "Le client peut souscrire, en complément de l'installation, un contrat d'entretien annuel dont les modalités, la périodicité et le tarif font l'objet d'un document contractuel distinct."
      ),
    ],
  },
  {
    title: "Article 35 – Confidentialité",
    blocks: [
      p(
        "Chaque partie s'engage à conserver confidentielles les informations de nature commerciale, technique ou financière dont elle aurait connaissance à l'occasion de l'exécution du contrat, et à ne les communiquer à aucun tiers sans l'accord préalable de l'autre partie, sauf obligation légale ou réglementaire."
      ),
    ],
  },
  {
    title: "Article 36 – Protection des données personnelles",
    blocks: [
      p(
        "Les données à caractère personnel communiquées par le client dans le cadre de la relation commerciale (devis, facturation, suivi de chantier) sont traitées par le Prestataire, responsable de traitement, dans le respect du Règlement (UE) 2016/679 (RGPD) et de la loi Informatique et Libertés."
      ),
      p(
        "Le détail des traitements réalisés, des finalités poursuivies et des droits dont dispose le client est décrit dans la Politique de confidentialité, accessible depuis le site www.mgpelec.re."
      ),
    ],
  },
  {
    title: "Article 37 – Droit de rétractation",
    blocks: [
      p(
        "Lorsque le contrat est conclu hors établissement, à distance, ou dans le cadre d'un démarchage au sens des articles L. 221-3 et suivants du Code de la consommation, avec un client ayant la qualité de consommateur, celui-ci dispose d'un délai de 14 jours francs à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier de motif ni à supporter de pénalités, au moyen du formulaire type de rétractation joint au contrat."
      ),
      p(
        "Ce droit ne s'applique pas aux contrats conclus dans les locaux professionnels du Prestataire, ni, sous réserve d'une demande expresse et écrite du client sollicitant une exécution immédiate, aux prestations d'urgence (dépannage) pleinement exécutées avant l'expiration du délai de rétractation."
      ),
    ],
  },
  {
    title: "Article 38 – Résiliation",
    blocks: [
      p(
        "En cas de manquement grave de l'une des parties à ses obligations, non réparé dans un délai de 15 jours suivant une mise en demeure restée sans effet, l'autre partie pourra résilier le contrat de plein droit, sans préjudice de tous dommages et intérêts."
      ),
      p(
        "En cas de résiliation à l'initiative du client après le début des travaux, les prestations déjà réalisées ainsi que les fournitures déjà engagées ou commandées restent dues au Prestataire."
      ),
    ],
  },
  {
    title: "Article 39 – Cession du contrat",
    blocks: [
      p(
        "Le client ne peut céder le bénéfice du contrat à un tiers sans l'accord écrit préalable du Prestataire."
      ),
    ],
  },
  {
    title: "Article 40 – Nullité partielle",
    blocks: [
      p(
        "Si l'une des stipulations des présentes CGV était déclarée nulle ou inapplicable, les autres stipulations conserveraient toute leur force et leur portée."
      ),
    ],
  },
  {
    title: "Article 41 – Réclamations",
    blocks: [
      p(
        `Toute réclamation relative à l'exécution du contrat peut être adressée par écrit au Prestataire, à l'adresse ${COMPANY.adresse}, ${COMPANY.codePostal} ${COMPANY.ville}, ou par e-mail à ${COMPANY.email}. Le Prestataire s'engage à accuser réception de toute réclamation dans un délai raisonnable et à y apporter une réponse motivée.`
      ),
    ],
  },
  {
    title: "Article 42 – Médiation de la consommation",
    blocks: [
      p(
        "Conformément aux articles L. 616-1 et R. 616-1 du Code de la consommation, tout client consommateur dispose du droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige, après démarche écrite préalable auprès du Prestataire restée infructueuse."
      ),
      p(
        "Médiateur de la consommation compétent : [Dénomination, adresse postale et adresse du site internet du médiateur à compléter par le Prestataire après adhésion à un médiateur agréé]."
      ),
    ],
  },
  {
    title: "Article 43 – Droit applicable",
    blocks: [
      p("Les présentes CGV sont soumises au droit français."),
    ],
  },
  {
    title: "Article 44 – Attribution de compétence",
    blocks: [
      p(
        "En cas de litige, et après recherche préalable d'une solution amiable, les tribunaux territorialement compétents du ressort de La Réunion seront seuls compétents, sauf règles de procédure impératives contraires applicables aux litiges de consommation."
      ),
    ],
  },
  {
    title: "Article 45 – Entrée en vigueur et durée",
    blocks: [
      p(
        "Les présentes CGV s'appliquent à toute commande passée à compter de leur date de mise en ligne sur le site www.mgpelec.re et jusqu'à leur remplacement par une version ultérieure."
      ),
    ],
  },
];

export default function CGVPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-dark)]">
        MGPElec
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-[var(--color-heading)] sm:text-4xl">
        Conditions Générales de Vente
      </h1>
      <p className="mt-4 text-sm text-slate-500">
        Version applicable aux prestations de {COMPANY.nomCommercial}. Ce
        document est un projet rédigé avec assistance et doit être validé
        par un professionnel du droit avant d&apos;être opposé à des tiers,
        notamment s&apos;agissant de l&apos;article 42 (médiation), à
        compléter après adhésion à un médiateur agréé.
      </p>

      <div className="mt-10 space-y-10 text-slate-600">
        {ARTICLES.map((article) => (
          <section key={article.title}>
            <h2 className="text-xl font-bold text-[var(--color-heading)]">
              {article.title}
            </h2>
            {article.blocks.map((block, i) =>
              block.type === "p" ? (
                <p key={i} className="mt-3">
                  {block.text}
                </p>
              ) : (
                <ul key={i} className="mt-3 list-disc space-y-1 pl-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            )}
          </section>
        ))}

        <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Coordonnées
          </h2>
          <p className="mt-3 font-semibold text-[var(--color-heading)]">
            {COMPANY.nomCommercial}
          </p>
          <p className="mt-1">
            Électricité générale • Installation de bornes de recharge IRVE •
            Maintenance électrique
          </p>
          <p className="mt-3">
            E-mail :{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-semibold text-[var(--color-brand-dark)]"
            >
              {COMPANY.email}
            </a>
          </p>
          <p className="mt-1">
            Site internet :{" "}
            <a
              href={COMPANY.siteHref}
              className="font-semibold text-[var(--color-brand-dark)]"
            >
              {COMPANY.site}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
