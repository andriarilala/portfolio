const TAGS = ['Développement web', 'Interfaces', '3D & Three.js', 'Mobile', 'Design system', 'Branding', 'Motion design']
const STATS = [
  { num: '4+', label: 'Années de pratique' },
  { num: '7', label: 'Projets menés' },
  { num: '2', label: 'Podiums hackathon' },
]

export default function Profile() {
  return (
    <section className="py-14 text-center sm:py-20 lg:py-24" id="profil">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <img
          src="/images/herizo-niaina.jpg"
          alt="Herizo Niaina"
          className="mx-auto mb-6 h-24 w-24 rounded-full border border-[var(--line-strong)] object-cover shadow-[var(--card-shadow)] sm:h-28 sm:w-28"
        />
        <p className="mb-4 text-[1rem] font-medium text-accent italic">(bonjour)</p>
        <h2 className="mx-auto max-w-[32ch] text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold text-[var(--ink)]">
          Un seul interlocuteur, du croquis au code —{' '}
          <span className="text-[var(--ink-faint)]">
            sans perte entre la maquette et le produit livré, ni d'allers-retours entre deux prestataires.
          </span>
        </h2>

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          {TAGS.map((t) => (
            <span key={t} className="rounded-full bg-[var(--ink)] px-4 py-2 text-[.8rem] font-semibold text-white">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-14">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[2.4rem] leading-[1.50] font-extrabold text-accent tabular-nums">{s.num}</p>
              <p className="mx-auto mt-1.5 max-w-[11ch] text-[.82rem] text-[var(--ink-dim)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
