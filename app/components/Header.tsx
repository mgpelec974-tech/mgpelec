import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#zone", label: "Zone d'intervention" },
  { href: "/devis-borne-recharge", label: "Devis borne de recharge" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative block h-11 w-11 overflow-hidden rounded-md">
            <Image
              src="/logo-mgpelec.png"
              alt="Logo MGPElec"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="text-lg font-bold tracking-tight text-[var(--color-ink)]">
            MGP<span className="text-[var(--color-brand-dark)]">Elec</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--color-brand-dark)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+262692383069"
          className="rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105"
        >
          06 92 38 30 69
        </a>
      </div>
    </header>
  );
}
