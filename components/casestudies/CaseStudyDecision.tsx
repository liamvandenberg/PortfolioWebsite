interface CaseStudyDecisionProps {
  number: number;
  title: string;
  description: string;
  imagePosition?: "left" | "right"; // controls which side the image is on
  children?: React.ReactNode; // optional image / diagram
}

export default function CaseStudyDecision({number,title,description,imagePosition = "right",children,}: CaseStudyDecisionProps) {
  // Check if an image/diagram was actually passed as children
  const hasImage = Boolean(children);

  const ImageBlock = hasImage ? (
    <div className="bg-gray-900 border border-gray-800 rounded-xl h-56 flex items-center justify-center text-gray-500 overflow-hidden">
      {children}
    </div>
  ) : null;

  return (
    <div className={`grid ${hasImage ? "md:grid-cols-2" : "grid-cols-1"} gap-12 items-center`}>
      {hasImage && imagePosition === "left" && ImageBlock}

      <div>
        <h3 className="text-xl font-medium mb-3 text-emerald-400">
          {number}. {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {hasImage && imagePosition === "right" && ImageBlock}
    </div>
  );
}