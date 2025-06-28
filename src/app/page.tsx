import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
