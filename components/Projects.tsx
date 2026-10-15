import { projects } from "@/data/projects";

export default function Projects() {
  // Show newest projects first
  const sortedProjects = [...projects].reverse();

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-emerald-400 mb-10">
        RECENT PROJECTS
      </h2>

      {/* Centered horizontal scroll container */}
      <div className="flex justify-center">
        <div className="flex gap-10 overflow-x-auto pb-4 max-w-full">
          {sortedProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-75 max-w-75 shrink-0 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-emerald-500/40 transition overflow-hidden"
            >
              
              {/* Image / Preview */}
              <div className="h-44 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
                Project Preview
              </div>

              {/* Text content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}