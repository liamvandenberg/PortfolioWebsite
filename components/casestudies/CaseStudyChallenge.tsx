"use client";

import { useState } from "react";

interface CaseStudyChallengeProps {
  number: number;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function CaseStudyChallenge({
  number,
  title,
  children,
  defaultExpanded = false,
}: CaseStudyChallengeProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border border-gray-800 rounded-xl bg-[#111623] p-6 md:p-8 transition-all duration-200 shadow-lg">
      {/* Clickable Header / Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left group focus:outline-none"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-sm font-semibold border border-emerald-500/20 shrink-0">
            {number}
          </span>
          <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
        </div>

        {/* Action Toggle Indicator */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline text-xs font-mono text-gray-400 group-hover:text-emerald-400 transition-colors">
            {isExpanded ? "Collapse" : "Read Deep Dive"}
          </span>
          <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                isExpanded ? "rotate-180 text-emerald-400" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Collapsed Text Preview */}
      {!isExpanded && (
        <div
          onClick={() => setIsExpanded(true)}
          className="relative mt-4 cursor-pointer group/preview"
        >
          <div
            className="text-gray-400 text-sm leading-relaxed line-clamp-2 
              [&_figure]:hidden [&_ul]:hidden [&_ol]:hidden"
          >
            {children}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-[#111623] to-transparent pointer-events-none" />
        </div>
      )}

      {/* Full Content View when expanded */}
      {isExpanded && (
        <div
          className="mt-6 pt-6 border-t border-gray-800/60 text-gray-300 leading-relaxed space-y-6 text-base
            [&_p]:leading-7 [&_p]:text-gray-300
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-gray-300
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
            [&_code]:bg-gray-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-emerald-400 [&_code]:font-mono [&_code]:text-sm
            [&_figure]:my-8 [&_figure]:w-full
            [&_figure_figcaption]:text-center [&_figure_figcaption]:text-xs [&_figure_figcaption]:font-mono [&_figure_figcaption]:text-gray-400 [&_figure_figcaption]:pt-3 [&_figure_figcaption]:px-2"
        >
          {children}
        </div>
      )}
    </div>
  );
}