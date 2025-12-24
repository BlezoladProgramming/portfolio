"use client";

import { useRef } from "react";

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "School Management Portal",
      description:
        "A full academic management system handling student registration, course allocation, results, transcripts, and admin workflows.",
      features: [
        "Role-based authentication (Admin, Lecturer, Student)",
        "Secure backend APIs & database design",
        "Scalable structure for multiple departments",
      ],
      stack: "Next.js, Node.js, MongoDB",
      image: "/project1.jpg", // replace with your image path
    },
    {
      title: "Backend API Platform",
      description:
        "A backend-heavy system providing authentication, rate limiting, and data services for multiple client applications.",
      features: [
        "JWT authentication & access control",
        "Rate limiting & request validation",
        "Designed for high traffic",
      ],
      stack: "Node.js, Express, MongoDB",
      image: "/project2.jpg",
    },
    {
      title: "E-commerce Dashboard",
      description: "An admin dashboard for managing e-commerce products, orders, and analytics.",
      features: [
        "Real-time data visualization",
        "Product & inventory management",
        "Responsive design",
      ],
      stack: "React, Node.js, MongoDB",
      image: "/project3.jpg",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      features: ["Responsive UI/UX design", "SEO optimized", "Fast performance"],
      stack: "Next.js, Tailwind CSS",
      image: "/project4.jpg",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="work" className="py-24 px-6 bg-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          <p className="mt-4 text-gray-400">
            A few systems I’ve built — focused on performance, reliability, and real-world usage.
          </p>
        </div>

        {/* Slider Controls */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 z-10"
        >
          &#8592;
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 z-10"
        >
          &#8594;
        </button>

        {/* Scrollable Projects */}
        <div
          ref={sliderRef}
          className="flex space-x-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 w-80 md:w-96 bg-white/10 p-6 rounded-xl space-y-4"
            >
              <div
                className="h-56 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                {project.features.map((feat, i) => (
                  <li key={i}>• {feat}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-gray-500">Stack: {project.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
