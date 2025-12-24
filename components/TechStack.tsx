export default function TechStack() {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          Technologies I work with
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            "TypeScript",
            "Node.js",
            "Next.js",
            "MySQL",
            "MongoDB",
            "Redis",
            "Tailwind CSS",
            "AWS",
            "REST APIs",
            "PHP",
          ].map((tech) => (
            <div
              key={tech}
              className="text-center py-4 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition hover:-translate-y-1 duration-300 text-gray-200 text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
