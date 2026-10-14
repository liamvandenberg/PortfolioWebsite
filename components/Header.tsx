export default function Header() {
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0e17]/90 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name */}
        <a href="#" className="text-4xl text-emerald-400 hover:text-emerald-300" 
           style={{ fontFamily: "Great Vibes, cursive" }}>
          Liam van den Berg
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-base text-gray-300">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}