import Link from "next/link";
import { INSTAGRAM_PROFILE_URL } from "./InstagramFeed";

const FACEBOOK_PROFILE_URL = "https://www.facebook.com/share/19ZkZevAMN/?mibextid=wwXIfr";

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.3c-.27-.04-1.2-.12-2.27-.12-2.25 0-3.78 1.37-3.78 3.9V10.5H8v3h2.45V21h3.05Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x={3.5} y={3.5} width={17} height={17} rx={5} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={12} cy={12} r={4.2} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={17.2} cy={6.8} r={1.1} fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[var(--color-sidebar)] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">
            MGP<span className="text-[var(--color-brand)]">Elec</span>
          </p>
          <p className="mt-2 text-sm">
            Électricien général — installation, dépannage et bornes de
            recharge pour véhicules électriques.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={FACEBOOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MGPElec sur Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors hover:bg-[var(--color-brand)] hover:text-white"
            >
              <IconFacebook />
            </a>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MGPElec sur Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors hover:bg-[var(--color-brand)] hover:text-white"
            >
              <IconInstagram />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="tel:+262692383069" className="hover:text-white">
                06 92 38 30 69
              </a>
            </li>
            <li>
              <a href="mailto:contact@mgpelec.re" className="hover:text-white">
                contact@mgpelec.re
              </a>
            </li>
            <li>Toute l&apos;île de la Réunion</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Liens
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/#services" className="hover:text-white">
                Nos services
              </Link>
            </li>
            <li>
              <Link href="/devis-borne-recharge" className="hover:text-white">
                Devis borne de recharge
              </Link>
            </li>
            <li>
              <Link href="/#zone" className="hover:text-white">
                Zone d&apos;intervention
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Informations légales
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-white">
                Conditions Générales de Vente
              </Link>
            </li>
            <li>
              <Link href="/cgu" className="hover:text-white">
                Conditions Générales d&apos;Utilisation
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                Politique Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400 sm:px-6">
        © {year} MGPElec. Tous droits réservés. —{" "}
        <Link href="/mentions-legales" className="hover:text-white">
          Mentions légales
        </Link>{" "}
        —{" "}
        <Link href="/cgv" className="hover:text-white">
          CGV
        </Link>{" "}
        —{" "}
        <Link href="/confidentialite" className="hover:text-white">
          Confidentialité
        </Link>
      </div>
    </footer>
  );
}
