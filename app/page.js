// import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import LeftSide from "./components/LeftSide";
import WhatIDo from "./components/WhatIDo";
import SkillsComponent from "./components/SkillsSection.";

import "./page.css"; // Import your CSS file
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <br></br>
      <section className="full-screen-section">
        <HeroSection />
      </section>
      <section className="full-screen-section">
        <AboutSection />
      </section>
      <section className="full-screen-section">
        <LeftSide />
      </section>
      <section className="full-screen-section">
        <WhatIDo />
      </section>
      <section className="full-screen-section">
        <SkillsComponent />
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="full-screen-section">
        <ProjectsSection />
      </section>
    </main>
  );
}
