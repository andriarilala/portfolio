import { useState, Fragment } from 'react'

const EMAIL = 'andriarilala04@gmail.com'

const fieldLabelClass = 'mb-2 block text-[.78rem] font-semibold text-white/60'
const fieldInputClass = 'w-full border-0 border-b border-white/20 bg-transparent py-2 text-[.98rem] text-white placeholder:text-white/35 focus:border-accent focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent('Projet — ' + form.name)
    const body = encodeURIComponent(form.message + '\n\n— ' + form.name + ' (' + form.email + ')')
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-14 sm:py-20 lg:py-24" id="contact">
      <div className="relative mx-auto max-w-full px-5 sm:px-8">
        <p className="mb-4 text-center text-[1rem] font-medium text-[var(--ink-dim)] italic">(Contact)</p>
        <h2 className="giant-text-soft mb-[clamp(-7rem,-13vw,-11rem)] text-center text-[3rem] leading-[1.50] font-extrabold tracking-[-.03em] select-none sm:text-[clamp(3.2rem,24vw,20rem)]">
          Contact
        </h2>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[var(--card-shadow)]">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center blur-[6px]"
            style={{ backgroundImage: "url('/images/hero.png')" }}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 bg-black/78" aria-hidden="true"></div>

          <div className="relative z-10 p-[clamp(2rem,5vw,3.4rem)]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              <div>
                <h3 className="max-w-[14ch] text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-white">
                  Un projet en tête ? Construisons quelque chose ensemble.
                </h3>
                <p className="mt-3 text-[1.02rem] text-white/65">Décrivez votre besoin, je réponds sous 48h.</p>
                <div className="mt-7 flex flex-col gap-2">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-block border-b border-white/20 pb-2.5 text-[.98rem] text-white no-underline hover:text-accent"
                  >
                    {EMAIL}
                  </a>
                  <a
                    href="https://wa.me/261383632483"
                    className="inline-block border-b border-white/20 pb-2.5 text-[.98rem] text-white no-underline hover:text-accent"
                  >
                    +261 38 36 324 83 — WhatsApp
                  </a>
                  <span className="text-[.92rem] text-white/60">Antananarivo &amp; Fianarantsoa, Madagascar</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="f-name" className={fieldLabelClass}>Votre nom</label>
                  <input
                    id="f-name" name="name" type="text" placeholder="Nom complet"
                    required autoComplete="name" value={form.name} onChange={handleChange}
                    className={fieldInputClass}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="f-email" className={fieldLabelClass}>Votre email</label>
                  <input
                    id="f-email" name="email" type="email" placeholder="vous@exemple.com"
                    required autoComplete="email" value={form.email} onChange={handleChange}
                    className={fieldInputClass}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="f-message" className={fieldLabelClass}>Décrivez votre projet</label>
                  <textarea
                    id="f-message" name="message" rows="3" placeholder="Parlez-moi de votre projet…"
                    required value={form.message} onChange={handleChange}
                    className={`${fieldInputClass} resize-y`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white py-[.55rem] pr-[.55rem] pl-6 text-[15px] font-semibold text-[#0B0B0C] transition hover:-translate-y-px hover:bg-accent hover:text-white"
                >
                  Envoyer
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#0B0B0C] text-white transition-transform group-hover:rotate-45 group-hover:bg-white group-hover:text-accent"
                  >
                    →
                  </span>
                </button>
                <p className="mt-2.5 text-[.75rem] text-white/50">Ouvre votre client mail avec le message pré-rempli.</p>
              </form>
            </div>
          </div>

          <div className="group relative z-10 overflow-hidden border-t border-white/10" aria-hidden="true">
            <div className="animate-marquee-fast flex w-max">
              {Array.from({ length: 6 }).map((_, i) => (
                <Fragment key={i}>
                  <span className="px-6 py-4 text-[1rem] font-semibold whitespace-nowrap text-white">{EMAIL}</span>
                  <span className="py-4 text-[1rem] font-semibold text-white">~</span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
