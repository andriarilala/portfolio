import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#works', label: 'Réalisations' },
  { href: '#services', label: 'Prestations' },
  { href: '#distinctions', label: 'Distinctions' },
  { href: '#faq', label: 'FAQ' },
]

const SOCIALS = ['GitHub', 'LinkedIn', 'Behance']

function formatAntananarivoTime() {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Indian/Antananarivo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date())
  } catch {
    const d = new Date()
    const utc = d.getTime() + d.getTimezoneOffset() * 60000
    return new Date(utc + 3 * 3600000).toTimeString().slice(0, 8)
  }
}

export default function Footer() {
  const [time, setTime] = useState(formatAntananarivoTime)

  useEffect(() => {
    const id = setInterval(() => setTime(formatAntananarivoTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0C] pt-14">
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-10 pb-14 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-[.72rem] font-semibold tracking-[.08em] text-white/40 uppercase">Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[.92rem] font-semibold text-white no-underline hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[.72rem] font-semibold tracking-[.08em] text-white/40 uppercase">Réseaux</p>
            <ul className="flex flex-col gap-2.5">
              {SOCIALS.map((s) => (
                <li key={s} className="text-[.92rem] font-semibold text-white/70">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[.72rem] font-semibold tracking-[.08em] text-white/40 uppercase">Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="mailto:andriarilala04@gmail.com" className="text-[.92rem] font-semibold break-all text-white no-underline hover:text-accent">
                  andriarilala04@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/261383632483" className="text-[.92rem] font-semibold text-white no-underline hover:text-accent">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-[.82rem] text-white/40">
          <p>© 2026 Herizo Niaina ANDRIARILALA. Tous droits réservés.</p>
          <p className="tabular-nums">Antananarivo → {time}</p>
          <a href="#top" className="font-semibold text-accent no-underline hover:text-white">
            Retour en haut ↑
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: 'linear-gradient(115deg, rgba(255,255,255,.14) 0%, transparent 22%)' }}
        aria-hidden="true"
      ></div>

      <div className="relative mt-2 select-none" aria-hidden="true">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(50% 90% at 50% 100%, rgba(255,75,31,.55), transparent 90%)' }}
        ></div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-full opacity-25"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,.9) 1px, transparent 1.5px)',
            backgroundSize: '14px 14px',
            maskImage: 'radial-gradient(60% 70% at 50% 100%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(60% 70% at 50% 100%, black, transparent)',
          }}
        ></div>
        <p
          className="relative bg-gradient-to-b from-white/85 to-transparent bg-clip-text pb-2 text-center text-[2.4rem] leading-[0.70] font-extrabold tracking-[-.03em] text-transparent sm:text-[clamp(3rem,15vw,13rem)]"
        >
          Herizo Niaina
        </p>
      </div>
    </footer>
  )
}
