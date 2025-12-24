export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What I help teams build
          </h2>
          <p className="mt-4 text-gray-400">
            I design and build backend-heavy systems that are secure, scalable,
            and ready for real-world traffic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {[
            {
              title: "Backend & API Development",
              desc: "Production-grade APIs, authentication systems, and business logic built with scalability in mind.",
            },
            {
              title: "High-Performance Web Apps",
              desc: "Fast, SEO-friendly, and resilient applications using modern frameworks like Next.js.",
            },
            {
              title: "System Architecture & Scaling",
              desc: "Designing systems that handle growth, traffic spikes, and complex workflows without breaking.",
            },
            {
              title: "Security & Reliability",
              desc: "Secure-by-default design, data protection, and resilience against common attack vectors.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-xl bg-white/5 hover:bg-white/10 transition hover:-translate-y-1 duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
