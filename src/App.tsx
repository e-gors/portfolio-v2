import About from "./sections/About";
import Contacts from "./sections/Contacts";
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
      <main className="container mx-auto px-6 lg:px-10">
       <Hero />
       <About />
       <Experiences />
       <Projects />
       <Testimonials />
       <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
