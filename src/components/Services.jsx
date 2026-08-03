import { useState } from 'react'

const TABS = [
  {
    id: 'tab-1',
    panel: 'panel-1',
    label: 'Développement web',
    text: "Applications web complètes, du modèle de données à l'interface. React, Next.js, Nuxt.js côté client ; Node.js, NestJS, Laravel ou Symfony côté serveur ; MySQL et PostgreSQL en base.",
    points: ['Applications sur mesure', 'API & back-end', 'Modélisation de données'],
  },
  {
    id: 'tab-2',
    panel: 'panel-2',
    label: "Design d'interface",
    text: "Conception d'interfaces sous Figma et Adobe XD, jusqu'au design system réutilisable. Je livre des maquettes pensées pour être intégrées — parce que c'est moi qui les intègre ensuite.",
    points: ['Maquettes & prototypes', 'Design system', 'Identité visuelle'],
  },
  {
    id: 'tab-3',
    panel: 'panel-3',
    label: '3D & motion',
    text: 'Expériences 3D temps réel dans le navigateur avec Three.js, et motion design pour donner du rythme à une interface ou à une communication.',
    points: ['Three.js & WebGL', 'Motion design', 'Visualisation interactive'],
  },
]

export default function Services() {
  const [active, setActive] = useState('tab-1')
  const current = TABS.find((t) => t.id === active)

  return (
    <section className="py-14 sm:py-20 lg:py-24" id="services">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <p className="mb-4 text-center text-[1rem] font-medium text-[var(--ink-dim)] italic">(Ce que je fais)</p>
        <h2 className="giant-text-soft mb-[clamp(-5rem,-9vw,-7rem)] text-center text-[2.6rem] leading-[1.50] font-extrabold tracking-[-.03em] select-none sm:text-[clamp(3rem,16vw,13rem)]">
          Prestations
        </h2>

        <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-[clamp(1.8rem,4vw,3rem)] shadow-[var(--card-shadow)]">
          <div className="card-glow pointer-events-none absolute inset-0"></div>
          <div className="relative z-10 mb-6 flex flex-wrap gap-2.5" role="tablist" aria-label="Prestations">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={t.id}
                aria-controls={t.panel}
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-full border px-5 py-3 text-[.85rem] font-semibold ${
                  active === t.id
                    ? 'border-accent bg-accent text-white'
                    : 'border-[var(--line-strong)] text-[var(--ink-dim)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="relative z-10" role="tabpanel" id={current.panel} aria-labelledby={current.id}>
            <p className="max-w-[62ch] text-[1.05rem] text-[var(--ink-dim)]">{current.text}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {current.points.map((p) => (
                <span key={p} className="rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-[.78rem] text-[var(--ink)]">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
