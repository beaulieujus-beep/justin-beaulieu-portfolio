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

export default function ChiefCaseStudy() {
  const caseStudy = getCaseStudyBySlug("chief-community-experience");
  
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
            const src = "/images/chief-community-case-study-hero.png";
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
                  alt="Chief Community Experience Case Study Hero"
                  fill
                  className="object-cover md:hidden"
                />
                <Image
                  src={desktopSrc}
                  alt="Chief Community Experience Case Study Hero"
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
              <div className="text-body-xl text-white">+86% in monthly active users on the social feed</div>
              <div className="text-body-xl text-white">+47% of total members now attending events</div>
            </div>

            <div className="space-y-8">
              <p className="text-body text-white">
                Chief is a private network built to drive more women into positions of power and keep them there. 
                I partnered with cross-functional product teams and stakeholders to improve the community experience by strengthening and
                elevating the social feed, community, and event experiences.
              </p>
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

      {/* Challenge Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Challenge</div>
            <h2 className="text-body-xl text-white">A community experience that lacked connection.</h2>
            <p className="text-body text-white">
                Chief’s social, community, and event surfaces felt disjointed across the app and website, making it harder for members to
                discover conversations, build relationships, and stay engaged with upcoming events.
              </p>
              <p className="text-body text-white">To understand the problem, I began by mapping how members
              moved from onboarding into early engagement to understand exactly where momentum dropped and where the experience first began to fracture.</p>
          </div>
        </div>
      </section>

      {/* Engagement Diagram Image Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/chief-community-case-study-engagement-diagram.png"
              alt="Chief Community Engagement Diagram"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Challenge Research Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-body text-white">
            With a clearer picture of the journey, I partnered with product and research to conduct interviews and audit how members
            interacted with social feeds, groups, and event flows, and how internal teams perceived member engagement patterns.
            These insights revealed gaps in clarity, discoverability, and platform consistency.
          </p>
        </div>
      </section>

      {/* Interview Logistics Image Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/chief-community-case-study-interview-logistics.png"
              alt="Chief Community Interview Logistics"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Community and Feed Solution Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Community and Feed Solution</div>
            <h2 className="text-body-xl text-white">Strengthening member connection through clearer pathways and more engaging surfaces.</h2>
            <p className="text-body text-white">
              I unified design patterns across the mobile app and website to create a more intuitive and consistent community experience.
              By refining navigation, improving accessibility, and strengthening the design system with reusable components, members can more easily
              join groups, follow conversations, and participate in shared discussions.
            </p>
            <p className="text-body text-white">
              These updates help the feed feel more alive, relevant, and connected to the broader member ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/chief-community-case-study-mobile-feed-comparison.png"
              alt="Chief Mobile Feed Comparison"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/chief-community-case-study-mobile-community-comparison.png"
              alt="Chief Mobile Community Comparison"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/chief-community-case-study-mobile-matrix-comparison.png"
              alt="Chief Mobile Matrix Comparison"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/chief-community-case-study-web-group-feed.png"
              alt="Chief Web Group Feed"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/chief-community-case-study-web-reactions.png"
              alt="Chief Web Reactions"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/chief-community-case-study-web-post-and-feed-types.png"
              alt="Chief Web Post and Feed Types"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Event Solution Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Event Solution</div>
            <h2 className="text-body-xl text-white">Elevating usability and simplifying information load.</h2>
            <p className="text-body text-white">
              I updated core event components to create a more consistent and intuitive mobile experience. Enhancements included an integrated audio player, clearer "Add to Calendar" actions, and a reorganized layout that makes event details easier to scan and use.
            </p>
            <p className="text-body text-white">
              These refinements clarified event navigation, reduced cognitive load, and made it easier for members to discover, understand, and engage with events more naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Event Solution Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/chief-community-case-study-mobile-event.png"
              alt="Chief Mobile Event Experience"
              width={1600}
              height={900}
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
            <h2 className="text-body-xl text-white">Stronger engagement, deeper participation, and a more unified community.</h2>
            <p className="text-body text-white">
              Members now experience clearer, more intuitive pathways into groups, conversations, and events, resulting in deeper community participation and consistent interface patterns across devices.
            </p>
            <p className="text-body text-white">
              Internally, the updated design patterns and expanded system gave product and engineering teams a scalable foundation for evolving community and event features going forward.
            </p>
            
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
              "Product Designer.",
              "Focused on social media, community, and event experiences."
            ]
          },
          {
            name: "Kinney Sheth",
            roles: [
              "Product Design Lead.",
              "Focused on audits and cross-functional alignment."
            ]
          }
        ]}
      />

      <AdditionalProjects 
        projects={getOtherCaseStudies("chief-community-experience", 2).map(cs => ({
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

