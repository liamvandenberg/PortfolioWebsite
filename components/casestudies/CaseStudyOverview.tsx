interface CaseStudyOverviewProps {
    children: React.ReactNode;
}

export default function CaseStudyOverview({ children }: CaseStudyOverviewProps) {

    return (
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <div className="text-gray-300 space-y-4 leading-rexlaxed">
                {children}
            </div>
        </div>
    );
}