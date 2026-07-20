import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { FeaturedProject } from '../components/FeaturedProject';
import { OtherProjects } from '../components/OtherProjects';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Achievements } from '../components/Achievements';
import { Certifications } from '../components/Certifications';
import { CodingProfiles } from '../components/CodingProfiles';
import { CurrentlyLearning } from '../components/CurrentlyLearning';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <main>
      <SEO
        title="Jeyasuriya J | Full Stack & AI Developer Portfolio"
        description="Software engineering portfolio of Jeyasuriya J — ECE undergraduate specializing in Python, FastAPI, Django, React, graph analytics, and AI/ML."
      />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <OtherProjects />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <CodingProfiles />
      <CurrentlyLearning />
      <Contact />
    </main>
  );
};
