"use client";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "decisions", label: "Key Technical Decisions" },
  // You can add more later (e.g. Results, Lessons Learned...)
];

export default function CaseStudyNav() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden lg:block w-48 shrink-0">
      <div className="sticky top-28 space-y-1">
        <p className="text-xs font-medium text-gray-500 tracking-widest mb-4">
          ON THIS PAGE
        </p>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="block w-full text-left text-sm text-gray-400 hover:text-emerald-400 transition py-1.5"
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}