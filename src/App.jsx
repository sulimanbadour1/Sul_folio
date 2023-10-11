import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
function App() {
  return (
    <BrowserRouter>
      <div
        className="bg-[#050816] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar
  scrollbar-track-gray-300 scrollbar-thumb-[#5d509f]"
      >
        <section id="header" className="snap-proximity">
          <Header />
        </section>
        <section id="hero" className="snap-proximity">
          <Hero />
        </section>
        <section id="about" className="snap-proximity">
          <About />
        </section>
        <section id="experience" className="snap-proximity mt-5">
          <WorkExperience />
        </section>
        <section id="skills" className="snap-proximity mt-5">
          <Skills />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
