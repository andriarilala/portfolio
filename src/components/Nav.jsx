const LINKS = [
  { href: '#works', label: 'Réalisations' },
  { href: '#services', label: 'Prestations' },
  { href: '#about', label: 'À propos' },
  { href: '#distinctions', label: 'Distinctions' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  return (
    <header className="pt-6">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <a className="text-[1.35rem] font-extrabold text-[var(--ink)] no-underline" href="#top">
          Herizo<span className="text-accent">.</span>
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Navigation principale">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-[var(--ink-dim)] no-underline hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-accent py-[.55rem] pr-[.55rem] pl-6 text-[15px] font-semibold text-white no-underline transition hover:-translate-y-px hover:bg-[var(--ink)]"
        >
          Contact
          <span
            aria-hidden="true"
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white text-accent transition-transform group-hover:rotate-45 group-hover:text-[var(--ink)]"
          >
            →
          </span>
        </a>
      </div>
    </header>
  )
}
