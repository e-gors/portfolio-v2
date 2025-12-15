import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CursorBubbles from "./components/CursorBubbles";

function App() {
  return (
    <>
      <Navbar />
      <CursorBubbles /> 
      <main className="min-w-screen container pt-[60px]">
       <Hero />
       <About />
       <Experiences />
       <Projects />
       <Testimonials />
       <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
