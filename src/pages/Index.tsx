import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CodingActivity from '@/components/CodingActivity';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Background3D from '@/components/Background3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Suspense fallback={<div>Loading...</div>}>
        <Background3D />
      </Suspense>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
