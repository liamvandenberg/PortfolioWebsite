import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/casestudies/CaseStudyHero";
import CaseStudyMeta from "@/components/casestudies/CaseStudyMeta";
import CaseStudyOverview from "@/components/casestudies/CaseStudyOverview";
import CaseStudyDecision from "@/components/casestudies/CaseStudyDecision";
import CaseStudyNav from "@/components/casestudies/CaseStudyNav";
import CaseStudyCTA from "@/components/casestudies/CaseStudyCTA";

import Link from "next/link";
import { loremIpsum , loremIpsumLong, loremIpsumVeryVeryLong } from "@/data/loremipsum";



export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#0a0e17] text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link
          href="/#projects"
          className="text-sm text-gray-400 hover:text-emerald-400 transition"
        >
          ← Back to projects
        </Link>
      </div>

      {/* Hero */}
      <CaseStudyHero
        title="Barkley&Mewton Business Platform"
        subtitle="A modern business platform for the Barkley&Mewton grooming parlour. Built with C#, ASP.NET Core, Next.Js, TypeScript, Tailwind CSS, and PostgreSQL."
        logo="/logos/barkleyandmewtonlogo.png"
        logoAlt="Barkley&Mewton Logo"
      />

      {/* 3-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-12">
          {/* LEFT - Navigation */}
          <CaseStudyNav />

          {/* CENTER - Main content */}
          <div className="flex-1 min-w-0">
            {/* Overview */}
            <section id="overview" className="mb-20">
              <CaseStudyOverview>
                <p>
                  Barkley&Mewton is a modern business platform designed for the Barkley&Mewton grooming parlour. The platform was built with a focus on providing a seamless user experience for both customers and staff, leveraging the power of C#, ASP.NET Core, Next.Js, TypeScript, Tailwind CSS, and PostgreSQL.
                </p>
                <p>
                  The project involved creating a responsive web application that allows customers to book appointments, view services, and make payments online. For the staff, the platform provides tools for managing appointments, customer information, and service offerings.
                </p>
              </CaseStudyOverview>
            </section>

            {/* Key Technical Decisions */}
            <section id="decisions">
              <h2 className="text-2xl font-semibold mb-12 text-white">Key Technical Decisions</h2>

              <div className="space-y-20">
                {/* Decision 1 */}
                <CaseStudyDecision
                  number={1}
                  title="ASP.NET Core for Backend"
                  description={loremIpsum}
                  imagePosition="left"
                >
                  {/* This is how images are used with the CaseStudyDecision component */}
                  <img src="/logos/barkleyandmewtonlogo.png" alt="test image for now" className="w-auto h-auto object-cover"/>
                </CaseStudyDecision>

                {/* Decision 2 */}
                <CaseStudyDecision
                  number={2}
                  title="Entity Framework Core + PostgreSQL"
                  description={loremIpsum}
                  imagePosition="right"
                />

                {/* Decision 3 */}
                <CaseStudyDecision
                  number={3}
                  title="Next.js for Frontend"
                  description={loremIpsumLong}
                  imagePosition="left"
                >
                  <img src="/logos/barkleyandmewtonlogo.png" alt="test image for now" className="w-auto h-auto object-cover"/>
                </CaseStudyDecision>

                {/* Decision 4 */}
                <CaseStudyDecision
                  number={4}
                  title="Dockerized Environment"
                  description={loremIpsumVeryVeryLong}
                  imagePosition="left"
                />
              </div>
            </section>
          </div>

          {/* RIGHT - Meta */}
          <CaseStudyMeta
            items={[
              { label: "Year", value: "2026" },
              { label: "Duration", value: "approx. 3 months & ongoing" },
              { label: "Role", value: "Full Stack Developer" },
              { label: "Stack", value: "C# · ASP.NET Core · Next.Js · TypeScript · Tailwind CSS · PostgreSQL" },
              { label: "Type", value: "Freelance Business Project" }
            ]}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <CaseStudyCTA />

      <Footer />
    </main>
  );
}