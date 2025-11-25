"use client";

import CaseStudyCard from './CaseStudyCard';

interface Project {
  href: string;
  eyebrows: string[];
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface AdditionalProjectsProps {
  projects: Project[];
}

export default function AdditionalProjects({ projects }: AdditionalProjectsProps) {
  return (
    <section className="px-5 md:px-8">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-24">
        {/* Section Stroke */}
        <div className="border-t border-divider"></div>
        
        <h3 className="text-body-bold mb-12 md:mb-16">Additional Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <CaseStudyCard
              key={index}
              href={project.href}
              eyebrows={project.eyebrows}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

