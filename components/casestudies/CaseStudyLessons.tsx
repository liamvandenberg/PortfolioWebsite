import React from "react";

export interface LessonItem {
  title: string;
  description: string;
}

interface CaseStudyLessonsProps {
  title?: string;
  lessons: LessonItem[];
}

export default function CaseStudyLessons({
  title = "Key Takeaways & Lessons Learned",
  lessons,
}: CaseStudyLessonsProps) {
  return (
    <div className="border border-gray-800 rounded-xl bg-[#111623] p-8">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold text-white mb-8">{title}</h3>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="bg-[#0a0e17] border border-gray-800/80 rounded-lg p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-colors"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                  {index + 1}
                </span>
                <h4 className="text-lg font-medium text-white">
                  {lesson.title}
                </h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {lesson.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}