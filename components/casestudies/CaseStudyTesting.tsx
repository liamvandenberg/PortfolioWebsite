import React from "react";

export interface TestMetric {
  label: string;
  value: string | number;
  subtext?: string;
}

interface CaseStudyTestingProps {
  title?: string;
  metrics: TestMetric[];
  children: React.ReactNode; // For testing strategy text/paragraphs
}

export default function CaseStudyTesting({
  title = "Testing, Reliability & CI/CD",
  metrics,
  children,
}: CaseStudyTestingProps) {
  return (
    <div className="border border-gray-800 rounded-xl bg-[#111623] p-8">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold text-white mb-6">{title}</h3>

      {/* Metrics Grid */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#0a0e17] border border-gray-800/80 rounded-lg p-5 flex flex-col justify-between"
            >
              <span className="text-sm text-gray-400 font-medium mb-1">
                {metric.label}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono text-emerald-400">
                  {metric.value}
                </span>
                {metric.subtext && (
                  <span className="text-xs text-gray-500">{metric.subtext}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Text Field */}
      <div className="space-y-4 text-gray-300 leading-relaxed text-base pt-4 border-t border-gray-800/60">
        {children}
      </div>
    </div>
  );
}