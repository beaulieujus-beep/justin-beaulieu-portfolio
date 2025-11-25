"use client";

import Image from "next/image";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import CaseStudyHero from '../../components/CaseStudyHero';
import AdditionalProjects from '../../components/AdditionalProjects';
import Credits from '../../components/Credits';
import ContactSection from '../../components/ContactSection';
import { getCaseStudyBySlug, getOtherCaseStudies } from '../../data/caseStudies';

export default function KCRWEngagementCaseStudy() {
  const caseStudy = getCaseStudyBySlug("kcrw-app-engagement");
  
  if (!caseStudy) {
    return null;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation fadeIn={true} />
      <PageTransition>

      {/* Hero Section */}
      <CaseStudyHero
        eyebrows={caseStudy.eyebrows}
        title={caseStudy.title}
        description={caseStudy.description}
        role={caseStudy.role}
        duration={caseStudy.duration}
        support={caseStudy.support}
      />

      <div className="case-study-content">
      {/* Case Study Image Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          {(() => {
            const src = "/images/kcrw-engagement-case-study-hero.png";
            let mobileSrc = src;
            let desktopSrc = src;
            
            if (src.includes('-case-study-hero') && !src.match(/-case-study-hero-[0-9]+x[0-9]+/)) {
              mobileSrc = src.replace('-case-study-hero', '-case-study-hero-5x4');
              desktopSrc = src.replace('-case-study-hero', '-case-study-hero-2x1');
            }
            
            return (
              <div className="aspect-[5/4] md:aspect-[2/1] rounded-md overflow-hidden relative" style={{ backgroundColor: '#1A1A1A' }}>
                <Image
                  src={mobileSrc}
                  alt="KCRW App Engagement Case Study Hero"
                  fill
                  className="object-cover md:hidden"
                />
                <Image
                  src={desktopSrc}
                  alt="KCRW App Engagement Case Study Hero"
                  fill
                  className="hidden md:block object-cover"
                />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Overview</div>
            
            <div className="space-y-2">
              <div className="text-body-xl text-white">+24% app store clicks</div>
              <div className="text-body-xl text-white">+11% new app users</div>
              <div className="text-body-xl text-white">+44% users using benefits</div>
              <div className="text-body-xl text-white">+65% users linked to Spotify</div>
              <div className="text-body-xl text-white">+99% app donations</div>
            </div>

            <div className="space-y-8">
              <p className="text-body text-white">
                To grow digital membership and engagement,
                I partnered with their digital team to turn user insights into design solutions. Small usability tweaks and clearer value
                moments turned casual listeners into active, engaged members.
              </p>
              <p className="text-body text-white">
                Data based on annual metrics from 2022 to 2023.
              </p>
            </div>

            {/* Overview Image */}
            <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
              <Image
                src="/images/kcrw-engagement-case-study-overview.png"
                alt="KCRW Engagement Case Study Overview"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Mobile App–Facing Experience Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Mobile App–Facing Experience</div>
            <h2 className="text-body-xl text-white">Improving usability to deepen everyday engagement.</h2>
            <p className="text-body text-white">
              Inside the KCRW app, I focused on refining the key interaction points that shape a listener's relationship with the platform.
              We simplified pathways, clarified actions, and surfaced the value of membership at just the right moments. These subtle yet
              meaningful improvements helped the app feel more personal and rewarding to use.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Improvements Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/kcrw-engagement-case-study-mobile-improvements.png"
              alt="Mobile Improvements"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/kcrw-engagement-case-study-mobile-improvements-2.png"
              alt="Mobile Improvements 2"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Web–Facing Experience Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Web–Facing Experience</div>
            <h2 className="text-body-xl text-white">Telling a stronger story around membership value.</h2>
            <p className="text-body text-white">
              To support app growth, I redesigned KCRW's marketing landing pages, the first touchpoint for many new listeners. By partnering
              with marketing, we reframed these pages to highlight the "why" behind membership: listener stories, community perks, and membership features
              often overlooked.
            </p>
            <p className="text-body text-white">
              The refreshed design helped align web messaging with in-app experiences, creating a more cohesive and
              compelling journey from discovery to download.
            </p>
          </div>
        </div>
      </section>

      {/* Web Marketing Landing Pages Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/kcrw-engagement-case-study-marketing pages-2.png"
              alt="Marketing Pages 2"
              width={3840}
              height={2413}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/kcrw-engagement-case-study-marketing pages-3.png"
              alt="Marketing Pages 3"
              width={3840}
              height={2413}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/kcrw-engagement-case-study-marketing pages-4.png"
              alt="Marketing Pages 4"
              width={3840}
              height={2413}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Impact</div>
            
            <div className="space-y-6">
              <p className="text-body text-white">
                The improvements led to measurable gains across key engagement points, including increased app discovery,
                new user growth, stronger feature adoption, deeper listening behavior, and higher annual donations.
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>

      <Credits
        agency="Embedded team via Vincit USA"
        designers={[
          {
            name: "Justin Beaulieu",
            roles: [
              "Lead UX/UI Designer.",
              "User research and analytics insights.",
              "Mobile app UX/UI design and updates.",
              "Web marketing landing page design.",
              "Member benefits feature design.",
              "Donation flow optimization."
            ]
          },
          {
            name: "Luke Cúre and Josie Lorenzo",
            roles: [
              "Supporting UX/UI Designers.",
              "Design and app update support."
            ]
          }
        ]}
      />

      <AdditionalProjects 
        projects={getOtherCaseStudies("kcrw-app-engagement", 2).map(cs => ({
          href: cs.href,
          eyebrows: cs.eyebrows,
          title: cs.title,
          description: cs.description,
          imageSrc: cs.imageSrc,
          imageAlt: cs.imageAlt,
        }))} 
      />

      <ContactSection />

      </PageTransition>
      <Footer />
    </div>
  );
}

