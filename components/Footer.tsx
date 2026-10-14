export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Liam van den Berg
        </p>

        {/* Your custom GIF */}
        <div className="flex items-center gap-3">
          <img
            src="/pacman_csharp_footer.gif"
            alt="Pac-Man eating C#"
            className="h-12 w-auto"
          />
          <span className="text-sm text-gray-400 hidden sm:inline">
            The C Sharpest
          </span>
        </div>
      </div>
    </footer>
  );
}
