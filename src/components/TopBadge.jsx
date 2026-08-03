export default function TopBadge() {
  return (
    <div className="relative flex h-0 justify-center" aria-hidden="true">
      <span className="relative -top-px z-[120] inline-flex items-center gap-2.5 rounded-b-2xl border border-t-0 border-white/10 bg-[#141414] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[var(--card-shadow)]">
        <span className="h-[7px] w-[7px] flex-none animate-dot-pulse rounded-full bg-[#39D65E]"></span>
        Disponible pour de nouveaux projets
      </span>
    </div>
  )
}
