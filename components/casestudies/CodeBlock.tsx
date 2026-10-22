interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  code,
  language = "csharp",
  filename,
}: CodeBlockProps) {
  return (
    <div className="my-6 rounded-xl border border-gray-800 bg-[#0d1117] overflow-hidden shadow-xl">
      {/* Optional Top Bar (Filename / Language) */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900/80 border-b border-gray-800 text-xs font-mono text-gray-400">
          <span>{filename}</span>
          <span className="uppercase tracking-wider text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            {language}
          </span>
        </div>
      )}

      {/* Code Body */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-200 leading-relaxed whitespace-pre">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}