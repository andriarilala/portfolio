import { useEffect, useRef, useState } from 'react'

const DESIGN_LOGOS = [
  '/images/logo-hero-section/logo-figma.png',
  '/images/logo-hero-section/logo-ai.svg',
  '/images/logo-hero-section/logo-ps.svg',
  '/images/logo-hero-section/logo-an.svg',
  '/images/logo-hero-section/logo-ld.svg',
  '/images/logo-hero-section/logo-pr.svg',
  '/images/logo-hero-section/logo-st.svg',
]

const CODE_LOGOS = [
  '/images/logo-hero-section/logo-vscode.svg',
  '/images/logo-hero-section/logo-vs.svg',
  '/images/logo-hero-section/logo-ide-ps.svg',
]

function LogoCycle({ logos, interval }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % logos.length), interval)
    return () => clearInterval(id)
  }, [logos.length, interval])

  return (
    <span
      className="mx-[.04em] inline-flex h-[.86em] w-[.86em] items-center justify-center overflow-hidden rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] p-[.16em] align-[-.16em] max-md:hidden"
      aria-hidden="true"
    >
      <span className="relative block h-full w-full">
        {logos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-500 ease-out ${
              i === index ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          />
        ))}
      </span>
    </span>
  )
}

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-8 pb-0 text-center sm:pt-12 md:pt-14" id="top">
      <div className="mx-auto max-w-[full] px-5 sm:px-8">
        <div className="mb-6 hidden items-center justify-center gap-3.5 sm:flex">
          <div className="flex" aria-hidden="true">
            {[
              { name: 'Code Talent', src: '/images/logo-ct.png', wide: false, imgClass: 'h-full w-full object-contain p-1.5' },
              { name: 'Qualitec', src: '/images/logo-qualitec.png', wide: true, imgClass: 'h-[.85rem] w-auto object-contain' },
              { name: 'Web Makis', src: '/images/logo-webmaki.jpg', wide: false, imgClass: 'h-full w-full object-cover object-[center_8%] scale-[1.85]' },
            ].map((c, i) => (
              <span
                key={c.name}
                className={`flex h-[2.1rem] items-center justify-center overflow-hidden rounded-full border-2 border-[var(--bg)] bg-white ${c.wide ? 'w-auto px-2.5' : 'w-[2.1rem]'} ${i > 0 ? '-ml-2.5' : ''}`}
              >
                <img src={c.src} alt={c.name} className={c.imgClass} />
              </span>
            ))}
          </div>
          <p className="text-[.88rem] text-[var(--ink-dim)]">Ont travaillé avec moi — Code Talent, Qualitec, Web Maki Digital.</p>
        </div>

        <h1 className="mx-auto max-w-[15ch] text-[clamp(2.8rem,7.6vw,5.6rem)] leading-[1.50] font-extrabold tracking-[-.035em] text-[var(--ink)]">
          Je <span className="text-accent">conçois</span>{' '}
          <LogoCycle logos={DESIGN_LOGOS} interval={1600} />{' '}
          <span className="font-bold text-[var(--ink-faint)]">et je</span> <span className="text-accent">code</span>{' '}
          <LogoCycle logos={CODE_LOGOS} interval={1600} />{' '}
          des produits web soignés, <span className="font-bold text-[var(--ink-faint)]">depuis</span> Madagascar.
        </h1>

        <p className="mx-auto mt-6 max-w-[52ch] text-[1.08rem] text-[var(--ink-dim)]">
          Quatre ans de projets web et mobiles, de la maquette à la mise en ligne. React, Next.js, Node.js,
          Three.js — et le design qui va avec.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#works"
            className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-accent py-[.55rem] pr-[.55rem] pl-6 text-[15px] font-semibold text-white no-underline transition hover:-translate-y-px hover:bg-[var(--ink)]"
          >
            Voir mes réalisations
            <span
              aria-hidden="true"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white text-accent transition-transform group-hover:rotate-45 group-hover:text-[var(--ink)]"
            >
              →
            </span>
          </a>
          <a
            href="#contact"
            className="border-b border-[var(--line-strong)] text-[15px] font-semibold text-[var(--ink-dim)] no-underline hover:border-[var(--ink)] hover:text-[var(--ink)]"
          >
            Me contacter
          </a>
        </div>

        <div className="relative mt-10 h-[220px] overflow-hidden rounded-[28px] bg-[#0B0B0C] sm:mt-14 sm:h-[500px] lg:h-[800px]" aria-hidden="true">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/hero.mp4"
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-55% to-black/80" />
          <div className="absolute bottom-5 left-5 z-10 sm:bottom-7 sm:left-8">
            <h3 className="mt-1.5 text-[clamp(1.2rem,2.8vw,1.9rem)] font-extrabold text-white">
              De la maquette Figma à la mise en ligne
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
