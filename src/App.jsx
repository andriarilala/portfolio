import TopBadge from './components/TopBadge.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import TrustBand from './components/TrustBand.jsx'
import Profile from './components/Profile.jsx'
import Works from './components/Works.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Distinctions from './components/Distinctions.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed top-[-3rem] left-4 z-[300] rounded-lg bg-accent px-4 py-2.5 text-[.85rem] text-white no-underline transition-[top] focus:top-4"
      >
        Aller au contenu
      </a>
      <TopBadge />
      <Nav />
      <main id="main">
        <Hero />
        <TrustBand />
        <Profile />
        <Works />
        <Services />
        <About />
        <Distinctions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
