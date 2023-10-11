import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Projects1 from "./components/Projects1";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/stars";
import Footer from "./components/Footer";
import Logo from "./assets/logos/black.png";

function App() {
  const [active, setActive] = useState("");
  return (
    <BrowserRouter>
      <div className="bg-[#050816] text-white h-screen snap-y snap-mandatory overflow-y-scroll">
        <section id="header">
          <Header />
        </section>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience" className=" mt-5">
          <WorkExperience />
        </section>
        <section id="skills" className=" mt-5">
          <Skills />
        </section>
        <section id="projects" className=" mt-5">
          <Projects />
        </section>
        <section id="projects1" className=" mt-5">
          <Projects1 />
        </section>
        <section id="contact" className=" mt-5 relative z-0">
          <Contact />
          <Footer />
          <StarsCanvas />
        </section>
        <a
          href="#header"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="sticky bottom-4 w-full cursor-pointer z-[999]">
            <div className="flex items-center justify-center">
              <div
                className="w-12 h-12 md:h-12 md:w-12 bg-gray-200/50 rounded-full filter  grayscale-100
              hover:bg-white cursor-pointer transition-all duration-300 ease-in-out"
              >
                <img
                  href="#header"
                  src={Logo}
                  alt="SB Logo"
                  className="w-12 h-12 md:h-12 md:w-12 object-contain rounded-full mx-auto"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
