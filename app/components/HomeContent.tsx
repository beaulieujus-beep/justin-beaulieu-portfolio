'use client';

import CaseStudyCardLarge from './CaseStudyCardLarge';
import Footer from './Footer';
import ContactSection from './ContactSection';
import { caseStudies } from '../data/caseStudies';

export default function HomeContent() {

  return (
    <>
      {/* Hero Section */}
      <section className="px-5 md:px-8 pt-32 md:pt-48 pb-24 md:pb-40">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main Content */}
          <div>
            {/* Title */}
            <h1 className="text-h1 text-white text-left">
            Systems-minded product designer simplifying complex digital problems.
            </h1>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <div id="case-studies" className="px-5 md:px-8" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-6xl mx-auto space-y-24">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCardLarge
              key={caseStudy.slug}
              href={caseStudy.href}
              eyebrows={caseStudy.eyebrows}
              title={caseStudy.title}
              description={caseStudy.description}
              imageSrc={caseStudy.imageSrc}
              imageAlt={caseStudy.imageAlt}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <ContactSection />

      <Footer />
    </>
  );
}

