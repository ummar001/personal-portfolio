// MouseParticles.js
import React from "react";
import Particles from "react-mouse-particles";

const MouseParticles = () => {
  return (
    <Particles
      // You can customize the options as per your preference
      options={{
        color: "white",
        lines: {
          color: "white",
        },
        particles: {
          color: "white",
          links: {
            color: "white",
          },
        },
      }}
    />
  );
};

export default MouseParticles;