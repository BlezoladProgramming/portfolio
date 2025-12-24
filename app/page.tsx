import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";




export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <TechStack />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
