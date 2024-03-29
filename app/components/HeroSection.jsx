import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import Spline from "@splinetool/react-spline";
import TypeAnimationComponent from "../components/typeanimationcomponent/TypeAnimation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-7 lg:grid-cols-12">
        <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00FFFF] to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className="col-span-7 place-self-center text-left sm:text-left sm:align-middle "
          style={{ left: "10%", paddingRight: "45%" }}
        >
          <div className="absolute mt-20 ">
            <TypeAnimationComponent className="absolute top-0 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>
        <div className=" col-span-7 place-self-center lg:mr-24 text-center sm:text-left sm:pl-24 sx:pl-24" style={{ marginTop: '300px', textAlign: 'center' }}>
          <div>
            <p className="text-[#00FFFF] text-lg mb-0 lg:text-xl">
              Junior Software Engineer
            </p>
            <p className="text-[#00FFFF] text-lg mb-10 lg:text-xl">
              From Manchester
            </p>
            <div>
              {/* Use Link from react-scroll for smooth scrolling */}
              <Link
                to="email"
                smooth={true}
                duration={500}
                className="px-6 py3 rounded-full mr-4 hover:bg-slate-200 text-[#00FFFF] border border-[#00FFFF]"
              >
                Contact Me
              </Link>
              {/* Use Link for the "View Portfolio" button as well */}
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="px-6 py3 rounded-full mr-4 hover:bg-slate-200 text-[#00FFFF] border border-[#00FFFF] mt-4 mb-0"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>




        {/* Added missing closing curly brace for this div */}
        {/* //been circled blue gradient effect */}
        <div className="#">
          <div className="spline-container">
            {/* Include the Spline component directly */}
            <Spline
              scene="https://prod.spline.design/6KGppHgavV5FeTgw/scene.splinecode"
              style={{ width: "70vh", height: "80vh" }}
              async
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
