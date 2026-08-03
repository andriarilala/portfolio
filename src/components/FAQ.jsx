const ITEMS = [
  {
    q: 'Développeur ou designer — lequel des deux ?',
    a: "Les deux, et c'est justement l'intérêt. Je conçois l'interface sous Figma puis je l'intègre moi-même. Il n'y a pas de perte entre la maquette et le produit livré, ni d'allers-retours entre deux prestataires.",
  },
  {
    q: 'Travaillez-vous à distance ?',
    a: 'Oui. Je suis basé à Madagascar et je travaille en français comme en anglais.',
  },
  {
    q: 'Quelles technologies utilisez-vous ?',
    a: 'Côté front : React, Next.js, Nuxt.js, TypeScript, Tailwind CSS, Three.js pour la 3D. Côté back : Node.js, NestJS, Laravel, Symfony. Bases de données : MySQL et PostgreSQL. Mobile : Flutter. Design : Figma et Adobe XD.',
  },
  {
    q: 'Comment se déroule un projet ?',
    a: 'Cadrage du besoin et modélisation, maquettes Figma validées avant toute ligne de code, développement par itérations avec des points réguliers, puis mise en production.',
  },
  {
    q: 'Prenez-vous des projets courts ?',
    a: "Oui — landing page, refonte d'interface, intégration d'une maquette existante ou identité visuelle.",
  },
  {
    q: 'Peut-on voir du code ?',
    a: 'Mon GitHub est lié en bas de page.',
  },
]

export default function FAQ() {
  return (
    <section className="py-14 sm:py-20 lg:py-24" id="faq">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <p className="mb-4 text-center text-[1rem] font-medium text-[var(--ink-dim)] italic">(Questions)</p>
        <h2 className="mb-8 text-center text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold text-[var(--ink)]">
          Questions fréquentes
        </h2>
        <div className="border-t border-[var(--line)]">
          {ITEMS.map((item, i) => (
            <details className="group border-b border-[var(--line)]" key={item.q} open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[1.08rem] font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex-none text-[1.3rem] font-normal text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-[64ch] pb-5 text-[.98rem] text-[var(--ink-dim)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
