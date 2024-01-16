import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationComponent = () => {
  return (
    <div>
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
          "A Passionate Learner",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "3em",
          display: "inline-block",
          fontWeight: "bold",
          color: "white",
        }}
        repeat={Infinity}
      />
      <br />
    </div>
  );
};

export default TypeAnimationComponent;
