"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
            Hello there, I'm{" "}
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Ummar",
              1000, // wait 1s before replacing
              "",
              1000,
              "A Junior Web Developer",
              1000,
              "Frontend Enthusiast",
              1000,
              "Backend Explorer",
              1000,
              "Passionate Learner",
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
          <br/>

          <p className="text-[#00FFFF] text-lg mb-10 lg:text-xl">
            Junior Software Engineer
          </p>
          <div>
            <button className="px-6 py3 rounded-full mr-4 hover:bg-slate-200 text-[#00FFFF] border border-[#00FFFF]">
              Contact Me
            </button>
            <button className="px-6 py3 rounded-full mr-4 hover:bg-slate-200 text-[#00FFFF] border border-[#00FFFF] mt-4 mb-5">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-5 flex items-center justify-center">
          {" "}
          {/*I've used flex for the column with the image, making it easier to center the image both vertically and horizontally. */}
          <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            {" "}
            {/*Added overflow-hidden to the container to ensure the image doesn't overflow its container. */}
            <Image
              src="/images/hero.png" // Adjust the path based on your project structure
              alt="hero image"
              className="object-cover object-center w-full h-full"
              layout="fill" // Used object-cover to ensure the image covers the container while maintaining its aspect ratio. The layout="fill" property is used to fill the entire parent container.
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
