import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutIntro from '@/components/AboutIntro';
import MantraRibbon from '@/components/MantraRibbon';
import About from '@/components/About';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import Mahavakyas from '@/components/Mahavakyas';
import Calculators from '@/components/Calculators';
import Sessions from '@/components/Sessions';
import Social from '@/components/Social';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AboutIntro />
      <MantraRibbon />
      <About />
      <Banner />
      <Services />
      <Mahavakyas />
      <Calculators />
      <Sessions />
      <Social />
      <Contact />
      <Footer />
    </>
  );
}
