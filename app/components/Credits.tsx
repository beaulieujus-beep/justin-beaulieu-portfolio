"use client";

interface Designer {
  name: string;
  roles: string[];
}

interface CreditsProps {
  agency: string;
  designers: Designer[];
}

export default function Credits({ agency, designers }: CreditsProps) {
  return (
    <section className="px-5 md:px-8 pb-20 md:pb-24">
      <div className="max-w-3xl mx-auto space-y-20 md:space-y-32">
        {/* Section Stroke */}
        <div className="border-t border-divider"></div>
        
        <h3 className="text-eyebrow mb-4">Credits</h3>
        <div className="space-y-6">
          <div>
            <div className="text-body text-white">{agency}</div>
          </div>
          <div>
            <div className="space-y-3">
              {designers.map((designer, index) => (
                <div key={index}>
                  <div className="text-body text-white" style={{ marginTop: index > 0 ? '2rem' : '0' }}>
                    {designer.name}
                  </div>
                  {designer.roles.map((role, roleIndex) => (
                    <div 
                      key={roleIndex} 
                      className="text-body-sm text-muted" 
                      style={{ 
                        marginTop: roleIndex === 0 ? '0.25rem' : '0'
                      }}
                    >
                      {role}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

