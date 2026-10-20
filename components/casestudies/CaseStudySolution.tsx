interface CaseStudySolutionProps {
    children: React.ReactNode;
}

export default function CaseStudyOverview({ children }: CaseStudySolutionProps) {

    return (
        <div className="flex-1">
            <h2 className="text-gray-400 text-2xl font-semibold mb-4">The Solution</h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
                {children}
            </div>
        </div>
    );
}