import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[var(--color-sidebar)] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">
            MGP<span className="text-[var(--color-brand)]">Elec</span>
          </p>
          <p className="mt-2 text-sm">
            Électricien général — installation, dépannage et bornes de
            recharge pour véhicules électriques.
          </p>
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
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400 sm:px-6">
        © {year} MGPElec. Tous droits réservés.
      </div>
    </footer>
  );
}
