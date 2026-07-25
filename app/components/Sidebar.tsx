import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#zone", label: "Zone d'intervention" },
  { href: "/devis-borne-recharge", label: "Devis borne de recharge" },
  { href: "/#contact", label: "Contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-md">
        <Image
          src="/logo-mgpelec.png"
          alt="Logo MGPElec"
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </span>
      <span className="text-lg font-bold leading-tight tracking-tight text-white">
        MGP <span className="text-[var(--color-brand)]">ELEC</span>
        <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">
          Que le courant passe
        </span>
      </span>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <>
      {/* Sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col justify-between bg-[var(--color-sidebar)] px-6 py-8 lg:flex">
        <div>
          <Logo />
          <nav className="mt-12 flex flex-col gap-1 text-sm font-medium text-slate-300">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <a
          href="tel:+262692383069"
          className="rounded-full bg-[var(--color-brand)] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
        >
          06 92 38 30 69
        </a>
      </aside>

      {/* Top bar (mobile) */}
      <header className="sticky top-0 z-50 bg-[var(--color-sidebar)] lg:hidden">
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <Logo />
          <a
            href="tel:+262692383069"
            className="rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white shadow-sm"
          >
            06 92 38 30 69
          </a>
        </div>
        <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
