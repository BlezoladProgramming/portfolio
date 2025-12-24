export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-blue-500">BLEZOLAD</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* CTA */}
        <a href="#contact" className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition text-sm font-medium">
          Hire Me
        </a>
      </div>
    </header>
  );
}
