import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./DistortionAnimation.module.css";

const TypeAnimationComponent = () => {
  const sequences = [
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
  ];

  return (
    <div className="container">
      <h1 className="text-white mb-1 text-4xl sm:text-10 lg:text-5xl font-bold">
        Hello there, I&apos;m{" "}
      </h1>
      <div className={styles["custom-type-animation"]}>
        <TypeAnimation
          sequence={sequences}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <span className={styles["cursor"]}>|</span>
      </div>
      <br />
    </div>
  );
};

export default TypeAnimationComponent;
