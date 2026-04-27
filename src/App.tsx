import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Home page sections
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

// Inner pages
import WorkPage from './pages/WorkPage';
import WorkDetailPage from './pages/WorkDetailPage';
import TechnologyPage from './pages/TechnologyPage';
import TechDetailPage from './pages/TechDetailPage';

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/technology/:slug" element={<TechDetailPage />} />
      </Route>
    </Routes>
  );
}
