/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DesignProcess } from './components/DesignProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { PolicyModal } from './components/PolicyModal';
import { ServiceItem, ProjectItem } from './data/interiorData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('Complete Home Interiors');

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView();
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F0E9] text-[#1C1A18] font-sans flex flex-col">
      {/* 1. Navigation */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreProjects={scrollToProjects}
          onBookConsultation={() => scrollToBooking()}
        />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onBookService={(serviceTitle) => scrollToBooking(serviceTitle)}
        />

        {/* 5. Featured Projects Section */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Our Design Process Section */}
        <DesignProcess />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Consultation Booking Form */}
        <ConsultationForm preselectedService={preselectedService} />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenPrivacy={() => setActivePolicy('privacy')}
        onOpenTerms={() => setActivePolicy('terms')}
        onBookClick={() => scrollToBooking()}
      />

      {/* Modals - Clean Static Zero-Animation Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(title) => scrollToBooking(title)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={(title) => scrollToBooking(title)}
      />

      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}
