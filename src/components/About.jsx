const TIMELINE = [
  { role: 'Développeur Full Stack', org: 'Qualitec, Fianarantsoa', year: '2024 – 2026' },
  { role: 'Designer', org: 'Code Talent, Antananarivo', year: '2025 – 2026' },
  { role: 'UX/UI Designer', org: 'Club Multimédia, ENI', year: '2025' },
  { role: 'Master 2 Génie Logiciel & BD', org: 'ENI Fianarantsoa', year: '2025 – 2026' },
  { role: 'Licence en Informatique', org: 'ENI Fianarantsoa', year: '2021 – 2024' },
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
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(20,10,5,.75) 100%)' }}
              aria-hidden="true"
            ></div>
            <div className="absolute bottom-4 left-4 z-10 flex gap-2" aria-hidden="true">
              {['Gh', 'in', 'Be'].map((s) => (
                <span
                  key={s}
                  className="flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full bg-black/35 text-[.72rem] font-bold text-white backdrop-blur-sm"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="absolute right-4 bottom-4 z-10 flex h-[5.4rem] w-[5.4rem] items-center justify-center rounded-full border border-dashed border-white/60 p-2 text-center text-[.6rem] leading-[1.50] font-bold tracking-[.02em] text-white">
              DEVHUNT 2024
              <br />
              1RE PLACE
            </div>
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
                    <p className="mt-0.5 text-[.88rem] text-[var(--ink-dim)]">{t.org}</p>
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
