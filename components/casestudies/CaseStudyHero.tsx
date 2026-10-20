import Image from "next/image";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  logo?: string;        
  logoAlt?: string;     
  bgImage?: string;     
  bgImageAlt?: string;  
}

export default function CaseStudyHero({ 
  title, 
  subtitle, 
  logo, 
  logoAlt = "Logo", 
  bgImage, 
  bgImageAlt = "" 
}: CaseStudyHeroProps) {
    return (
        <section className="relative w-full overflow-hidden py-20 my-6">
          {/* 1. Background Layer (Placed FIRST so it sits at the bottom) */}
          {bgImage && (
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <Image 
                fill
                src={bgImage} 
                alt={bgImageAlt}
                className="h-full w-full object-cover blur-xs opacity-90 scale-110"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-slate-950/50" />
            </div>
          )}

          {/* 2. Content Layer (Placed SECOND so it naturally sits ON TOP of the background) */}
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <p className="text-emerald-400 text-sm font-medium tracking-widest mb-4">
              CASE STUDY
            </p>

            <div className="flex items-center justify-between gap-6 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {title}
              </h1>
              
              {logo && (
                <div className="w-16 h-16 md:w-56 md:h-56 rounded-full bg-white border border-gray-700 flex items-center justify-center p-3 shrink-0 overflow-hidden shadow-inner">
                  <Image 
                    width={200} 
                    height={200}
                    src={logo} 
                    alt={logoAlt} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              )}
            </div>

            <p className="text-xl text-gray-200 max-w-2xl">
              {subtitle}
            </p>
          </div>
        </section>
    );
}