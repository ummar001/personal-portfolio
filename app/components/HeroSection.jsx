import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import Spline from '@splinetool/react-spline';


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00FFFF] to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
            Hello there, I&apos;m{" "}
          </h1>
          <TypeAnimation
            sequence={[
              "Ummar",
              1000,
              "",
              1000,
              "A Junior Web Developer",
              1000,
              "A Frontend Enthusiast",
              1000,
              "A Backend Explorer",
              1000,
              " A Passionate Learner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3em",
              display: "inline-block",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
          <br />

          <p className="text-[#00FFFF] text-lg mb-1 lg:text-xl">
            Junior Software Engineer
          </p>
          <p className="text-[#00FFFF] text-lg mb-10 lg:text-xl">
            From Manchester
          </p>
          <div>
            {/* Use Link from react-scroll for smooth scrolling */}
            <Link
              to="email" // Replace "email" with the ID of your "Contact Me" section
              smooth={true}
              duration={500}
              className="px-6 py3 rounded-full mr-4 hover:bg-slate-200 text-[#00FFFF] border border-[#00FFFF]"
            >
              Contact Me
            </Link>
            {/* Use Link for the "View Portfolio" button as well */}
            <Link
              to="projects" // Replace "portfolio" with the ID of your "View Portfolio" section
              smooth={true}
              duration={500}
              className="px-6 py3 rounded-full mr-4 hover:bg-slate-200 text-[#00FFFF] border border-[#00FFFF] mt-4 mb-5"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        {/* //been circled blue gradient effect */}



                    <div className="#">
                      {/* <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="hero image"
                  className="object-cover object-center w-full h-full"
                  layout="fill"
                />
              </div> */}

                      <div className="spline-container">
                        {/* Include the Spline component directly */}
                        <Spline
                          scene="https://prod.spline.design/k1yeluFnG47cHIid/scene.splinecode"
                          style={{ width: '70vh', height: '70vh' }}  
                        />
                      </div>
                    </div>


        
      </div>
    </section>
  );
};

export default HeroSection;
