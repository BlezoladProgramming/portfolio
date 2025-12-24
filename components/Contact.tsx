export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s build something serious
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          If you’re building a platform that needs to scale, stay secure,
          and perform under real traffic — I can help. Reach out through any method below.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">

          <a
            href="mailto:blezolad.1@gmail.com"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-md font-medium"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="px-8 py-4 border border-white/20 hover:border-white/40 transition rounded-md"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            className="px-8 py-4 border border-white/20 hover:border-white/40 transition rounded-md"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/+2349067903462"
            target="_blank"
            className="px-8 py-4 bg-green-600 hover:bg-green-500 transition rounded-md font-medium"
          >
            WhatsApp
          </a>

        </div>

        {/* Optional Contact Form */}
        <form className="mt-12 max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-md bg-white/10 text-white border border-white/20"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-md bg-white/10 text-white border border-white/20"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded-md bg-white/10 text-white border border-white/20"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-md font-medium"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
