import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-white font-sans text-black dark:bg-black dark:text-zinc-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
