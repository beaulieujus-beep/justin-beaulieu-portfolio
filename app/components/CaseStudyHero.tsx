interface CaseStudyHeroProps {
  eyebrows: string[];
  title: string;
  description: string;
  role: string;
  duration: string;
  support: string;
}

export default function CaseStudyHero({
  eyebrows,
  title,
  description,
  role,
  duration,
  support,
}: CaseStudyHeroProps) {
  return (
    <section className="pt-32 md:pt-48 px-5 md:px-8">
      <div className="max-w-3xl mx-auto mb-12 md:mb-20 space-y-8">
        {/* Case Study Label */}
        <div className="flex items-center gap-1 mb-4">
          {eyebrows.map((eyebrow, index) => (
            <span key={index} className="text-eyebrow">{eyebrow}</span>
          ))}
        </div>
        
        {/* Case Study Title */}
        <h2 className="text-h2 text-white">
          {title}
        </h2>
        
        <p className="text-body text-white">
          {description}
        </p>

        {/* Section Stroke */}
        <div className="border-t border-divider"></div>

        {/* Case Study Details */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-16 sm:gap-y-8 md:gap-x-16 md:gap-y-8">
          <div>
            <div className="text-body-sm text-muted">Role:</div>
            <div className="text-body-sm text-muted">{role}</div>
          </div>
          <div>
            <div className="text-body-sm text-muted">Duration:</div>
            <div className="text-body-sm text-muted">{duration}</div>
          </div>
          <div>
            <div className="text-body-sm text-muted">Support:</div>
            <div className="text-body-sm text-muted">{support}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

