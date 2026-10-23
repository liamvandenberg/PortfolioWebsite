"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ZoomableImage from "./ZoomableImage";

interface CaseStudyDecisionProps {
  number: number;
  title: string;
  description: string;
  caption?: string;
  imagePosition?: "left" | "right";
  children?: React.ReactNode;
}

export default function CaseStudyDecision({
  number,
  title,
  description,
  caption,
  imagePosition = "right",
  children,
}: CaseStudyDecisionProps) {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const imageNodes = React.Children.toArray(children);
  const hasImages = imageNodes.length > 0;

  // Arrow key navigation + Escape handling when gallery is zoomed
  useEffect(() => {
    if (zoomedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedIndex(null);
      if (e.key === "ArrowRight" && zoomedIndex < imageNodes.length - 1) {
        setZoomedIndex((prev) => (prev !== null ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft" && zoomedIndex > 0) {
        setZoomedIndex((prev) => (prev !== null ? prev - 1 : 0));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [zoomedIndex, imageNodes.length]);

  // Extract caption from active image alt or explicit prop
  const currentImageNode =
    zoomedIndex !== null
      ? (imageNodes[zoomedIndex] as React.ReactElement<{ alt?: string }>)
      : null;
  const activeCaption = caption || currentImageNode?.props?.alt;

  // Render Image Content in Page Flow
  const renderImageContent = () => {
    if (!hasImages) return null;

    // Single Image: Uses ZoomableImage component directly
    if (imageNodes.length === 1) {
      return (
        <ZoomableImage caption={caption} className="relative bg-gray-900 border border-gray-800 rounded-xl h-72 flex items-center justify-center overflow-hidden">
          {imageNodes[0]}
        </ZoomableImage>
      );
    }

    // Multiple Images: Grid Thumbnails triggering gallery lightbox
    return (
      <div className="grid grid-cols-2 gap-4">
        {imageNodes.map((node, idx) => {
          // Automatically inject sizes prop into grid images to clear console warnings
          const sizedNode = React.isValidElement(node)
            ? React.cloneElement(node as React.ReactElement<{ sizes?: string }>, {
                sizes: "(max-width: 768px) 100vw, 400px",
              })
            : node;

          return (
            <div
              key={idx}
              onClick={() => setZoomedIndex(idx)}
              className={`group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition cursor-pointer hover:border-emerald-500/50 ${
                imageNodes.length === 3 && idx === 2 ? "col-span-2 h-48" : "h-40"
              }`}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-[11px] font-mono font-medium text-white bg-gray-900/90 px-2.5 py-1 rounded-full border border-gray-700">
                  View #{idx + 1}
                </span>
              </div>
              {sizedNode}
            </div>
          );
        })}
      </div>
    );
  };

  // Gallery Modal for Multi-Image Items (with Arrow Key Controls)
  const multiGalleryModal =
    zoomedIndex !== null && imageNodes.length > 1 ? (
      <div
        className="fixed inset-0 z-99999! flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
        onClick={() => setZoomedIndex(null)}
      >
        <button
          onClick={() => setZoomedIndex(null)}
          className="fixed top-6 right-6 z-100000! px-4 py-2 rounded-full bg-gray-800 hover:bg-emerald-500 text-white hover:text-black border border-gray-700 flex items-center gap-2 text-sm font-medium transition-colors shadow-2xl"
          aria-label="Close modal"
        >
          <span>Close</span>
          <span className="font-mono">✕</span>
        </button>

        <div className="fixed top-6 left-6 z-100000! px-3.5 py-1.5 rounded-full bg-gray-800/90 border border-gray-700 text-xs font-mono text-gray-300 shadow-xl">
          Image {zoomedIndex + 1} of {imageNodes.length} (Use ← → keys)
        </div>

        <div
          className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full flex items-center justify-center [&_span]:w-auto! [&_span]:h-auto! [&_span]:relative! [&_img]:w-auto! [&_img]:h-auto! [&_img]:max-w-full [&_img]:max-h-[82vh] [&_img]:object-contain [&_img]:rounded-lg [&_img]:shadow-2xl [&_img]:mx-auto">
            {imageNodes[zoomedIndex]}
          </div>

          {activeCaption && (
            <div className="absolute bottom-4 right-4 z-20 max-w-sm bg-gray-900/90 backdrop-blur-md border border-gray-700/80 rounded-xl px-4 py-3 shadow-2xl pointer-events-none">
              <p className="text-xs font-mono text-emerald-400 mb-1 uppercase tracking-wider">Caption</p>
              <p className="text-sm text-gray-200 leading-snug">{activeCaption}</p>
            </div>
          )}

          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
              }}
              disabled={zoomedIndex === 0}
              className="pointer-events-auto p-3 rounded-full bg-gray-900/90 hover:bg-emerald-500 text-white hover:text-black border border-gray-700 disabled:opacity-20 disabled:hover:bg-gray-900 disabled:hover:text-white transition shadow-xl"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedIndex((prev) => (prev !== null && prev < imageNodes.length - 1 ? prev + 1 : prev));
              }}
              disabled={zoomedIndex === imageNodes.length - 1}
              className="pointer-events-auto p-3 rounded-full bg-gray-900/90 hover:bg-emerald-500 text-white hover:text-black border border-gray-700 disabled:opacity-20 disabled:hover:bg-gray-900 disabled:hover:text-white transition shadow-xl"
            >
              →
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div
        className={
          hasImages
            ? "grid md:grid-cols-2 gap-12 items-center"
            : "w-full max-w-none"
        }
      >
        {hasImages && imagePosition === "left" && renderImageContent()}

        <div>
          <h3 className="text-xl font-medium mb-3 text-emerald-400">
            {number}. {title}
          </h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {hasImages && imagePosition === "right" && renderImageContent()}
      </div>

      {typeof window !== "undefined" &&
        createPortal(multiGalleryModal, document.body)}
    </>
  );
}