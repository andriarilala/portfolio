import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    title: 'Qualitec Beauty',
    intro: "Vitrine et prise de rendez-vous pour un salon de beauté : prestations, galerie, promotions et formulaire de contact — pensée pour transformer la visite en réservation.",
    year: '2024 – 2025',
    role: 'Développeur Full Stack',
    services: ["Design d'interface", 'Développement web', 'Prise de rendez-vous'],
    image: '/images/realisation-beauty.png',
    link: 'https://beauty.qualitec.mg/',
    theme: {
      surface: '#FBEEEF',
      surface2: '#F5DEE0',
      ink: '#241417',
      inkDim: '#7A5257',
      inkFaint: '#B08890',
      line: 'rgba(36,20,23,.08)',
      lineStrong: 'rgba(36,20,23,.16)',
      accent: '#B23A4E',
    },
  },
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
    title: 'Maka-Share',
    intro: "Plateforme SaaS de reconnaissance faciale pour photographes événementiels : indexation GPU en moins d'une seconde par photo, tri automatique par visage, galeries privées livrées en un lien — et facturation mobile money intégrée.",
    year: '2024 – 2026',
    role: 'Développeur Full Stack',
    services: ['Reconnaissance faciale (IA)', 'Plateforme SaaS', 'Paiement mobile money'],
    image: '/images/realisation-maka-share.png',
    link: 'https://maka-share.qualitec.mg/',
    theme: {
      surface: '#F5F3EF',
      surface2: '#EAE6DE',
      ink: '#18130F',
      inkDim: '#6B6259',
      inkFaint: '#9C9186',
      line: 'rgba(24,19,15,.09)',
      lineStrong: 'rgba(24,19,15,.18)',
      accent: '#FF5A1F',
    },
  },
  {
    title: "Karak's",
    intro: "Karaoké synchronisé en temps réel : chaque participant lit sa propre vidéo en pleine qualité, seule la position de lecture circule entre les salons pour garder tout le monde calé à la même seconde.",
    year: '2025 – 2026',
    role: 'Développeur Full Stack',
    services: ['Synchronisation temps réel', 'Développement web', "Système d'avatars"],
    image: '/images/realisation-karaokay.png',
    link: 'https://karaokay.qualitec.mg/',
    theme: {
      surface: '#EAF6FF',
      surface2: '#D7ECFB',
      ink: '#132638',
      inkDim: '#4C6478',
      inkFaint: '#8AA0B2',
      line: 'rgba(19,38,56,.10)',
      lineStrong: 'rgba(19,38,56,.18)',
      accent: '#F5A623',
    },
  },
  {
    title: "VITA'NOW",
    intro: "VITA'NOW garde la mémoire des projets étudiants — décisions, blocages, solutions — et transforme les mémoires de fin d'études en base cherchable par l'IA. Reprendre un projet ne veut plus dire tout relire.",
    year: '2025 – 2026',
    role: 'Concepteur & développeur',
    services: ['Conception produit', 'Développement web', 'Recherche IA'],
    image: '/images/realisation-vitanow.png',
    link: 'https://vitanow.aura-plus.site/',
    figmaLink: 'https://www.figma.com/design/M6GkeHecyG1xCWWDvJpjx3/2026?node-id=0-1&p=f&t=tF9BPZRcBjMzto9C-0',
    theme: {
      surface: '#EDE3D8',
      surface2: '#F5EFE9',
      ink: '#0F1D3D',
      inkDim: '#3D4E73',
      inkFaint: '#687699',
      line: 'rgba(15,29,61,.14)',
      lineStrong: 'rgba(15,29,61,.24)',
      accent: '#2B5BFF',
    },
  },
  {
    title: 'OffRec',
    intro: "OffRec centralise recommandations et offres vérifiées par la communauté : artisans et fournisseurs notés avec le prix réellement payé, offres d'emploi mises en correspondance par pourcentage d'affinité — un seul annuaire de confiance pour Madagascar.",
    year: '2025 – 2026',
    role: 'Concepteur & développeur',
    services: ['Conception produit', 'Développement web', 'Système de matching'],
    image: '/images/offrec.png',
    badge: 'Bientôt en ligne',
    theme: {
      surface: '#1B3FAE',
      surface2: '#15308A',
      ink: '#FFFFFF',
      inkDim: 'rgba(255,255,255,.75)',
      inkFaint: 'rgba(255,255,255,.5)',
      line: 'rgba(255,255,255,.16)',
      lineStrong: 'rgba(255,255,255,.28)',
      accent: '#8FB4FF',
      cardBackground: 'linear-gradient(135deg, #3E6DE0 0%, #1B3FAE 55%, #12297A 100%)',
    },
  },
]

const RESERVE = [
  { name: 'Neotik — agence IT', year: '2025 – 2026', tech: 'Figma', angle: "Design d'interface pour une agence de services informatiques" },
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768)
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setProgress(0)
      return
    }

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
        {isMobile ? (
          <div className="space-y-6">
            <p className="text-center text-[1rem] font-medium text-[var(--ink-dim)] italic">(Pourquoi ces projets)</p>
            <h2 className="giant-text-soft mb-6 text-center text-[2.6rem] leading-[1.50] font-extrabold tracking-[-.03em] select-none">
              Réalisations
            </h2>

            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-[clamp(1.3rem,4vw,2rem)] shadow-[var(--card-shadow)]"
                style={{
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
                <div className="mb-5">
                  <span className="block text-[.8rem] font-semibold text-[var(--c-ink-dim)]">
                    {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-[clamp(1.8rem,6vw,2.6rem)] font-extrabold text-[var(--c-ink)]">{p.title}</h3>
                </div>

                <div className="relative mb-5 overflow-hidden rounded-2xl border border-[var(--c-line-strong)] bg-[var(--c-surface2)] shadow-[0_20px_60px_-30px_rgba(20,20,20,.4)]">
                  <img src={p.image} alt={p.title} className="block w-full" />
                </div>

                <p className="mb-5 text-[.95rem] leading-relaxed text-[var(--c-ink-dim)]">{p.intro}</p>

                <div className="mb-5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className={metaLabelClass}>Année</p>
                    <p className={metaValueClass}>{p.year}</p>
                  </div>
                  <div>
                    <p className={metaLabelClass}>Rôle</p>
                    <p className={metaValueClass}>{p.role}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className={metaLabelClass}>Services</p>
                  {p.services.map((s) => (
                    <p key={s} className={metaValueClass}>{s}</p>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--c-accent)] px-3.5 py-1.5 text-[.75rem] font-bold tracking-[.04em] text-[var(--c-accent)] uppercase no-underline"
                    >
                      Voir le site ↗
                    </a>
                  )}
                  {p.badge && (
                    <span className="rounded-full border border-[var(--c-accent)] px-3.5 py-1.5 text-[.75rem] font-bold tracking-[.04em] text-[var(--c-accent)] uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
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

                  const translateX = -localOffset * 100
                  const imageParallax = -localOffset * 34

                  return (
                    <div
                      key={p.title}
                      className="absolute inset-2.5 flex flex-col justify-center overflow-hidden rounded-[28px] border border-[var(--c-line)] bg-[var(--c-surface)] p-[clamp(1.8rem,4vw,3rem)] shadow-[var(--card-shadow)] transition-colors duration-500 will-change-transform sm:inset-4"
                      style={{
                        transform: `translateX(${translateX}%)`,
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

                        <div className="relative mx-auto w-full max-w-[700px]" style={{ transform: `translateX(${imageParallax}px)` }}>
                          <div
                            className="pointer-events-none absolute inset-[-15%] -z-10 rounded-full opacity-60 blur-3xl"
                            style={{ background: `radial-gradient(circle, ${p.theme.accent}29, transparent 70%)` }}
                          ></div>
                          <div
                            className="relative overflow-hidden rounded-2xl border border-[var(--c-line-strong)] bg-[var(--c-surface2)] shadow-[0_30px_70px_-25px_rgba(20,20,20,.35)]"
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
                          {p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full border border-[var(--c-accent)] px-3.5 py-1.5 text-[.75rem] font-bold tracking-[.04em] text-[var(--c-accent)] uppercase no-underline transition hover:bg-[var(--c-accent)] hover:text-[var(--c-surface)]"
                            >
                              Voir le site ↗
                            </a>
                          )}
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
        )}

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
