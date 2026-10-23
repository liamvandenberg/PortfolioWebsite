import Link from "next/link";
import Image from "next/image";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0a0f1d] text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Top Navigation & Download Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800">
          <Link
            href="/"
            className="text-sm font-mono text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to Portfolio
          </Link>

          <a
            href="/images/website/Liam_van_den_Berg_Junior_DotNet_CV.pdf" //this is for the real CV file
            download="Liam_van_den_Berg_Resume.pdf"
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-2 rounded-lg text-sm transition flex items-center gap-2 shadow-lg"
          >
            <span>↓</span> Download PDF
          </a>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resume</h1>
          <p className="text-gray-400 text-sm">
            Software Developer · Pretoria, South Africa
          </p>
        </div>

        {/* Full-Width Scrollable Resume Preview Container */}
        <div className="bg-[#111623] border border-gray-800 rounded-2xl p-4 md:p-8 shadow-2xl">
          <div className="relative w-full rounded-xl overflow-hidden border border-gray-800 bg-white shadow-2xl">
            <Image
              src="/images/website/Liam_van_den_Berg_Junior_DotNet_CV-1.png" //This for the CV exported to a png or jpg
              alt="Liam van den Berg Resume Preview"
              width={1200}
              height={1697} 
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </main>
  );
}