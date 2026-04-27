import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Work from './components/Work';
import About from './components/About';
import Process from './components/Process';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <Work />
        <Stats />
        <About />
        <Process />
        <Timeline />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
