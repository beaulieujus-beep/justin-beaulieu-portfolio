"use client";

import Image from "next/image";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import CaseStudyHero from '../../components/CaseStudyHero';
import AdditionalProjects from '../../components/AdditionalProjects';
import ContactSection from '../../components/ContactSection';
import Credits from '../../components/Credits';
import { getCaseStudyBySlug, getOtherCaseStudies } from '../../data/caseStudies';

export default function KCRWCaseStudy() {
  const caseStudy = getCaseStudyBySlug("kcrw-music-streaming-and-brand-experience");
  
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
            const src = "/images/kcrw-case-study-hero.png";
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
                  alt="KCRW Case Study Hero"
                  fill
                  className="object-cover md:hidden"
                />
                <Image
                  src={desktopSrc}
                  alt="KCRW Case Study Hero"
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
            
            <div>
              <div>
                <div className="text-body-xl text-white">+169% in music page visits</div>
              </div>
              <div>
                <div className="text-body-xl text-white">+172% in episode page views</div>
              </div>
              <div>
                <div className="text-body-xl text-white">+133% events added by users</div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-body text-white">KCRW is a public radio station connecting fans through music, culture, and news.
                I led the redesign of their music landing, streaming, and editorial experience, mentoring two junior designers while
                driving the full process across workshops, research, design, and prototyping. The result was a unified platform that
                deepened fan engagement and made music discovery effortless and immersive.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Section Divider */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-divider"></div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Strategy</div>
            <div className="space-y-8">
              <p className="text-body text-white">
                We began by learning about KCRW’s audience and how they engage with content. I led workshops with the digital and marketing teams
                to align on priorities and uncover insights into how fans experience the platform.
              </p>
            </div>

            {/* Discovery Timeline Image */}
            <div className="rounded-md overflow-hidden">
              <Image
                src="/images/kcrw-case-discovery-timeline.png"
                alt="Discovery Timeline"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Research</div>
            
            <div className="space-y-8">
              <p className="text-body text-white">
                User feedback and analytics revealed friction in navigation, music discovery, and finding shows, podcasts, and editorial
                content. These were key areas to improve.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Workshops and Analytics & User Flows Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div>
            <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
              <img
                src="/images/kcrw-engagement-case-study-workshops-analytics.png"
                alt="KCRW Workshops and Analytics"
                className="w-full h-auto block max-w-full"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
          
          <div>
            <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
              <img
                src="/images/kcrw-engagement-case-study-user-flows-1.png"
                alt="User Flows"
                className="w-full h-auto block max-w-full"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Field Research Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Field Research</div>
            <h2 className="text-body-xl text-white">Understanding the physical and emotional context of a recording studio.</h2>
            <p className="text-body text-white">
              The recording studios were dramatic, low-lit spaces surrounded by enclosed booths, creating an intimate yet energetic
              atmosphere. Observing DJs, producers, and staff in their workflow gave us a sense of the mood and pace that informed
              our design decisions, particularly around the rhythm and flow of the digital experience.
            </p>
          </div>
        </div>
      </section>

      {/* Field Research Image Grouping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
        {/* Field Research 1 Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/kcrw-engagement-case-study-field-research-1.png"
              alt="Field Research 1"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Field Research 2 Image */}
        <div>
            <div className="rounded-md overflow-hidden">
              <Image
                src="/images/kcrw-engagement-case-study-field-research-2.png"
              alt="Field Research 2"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Design Ideation Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Design Ideation</div>
            
            <div className="space-y-8">
              <p className="text-body text-white">
                We translated research insights into wireframes and visual explorations across mobile and web, focusing on intuitive
                navigation and immersive content experiences.
              </p>
              <p className="text-body text-white">
              The design balanced two styles: a news and culture-focused art direction for editorial content, and a studio-inspired
              feel when users explored music, creating a rich, emotional connection with fans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Ideation Image */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/kcrw-engagement-case-study-moodboard.png"
              alt="Personas and Audits"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Prototyping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="text-eyebrow mb-4">Prototyping</div>
            <p className="text-body text-left text-white">
              High-fidelity prototypes brought the design to life, allowing us to test interactions, hierarchy, and content flow.
              Iterative feedback cycles refined the experience, ensuring a seamless and engaging streaming journey that felt
              cohesive across devices.
            </p>
          </div>
        </div>
      </section>

      {/* Prototyping Image Grouping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
        {/* Desktop Prototype Image */}
        <div>
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/kcrw-engagement-case-study-prototypes-1.png"
              alt="KCRW Desktop Prototype"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile Prototype Image */}
        <div>
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/kcrw-engagement-case-study-prototypes-2.png"
              alt="KCRWMobile Prototype"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        
        </div>
      </section>    

      {/* Final Solutions Homepage, Navigation, and Editorial Content Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Final Solutions</div>
            <h2 className="text-body-xl text-white">Homepage, navigation, and editorial content.</h2>
            <p className="text-body text-white">
              The homepage became a central hub for culture, editorial content, and articles, connecting fans to the full spectrum
              of KCRW experiences. The design keeps areas outside music discovery unified within light mode while providing clear
              pathways to explore music.
            </p>
          </div>
        </div>
      </section>

      {/* Final Solutions Homepage, Navigation, and Editorial Content Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div>
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/kcrw-engagement-case-study-homepage.png"
                alt="KCRW Homepage"
                className="w-full h-auto block max-w-full"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
          
          <div>
            <div className="rounded-md overflow-hidden">
              <Image
                src="/images/kcrw-engagement-case-study-navigation-and-editorial.png"
                alt="KCRW Navigation and Editorial Content"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div>
            <div className="rounded-md overflow-hidden">
              <Image
                src="/images/kcrw-engagement-case-study-homepage-nav-edit-mobile.png"
                alt="KCRW Homepage, Navigation, and Editorial Content Mobile"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section> 

      {/* Final Solutions Music & Radio Experience Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Final Solutions</div>
            <h2 className="text-body-xl text-white">Music landing, streaming, and radio experience.</h2>
            <p className="text-body text-white">
              We reimagined the music experience as a “world” fans could enter. Navigation for radio stations, playlists, DJ shows,
              and discography was simplified, with immersive landing pages that let users explore music deeply and intuitively.
              Each show and album page now invites listeners into a rich, emotional experience rather than a static content layout.
            </p>
          </div>
        </div>
      </section>

      {/* Final Solutions Music & Radio Experience Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div>
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/kcrw-engagement-case-study-music-experience.png"
                alt="KCRW Music & Radio Experience"
                className="w-full h-auto block max-w-full"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
          
          <div>
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/kcrw-engagement-case-study-music-experience-2.png"
                alt="KCRW Music & Radio Experience 2"
                className="w-full h-auto block max-w-full"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          <div>
            <div className="rounded-md overflow-hidden">
              <img
                src="/images/kcrw-engagement-case-study-music-experience-mobile.png"
                alt="KCRW Music & Radio Experience Mobile"
                className="w-full h-auto block max-w-full"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
          
        </div>
      </section> 

      {/* Impact Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Impact</div>
            
            <div>
              <div>
                <div className="text-body-xl text-white">+169% in music page visits</div>
              </div>
              <div>
                <div className="text-body-xl text-white">+172% in episode page views</div>
              </div>
              <div>
                <div className="text-body-xl text-white">+133% events added by users</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-body text-white">
                The redesigned platform delivers an emotionally engaging experience that strengthens fan connection and improves discovery across content.
              </p>
              <p className="text-body text-white">
                Mentoring two junior designers throughout the project also built internal design capability, ensuring lasting impact beyond the product itself.
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
              "Design mentorship and team leadership.",
              "Streaming and discography platform redesign.",
              "Stakeholder workshops and research.",
              "Design ideation and prototyping."
            ]
          },
          {
            name: "Josie Lorenzo",
            roles: [
              "Supporting UX/UI Designer.",
              "Music player UX/UI.",
              "Articles and editorial content.",
              "Guest, hosts, and artists pages."
            ]
          },
          {
            name: "Theresa Wong",
            roles: [
              "UX/UI Design Intern.",
              "Music player UX/UI."
            ]
          }
        ]}
      />

      









      <AdditionalProjects 
        projects={getOtherCaseStudies("kcrw-music-streaming-and-brand-experience", 2).map(cs => ({
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

