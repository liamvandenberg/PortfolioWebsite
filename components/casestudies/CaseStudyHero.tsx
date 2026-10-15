import Image from "next/image";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  logo?: string;      // optional logo prop
  logoAlt?: string;   // recommended for accessibility
}

export default function CaseStudyHero({ title, subtitle, logo, logoAlt = "Logo" }: CaseStudyHeroProps) {
    return (
        <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-emerald-400 text-sm font-medium tracking-widest mb-4">
          CASE STUDY
        </p>
        {/* Flex container with space-between: title on left, circular logo on right */}
        <div className="flex items-center justify-between gap-6 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {title}
          </h1>
          
          {logo && (
            <div className="w-16 h-16 md:w-50 md:h-50 rounded-full bg-white border border-gray-700 flex items-center justify-center p-3 shrink-0 overflow-hidden shadow-inner">
              <Image width={200} height={200}
                src={logo} 
                alt={logoAlt} 
                className="w-full h-full object-contain" 
              />
            </div>
          )}
        </div>
        <p className="text-xl text-gray-300 max-w-2xl">
          {subtitle}
        </p>
      </section>
    );
}