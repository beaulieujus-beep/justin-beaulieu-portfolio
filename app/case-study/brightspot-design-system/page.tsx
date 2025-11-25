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

function VideoWithHoverControl({ src }: { src: string }) {
  return (
    <div className="rounded-md overflow-hidden relative" style={{ backgroundColor: 'var(--background)' }}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

 

export default function BrightspotCaseStudy() {
  const caseStudy = getCaseStudyBySlug("brightspot-design-system");
  
  if (!caseStudy) {
    return null;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation fadeIn={true} />
      <PageTransition>

      {/* Case Study Hero Section */}
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
            const src = "/images/Brightspot-case-study-hero.png";
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
                  alt="Brightspot CMS Case Study Hero"
                  fill
                  className="object-cover md:hidden"
                />
                <Image
                  src={desktopSrc}
                  alt="Brightspot CMS Case Study Hero"
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
            <div className="space-y-8">
              <p className="text-body text-white">
                Brightspot, an enterprise CMS platform, set out to modernize and scale its design system.
                The outdated system made progress slow but had limited buy-in. I helped shape a strategy
                that delivered quick design wins and built the foundation for a platform-wide evolution.
              </p>
              <p className="text-body text-white pb-2 md:pb-4">
                Several challenges included stakeholder skepticism, robust customization, responsive and 
                accessibility needs, and an overwhelming old dashboard.
              </p>
            </div>
          
          {/* Old Dashboard Image */}
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-old-dash.png"
              alt="Old Dashboard Interface"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-8">
              <blockquote className="text-body-xl text-white">
                "We usually just improve the whole look every 5 or 10 years." – Dylan, Brightspot
              </blockquote>
              <p className="text-body text-white">
                With stakeholder goals unclear, I stepped back to uncover deeper issues and craft a design strategy that addressed immediate 
                pain points while planning for broader system improvements. This groundwork gave both Dylan's team and mine the clarity we needed 
                to secure stakeholder approval for the larger design system initiative.
              </p>
            </div>
          
          {/* Strategy Timeline Image */}
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/Strategy Timeline.png"
              alt="Strategy Timeline"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
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

      {/* Research Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="text-eyebrow mb-4">Research</div>
            
            <div className="space-y-8">
              <p className="text-body text-white">
                I started by benchmarking competitor dashboards and interviewing Brightspot stakeholders, engineers, and platform users. 
                Research showed dashboards needed to be responsive, consistent, and focused on quick actions. Interviews revealed how admins 
                use dashboards, widgets, and workspaces daily, providing insights to guide design improvements.
              </p>
            
              {/* Interview Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-5 md:gap-8">
                <p className="text-body text-white">
                  65% of admins struggle with navigation complexity.
                </p>
                <p className="text-body text-white">
                  78% of users found the interface overwhelming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarking Image */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-benchmarking.png"
              alt="Benchmarking"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Personas and Audits Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Personas and Audits</div>
            
            <p className="text-body text-white">
              Using research, I created personas and audited the platform's current structure. This helped us understand user pain points, 
              uncover inefficiencies, and identify opportunities for improvement across workflows and content management.
            </p>
          </div>
        </div>
      </section>

      {/* Personas and Audits Image */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-personas-and-audits.png"
              alt="Personas and Audits"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Ideation & Design Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Ideation & Design</div>
            
            <p className="text-body text-white">
              I collaborated with the team to turn insights into purposeful iterations. We inventoried the navigation and refined the 
              information architecture, sketching flows based on benchmarking, user input, and admin workflows.
            </p>
            
            <p className="text-body text-white">
              Low-fidelity wireframes visualized hierarchy, layout, and flow, helping engineers plan functionality changes. Multiple design 
              iterations tested ideas with accessibility improvements embedded throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Design Iteration Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-data-flows-a.png"
              alt="Dashboard IA"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-data-flows-b.png"
              alt="Data Flows"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-iterative-design.png"
              alt="Iterative Design"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-failed-successful-iterations.png"
              alt="Failed & Successful Iterations"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-accessibility.png"
              alt="Accessibility Improvements"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Test & Iterate Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Prototype, Test, and Iterate</div>
            
            <div className="space-y-8">
              <p className="text-body text-white">
                Once initial designs were aligned, I consolidated key pages and linked prototypes for users, admins, and stakeholders to 
                interact with.
              </p>
              <p className="text-body text-white">
                Testing revealed that the fixed left rail limited flexibility, widget sorting and viewing needed more clarity, and while content 
                creation was intuitive, users often customized widgets during setup. This feedback guided refinements that made the dashboard 
                more usable, flexible, and aligned with real workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Linking Image Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden relative" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-prototype-linking.png"
              alt="Prototype Linking"
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Final Design Direction Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Design Solutions</div>
            
            <p className="text-body text-white">
              The final designs delivered a modern, scalable dashboard for both desktop and mobile, consolidating UX and UI improvements 
              across the platform. Stakeholders were impressed by the process and results, green-lighting the upgrade to the full design system.
            </p>
          </div>
        </div>
      </section>

      {/* Final Direction Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-final-direction.png"
              alt="Final Design Direction - Desktop"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-final-direction-mobile.png"
              alt="Final Design Direction - Mobile"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>


      {/* Design System & Role Expansion Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Design System & Role Expansion</div>
            
            <p className="text-body text-white">
              Over time, I built the design system library using audit insights as a blueprint, creating components, sheets, and templates to 
              support ongoing UX and UI improvements. I also embedded myself within Brightspot's internal team, taking a lead design role and 
              expanding the project into platform-wide design enhancements powered by the new system.
            </p>
          </div>
        </div>
      </section>

      {/* Design System Images Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-role-expansion.png"
              alt="Role Expansion"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-design-system-component-list.png"
              alt="Library Component List"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-library-sheets.png"
              alt="Library Sheets"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="rounded-md overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <Image
              src="/images/brightspot-case-study-library-components.png"
              alt="Library Components"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/brightspot-case-study-library-templates.png"
              alt="Library Templates"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>

          <div>
            <VideoWithHoverControl src="/images/brightspot-case-study-reel-a.mp4" />
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-eyebrow mb-4">Impact</div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="text-body text-white mb-1">Consistency</div>
              <div className="text-body text-muted">Strengthened Brightspot's brand and crafted predictable interactions to boost user trust.</div>
            </div>
            <div>
              <div className="text-body text-white mb-1">Speed & Efficiency</div>
              <div className="text-body text-muted">Streamlined design and development by fixing foundational issues.</div>
            </div>
            <div>
              <div className="text-body text-white mb-1">Collaboration</div>
              <div className="text-body text-muted">A single source of truth kept teams aligned and boosted cross-functional collaboration.</div>
            </div>
            <div>
              <div className="text-body text-white mb-1">Scalability</div>
              <div className="text-body text-muted">Simplified support for new features and updates while easing designer and engineer onboarding.</div>
            </div>
            <div>
              <div className="text-body text-white mb-1">Experience Quality</div>
              <div className="text-body text-muted">Designed elements for accessibility, reusability, and responsiveness, reducing errors during updates.</div>
            </div>
            <div>
              <div className="text-body text-white mb-1">Business Savings</div>
              <div className="text-body text-muted">Saved time and resources by streamlining UI and fixing inconsistencies.</div>
            </div>
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
              "Lead Product Designer.",
              "Stakeholder, engineer, and platform user interviews.",
              "Dashboard, page builder, search, and content IA.",
              "Admin and user personas.",
              "Toolbar and workflow user flows.",
              "Creative direction iterations.",
              "Accessibility audits and improvements.",
              "Prototype building, linking and testing.",
              "Mobile breakpoints and responsive design."
            ]
          },
          {
            name: "Leah Segawa",
            roles: [
              "Supporting Product Designer.",
              "Interviews and competitor benchmarking workshop.",
              "Platform audits and component backlog prioritization.",
              "Dashboard and widget user flows.",
              "Creative direction iterations."
            ]
          },
          {
            name: "Luke Cúre and Gloria Rafield",
            roles: [
              "Supporting Product Designers.",
              "Interviews and competitor benchmarking workshop.",
              "Dashboard and widget wireframes.",
              "Creative direction iterations.",
              "Chart and graph design."
            ]
          }
        ]}
      />

      <AdditionalProjects 
        projects={getOtherCaseStudies("brightspot-design-system", 2).map(cs => ({
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
