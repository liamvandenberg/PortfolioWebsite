import Image from "next/image";
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
              className="group min-w-75 max-w-75 shrink-0 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-emerald-500/40 transition overflow-hidden flex flex-col"
            >
              {/* Image / Preview */}
              <div className="relative h-44 w-full bg-gray-800 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                    Project Preview
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}