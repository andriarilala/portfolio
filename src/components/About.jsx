const TIMELINE = [
  { role: 'Licence en Informatique', org: 'ENI Fianarantsoa', year: '2021 – 2024' },
  { role: 'Développeur Full Stack', org: 'Qualitec, Fianarantsoa', year: '2024 – 2026', link: 'https://qualitec.mg/' },
  { role: 'Designer', org: 'Code Talent, Antananarivo', year: '2025 – 2026', link: 'https://www.code-talent.fr/' },
  { role: 'UX/UI Designer', org: 'Club Multimédia, ENI', year: '2025' },
  { role: 'Master 2 Génie Logiciel & BD', org: 'ENI Fianarantsoa', year: '2025 – 2026' },
]

const LANGS = ['Malagasy', 'Français ', 'Anglais']

export default function About() {
  return (
    <section className="py-14 sm:py-20 lg:py-24" id="about">
      <div className="relative mx-auto max-w-full px-5 sm:px-8">
        <p className="mb-4 text-center text-[1rem] font-medium text-[var(--ink-dim)] italic">(Profil)</p>
        <h2 className="giant-text-soft mb-[clamp(-7rem,-13vw,-11rem)] text-center text-[3rem] leading-[1.50] font-extrabold tracking-[-.03em] select-none sm:text-[clamp(3.2rem,24vw,20rem)]">
          À propos
        </h2>

        <div className="relative z-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
          <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[20px]">
            <img
              src="/images/herizo-niaina.jpg"
              alt="Herizo Niaina"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(20,10,5,.55) 100%)' }}
              aria-hidden="true"
            ></div>
          </div>

          <div>
            <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-[var(--ink)]">Développeur &amp; designer</h3>
            <p className="mt-4 max-w-[56ch] text-[1.05rem] text-[var(--ink-dim)]">
              Je suis développeur full stack et designer UX/UI, actuellement en Master 2 en génie logiciel et
              bases de données à l'École Nationale d'Informatique de Fianarantsoa. Je pratique le
              développement web et mobile depuis plus de quatre ans, de la conception d'interface à la mise
              en production — React, Next.js, Node.js, Laravel, Three.js. Ma double compétence développement
              et design me permet de livrer des produits à la fois robustes et soignés.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {LANGS.map((l) => (
                <span key={l} className="rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-[.78rem] text-[var(--ink-dim)]">
                  {l}
                </span>
              ))}
            </div>
            <div className="mt-7 border-t border-[var(--line)]">
              {TIMELINE.map((t) => (
                <div key={t.role + t.org} className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-4">
                  <div>
                    <p className="text-[.98rem] font-semibold text-[var(--ink)]">{t.role}</p>
                    <p className="mt-0.5 text-[.88rem] text-[var(--ink-dim)]">
                      {t.link ? (
                        <a
                          href={t.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--ink-dim)] underline decoration-[var(--line-strong)] underline-offset-2 transition hover:text-accent hover:decoration-accent"
                        >
                          {t.org}
                        </a>
                      ) : (
                        t.org
                      )}
                    </p>
                  </div>
                  <span className="text-[.85rem] whitespace-nowrap text-[var(--ink-faint)] tabular-nums">{t.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
