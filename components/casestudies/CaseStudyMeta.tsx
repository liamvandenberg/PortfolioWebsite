interface MetaItem {
  label: string;
  value: string;
}

interface CaseStudyMetaProps {
  items: MetaItem[];
}

export default function CaseStudyMeta({ items }: CaseStudyMetaProps) {
  return (
    <div className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-28 space-y-6 bg-gray-900/60 border border-gray-800 rounded-xl p-5">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <p className="font-medium whitespace-pre-line text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}