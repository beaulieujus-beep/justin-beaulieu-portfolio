export interface CaseStudy {
  slug: string;
  href: string;
  eyebrows: string[];
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  role: string;
  duration: string;
  support: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "brightspot-design-system",
    href: "/case-study/brightspot-design-system",
    eyebrows: ["Product Design"],
    title: "Brightspot Dashboard and Design System",
    description: "Delivered a scalable and intuitive design system while accelerating product improvements, reducing design debt, and enhancing user experience.",
    imageSrc: "/images/Brightspot-case-study-hero.png",
    imageAlt: "Brightspot CMS Case Study Hero",
    role: "Lead Product Designer",
    duration: "Dec 2022 – Mar 2024",
    support: "Leah Segawah, Luke Cúre, and Gloria Rafield",
  },
  {
    slug: "youturn-health-brand-and-website",
    href: "/case-study/youturn-health-brand-and-website",
    eyebrows: ["UX/UI", "•", "Branding"],
    title: "Youturn Health Website and Brand",
    description: "Reimagined healthcare platform with a personalized media-driven experience, increasing engagement, and improving recovery tracking.",
    imageSrc: "/images/youturn-case-study-hero.png",
    imageAlt: "Youturn Health Case Study Hero",
    role: "Lead UX/UI Designer & Branding",
    duration: "Jun 2024 – Sep 2024",
    support: "Tasha Salgado",
  },
  {
    slug: "kcrw-music-streaming-and-brand-experience",
    href: "/case-study/kcrw-music-streaming-and-brand-experience",
    eyebrows: ["UX/UI", "•", "Branding"],
    title: "KCRW Website and Music Streaming Experience",
    description: "Redesigned KCRW's music streaming experience, mentored two designers and delivered a deepened and enriched listening journey.",
    imageSrc: "/images/kcrw-case-study-hero.png",
    imageAlt: "KCRW Case Study Hero",
    role: "Lead UX/UI Designer & Branding",
    duration: "2022 – 2024",
    support: "Josie Lorenzo and Theresa Wong",
  },
  {
    slug: "kcrw-app-engagement",
    href: "/case-study/kcrw-app-engagement",
    eyebrows: ["UX/UI", "•", "Growth"],
    title: "KCRW Website and App Engagement and Growth",
    description: "Delivered mobile app and web updates, boosting engagement across app sign-ups, app store clicks, member perks, and donations.",
    imageSrc: "/images/kcrw-engagement-case-study-hero.png",
    imageAlt: "KCRW App Engagement Case Study Hero",
    role: "Lead UX/UI Designer",
    duration: "2022 – 2023",
    support: "Luke Cúre and Josie Lorenzo",
  },
];

// Helper function to get a case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

// Helper function to get other case studies (excluding the current one)
export function getOtherCaseStudies(currentSlug: string, limit: number = 2): CaseStudy[] {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === currentSlug);
  
  if (currentIndex === -1) {
    // If current case study not found, return first N case studies
    return caseStudies.slice(0, limit);
  }
  
  // Get the next case studies after the current one
  const nextStudies: CaseStudy[] = [];
  let index = currentIndex + 1;
  
  // Collect next studies, wrapping around if needed
  while (nextStudies.length < limit && nextStudies.length < caseStudies.length - 1) {
    if (index >= caseStudies.length) {
      index = 0; // Wrap around to the beginning
    }
    
    // Skip the current case study if we wrap around
    if (index !== currentIndex) {
      nextStudies.push(caseStudies[index]);
    }
    
    index++;
  }
  
  return nextStudies;
}

