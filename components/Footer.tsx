import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © 2026 Liam van den Berg
        </p>

        {/* pacman C# gif */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/website/csharp_blocks_build.gif"
            alt="C# blocks building"
            unoptimized
            width={50}
            height={40}
          />
          <span className="text-sm text-gray-400 hidden sm:inline">
            The C Sharpest
          </span>
          <Image
            src="/images/website/csharp_blocks_build.gif"
            alt="C# blocks building"
            unoptimized
            width={50}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
}
