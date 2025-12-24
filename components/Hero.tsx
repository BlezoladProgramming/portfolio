export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-blue-500">BLEZOLAD</span><br/>
          High-Performance Web Systems That Don’t Break Under Pressure
        </h1>


          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Backend-heavy platforms, APIs, and modern web apps — built with
            performance, security, and scale in mind.
          </p>

     <div className="mt-8 flex gap-4">
  <a
    href="https://www.facebook.com/profile.php?id=61583227992339"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-md font-medium"
  >
    Contact me on Facebook
  </a>

  <a
    href="#projects" 
    className="px-6 py-3 border border-gray-600 hover:border-white transition rounded-md font-medium"
  >
    View Projects
  </a>
</div>
        </div>

        {/* Right: Orb Placeholder */}
        <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 blur-2xl animate-pulse"></div>

          <div className="absolute inset-0 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 opacity-60 blur-3xl animate-float"></div>
        </div>

        </div>

      </div>
    </section>
  );
}
