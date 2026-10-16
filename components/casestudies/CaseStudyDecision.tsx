"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface CaseStudyDecisionProps {
  number: number;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  children?: React.ReactNode;
}

export default function CaseStudyDecision({
  number,
  title,
  description,
  imagePosition = "right",
  children,
}: CaseStudyDecisionProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Escape key + prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };

    if (isZoomed) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  const ImageBlock = (
    <div
      onClick={() => children && setIsZoomed(true)}
      className={`bg-gray-900 border border-gray-800 rounded-xl h-64 flex items-center justify-center text-gray-500 overflow-hidden transition
        ${children ? "cursor-zoom-in hover:border-emerald-500/50" : ""}
      `}
    >
      {children || "Screenshot / Diagram"}
    </div>
  );

  // Lightbox markup
  const lightbox = (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]"
      onClick={() => setIsZoomed(false)}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsZoomed(false)}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 flex items-center justify-center text-white transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="rounded-xl overflow-hidden shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {imagePosition === "left" && ImageBlock}

        <div>
          <h3 className="text-xl font-medium mb-3 text-emerald-400">
            {number}. {title}
          </h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {imagePosition === "right" && ImageBlock}
      </div>

      {/* Only render portal on the client when zoomed */}
      {isZoomed && typeof window !== "undefined"
        ? createPortal(lightbox, document.body)
        : null}
    </>
  );
}