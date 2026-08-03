const MARKS = ['Code Talent', 'Qualitec', 'Neotik', 'UACEEM', 'WebMaki Digital', 'Club Multimédia ENI']

export default function TrustBand() {
  return (
    <section className="border-t border-b border-[var(--line)] py-8" id="references">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="flex-none text-[13px] font-semibold tracking-[.06em] text-[var(--ink-faint)] uppercase">
          Ils m'ont fait confiance
        </span>
        <div className="flex flex-wrap gap-x-9 gap-y-6">
          {MARKS.map((m) => (
            <span key={m} className="text-[.92rem] font-semibold text-[var(--ink-dim)]">{m}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
