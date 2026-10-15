interface MetaItem {
  label: string;
  value: string;
}

interface CaseStudyMetaProps {
  items: MetaItem[];
}

export default function CaseStudyMeta({ items }: CaseStudyMetaProps) {
  return (
    <div className="md:w-64 p-6 bg-gray-900/60 border border-gray-800 rounded-2xl shrink-0 space-y-6 shadow-xl backdrop-blur-sm">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-sm text-gray-400 mb-1">{item.label}</p>
          <p className="font-medium whitespace-pre-line text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}