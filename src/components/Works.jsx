import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    title: 'TechnoloGia',
    intro: "Application mobile éducative avec IA, conçue pour le concours national DevHunt 2025 sur le thème « l'enfant et la technologie ».",
    year: '2024 – 2025',
    role: 'Concepteur & développeur mobile',
    services: ['Conception produit', 'Développement mobile', 'Intégration IA'],
    image: '/images/realisation-1.png',
    badge: '2e place — DevHunt 2025',
    theme: {
      surface: '#F3551D',
      surface2: '#D9451A',
      ink: '#FFFFFF',
      inkDim: 'rgba(255,255,255,.75)',
      inkFaint: 'rgba(255,255,255,.5)',
      line: 'rgba(255,255,255,.16)',
      lineStrong: 'rgba(255,255,255,.28)',
      accent: '#FFD166',
      cardBackground: 'linear-gradient(135deg, #FFC24D 0%, #FF8A3D 45%, #F3551D 100%)',
      decor: 'circles',
    },
  },
  {
    title: "VITA'NOW",
    intro: "VITA'NOW garde la mémoire de tes projets — les décisions, les blocages, les raisons. Tu reprends là où tu t'étais arrêté, au lieu de recommencer de zéro.",
    year: '2025 – 2026',
    role: 'Concepteur & développeur',
    services: ['Conception produit', 'Développement web'],
    image: '/images/realisation-2.png',
    theme: {
      surface: '#13224A',
      surface2: '#1C3164',
      ink: '#FFFFFF',
      inkDim: 'rgba(255,255,255,.7)',
      inkFaint: 'rgba(255,255,255,.45)',
      line: 'rgba(255,255,255,.14)',
      lineStrong: 'rgba(255,255,255,.26)',
      accent: '#6C8CFF',
    },
  },
  {
    title: 'Neotik',
    intro: "Interface pour Neotik, une agence de services informatiques : prestation en régie, cloud & DevOps, design, data & IA, cybersécurité et formation.",
    year: '2025 – 2026',
    role: 'Design UI',
    services: ["Design d'interface"],
    image: '/images/realisation-3.png',
    theme: {
      surface: '#171129',
      surface2: '#231A3D',
      ink: '#FFFFFF',
      inkDim: 'rgba(255,255,255,.68)',
      inkFaint: 'rgba(255,255,255,.45)',
      line: 'rgba(255,255,255,.12)',
      lineStrong: 'rgba(255,255,255,.24)',
      accent: '#FF4B6B',
    },
  },
]

const RESERVE = [
  { name: 'Landing page Code Talent', year: '2025–2026', tech: 'Figma', angle: 'Vitrine design, de la maquette à la mise en ligne' },
  { name: 'Roapay — paiement en ligne', year: '2022–2023', tech: 'Node.js, React', angle: 'Parcours utilisateur, transactions et back-office' },
  { name: 'Gestion des notes — ENS', year: '2021', tech: 'Laravel, Figma', angle: 'Conception UX/UI et identité visuelle' },
  { name: 'Identité graphique Club Multimédia', year: '2025', tech: 'Figma, Adobe XD', angle: 'Branding' },
]

const metaLabelClass = 'text-[.78rem] text-[var(--c-ink-faint)]'
const metaValueClass = 'mt-1 text-[.98rem] font-bold text-[var(--c-ink)]'

export default function Works() {
  const total = PROJECTS.length
  const containerRef = useRef(null)
  const markerRefs = useRef([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    function update() {
      ticking = false
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrollableHeight = rect.height - window.innerHeight
      const raw = scrollableHeight > 0 ? -rect.top / scrollableHeight : 0
      const clamped = Math.min(Math.max(raw, 0), 1)
      setProgress(clamped * (total - 1))
    }

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [total])

  function goTo(i) {
    const target = markerRefs.current[(i + total) % total]
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="py-14 sm:py-20 lg:py-24" id="works">
      <div className="relative mx-auto max-w-full px-5 sm:px-8">
        <div ref={containerRef} className="relative" style={{ height: `${total * 85}vh` }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              ref={(el) => (markerRefs.current[i] = el)}
              className="pointer-events-none absolute inset-x-0"
              style={{ top: `${i * 85}vh`, height: '85vh' }}
              aria-hidden="true"
            ></div>
          ))}

          <div className="sticky top-10 z-10">
            <p className="mb-4 text-center text-[1rem] font-medium text-[var(--ink-dim)] italic">(Pourquoi ces projets)</p>
            <h2 className="giant-text-soft mb-[clamp(-5rem,-9vw,-7rem)] text-center text-[2.6rem] leading-[1.50] font-extrabold tracking-[-.03em] select-none sm:text-[clamp(3rem,16vw,13rem)]">
              Réalisations
            </h2>

            <div className="relative min-h-[650px] overflow-hidden sm:min-h-[700px]">
              {PROJECTS.map((p, i) => {
                const localOffset = progress - i
                if (Math.abs(localOffset) > 1.05) return null

                // the card itself slides a full height per step — a classic vertical
                // parallax swap — while its image/glow layer drifts at a slower rate,
                // giving the illusion of depth as the card passes through
                const translateY = -localOffset * 100
                const imageParallax = -localOffset * 34

                return (
                  <div
                    key={p.title}
                    className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-[28px] border border-[var(--c-line)] bg-[var(--c-surface)] p-[clamp(1.8rem,4vw,3rem)] shadow-[var(--card-shadow)] transition-colors duration-500 will-change-transform"
                    style={{
                      transform: `translateY(${translateY}%)`,
                      zIndex: total - Math.round(Math.abs(localOffset) * 10),
                      pointerEvents: Math.abs(localOffset) < 0.5 ? 'auto' : 'none',
                      background: p.theme.cardBackground || undefined,
                      '--c-surface': p.theme.surface,
                      '--c-surface2': p.theme.surface2,
                      '--c-ink': p.theme.ink,
                      '--c-ink-dim': p.theme.inkDim,
                      '--c-ink-faint': p.theme.inkFaint,
                      '--c-line': p.theme.line,
                      '--c-line-strong': p.theme.lineStrong,
                      '--c-accent': p.theme.accent,
                    }}
                  >
                    <div className="card-glow pointer-events-none absolute inset-0"></div>

                    {p.theme.decor === 'circles' && (
                      <>
                        <div
                          className="pointer-events-none absolute inset-0 opacity-80"
                          style={{
                            background:
                              'radial-gradient(38% 55% at 16% 40%, rgba(255,255,255,.20), transparent 70%),' +
                              'radial-gradient(30% 46% at 50% 82%, rgba(255,255,255,.14), transparent 70%),' +
                              'radial-gradient(36% 52% at 86% 14%, rgba(255,255,255,.22), transparent 70%),' +
                              'radial-gradient(26% 40% at 94% 64%, rgba(255,255,255,.12), transparent 70%)',
                          }}
                        ></div>
                        <div
                          className="pointer-events-none absolute top-[8%] left-[7%] h-6 w-16 opacity-70"
                          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.9) 1px, transparent 1.5px)', backgroundSize: '8px 8px' }}
                        ></div>
                        <div
                          className="pointer-events-none absolute right-[6%] bottom-[22%] h-24 w-6 opacity-60"
                          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.9) 1px, transparent 1.5px)', backgroundSize: '8px 8px' }}
                        ></div>
                      </>
                    )}

                    <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[.85fr_1.3fr_.85fr]">
                      <p className="max-w-[28ch] text-[.95rem] text-[var(--c-ink-dim)]">{p.intro}</p>

                      <div className="relative mx-auto w-full max-w-[700px]" style={{ transform: `translateY(${imageParallax}px)` }}>
                        <div
                          className="pointer-events-none absolute inset-[-15%] -z-10 rounded-full opacity-60 blur-3xl"
                          style={{ background: `radial-gradient(circle, ${p.theme.accent}29, transparent 70%)` }}
                        ></div>
                        <div
                          className="overflow-hidden rounded-2xl border border-[var(--c-line-strong)] bg-[var(--c-surface2)] shadow-[0_30px_70px_-25px_rgba(20,20,20,.35)]"
                          style={{ transform: 'perspective(1200px) rotateY(-7deg) rotateX(2deg)' }}
                        >
                          <img src={p.image} alt={p.title} className="block w-full" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-6 lg:items-end lg:text-right">
                        <div>
                          <p className={metaLabelClass}>Année</p>
                          <p className={metaValueClass}>{p.year}</p>
                        </div>
                        <div>
                          <p className={metaLabelClass}>Rôle</p>
                          <p className={metaValueClass}>{p.role}</p>
                        </div>
                        <div>
                          <p className={metaLabelClass}>Services</p>
                          {p.services.map((s) => (
                            <p key={s} className={metaValueClass}>{s}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-12 flex flex-wrap items-end justify-between gap-6">
                      <div>
                        <span className="block text-[.85rem] font-semibold text-[var(--c-ink-dim)]">
                          {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                          <span className="mt-1.5 block h-px w-10 bg-[var(--c-accent)]"></span>
                        </span>
                        <h3 className="text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold text-[var(--c-ink)]">{p.title}</h3>
                      </div>

                      <div className="flex items-center gap-4">
                        {p.badge && (
                          <span className="rounded-full border border-[var(--c-accent)] px-3.5 py-1.5 text-[.75rem] font-bold tracking-[.04em] text-[var(--c-accent)] uppercase">
                            {p.badge}
                          </span>
                        )}
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => goTo(i - 1)}
                            aria-label="Projet précédent"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-line-strong)] text-[var(--c-ink)] transition hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
                          >
                            ←
                          </button>
                          <button
                            type="button"
                            onClick={() => goTo(i + 1)}
                            aria-label="Projet suivant"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-line-strong)] text-[var(--c-ink)] transition hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
                          >
                            →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <h3 className="mb-4 text-[.85rem] font-bold tracking-[.08em] text-[var(--ink-faint)] uppercase">Autres projets</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  {['Projet', 'Année', 'Techno', 'Angle'].map((h) => (
                    <th key={h} className="border-b border-[var(--line-strong)] px-3.5 py-2.5 text-left text-[.75rem] font-semibold tracking-[.05em] text-[var(--ink-faint)] uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RESERVE.map((p) => (
                  <tr key={p.name}>
                    <td className="border-b border-[var(--line)] px-3.5 py-3.5 font-semibold text-[var(--ink)]">{p.name}</td>
                    <td className="border-b border-[var(--line)] px-3.5 py-3.5 text-[.92rem] text-[var(--ink-dim)]">{p.year}</td>
                    <td className="border-b border-[var(--line)] px-3.5 py-3.5 text-[.92rem] text-[var(--ink-dim)]">{p.tech}</td>
                    <td className="border-b border-[var(--line)] px-3.5 py-3.5 text-[.92rem] text-[var(--ink-dim)]">{p.angle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
