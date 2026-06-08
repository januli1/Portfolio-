import { useEffect } from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journal from './components/Journal';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useGlobalReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal:not(.visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default function App() {
  useGlobalReveal();

  return (
    <ResumeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Journal />
        <Career />
        <Contact />
      </main>
      <Footer />
    </ResumeProvider>
  );
}
