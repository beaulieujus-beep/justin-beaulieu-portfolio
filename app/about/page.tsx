"use client";

import React from "react";
import Image from "next/image";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { ButtonSecondary } from '../components/ButtonSecondary';
import ContactSection from '../components/ContactSection';
import AudioPlayerButton from '../components/AudioPlayerButton';
import { useRouter } from 'next/navigation';
import { openExternalLink } from '../lib/utils';

export default function About() {
  const router = useRouter();
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  const [isHoveringLocation, setIsHoveringLocation] = React.useState(false);
  const [showAllExperience, setShowAllExperience] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHoveringLocation) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHoveringLocation]);

  const experienceEntries = [
    {
      company: "Vincit USA",
      type: "Agency",
      dateRange: "Apr 2019 – Aug 2025",
      title: "Senior UX/UI Designer",
      description: "Delivered product, UX/UI, research, and branding projects for clients including UC Berkeley, Irvine Company, Nokia, and UAG. " +
        "Improved workflows, collaboration, and delivery while mentoring junior designers to elevate creativity and execution."
    },
    {
      company: "Brightspot",
      type: "Embedded via Vincit",
      dateRange: "Dec 2022 – Mar 2024",
      title: "Product Designer",
      description: "Redesigned a scalable, accessible CMS system, reducing design debt and accelerating product-wide improvements. " +
        "Unified dashboards, widgets, and page builder experiences to streamline workflows and enable faster content creation for users."
    },
    {
      company: "Youturn Health",
      type: "Client via Vincit",
      dateRange: "Jun 2024 – Sep 2024",
      title: "Lead UX/UI Designer and Branding",
      description: "Redesigned and rebranded a behavioral health platform, boosting media engagement, coaching sign-ups, and course completion rates. " +
        "Delivered research, design, and high-fidelity prototypes while collaborating closely with engineering under a tight deadline."
    },
    {
      company: "KCRW",
      type: "Embedded via Vincit",
      dateRange: "2022 – 2023",
      title: "Product Designer",
      description: "Led the web music streaming redesign, mentoring junior designers and collaborating across teams. " +
        "Improved sign-ups, downloads, and donations within the app and achieving a 99% increase in annual user contributions."
    },
    {
      company: "PRI & SEMA",
      type: "Agency",
      dateRange: "Jun 2015 – Apr 2019",
      title: "Branding, Publication, and Graphic Designer",
      description: "Led trade show rebranding and design for 4 years, improving attendee experience and venue navigation, boosting first-year attendance by 30%. " +
        "Designed monthly magazine layouts and editorial features, upholding high visual standards and reinforcing industry leadership."
    },
    {
      company: "Zther Interactive",
      type: "Agency",
      dateRange: "Jan 2015 – May 2015",
      title: "UI Designer & Graphic Designer",
      description: "Supported UI design for sports websites and e-commerce platforms. " +
        "Built and maintained UI and iconography libraries, translating UX guidelines into polished, consistent interfaces."
    }
  ];

  const awardsEntries = [
    {
      title: "American Advertising Federation",
      award: "Bronze Logo Design",
      project: "Martin Container",
      year: "2020"
    },
    {
      title: "Graphic Design USA (x 4)",
      award: "Inhouse, Publication, Advertising",
      project: "PRI Magazine",
      year: "2016 – 2018"
    },
    {
      title: "Creative Action Network",
      award: "Mug & Products",
      project: "Peet's Coffee",
      year: "2018"
    },
    {
      title: "American Graphic Design & Ads",
      award: "Brochure & Catalog",
      project: "PRI Magazine",
      year: "2018"
    },
    {
      title: "See America (Book)",
      award: "Publication",
      project: "Creative Action Network",
      year: "2016"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation activePage="about" fadeIn={true} />
      
      {/* Custom Cursor for Location Section - Outside PageTransition */}
      {isHoveringLocation && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${cursorPosition.x + 8}px, ${cursorPosition.y - 158}px, 0)`,
            willChange: 'transform',
          }}
        >
          <Image
            src="/images/mr-worldwide.png"
            alt="Mr. Worldwide"
            width={200}
            height={150}
            className="drop-shadow-lg rounded-md"
          />
        </div>
      )}
      
      <PageTransition>

      {/* Hero Section */}
      <section className="px-5 md:px-8 pt-32 md:pt-48 pb-8 md:pb-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid sm:grid-cols-[7fr_3fr] gap-16 items-start">
            {/* Left Column - Text Content */}
            <div>
              
              <h1 className="text-h2 text-white leading-tight">
                I'm a product designer, tinkerer, and explorer of world experiences.
              </h1>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 md:mt-12">
                <ButtonPrimary type="button" onClick={() => window.open('/images/justin-beaulieu-resume.pdf', '_blank')}>
                  My Resume
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </ButtonPrimary>
                <ButtonSecondary 
                  type="button"
                  onClick={() => openExternalLink('https://www.linkedin.com/in/justin-beaulieu-design')}
                >
                  LinkedIn
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </ButtonSecondary>
              </div>
            </div>
            
            {/* Right Column - Profile Image */}
            <div className="flex justify-start md:justify-end w-full md:w-auto">
              <div className="w-full md:max-w-[240px] rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
                <div className="relative w-full aspect-[4/5] md:aspect-auto">
                  <Image
                    src="/images/profile-headshot.png"
                    alt="Profile Headshot"
                    width={500}
                    height={625}
                    className="absolute inset-0 w-full h-full object-cover object-top md:relative md:inset-auto md:object-contain md:h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Scroller Section */}
      <section className="pt-8 pb-8 sm:pt-16 sm:pb-16 md:pt-8 md:pb-8 overflow-hidden pointer-events-none">
        <div className="flex animate-scroll" style={{ userSelect: 'none', display: 'inline-flex' }}>
          {/* First set of logos */}
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-brightspot.svg"
              alt="Brightspot"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-kcrw.svg"
              alt="KCRW"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-irvine-company.svg"
              alt="Irvine Company"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-berkeley.svg"
              alt="UC Berkeley"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-chief.svg"
              alt="Chief"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-youturn-health.svg"
              alt="Youturn Health"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-roundtables.svg"
              alt="Roundtables"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-uag.svg"
              alt="UAG"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-sixthree-zero.svg"
              alt="630"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-nokia.svg"
              alt="Nokia"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-captive-eight.svg"
              alt="Captive Eight"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-lenox-park.svg"
              alt="Lenox Park"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-martin-container.svg"
              alt="Martin Container"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-plan-voyage.svg"
              alt="Plan Voyage"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-zupo.svg"
              alt="Zupo"
              width={150}
              height={60}
            />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-brightspot.svg"
              alt="Brightspot"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-kcrw.svg"
              alt="KCRW"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-irvine-company.svg"
              alt="Irvine Company"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-berkeley.svg"
              alt="UC Berkeley"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-chief.svg"
              alt="Chief"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-youturn-health.svg"
              alt="Youturn Health"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-roundtables.svg"
              alt="Roundtables"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-uag.svg"
              alt="UAG"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-sixthree-zero.svg"
              alt="630"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-nokia.svg"
              alt="Nokia"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-captive-eight.svg"
              alt="Captive Eight"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-lenox-park.svg"
              alt="Lenox Park"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-martin-container.svg"
              alt="Martin Container"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-plan-voyage.svg"
              alt="Plan Voyage"
              width={150}
              height={60}
            />
          </div>
          <div className="flex items-center justify-center min-w-[200px] color-logo flex-shrink-0 mr-6">
            <img
              src="/logo-client-zupo.svg"
              alt="Zupo"
              width={150}
              height={60}
            />
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section id="about" className="px-5 md:px-8 pt-4 md:pt-24 pb-16 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-left">
            <div className="text-eyebrow mb-4">Background</div>
            <div className="space-y-8">
              <h2 className="text-body-2xl text-white">A designer with roots in graphic design, typography, and branding.</h2>
              
              {/* Two-column sentences */}
              <div className="max-w-md grid sm:grid-cols-2 md:gap-8">
                <p className="text-white text-body leading-relaxed">
                  6+ years in product and UX/UI design
                </p>
                <p className="text-white text-body leading-relaxed">
                  10+ years in graphic design
                </p>
              </div>
              
              <p className="text-muted text-body leading-relaxed">
                Today, I combine analytical problem-solving with high-end visual design to create digital experiences that feel effortless
                and impactful. With experience across agency and in-house teams, I've balanced strategy and execution while
                mentoring designers and collaborating effectively to bring clarity to complex challenges.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="px-5 md:px-8 pt-4 md:pt-24 pb-16 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-left">
            <div className="text-eyebrow mb-4">Focus</div>
            <div>
              
              {/* Skills List */}
              <ul className="space-y-1">
                <li className="text-body-2xl text-white">Product Design</li>
                <li className="text-body-2xl text-white">UX/UI</li>
                <li className="text-body-2xl text-white">Branding</li>
                <li className="text-body-2xl text-white">Communication</li>
                <li className="text-body-2xl text-white">Strategy</li>
                <li className="text-body-2xl text-white">Design System</li>
                <li className="text-body-2xl text-white">Accessibility</li>
                <li>
                  <span className="text-body-2xl text-muted">Vibe Coding</span>
                  <span className="text-body text-muted ml-2">(learned this one!)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-5 md:px-8 py-8 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-left">
            <div className="text-eyebrow mb-4">Experience</div>
            <div>
              {/* Experience List */}
              <div className="space-y-16 md:space-y-32">
                {experienceEntries.slice(0, showAllExperience ? experienceEntries.length : 3).map((exp, index) => (
                  <div key={index} className="space-y-5 md:space-y-8">
                    {/* Eyebrow, Job Title, and Date Range - closer together */}
                    <div>
                      <div className="text-body-bold">{exp.company}</div>
                      <div className="text-body-2xl text-white">{exp.title}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-body text-muted">{exp.type}: {exp.dateRange}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-body text-muted">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* View More/Less Button */}
              {experienceEntries.length > 3 && (
                <div className="mt-8 md:mt-12">
                  {!showAllExperience ? (
                    <ButtonSecondary onClick={() => setShowAllExperience(true)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      View {experienceEntries.length - 3} more
                    </ButtonSecondary>
                  ) : (
                    <ButtonSecondary onClick={() => setShowAllExperience(false)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      View Less
                    </ButtonSecondary>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Features Section */}
      <section className="px-5 md:px-8 pt-16 md:pt-16 pb-4 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-left">
            <div className="text-eyebrow mb-4">Awards & Features</div>
            <div className="space-y-8">
              {/* Title */}
              <h2 className="text-body-2xl text-white">My path has been diverse, winning awards in both digital and physical spaces.</h2>

              {/* Awards List */}
              <div>
                {awardsEntries.map((award, index) => (
                  <div key={index}>
                    {index > 0 && <div className="border-t border-divider"></div>}
                    <div className="py-5 md:py-8">
                      {/* Line 1: Awarding Body */}
                      <p className="text-body text-white">{award.title}</p>
                      
                      {/* Line 2: Two-column layout */}
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                        {/* Left: Award Category/Description */}
                        <p className="text-body text-muted">{award.award}</p>

                        {/* Right: Client • Year */}
                        <div className="flex items-center gap-1">
                          <span className="text-body text-muted">{award.project}</span>
                          <span className="text-body text-muted">•</span>
                          <span className="text-body text-muted">{award.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-5 md:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-md aspect-[3/4] sm:aspect-video"
            onMouseEnter={() => setIsHoveringLocation(true)}
            onMouseLeave={() => setIsHoveringLocation(false)}
          >
            {/* Satellite Map Background */}
            <Image
              src="/images/about-me-location-image.png"
              alt="Southern California satellite map"
              width={1400}
              height={600}
              className="w-full h-full object-cover"
            />

            {/* Audio Button - Bottom Left */}
            <AudioPlayerButton 
              audioSrc="/audio/mr-worldwide-yeah.mp3"
              className="absolute bottom-6 left-6 z-10 hidden md:flex"
              ariaLabel="Play location audio"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="py-32 px-5 md:px-8 text-center">
                <div className="text-eyebrow mb-4">Location</div>
                
                <h3 className="text-body-2xl text-white leading-tight">
                  Based in Southern California.
                </h3>
                
                <h3 className="text-body-2xl text-white leading-tight mb-8 md:mb-12">
                  Available Worldwide.
                </h3>
                
                <div className="flex justify-center">
                  <div 
                    onMouseEnter={() => setIsHoveringLocation(false)}
                    onMouseLeave={() => setIsHoveringLocation(true)}
                  >
                    <ButtonPrimary type="button" onClick={() => router.push('/contact')}>
                      Contact Me
                    </ButtonPrimary>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Beyond Design Section */}
      <section className="px-5 md:px-8 pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-left max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="text-eyebrow mb-4">Life Beyond Design</div>
            <h2 className="text-body-2xl text-white mb-8">If I'm not shaping digital experiences, you'll find me exploring the outdoors.</h2>
            
            <p className="text-body text-muted">
               You'll find me skating, mountain biking, or chasing light through a camera lens. I love travel, good coffee, and noticing the small
               moments that spark creativity. I've been skateboarding for over 20 years, paint and illustrate when I can, and lately I've been
               learning Melbourne and MAS shuffling. I also have a dog named Yoyo, and yes, she absolutely lives up to the name.
            </p>
          </div>
          
          {/* Image */}
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/life-collage-3.png"
              alt="Life Beyond Design - A collage of lifestyle photos featuring scenic mountain landscapes, coastal villages, desert canyons, 
                and playful moments with pets"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <ContactSection />

      </PageTransition>
      <Footer />
    </div>
  );
}

