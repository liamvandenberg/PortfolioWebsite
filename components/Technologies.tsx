import {
  SiSharp,
  SiDotnet,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiLinux,
} from "react-icons/si";

const technologies = [
  {
    category: "Backend",
    items: [
      { name: "C#", icon: SiSharp },
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Entity Framework Core", icon: SiDotnet },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-emerald-400 mb-10">
        TECHNOLOGIES
      </h2>

      <div className="space-y-8">
        {technologies.map((group) => (
          <div key={group.category}>
            <h3 className="text-gray-400 text-sm mb-5">{group.category}</h3>

            <div className="flex flex-wrap gap-4">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-sm text-gray-300"
                >
                  <tech.icon className="text-xl text-emerald-400" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}