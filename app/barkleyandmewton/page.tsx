import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/casestudies/CaseStudyHero";
import CaseStudyMeta from "@/components/casestudies/CaseStudyMeta";
import CaseStudyOverview from "@/components/casestudies/CaseStudyOverview";
import CaseStudyProblem from "@/components/casestudies/CaseStudyProblem";
import CaseStudySolution from "@/components/casestudies/CaseStudySolution";
import CaseStudyDecision from "@/components/casestudies/CaseStudyDecision";
import CaseStudyChallenge from "@/components/casestudies/CaseStudyChallenge";
import CaseStudyTesting from "@/components/casestudies/CaseStudyTesting";
import CaseStudyLessons from "@/components/casestudies/CaseStudyLessons";
import CaseStudyNav from "@/components/casestudies/CaseStudyNav";
import CaseStudyCTA from "@/components/casestudies/CaseStudyCTA";

import Link from "next/link";

import { barkleyAndMewtonData } from "@/data/barkleyandmewtondata";

export default function CaseStudyPage() {
  const data = barkleyAndMewtonData;

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

      <CaseStudyHero {...data.hero} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main layout container */}
        <div className="flex gap-12 items-start">
          
          {/* Sticky navigation */}
          <div className="hidden lg:block sticky top-24 self-start">
            <CaseStudyNav />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 mb-20">
              <div className="space-y-20">
                <section id="overview">
                  <CaseStudyOverview>
                    {data.overviewHtml}
                  </CaseStudyOverview>
                </section>

                <section id="problem">
                  <CaseStudyProblem>
                    {data.problemHtml}
                  </CaseStudyProblem>
                </section>

                <section id="solution">
                  <CaseStudySolution>
                    {data.solutionHtml}
                  </CaseStudySolution>
                </section>
              </div>

              {/* Meta strictly confined to top section */}
              <div>
                <CaseStudyMeta items={data.metaItems} />
              </div>
            </div>

            {/*Engineering Decisions */}
            <section id="decisions" className="mb-20 pt-12 border-t border-gray-800">
              <h2 className="text-2xl font-semibold mb-10 text-gray-400">
                Engineering Decisions
              </h2>
              <div className="space-y-20">
                {data.decisions.map((dec) => (
                  <CaseStudyDecision key={dec.number} {...dec}>
                    {dec.children}
                  </CaseStudyDecision>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section
              id="challenges"
              className="pt-12 border-t border-gray-800 space-y-6 mb-20"
            >
              <h2 className="text-2xl font-semibold mb-8 text-gray-400">
                Engineering Challenges
              </h2>
              {data.challenges.map((challenge, idx) => (
                <CaseStudyChallenge
                  key={idx}
                  number={idx + 1}
                  title={challenge.title}
                >
                  {challenge.content}
                </CaseStudyChallenge>
              ))}
            </section>

            <section id="testing" className="pt-12 border-t border-gray-800 mb-20">
              <CaseStudyTesting metrics={data.testing.metrics}>
                {data.testing.strategyContent}
              </CaseStudyTesting>
            </section>

            <section id="lessons" className="pt-12 border-t border-gray-800">
              <CaseStudyLessons lessons={data.lessons} />
            </section>

          </div>
        </div>
      </div>

      <CaseStudyCTA />
      <Footer />
    </main>
  );
}