const ITEMS = [
  { org: 'DevHunt 2025 — AEENI', title: '2e place - Devhunt', rank: 'Argent' },
  { org: 'DevHunt 2024', title: "1re place — avec l'équipe G++", rank: 'Or' },
  { org: 'HIU 2024', title: 'Participation au hackathon', rank: 'Participant' },
]

export default function Distinctions() {
  return (
    <section className="py-14 sm:py-20 lg:py-24" id="distinctions">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <p className="mb-4 text-center text-[1rem] font-medium text-[var(--ink-dim)] italic">(Palmarès)</p>
        <h2 className="mb-8 text-center text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold text-[var(--ink)]">
          Distinctions
        </h2>
        <div className="border-t border-[var(--line)]">
          {ITEMS.map((d) => (
            <div key={d.org} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 border-b border-[var(--line)] py-6">
              <span className="text-[.85rem] font-semibold whitespace-nowrap text-[var(--ink-faint)]">{d.org}</span>
              <span className="min-w-0 text-[clamp(1.05rem,2vw,1.3rem)] font-bold text-[var(--ink)]">{d.title}</span>
              <span className="rounded-full border border-accent px-3.5 py-1.5 text-[.75rem] font-bold tracking-[.03em] whitespace-nowrap text-accent uppercase">
                {d.rank}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
