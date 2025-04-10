import { useState, useRef, useEffect } from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';

export default function LandingPage() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(true);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScroll(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA]">
      <Hero scrollToProjects={scrollToProjects} showScroll={showScroll} />

      <div ref={projectsRef}>
        <Projects />
      </div>

      <Journey />
      <Contact />
    </div>
  );
}
