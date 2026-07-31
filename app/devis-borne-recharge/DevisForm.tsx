"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

const PHONE_DISPLAY = "06 92 38 30 69";
const PHONE_HREF = "tel:+262692383069";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type GroupKey = "logement" | "stationnement" | "puissance" | "tableau";

type PuissanceOption = {
  label: string;
  // null = prix sur devis (étude au cas par cas), 0 = pose seule (pas de borne fournie)
  price: number | null;
  image?: string;
  // La borne Hager intègre sa propre protection et communique avec le
  // compteur Linky via le TIC : pas d'interrupteur différentiel/disjoncteur
  // dédié à ajouter, mais un paramétrage TIC en plus.
  hasTic?: boolean;
};

const PUISSANCE_OPTIONS: PuissanceOption[] = [
  {
    label: "7,4 kW (borne Hager)",
    price: 1010,
    image: "/produits/hager-7-4kw.png",
    hasTic: true,
  },
  {
    label: "7 kW Wallbox (monophasé)",
    price: 550,
    image: "/produits/wallbox-7kw-monophase.png",
  },
  {
    label: "7,4 kW (Schneider Electric)",
    price: 1015,
    image: "/produits/schneider-7-4kw.png",
    hasTic: true,
  },
  { label: "11 kW", price: null },
  { label: "Sans borne (pose seule)", price: 0 },
  { label: "Autre borne (précisez)", price: null },
];

const AUTRE_BORNE_LABEL = "Autre borne (précisez)";

function getPuissanceOption(label: string | null) {
  return PUISSANCE_OPTIONS.find((option) => option.label === label);
}

// Calibré sur deux devis réels (câble/goulotte ramenés au mètre de câble) :
//
// - Bornes SANS TIC (Wallbox, sans borne, autre, 11 kW) — devis n°75 (8 m,
//   pose seule) : interrupteur différentiel (189€) + disjoncteur dédié
//   (20€) + passage du câble/raccordement (180€) + contrôles/essais/mise
//   en service (40€) = 429€ fixe, + câble & goulotte ≈ 17€/m.
//
// - Borne Hager AVEC TIC — devis n°77 (10 m) : protection intégrée à la
//   borne (pas d'interrupteur/disjoncteur séparés), passage du câble/
//   raccordement + paramétrage TIC + essais = 365€ fixe, + câble (avec
//   liaison TIC) & goulotte ≈ 25,43€/m.
const STANDARD_FIXED_POSE = 429;
const STANDARD_PER_METER = 17;
const HAGER_FIXED_POSE = 365;
const HAGER_PER_METER = 25.43;
const DISTANCE_MIN = 1;
const DISTANCE_MAX = 40;

function getInstallCost(meters: number, hasTic: boolean) {
  const perMeter = hasTic ? HAGER_PER_METER : STANDARD_PER_METER;
  const fixed = hasTic ? HAGER_FIXED_POSE : STANDARD_FIXED_POSE;
  return fixed + meters * perMeter;
}

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconParking() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x={4} y={4} width={16} height={16} rx={2} stroke="currentColor" strokeWidth={1.6} />
      <path
        d="M9.5 16V8h3a2.5 2.5 0 1 1 0 5h-3"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3.5 5 6v5.5c0 4.5 3 7.4 7 9 4-1.6 7-4.5 7-9V6z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4.2"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRuler() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect
        x={3}
        y={9}
        width={18}
        height={6}
        rx={1.2}
        transform="rotate(-8 12 12)"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path
        d="M7 10.3 6.4 12M11 9.7l-.6 2M15 9 14.4 11"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
      <path
        d="m5 12 5 5 9-10"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const GROUP_ICONS: Record<GroupKey, ReactNode> = {
  logement: <IconHome />,
  stationnement: <IconParking />,
  puissance: <IconBolt />,
  tableau: <IconShieldCheck />,
};

const GROUPS: { key: GroupKey; label: string; options: string[] }[] = [
  {
    key: "logement",
    label: "Type de logement",
    options: [
      "Maison individuelle",
      "Appartement / copropriété",
      "Entreprise / professionnel",
    ],
  },
  {
    key: "stationnement",
    label: "Type de stationnement",
    options: [
      "Garage fermé",
      "Extérieur privé (allée, parking privé)",
      "Parking collectif / copropriété",
    ],
  },
  {
    key: "puissance",
    label: "Puissance souhaitée",
    options: PUISSANCE_OPTIONS.map((option) => option.label),
  },
  {
    key: "tableau",
    label: "Tableau électrique aux normes ?",
    options: ["Je ne sais pas", "Oui", "Non"],
  },
];

const GROUP_LABELS: Record<GroupKey, string> = {
  logement: "Type de logement",
  stationnement: "Type de stationnement",
  puissance: "Puissance souhaitée",
  tableau: "Tableau électrique aux normes",
};

const initialSelection: Record<GroupKey, string | null> = {
  logement: null,
  stationnement: null,
  puissance: null,
  tableau: null,
};

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

type SendStatus = "idle" | "sending" | "success" | "error";

export default function DevisForm() {
  const [selection, setSelection] = useState(initialSelection);
  const [distanceMeters, setDistanceMeters] = useState(DISTANCE_MIN);
  const [autreBorneDetails, setAutreBorneDetails] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [status, setStatus] = useState<SendStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const select = (key: GroupKey, value: string) => {
    setSelection((prev) => ({ ...prev, [key]: value }));
  };

  const selectedPuissance = getPuissanceOption(selection.puissance);
  const puissancePrice = selection.puissance
    ? (selectedPuissance?.price ?? null)
    : undefined;
  const onRequest = selection.puissance !== null && puissancePrice === null;
  const hasTic = selectedPuissance?.hasTic ?? false;
  const installCost = getInstallCost(distanceMeters, hasTic);
  const totalPrice =
    typeof puissancePrice === "number" ? puissancePrice + installCost : null;

  const answeredCount =
    Object.values(selection).filter(Boolean).length + 1; // +1 pour le curseur, toujours renseigné

  const buildSummary = () => {
    const summaryLines = GROUPS.map(
      (group) => `${GROUP_LABELS[group.key]} : ${selection[group.key] ?? "-"}`
    );
    summaryLines.splice(3, 0, `Distance du câble : ${distanceMeters} m`);

    if (selection.puissance === AUTRE_BORNE_LABEL && autreBorneDetails.trim()) {
      summaryLines.push(`Précisions borne demandée : ${autreBorneDetails.trim()}`);
    }

    const priceLines = [
      typeof puissancePrice === "number"
        ? puissancePrice > 0
          ? `Borne (${selection.puissance}) : ${priceFormatter.format(puissancePrice)} €`
          : "Fourniture de la borne : non incluse (pose seule)"
        : onRequest
          ? `Borne (${selection.puissance}) : prix sur devis, à étudier avec vous`
          : null,
      `Câble, fournitures & pose${hasTic ? " (avec TIC)" : ""} (${distanceMeters} m) : ${priceFormatter.format(installCost)} €`,
      totalPrice !== null
        ? `Total estimé TTC : ${priceFormatter.format(totalPrice)} €`
        : onRequest
          ? `Total : sur devis (${selection.puissance} à étudier)`
          : "Total estimé : à préciser (puissance non sélectionnée)",
    ].filter((line): line is string => Boolean(line));

    return { summaryLines, priceLines };
  };

  const handleSend = async () => {
    if (!visitorEmail || !EMAIL_REGEX.test(visitorEmail)) {
      setStatus("error");
      setErrorMessage("Merci d'indiquer un email valide.");
      return;
    }
    if (!visitorPhone || visitorPhone.trim().length < 6) {
      setStatus("error");
      setErrorMessage("Merci d'indiquer un numéro de téléphone.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const { summaryLines, priceLines } = buildSummary();

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorEmail,
          visitorPhone,
          summaryLines,
          priceLines,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.error ?? "Échec de l'envoi, réessayez.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Échec de l'envoi, réessayez ou appelez-nous.");
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-8">
      <div className="space-y-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-500">
            Configuration ({Math.min(answeredCount, 5)}/5)
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-6 rounded-full transition-colors duration-300 ${
                  i < answeredCount ? "bg-[var(--color-brand)]" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {GROUPS.map((group) => (
          <div key={group.key}>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span className="text-[var(--color-brand-dark)]">
                {GROUP_ICONS[group.key]}
              </span>
              {group.label}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {group.options.map((option) => {
                const isActive = selection[group.key] === option;
                const puissanceOption =
                  group.key === "puissance" ? getPuissanceOption(option) : undefined;
                const optionPrice = puissanceOption?.price ?? null;
                const priceTag =
                  group.key === "puissance"
                    ? optionPrice === null
                      ? "Sur devis"
                      : optionPrice === 0
                        ? "Fourniture non incluse"
                        : `${priceFormatter.format(optionPrice)} €`
                    : null;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => select(group.key, option)}
                    aria-pressed={isActive}
                    className={`relative rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-[var(--color-brand-dark)] bg-red-50 text-[var(--color-heading)] shadow-sm ring-1 ring-[var(--color-brand)]"
                        : "border-slate-200 text-slate-600 hover:-translate-y-0.5 hover:border-[var(--color-brand-dark)] hover:shadow-sm"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-brand-dark)] text-white">
                        <IconCheck />
                      </span>
                    )}
                    {puissanceOption?.image && (
                      <span className="relative mb-2 block h-20 w-full overflow-hidden rounded-lg bg-slate-100">
                        <Image
                          src={puissanceOption.image}
                          alt={option}
                          fill
                          sizes="200px"
                          className="object-cover"
                        />
                      </span>
                    )}
                    <span className="block pr-4">{option}</span>
                    {priceTag && (
                      <span className="mt-1 block text-xs font-semibold text-[var(--color-brand-dark)]">
                        {priceTag}
                      </span>
                    )}
                    {puissanceOption?.hasTic && (
                      <span className="mt-1 inline-block rounded-full bg-[var(--color-accent-blue)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent-blue)]">
                        Compatible TIC
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {group.key === "puissance" &&
              selection.puissance === AUTRE_BORNE_LABEL && (
                <div className="mt-3">
                  <textarea
                    value={autreBorneDetails}
                    onChange={(event) => setAutreBorneDetails(event.target.value)}
                    rows={3}
                    placeholder="Décrivez la borne souhaitée : marque, modèle, puissance, ou tout autre précision..."
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--color-brand-dark)]"
                  />
                </div>
              )}
          </div>
        ))}

        <div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span className="text-[var(--color-brand-dark)]">
                <IconRuler />
              </span>
              Distance du câble (tableau ↔ borne)
            </p>
            <p className="text-sm font-semibold text-[var(--color-brand-dark)]">
              {distanceMeters} m
            </p>
          </div>
          <input
            type="range"
            min={DISTANCE_MIN}
            max={DISTANCE_MAX}
            step={1}
            value={distanceMeters}
            onChange={(event) => setDistanceMeters(Number(event.target.value))}
            className="mt-4 w-full accent-[var(--color-brand-dark)]"
            aria-label="Distance du câble en mètres"
          />
          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>1 m</span>
            <span>40 m</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 lg:sticky lg:top-24">
        <div className="overflow-hidden rounded-2xl border border-black/5 bg-[var(--color-ink)] p-6 text-white shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Devis estimé
          </p>
          <p
            key={totalPrice ?? (onRequest ? "on-request" : "none")}
            className="mt-1 text-4xl font-extrabold [animation:price-pop_0.3s_ease]"
          >
            {totalPrice !== null
              ? `${priceFormatter.format(totalPrice)} €`
              : onRequest
                ? "Sur devis"
                : "—"}
          </p>
          {totalPrice === null && (
            <p className="mt-1 text-sm text-slate-400">
              {onRequest
                ? "Cette option nécessite une étude au cas par cas."
                : "Choisissez une puissance de borne"}
            </p>
          )}

          {(totalPrice !== null || onRequest) && (
            <div className="mt-4 space-y-1.5 border-t border-white/10 pt-4 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>
                  {onRequest
                    ? `Borne ${selection.puissance}`
                    : puissancePrice && puissancePrice > 0
                      ? `Borne ${selection.puissance}`
                      : "Borne : non incluse (pose seule)"}
                </span>
                <span>
                  {onRequest
                    ? "Sur devis"
                    : `${priceFormatter.format(puissancePrice ?? 0)} €`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  Câble, fournitures & pose{hasTic ? " (avec TIC)" : ""} (
                  {distanceMeters} m)
                </span>
                <span>{priceFormatter.format(installCost)} €</span>
              </div>
              {hasTic && (
                <p className="text-xs text-slate-400">
                  TIC = Télé-Information Client : la borne dialogue avec
                  votre compteur Linky pour moduler la charge et éviter les
                  coupures.
                </p>
              )}
              <div className="mt-2 flex justify-between border-t border-white/10 pt-2 font-semibold text-white">
                <span>Total TTC</span>
                <span>
                  {totalPrice !== null
                    ? `${priceFormatter.format(totalPrice)} €`
                    : "Sur devis"}
                </span>
              </div>
              <p className="pt-1 text-xs text-slate-500">
                TVA non applicable, art. 293 B du CGI. Sujet à confirmation
                selon votre installation électrique.
              </p>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300">
                Paiement en plusieurs fois bientôt disponible
              </div>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-black/5 bg-amber-50 p-6">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            Pour valider, contactez-moi directement :
          </p>

          <a
            href={PHONE_HREF}
            className="mt-4 block rounded-full bg-[var(--color-brand)] px-6 py-3 text-center font-semibold text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105"
          >
            Appeler {PHONE_DISPLAY}
          </a>

          <div className="mt-4 space-y-2 border-t border-black/10 pt-4">
            <p className="text-xs font-semibold text-slate-500">
              Ou recevez un devis par email, je vous recontacte :
            </p>
            <input
              type="email"
              value={visitorEmail}
              onChange={(event) => setVisitorEmail(event.target.value)}
              placeholder="Votre email"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--color-brand-dark)]"
            />
            <input
              type="tel"
              value={visitorPhone}
              onChange={(event) => setVisitorPhone(event.target.value)}
              placeholder="Votre téléphone"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--color-brand-dark)]"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={status === "sending"}
              className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition-colors hover:border-[var(--color-brand-dark)] hover:text-[var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Envoi en cours..."
                : "M'envoyer ce devis par email"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-700">
                Votre demande a bien été envoyée, je vous recontacte
                rapidement.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
