import React from "react";
import Spline from "@splinetool/react-spline";
import BlueDot from './bluedotcomponent/BlueDot'

const AboutSection = () => {
  return (
    <section className="text-white full-screen-section parallax pb-50">
      
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00FFFF] to-transparent rounded-full blur-lg top-full right-0 -translate-y-1/3"></div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16 sm:grid sm:grid-cols-1">
        <div className="text-center pl-10 pr-10 md:pr-20">
          <h2 className="text-3xl font-bold text-center md:pl-8 md:pr-20 text-[#00FFFF]">
            About me
          </h2>
          <p>
            Greetings! I&apos;m Ummar, a junior full stack web developer
            passionate about creating interactive and responsive web
            applications. My journey began with a comprehensive software
            engineering boot camp, where I delved into HTML, CSS, JavaScript,
            Python, React, and SQL.
          </p>
          <p>
            Dedicated to continuous learning, I actively advance my skills
            through hands-on projects. Despite my junior status, I&apos;m
            enthusiastic about applying my evolving expertise to groundbreaking
            projects. Beyond coding, I bring valuable experience in data
            analytics from my background as a supply chain logistics
            professional and business consultant.
          </p>
          <p>
            As a team player, I look forward to collaborating with others to
            develop exceptional applications. Let&apos;s embark on this tech
            journey together!
          </p>
        </div>

        



        {/* Container for the Spline component without parallax effect */}
        <div className="spline-container pl-10  md:mt-0 mt-8 pb-6"  >
          {/* Include the new Spline component */}
          <Spline
            scene="https://prod.spline.design/r5jbX8-1nua6Ert3/scene.splinecode"
            style={{
              width: "100%", // Set the width to 100% to take up the full width
              height: "100vh",
              zIndex: -1,
              
               // Set the height to 100vh for full viewport height
            }}
          />
        </div>

        {/* Additional content, if any */}
        <h1></h1>
      </div>
    </section>
  );
};

export default AboutSection;
