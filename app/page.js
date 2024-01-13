"use client";
import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Link, Element } from "react-scroll";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/componets_for_Navbar/NavBar";
import AboutSection from "./components/AboutSection";
import LeftSide from "./components/LeftSide";
import WhatIDo from "./components/WhatIDo";
import SkillsComponent from "./components/SkillsSection.";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import dynamic from 'next/dynamic';
import MouseParticles from "./components/InteractiveMouseTrail/MouseParticles";

import "./page.css"; // Import your CSS file



export default function Home() {
  return (

   <div>
    
    <ParallaxProvider>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />
        <br />

        
        <MouseParticles />
           
           
        

        <div>
          <Element name="hero">
            <Parallax y={[-40, 40]} tagouter="figure">
              <section className="full-screen-section">
                <HeroSection />
              </section>
            </Parallax>
          </Element>

          

          

          {/* <Element name="interactiveMouseTrail">
            <section className="full-screen-section">
              <DynamicInteractiveMouseTrail />
            </section>
          </Element> */}

          <Element name="about">
            <Parallax y={[-60, 40]} tagouter="figure">
              <section className="full-screen-section">
                <AboutSection />
              </section>
            </Parallax>
          </Element>
          
          
          
          <Element name="leftSide">
            <section>
              <LeftSide />
            </section>
          </Element>

          <Element name="whatIDo">
            <Parallax y={[-40, 40]} tagouter="figure">
              <section className="full-screen-section">
                <WhatIDo />
              </section>
            </Parallax>
          </Element>

          <Element name="skills">
            <Parallax y={[-40, 40]} tagouter="figure">
              <section className="full-screen-section">
                {/* <SkillsComponent /> */}
              </section>
            </Parallax>
          </Element>
        </div>

        <br />
        {/* Additional sections */}
        <Element name="projects">
          <Parallax y={[-40, 40]} tagouter="figure">
            <section className="full-screen-section">
              <ProjectsSection />
            </section>
          </Parallax>
        </Element>

        <Element name="email">
          <Parallax y={[-40, 40]} tagouter="figure">
            <section className="full-screen-section">
              <EmailSection />
            </section>
          </Parallax>
        </Element>

        
      </main>
    </ParallaxProvider>
    </div>
  );
}
