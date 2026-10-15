import Link from "next/link";

export default function CaseStudyCTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <p className="text-gray-400 mb-6">Want to see more of my work?</p>
      <Link
        href="/#projects"
        className="inline-block px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition"
      >
        Back to Projects
      </Link>
    </section>
  );
}