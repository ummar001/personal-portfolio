import React from "react";
import dynamic from 'next/dynamic';

// Import Particles using dynamic import to ensure it's only loaded on the client side
const Particles = dynamic(() => import("react-mouse-particles"), {
  ssr: false, // Disable server-side rendering
});

const MouseParticles = () => {
  if (typeof window !== 'undefined') {
    return (
      <Particles
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
  }

  return null; // Return null if running on the server
};

export default MouseParticles;
