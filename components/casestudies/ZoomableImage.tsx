"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ZoomableImageProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}

export default function ZoomableImage({
  children,
  caption,
  className = "relative w-full h-80 rounded-xl overflow-hidden border border-gray-800 bg-gray-950",
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract alt text automatically if no explicit caption prop is supplied
  const childElement = React.Children.only(children) as React.ReactElement<{ alt?: string }>;
  const activeCaption = caption || childElement?.props?.alt;

  // Escape key + disable scroll on open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-99999! flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
      onClick={() => setIsOpen(false)}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="fixed top-6 right-6 z-100000! px-4 py-2 rounded-full bg-gray-800 hover:bg-emerald-500 text-white hover:text-black border border-gray-700 flex items-center gap-2 text-sm font-medium transition-colors shadow-2xl"
        aria-label="Close modal"
      >
        <span>Close</span>
        <span className="font-mono">✕</span>
      </button>

      {/* Main Lightbox Frame */}
      <div
        className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Centered Image Container with fill overrides */}
        <div className="relative w-full h-full flex items-center justify-center [&_span]:w-auto! [&_span]:h-auto! [&_span]:relative! [&_img]:w-auto! [&_img]:h-auto! [&_img]:max-w-full [&_img]:max-h-[82vh] [&_img]:object-contain [&_img]:rounded-lg [&_img]:shadow-2xl [&_img]:mx-auto">
          {children}
        </div>

        {/* Compact Floating Caption Box */}
        {activeCaption && (
          <div className="absolute bottom-4 right-4 z-20 max-w-sm bg-gray-900/90 backdrop-blur-md border border-gray-700/80 rounded-xl px-4 py-3 shadow-2xl pointer-events-none">
            <p className="text-xs font-mono text-emerald-400 mb-1 uppercase tracking-wider">Caption</p>
            <p className="text-sm text-gray-200 leading-snug">{activeCaption}</p>
          </div>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Thumbnail Container */}
      <div
        onClick={() => setIsOpen(true)}
        className={`group relative cursor-pointer hover:border-emerald-500/50 transition-colors ${className}`}
      >
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
          <span className="text-xs font-mono font-medium text-white bg-gray-900/90 px-3 py-1.5 rounded-full border border-gray-700 flex items-center gap-2">
            🔍 Click to expand
          </span>
        </div>
        {children}
      </div>

      {typeof window !== "undefined" && createPortal(modal, document.body)}
    </>
  );
}