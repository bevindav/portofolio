import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
