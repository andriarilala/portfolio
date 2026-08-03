const ROW_A = [
  'Développeur Full Stack',
  'React · Next.js · TypeScript',
  'Three.js · 3D temps réel',
  'Lauréat DevHunt 2024',
  'UX/UI Designer',
]

const ROW_B = [
  'Node.js · NestJS · Laravel',
  'Figma · Design System',
  'Flutter',
  '4+ ans d’expérience',
  'Madagascar',
]

export default function Marquee() {
  const rowA = [...ROW_A, ...ROW_A]
  const rowB = [...ROW_B, ...ROW_B]

  return (
    <div className="relative my-6 h-[128px] overflow-hidden sm:h-[144px]" aria-hidden="true">
      <div className="absolute inset-x-[-8%] top-0 -rotate-3 overflow-hidden border-y border-black/10 bg-[var(--ink)] py-4">
        <div className="animate-marquee flex w-max">
          {rowA.map((s, i) => (
            <span key={i} className="px-6 text-[1.05rem] font-extrabold tracking-tight whitespace-nowrap text-accent uppercase">
              {s}
              <span className="mx-6 text-white/30">✕</span>
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-[-8%] bottom-0 rotate-3 overflow-hidden border-y border-black/10 bg-accent py-4">
        <div className="animate-marquee-reverse flex w-max">
          {rowB.map((s, i) => (
            <span key={i} className="px-6 text-[1.05rem] font-extrabold tracking-tight whitespace-nowrap text-white uppercase">
              {s}
              <span className="mx-6 text-white/40">✕</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
