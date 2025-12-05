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

 

export default function YouturnHealthCaseStudy() {
  const caseStudy = getCaseStudyBySlug("youturn-health-brand-and-website");
  
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
            const src = "/images/youturn-case-study-hero.png";
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
                  alt="Youturn Health Case Study Hero"
                  fill
                  className="object-cover md:hidden"
                />
                <Image
                  src={desktopSrc}
                  alt="Youturn Health Case Study Hero"
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
              <blockquote className="text-body-xl text-white">
                "We want to be an easy button for positive change." – Jeff Dorchester
              </blockquote>
              <p className="text-body text-left text-white pb-2 md:pb-4">
                Youturn Health supports users facing mental health and substance-use challenges, but its dated,
                confusing experience left many unsure where to turn. We set out to refresh the brand and redesign
                the website so users could more easily find support, feel encouraged, and stay engaged.
              </p>
            </div>
          
          {/* Old Dashboard Image */}
          <div>
            <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
              <Image
                src="/images/youturn-case-study-old-dash.png"
                alt="Youturn Old Educational Course Overview"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
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

      {/* Discovery & Brand Workshops Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <div className="text-eyebrow mb-4">Strategy</div>
            <p className="text-body text-left text-white">
              I started by helping the team uncover what the mission, traits, and goals truly stood for. Through workshops and open discussions, 
              personal stories began to surface, grounding our work in empathy and purpose at the start of our research.
            </p>
            <p className="text-body text-left text-white py-6">
              Together, we turned big vision ideas into clear, expressible brand traits that reflected who Youturn wanted to be.
            </p>
          </div>
          {/* Discovery Timeline Image */}
          <div>
            <div className="rounded-md overflow-hidden">
              <Image
                src="/images/youturn-case-discovery-timeline.png"
                alt="Youturn Discovery Timeline"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Brand Workshops and Research Insights Image Grouping Section */}
       <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
        {/* Workshops and Research Insights Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-workshops-research-insights.png"
              alt="Youturn Workshops and Research Insights"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Mission Statement Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-mission-statement.png"
              alt="Youturn Mission Statement"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Creative Direction Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="text-eyebrow mb-4">Creative Direction</div>
            <p className="text-body text-left text-white">
              Next, I explored creative directions that visually and emotionally expressed the brand's renewed purpose. I gathered benchmarks 
              and built moodboards that helped the team imagine how Youturn could stand out as approachable, hopeful, and human. These explorations 
              shaped our early visual language and guided the tone for the redesign.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Ideation Creative Direction Image Grouping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
        {/* Benchmarking Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-benchmarking.png"
              alt="Youturn Benchmarking"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Moodboard Image */}
        <div>
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/youturn-case-moodboard.png"
              alt="Youturn Moodboard"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Standing Out Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-standing-out.png"
              alt="Youturn Standing Out"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        </div>
      </section>      


      {/* Business Alignment Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="text-eyebrow mb-4">Business Alignment</div>
            <p className="text-body text-left text-white">
              We paused on brand ideation to make sure our design efforts supported measurable outcomes. 
              To ground our creative energy and direction, I led a planning session with stakeholders to define key business goals and success 
              metrics. The sessions energized the team and sparked ideas for growth even further beyond this phase.
            </p>
          </div>
        </div>
      </section>

      {/* Cover Story Workshop Image Grouping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
        {/* Cover Story Workshop Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-cover-story-workshop.png"
              alt="Youturn Cover Story Workshop"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* KPI Objectives Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-kpi-objectives.png"
              alt="Youturn KPI Objectives"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        {/* Outpour of Ideas Image */}
        <div className="max-w-7xl mx-auto">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-outpour-of-ideas.png"
              alt="Youturn Outpour of Ideas"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        </div>
      </section>      
  

      {/* UX/UI Ideation Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="text-eyebrow mb-4">UX/UI Ideation</div>
            <p className="text-body text-left text-white">
              With the brand foundation in place, I led UX and UI ideation sessions to shape personas, information architecture, and user flows. 
              We identified key points where users struggled or lost momentum, ensuring our designs addressed real challenges and improved clarity 
              throughout the experience.
            </p>
          </div>
        </div>
      </section>

      {/* Personas, IA, and User Flows and Design Iterations Image Grouping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
        {/* Personas, IA, and User Flows Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-personas-ia-user-flows.png"
              alt="Youturn Personas, IA, and User Flows"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Design Iterations Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-design-iterations.png"
              alt="Youturn Design Iterations"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div> 
        
        {/* Failed and Approved Design Iterations Image */}
        <div>
          <div className="rounded-md overflow-hidden">
            <Image
              src="/images/youturn-case-failed-approved.png"
              alt="Youturn Failed and Approved Design Iterations"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        </div>
      </section>      

      {/* UX/UI Prototyping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="text-eyebrow mb-4">Design & Prototypes</div>
            <p className="text-body text-left text-white">
              I translated our design ideas into tangible prototypes to test and validate key insights. Starting with low-fidelity wireframes 
              helped visualize hierarchy, layout, and flow, while higher-fidelity prototypes demonstrated interactions and visual direction. 
              This iterative process ensured the final experience was grounded in both user needs and brand purpose.
            </p>
          </div>
        </div>
      </section>   

      {/* Prototypes Image */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-prototypes.png"
              alt="Youturn Prototypes"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>    


      {/* Final Solutions Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div>
            <div className="text-eyebrow mb-4">Final Solution</div>
            <p className="text-body text-left text-white">
              The final design brought everything together with a refreshed brand, a clearer experience, and a more supportive space for users 
              seeking help. Youturn's new platform feels alive and encouraging, empowering users to keep moving forward on their path to positive 
              change.
            </p>
          </div>
        </div>
      </section>

      {/* Final Designs Image Grouping Section */}
      <section className="px-5 md:px-8">
        <div className="max-w-6xl mx-auto space-y-5 md:space-y-8">
        {/* Onboarding Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-onboarding.png"
              alt="Youturn Onboarding"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>        
             
        {/* Homepage Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-homepage.png"
              alt="Youturn Homepage"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>       
        
        {/* Entertainment Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-entertainment.png"
              alt="Youturn Entertainment"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Courses Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-courses.png"
              alt="Youturn Courses"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Course and Quizzes Image */}
        <div>
          <div className="rounded-md overflow-hidden relative">
            <Image
              src="/images/youturn-case-courses-quizes.png"
              alt="Youturn Courses and Quizzes"
              width={4096}
              height={2619}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Final Mobile Image */}
        <div>
          <div className="rounded-md overflow-hidden relative">
            <Image
              src="/images/youturn-case-final-mobile.png"
              alt="Youturn Final Mobile"
              width={1080}
              height={1920}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>          

        {/* Dashboard Mock Video */}
        <div>
          <VideoWithHoverControl src="/images/youturn-case-study-reel-a.mp4" />
        </div>

        {/* Feedback Image */}
        <div>
          <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            <Image
              src="/images/youturn-case-feedback.png"
              alt="Youturn Feedback"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
                    
        </div>
      </section>
      </div>
               
      <Credits
        agency="Vincit USA"
        designers={[
          {
            name: "Justin Beaulieu",
            roles: [
              "Branding and UX/UI Designer.",
              "Brand workshops and deliverables.",
              "Identity traits, mission, and brand voice workshop.",
              "Benchmarking and competitor research workshops.",
              "Moodboarding and creative direction.",
              "Cover Story workshop.",
              "IA, user flows, and wireframes.",
              "Design iterations, UX/UI design, and prototyping.",
              "Final brand and UI design."
            ]
          },
          {
            name: "Tasha Salgado",
            roles: [
              "Supporting UX/UI Designer.",
              "Design support and collaboration.",
              "Benchmarking and competitor research support.",
              "Cover Story workshop support.",
              "Personas and user journeys support.",
              "Wireframes and design iteration support.",
              "UX/UI design and prototyping testing support."
            ]
          }
        ]}
      />

      <AdditionalProjects 
        projects={getOtherCaseStudies("youturn-health-brand-and-website", 2).map(cs => ({
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

